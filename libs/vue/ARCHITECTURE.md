# Architecture — @ouds/vue

## Purpose & status

`@ouds/vue` is one of the three "RAV" (React / Angular / Vue) framework libraries in this monorepo, alongside [`@ouds/react`](../react/ARCHITECTURE.md) and [`@ouds/angular`](../angular/ARCHITECTURE.md). It originated in a separate project (`ouds-rav`, see its `repository` field in `package.json`) and was integrated into this monorepo's Nx workspace with its own independent versioning, separate from `libs/web`'s own version (`@ouds/web-common`, currently `1.5.0`).

The library is currently at an early, deliberately minimal stage: it ships a `Button` and an `OudsProvider` (which loads the brand CSS through `@ouds/core`'s `loadBrandCSS` and provides the theme/brand settings with `provide`/`inject`). More OUDS components will follow — see [CHANGELOG.md](./CHANGELOG.md) for the reset that produced this state.

## Isolation from `libs/web`

This project carries the Nx tag `lib:vue`. The `@nx/enforce-module-boundaries` rule (run by Oxlint, configured in the root `oxlint.base.json`) keeps it isolated: it cannot import from `lib:web-common` or from `@ouds/react` / `@ouds/angular`. This is intentional — `@ouds/vue` must remain independently buildable and publishable, decoupled from `libs/web`'s internal source layout.

## Styling approach (planned)

As this library grows, components will source their visual design from OUDS Web tokens/CSS **via a published npm dependency** on `@ouds/web-common` (and/or the relevant brand package), not by importing `libs/web`'s internal Sass/token sources directly. This was a deliberate choice over consuming the monorepo source directly:

|                   | Published npm dependency (chosen)                                                              | Direct source consumption                                                        |
| ----------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Release coupling  | Decoupled — `@ouds/vue` adopts a new `libs/web` token release on its own schedule              | Coupled — a token bump in `libs/web` can force a coordinated `@ouds/vue` release |
| Boundary rule     | No change needed — stays isolated                                                              | Requires relaxing `enforce-module-boundaries`                                    |
| Portability       | `@ouds/vue` stays extractable/publishable independent of this monorepo's layout                | Ties `@ouds/vue` to the monorepo's internal file structure                       |
| Dev feedback loop | Slower — needs a published (or prerelease/tarball) version to pick up unreleased token changes | Instant — token changes are visible without a publish step                       |

No OUDS Web dependency has been added yet: `OudsProvider` loads the brand CSS from the CDN at runtime. When the first real component is built, add `@ouds/web-common` (or the relevant brand package) as a `peerDependency`/`dependency` at that time.

## Conventions

- **Folder structure**: one folder per component under `src/components/`, kebab-case (e.g. `src/components/button/`), containing `<name>.component.vue`, `<name>.model.ts`, the co-located spec, and the story.
- **Naming**: kebab-case file with a `.component.vue` suffix (`button.component.vue`) and a PascalCase export (`Button`), matching `@ouds/react`.
- **Exports**: every component is re-exported from `src/index.ts` (barrel file, `export { default as X } from './x/X.vue'`); this is the package's public API surface.
- **Testing**: [Vitest](https://vitest.dev/) 5 (jsdom) + [@vue/test-utils](https://test-utils.vuejs.org/) through an `nx:run-commands` target running `vitest run --coverage`. It doesn't use `@nx/vitest:test`, because `@nx/vitest@23.2.1` only supports Vitest 3–4. Spec files are co-located as `<Name>.spec.ts`. Coverage uses the V8 provider (`@vitest/coverage-v8`), is configured in the `test.coverage` block of `vite.config.ts`, and writes text/HTML/lcov reports to `coverage/libs/vue`, and is held at a 100% threshold (stories excluded).
- **Linting**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) via `@nx/oxlint`, which infers the `lint` target (it is not declared in `project.json`). `.oxlintrc.json` extends the root `oxlint.base.json` (`typescript`/`unicorn`/`oxc` plugins, `correctness` = error, module boundaries) and adds the `vue` and `import` plugins. Oxlint lints the `<script>` blocks of `.vue` files but not `<template>` markup.
- **Build**: [Vite](https://vitejs.dev/) library mode via `@nx/vite:build` (with `@vitejs/plugin-vue` and `@vue/language-core` for `.vue` type declarations), producing ES/CJS/UMD bundles + type declarations. `@ouds/core` is a `dependency`, kept external in the bundle, and the `.d.ts` files are type-checked against its built declarations so they import `@ouds/core` by name; `build` depends on `@ouds/core:build`.

See [AGENTS.md](./AGENTS.md) for the agent-facing summary of these rules, the [`vue-component-patterns`](../../.github/skills/vue-component-patterns/SKILL.md) agent skill for the step-by-step workflow, and [`rav-conventions`](../../.github/skills/rav-conventions/SKILL.md) for conventions shared across all three RAV libraries.

## Versioning & releases

This project is configured for [Nx release](https://nx.dev/features/manage-releases) (`release.version.currentVersionResolver: "git-tag"` in `project.json`) and publishes via the `nx-release-publish` target. Notable changes are recorded in [CHANGELOG.md](./CHANGELOG.md) ([Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format).
