#!/usr/bin/env node
/**
 * Construit et empaquette le plugin Figma « OUDS Code ».
 *
 *   node scripts/build-plugin.mjs <kit> [options]
 *
 * <kit> : le dossier qui contient code-connect/mapping.yml.
 *
 * Options
 *   --plugin <dir>       plugin existant à construire (défaut : copie de
 *                        assets/plugin/ vers ./ouds-figma-plugin)
 *   --out <fichier.zip>  archive produite (défaut : ./ouds-figma-plugin.zip)
 *   --force-components   régénère TOUS les composants depuis mapping.yml
 *                        (perd les reprises manuelles)
 *   --skip-verify        construit sans la vérification trois chemins
 *   --skip-install       n'exécute pas npm install
 *
 * Enchaînement : copie → npm install → release (build, types, composants
 * manquants, variantes, vérification) → zip. S'arrête à la première anomalie.
 */
import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, rmSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const SCAFFOLD = resolve(HERE, '..', 'assets', 'plugin');

const argv = process.argv.slice(2);
const flag = (n) => argv.includes(n);
const opt = (n, d) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d; };
const positional = argv.filter((a, i) =>
  !a.startsWith('--') && !['--plugin', '--out'].includes(argv[i - 1]));

const KIT = positional[0] ? resolve(positional[0]) : null;
const PLUGIN = resolve(opt('--plugin', './ouds-figma-plugin'));
const OUT = resolve(opt('--out', './ouds-figma-plugin.zip'));

function die(msg, code = 2) { console.error(`\n✖ ${msg}\n`); process.exit(code); }

const MAPPING = KIT && join(KIT, 'code-connect/mapping.yml');
const INVENTORY = KIT && join(KIT, 'code-connect/reference/figma-inventory.json');

if (!flag('--skip-verify')) {
  if (!KIT) die('Chemin du kit manquant.\n  node scripts/build-plugin.mjs <kit> [--out plugin.zip]');
  for (const [label, p] of [['mapping.yml', MAPPING], ['figma-inventory.json', INVENTORY]]) {
    if (!existsSync(p)) die(`${label} introuvable : ${p}\n  Le kit est le dossier qui contient code-connect/mapping.yml.`);
  }
}

let step = 0;
function run(titre, cmd, args, cwd = PLUGIN) {
  step++;
  console.log(`\n── ${step}. ${titre} ${'─'.repeat(Math.max(0, 52 - titre.length))}`);
  const r = spawnSync(cmd, args, { stdio: 'inherit', cwd, shell: process.platform === 'win32' });
  if (r.status !== 0) die(`Échec à l'étape « ${titre} ». Rien n'a été empaqueté.`, r.status ?? 1);
}

// 1. Le dossier de travail
if (!existsSync(PLUGIN)) {
  if (!existsSync(SCAFFOLD)) die(`Ni plugin existant (${PLUGIN}) ni gabarit (${SCAFFOLD}).`);
  console.log(`Copie du gabarit → ${PLUGIN}`);
  mkdirSync(dirname(PLUGIN), { recursive: true });
  cpSync(SCAFFOLD, PLUGIN, { recursive: true });
} else {
  console.log(`Plugin existant : ${PLUGIN}`);
}
if (!existsSync(join(PLUGIN, 'manifest.json'))) die(`${PLUGIN} ne ressemble pas au plugin (manifest.json absent).`);

// 2. Dépendances
if (!flag('--skip-install') && !existsSync(join(PLUGIN, 'node_modules'))) {
  run('Dépendances', 'npm', ['install', '--no-audit', '--no-fund']);
}

// 3. La chaîne
if (flag('--skip-verify')) {
  run('Construction', 'node', ['tools/build.mjs']);
  run('Contrôle des types', 'npx', ['tsc', '--noEmit']);
} else {
  const gen = ['tools/generate-components.mjs', MAPPING, '--inventory', INVENTORY, '--out', 'src/components'];
  if (flag('--force-components')) gen.push('--force');
  run('Construction', 'node', ['tools/build.mjs']);
  run('Contrôle des types', 'npx', ['tsc', '--noEmit']);
  run(flag('--force-components') ? 'Composants (régénération complète)' : 'Composants manquants', 'node', gen);
  run('Construction (après génération)', 'node', ['tools/build.mjs']);
  run('Énumération des variantes', 'node', ['tools/variants.mjs', INVENTORY, '-o', 'dist/variants.json']);
  run('Vérification trois chemins', 'node', [
    'tools/verify.mjs',
    '--variants', 'dist/variants.json',
    '--generated', join(KIT, 'code-connect/generated'),
    '--templates', join(KIT, 'code-connect/templates'),
  ]);
}

// 4. L'archive : dist/ construit, sans node_modules ni sous-produits lourds
step++;
console.log(`\n── ${step}. Archive ${'─'.repeat(44)}`);
if (!existsSync(join(PLUGIN, 'dist', 'code.js'))) die('dist/code.js absent : la construction n\'a pas abouti.');
rmSync(OUT, { force: true });
const zip = spawnSync('zip', [
  '-r', '-q', OUT, '.',
  '-x', 'node_modules/*', '-x', '.git/*',
  '-x', 'dist/variants.json', '-x', 'dist/ouds-mapping.json',
  '-x', 'package-lock.json',
], { cwd: PLUGIN, stdio: 'inherit' });
if (zip.status !== 0 || !existsSync(OUT)) die('Échec de l\'archivage (commande `zip` indisponible ?).');

console.log(`
✔ ${OUT}  (${Math.round(statSync(OUT).size / 1024)} Ko)

  Décompresser vers un chemin court et stable — surtout pas OneDrive.
  Figma (application de bureau) → Plugins → Development → Import plugin from
  manifest… → manifest.json

  Le markup vit dans src/components/ : toute correction demande de
  RECONSTRUIRE et de REPUBLIER.
`);
