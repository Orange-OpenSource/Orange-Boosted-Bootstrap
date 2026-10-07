# Architecture — @ouds/angular

## Purpose & status

`@ouds/angular` is one of the three "RAV" (React / Angular / Vue) framework libraries in this monorepo, alongside [`@ouds/react`](../react/ARCHITECTURE.md) and [`@ouds/vue`](../vue/ARCHITECTURE.md). It originated in a separate project (`ouds-rav`) and was integrated into this monorepo's Nx workspace with its own independent versioning, separate from `libs/web`'s own version (`@ouds/web-common`, currently `1.5.0`).

The library is currently at an early, deliberately minimal stage: a single standalone `HelloWorldComponent` validates the Nx build/lint/test pipeline. It does not yet ship real OUDS components — see [CHANGELOG.md](./CHANGELOG.md) for the reset that produced this state.

## Isolation from `libs/web`

This project carries the Nx tag `lib:angular`. The `@nx/enforce-module-boundaries` ESLint rule (configured in the root `eslint.config.mjs`) keeps it isolated: it cannot import from `lib:web-common` or from `@ouds/react` / `@ouds/vue`. This is intentional — `@ouds/angular` must remain independently buildable and publishable, decoupled from `libs/web`'s internal source layout.

## Styling approach (planned)

Once this library grows beyond `HelloWorldComponent`, components will source their visual design from OUDS Web tokens/CSS **via a published npm dependency** on `@ouds/web-common` (and/or the relevant brand package), not by importing `libs/web`'s internal Sass/token sources directly. This was a deliberate choice over consuming the monorepo source directly:

| | Published npm dependency (chosen) | Direct source consumption |
|---|---|---|
| Release coupling | Decoupled — `@ouds/angular` adopts a new `libs/web` token release on its own schedule | Coupled — a token bump in `libs/web` can force a coordinated `@ouds/angular` release |
| Boundary rule | No change needed — stays isolated | Requires relaxing `enforce-module-boundaries` |
| Portability | `@ouds/angular` stays extractable/publishable independent of this monorepo's layout | Ties `@ouds/angular` to the monorepo's internal file structure |
| Dev feedback loop | Slower — needs a published (or prerelease/tarball) version to pick up unreleased token changes | Instant — token changes are visible without a publish step |

No dependency has been added yet — `HelloWorldComponent` has no styling. When the first real component is built, add `@ouds/web-common` (or the relevant brand package) as a `peerDependency`/`dependency` at that time.

## Conventions

- **Folder structure**: one folder per component under `src/lib/`, kebab-case (e.g. `src/lib/hello-world/`), containing the component file and its co-located spec file.
- **Naming**: PascalCase + `Component` suffix for the class (`HelloWorldComponent`), kebab-case for the folder and file name (`hello-world.component.ts`); selectors are prefixed (`orange-hello-world`).
- **Component style**: standalone components (`standalone: true`), no `NgModule` wrapping.
- **Exports**: every component is re-exported from `src/index.ts` (barrel file); this is the package's public API surface.
- **Testing**: [Jest](https://jestjs.io/) via `@nx/jest` + `jest-preset-angular` (not Vitest — see note below); spec files are co-located as `<name>.component.spec.ts`.
- **Linting**: ESLint 9 flat config (`eslint.config.mjs`) extending the root `eslint.config.mjs` (Nx base/TypeScript/JavaScript configs + module boundaries) and adding `angular-eslint` (selector prefix rules, template parser). The `lint` target is declared explicitly in `project.json`. Its cache inputs include the root `eslint.config.mjs` and exclude the git-ignored `.eslintcache`. No formatter is configured for this library.
- **Build**: [ng-packagr](https://github.com/ng-packagr/ng-packagr) via `@nx/angular:package`, producing an Angular Package Format (APF) distributable.

### Why ESLint instead of Oxlint

`@ouds/react` and `@ouds/vue` moved to Oxlint (`@nx/oxlint`, shared root `oxlint.base.json`), but Oxlint has no parser for Angular templates, HTML, or JSON, so the `@angular-eslint` rules can only run on ESLint. This library stays on ESLint until Oxlint covers Angular. It deliberately has no `.oxlintrc.json`, which would make `@nx/oxlint` infer a second lint target. The module-boundary `depConstraints` therefore live in two places: the root `eslint.config.mjs` (this library) and `oxlint.base.json` (React/Vue). Keep them in sync.

### Why Jest instead of Vitest

`@ouds/react` and `@ouds/vue` use Vitest 5, but Angular's official Vitest runner (`@angular/build:unit-test`) is developer-preview and requires an application-style `buildTarget` (`@angular/build:application`), which is incompatible with an `ng-packagr`-based library. Jest (`jest-preset-angular@17`, compatible with Angular 22 / TypeScript 6.0.3) is the pragmatic alternative until Angular's Vitest support matures for library projects.

See [AGENTS.md](./AGENTS.md) for the agent-facing summary of these rules, the [`angular-component-patterns`](../../.github/skills/angular-component-patterns/SKILL.md) agent skill for the step-by-step workflow, and [`rav-conventions`](../../.github/skills/rav-conventions/SKILL.md) for conventions shared across all three RAV libraries.

## Versioning & releases

This project is configured for [Nx release](https://nx.dev/features/manage-releases) (`release.version.currentVersionResolver: "git-tag"` in `project.json`) and publishes via the `nx-release-publish` target. Notable changes are recorded in [CHANGELOG.md](./CHANGELOG.md) ([Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format).
