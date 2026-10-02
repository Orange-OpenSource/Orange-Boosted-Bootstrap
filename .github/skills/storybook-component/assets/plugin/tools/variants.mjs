#!/usr/bin/env node
/**
 * figma-inventory.json → variants.json
 *
 * Produit la liste exhaustive des variantes réelles des composants du
 * périmètre : produit cartésien des `variantOptions` de chaque propriété
 * VARIANT, complété par les valeurs par défaut des propriétés TEXT et BOOLEAN.
 *
 * C'est l'entrée de `scripts/verify.mjs --variants`.
 *
 * Usage :
 *   node scripts/make-variants.mjs <figma-inventory.json> [-o dist/variants.json]
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const input = process.argv.slice(2).find((a) => !a.startsWith('-'));
if (!input) {
  console.error('usage : node scripts/make-variants.mjs <figma-inventory.json> [-o out.json]');
  process.exit(2);
}
const oi = process.argv.findIndex((a) => a === '-o' || a === '--out');
const output = oi !== -1 ? process.argv[oi + 1] : 'dist/variants.json';

const inv = JSON.parse(await readFile(resolve(input), 'utf8'));

const out = [];
const perComponent = [];

for (const comp of inv.composants ?? []) {
  const variantAxes = [];
  const fixed = {};

  for (const [name, def] of Object.entries(comp.properties ?? {})) {
    if (def.type === 'VARIANT' && Array.isArray(def.variantOptions) && def.variantOptions.length) {
      variantAxes.push([name, def.variantOptions]);
    } else if (def.type === 'INSTANCE_SWAP') {
      // Un composant imbriqué n'entre pas dans le markup : ignoré.
      continue;
    } else if (def.defaultValue !== undefined && def.defaultValue !== null) {
      fixed[name] = String(def.defaultValue);
    }
  }

  let n = 0;
  const emit = (i, acc) => {
    if (i === variantAxes.length) {
      out.push({ component: comp.name, nodeId: comp.nodeId, props: { ...fixed, ...acc } });
      n++;
      return;
    }
    const [prop, values] = variantAxes[i];
    for (const v of values) emit(i + 1, { ...acc, [prop]: v });
  };
  emit(0, {});
  perComponent.push({ name: comp.name, nodeId: comp.nodeId, variantes: n });
}

await mkdir(dirname(resolve(output)), { recursive: true });
await writeFile(resolve(output), JSON.stringify(out) + '\n');

for (const c of perComponent.sort((a, b) => b.variantes - a.variantes)) {
  console.log(`  ${String(c.variantes).padStart(5)}  ${c.name.replace(/\s*\|.*$/, '')}`);
}
console.log(`\n${out.length} variantes · ${perComponent.length} composants → ${output}`);
