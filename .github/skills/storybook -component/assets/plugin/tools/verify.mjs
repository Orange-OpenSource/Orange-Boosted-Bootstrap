#!/usr/bin/env node
/**
 * Vérification des fichiers de composants, sur les variantes réelles.
 *
 * Deux contrôles indépendants :
 *
 *  1. SANITÉ — chaque variante produit un markup non vide, sans interpolation
 *     résiduelle, avec des balises équilibrées.
 *
 *  2. CONFORMITÉ — le rendu de `src/components/<id>.ts` est comparé à celui
 *     obtenu en évaluant les `.figma.ts` GÉNÉRÉS et les fichiers TEMPLATE, avec
 *     des implémentations indépendantes. Trois chemins, une seule vérité.
 *
 * Les fichiers de composants étant repris à la main, un écart signalé ici est
 * une INFORMATION, pas nécessairement une faute : il mesure l'écart entre le
 * plugin et Code Connect.
 *
 * Usage :
 *   node tools/verify.mjs dist/ouds-mapping.json \
 *        --variants dist/variants.json \
 *        --generated ../ouds-code-connect/code-connect/generated
 */
import { readFile, readdir } from 'node:fs/promises';
import { basename, resolve } from 'node:path';
import vm from 'node:vm';
import * as esbuild from 'esbuild';
import { components, renderComponent, normValue, normComponentName } from '../dist/render.mjs';

function argv(flag, fallback = null) {
  const i = process.argv.indexOf(flag);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

const variantsPath = argv('--variants');
const generatedDir = argv('--generated');
const templatesDir = argv('--templates');


/* ================================================================== */
/* Évaluateur indépendant des .figma.ts générés                        */
/* ================================================================== */

/**
 * Les primitives sont recréées ici À PARTIR DE LEUR DOCUMENTATION, sans
 * réutiliser une ligne de `src/render.ts`. C'est ce qui rend la comparaison
 * probante : si les deux implémentations divergent, le test le voit.
 */
function makeFigmaStub(props) {
  const get = (name) => {
    if (name in props) return props[name];
    // Le suffixe `#id` n'apparaît pas dans l'inventaire ; comparaison souple.
    const bare = name.replace(/#.*$/, '');
    for (const k of Object.keys(props)) if (k.replace(/#.*$/, '') === bare) return props[k];
    return undefined;
  };
  return {
    string: (name) => get(name),
    textContent: (name) => get(name),
    instance: (name) => (get(name) === undefined ? undefined : `<!-- ${name.replace(/#.*$/, '')} : ${get(name)} -->`),
    boolean: (name, map) => {
      const raw = get(name);
      if (raw === undefined) return undefined;
      const b = raw === true || String(raw).toLowerCase() === 'true';
      if (!map) return b;
      const v = map[b ? 'true' : 'false'];
      return v === null ? undefined : v;
    },
    enum: (name, map) => {
      const raw = get(name);
      if (raw === undefined) return undefined;
      const v = map[raw];
      return v === null ? undefined : v;
    },
    className: (parts) =>
      parts
        .filter((p) => p !== undefined && p !== null && p !== false && String(p).trim() !== '')
        .map((p) => String(p).trim())
        .join(' '),
    connect: () => {},
  };
}

function htmlTag(strings, ...values) {
  let out = strings[0];
  for (let i = 0; i < values.length; i++) {
    const v = values[i];
    out += v === undefined || v === null || v === false ? '' : String(v);
    out += strings[i + 1];
  }
  return out;
}

/** Charge un .figma.ts et renvoie ses connexions sous forme exécutable. */
async function loadGenerated(file) {
  const src = await readFile(file, 'utf8');
  const body = src
    .split('\n')
    .filter((l) => !l.startsWith('import '))
    .join('\n');
  const connections = [];
  const collector = {
    connect: (_url, cfg) => connections.push(cfg),
  };
  // Les primitives sont paresseuses : elles doivent être réévaluées à chaque
  // variante. On enregistre donc la config brute et on la rejoue plus tard.
  const factory = new Function(
    'figma',
    'html',
    `${body}\n`,
  );
  // Premier passage : récupérer variant + example, avec des primitives inertes.
  const inert = new Proxy(collector, {
    get: (t, k) => (k in t ? t[k] : (...args) => ({ __lazy: k, args })),
  });
  factory(inert, htmlTag);
  return connections;
}

/** Rejoue une config de connexion avec les vraies primitives, pour un jeu de props. */
function evalGenerated(conn, nodeProps) {
  const figma = makeFigmaStub(nodeProps);
  const resolveLazy = (v) => {
    if (v && typeof v === 'object' && v.__lazy) {
      const args = v.args.map((a) => (Array.isArray(a) ? a.map(resolveLazy) : resolveLazy(a)));
      return figma[v.__lazy](...args);
    }
    return v;
  };
  const props = {};
  for (const [k, v] of Object.entries(conn.props ?? {})) props[k] = resolveLazy(v);
  return conn.example(props);
}

function variantMatches(variant, nodeProps) {
  if (!variant) return true;
  for (const [k, v] of Object.entries(variant)) {
    if (nodeProps[k] !== v) return false;
  }
  return true;
}

/* ================================================================== */

/* ================================================================== */
/* Évaluateur des fichiers TEMPLATE (forme post-17/08/2026)            */
/* ================================================================== */

/**
 * Les fichiers de `code-connect/templates/` sont ce que Figma exécutera après
 * la fin de maintenance du parseur `html`. Les vérifier, c'est vérifier que le
 * plugin restera aligné après la migration.
 *
 * `_fcc_renderHtmlValue` et `_fcc_renderHtmlAttribute` sont recopiés à
 * l'identique de `@figma/code-connect/dist/html/parser_template_helpers.js`.
 */
function makeTemplateSandbox(nodeProps) {
  const get = (name) => {
    if (name in nodeProps) return nodeProps[name];
    const bare = name.replace(/#.*$/, '');
    for (const k of Object.keys(nodeProps)) if (k.replace(/#.*$/, '') === bare) return nodeProps[k];
    return undefined;
  };

  const figma = {
    code: (strings, ...values) =>
      strings.reduce(
        (acc, s, i) => acc + s + (i < values.length ? (values[i] ?? '') : ''),
        '',
      ),
    html: (strings, ...values) =>
      strings.reduce(
        (acc, s, i) => acc + s + (i < values.length ? (values[i] ?? '') : ''),
        '',
      ),
    selectedInstance: {
      getPropertyValue: (name) => get(name),
      getString: (name) => {
        const v = get(name);
        return v === undefined ? undefined : String(v);
      },
      getEnum: (name, map) => {
        const v = get(name);
        if (v === undefined) return undefined;
        return map[v];
      },
      getBoolean: (name, map) => {
        const v = get(name);
        if (v === undefined) return undefined;
        const b = v === true || String(v).toLowerCase() === 'true';
        return map ? map[String(b)] : b;
      },
    },
  };

  function _fcc_renderHtmlValue(value) {
    if (Array.isArray(value)) return figma.html`${value}`;
    if (typeof value === 'object' && value !== null) return JSON.stringify(value);
    if (typeof value === 'undefined') return '';
    return value.toString();
  }

  function _fcc_renderHtmlAttribute(name, value) {
    if (typeof value === 'undefined') return '';
    if (typeof value === 'boolean') return value ? name : '';
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'bigint') {
      return `${name}="${value.toString().replaceAll('\n', '\\n').replaceAll('"', '\\"')}"`;
    }
    if (value.$type === 'identifier') return `${name}="${value.$value}"`;
    return `${name}="Code Connect Error: Unsupported type '${typeof value}' for attribute"`;
  }

  return {
    figma,
    // esbuild transpile `import figma from "figma"` en require() ; on le sert.
    require: (m) => (m === 'figma' ? figma : {}),
    _fcc_renderHtmlValue,
    _fcc_renderHtmlAttribute,
    _fcc_templateString: ($value) => ({ $value, $type: 'template-string' }),
    _fcc_object: ($value) => ({ $value, $type: 'object', ...$value }),
    _fcc_identifier: ($value) => ({ $value, $type: 'identifier' }),
    module: { exports: null },
    JSON,
    Array,
    Object,
    String,
    console: { log() {}, warn() {}, error() {} },
  };
}

/** Transpile le template TS en JS exécutable une fois pour toutes. */
async function prepareTemplate(file) {
  const src = await readFile(file, 'utf8');
  const js = (
    await esbuild.transform(src, { loader: 'ts', format: 'cjs', target: 'es2020' })
  ).code;
  return new vm.Script(js);
}

function evalTemplate(script, nodeProps) {
  const sandbox = makeTemplateSandbox(nodeProps);
  sandbox.exports = sandbox.module.exports = {};
  vm.createContext(sandbox);
  script.runInContext(sandbox, { timeout: 5000 });
  const out = sandbox.module.exports;
  const tpl = out?.default ?? out;
  return tpl?.example;
}

/** Éléments vides HTML : pas de balise fermante attendue. */
const VOID = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr',
]);

/**
 * Vérifie l'appariement des balises avec une pile. Renvoie `null` si tout va
 * bien, sinon la description de la première anomalie.
 */
function checkBalance(code) {
  const stripped = code.replace(/<!--[\s\S]*?-->/g, '');
  const stack = [];
  const re = /<(\/?)([a-zA-Z][\w:-]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)(\/?)>/g;
  let m;
  while ((m = re.exec(stripped))) {
    const [, closing, rawName, attrs, selfClose] = m;
    const name = rawName.toLowerCase();
    if (closing) {
      if (!stack.length) return `balise fermante orpheline </${name}>`;
      const open = stack.pop();
      if (open !== name) return `</${name}> ferme <${open}>`;
    } else if (!selfClose && !VOID.has(name) && !/\/\s*$/.test(attrs)) {
      stack.push(name);
    }
  }
  if (stack.length) return `balise(s) non fermée(s) : <${stack.join('>, <')}>`;
  return null;
}

const canon = (s) =>
  String(s ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+$/gm, '')
    .trim();

const failures = [];
const uncovered = [];
let checked = 0;
let compared = 0;
let comparedTpl = 0;

/* ---- contrôles structurels du catalogue ---- */
const ids = new Set();
for (const c of components) {
  if (ids.has(c.id)) failures.push({ where: c.id, reason: 'id dupliqué' });
  ids.add(c.id);
  if (!c.nodeIds?.length && !c.keys?.length) {
    failures.push({ where: c.id, reason: 'ni nodeId ni key — repérage par nom seulement' });
  }
  if (typeof c.render !== 'function') {
    failures.push({ where: c.id, reason: 'pas de fonction render' });
  }
}

/* ---- chargement des .figma.ts générés ---- */
const generated = new Map();
if (generatedDir) {
  for (const f of await readdir(resolve(generatedDir))) {
    if (!f.endsWith('.figma.ts')) continue;
    const id = basename(f, '.figma.ts');
    try {
      generated.set(id, await loadGenerated(resolve(generatedDir, f)));
    } catch (e) {
      failures.push({ where: f, reason: `chargement impossible : ${e.message}` });
    }
  }
}

/* ---- chargement des fichiers template ---- */
const templates = new Map();
if (templatesDir) {
  for (const f of await readdir(resolve(templatesDir))) {
    if (!f.endsWith('.figma.ts')) continue;
    const id = basename(f, '.figma.ts');
    try {
      templates.set(id, await prepareTemplate(resolve(templatesDir, f)));
    } catch (e) {
      failures.push({ where: f, reason: `template illisible : ${e.message}` });
    }
  }
}

/* ---- parcours des variantes ---- */
const variants = variantsPath
  ? JSON.parse(await readFile(resolve(variantsPath), 'utf8'))
  : [];

if (!variants.length) {
  console.error('Aucune variante fournie (--variants). Contrôle structurel seulement.');
}

for (const entry of variants) {
  const hit =
    components.find((c) => c.nodeIds.includes(String(entry.nodeId))) ??
    components.find((c) => normComponentName(c.name) === normComponentName(entry.component));

  if (!hit) {
    failures.push({ where: entry.component, props: entry.props, reason: 'composant absent du mapping' });
    continue;
  }

  checked++;
  const res = renderComponent(hit, { values: entry.props, booleans: {} });

  if (!res.code) {
    uncovered.push({ component: hit.name, props: entry.props, reason: res.reason });
    continue;
  }
  const code = res.code;
  const leftover = code.match(/\$\{[^}]*\}/);
  if (leftover) {
    failures.push({ where: hit.name, props: entry.props, reason: `interpolation non résolue ${leftover[0]}` });
    continue;
  }
  const imbalance = checkBalance(code);
  if (imbalance) {
    failures.push({ where: hit.name, props: entry.props, reason: imbalance, got: code });
    continue;
  }

  /* ---- comparaison avec le .figma.ts généré ---- */
  const conns = generated.get(hit.id);
  if (conns) {
    // Code Connect retient la connexion la plus spécifique qui s'applique.
    const candidates = conns
      .filter((c) => variantMatches(c.variant, entry.props))
      .sort((a, b) => Object.keys(b.variant ?? {}).length - Object.keys(a.variant ?? {}).length);
    if (candidates.length) {
      compared++;
      const expected = canon(evalGenerated(candidates[0], entry.props));
      if (canon(code) !== expected) {
        failures.push({
          where: hit.name,
          props: entry.props,
          reason: 'écart avec le .figma.ts généré',
          got: code,
          want: expected,
        });
      }
    }
  }

  /* ---- comparaison avec le fichier TEMPLATE (forme post-17/08) ---- */
  const script = templates.get(hit.id);
  if (script) {
    let expected;
    try {
      expected = evalTemplate(script, entry.props);
    } catch (e) {
      failures.push({ where: hit.name, props: entry.props, reason: `template en erreur : ${e.message}` });
      continue;
    }
    if (typeof expected === 'string') {
      comparedTpl++;
      if (canon(code) !== canon(expected)) {
        failures.push({
          where: hit.name,
          props: entry.props,
          reason: 'écart avec le fichier template',
          got: code,
          want: expected,
        });
      }
    }
  }
}

/* ================================================================== */
/* Rapport                                                             */
/* ================================================================== */

console.log(`source             src/components/ (${components.length} fichiers de code)`);
console.log(`variantes rendues  ${checked}`);
if (generated.size) {
  console.log(`comparées au .figma.ts généré  ${compared} / ${checked}`);
}
if (templates.size) {
  console.log(`comparées au fichier template  ${comparedTpl} / ${checked}   (forme post-17/08/2026)`);
}

if (uncovered.length) {
  const byComp = new Map();
  for (const u of uncovered) byComp.set(u.component, (byComp.get(u.component) ?? 0) + 1);
  console.log(`\n${uncovered.length} variante(s) SANS CONNEXION (Code Connect n'en produirait pas non plus) :`);
  for (const [name, n] of [...byComp].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(n).padStart(5)}  ${name}`);
  }
  console.log('  exemple :', JSON.stringify(uncovered[0].props));
}

if (failures.length) {
  console.log(`\n${failures.length} ÉCHEC(S) :\n`);
  for (const f of failures.slice(0, 15)) {
    console.log(`  ✗ ${f.where} ${f.props ? JSON.stringify(f.props) : ''}`);
    console.log(`    ${f.reason}`);
    if (f.want !== undefined) {
      console.log(`    attendu : ${JSON.stringify(f.want)}`);
      console.log(`    obtenu  : ${JSON.stringify(f.got)}`);
    }
  }
  if (failures.length > 15) console.log(`  … et ${failures.length - 15} autres`);
  process.exit(1);
}

console.log(`
TOUT CONFORME — les fichiers de src/components/ rendent exactement ce que
produirait Code Connect. Après une retouche manuelle, un écart signalé ici
n'est pas forcément une erreur : c'est la mesure de votre divergence assumée.`);
