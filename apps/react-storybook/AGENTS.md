# @ouds/react-storybook — Agent Guidelines

Scope: everything under `apps/react-storybook/`. The root [`AGENTS.md`](../../AGENTS.md) still applies. Components and their stories belong to [`libs/react`](../../libs/react/AGENTS.md); this app only holds Storybook configuration.

## Layout

- `.storybook/main.ts` — Storybook 10 config (`@storybook/react-vite`). It loads stories from `libs/react/**/*.stories.@(js|jsx|ts|tsx|mdx)`, reuses `libs/react/vite.config.ts` as the Vite config, and adds `resolve.tsconfigPaths: true` (Vite's built-in support for the `@ouds/*` paths of `tsconfig.base.json`) via `viteFinal`.
- `.storybook/preview.tsx` — a global decorator that wraps each story in `OudsProvider` (and sets `data-bs-theme`/`data-bs-brand` on `<html>`), toolbar `globalTypes` (theme, brand, rounded corners), `parameters`, and `tags: ['autodocs']`. The brand CSS is loaded by `OudsProvider` from the jsDelivr CDN, so stories need network access to look right.
- `.storybook/manager.ts` — manager UI theme (`@ouds/storybook-theme/OrangeTheme.js` through `addons` from `storybook/manager-api`, same theme as `libs/web`; supports Storybook 9 and 10).
- `.storybook/storybook.css` — Storybook-only styles.
- `src/typings.d.ts` — ambient module declaration for `@ouds/storybook-theme/OrangeTheme.js`.
- `.storybook/toolbar-addon.ts` — manager addon registered from `manager.ts` (same structure in the three apps). It adds a read-only toolbar label with the versions of the library, `@ouds/web-orange`, and React, read from their `package.json` files. It is not a global type; to change the label, edit the `labels` array.
- `.oxlintrc.json` — extends the root `oxlint.base.json` and adds `react`, `jsx-a11y`, and `import`.
- `project.json` — `serve`/`storybook` (`@nx/storybook:storybook`, port 4400), `build` (`@nx/storybook:build` into `dist/apps/react-storybook`, depends on `@ouds/react:build`), and `static`. `lint` is inferred by `@nx/oxlint` and is not declared.

## Commands (run from the repository root)

- `npm run storybook:react:serve` — dev server on http://localhost:4400.
- `npm run storybook:react:build` — static build (`build:ci` runs it quietly).
- `npm run storybook:react:lint` — Oxlint.

## Conventions

- Write stories next to the component in `libs/react/src/components/<component>/<component>.stories.tsx`, not in this app.
- Storybook 10 bundles the essentials (controls, actions, viewport, interactions) into `storybook` itself. Don't add `@storybook/addon-essentials`, `@storybook/addon-interactions`, or `@storybook/addons` (7.x/8.x packages that break `npm install`). Import manager APIs from `storybook/manager-api`.
- Autodocs is enabled through `tags: ['autodocs']` in `preview.tsx`; Storybook 10 no longer supports `docs.autodocs` in `main.ts`.
- Keep every `storybook`/`@storybook/*` package on the same exact version (currently `10.6.1`) in the root `package.json`.
- Existing files use 4-space indentation and semicolons, unlike the libraries. Match the file you are editing.

## Boundaries

- Tag `app:react`. This app may import only `lib:react` (`@ouds/react`) and `lib:web-orange` (`@ouds/web-orange`). Importing `@ouds/vue`, `@ouds/angular`, or `@ouds/web-common` fails lint.
- The relative import of `../../../libs/react/package.json` (to show the library version) is allowed through an inline `eslint-disable-next-line @nx/enforce-module-boundaries` comment, which Oxlint honours. Don't add other relative imports into `libs/`.

## Known issues

- The `static` target still points at the generator defaults (`react-components:build-storybook`, `dist/storybook/react-components`) and doesn't work. Its `buildTarget` should be `@ouds/react-storybook:build` and its `staticFilePath` `dist/apps/react-storybook`.
- All three Storybook apps use port 4400; pass `--port` to run more than one at a time.
- `npm run storybook:react:build:dev` calls `build:development`, but `build` only defines a `ci` configuration, so that script fails until a `development` configuration is added.
