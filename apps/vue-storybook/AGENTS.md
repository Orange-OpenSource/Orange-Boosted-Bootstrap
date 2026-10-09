# @ouds/vue-storybook — Agent Guidelines

Scope: everything under `apps/vue-storybook/`. The root [`AGENTS.md`](../../AGENTS.md) still applies. Components and their stories belong to [`libs/vue`](../../libs/vue/AGENTS.md); this app only holds Storybook configuration.

## Layout

- `.storybook/main.ts` — Storybook 10 config (`@storybook/vue3-vite`, `docgen: 'vue-component-meta'`). It loads stories from `libs/vue/**/*.stories.@(js|jsx|ts|tsx|mdx)` and adds `nxViteTsPaths()` and `@vitejs/plugin-vue` via `viteFinal`.
- `.storybook/preview.ts` — loads the OUDS Web Orange CSS, registers `OudsProvider` globally via `setup()`, defines global decorators (`OudsProvider`), toolbar `globalTypes` (theme, brand, rounded corners, version badges), `parameters`, `tags: ['autodocs']`, and exports the `InProgressTemplate` helper.
- `.storybook/manager.ts` — manager UI theme (`@ouds/storybook-theme/OrangeTheme.js` through `addons` from `storybook/manager-api`, same theme as `libs/web`; supports Storybook 9 and 10).
- `.storybook/storybook.css` — Storybook-only styles.
- `.storybook/toolbar-addon.ts` — toolbar addon registered from `manager.ts` (identical in the three apps). Global types with `versionLabel` (versions of the library, `@ouds/web-orange`, and the framework) render as grey read-only labels; global types with a `toolbar` (theme, brand, rounded corners) stay dropdowns, styled black on orange. To add a version label, give the global type a `versionLabel` and **no** `toolbar` key.
- `.oxlintrc.json` — extends the root `oxlint.base.json` and adds `vue` and `import`.
- `project.json` — `serve`/`storybook` (`@nx/storybook:storybook`, port 4400), `build` (`@nx/storybook:build` into `dist/apps/vue-storybook`), and `static`. `lint` is inferred by `@nx/oxlint` and is not declared.

## Commands (run from the repository root)

- `npm run storybook:vue:serve` — dev server on http://localhost:4400.
- `npm run storybook:vue:build` — static build (`build:ci` runs it quietly).
- `npm run storybook:vue:lint` — Oxlint.

## Conventions

- Write stories next to the component in `libs/vue/src/<component>/<Component>.stories.ts`, not in this app.
- Storybook 10 bundles the essentials (controls, actions, viewport, interactions) into `storybook` itself. Don't add `@storybook/addon-essentials`, `@storybook/addon-interactions`, or `@storybook/addons` (7.x/8.x packages that break `npm install`). Import manager APIs from `storybook/manager-api`.
- Autodocs is enabled through `tags: ['autodocs']` in `preview.ts`; Storybook 10 no longer supports `docs.autodocs` in `main.ts`.
- Keep every `storybook`/`@storybook/*` package on the same exact version (currently `10.6.1`) in the root `package.json`.
- Existing files use 4-space indentation and semicolons, unlike the libraries. Match the file you are editing.

## Boundaries

- Tag `app:vue`. This app may import only `lib:vue` (`@ouds/vue`) and `lib:web-orange` (`@ouds/web-orange`). Importing `@ouds/react`, `@ouds/angular`, or `@ouds/web-common` fails lint.
- The relative import of `../../../libs/vue/package.json` (to show the library version) is allowed through an inline `eslint-disable-next-line @nx/enforce-module-boundaries` comment, which Oxlint honours. Don't add other relative imports into `libs/`.

## Known issues

- Unlike the React app, `build` has no `dependsOn` on `@ouds/vue:build`.
- The `static` target references `vue-storybook:build`; the project is named `@ouds/vue-storybook`, so it should be `@ouds/vue-storybook:build`.
- All three Storybook apps use port 4400; pass `--port` to run more than one at a time.
- `npm run storybook:vue:build:dev` calls `build:development`, but `build` only defines a `ci` configuration, so that script fails until a `development` configuration is added.
