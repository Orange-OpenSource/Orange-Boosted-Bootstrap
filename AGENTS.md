# Repository Guidelines

## Project Structure & Module Organization

This is an npm-workspace monorepo hosting Orange Unified Design System (OUDS) libraries, orchestrated by **Nx** (task graph, caching, and import-boundary enforcement). Root scripts delegate to workspace projects via `npx nx run <project>:<target>`.

- `libs/web/js/src/` and `libs/web/scss/`: component JavaScript and Sass sources (Nx project `@ouds/web-common`). OUDS Web has its own agent guide with its layout, commands, lint setup, hoisting caveats, and the history of its Nx integration: [`libs/web/AGENTS.md`](libs/web/AGENTS.md) (design background in [`libs/web/ARCHITECTURE.md`](libs/web/ARCHITECTURE.md)). When working inside `libs/web`, read it too; it extends this file and wins where they disagree.
- `libs/web/packages/`: Orange (`@ouds/web-orange`), Orange Compact (`@ouds/web-orange-compact`), and Sosh (`@ouds/web-sosh`) brand packages, plus the migration CLI (`@ouds/web-migrate`).
- `libs/web/site/`: Astro documentation; content lives in `src/content/docs/`, assets in `src/assets/` and `static/`.
- `libs/web/js/tests/` and `libs/web/scss/tests/`: automated and visual tests.
- `libs/web/build/` and `libs/web/stories/`: build tooling and Storybook support.
- `libs/core/`: `@ouds/core`, framework-agnostic types and utilities shared by the framework libraries; buildable and published separately. See [`libs/core/AGENTS.md`](libs/core/AGENTS.md).
- `libs/angular/`, `libs/react/`, `libs/vue/`: standalone framework-wrapper libraries (Nx projects `@ouds/angular`, `@ouds/react`, `@ouds/vue`), each currently a minimal "Hello World" scaffold with working `lint`/`test`/`build` targets. Each has its own agent guide with library-specific layout, commands, conventions, and testing rules: [`libs/angular/AGENTS.md`](libs/angular/AGENTS.md), [`libs/react/AGENTS.md`](libs/react/AGENTS.md), [`libs/vue/AGENTS.md`](libs/vue/AGENTS.md). When working inside one of these libraries, read its guide too; it extends this file and wins where they disagree.
- `apps/react-storybook/`, `apps/vue-storybook/`, `apps/angular-storybook/`: Storybook apps (Nx projects `@ouds/react-storybook`, `@ouds/vue-storybook`, `@ouds/angular-storybook`, Storybook 10) that render stories from the matching `libs/<framework>/` library (`npm run storybook:<framework>:serve` / `:build` / `:lint`). Each has its own agent guide: [`apps/react-storybook/AGENTS.md`](apps/react-storybook/AGENTS.md), [`apps/vue-storybook/AGENTS.md`](apps/vue-storybook/AGENTS.md), [`apps/angular-storybook/AGENTS.md`](apps/angular-storybook/AGENTS.md).

Each Nx project carries a `lib:*` or `app:*` tag (e.g. `lib:web-common`, `lib:react`, `app:react`). `@nx/enforce-module-boundaries` (severity `error`) restricts cross-project imports to an explicit allow-list: the brand packages may depend on `lib:web-common`, each Storybook app (`app:react`/`app:vue`/`app:angular`) may depend on its framework library and `lib:web-orange`, and every other library is isolated. Violations fail `lint`. The rule's `depConstraints` are duplicated in three configs that must be kept in sync: root `oxlint.base.json` (`@ouds/core`, `@ouds/react`, `@ouds/vue`, the Storybook apps), root `eslint.config.mjs` (`@ouds/angular`), and `libs/web/eslint.config.mjs` (`@ouds/web-*`). The brand packages declare `"nx": { "projectType": "library" }` in their `package.json`; without it Nx treats them as apps and the rule forbids importing them.

### Linting & formatting toolchain

- `@ouds/core`, `@ouds/react`, `@ouds/vue`, and the three Storybook apps (`@ouds/react-storybook`, `@ouds/vue-storybook`, `@ouds/angular-storybook`) use **Oxlint** via `@nx/oxlint`. Their `lint` target is inferred (not declared in `project.json`). Each project has its own `.oxlintrc.json` that `extends` the shared root `oxlint.base.json` and adds its plugins (`react`/`jsx-a11y`/`import`, `vue`/`import`, or `import`). The base file is deliberately not named `.oxlintrc.json`, so `@nx/oxlint` infers no lint target for the ESLint projects.
- `@ouds/angular` stays on **ESLint 9** (flat config `libs/angular/eslint.config.mjs` extending root `eslint.config.mjs`), because Oxlint has no parser for Angular templates, HTML, or JSON rules. `@ouds/angular-storybook` only contains Storybook config files (no Angular templates), so it uses Oxlint. `@ouds/web-*` uses **ESLint 9** with a flat config (`libs/web/eslint.config.mjs`, run by `npm run js-lint`). It is standalone (it doesn't extend the root config) because it keeps the XO/unicorn/import rule set from Bootstrap and lints the `<script>` blocks of `.html` files (`eslint-plugin-html`) and JS code blocks in `.md` files (`eslint-plugin-markdown`), which Oxlint can't parse. The whole repo now runs a single ESLint version (9).
- No code formatter is configured for `libs/angular`, `libs/react`, or `libs/vue` (Oxfmt was evaluated and dropped while it is experimental); follow `.editorconfig` and the style of the surrounding code. Documentation under `libs/web/site/` uses Prettier.

Edit sources; do not commit generated `dist/` or `js/dist/` files (note: `libs/web/dist/**` and brand `config.yml` SRI hashes are tracked in this repo by convention — avoid regenerating them incidentally).

## Build, Test, and Development Commands

Use Node.js 24.15.0 (`.nvmrc`) or a compatible newer version. Run commands from the repository root:

- `npm install`: install dependencies for all workspaces in one pass (most packages hoist to root `node_modules`; version-conflicting ones, e.g. `vitest`, nest inside the workspace that needs a different major version).
- `npm start`: launch all three brand documentation servers; `npm run dev-orange` launches Orange only.
- `npm run dist`: build CSS and JavaScript.
- `npm run docs-build`: build documentation for every brand.
- `npm run lint`: check JavaScript, styles, and the root lockfile.
- `npm test`: run the main lint, build, JavaScript, and documentation checks.
- `npm run angular:lint` / `angular:test` / `angular:build` (and the `react:*` / `vue:*` equivalents): lint, test, or build a single framework library via Nx.
- `npm run lint:all` / `test:all` / `build:all`: run the same target across `@ouds/angular`, `@ouds/react`, `@ouds/vue`, and `@ouds/web-common` at once (`nx run-many`), reusing Nx's local cache.
- `npx nx run-many -t lint,test,build --all`: run every target across all 11 Nx projects; `npx nx show project <name> --json` inspects a project's inferred targets and tags.

## Coding Style & Naming Conventions

Follow `.editorconfig`: two-space indentation, UTF-8, LF endings, final newlines, and no trailing whitespace. JavaScript uses no semicolons or trailing commas; include `.js` extensions in local imports. Follow existing component filenames and kebab-case CSS classes. Use ESLint (XO-based) for `libs/web` and `libs/angular`, Oxlint for `libs/react` and `libs/vue`, Stylelint (Bootstrap-based), and `npm run docs-prettier-format` for documentation formatting. Preserve keyboard focus indicators and accessible markup.

## Testing Guidelines

Add regression tests in `js/tests/unit/<component>.spec.js` under `libs/web/`. Jasmine runs through Karma using Chrome, Chromium, or Firefox. Run `npm run js-test`; enforced coverage is 90% for statements, functions, and lines, and 89% for branches.

Run additional suites separately: `npm run css-test` for Sass True/Jasmine `*.test.scss` tests, `npm run css-snapshot-test -- --run` for Vitest snapshots, and `npm test -w @ouds/web-migrate -- --run` for migration tests. Manually verify visual fixtures and responsive component states.

`libs/react` and `libs/vue` use Vitest 5 (`npm run react:test` / `npm run vue:test`, a `vitest run --coverage` command target; V8 coverage reports land in `coverage/libs/<lib>`); `libs/angular` uses Jest via `jest-preset-angular` (`npm run angular:test`) because Angular's official Vitest runner currently requires an application `buildTarget`, incompatible with this `ng-packagr`-based library.

## Commit & Pull Request Guidelines

History commonly uses `feat(scope):`, `fix(scope):`, `chore(scope):`, and `doc:` prefixes. Keep commits focused. Follow `.github/CONTRIBUTING.md` and the relevant PR template: explain motivation and behavior, link issues with `Closes #123`, record validation, update documentation, and provide direct preview links. Target `main` and identify breaking changes.
