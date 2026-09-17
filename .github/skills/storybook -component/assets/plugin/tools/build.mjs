#!/usr/bin/env node
/**
 * Build du plugin : un seul fichier JS pour le fil principal, un seul HTML
 * pour l'iframe. Aucun runtime externe, Figma n'en accepte pas.
 */
import * as esbuild from 'esbuild';
import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const watch = process.argv.includes('--watch');

await mkdir(resolve(root, 'dist'), { recursive: true });

const options = {
  entryPoints: [resolve(root, 'src/main.ts')],
  outfile: resolve(root, 'dist/code.js'),
  bundle: true,
  format: 'iife',
  target: 'es2020',
  // Le bac à sable Figma n'a ni window ni process.
  define: { 'process.env.NODE_ENV': '"production"' },
  legalComments: 'none',
  logLevel: 'info',
};

async function copyUi() {
  const html = await readFile(resolve(root, 'src/ui.html'), 'utf8');
  await writeFile(resolve(root, 'dist/ui.html'), html);
}

/**
 * Le moteur de rendu est aussi construit seul, en ESM, pour que
 * `scripts/verify.mjs` teste exactement le code embarqué dans le plugin.
 */
const engineOptions = {
  entryPoints: [resolve(root, 'src/core/render.ts')],
  outfile: resolve(root, 'dist/render.mjs'),
  bundle: true,
  format: 'esm',
  target: 'es2020',
  logLevel: 'silent',
};

if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  await copyUi();
  setInterval(copyUi, 1000);
  console.log('watch actif — Plugins → Development → OUDS Code');
} else {
  await esbuild.build(options);
  await esbuild.build(engineOptions);
  await copyUi();
  console.log('build OK → dist/code.js + dist/ui.html + dist/render.mjs');
}
