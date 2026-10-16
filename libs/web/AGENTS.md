# OUDS Web — Agent Guidelines

Scope: everything under `libs/web/` (Nx projects `@ouds/web-common`, `@ouds/web-orange`, `@ouds/web-orange-compact`, `@ouds/web-sosh`, `@ouds/web-migrate`). The root [`AGENTS.md`](../../AGENTS.md) still applies; this file adds OUDS Web-specific rules. Design background and the Nx integration history live in [`ARCHITECTURE.md`](./ARCHITECTURE.md).

## Layout

- `js/src/` — component JavaScript (Bootstrap fork, shared by every brand). `js/index.esm.js` / `js/index.umd.js` are the entry points; `js/dist/` holds the per-plugin builds.
- `scss/` — common Sass (components, mixins, functions, config). Brand packages import it as `@ouds/web-common/scss/...`.
- `packages/<brand>/` (`orange`, `orange-compact`, `sosh`) — brand tokens (`scss/`), brand `config.yml` (docs config + SRI hashes), and the compiled brand CSS in `dist/css/`.
- `packages/migrate/` — `@ouds/web-migrate` CLI (Boosted / OB1 / older OUDS Web → current OUDS Web), with its own Vitest suite.
- `site/` — Astro documentation, built once per brand. Content in `site/src/content/docs/`, assets in `site/src/assets/` and `site/static/`.
- `build/` — Node build scripts (Rollup, PostCSS, SRI, version bump, icons, vnu).
- `js/tests/` — Karma/Jasmine unit tests (`unit/`), Rollup integration bundles (`integration/`), and HTML visual fixtures (`visual/`).
- `scss/tests/` — Sass True/Jasmine tests and Vitest CSS snapshot tests.
- `.storybook/` + `stories/` — Storybook (`@storybook/html-vite`); stories are generated from the docs into `stories/auto`.
- `dist/` — built common JS (`dist/js/ouds-web*.js`). **Tracked in git by convention**, like the SRI hashes in `packages/*/config.yml`; don't regenerate them incidentally.
- `eslint.config.mjs`, `.stylelintrc.json`, `.prettierignore`, `.browserslistrc`, `.babelrc.js`, `.bundlewatch.config.json` — tool configs.

There is no `project.json`: Nx infers one target per `package.json` script (`nx:run-script`), and the Nx tags come from the `"nx"` field of each `package.json`.

## Commands (run from the repository root)

Root scripts delegate to Nx (`npx nx run @ouds/web-common:<script>`); you can also call Nx directly.

- `npm start` (all brands) / `npm run dev-orange` — documentation dev servers.
- `npm run dist` — build CSS (every brand) and JS.
- `npm run css` / `npm run js` — build one half; `npm run css-dev-orange` builds one brand.
- `npm run lint` — `js-lint` (ESLint) + `css-lint` (Stylelint, unused Sass variables) + `lockfile-lint`.
- `npm run js-test` — Karma (Chrome, Chromium, or Firefox) + integration bundles. Coverage thresholds: 90% statements/functions/lines, 89% branches.
- `npm run css-test` — Sass True tests; `npm run css-snapshot-test -- --run` — Vitest snapshots (`css-snapshot-refresh` updates them).
  `css-snapshot-test` compares the *built* `packages/orange/dist/css/*.css` with the snapshots, so run `npm run css-dev-orange` first (CI runs `npm run css` before the tests), then `git restore packages/orange/dist` unless you intend to commit new CSS.
- `npm test -w @ouds/web-migrate -- --run` — migration CLI tests.
- `npm run docs-build` — `dist` + SRI + Astro build for every brand into `_site/`; `npm run docs-lint` — Prettier check + vnu.
- `npm test` — the full pipeline (lint, dist, js-test, docs-build, docs-lint). Slow; prefer the targeted commands while iterating.

## Code conventions

- Follow `.editorconfig`: 2 spaces, LF, final newline, no trailing whitespace.
- JavaScript: no semicolons, no trailing commas, `.js` extensions on local imports, `import/order`. `no-console` is an error in `js/src/`.
- Keep component file names and kebab-case CSS class names consistent with the existing components. Brand-specific values belong in `packages/<brand>/scss/`, never in the common `scss/`.
- Preserve keyboard focus indicators and accessible markup in components, docs examples, and visual fixtures.
- Docs under `site/` are formatted with Prettier (`npm run docs-prettier-format`).
- Path handling: never hard-code `node_modules/<pkg>` paths. Dependencies are hoisted to the repository root (or nested in `libs/web/node_modules` when versions conflict), so resolve them with `require.resolve` / `createRequire(import.meta.url).resolve(...)`, and use `**/node_modules/**` in Babel/Rollup excludes.

## Linting

- **ESLint 9, flat config** (`eslint.config.mjs`), standalone: it doesn't extend the root `eslint.config.mjs`. It keeps the Bootstrap XO + unicorn + import rule set, lints `<script>` blocks in `.html` (`eslint-plugin-html`) and JS code blocks in `.md` (`eslint-plugin-markdown`), and runs `@nx/enforce-module-boundaries`.
- `npm run js-lint` must report **0 errors**. 18 warnings are expected today (17 `no-warning-comments` for `TODO:` comments, 1 `complexity` in `carousel.js`).
- Globals in flat config only accumulate across blocks; to mimic the old `env: { browser: false }` (`build/**`), browser-only globals are switched `off` explicitly. Node test scripts (`js/tests/*.js`, `scss/tests/**`) are `sourceType: 'commonjs'`.
- This project stays on ESLint (not Oxlint) because Oxlint can't parse `.html`/`.md` code blocks. Don't add an `.oxlintrc.json` here: `@nx/oxlint` would infer a second lint target.

## Testing

- Add regression tests in `js/tests/unit/<component>.spec.js` for every JS change.
- Visual fixtures in `js/tests/visual/*.html` must keep working; verify them manually along with responsive component states.
- `libs/web` uses **Vitest 4** (nested in `libs/web/node_modules`), while the framework libraries use Vitest 5 at the root. Don't hoist or unify them without migrating the snapshot and migrate tests.

## Boundaries

- Tags: `lib:web-common`, `lib:web-orange`, `lib:web-orange-compact`, `lib:web-sosh`, `lib:web-migrate`. Brand packages may depend only on `lib:web-common`; `web-common` and `web-migrate` depend on nothing.
- Brand packages declare `"nx": { "projectType": "library" }`; keep it, otherwise Nx treats them as apps and `@ouds/core` / the Storybook apps can no longer import them.
- `depConstraints` are duplicated in `eslint.config.mjs` (this project), the root `eslint.config.mjs`, and `oxlint.base.json`. Keep the three in sync.
- Nothing in `libs/web` may import from `@ouds/core`, `@ouds/react`, `@ouds/vue`, or `@ouds/angular`. The framework libraries consume OUDS Web through published packages, not sources.

## Known issues

- `lockfile-lint` in `libs/web/package.json` points at `libs/web/package-lock.json`, which no longer exists since the move to the monorepo; lockfile-lint exits 0 on a missing file, so this check is a no-op. The root `npm run lockfile-lint` checks the real lockfile.
- **Hoisting-sensitive dependencies.** Several packages only work because a specific version sits where Node looks first, so don't remove these `devDependencies` of `libs/web` (or the root pins) without running `npm run docs-build`:
  - `cookie@^2` — Astro 7's generated prerender bundle (`site/dist/.prerender/`) does a bare `import { parseCookie } from 'cookie'` that resolves from `libs/web/` upward. Without the pin it picks the root `cookie@0.7.x` (CommonJS, pulled in by Karma/Storybook) and the docs build fails with `Named export 'parseCookie' not found`.
  - `sass@1.78.0` (exact) — the compiler that builds the brand CSS. The root also holds a newer Sass/`sass-embedded` (1.104.x, from the Angular toolchain) that serializes colors differently (`#679cec` vs `rgb(40.39%, …)`). `scss/tests/sass-true/runner.js` therefore passes `require('sass')` to `sass-true`, which otherwise prefers the hoisted `sass-embedded`. Keep that option, or `npm run css-test` fails.
  - `vitest@^4` — nested here while the framework libraries use Vitest 5 at the root.
  - root `@babel/plugin-transform-runtime@^7` — keeps Babel 8 from being hoisted over the Babel 7 toolchain.
- ESLint formatting rules (`indent`, `semi`, `comma-dangle`, …) and `eslint-plugin-markdown` are deprecated; moving to ESLint 10 will require `@stylistic` and `@eslint/markdown`.

## Related

- Skills: [`project-knowledge`](../../.github/skills/project-knowledge/SKILL.md), [`javascript-conventions`](../../.github/skills/javascript-conventions/SKILL.md), [`scss-conventions`](../../.github/skills/scss-conventions/SKILL.md), [`multi-brand`](../../.github/skills/multi-brand/SKILL.md), [`token-system`](../../.github/skills/token-system/SKILL.md), [`diagnose-errors`](../../.github/skills/diagnose-errors/SKILL.md).
- Contribution rules: [`.github/CONTRIBUTING.md`](../../.github/CONTRIBUTING.md). Record notable changes in [`CHANGELOG.md`](./CHANGELOG.md).
