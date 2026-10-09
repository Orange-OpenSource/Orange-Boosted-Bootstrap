# Architecture — OUDS monorepo

This document is the big picture of the repository: what the Nx projects are, how they depend on each other, how they are built, and how they are released. Each project has its own `ARCHITECTURE.md` and/or `AGENTS.md` with the details; this file links to them instead of repeating them. Agent-facing commands and conventions live in [`AGENTS.md`](AGENTS.md).

## Purpose

The repository hosts the Orange Unified Design System (OUDS) implementations for the web, in two families that share a repository but not a release cycle:

- **OUDS Web** (`libs/web`): a fork of Bootstrap that ships CSS and JavaScript, one theme package per brand (Orange, Orange Compact, Sosh).
- **The RAV libraries** (`libs/react`, `libs/vue`, `libs/angular`): React, Vue 3, and Angular component libraries, with a shared framework-agnostic package (`libs/core`). They are versioned and published independently of OUDS Web. They are currently minimal scaffolds that validate the build, lint, and test pipelines.

An npm-workspace monorepo hosts them, and [Nx](https://nx.dev) orchestrates tasks, caching, and import boundaries. Root `npm run` scripts delegate to `npx nx run <project>:<target>`.

## Project graph

12 Nx projects:

| Project                    | Location                            | Tag                      | Role                                                       |
| -------------------------- | ----------------------------------- | ------------------------ | ---------------------------------------------------------- |
| `@ouds/web-common`         | `libs/web/`                         | `lib:web-common`         | Common Sass, component JS, docs site, build scripts, tests |
| `@ouds/web-orange`         | `libs/web/packages/orange/`         | `lib:web-orange`         | Orange tokens and compiled CSS                             |
| `@ouds/web-orange-compact` | `libs/web/packages/orange-compact/` | `lib:web-orange-compact` | Orange Compact tokens and CSS                              |
| `@ouds/web-sosh`           | `libs/web/packages/sosh/`           | `lib:web-sosh`           | Sosh tokens and CSS                                        |
| `@ouds/web-migrate`        | `libs/web/packages/migrate/`        | `lib:web-migrate`        | Migration CLI                                              |
| `@ouds/core`               | `libs/core/`                        | `lib:core`               | Framework-agnostic types and utilities                     |
| `@ouds/react`              | `libs/react/`                       | `lib:react`              | React components                                           |
| `@ouds/vue`                | `libs/vue/`                         | `lib:vue`                | Vue 3 components                                           |
| `@ouds/angular`            | `libs/angular/`                     | `lib:angular`            | Angular components                                         |
| `@ouds/react-storybook`    | `apps/react-storybook/`             | `app:react`              | Storybook for `@ouds/react`                                |
| `@ouds/vue-storybook`      | `apps/vue-storybook/`               | `app:vue`                | Storybook for `@ouds/vue`                                  |
| `@ouds/angular-storybook`  | `apps/angular-storybook/`           | `app:angular`            | Storybook for `@ouds/angular`                              |

```
@ouds/web-common ◀── @ouds/web-orange | @ouds/web-orange-compact | @ouds/web-sosh
@ouds/web-migrate                                   (isolated)

@ouds/core ──(brand package.json files, versions only)──▶ @ouds/web-orange | -compact | -sosh

@ouds/react   ──▶ @ouds/core        @ouds/react-storybook   ──▶ @ouds/react   + @ouds/web-orange
@ouds/vue     ──▶ @ouds/core        @ouds/vue-storybook     ──▶ @ouds/vue     + @ouds/web-orange
@ouds/angular ──▶ @ouds/core        @ouds/angular-storybook ──▶ @ouds/angular + @ouds/web-orange
```

Package-level dependencies and Nx-level imports are not the same thing. The framework libraries depend on `@ouds/core` at runtime. `@ouds/core` reads the brand `package.json` files only to inline version numbers at build time. The framework libraries do not yet depend on OUDS Web's CSS; when they start to, they will use a published npm dependency, not the monorepo sources (see [`libs/react/ARCHITECTURE.md`](libs/react/ARCHITECTURE.md) for the reasoning).

## Dependency rules

`@nx/enforce-module-boundaries` (severity `error`) enforces the allow-list below. A violation fails `lint`.

| Source tag                                                 | May depend on                                        |
| ---------------------------------------------------------- | ---------------------------------------------------- |
| `lib:web-common`, `lib:web-migrate`                        | nothing (isolated)                                   |
| `lib:web-orange`, `lib:web-orange-compact`, `lib:web-sosh` | `lib:web-common`                                     |
| `lib:core`                                                 | the brand packages (their `package.json` files only) |
| `lib:react`, `lib:vue`, `lib:angular`                      | itself and `lib:core`                                |
| `app:react`, `app:vue`, `app:angular`                      | its own framework library and `lib:web-orange`       |

Consequences:

- A framework library never imports another framework library or OUDS Web's sources. This keeps each one independently buildable and publishable.
- `@ouds/core` must stay free of React, Vue, and Angular.
- The brand packages declare `"nx": { "projectType": "library" }` in their `package.json`. Without it Nx treats them as apps and the rule forbids importing them.
- The relative import of a library's `package.json` from a Storybook app (to display its version) is allowed by an inline `eslint-disable-next-line @nx/enforce-module-boundaries` comment.

The `depConstraints` are duplicated in three configs because three linters run in the repo. Keep them in sync:

- `oxlint.base.json`: `@ouds/core`, `@ouds/react`, `@ouds/vue`, and the Storybook apps.
- `eslint.config.mjs`: `@ouds/angular`.
- `libs/web/eslint.config.mjs`: `@ouds/web-*`.

## Linting and formatting

| Area                                                               | Linter                                                        | Why                                                                                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `@ouds/core`, `@ouds/react`, `@ouds/vue`, the three Storybook apps | Oxlint through `@nx/oxlint`                                   | Fast; the `lint` target is inferred. Each project's `.oxlintrc.json` extends `oxlint.base.json` and adds its plugins |
| `@ouds/angular`                                                    | ESLint 9 (flat config extending the root one)                 | Oxlint cannot parse Angular templates, HTML, or JSON rules                                                           |
| `@ouds/web-*`                                                      | ESLint 9 (standalone `libs/web/eslint.config.mjs`), Stylelint | Keeps Bootstrap's XO/unicorn/import rule set and lints `<script>` blocks in HTML and JS blocks in Markdown           |

`oxlint.base.json` is deliberately not named `.oxlintrc.json`, so `@nx/oxlint` infers no lint target for the ESLint projects. There is no code formatter for the RAV libraries; Prettier covers the documentation site only.

## Build pipeline

Nx task defaults are in `nx.json` (`lint` and `test` are cached; `css`, `js`, and `docs-build` are cached with their output folders).

**OUDS Web** ([`libs/web/ARCHITECTURE.md`](libs/web/ARCHITECTURE.md))

- CSS is built per brand from the common Sass (`@ouds/web-common/scss/...`); PostCSS adds prefixes, RTL, and minified files.
- JavaScript is built once in `@ouds/web-common` (Rollup + Babel, then terser, plus one UMD file per plugin).
- The Astro documentation site is built once per brand.
- Subresource integrity hashes are generated into each brand's `config.yml`. `libs/web/dist/**` and those hashes are tracked in git by convention, so avoid regenerating them incidentally.

**Framework libraries** ([React](libs/react/ARCHITECTURE.md), [Vue](libs/vue/ARCHITECTURE.md), [Angular](libs/angular/ARCHITECTURE.md))

- `@ouds/core`, `@ouds/react`, and `@ouds/vue` build with Vite library mode (`@nx/vite:build`) into `dist/libs/<lib>`, producing ESM, CJS, and type declarations.
- `@ouds/angular` builds with ng-packagr (`@nx/angular:package`).
- `@ouds/react` and `@ouds/vue` declare `build` with `dependsOn: ["^build"]`, because their type declarations resolve against the built `@ouds/core` output rather than its sources. `@ouds/angular` has no such dependency declared today.

**Storybook apps** (one `AGENTS.md` per app)

- Storybook 10, one app per framework, rendering the stories that live next to each component in `libs/<framework>/`. Only `@ouds/react-storybook` declares `build` as depending on its library's `build`; for Vue and Angular, build the library first (`npm run vue:build` / `npm run angular:build`).
- Each app's `.storybook/manager.ts` sets the shared OUDS theme (`@ouds/storybook-theme`) and imports `.storybook/toolbar-addon.ts`, a manager addon that adds a read-only toolbar label with the library, `@ouds/web-orange`, and framework versions. The versions are read from `package.json` files in the manager bundle; they do not come from the preview's `globalTypes`.
- The preview (`.storybook/preview.*`) holds the decorators and the theme, brand, and rounded-corners toolbar selectors.
- `libs/web` has its own Storybook (`@storybook/html-vite`) generated from the built docs; it is separate from these apps.

## Testing

| Area                                     | Runner                                                                                                                                   |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `libs/web` JavaScript                    | Jasmine through Karma (Chrome, Chromium, or Firefox); coverage thresholds enforced                                                       |
| `libs/web` Sass                          | Sass True/Jasmine `*.test.scss`, plus Vitest CSS snapshots                                                                               |
| `@ouds/web-migrate`                      | Vitest                                                                                                                                   |
| `@ouds/core`, `@ouds/react`, `@ouds/vue` | Vitest 5 (jsdom) with V8 coverage in `coverage/libs/<lib>`                                                                               |
| `@ouds/angular`                          | Jest through `jest-preset-angular` (Angular's Vitest runner needs an application `buildTarget`, which doesn't fit an ng-packagr library) |
| Storybook apps                           | No tests                                                                                                                                 |

## Versioning and releases

- **OUDS Web**: all five `@ouds/web-*` packages share one version, bumped together by `npm run release-version`.
- **RAV libraries and `@ouds/core`**: each is versioned independently with Nx release (`git-tag` version resolver, `disk` fallback for `@ouds/core`) and published through its `nx-release-publish` target from `dist/libs/<lib>`. `@ouds/react`, `@ouds/vue`, and `@ouds/angular` record changes in their own `CHANGELOG.md`; `@ouds/core` has none yet.
- The Storybook apps are not published.

## Where to look next

| Topic                                     | Document                                                                                           |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Commands, code style, commit and PR rules | [`AGENTS.md`](AGENTS.md)                                                                           |
| OUDS Web internals                        | [`libs/web/ARCHITECTURE.md`](libs/web/ARCHITECTURE.md), [`libs/web/AGENTS.md`](libs/web/AGENTS.md) |
| Shared types and utilities                | [`libs/core/AGENTS.md`](libs/core/AGENTS.md)                                                       |
| A framework library                       | `libs/<react\|vue\|angular>/ARCHITECTURE.md` and `AGENTS.md`                                       |
| A Storybook app                           | `apps/<react\|vue\|angular>-storybook/AGENTS.md`                                                   |
