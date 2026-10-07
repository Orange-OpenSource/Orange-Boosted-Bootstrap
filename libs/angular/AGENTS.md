# @ouds/angular — Agent Guidelines

Scope: everything under `libs/angular/`. The root [`AGENTS.md`](../../AGENTS.md) still applies; this file adds Angular-specific rules. Background and design decisions live in [`ARCHITECTURE.md`](./ARCHITECTURE.md).

## Layout

- `src/lib/<component>/<component>.component.ts` + co-located `<component>.component.spec.ts` — one kebab-case folder per component (e.g. `src/lib/hello-world/`).
- `src/index.ts` — barrel file and the package's only public API (ng-packagr `entryFile`). Re-export every new component here.
- `src/test-setup.ts` — Jest zone environment (`setupZoneTestEnv`).
- `ng-package.json` — ng-packagr config; output goes to `dist/libs/angular` in Angular Package Format.
- `jest.config.ts` — Jest via `jest-preset-angular`.
- `eslint.config.mjs` — ESLint 9 flat config; extends the root `eslint.config.mjs` and adds `angular-eslint`.
- `project.json` — explicit `build` (`@nx/angular:package`), `lint` (`eslint . --cache`), and `test` (`@nx/jest:jest`) targets.

## Commands (run from the repository root)

- `npm run angular:lint` — ESLint. Cache inputs include the root `eslint.config.mjs`; `.eslintcache` is git-ignored.
- `npm run angular:test` — Jest (jsdom). Coverage directory: `coverage/libs/angular`.
- `npm run angular:build` — ng-packagr build.

## Why ESLint, not Oxlint

This library stays on ESLint on purpose: Oxlint has no parser for Angular templates, HTML, or JSON rules. Do not add an `.oxlintrc.json` here — `@nx/oxlint` would infer a second lint target for this project.

## Code conventions

- Standalone components only (`standalone: true`); no `NgModule`.
- Class names are PascalCase with a `Component` suffix (`HelloWorldComponent`); files are kebab-case (`hello-world.component.ts`).
- Selectors use the `orange` prefix, which ESLint enforces: kebab-case for elements (`orange-hello-world`), camelCase for attribute directives (`orangeTooltip`).
- `@angular/core` and `@angular/common` are `peerDependencies` — never bundle them.
- No code formatter is configured for this library. Existing sources use 4-space indentation and trailing commas, which conflicts with `.editorconfig` (2 spaces). Match the file you are editing, and don't reformat unrelated code.

## Testing

- Every component gets a co-located `*.component.spec.ts` using `TestBed` with the standalone component in `imports` (see `hello-world.component.spec.ts`).
- Jest is used instead of Vitest because Angular's Vitest runner needs an application `buildTarget`, which this ng-packagr library doesn't have (details in `ARCHITECTURE.md`).

## Boundaries

- Tag `lib:angular`. `@nx/enforce-module-boundaries` (root `eslint.config.mjs`) forbids imports from `@ouds/web-*`, `@ouds/react`, and `@ouds/vue`.
- Styling will come from a **published** OUDS Web package, not from `libs/web` sources (see `ARCHITECTURE.md`).
- If you change `depConstraints` in the root `eslint.config.mjs`, mirror the change in `oxlint.base.json` and `libs/web/eslint.config.mjs`.

## Related

- Workflow skill: [`angular-component-patterns`](../../.github/skills/angular-component-patterns/SKILL.md)
- Shared RAV conventions: [`rav-conventions`](../../.github/skills/rav-conventions/SKILL.md)
- Record notable changes in [`CHANGELOG.md`](./CHANGELOG.md) (Keep a Changelog). Releases go through Nx release (`nx-release-publish`, git-tag versioning).
