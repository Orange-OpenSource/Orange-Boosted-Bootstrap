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
  angular/            @ouds/angular — Angular component library (early scaffold)
  react/              @ouds/react — React component library (early scaffold)
  vue/                @ouds/vue — Vue 3 component library (early scaffold)
apps/
  react-storybook/    Storybook for @ouds/react
  vue-storybook/      Storybook for @ouds/vue
  angular-storybook/  Storybook for @ouds/angular
```

The React, Angular, and Vue ("RAV") libraries are versioned and published independently of OUDS Web. See each library's `README.md`, `ARCHITECTURE.md`, and `AGENTS.md`.

## Getting started

Run `npm install` at the repository root — this installs dependencies for every workspace (`libs/web`, `libs/web/packages/*`, `libs/core`, `libs/angular`, `libs/react`, `libs/vue`).

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
npm run react:lint        # also core:*, angular:* and vue:* — lint / test / build one library
npm run lint:all          # lint:all / test:all / build:all — run across core, angular, react, vue and web-common
```

## Tooling

| Library                     | Lint                                            | Format                                  | Tests                   |
| --------------------------- | ----------------------------------------------- | --------------------------------------- | ----------------------- |
| `libs/web` (`@ouds/web-*`)  | ESLint 9 (`libs/web/eslint.config.mjs`), Stylelint | Prettier (docs site)                    | Karma/Jasmine, Vitest 4 |
| `libs/angular`              | ESLint 9 (extends root `eslint.config.mjs`)     | —                                       | Jest                    |
| `libs/core`, `libs/react`, `libs/vue` | Oxlint via `@nx/oxlint` (extends `oxlint.base.json`) | —                                  | Vitest 5 + V8 coverage  |
| `apps/*-storybook`          | Oxlint via `@nx/oxlint` (extends `oxlint.base.json`) | —                                  | —                       |

`libs/angular` stays on ESLint because Oxlint has no parser for Angular templates, HTML, or JSON rules; `apps/angular-storybook` holds no templates, so it uses Oxlint. Module-boundary `depConstraints` are duplicated in `oxlint.base.json`, `eslint.config.mjs`, and `libs/web/eslint.config.mjs`; keep them in sync.

## Task orchestration

This monorepo uses [NX](https://nx.dev) to orchestrate and cache tasks across workspaces. See `nx.json` for target configuration; the `@nx/oxlint` plugin infers the `lint` target for `@ouds/core`, `@ouds/react`, `@ouds/vue`, and the three Storybook apps.

## License

See [`LICENSE`](LICENSE).
