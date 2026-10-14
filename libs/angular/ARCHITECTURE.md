# Architecture — @ouds/angular

## Purpose & status

`@ouds/angular` is one of the three "RAV" (React / Angular / Vue) framework libraries in this monorepo, alongside [`@ouds/react`](../react/ARCHITECTURE.md) and [`@ouds/vue`](../vue/ARCHITECTURE.md). It originated in a separate project (`ouds-rav`) and was integrated into this monorepo's Nx workspace with its own independent versioning, separate from `libs/web`'s own version (`@ouds/web-common`, currently `1.5.0`).

The library is currently at an early, deliberately minimal stage. It ships a standalone `ButtonComponent` (`orange-button`; inputs mirror `CoreButtonProps` from `@ouds/core`, with a `clicked` output and a loading state) and an `OudsProviderComponent` (`orange-ouds-provider`; theme, brand, and rounded-corner settings). The provider loads the brand CSS through `@ouds/core`'s `loadBrandCSS` and wraps its content in a `div` carrying `data-bs-theme`, `data-bs-brand`, and the `use-rounded-corner-*` classes. `OudsService` holds the same settings for injection; `provideOuds(config)` registers an `OUDS_CONFIG` and an `APP_INITIALIZER` that adds the rounded-corner classes to `document.body`. More OUDS components will follow; see [CHANGELOG.md](./CHANGELOG.md) for the history.

## Isolation from `libs/web`

This project carries the Nx tag `lib:angular`. The `@nx/enforce-module-boundaries` ESLint rule (configured in the root `eslint.config.mjs`) keeps it isolated: it cannot import from `lib:web-common` or from `@ouds/react` / `@ouds/vue`; it may import `lib:core`. This is intentional — `@ouds/angular` must remain independently buildable and publishable, decoupled from `libs/web`'s internal source layout.

## Styling approach

Today the components only emit OUDS Web class names; the visual design comes from the brand stylesheet that `OudsProviderComponent` injects at runtime from the jsDelivr CDN (`@ouds/core` pins the version of the brand package it was built with). `ButtonComponent`'s own stylesheet only sets `:host { display: inline-block }`.

If the library later needs OUDS Web tokens/CSS at build time, it will consume them **via a published npm dependency** on the relevant brand package (or `@ouds/web-common`), not by importing `libs/web`'s internal Sass/token sources directly. This was a deliberate choice over consuming the monorepo source directly:

| | Published npm dependency (chosen) | Direct source consumption |
|---|---|---|
| Release coupling | Decoupled — `@ouds/angular` adopts a new `libs/web` token release on its own schedule | Coupled — a token bump in `libs/web` can force a coordinated `@ouds/angular` release |
| Boundary rule | No change needed — stays isolated | Requires relaxing `enforce-module-boundaries` |
| Portability | `@ouds/angular` stays extractable/publishable independent of this monorepo's layout | Ties `@ouds/angular` to the monorepo's internal file structure |
| Dev feedback loop | Slower — needs a published (or prerelease/tarball) version to pick up unreleased token changes | Instant — token changes are visible without a publish step |

No OUDS Web package is a dependency of this library yet. Add one as a `peerDependency`/`dependency` when a component needs build-time access to tokens or Sass.

## Conventions

- **Folder structure**: one folder per component or feature under `src/components/`, kebab-case (e.g. `src/components/button/`), containing the component, its template and styles, the co-located spec, the story, and an `index.ts` barrel.
- **Naming**: PascalCase + `Component` suffix for the class (`ButtonComponent`), kebab-case for the folder and file name (`button.component.ts`); selectors are prefixed (`orange-button`).
- **Component style**: standalone components (`standalone: true`), no `NgModule` wrapping, `OnPush` change detection.
- **Exports**: each folder's `index.ts` is re-exported from `src/components/index.ts`, which `src/index.ts` re-exports (barrel files); this is the package's public API surface.
- **Shared types**: props shared with the other frameworks live in `@ouds/core`. `ButtonComponent` types its `variant` input with `Variant` from `@ouds/core`.
- **Testing**: [Jest](https://jestjs.io/) via `@nx/jest` + `jest-preset-angular` (not Vitest — see note below); spec files are co-located as `<name>.component.spec.ts`.
- **Linting**: ESLint 9 flat config (`eslint.config.mjs`) extending the root `eslint.config.mjs` (Nx base/TypeScript/JavaScript configs + module boundaries) and adding `angular-eslint` (selector prefix rules, template parser). The `lint` target is declared explicitly in `project.json`. Its cache inputs include the root `eslint.config.mjs` and exclude the git-ignored `.eslintcache`. No formatter is configured for this library.
- **Build**: [ng-packagr](https://github.com/ng-packagr/ng-packagr) via `@nx/angular:package`, producing an Angular Package Format (APF) distributable. `build` depends on `@ouds/core:build`. `@ouds/core` is imported by the sources but not yet declared in this library's `package.json`; see the known issue in [AGENTS.md](./AGENTS.md).

### Why ESLint instead of Oxlint

`@ouds/core`, `@ouds/react`, and `@ouds/vue` use Oxlint (`@nx/oxlint`, shared root `oxlint.base.json`), but Oxlint has no parser for Angular templates, HTML, or JSON, so the `@angular-eslint` rules can only run on ESLint. This library stays on ESLint until Oxlint covers Angular. It deliberately has no `.oxlintrc.json`, which would make `@nx/oxlint` infer a second lint target. The module-boundary `depConstraints` therefore live in the root `eslint.config.mjs` (this library), `oxlint.base.json` (core, React, Vue, and the Storybook apps), and `libs/web/eslint.config.mjs` (OUDS Web). Keep them in sync.

### Why Jest instead of Vitest

`@ouds/react` and `@ouds/vue` use Vitest 5, but Angular's official Vitest runner (`@angular/build:unit-test`) is developer-preview and requires an application-style `buildTarget` (`@angular/build:application`), which is incompatible with an `ng-packagr`-based library. Jest (`jest-preset-angular@17`, compatible with Angular 22 / TypeScript 6.0.3) is the pragmatic alternative until Angular's Vitest support matures for library projects.

See [AGENTS.md](./AGENTS.md) for the agent-facing summary of these rules. Stories are rendered by [`apps/angular-storybook`](../../apps/angular-storybook/AGENTS.md).

## Versioning & releases

This project is configured for [Nx release](https://nx.dev/features/manage-releases) (`release.version.currentVersionResolver: "git-tag"` in `project.json`) and publishes via the `nx-release-publish` target. Notable changes are recorded in [CHANGELOG.md](./CHANGELOG.md) ([Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format).
