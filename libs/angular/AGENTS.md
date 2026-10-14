# @ouds/angular — Agent Guidelines

Scope: everything under `libs/angular/`. The root [`AGENTS.md`](../../AGENTS.md) still applies; this file adds Angular-specific rules. Background and design decisions live in [`ARCHITECTURE.md`](./ARCHITECTURE.md).

## Layout

- `src/components/<name>/` — one kebab-case folder per component or feature, holding `<name>.component.ts`, its template and styles (`<name>.component.html`, `<name>.component.scss`), a co-located `<name>.component.spec.ts`, `<name>.stories.ts`, and an `index.ts` barrel (e.g. `src/components/button/`). `src/components/ouds-provider/` holds `OudsProviderComponent` and `OudsService` (with `OUDS_CONFIG` and `provideOuds()`), each with its spec.
- `src/index.ts` — barrel file and the package's only public API (ng-packagr `entryFile`). It re-exports `src/components/index.ts`; add each new component folder's `index.ts` to that barrel.
- `src/test-setup.ts` — Jest zone environment (`setupZoneTestEnv`).
- `ng-package.json` — ng-packagr config; output goes to `dist/libs/angular` in Angular Package Format.
- `jest.config.ts` — Jest via `jest-preset-angular`.
- `eslint.config.mjs` — ESLint 9 flat config; extends the root `eslint.config.mjs` and adds `angular-eslint`.
- `project.json` — explicit `build` (`@nx/angular:package`, `dependsOn: ["^build"]` so `@ouds/core` is built first), `lint` (`eslint . --cache`), `test` (`@nx/jest:jest`), and `nx-release-publish` targets, plus the Nx release settings.

## Commands (run from the repository root)

- `npm run angular:lint` — ESLint. Cache inputs include the root `eslint.config.mjs`; `.eslintcache` is git-ignored.
- `npm run angular:test` — Jest (jsdom). Coverage directory: `coverage/libs/angular`.
- `npm run angular:build` — ng-packagr build.

## Why ESLint, not Oxlint

This library stays on ESLint on purpose: Oxlint has no parser for Angular templates, HTML, or JSON rules. Do not add an `.oxlintrc.json` here — `@nx/oxlint` would infer a second lint target for this project.

## Code conventions

- Standalone components only (`standalone: true`); no `NgModule`.
- Class names are PascalCase with a `Component` suffix (`ButtonComponent`); files are kebab-case (`button.component.ts`).
- Selectors use the `orange` prefix, which ESLint enforces: kebab-case for elements (`orange-button`, `orange-ouds-provider`), camelCase for attribute directives (`orangeTooltip`).
- Inputs mirror the shared `Core<Name>Props` from `@ouds/core` (e.g. `variant`, `isDisabled`, `isLoading`); the click output is named `clicked` so it doesn't shadow the native `click` event. Components use `ChangeDetectionStrategy.OnPush`.
- `@ouds/core` is imported from the sources (`loadBrandCSS`, `Variant`, …); keep it in sync with the `dependencies` declared in `package.json` (see Known issues).
- `@angular/core` and `@angular/common` are `peerDependencies` — never bundle them.
- No code formatter is configured for this library. Existing sources use 4-space indentation and trailing commas, which conflicts with `.editorconfig` (2 spaces). Match the file you are editing, and don't reformat unrelated code.

## Testing

- Every component gets a co-located `*.component.spec.ts` using `TestBed` with the standalone component in `imports` (see `button/button.component.spec.ts`).
- Coverage is collected on every run and held at a 100% global threshold (statements, branches, functions, lines) for `src/**/*.ts`; stories, barrel `index.ts` files, specs, and `src/test-setup.ts` are excluded. `@ouds/core` is mapped to its sources in `jest.config.ts`, so tests don't need a prior `core:build`.
- Angular 22 components default to `OnPush`: in test host components, drive bindings with signals (or `fixture.componentRef.setInput`), not by mutating plain properties.
- Jest is used instead of Vitest because Angular's Vitest runner needs an application `buildTarget`, which this ng-packagr library doesn't have (details in `ARCHITECTURE.md`).

## Boundaries

- Tag `lib:angular`. `@nx/enforce-module-boundaries` (root `eslint.config.mjs`) forbids imports from `@ouds/web-*`, `@ouds/react`, and `@ouds/vue`.
- The brand CSS is loaded at runtime from the CDN through `@ouds/core`'s `loadBrandCSS` (called by `OudsProviderComponent`). Any future build-time dependency on OUDS Web must be a **published** package, not `libs/web` sources (see `ARCHITECTURE.md`).
- If you change `depConstraints` in the root `eslint.config.mjs`, mirror the change in `oxlint.base.json` and `libs/web/eslint.config.mjs`.

## Related

- Stories live next to the components and render in [`apps/angular-storybook`](../../apps/angular-storybook/AGENTS.md) (`npm run storybook:angular:serve`; run `npm run angular:build` first).
- There are no RAV-specific agent skills; the skills in `.github/skills/` cover OUDS Web only.
- Record notable changes in [`CHANGELOG.md`](./CHANGELOG.md) (Keep a Changelog). Releases go through Nx release (`nx-release-publish`, git-tag versioning).

## Known issues

- `package.json` declares no `dependencies`, although `ButtonComponent` and `OudsProviderComponent` import `@ouds/core` (`@ouds/react` and `@ouds/vue` declare it as a dependency). Nx still sees the import, so `build` runs after `@ouds/core:build`, but the manifest ng-packagr writes to `dist/libs/angular/package.json` lists only `tslib` as a dependency, so consumers would not get `@ouds/core` installed until it is added to `dependencies`.
