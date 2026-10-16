# @ouds/icons — Agent Guidelines

Scope: everything under `libs/icons/`. The root [`AGENTS.md`](../../AGENTS.md) still applies; this file adds the rules of the icon data package.

## Purpose

Typed icon data shared by `@ouds/react`, `@ouds/vue`, and `@ouds/angular`. The package holds data only: no framework code, and no runtime imports (the `OudsIcon` type comes from `@ouds/core`).

## Layout

- `src/icons/<name>.ts` — one generated file per icon, with one named export (`functionalStatusWarning`). `src/index.ts` re-exports them. **Generated: do not edit by hand.**
- `icons.config.json` — the sprite location (`{brand}` is replaced by `orange`, `orange-compact`, `sosh`) and the list of icon ids to generate.
- `scripts/generate-icons.mjs` (+ `.d.mts`) — the generator. It reads the OUDS Web sprites, keeps only `<path>` data, stores a brand only when its drawing differs from the first brand (Orange Compact reuses Orange), and formats the output with the repository's Prettier config. `node libs/icons/scripts/generate-icons.mjs --check` exits 1 when the committed files are out of date.
- `src/*.spec.ts` — `icons.spec.ts` (regenerates the files in memory and compares them with the committed ones; checks the data of the warning icon) and `generate-icons.spec.ts` (parser and generator edge cases).
- `project.json` — Nx targets `build` (`@nx/vite:build`, depends on `@ouds/core:build` for the type declarations), `generate-icons`, `test` (`vitest run --coverage`, with the sprites as extra inputs so a sprite change invalidates the cache), and `nx-release-publish`; `lint` is inferred by `@nx/oxlint`.
- `LICENSE`, `NOTICE.txt` — MIT for the code; the icon drawings are Orange property.

## Commands (run from the repository root)

- `npm run icons:generate` — regenerate `src/` from the sprites.
- `npm run icons:test` — Vitest 5 (jsdom) with V8 coverage in `coverage/libs/icons`.
- `npm run icons:lint`, `npm run icons:build` — Oxlint and the Vite library build into `dist/libs/icons`.

## Adding an icon

See "Adding an icon" in the root `AGENTS.md`: add the symbol to the three brand sprites, add its id to `icons.config.json`, run `npm run icons:generate`, and commit the result.

## Rules

- Only `<path>` elements (`d`, `fill`, `fill-rule`) are supported, because the framework components render exactly those. The generator throws on anything else.
- All brands must use the same `viewBox` for an icon (the generator checks it).
- Keep `sideEffects: false` and one named export per icon, so unused icons are dropped by bundlers.
- Tag `lib:icons`: it may only import `lib:core` (type-only). The framework libraries use it in specs and stories only.
- The framework libraries list `@ouds/icons` in `dependencies` (so it is installed with them) but never import it in their source; an application imports the icons it needs and passes the icon data to `Icon`.
