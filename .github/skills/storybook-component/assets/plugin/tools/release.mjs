#!/usr/bin/env node
/**
 * La commande de maintenance : tout, dans l'ordre, en une fois.
 *
 *   npm run release -- ../ouds-code-connect
 *
 * Enchaîne build → types → génération des composants manquants → énumération
 * des variantes → vérification sur les trois chemins. S'arrête à la première
 * erreur.
 *
 * À lancer après toute retouche de `src/components/` ou de `mapping.yml`, et
 * avant de republier le plugin.
 */
import { spawnSync } from 'node:child_process';
import { access } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const kit = process.argv.slice(2).find((a) => !a.startsWith('-')) ?? '../ouds-code-connect';
const KIT = resolve(kit);

const MAPPING = join(KIT, 'code-connect/mapping.yml');
const INVENTORY = join(KIT, 'code-connect/reference/figma-inventory.json');
const GENERATED = join(KIT, 'code-connect/generated');
const TEMPLATES = join(KIT, 'code-connect/templates');

for (const [label, path] of [['mapping.yml', MAPPING], ['figma-inventory.json', INVENTORY]]) {
  try {
    await access(path);
  } catch {
    console.error(`\n✖ ${label} introuvable : ${path}`);
    console.error(`  Usage : npm run release -- <chemin du kit ouds-code-connect>\n`);
    process.exit(2);
  }
}

let step = 0;
function run(titre, cmd, args) {
  step++;
  console.log(`\n── ${step}. ${titre} ${'─'.repeat(Math.max(0, 56 - titre.length))}`);
  const r = spawnSync(cmd, args, { stdio: 'inherit', shell: process.platform === 'win32' });
  if (r.status !== 0) {
    console.error(`\n✖ Échec à l'étape « ${titre} ». Rien n'a été publié.\n`);
    process.exit(r.status ?? 1);
  }
}

run('Construction du plugin', 'node', ['tools/build.mjs']);
run('Contrôle des types', 'npx', ['tsc', '--noEmit']);
// Sans --force : un fichier déjà repris à la main n'est jamais écrasé.
run('Composants manquants (sans écraser les repris à la main)', 'node', [
  'tools/generate-components.mjs', MAPPING, '--inventory', INVENTORY, '--out', 'src/components',
]);
run('Énumération des variantes', 'node', [
  'tools/variants.mjs', INVENTORY, '-o', 'dist/variants.json',
]);
run('Vérification sur les trois chemins', 'node', [
  'tools/verify.mjs',
  '--variants', 'dist/variants.json',
  '--generated', GENERATED,
  '--templates', TEMPLATES,
]);

console.log(`
✔ Prêt.

  Le markup vit dans src/components/ : toute correction demande de
  REPUBLIER le plugin (Plugins → Development → Publish).
`);
