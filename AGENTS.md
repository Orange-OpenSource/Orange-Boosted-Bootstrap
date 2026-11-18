# Repository Guidelines

## Project Structure & Module Organization

This is an npm-workspace monorepo hosting Orange Unified Design System (OUDS) libraries, orchestrated by **Nx** (task graph, caching, and import-boundary enforcement). Root scripts delegate to workspace projects via `npx nx run <project>:<target>`.

- `libs/web/js/src/` and `libs/web/scss/`: component JavaScript and Sass sources (Nx project `@ouds/web-common`). OUDS Web has its own agent guide with its layout, commands, lint setup, hoisting caveats, and the history of its Nx integration: [`libs/web/AGENTS.md`](libs/web/AGENTS.md) (design background in [`libs/web/ARCHITECTURE.md`](libs/web/ARCHITECTURE.md)). When working inside `libs/web`, read it too; it extends this file and wins where they disagree.
- `libs/web/packages/`: Orange (`@ouds/web-orange`), Orange Compact (`@ouds/web-orange-compact`), and Sosh (`@ouds/web-sosh`) brand packages, plus the migration CLI (`@ouds/web-migrate`).
- `libs/web/site/`: Astro documentation; content lives in `src/content/docs/`, assets in `src/assets/` and `static/`.
- `libs/web/js/tests/` and `libs/web/scss/tests/`: automated and visual tests.
- `libs/web/build/` and `libs/web/stories/`: build tooling and Storybook support.
- `libs/core/`: `@ouds/core`, framework-agnostic types and utilities shared by the framework libraries; buildable and published separately. See [`libs/core/AGENTS.md`](libs/core/AGENTS.md).
- `libs/icons/`: `@ouds/icons`, icon data as typed objects (one named export per icon, with the paths of each brand), generated from the OUDS Web sprites and published separately. See [`libs/icons/AGENTS.md`](libs/icons/AGENTS.md).
- `libs/angular/`, `libs/react/`, `libs/vue/`: standalone framework-wrapper libraries (Nx projects `@ouds/angular`, `@ouds/react`, `@ouds/vue`). Each currently ships three things: a `Button` (props extend `CoreButtonProps` from `@ouds/core`), an `Icon` (props extend `CoreIconProps`; it renders the icon data of `@ouds/icons`), and an `OudsProvider` (theme, brand, and rounded-corner settings; it loads the brand CSS through `@ouds/core`'s `loadBrandCSS`), with working `lint`/`test`/`build` targets. Each has its own agent guide with library-specific layout, commands, conventions, and testing rules: [`libs/angular/AGENTS.md`](libs/angular/AGENTS.md), [`libs/react/AGENTS.md`](libs/react/AGENTS.md), [`libs/vue/AGENTS.md`](libs/vue/AGENTS.md). When working inside one of these libraries, read its guide too; it extends this file and wins where they disagree.
- `apps/react-storybook/`, `apps/vue-storybook/`, `apps/angular-storybook/`: Storybook apps (Nx projects `@ouds/react-storybook`, `@ouds/vue-storybook`, `@ouds/angular-storybook`, Storybook 10) that render stories from the matching `libs/<framework>/` library (`npm run storybook:<framework>:serve` / `:build` / `:lint`). Each has its own agent guide: [`apps/react-storybook/AGENTS.md`](apps/react-storybook/AGENTS.md), [`apps/vue-storybook/AGENTS.md`](apps/vue-storybook/AGENTS.md), [`apps/angular-storybook/AGENTS.md`](apps/angular-storybook/AGENTS.md). Each Storybook `build` target depends on the library's `build`. Each registers a manager addon (`.storybook/toolbar-addon.ts`, imported from `manager.ts`) that shows a read-only toolbar label with the library, `@ouds/web-orange`, and framework versions; the versions come from `package.json` files, not from `globalTypes` (Storybook ignores a `versionLabel` key).

For the big picture (project graph, dependency rules, build pipeline, release model), read [`ARCHITECTURE.md`](ARCHITECTURE.md).

Each Nx project carries a `lib:*` or `app:*` tag (e.g. `lib:web-common`, `lib:react`, `app:react`). `@nx/enforce-module-boundaries` (severity `error`) restricts cross-project imports to an explicit allow-list: the brand packages may depend on `lib:web-common`, each framework library (`lib:react`/`lib:vue`/`lib:angular`) may depend on itself, `lib:core`, and `lib:icons`, `lib:icons` may depend on itself and `lib:core`, `lib:core` may import only the brand `package.json` files (to inline versions), each Storybook app (`app:react`/`app:vue`/`app:angular`) may depend on its framework library and `lib:web-orange`, and `lib:web-common` and `lib:web-migrate` are isolated. Violations fail `lint`. The rule's `depConstraints` are duplicated in three configs that must be kept in sync: root `oxlint.base.json` (`@ouds/core`, `@ouds/icons`, `@ouds/react`, `@ouds/vue`, the Storybook apps), root `eslint.config.mjs` (`@ouds/angular`), and `libs/web/eslint.config.mjs` (`@ouds/web-*`). The brand packages declare `"nx": { "projectType": "library" }` in their `package.json`; without it Nx treats them as apps and the rule forbids importing them.

### Linting & formatting toolchain

- `@ouds/core`, `@ouds/icons`, `@ouds/react`, `@ouds/vue`, and the three Storybook apps (`@ouds/react-storybook`, `@ouds/vue-storybook`, `@ouds/angular-storybook`) use **Oxlint** via `@nx/oxlint`. Their `lint` target is inferred (not declared in `project.json`). Each project has its own `.oxlintrc.json` that `extends` the shared root `oxlint.base.json` and adds its plugins (`react`/`jsx-a11y`/`import`, `vue`/`import`, or `import`). The base file is deliberately not named `.oxlintrc.json`, so `@nx/oxlint` infers no lint target for the ESLint projects. Oxlint cannot read `.vue` `<template>` markup, so `@ouds/vue` also has a `lint-templates` target (ESLint with `eslint-plugin-vuejs-accessibility`, `libs/vue/eslint.config.mjs`) that its `lint` target depends on; `@ouds/angular` enables the angular-eslint template accessibility rules; `@ouds/react` gets `jsx-a11y` from Oxlint.
- `@ouds/angular` stays on **ESLint 9** (flat config `libs/angular/eslint.config.mjs` extending root `eslint.config.mjs`), because Oxlint has no parser for Angular templates, HTML, or JSON rules. `@ouds/angular-storybook` only contains Storybook config files (no Angular templates), so it uses Oxlint. `@ouds/web-*` uses **ESLint 9** with a flat config (`libs/web/eslint.config.mjs`, run by `npm run js-lint`). It is standalone (it doesn't extend the root config) because it keeps the XO/unicorn/import rule set from Bootstrap and lints the `<script>` blocks of `.html` files (`eslint-plugin-html`) and JS code blocks in `.md` files (`eslint-plugin-markdown`), which Oxlint can't parse. The whole repo now runs a single ESLint version (9).
- No code formatter is configured for `libs/angular`, `libs/react`, or `libs/vue` (Oxfmt was evaluated and dropped while it is experimental); follow `.editorconfig` and the style of the surrounding code. Documentation under `libs/web/site/` uses Prettier.

### Agent assets

- `.github/copilot-instructions.md`, `.github/instructions/`, and `.github/skills/` hold the OUDS Web workflow skills (SCSS/JS conventions, token system, multi-brand, create-component, accessibility, code review, …). `opencode.json` loads them. They describe OUDS Web (`libs/web`) only; there are no RAV-specific skills, so the RAV libraries are documented by their own `AGENTS.md` and `ARCHITECTURE.md`.
- `skills/` (`migrate-to-ouds-web`, `using-ouds-web-version-major-minor`) holds the consumer-facing OUDS Web skills that are also published in the `ouds-web-skills` repository. Don't confuse them with `.github/skills/`.

Edit sources; do not commit generated `dist/` or `js/dist/` files (note: `libs/web/dist/**` and brand `config.yml` SRI hashes are tracked in this repo by convention — avoid regenerating them incidentally).

## Build, Test, and Development Commands

Use Node.js 24.15.0 (`.nvmrc`) or a compatible newer version. Run commands from the repository root:

- `npm install`: install dependencies for all workspaces in one pass (most packages hoist to root `node_modules`; version-conflicting ones, e.g. `vitest`, nest inside the workspace that needs a different major version).
- `npm start`: launch all three brand documentation servers; `npm run dev-orange` launches Orange only.
- `npm run dist`: build CSS and JavaScript.
- `npm run docs-build`: build documentation for every brand.
- `npm run lint`: check JavaScript, styles, and the root lockfile.
- `npm test`: run the main lint, build, JavaScript, and documentation checks.
- `npm run angular:lint` / `angular:test` / `angular:build` (and the `react:*`, `vue:*`, and `core:*` equivalents): lint, test, or build a single library via Nx. `npm run rav:lint` and `rav:test` run the target across `@ouds/core` and the three framework libraries (`@ouds/angular`, `@ouds/react`, `@ouds/vue`); `rav:build` runs it across the three framework libraries (`@ouds/core` is built first as a dependency).
- `npm run storybook:<react|vue|angular>:serve` (dev server, port 4400), `:build`, `:lint`: the Storybook apps. `npm run storybook:rav:build` builds the three and `storybook:rav:copy` copies them into `libs/web/_site/`; `npm run rav:test` runs the tests of `@ouds/core` and the framework libraries (writing the coverage reports to `coverage/libs/<lib>`) and `rav:test:copy` copies their HTML reports into `libs/web/_site/coverage/<angular|core|react|vue>/`. `npm run netlify` runs the whole deploy build (see [`ARCHITECTURE.md`](ARCHITECTURE.md)).
- `npm run lint:all` / `test:all` / `build:all`: run the same target across the projects listed in the root `package.json` scripts (`lint:all` and `build:all` include `@ouds/core`, the framework libraries, `@ouds/web-common`, and the Storybook apps; `test:all` covers `@ouds/core` and the framework libraries) at once (`nx run-many`), reusing Nx's local cache. CI runs exactly these three (`.github/workflows/lint.yml`, `test.yml`, `build.yml`); the OUDS Web suites (`js-test`, `css-test`, `docs-build`, …) run in their own workflows.
- `npx nx run-many -t lint,test,build --all`: run every target across all 13 Nx projects; `npx nx show project <name> --json` inspects a project's inferred targets and tags.

## Coding Style & Naming Conventions

Follow `.editorconfig`: two-space indentation, UTF-8, LF endings, final newlines, and no trailing whitespace. JavaScript uses no semicolons or trailing commas; include `.js` extensions in local imports. Follow existing component filenames and kebab-case CSS classes. Use ESLint (XO-based) for `libs/web` and `libs/angular`, Oxlint for `libs/react` and `libs/vue`, Stylelint (Bootstrap-based), and `npm run docs-prettier-format` for documentation formatting. Preserve keyboard focus indicators and accessible markup.

## Testing Guidelines

Add regression tests in `js/tests/unit/<component>.spec.js` under `libs/web/`. Jasmine runs through Karma using Chrome, Chromium, or Firefox. Run `npm run js-test`; enforced coverage is 90% for statements, functions, and lines, and 89% for branches.

Run additional suites separately: `npm run css-test` for Sass True/Jasmine `*.test.scss` tests, `npm run css-snapshot-test -- --run` for Vitest snapshots, and `npm test -w @ouds/web-migrate -- --run` for migration tests. Manually verify visual fixtures and responsive component states.

`libs/core`, `libs/react`, and `libs/vue` use Vitest 5 (`npm run core:test` / `react:test` / `vue:test`, a `vitest run --coverage` command target; V8 coverage reports land in `coverage/libs/<lib>`); the framework libraries enforce a 100% coverage threshold (statements, branches, functions, lines). `libs/angular` uses Jest via `jest-preset-angular` (`npm run angular:test`, same 100% threshold) because Angular's official Vitest runner currently requires an application `buildTarget`, incompatible with this `ng-packagr`-based library.

## Adding a component to the RAV libraries

Use `Button` as the reference implementation in each library. Components follow OUDS Web markup and class names (`btn`, `btn-<variant>`, …); check the matching OUDS Web component under `libs/web/` first. Work in this order, and keep the three frameworks' public props and behavior aligned:

1. **Shared types in `@ouds/core`.** Add `libs/core/src/types/components/<name>/<name>.ts` with a `Core<Name>Props` type (framework-agnostic props only: no `children`, `onClick`, JSX, or Vue/Angular types), and export it from `libs/core/src/types/components/index.ts`. Reuse `Brand`, `Theme`, `SizeProp`, and `Variant` from `types/theming/theming.ts` instead of repeating their unions. `@ouds/core` must not import React, Vue, or Angular.
2. **React** (`libs/react/src/components/<name>/`): `<name>.component.tsx` (a named `React.FC<<Name>Props>`), `<name>.model.ts` (`<Name>Props = Core<Name>Props & { … }`), `<name>.spec.tsx`, `<name>.stories.tsx`. Re-export the component and its model from `src/components/index.ts`.
3. **Vue** (`libs/vue/src/components/<name>/`): `<name>.component.vue` (`<script setup lang="ts">`), `<name>.model.ts` (props extend `Core<Name>Props`, plus the emits interface), `<name>.spec.ts`, `<name>.stories.ts`. Export the component and its types from `libs/vue/src/index.ts`.
4. **Angular** (`libs/angular/src/components/<name>/`): standalone `OnPush` `<name>.component.ts` with its `.html`/`.scss`, `<name>.component.spec.ts`, `<name>.stories.ts`, and an `index.ts` barrel. Add the folder to `src/components/index.ts`. Selectors are prefixed (`orange-<name>`).
5. **Tests and stories.** Each library enforces 100% coverage (statements, branches, functions, lines), so write the specs together with the component. Stories use the title `Components/<Name>` and live next to the component; the Storybook apps pick them up automatically.
6. **Run the checks** from the repository root before opening a PR:
   - `npm run rav:lint && npm run rav:test && npm run rav:build` (`rav:lint` and `rav:test` include `@ouds/core`).
   - `npm run storybook:<react|vue|angular>:build` for each framework you changed.

Rules for component code:

- Never touch `window` or `document` when a module is loaded or while rendering. Only do it in effects, lifecycle hooks, or event handlers, and guard with `typeof document === 'undefined'` where a function can run on the server (see `loadBrandCSS`). This keeps the libraries usable with server-side rendering.
- Don't add module-level side effects (registering global state, injecting styles on import). The libraries are meant to be tree-shakable.
- A runtime dependency that stays external in the bundle (like `classnames` in `@ouds/react`) must be declared in that library's `package.json` `dependencies`, or `peerDependencies` when consumers must share a single copy (`react`, `vue`, `@angular/*`). Consumers get a "Cannot find module" error otherwise.
- Match the OUDS Web markup exactly, including elements that CSS hides. For example the loading `Button` always renders the loader `<svg aria-hidden="true">` and the `role="status"` live region (`visually-hidden`, plus `d-none` until loading), and keeps its label while loading; a live region added at the same moment as its text is often not announced by screen readers. Compare against the component's page in `libs/web/site/src/content/docs/components/`.
- Don't import another framework library or OUDS Web sources; the lint boundary rules reject it.
- Documentation: update the library's `README.md` and `CHANGELOG.md` when a component's public API changes.

## Adding an icon

Icons are data in `@ouds/icons` (`libs/icons`), generated from the OUDS Web sprites; the framework libraries need no change, because an application imports the icon and passes it to `Icon`.

1. The icon must exist as a `<symbol>` in the three brand sprites (`libs/web/site/static/<brand>/docs/[version]/assets/img/ouds-web-sprite.svg`). Add it there first by hand: `npm run update-sprite-icons` only refreshes the symbols that already exist from a Solaris icons folder, it does not add new ones. Copy the symbol from an existing one (same `<symbol id="…" viewBox="0 0 24 24" fill="currentColor">` shape) with the optimized paths of each brand, and put the comment `<!-- category/subcategory/icon-name vX.Y -->` right above it so `update-sprite-icons` can update it later. A symbol can only contain `<path>` elements (with `d`, `fill`, and `fill-rule`); the generator fails on anything else.
2. Add the symbol id to `libs/icons/icons.config.json`.
3. Run `npm run icons:generate` and commit the changed `libs/icons/src/icons/*.ts` and `libs/icons/src/index.ts`. Never edit them by hand: a spec (`npm run icons:test`) regenerates them in memory and fails when they differ from the sprites.
4. Run `npm run icons:lint && npm run icons:test && npm run icons:build`, then the checks of the framework libraries if you changed `@ouds/core`'s icon types.

## Commit & Pull Request Guidelines

History commonly uses `feat(scope):`, `fix(scope):`, `chore(scope):`, and `doc:` prefixes. Keep commits focused. Follow `.github/CONTRIBUTING.md` and the relevant PR template: explain motivation and behavior, link issues with `Closes #123`, record validation, update documentation, and provide direct preview links. Target `main` and identify breaking changes.
