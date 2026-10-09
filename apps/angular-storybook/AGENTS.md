# @ouds/angular-storybook — Agent Guidelines

Scope: everything under `apps/angular-storybook/`. The root [`AGENTS.md`](../../AGENTS.md) still applies. Components and their stories belong to [`libs/angular`](../../libs/angular/AGENTS.md); this app only holds Storybook configuration.

## Layout

- `.storybook/main.ts` — Storybook 10 config (`@storybook/angular`, webpack builder). It loads stories from `libs/angular/**/*.stories.@(ts|mdx)` and compiles them with `tsconfig.storybook.json`.
- `.storybook/preview.ts` — `applicationConfig` with `provideOuds(...)`, `moduleMetadata` importing `OudsProviderComponent`, a decorator that wraps each story in `<orange-ouds-provider>`, toolbar `globalTypes` (theme, rounded corners), and `tags: ['autodocs']`.
- `.storybook/manager.ts` — manager UI theme (`@ouds/storybook-theme/OrangeTheme.js` through `addons` from `storybook/manager-api`, same theme as `libs/web`; supports Storybook 9 and 10).
- `.storybook/storybook.css` — Storybook-only styles.
- `.storybook/toolbar-addon.ts` — manager addon registered from `manager.ts` (same structure in the three apps). It adds a read-only toolbar label with the versions of the library, `@ouds/web-orange`, and Angular, read from their `package.json` files. It is not a global type; to change the label, edit the `labels` array.
- `src/typings.d.ts` — ambient type declarations for the Storybook build.
- `.oxlintrc.json` — extends the root `oxlint.base.json` and adds `import`.
- `project.json` — `build-angular` (`@angular-devkit/build-angular:browser`, the Angular build Storybook delegates to), `serve`/`storybook` (`@storybook/angular:start-storybook`, port 4400), `build` (`@storybook/angular:build-storybook` into `dist/apps/angular-storybook`), and `static`. `lint` is inferred by `@nx/oxlint` and is not declared. Global CSS (`@ouds/web-orange` + `storybook.css`) is injected through the `styles` option of these targets.

## Commands (run from the repository root)

- `npm run storybook:angular:serve` — dev server on http://localhost:4400.
- `npm run storybook:angular:build` — static build (`build:ci` runs it quietly).
- `npm run storybook:angular:lint` — Oxlint.

## Why Oxlint here but ESLint in `libs/angular`

This app contains only TypeScript Storybook config (no Angular templates or HTML), so Oxlint covers it. `libs/angular` stays on ESLint because the angular-eslint template and selector rules have no Oxlint equivalent. Don't add an `eslint.config.mjs` here.

## Conventions

- Write stories next to the component in `libs/angular/src/lib/<component>/<component>.component.stories.ts`, not in this app. Stories render standalone components with the `orange-` selector prefix.
- Storybook 10 bundles the essentials (controls, actions, viewport, interactions) into `storybook` itself. Don't add `@storybook/addon-essentials`, `@storybook/addon-interactions`, or `@storybook/addons` (7.x/8.x packages that break `npm install`). Import manager APIs from `storybook/manager-api`.
- Autodocs is enabled through `tags: ['autodocs']` in `preview.ts`; Storybook 10 no longer supports `docs.autodocs` in `main.ts`.
- `@storybook/angular` needs Angular 22 and `@angular-devkit/*` 22 at the repository root (they are root devDependencies for that reason). Keep them on the same major as `libs/angular`.
- Keep every `storybook`/`@storybook/*` package on the same exact version (currently `10.6.1`) in the root `package.json`.
- Existing files use 4-space indentation and semicolons. Match the file you are editing.

## Boundaries

- Tag `app:angular`. This app may import only `lib:angular` (`@ouds/angular`) and `lib:web-orange` (`@ouds/web-orange`). Importing `@ouds/react`, `@ouds/vue`, or `@ouds/web-common` fails lint.
- The relative import of `../../../libs/angular/package.json` (to show the library version) is allowed through an inline `eslint-disable-next-line @nx/enforce-module-boundaries` comment, which Oxlint honours. Don't add other relative imports into `libs/`.

## Known issues

- `build`/`serve` fail for now: `preview.ts` imports `OudsProviderComponent` and `provideOuds` from `@ouds/angular`, which the library doesn't export yet (it only ships `HelloWorldComponent`). Webpack also resolves `@ouds/angular` from `node_modules`, whose `exports` point at build output, so the library must be built first (`npm run angular:build`) and `build` has no `dependsOn` for it.
- All three Storybook apps use port 4400; pass `--port` to run more than one at a time.
- `npm run storybook:angular:build:dev` calls `build:development`, but `build` only defines a `ci` configuration, so that script fails until a `development` configuration is added.
