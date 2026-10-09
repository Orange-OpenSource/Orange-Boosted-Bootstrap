# @ouds/core — Agent Guidelines

Scope: everything under `libs/core/`. The root [`AGENTS.md`](../../AGENTS.md) still applies; this file adds core-specific rules.

## Purpose

Framework-agnostic code shared by `@ouds/react`, `@ouds/vue`, and `@ouds/angular`: types and DOM/string/brand utilities. Nothing here may import React, Vue, or Angular. Code that needs a framework belongs in that framework's library.

## Layout

- `src/types/` — shared types (`theming/`, `components/<component>/`). Component prop types are named `Core<Name>Props` and extended by each framework library.
- `src/utils/<area>/<area>.util.ts` + co-located `<area>.util.spec.ts` — utilities.
- `src/index.ts` → `src/types/index.ts`, `src/utils/index.ts` — barrel files and the only public API. Re-export every new type or utility through them.
- `vite.config.ts` — Vite library build (ESM + CJS, `.d.ts` via `vite-plugin-dts`) and the Vitest `test` block, including coverage.
- `.oxlintrc.json` — Oxlint config; extends the root `oxlint.base.json` and adds `import`.
- `project.json` — `build` (`@nx/vite:build`), `test` (`vitest run --coverage`), `nx-release-publish`; `lint` is inferred by `@nx/oxlint`.

## Commands (run from the repository root)

- `npm run core:lint` — Oxlint.
- `npm run core:test` — Vitest 5 (jsdom) with V8 coverage in `coverage/libs/core`.
- `npm run core:build` — build into `dist/libs/core` (`index.js` ESM, `index.cjs` CJS, `index.d.ts`).

## Conventions

- `package.json` is `"type": "module"`, so Vite emits `index.js` (ESM) and `index.cjs` (CJS). Keep `main`/`module`/`exports` pointing at those names.
- Keep the library dependency-free at runtime and `sideEffects: false`. If you add a runtime dependency, add it to `dependencies` and mark it external in `vite.config.ts`.
- Guard DOM access (`typeof document === 'undefined'`) so utilities are safe under SSR.
- Write tests for every utility; tests run in jsdom.
- Existing source files use 4-space indentation and semicolons; specs use the repo style (2 spaces, no semicolons). Match the file you are editing.

## Brand packages

`brand.util.ts` imports `{ version }` from the brand packages' `package.json`. Named imports let the bundler inline only the version strings, so the published bundle has no runtime dependency on `@ouds/web-*`. That is why they are `devDependencies`. Consequences:

- The CDN URL is pinned to the brand versions present when `@ouds/core` was built. Rebuild and release core to pick up a new OUDS Web release.
- Always use named `{ version }` imports. A default import inlines the whole `package.json` (≈10 kB).
- These three `package.json` paths are listed in `allow` of `@nx/enforce-module-boundaries` (root `oxlint.base.json` and `eslint.config.mjs`), because the brand packages have no build target and the rule otherwise forbids buildable libraries from importing them.

## Boundaries

- Tag `lib:core`. It may import only `lib:web-orange`, `lib:web-orange-compact`, and `lib:web-sosh` (the `package.json` version imports above). `lib:react`, `lib:vue`, and `lib:angular` may import `lib:core`.
- Keep `depConstraints` and `allow` identical in `oxlint.base.json` and `eslint.config.mjs`.

## Releases

Published separately via Nx release (`nx-release-publish` from `dist/libs/core`, git-tag versioning), like the framework libraries.
