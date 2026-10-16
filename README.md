<h1 align="center">OUDS Monorepo</h1>

<p align="center">
  OUDS Web is a fork of Bootstrap to integrate the Orange Unified Design System components, modules and guidelines to easily create Websites with the Orange Brands through dedicated Themes and Modes (Light or Dark). Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development.
  <br />
  <a href="https://web.unified-design-system.orange.com"><strong>Visit OUDS Web</strong></a>
</p>

## Layout

```
libs/
  web/                OUDS Web — the Bootstrap-based component library (Orange, Sosh, Orange Compact)
    site/             Astro documentation site (shared by all OUDS Web brands)
    packages/
      orange/
      orange-compact/
      sosh/
      migrate/        @ouds/web-migrate CLI
  core/               @ouds/core — framework-agnostic types and utilities shared by angular/react/vue
  icons/              @ouds/icons — icon data (one export per icon, drawings per brand), generated from the OUDS Web sprites
  angular/            @ouds/angular — Angular component library (Button, Icon, OudsProvider)
  react/              @ouds/react — React component library (Button, Icon, OudsProvider)
  vue/                @ouds/vue — Vue 3 component library (Button, Icon, OudsProvider)
apps/
  react-storybook/    Storybook for @ouds/react
  vue-storybook/      Storybook for @ouds/vue
  angular-storybook/  Storybook for @ouds/angular
```

The React, Angular, and Vue ("RAV") libraries are versioned and published independently of OUDS Web. They are at an early stage: each ships a `Button`, an `Icon`, and an `OudsProvider` (theme, brand, and rounded-corner settings). See each library's `README.md`, `ARCHITECTURE.md`, and `AGENTS.md`, and the repository-level [`ARCHITECTURE.md`](ARCHITECTURE.md) for the project graph, dependency rules, build pipeline, and release model.

## Getting started

Use Node.js 24.15.0 or newer (see `.nvmrc`). Run `npm install` at the repository root — this installs dependencies for every workspace (`libs/web`, `libs/web/packages/*`, `libs/core`, `libs/icons`, `libs/angular`, `libs/react`, `libs/vue`).

All of the familiar npm scripts still work from the repository root; they delegate to the relevant workspace under the hood. For example:

```bash
npm run start        # start all three brand doc servers in parallel
npm run dist          # build CSS + JS for every brand
npm run test          # run the full test suite
npm run docs-build    # build the documentation site for every brand
```

See [`libs/web/README.md`](libs/web/README.md) for the full list of scripts and details on the OUDS Web library itself.

For the RAV libraries:

```bash
npm run react:lint              # also core:*, angular:* and vue:* — lint / test / build one library
npm run rav:test                # rav:lint / rav:test run across core, angular, react and vue; rav:build across angular, react and vue
npm run lint:all                # lint:all / build:all — core, angular, react, vue, web-common and the Storybook apps
npm run test:all                # core, angular, react and vue
npm run storybook:react:serve   # also storybook:vue:* and storybook:angular:* — serve (port 4400) / build / lint
```

CI runs `lint:all`, `test:all`, and `build:all`; the OUDS Web suites run in their own workflows. `npm run netlify` builds the deployed site: the OUDS Web docs and Storybook, plus the three RAV Storybooks and the test coverage reports of core, angular, react and vue (`/coverage/<library>/`).

## Tooling

| Library                     | Lint                                            | Format                                  | Tests                   |
| --------------------------- | ----------------------------------------------- | --------------------------------------- | ----------------------- |
| `libs/web` (`@ouds/web-*`)  | ESLint 9 (`libs/web/eslint.config.mjs`), Stylelint | Prettier (docs site)                    | Karma/Jasmine, Vitest 4 |
| `libs/angular`              | ESLint 9 (extends root `eslint.config.mjs`)     | —                                       | Jest (100% coverage)    |
| `libs/core`, `libs/icons`, `libs/react`, `libs/vue` | Oxlint via `@nx/oxlint` (extends `oxlint.base.json`) | —                                  | Vitest 5 + V8 coverage (100% threshold for react and vue) |
| `apps/*-storybook`          | Oxlint via `@nx/oxlint` (extends `oxlint.base.json`) | —                                  | —                       |

`libs/angular` stays on ESLint because Oxlint has no parser for Angular templates, HTML, or JSON rules; `apps/angular-storybook` holds no templates, so it uses Oxlint. Module-boundary `depConstraints` are duplicated in `oxlint.base.json`, `eslint.config.mjs`, and `libs/web/eslint.config.mjs`; keep them in sync.

## Task orchestration

This monorepo uses [NX](https://nx.dev) to orchestrate and cache tasks across workspaces. See `nx.json` for target configuration; the `@nx/oxlint` plugin infers the `lint` target for `@ouds/core`, `@ouds/react`, `@ouds/vue`, and the three Storybook apps. `npx nx show projects` lists the 13 Nx projects.

## License

See [`LICENSE`](LICENSE).
