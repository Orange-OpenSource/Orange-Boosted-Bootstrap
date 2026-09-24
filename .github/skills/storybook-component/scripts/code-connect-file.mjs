#!/usr/bin/env node
/**
 * Assemble le fichier de passation Code Connect d'UN composant : tout ce qu'il
 * faut pour l'ajouter, dans un seul fichier transmissible tel quel.
 *
 *   node scripts/code-connect-file.mjs <kit> <id> [-o code-connect-<id>.md]
 *
 * Contenu : l'entrée mapping.yml, le .figma.ts généré, le fichier template,
 * les deux figma.config.json, les commandes, et ce qui n'est PAS couvert.
 *
 * Contrôle au passage : l'ordre des connexions (la plus contrainte d'abord).
 * Après migration, c'est la PREMIÈRE branche qui matche qui gagne — une
 * connexion spécifique placée après une plus générale devient du code mort,
 * sans message d'aucun outil.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const argv = process.argv.slice(2);
const opt = (n, d) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d; };
const pos = argv.filter((a, i) => !a.startsWith('-') && !['-o', '--out'].includes(argv[i - 1]));

const KIT = pos[0] ? resolve(pos[0]) : null;
const ID = pos[1];
if (!KIT || !ID) {
  console.error('Usage : node scripts/code-connect-file.mjs <kit> <id-composant> [-o fichier.md]');
  process.exit(2);
}
const OUT = resolve(opt('-o', opt('--out', `./code-connect-${ID}.md`)));

const MAPPING = join(KIT, 'code-connect/mapping.yml');
if (!existsSync(MAPPING)) {
  console.error(`✖ mapping.yml introuvable : ${MAPPING}`);
  process.exit(2);
}
const yml = readFileSync(MAPPING, 'utf8').split('\n');

// ── L'entrée, découpée à la ligne près pour rester collable telle quelle ────
const start = yml.findIndex((l) => l.trimEnd() === `  - id: ${ID}`);
if (start < 0) {
  const ids = yml.filter((l) => /^ {2}- id: /.test(l)).map((l) => l.trim().slice(6));
  console.error(`✖ Composant « ${ID} » absent de mapping.yml.\n  Connus : ${ids.join(', ')}`);
  process.exit(2);
}
let end = yml.length;
for (let i = start + 1; i < yml.length; i++) {
  if (/^ {2}- id: /.test(yml[i])) { end = i; break; }
}
// Les lignes vides et les bandeaux de section appartiennent à l'entrée suivante.
while (end > start && (yml[end - 1].trim() === '' || /^\s*#\s*[═─]/.test(yml[end - 1]))) end--;
const entry = yml.slice(start, end).join('\n');

// ── En-tête : ce que l'entrée déclare ──────────────────────────────────────
const field = (n) => (entry.match(new RegExp(`^\\s{4}${n}:\\s*(.+)$`, 'm')) || [])[1]?.replace(/^"|"$/g, '');
const meta = {
  figmaName: field('figmaName'), nodeId: field('nodeId'),
  codeName: field('codeName'), codeVersion: field('codeVersion'),
  docs: field('docs'), iconProp: field('iconProp'), iconPlaceholder: field('iconPlaceholder'),
};
const fileKey = (readFileSync(MAPPING, 'utf8').match(/^figmaFileKey:\s*(\S+)/m) || [])[1] ?? 'FILE_KEY';
const url = meta.nodeId
  ? `https://www.figma.com/design/${fileKey}/OUDS?node-id=${meta.nodeId.replace(':', '-')}`
  : '(node-id manquant)';

// ── Les connexions, et leur ordre ──────────────────────────────────────────
const conns = [];
for (const line of entry.split('\n')) {
  const m = line.match(/^\s{6}- (?:variant: (\{.*\})|props:|example:)/);
  if (/^\s{6}- /.test(line)) {
    conns.push({ variant: m && m[1] ? m[1] : null });
  }
}
const arity = (v) => (v ? (v.match(/:/g) || []).length : 0);
const disordre = [];
for (let i = 1; i < conns.length; i++) {
  if (arity(conns[i].variant) > arity(conns[i - 1].variant)) {
    disordre.push(`connexion ${i + 1} (${conns[i].variant}) est plus contrainte que la ${i} (${conns[i - 1].variant ?? 'sans variant'})`);
  }
}

// ── Les artefacts déjà générés, s'ils existent ─────────────────────────────
const read = (p) => (existsSync(p) ? readFileSync(p, 'utf8').trimEnd() : null);
const generated = read(join(KIT, 'code-connect/generated', `${ID}.figma.ts`));
const template = read(join(KIT, 'code-connect/templates', `${ID}.figma.ts`))
  ?? read(join(KIT, 'code-connect/templates-reordonnes', `${ID}.figma.ts`));

// ── Ce qui n'est pas couvert ───────────────────────────────────────────────
const nonMappe = (() => {
  const i = entry.split('\n').findIndex((l) => /^\s{4}nonMappe:/.test(l));
  if (i < 0) return null;
  const lines = entry.split('\n');
  const out = [];
  for (let j = i + 1; j < lines.length && /^\s{6}\S/.test(lines[j]); j++) out.push(lines[j].trim());
  return out.length ? out : null;
})();
const notes = (() => {
  const lines = entry.split('\n');
  const i = lines.findIndex((l) => /^\s{4}notes:\s*\|/.test(l));
  if (i < 0) return null;
  const out = [];
  for (let j = i + 1; j < lines.length && (/^\s{6}/.test(lines[j]) || lines[j].trim() === ''); j++) out.push(lines[j].trim());
  return out.join('\n').trim() || null;
})();

const bloc = (lang, body) => '```' + lang + '\n' + body + '\n```';
const md = `# Code Connect — ${meta.figmaName ?? ID}

Tout ce qu'il faut pour connecter ce composant. Un seul fichier : il peut être
transmis tel quel à qui tient \`Orange-Boosted-Bootstrap\`.

| | |
|---|---|
| Composant Figma | ${meta.figmaName ?? '—'} |
| node-id | \`${meta.nodeId ?? '—'}\` |
| URL | ${url} |
| Composant code | ${meta.codeName ?? '—'}${meta.codeVersion ? ` v${meta.codeVersion}` : ''} |
| Documentation | ${meta.docs ?? '—'} |
| Connexions | ${conns.length} |

## 1. L'entrée \`code-connect/mapping.yml\`

Le seul fichier édité à la main : les deux formes ci-dessous en sont déduites.
À insérer dans \`components:\`, dans la section du composant.

${bloc('yaml', entry)}
${disordre.length ? `
> ⚠️ **Ordre des connexions à revoir.** Après \`figma connect migrate\`, c'est la
> **première** branche qui matche qui gagne. Ici :
${disordre.map((d) => `> - ${d}`).join('\n')}
>
> Une connexion spécifique placée après une plus générale devient du code mort,
> sans message d'aucun outil. Ranger de la plus contrainte à la moins contrainte.
` : `
> Ordre des connexions : de la plus contrainte à la moins contrainte. ✔
`}
## 2. Le fichier généré — \`code-connect/generated/${ID}.figma.ts\`

Produit par \`npm run generate\`. Forme lue par le parser \`html\`, déprécié
depuis le 17/08/2026 : à publier aujourd'hui, à ne pas maintenir à la main.

${generated ? bloc('ts', generated) : `_Absent du kit. À produire :_\n\n${bloc('bash', 'npm run generate')}`}

## 3. Le fichier template — \`code-connect/templates/${ID}.figma.ts\`

Forme supportée après la migration. Produit par \`npx figma connect migrate\`.
C'est celle qui fait foi à terme, et celle contre laquelle le plugin est vérifié.

${template ? bloc('ts', template) : `_Absent du kit. À produire :_\n\n${bloc('bash', 'npx figma connect migrate')}`}

## 4. \`figma.config.json\`

Forme générée (parser \`html\`) :

${bloc('json', JSON.stringify({ codeConnect: { parser: 'html', include: ['code-connect/generated/*.figma.ts'], label: 'OUDS Web' } }, null, 2))}

Forme template (après migration — pas de \`parser\`, un \`language\`) :

${bloc('json', JSON.stringify({ codeConnect: { include: ['**/*.figma.ts'], language: 'html', label: 'OUDS Web' } }, null, 2))}

## 5. Publier

${bloc('bash', `export FIGMA_ACCESS_TOKEN=…      # portées : File content: read + Code Connect: write

npx figma connect parse           # syntaxe seule, sans réseau
npx figma connect publish --dry-run
npx figma connect publish

# Retirer une connexion :
npx figma connect unpublish --node ${meta.nodeId ?? '<node-id>'}`)}

## 6. Ce qui n'est pas couvert

${nonMappe ? `Propriétés Figma sans équivalent code (\`nonMappe:\`) :\n\n${nonMappe.map((l) => `- ${l}`).join('\n')}` : 'Aucune propriété déclarée sans équivalent code.'}
${meta.iconProp ? `
**Icône.** \`${meta.iconProp}\` est une propriété \`INSTANCE_SWAP\` : Code Connect
n'a aucune primitive qui en lise le nom. Le snippet fige
\`${meta.iconPlaceholder}\`. En Dev Mode l'icône affichée sera donc toujours
celle-là ; seul le plugin OUDS Code substitue le nom réel.
` : ''}${notes ? `
**Notes du mapping** — reprises dans l'en-tête de chaque fichier généré :

${bloc('text', notes)}
` : ''}
Les combinaisons de variantes qu'aucune connexion ne couvre ne produisent
**aucun snippet** dans Figma. C'est voulu : un repli sur la variante voisine
masquerait le manque. Le manque, lui, est l'information dont l'équipe OUDS a
besoin.
`;

writeFileSync(OUT, md);
console.log(`✔ ${OUT}`);
console.log(`  ${meta.figmaName ?? ID} · ${conns.length} connexion(s)` +
  `${generated ? '' : ' · .figma.ts absent'}${template ? '' : ' · template absent'}`);
if (disordre.length) {
  console.error(`\n⚠️  Ordre des connexions : ${disordre.length} inversion(s) — voir le fichier.`);
}
