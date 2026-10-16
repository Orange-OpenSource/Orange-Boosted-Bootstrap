# Architecture — @ouds/vue

## Purpose & status

`@ouds/vue` is one of the three "RAV" (React / Angular / Vue) framework libraries in this monorepo, alongside [`@ouds/react`](../react/ARCHITECTURE.md) and [`@ouds/angular`](../angular/ARCHITECTURE.md). It originated in a separate project (`ouds-rav`) and was integrated into this monorepo's Nx workspace with its own independent versioning, separate from `libs/web`'s own version (`@ouds/web-common`, currently `1.5.0`).

The library is currently at an early, deliberately minimal stage: it ships a `Button`, an `Icon` (props extend `CoreIconProps`; it renders the inline `<svg>` of an `@ouds/icons` icon with the OUDS Web icon markup), and an `OudsProvider` (which loads the brand CSS through `@ouds/core`'s `loadBrandCSS` and provides the theme/brand settings with `provide`/`inject`). More OUDS components will follow; see [CHANGELOG.md](./CHANGELOG.md) for the history.

## Isolation from `libs/web`

This project carries the Nx tag `lib:vue`. The `@nx/enforce-module-boundaries` rule (run by Oxlint, configured in the root `oxlint.base.json`) keeps it isolated: it cannot import from `lib:web-common` or from `@ouds/react` / `@ouds/angular`. This is intentional — `@ouds/vue` must remain independently buildable and publishable, decoupled from `libs/web`'s internal source layout.

## Styling approach

Today the components only emit OUDS Web class names; the visual design comes from the brand stylesheet that `OudsProvider` injects at runtime from the jsDelivr CDN (`@ouds/core` pins the version of the brand package it was built with).

If the library later needs OUDS Web tokens/CSS at build time, it will consume them **via a published npm dependency** on the relevant brand package (or `@ouds/web-common`), not by importing `libs/web`'s internal Sass/token sources directly. This was a deliberate choice over consuming the monorepo source directly:

|                   | Published npm dependency (chosen)                                                              | Direct source consumption                                                        |
| ----------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Release coupling  | Decoupled — `@ouds/vue` adopts a new `libs/web` token release on its own schedule              | Coupled — a token bump in `libs/web` can force a coordinated `@ouds/vue` release |
| Boundary rule     | No change needed — stays isolated                                                              | Requires relaxing `enforce-module-boundaries`                                    |
| Portability       | `@ouds/vue` stays extractable/publishable independent of this monorepo's layout                | Ties `@ouds/vue` to the monorepo's internal file structure                       |
| Dev feedback loop | Slower — needs a published (or prerelease/tarball) version to pick up unreleased token changes | Instant — token changes are visible without a publish step                       |

No OUDS Web package is a dependency of this library yet. Add one as a `peerDependency`/`dependency` when a component needs build-time access to tokens or Sass.

## Conventions

- **Folder structure**: one folder per component under `src/components/`, kebab-case (e.g. `src/components/button/`), containing `<name>.component.vue`, `<name>.model.ts`, the co-located spec, and the story.
- **Naming**: kebab-case file with a `.component.vue` suffix (`button.component.vue`) and a PascalCase export (`Button`), matching `@ouds/react`.
- **Exports**: every component is re-exported from `src/index.ts` (barrel file, `export { default as Button } from './components/button/button.component.vue'`), together with its types, the `useOuds` composable, and the `Brand` and `Theme` types re-exported from `@ouds/core`; this is the package's public API surface.
- **Testing**: [Vitest](https://vitest.dev/) 5 (jsdom) + [@vue/test-utils](https://test-utils.vuejs.org/) through an `nx:run-commands` target running `vitest run --coverage`. It doesn't use `@nx/vitest:test`, because `@nx/vitest@23.2.1` only supports Vitest 3–4. Spec files are co-located as `<name>.spec.ts`. Coverage uses the V8 provider (`@vitest/coverage-v8`), is configured in the `test.coverage` block of `vite.config.ts`, and writes text/HTML/lcov reports to `coverage/libs/vue`, and is held at a 100% threshold (stories excluded).
- **Linting**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) via `@nx/oxlint`, which infers the `lint` target (it is not declared in `project.json`). `.oxlintrc.json` extends the root `oxlint.base.json` (`typescript`/`unicorn`/`oxc` plugins, `correctness` = error, module boundaries) and adds the `vue` and `import` plugins. Oxlint lints the `<script>` blocks of `.vue` files but not `<template>` markup, so template accessibility is checked by a `lint-templates` target (ESLint 9 with `eslint-plugin-vuejs-accessibility`, config in `eslint.config.mjs`) that `lint` depends on.
- **Build**: [Vite](https://vitejs.dev/) library mode via `@nx/vite:build` (with `@vitejs/plugin-vue` and `@vue/language-core` for `.vue` type declarations), producing ES/CJS bundles (no UMD) + type declarations; the target type-checks with `vue-tsc` (a pinned root devDependency). `resolve.tsconfigPaths: true` (Vite's built-in support for the `paths` of `tsconfig.base.json`) resolves `@ouds/*` from sources for tests and Storybook. `@ouds/core` is a `dependency`, kept external in the bundle, and the `.d.ts` files are type-checked against its built declarations so they import `@ouds/core` by name; `build` depends on `@ouds/core:build`.

See [AGENTS.md](./AGENTS.md) for the agent-facing summary of these rules. Stories are rendered by [`apps/vue-storybook`](../../apps/vue-storybook/AGENTS.md).

## Versioning & releases

Notable changes are recorded in [CHANGELOG.md](./CHANGELOG.md) ([Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format). Unlike `@ouds/react` and `@ouds/angular`, this project's `project.json` does not yet configure [Nx release](https://nx.dev/features/manage-releases) (`release.version`, `nx-release-publish` `packageRoot`); see the known issue in [AGENTS.md](./AGENTS.md).
