# Architecture — OUDS Web

## Purpose

OUDS Web is the Bootstrap-based CSS/JS implementation of the Orange Unified Design System. It is a fork of Bootstrap, published as one common package plus one package per brand. Since the Nx integration it lives in `libs/web/` of the OUDS monorepo, next to the framework libraries (`@ouds/core`, `@ouds/react`, `@ouds/vue`, `@ouds/angular`).

## Packages

| Package | Location | Contents |
| --- | --- | --- |
| `@ouds/web-common` | `libs/web/` | Common Sass (`scss/`), component JavaScript (`js/src/`), built JS (`dist/js/`), docs site, build scripts, tests |
| `@ouds/web-orange` | `libs/web/packages/orange/` | Orange tokens (`scss/`), compiled CSS (`dist/css/`), docs `config.yml` |
| `@ouds/web-orange-compact` | `libs/web/packages/orange-compact/` | Orange Compact tokens and CSS |
| `@ouds/web-sosh` | `libs/web/packages/sosh/` | Sosh tokens and CSS |
| `@ouds/web-migrate` | `libs/web/packages/migrate/` | Migration CLI (Boosted / OB1 / older OUDS Web → current) |

A consumer installs `@ouds/web-common` plus exactly one brand package. All of them share one version (currently `1.5.0`), bumped together by `npm run release-version`.

## Build pipeline

- **CSS** is built per brand. Each brand compiles its own `scss/` entry files with Sass; those files import the common Sass as `@ouds/web-common/scss/...`, resolved through `--load-path=../../../../node_modules/` (the repository root, where the workspace symlink lives). PostCSS adds prefixes, RTL variants, and minified files in `packages/<brand>/dist/css/`.
- **JS** is built once in `@ouds/web-common`: Rollup + Babel produce the standalone, ESM, and bundle (with Popper) builds in `dist/js/`, terser minifies them, and `build/build-plugins.mjs` builds one UMD file per plugin in `js/dist/`.
- **SRI**: `build/generate-sri.mjs` hashes the brand CSS, the JS, and Popper, and writes them to each brand's `config.yml` for the docs.
- **Docs**: the Astro site in `site/` is built three times (`BRAND=orange|orange-compact|sosh`) into `_site/`.
- **Storybook**: `@storybook/html-vite`; stories are generated from the built docs (`stories/create-stories-from-doc.js` → `stories/auto`).

Distribution channels: npm, Composer, NuGet (`nuget/*.nuspec`, `packages/<brand>/nuget/`), release zips, and the jsDelivr CDN (used by `@ouds/core`'s `loadBrandCSS`).

## Nx integration

OUDS Web was a standalone repository before. It was integrated into the Nx monorepo without changing its public packages or its build, in these steps:

1. **Move into `libs/web/`** (`feat(nx-prep)` commits). The root `package.json` became the private `@ouds/monorepo` with npm workspaces (`libs/web`, `libs/web/packages/*`, then the framework libraries). Every familiar root script (`npm start`, `npm run dist`, `npm test`, …) still works and delegates to `npx nx run @ouds/web-common:<script>`.
2. **No `project.json`.** Nx infers one `nx:run-script` target per `package.json` script. `nx.json` `targetDefaults` add caching for `css`, `js`, `docs-build`, `lint`, and `test` (with `dist/css`, `dist/js`, and `_site` as outputs).
3. **Path fixes for hoisted dependencies.** Code that assumed `./node_modules/<pkg>` now resolves packages from wherever npm installed them:
   - `require.resolve` / `createRequire(...).resolve` for Popper (SRI), `hammer-simulator` (Karma), and `tarteaucitronjs` (Astro);
   - Babel/Rollup excludes changed from `node_modules/**` to `**/node_modules/**`;
   - brand Sass `--load-path` and `release-zip` paths adjusted for the deeper location;
   - NuGet `nuspec` file paths prefixed with `libs\web\`;
   - brand packages depend on `@ouds/web-common` as `"*"` (workspace link) instead of `file:../..`;
   - CI workflow `paths` filters, coverage paths, and the migrate test command updated (`npm run test -w libs/web/packages/migrate`).
4. **Nx tags and module boundaries.** Each `package.json` has an `"nx"` field with its tag (`lib:web-common`, `lib:web-orange`, `lib:web-orange-compact`, `lib:web-sosh`, `lib:web-migrate`). `@nx/enforce-module-boundaries` lets brands depend only on `lib:web-common` and keeps `web-common`/`web-migrate` isolated. The brand packages also declare `"projectType": "library"`; without it Nx classifies them as apps, and the rule forbids `@ouds/core` and the Storybook apps from importing them (they read the brand version from `package.json` and the brand CSS).
5. **ESLint 8 → ESLint 9 flat config.** The repository root needs ESLint 9 (`@nx/eslint`, angular-eslint), while OUDS Web was on ESLint 8 with `.eslintrc.json`. Running both broke plugins hoisted to the root (they loaded ESLint 9 internals under ESLint 8, e.g. `unicorn/expiring-todo-comments`). `.eslintrc.json` and `.eslintignore` were converted to `eslint.config.mjs` and ESLint 8 was removed, so the whole repo runs a single ESLint version. The migration was verified against an ESLint 8 baseline: same 152 files linted, same warnings, same active rules on every override block. It also needed `@nx/eslint-plugin` and `globals` as devDependencies of `libs/web`, and `@eslint/js` at the root.
6. **Version conflicts.** `libs/web` keeps Vitest 4 and Sass 1.78.0 nested in its own `node_modules` (the framework libraries use Vitest 5, and the Angular toolchain brings Sass 1.104 to the root; the Sass tests are forced onto the pinned compiler in `scss/tests/sass-true/runner.js`), and the root pins `@babel/plugin-transform-runtime@^7` so Babel 8 isn't hoisted over the Babel 7 toolchain used here, and `libs/web` declares `cookie@^2`: Astro's generated prerender bundle imports `cookie` from `libs/web/site/dist/.prerender/`, and without a copy in `libs/web/node_modules` Node resolves the root `cookie@0.7.x` (CommonJS, used by Karma and Storybook) instead of Astro's nested 2.x, which breaks `docs-build`. In a monorepo, a package that is resolved from a build output rather than from its consumer must be declared where that output lives.

## Linting & tooling decisions

- **ESLint, not Oxlint.** OUDS Web lints JS embedded in `.html` fixtures and `.md` docs, which Oxlint can't parse. The config stays standalone (doesn't extend the root config) to keep Bootstrap's XO-based rule set unchanged. The framework libraries use Oxlint instead.
- **Stylelint** (Bootstrap config) for `**/*.{css,scss}`, plus `find-unused-sass-variables` per brand.
- **Prettier** only for the docs site.

## Relationship with the framework libraries

`@ouds/core`, `@ouds/react`, `@ouds/vue`, and `@ouds/angular` never import OUDS Web sources. They consume it as published packages: `@ouds/core` inlines the brand package versions at build time and loads the brand CSS from the CDN, and the Storybook apps load `@ouds/web-orange`'s compiled CSS. This keeps OUDS Web releasable on its own schedule and the framework libraries independently versioned.

## Versioning & releases

OUDS Web keeps its own release flow (`npm run release` → Storybook build + zips, `release-version`, `release-sri`), independent of Nx release, which is used by the framework libraries. Changes are recorded in [CHANGELOG.md](./CHANGELOG.md).
