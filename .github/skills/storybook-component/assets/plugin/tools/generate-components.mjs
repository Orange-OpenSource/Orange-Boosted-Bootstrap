#!/usr/bin/env node
/**
 * mapping.yml → src/components/<id>.ts — un fichier de code par composant.
 *
 * Même principe que les stories CSF3 de `stories/components-playground/` :
 * chaque connexion devient une **branche d'une fonction JavaScript lisible**,
 * pas une entrée de données interprétée à l'exécution. Tables de correspondance
 * en tête, `if` par variante, littéral gabarit retourné.
 *
 * Les fichiers produits portent un en-tête « généré » mais sont **repris à la
 * main** : après la première génération, ce sont eux la source du plugin.
 * `npm run verify` reste utile — il dit alors de combien le plugin s'écarte de
 * Code Connect, ce qui est exactement l'information qu'on veut après une
 * retouche manuelle.
 *
 * Usage :
 *   node scripts/compile-components.mjs <mapping.yml> --inventory <inv.json>
 *                                       [--out src/components] [--force]
 */
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { basename, dirname, join, resolve } from 'node:path';
import YAML from 'yaml';

function argv(flag, fallback = null) {
  const i = process.argv.indexOf(flag);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

const input = process.argv.slice(2).find((a) => !a.startsWith('-') && /\.ya?ml$/i.test(a));
if (!input) {
  console.error('usage : node scripts/compile-components.mjs <mapping.yml> --inventory <inv.json> [--out dir] [--force]');
  process.exit(2);
}
const OUT = argv('--out', 'src/components');
const FORCE = process.argv.includes('--force');
const inventoryPath = argv('--inventory');

const raw = await readFile(resolve(input), 'utf8');
const doc = YAML.parse(raw);

const inventory = new Map();
if (inventoryPath) {
  const inv = JSON.parse(await readFile(resolve(inventoryPath), 'utf8'));
  for (const c of inv.composants ?? []) inventory.set(String(c.nodeId), c);
}

/* ================================================================== */
/* Nommage                                                             */
/* ================================================================== */

const deaccent = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '');

function pascal(s) {
  return deaccent(String(s))
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((p) => p[0].toUpperCase() + p.slice(1))
    .join('');
}
const camel = (s) => {
  const p = pascal(s);
  return p ? p[0].toLowerCase() + p.slice(1) : p;
};

/** Préfixes emoji des propriétés OUDS, et le qualificatif qu'ils portent. */
const EMOJI_QUALIFIER = [
  ['✏️', ''], // saisie libre — le nom nu
  ['⚠️', 'warning'], // variante d'alerte de la même propriété
  ['↪', ''], // échange d'instance
];

function stripHash(s) {
  const i = String(s).lastIndexOf('#');
  return i === -1 ? String(s) : String(s).slice(0, i);
}

/**
 * Nom d'argument JS pour une propriété Figma.
 *
 * `✏️ Label` → `label`, `⚠️ Label` → `warningLabel`, `Rounded corner` →
 * `roundedCorner`. En cas de collision entre une textuelle et une booléenne de
 * même nom, la booléenne prend le préfixe `show` — c'est la convention des
 * stories CSF3 (`helperText` / `showHelperText`).
 */
function argNameFor(figmaProp, isBoolean, taken) {
  const bare = stripHash(figmaProp);
  let qualifier = '';
  let rest = bare;
  for (const [emoji, q] of EMOJI_QUALIFIER) {
    if (rest.includes(emoji)) {
      qualifier = q;
      rest = rest.split(emoji).join(' ');
      break;
    }
  }
  let name = qualifier ? camel(qualifier + ' ' + rest) : camel(rest);
  if (!name) name = 'prop';
  if (taken.has(name)) name = isBoolean ? camel('show ' + rest) : camel(rest + ' value');
  let n = name, i = 2;
  while (taken.has(n)) n = name + i++;
  return n;
}

/** `switch` et consorts ne peuvent pas nommer une variable JS. */
const RESERVED = new Set([
  'switch', 'default', 'class', 'const', 'export', 'import', 'new', 'delete',
  'function', 'return', 'this', 'typeof', 'var', 'void', 'with', 'in', 'do',
]);
const ident = (id) => {
  const c = camel(id);
  return RESERVED.has(c) ? c + 'Component' : c;
};

/* ================================================================== */
/* Émission JS                                                         */
/* ================================================================== */

const jstr = (v) =>
  "'" + String(v).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";

/** Échappe ce qui casserait un littéral gabarit. */
const tpl = (s) => String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

/* ================================================================== */
/* Compilation d'un composant                                          */
/* ================================================================== */

class Compiler {
  constructor(comp) {
    this.comp = comp;
    this.entry = inventory.get(String(comp.nodeId).replace(/-/g, ':'));
    this.figmaProps = this.entry?.properties ?? {};

    this.taken = new Set();
    this.argOf = new Map(); // nom Figma -> nom d'argument
    this.boolArgs = new Set(); // args exposés en booléen
    this.optionsOf = new Map(); // arg -> valeurs de variante
    this.textArgs = new Set();
    this.tables = []; // lignes `const xClasses = {...}`
    this.tableBySig = new Map();
    this.usedArgs = new Set(); // args réellement lus par le rendu

    for (const [name, def] of Object.entries(this.figmaProps)) {
      const isBool =
        def.type === 'BOOLEAN' ||
        (def.type === 'VARIANT' &&
          new Set((def.variantOptions ?? []).map(String)).size === 2 &&
          (def.variantOptions ?? []).every((v) => v === 'True' || v === 'False'));
      const arg = argNameFor(name, isBool, this.taken);
      this.taken.add(arg);
      this.argOf.set(name, arg);
      this.argOf.set(stripHash(name), arg);
      if (isBool) this.boolArgs.add(arg);
      else if (def.type === 'VARIANT') this.optionsOf.set(arg, def.variantOptions ?? []);
      else this.textArgs.add(arg);
    }
  }

  /** Résolution tolérante : suffixe `#id`, emoji, casse. */
  arg(figmaProp) {
    if (this.argOf.has(figmaProp)) return this.argOf.get(figmaProp);
    const bare = stripHash(figmaProp);
    if (this.argOf.has(bare)) return this.argOf.get(bare);
    const norm = (s) => deaccent(String(s)).toLowerCase().replace(/[^a-z0-9]/g, '');
    for (const [k, v] of this.argOf) if (norm(k) === norm(figmaProp)) return v;
    // Propriété absente de l'inventaire : on la crée à la volée.
    const a = argNameFor(figmaProp, false, this.taken);
    this.taken.add(a);
    this.argOf.set(figmaProp, a);
    this.textArgs.add(a);
    return a;
  }

  use(arg) {
    this.usedArgs.add(arg);
    return arg;
  }

  /** Table de correspondance dédupliquée par contenu. */
  table(base, map) {
    const clean = {};
    for (const [k, v] of Object.entries(map)) clean[k] = v === null || v === undefined ? '' : v;
    const sig = base + '|' + JSON.stringify(clean);
    if (this.tableBySig.has(sig)) return this.tableBySig.get(sig);
    let name = base, i = 2;
    while (this.taken.has(name)) name = base + i++;
    this.taken.add(name);
    const body = Object.entries(clean).map(([k, v]) => `  ${jstr(k)}: ${jstr(v)}`).join(',\n');
    // Typée : sans quoi TypeScript refuse l'indexation par une valeur Figma.
    this.tables.push(`const ${name}: Record<string, string> = {\n${body}\n}`);
    this.tableBySig.set(sig, name);
    return name;
  }

  /** Lecture d'un argument, en rétablissant 'True'/'False' pour les tables. */
  read(arg) {
    return this.boolArgs.has(arg) ? `(${this.use(arg)} ? 'True' : 'False')` : this.use(arg);
  }

  /** Expression JS d'une valeur de prop du mapping. */
  expr(def, hint) {
    if (typeof def === 'string') return jstr(def);
    if (!def || typeof def !== 'object') return `''`;

    if ('string' in def || 'textContent' in def) {
      return this.use(this.arg(def.string ?? def.textContent));
    }
    if ('instance' in def) return this.use(this.arg(def.instance));

    if ('enum' in def) {
      const a = this.arg(def.enum.prop);
      const t = this.table(camel(a) + (hint === 'class' ? 'Classes' : 'Map'), def.enum.map);
      const lookup = `${t}[${this.read(a)}]`;
      return hint === 'class' ? lookup : `${lookup} ?? ''`;
    }
    if ('boolean' in def) {
      const b = def.boolean;
      if (typeof b === 'string') return this.use(this.arg(b));
      const a = this.arg(b.prop);
      if (!b.map) return this.use(a);
      const t = this.table(camel(a) + (hint === 'class' ? 'Classes' : 'Map'), b.map);
      const lookup = `${t}[${this.read(a)}]`;
      return hint === 'class' ? lookup : `${lookup} ?? ''`;
    }
    if ('className' in def) {
      const parts = def.className.map((v) => this.expr(v, 'class'));
      return `[\n    ${parts.join(',\n    ')}\n  ].filter(Boolean).join(' ')`;
    }
    return `''`;
  }

  /** Condition d'une branche : `layout === 'Text only'`, `!leadingIcon`. */
  cond(when) {
    const parts = [];
    for (const [prop, rawValues] of Object.entries(when ?? {})) {
      // `variant:` de mapping.yml porte une chaîne ; on tolère aussi une liste.
      const values = Array.isArray(rawValues) ? rawValues.map(String) : [String(rawValues)];
      const a = this.arg(prop);
      this.use(a);
      if (this.boolArgs.has(a)) {
        const vals = values.map(String);
        if (vals.length === 1) parts.push(vals[0] === 'True' ? a : `!${a}`);
        else parts.push(`(${vals.map((v) => (v === 'True' ? a : `!${a}`)).join(' || ')})`);
      } else if (values.length === 1) {
        parts.push(`${a} === ${jstr(values[0])}`);
      } else {
        parts.push(`[${values.map(jstr).join(', ')}].includes(${a})`);
      }
    }
    return parts.join(' && ');
  }

  build() {
    const conns = [...this.comp.connections].sort(
      (a, b) => Object.keys(b.variant ?? {}).length - Object.keys(a.variant ?? {}).length,
    );

    const bodies = conns.map((conn) => {
      const locals = [];
      for (const [name, def] of Object.entries(conn.props ?? {})) {
        // Une prop `string` est déjà l'argument lui-même : pas de local.
        if (def && typeof def === 'object' && ('string' in def || 'textContent' in def)) {
          const a = this.arg(def.string ?? def.textContent);
          this.use(a);
          if (a !== name) locals.push([name, a]);
          continue;
        }
        locals.push([name, this.expr(def, /class/i.test(name) ? 'class' : 'attr')]);
      }
      let example = tpl(String(conn.example ?? '').trim());
      // `${props.x}` du mapping -> `${x}` de la fonction
      example = example.replace(/\\\$\{\s*props\.([A-Za-z_$][\w$]*)\s*\}/g, (_m, n) => '${' + n + '}');
      return { when: conn.variant, locals, example };
    });

    // Les args cités uniquement dans une condition comptent aussi.
    for (const b of bodies) if (b.when) this.cond(b.when);

    const lines = [];
    const fnName = 'render' + pascal(this.comp.id);
    const argsOrder = [...this.usedArgs];

    lines.push(`export const ${fnName} = ({ ${argsOrder.join(', ')} }: Args): string | null => {`);

    // Les locaux communs à toutes les branches sortent en tête.
    const common = bodies.length
      ? bodies[0].locals.filter(([n, e]) =>
          bodies.every((b) => b.locals.some(([n2, e2]) => n2 === n && e2 === e)))
      : [];
    const commonNames = new Set(common.map(([n]) => n));
    for (const [n, e] of common) lines.push(`  const ${n} = ${e}`);
    if (common.length) lines.push('');

    bodies.forEach((b, i) => {
      const own = b.locals.filter(([n]) => !commonNames.has(n));
      const cond = b.when ? this.cond(b.when) : null;
      const ind = cond ? '    ' : '  ';
      if (cond) lines.push(`  if (${cond}) {`);
      for (const [n, e] of own) lines.push(`${ind}const ${n} = ${e}`);
      if (own.length) lines.push('');
      lines.push(`${ind}return \`${b.example}\``);
      if (cond) lines.push('  }', '');
      else if (i < bodies.length - 1) lines.push('');
    });

    if (bodies.every((b) => b.when)) {
      lines.push('  // Le mapping ne couvre pas cette combinaison.');
      lines.push('  return null');
    }
    lines.push('}');

    return { fnName, argsOrder, body: lines.join('\n') };
  }
}

/* ================================================================== */

const files = [];
const index = [];

for (const comp of doc.components ?? []) {
  if (comp.enabled === false) continue;
  const c = new Compiler(comp);
  const { fnName, argsOrder, body } = c.build();

  const nodeId = String(comp.nodeId).replace(/-/g, ':');
  const entry = inventory.get(nodeId);
  const figmaName = entry?.name ?? comp.figmaName ?? comp.id;

  const head = [];
  head.push(`// OUDS Code — ${comp.figmaName ?? comp.id}`);
  head.push(`// Compilé depuis code-connect/mapping.yml (@ouds/web-common ${doc.codeVersion ?? '?'}).`);
  head.push(`// Repris à la main ensuite : c'est ce fichier qui fait foi pour le plugin.`);
  if (comp.docs) head.push(`// Doc : ${comp.docs}`);
  for (const [prop, motif] of Object.entries(comp.nonMappe ?? {})) {
    head.push(`// Écart — ${prop} : ${String(motif).split('\n')[0]}`);
  }
  for (const l of String(comp.notes ?? '').trim().split('\n').filter(Boolean)) {
    head.push(`// ${l}`);
  }

  const propDecls = [];
  for (const a of argsOrder) {
    const figma = [...c.argOf.entries()].find(([, v]) => v === a)?.[0] ?? a;
    const kind = c.boolArgs.has(a) ? 'boolean' : c.textArgs.has(a) ? 'text' : 'variant';
    const opts = c.optionsOf.get(a);
    propDecls.push(
      `  ${a}: { figma: ${jstr(stripHash(figma))}${kind === 'boolean' ? ', boolean: true' : ''} },`,
    );
  }

  const out = [
    head.join('\n'),
    '',
    `import type { Args, OudsComponent } from '../core/component'`,
    '',
    ...(c.tables.length ? [c.tables.join('\n\n'), ''] : []),
    body,
    '',
    `export const component: OudsComponent = {`,
    `  id: ${jstr(comp.id)},`,
    `  name: ${jstr(String(figmaName).split('|')[0].trim())},`,
    `  figmaName: ${jstr(figmaName)},`,
    `  nodeIds: [${jstr(nodeId)}],`,
    ...(comp.codeName ? [`  codeName: ${jstr(comp.codeName)},`] : []),
    ...(comp.codeVersion ? [`  codeVersion: ${jstr(comp.codeVersion)},`] : []),
    ...(comp.iconProp && comp.iconPlaceholder
      ? [`  icon: { prop: ${jstr(comp.iconProp)}, placeholder: ${jstr(comp.iconPlaceholder)} },`]
      : []),
    `  props: {`,
    ...propDecls,
    `  },`,
    `  render: ${fnName},`,
    `}`,
    '',
  ].join('\n');

  files.push([join(OUT, `${comp.id}.ts`), out]);
  index.push(comp.id);
}

await mkdir(resolve(OUT), { recursive: true });

/* Sans --force, on n'écrase pas un fichier déjà repris à la main. */
let existing = new Set();
try {
  existing = new Set((await readdir(resolve(OUT))).filter((f) => f.endsWith('.ts')));
} catch { /* dossier neuf */ }

let written = 0, skipped = [];
for (const [path, content] of files) {
  const name = basename(path);
  if (existing.has(name) && !FORCE) { skipped.push(name); continue; }
  await mkdir(dirname(resolve(path)), { recursive: true });
  await writeFile(resolve(path), content);
  written++;
}

const idx = [
  `// Registre des composants. Ajouter un composant = ajouter son fichier ici.`,
  `// Seul fichier à toucher quand un composant entre ou sort du périmètre.`,
  '',
  ...index.map((id) => `import { component as ${ident(id)} } from './${id}'`),
  '',
  `import type { OudsComponent } from '../core/component'`,
  '',
  `export const components: OudsComponent[] = [`,
  ...index.map((id) => `  ${ident(id)},`),
  `]`,
  '',
].join('\n');
if (!existing.has('index.ts') || FORCE) await writeFile(resolve(join(OUT, 'index.ts')), idx);

console.log(`${written} fichier(s) écrit(s) dans ${OUT}${skipped.length ? ` · ${skipped.length} conservé(s) (repris à la main ; --force pour écraser)` : ''}`);
if (skipped.length && skipped.length <= 30) console.log('  conservés : ' + skipped.join(', '));
