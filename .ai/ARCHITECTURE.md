---
title: "Architecture — OUDS Web"
description: "Build pipeline, CI/CD, npm workspaces, distribution files, Astro docs site, Storybook, linter configs, and release process for the OUDS Web monorepo."
audience:
  - build-engineers
  - devops
  - maintainers
  - ai-agents
keywords:
  - architecture
  - build
  - pipeline
  - CSS
  - Sass
  - PostCSS
  - RTL
  - Rollup
  - npm-workspaces
  - CI/CD
  - release
  - Astro
  - Storybook
related_files:
  - "../AGENTS.md#architecture-overview"
  - "DESIGN_TOKENS.md#brand-import-pipeline"
  - "QUICK_LOOKUP.md#architecture--build"
last_updated: "2026-03-31"
---

# Architecture — OUDS Web

> Detailed architecture reference for the OUDS Web monorepo.
> For a quick overview, see the [Architecture section in AGENTS.md](../AGENTS.md#architecture-overview).

---

## Table of contents

1. [Build pipeline](#build-pipeline)
2. [CSS build pipeline](#css-build-pipeline)
3. [JavaScript build pipeline](#javascript-build-pipeline)
4. [npm workspaces and package publishing](#npm-workspaces-and-package-publishing)
5. [Distribution files](#distribution-files)
6. [Astro documentation site](#astro-documentation-site)
7. [Storybook](#storybook)
8. [CI/CD pipeline](#cicd-pipeline)
9. [Testing infrastructure](#testing-infrastructure)
10. [Linter configurations](#linter-configurations)
11. [Release process](#release-process)
12. [Root configuration files](#root-configuration-files)

---

## Build pipeline

### End-to-end flow

Running `npm run dist` triggers both CSS and JS builds in parallel:

```
npm run dist
├── css (sequential per brand + lint)
│   └── Per brand: sass compile -> autoprefixer -> rtlcss -> clean-css minify
└── js (compile then minify)
    ├── js-compile (4 variants in parallel via Rollup)
    └── js-minify (3 bundles in parallel via Terser)
```

Running `npm run test` triggers the full validation pipeline:

```
npm run test
├── lint          (parallel: ESLint, Stylelint, lockfile-lint)
├── dist          (CSS + JS build)
├── js-test       (parallel: Karma, jQuery compat, 2 integration tests)
├── docs-build    (clean -> dist -> SRI -> Astro build for all 3 brands)
└── docs-lint     (Prettier check -> VNU HTML validation)
```

### All npm scripts — categorized

#### Development

| Script               | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| `start`              | Starts all 3 brand dev servers in parallel (ports 9001, 9002, 9003) |
| `dev-orange`         | Orange docs dev server on port 9001                                 |
| `dev-sosh`           | Sosh docs dev server on port 9002                                   |
| `dev-orange-compact` | Orange Compact docs dev server on port 9003                         |
| `watch`              | Watches JS source and docs for changes, re-lints and recompiles     |
| `watch-js-main`      | Watches `js/src/`, runs lint + compile on change                    |
| `watch-js-docs`      | Watches `site/src/assets/`, runs lint on change                     |

#### CSS

| Script                   | Description                                            |
| ------------------------ | ------------------------------------------------------ |
| `css`                    | Full CSS build for all brands + lint + prefix examples |
| `css-dev-orange`         | Build CSS for Orange brand only                        |
| `css-dev-sosh`           | Build CSS for Sosh brand only                          |
| `css-dev-orange-compact` | Build CSS for Orange Compact brand only                |
| `css-prefix-examples`    | Autoprefix example CSS files in-place                  |
| `css-test`               | Run SCSS unit tests (sass-true + Jasmine)              |

#### JavaScript

| Script                      | Description                                    |
| --------------------------- | ---------------------------------------------- |
| `js`                        | Full JS build: compile then minify             |
| `js-compile`                | Compile all 4 JS variants in parallel          |
| `js-compile-standalone`     | Rollup -> UMD without Popper                   |
| `js-compile-standalone-esm` | Rollup -> ESM without Popper                   |
| `js-compile-bundle`         | Rollup -> UMD with Popper bundled              |
| `js-compile-plugins`        | Rollup -> individual UMD plugins to `js/dist/` |
| `js-minify`                 | Minify all 3 dist bundles in parallel (Terser) |

#### Linting

| Script               | Description                                                |
| -------------------- | ---------------------------------------------------------- |
| `lint`               | All linters in parallel (ESLint, Stylelint, lockfile-lint) |
| `js-lint`            | ESLint on `.html`, `.js`, `.mjs`, `.md` files              |
| `css-lint`           | All CSS linters in parallel                                |
| `css-lint-stylelint` | Stylelint on `**/*.{css,scss}`                             |
| `lockfile-lint`      | Validates `package-lock.json` integrity                    |

#### Testing

| Script           | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| `test`           | Full test suite (lint, build, JS tests, docs build, docs lint) |
| `js-test`        | All JS tests in parallel                                       |
| `js-test-karma`  | Unit tests via Karma + Jasmine                                 |
| `js-test-jquery` | Karma tests with jQuery compatibility mode                     |
| `js-test-cloud`  | Karma tests on BrowserStack                                    |
| `js-debug`       | Karma tests in debug mode (headed browser)                     |

#### Documentation

| Script                 | Description                                                     |
| ---------------------- | --------------------------------------------------------------- |
| `docs`                 | Build docs then lint                                            |
| `docs-build`           | Full docs build: clean, dist, SRI, Astro build for all 3 brands |
| `docs-lint`            | Prettier check + VNU HTML validation                            |
| `docs-vnu`             | Nu HTML Checker validation                                      |
| `docs-pa11y`           | Pa11y-CI accessibility test via sitemap crawling                |
| `docs-accessibility`   | Start server + run Pa11y in parallel                            |
| `docs-prettier-check`  | Verify Prettier formatting in `site/`                           |
| `docs-prettier-format` | Auto-format `site/` with Prettier                               |
| `docs-serve`           | Alias for `start`                                               |
| `docs-serve-only`      | Static serve `_site/` on port 9001                              |

#### Release

| Script                 | Description                                 |
| ---------------------- | ------------------------------------------- |
| `release`              | Build Storybook + create all zip archives   |
| `release-sri`          | Generate SRI hashes into `config.yml` files |
| `release-version`      | Update version strings across all files     |
| `release-zip`          | Create dist zip for each brand              |
| `release-zip-examples` | Create example zips for each brand          |

#### Storybook

| Script               | Description                                           |
| -------------------- | ----------------------------------------------------- |
| `storybook`          | Generate stories then launch dev server on port 6006  |
| `storybook-generate` | Build docs, then auto-generate stories from doc pages |
| `storybook-build`    | Build static Storybook into `_site/storybook/`        |

#### Meta

| Script        | Description                                     |
| ------------- | ----------------------------------------------- |
| `dist`        | Build CSS (all brands) and JS in parallel       |
| `bundlewatch` | Check bundle sizes against limits               |
| `netlify`     | Netlify deployment hook (builds Storybook)      |
| `update-deps` | Update dependencies (excluding pinned packages) |

---

## CSS build pipeline

### 4-step pipeline

Each brand's CSS goes through a sequential 4-step pipeline:

```
Step 1: css-compile  (Sass -> expanded CSS + source maps)
    |
Step 2: css-prefix   (PostCSS autoprefixer -> in-place replace)
    |
Step 3: css-rtl      (PostCSS rtlcss -> new *.rtl.css files)
    |
Step 4: css-minify   (clean-css -> *.min.css + source maps)
         |-- css-minify-main  (LTR files)
         |-- css-minify-rtl   (RTL files)
```

### Step 1: Sass compilation

**Tool**: `sass` (Dart Sass, pinned at **1.78.0** — deliberately pinned, not auto-updated).

**Command** (identical for all 3 brands):

```bash
sass --style expanded --source-map --embed-sources --no-error-css --load-path=../../node_modules/ scss/:dist/css/
```

| Flag                              | Purpose                                                          |
| --------------------------------- | ---------------------------------------------------------------- |
| `--style expanded`                | Human-readable output (minification happens in Step 4)           |
| `--source-map`                    | Generate `.css.map` files                                        |
| `--embed-sources`                 | Embed original SCSS source in source maps                        |
| `--no-error-css`                  | Do not output CSS if Sass errors occur                           |
| `--load-path=../../node_modules/` | Resolves `@import "@ouds/web-common/..."` via workspace symlinks |

### Step 2: Autoprefixer

**Configuration**: `build/postcss.config.mjs`

```javascript
export default (context) => ({
  map: context.file.dirname.includes("examples")
    ? false
    : {
        inline: false,
        annotation: true,
        sourcesContent: true,
      },
  plugins: {
    autoprefixer: { cascade: false },
    rtlcss: context.env === "RTL",
  },
});
```

- Source maps: External (not inline), with annotations and source contents. Disabled for example files.
- Autoprefixer: Always applied, `cascade: false` (no visual alignment of prefixed properties).
- RTL: Only activated when `NODE_ENV=RTL` (Step 3).

### Step 3: RTL generation

Runs PostCSS with `cross-env NODE_ENV=RTL`, which activates the `rtlcss` plugin. Generates `*.rtl.css` variants for every non-minified, non-RTL CSS file.

### Step 4: Minification

**Tool**: `clean-css-cli`

Options: `-O1` (level 1 optimization), `--format breakWith=lf`, `--with-rebase`, `--source-map --source-map-inline-sources`, `--batch` mode with `--batch-suffix ".min"`.

### SCSS entry points per brand

Each brand has **5 SCSS entry points** in `packages/<brand>/scss/`:

| Entry point               | Output CSS               | Description                                                                        |
| ------------------------- | ------------------------ | ---------------------------------------------------------------------------------- |
| `ouds-web.scss`           | `ouds-web.css`           | Full framework: config + tokens + variables + all components + helpers + utilities |
| `ouds-web-bootstrap.scss` | `ouds-web-bootstrap.css` | Same as above with `$enable-bootstrap-compatibility: true`                         |
| `ouds-web-grid.scss`      | `ouds-web-grid.css`      | Grid-only: containers, grid, selected utilities                                    |
| `ouds-web-reboot.scss`    | `ouds-web-reboot.css`    | Reboot-only: root + normalize/reset styles                                         |
| `ouds-web-utilities.scss` | `ouds-web-utilities.css` | Utilities-only: root + helpers + utility API                                       |

### CSS output per brand

For each entry point, the pipeline produces **8 files** (4 CSS + 4 source maps):

```
ouds-web.css              (LTR, expanded)
ouds-web.css.map
ouds-web.min.css           (LTR, minified)
ouds-web.min.css.map
ouds-web.rtl.css           (RTL, expanded)
ouds-web.rtl.css.map
ouds-web.rtl.min.css       (RTL, minified)
ouds-web.rtl.min.css.map
```

5 entry points x 8 files = **40 CSS/map files per brand**, **120+ total** across all 3 brands.

### SCSS import chain (main entry point)

Every brand's `ouds-web.scss` follows this exact structure — the only difference between brands is the token import line:

```scss
@import "@ouds/web-common/scss/mixins/banner";
@include bsBanner("");

@import "@ouds/web-common/scss/config"; // 1. $prefix: bs-, color-mode type
@import "@ouds/web-common/scss/functions"; // 2. Sass helper functions
@import "@ouds/web-<BRAND>/scss/tokens"; // 3. Brand tokens (THE ONLY DIFFERENCE)
@import "@ouds/web-common/scss/variables"; // 4. Bootstrap variables mapped to tokens
@import "@ouds/web-common/scss/variables-dark"; // 5. Dark mode overrides
@import "@ouds/web-common/scss/maps"; // 6. Sass map configurations
@import "@ouds/web-common/scss/mixins"; // 7. Sass mixins
@import "@ouds/web-common/scss/utilities"; // 8. Utility class definitions

// Layout & component imports (47 imports from @ouds/web-common/scss/...)
@import "@ouds/web-common/scss/root";
@import "@ouds/web-common/scss/reboot";
// ... all standard Bootstrap + OUDS components ...

@import "@ouds/web-common/scss/helpers";
@import "@ouds/web-common/scss/utilities/api";
```

**Key architectural insight**: Tokens are imported **between** `functions` and `variables`. Brand token values (all declared with `!default`) are loaded first. Then `_variables.scss` maps those token variables to Bootstrap's internal variable system. Because tokens use `!default`, the brand's values take precedence.

### Token import order

Within each brand, `tokens/_index.scss` imports in this exact order:

```scss
@import "raw"; // 1. Primitive values ($core-ouds-*, $core-<brand>-*)
@import "semantic"; // 2. Semantic mappings ($ouds-*)
@import "semantic-colors-custom-props"; // 3. CSS custom properties (semantic colors)
@import "composite"; // 4. Composite tokens (manually managed)
@import "component-colors-custom-props"; // 5. CSS custom properties (component colors)
@import "component"; // 6. Component-level tokens ($ouds-<component>-*)
```

### SCSS tests

SCSS tests use **sass-true** (version 9.x) integrated with Jasmine:

- Config: `scss/tests/jasmine.js`
- Test files: `scss/**/*.{test,spec}.scss`
- Custom loader: `scss/tests/sass-true/register.js` hooks into Node's `require.extensions['.scss']`
- Run via: `npm run css-test`
- Tests cover: color contrast calculations, box shadows, color modes, utilities API, and custom grid/utilities builds.

### CSS banner

The SCSS mixin at `scss/mixins/_banner.scss` prepends a license header to all compiled CSS output. It mentions both OUDS Web and Bootstrap origins.

---

## JavaScript build pipeline

### Rollup configuration

**File**: `build/rollup.config.mjs`

Two environment variables control the build:

| Env var       | Effect                                   |
| ------------- | ---------------------------------------- |
| `BUNDLE=true` | Bundles Popper.js into the output        |
| `ESM=true`    | Produces ES module format instead of UMD |

#### Entry points

| Mode | Entry file        |
| ---- | ----------------- |
| UMD  | `js/index.umd.js` |
| ESM  | `js/index.esm.js` |

Both entry files export 14 JS components: Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, OrangeNavbar, Popover, QuantitySelector, ScrollSpy, Tab, Toast, Tooltip.

The UMD entry exports a single default object (`oudsWeb` namespace). The ESM entry uses named exports.

#### Output variants (4 builds)

| npm script                  | Output file                  | Format | Popper?  |
| --------------------------- | ---------------------------- | ------ | -------- |
| `js-compile-standalone`     | `dist/js/ouds-web.js`        | UMD    | External |
| `js-compile-standalone-esm` | `dist/js/ouds-web.esm.js`    | ESM    | External |
| `js-compile-bundle`         | `dist/js/ouds-web.bundle.js` | UMD    | Bundled  |
| `js-compile-plugins`        | `js/dist/*.js`               | UMD    | External |

#### Rollup plugins

| Plugin                        | When        | Purpose                                             |
| ----------------------------- | ----------- | --------------------------------------------------- |
| `@rollup/plugin-babel`        | Always      | Transpiles ES6+ with bundled helpers                |
| `@rollup/plugin-replace`      | BUNDLE only | Replaces `process.env.NODE_ENV` with `"production"` |
| `@rollup/plugin-node-resolve` | BUNDLE only | Resolves `@popperjs/core` for bundling              |

#### Output details

- **Banner**: License header via `build/banner.mjs`
- **UMD global name**: `oudsWeb`
- **External globals**: `{ '@popperjs/core': 'Popper' }` (UMD standalone only)
- **Generated code target**: `es2015`
- **Source maps**: Enabled

### Babel configuration

**File**: `.babelrc.js`

```javascript
{
  presets: [
    ["@babel/preset-env", { loose: true, bugfixes: true, modules: false }],
  ];
}
```

- `loose: true` — generates simpler, faster code
- `bugfixes: true` — uses `@babel/preset-modules` optimizations
- `modules: false` — preserves ES modules for Rollup tree-shaking

### Minification

**Tool**: Terser

Options: `--compress passes=2` (2-pass compression), `--mangle` (variable name mangling), `--comments "/^!/"` (preserve banner comments), source maps chained from Rollup output.

### Individual plugin builds

**Script**: `build/build-plugins.mjs`

Builds each JS source file in `js/src/` as a standalone UMD module into `js/dist/`. External imports map to PascalCase class names (e.g., `base-component.js` -> `BaseComponent`).

### Banner generator

**Script**: `build/banner.mjs`

Generates the copyright/license comment prepended to all compiled JS. Reads version and homepage from root `package.json`. Mentions both OUDS Web and Bootstrap origins.

---

## npm workspaces and package publishing

### Workspace structure

```json
// Root package.json
{
  "name": "@ouds/web-common",
  "workspaces": ["packages/*"]
}
```

npm automatically discovers `packages/orange`, `packages/sosh`, and `packages/orange-compact` as workspace members.

### Packages overview

| Package                    | Publishes                  | Runtime dependencies    |
| -------------------------- | -------------------------- | ----------------------- |
| `@ouds/web-common`         | Compiled JS + SCSS source  | `@popperjs/core` (peer) |
| `@ouds/web-orange`         | Compiled CSS + SCSS source | None                    |
| `@ouds/web-sosh`           | Compiled CSS + SCSS source | None                    |
| `@ouds/web-orange-compact` | Compiled CSS + SCSS source | None                    |

**Key principle**: JavaScript is shared across all brands. Only CSS/tokens differ per brand.

### What gets published

**`@ouds/web-common`** (`files` field):

```
dist/js/*.{js,map}          — Compiled JS bundles (6 bundles + sourcemaps)
js/{src,dist}/**/*.{js,map} — Individual plugins (source + compiled)
js/index.{esm,umd}.js       — JS entry points
scss/**/*.scss               — All SCSS source (except tests)
NOTICE.txt, LICENSE
```

No CSS is published from the root package.

**Brand packages** (`files` field):

```
dist/css/*.{css,map}  — Compiled brand CSS (40 files)
scss/**/*.scss        — Brand SCSS source (tokens)
<brand>-logo.svg      — Brand logo
NOTICE.txt, LICENSE
```

No JavaScript is published from brand packages.

### How brand packages reference common code

#### Workspace symlinks

npm workspaces create symlinks in `node_modules/@ouds/`:

```
node_modules/@ouds/
  web-common         -> ../..                        (monorepo root)
  web-orange         -> ../../packages/orange
  web-orange-compact -> ../../packages/orange-compact
  web-sosh           -> ../../packages/sosh
```

This means `@import "@ouds/web-common/scss/_variables.scss"` resolves to `<repo-root>/scss/_variables.scss`.

#### The `devDependencies` mechanism

Brand packages declare `"@ouds/web-common": "file:../.."` in `devDependencies` (not `dependencies`). This is intentional: common SCSS is only needed at **build time**. At runtime, consumers get pre-compiled CSS from the brand package and pre-compiled JS from `@ouds/web-common` independently.

#### SCSS import resolution

The `sass` CLI is invoked with `--load-path=../../node_modules/`. Since `node_modules/@ouds/web-common` is a symlink to the monorepo root, `@import "@ouds/web-common/scss/buttons"` resolves to `<repo-root>/scss/_buttons.scss`.

### Consumer installation model

```bash
# JavaScript (shared across all brands)
npm install @ouds/web-common

# CSS (pick one brand)
npm install @ouds/web-orange       # OR
npm install @ouds/web-sosh         # OR
npm install @ouds/web-orange-compact
```

Then reference:

- **JS**: `@ouds/web-common/dist/js/ouds-web.esm.js` (or `.bundle.js` for Popper included)
- **CSS**: `@ouds/web-<brand>/dist/css/ouds-web.min.css`
- **SCSS** (for custom builds): `@ouds/web-<brand>/scss/ouds-web.scss` as entry, which pulls in `@ouds/web-common/scss/*`

### CDN distribution model

```
CSS (brand-specific): https://cdn.jsdelivr.net/npm/@ouds/web-<brand>@1.1.0/dist/css/ouds-web.min.css
JS  (shared):         https://cdn.jsdelivr.net/npm/@ouds/web-common@1.1.0/dist/js/ouds-web.bundle.min.js
```

All three brands reference the same JS CDN URLs with the same SRI hashes. CSS is served from the respective brand package with brand-specific SRI hashes.

### Version management

**Script**: `build/change-version.mjs`

Usage: `node build/change-version.mjs <old_version> <new_version> [--verbose] [--dry[-run]]`

Updates version strings in:

1. `README.md`
2. `js/src/base-component.js`
3. `scss/mixins/_banner.scss`
4. `site/data/docs-versions.yml`
5. `packages/<brand>/config.yml` (for each brand)
6. All `package.json` files (via `npm version`)

All packages are always at the **same version**.

---

## Distribution files

### JavaScript output (`dist/js/`)

Published as part of `@ouds/web-common`:

```
dist/js/
├── ouds-web.js               (UMD, Popper external)
├── ouds-web.js.map
├── ouds-web.min.js            (UMD, minified)
├── ouds-web.min.js.map
├── ouds-web.esm.js            (ESM, Popper external)
├── ouds-web.esm.js.map
├── ouds-web.esm.min.js        (ESM, minified)
├── ouds-web.esm.min.js.map
├── ouds-web.bundle.js         (UMD, Popper included)
├── ouds-web.bundle.js.map
├── ouds-web.bundle.min.js     (UMD bundle, minified)
└── ouds-web.bundle.min.js.map
```

### Individual plugins (`js/dist/`)

Also published as part of `@ouds/web-common`:

```
js/dist/
├── alert.js, base-component.js, button.js, carousel.js, collapse.js,
│   dropdown.js, modal.js, offcanvas.js, orange-navbar.js, popover.js,
│   quantity-selector.js, scrollspy.js, tab.js, toast.js, tooltip.js
├── dom/
│   ├── data.js, event-handler.js, manipulator.js, selector-engine.js
└── util/
    ├── backdrop.js, component-functions.js, config.js, focustrap.js,
    │   index.js, sanitizer.js, scrollbar.js, swipe.js, template-factory.js
```

Each file has a corresponding `.js.map` sourcemap.

### CSS output per brand (`packages/<brand>/dist/css/`)

Identical structure for all 3 brands:

```
dist/css/
├── ouds-web.css, .css.map, .min.css, .min.css.map,
│   .rtl.css, .rtl.css.map, .rtl.min.css, .rtl.min.css.map
├── ouds-web-bootstrap.css, ... (same 8-file pattern)
├── ouds-web-grid.css, ...
├── ouds-web-reboot.css, ...
└── ouds-web-utilities.css, ...
```

---

## Astro documentation site

### Overview

The documentation site is built with **Astro 5.x** and uses MDX content collections. Each brand gets its own separate Astro build, determined by the `BRAND` environment variable.

### Configuration

**File**: `site/astro.config.ts`

Key details:

- `process.chdir('../../')` — sets working directory to monorepo root (since site lives in `site/`).
- **Site URL**: In dev mode: `http://localhost:<port>`. On Netlify: uses `DEPLOY_PRIME_URL`. Otherwise: `baseURL` from brand's `config.yml`.
- **Build assets path**: `{brand}/docs/{docs_version}/assets`.
- **Integrations**: Custom `oudsWeb()` integration (from `src/libs/astro.ts`) that bundles `astro-auto-import`, remark/rehype plugins, static file copying, `@astrojs/mdx`, and `@astrojs/sitemap`.
- **Markdown**: Smartypants disabled, Prism syntax highlighting.
- **Vite plugins**: `algoliaPlugin()` (replaces Algolia config placeholders), `stackblitzPlugin()` (replaces CDN URL placeholders).

### Site directory structure

```
site/
├── astro.config.ts          # Astro configuration
├── tsconfig.json            # Path aliases (@assets, @components, @layouts, @libs, @shortcodes)
├── data/                    # Shared YAML/TS data files
├── static/                  # Brand-specific static assets (copied to public/)
└── src/
    ├── assets/              # Client-side JS and example source files
    ├── components/          # Astro components
    │   ├── head/            # Head, Favicons, Scss, Social, Stylesheet
    │   ├── header/          # Header, Navigation, Skippy, SubNav, Versions
    │   ├── footer/          # Footer
    │   ├── home/            # MastHead, GetStarted, Customize, CSSVariables
    │   ├── icons/           # SVG icon components
    │   ├── partials/        # ResponsiveImage
    │   ├── shortcodes/      # 22 auto-imported shortcode components
    │   ├── DocsSidebar.astro
    │   ├── DocsScripts.astro
    │   ├── Scripts.astro
    │   └── TableOfContents.astro
    ├── content/             # Astro Content Collections
    │   ├── config.ts        # Collection definitions
    │   ├── docs/            # MDX documentation pages
    │   └── callouts/        # 13 reusable callout markdown fragments
    ├── layouts/             # BaseLayout, DocsLayout, ExamplesLayout, SingleLayout, RedirectLayout
    ├── libs/                # 18 TypeScript utility modules
    ├── pages/               # Astro pages (routing)
    ├── plugins/             # Vite plugins (Algolia, StackBlitz)
    ├── scss/                # 24 SCSS files for the docs site itself
    └── types/               # TypeScript type definitions
```

### Content collections

Two collections defined in `site/src/content/config.ts`:

**`docs`** — MDX documentation pages with this frontmatter schema:

| Field         | Type                       | Required | Description                                 |
| ------------- | -------------------------- | -------- | ------------------------------------------- |
| `title`       | `string`                   | Yes      | Page title                                  |
| `description` | `string`                   | Yes      | Page description (supports inline markdown) |
| `toc`         | `boolean`                  | No       | Show table of contents                      |
| `aliases`     | `string \| string[]`       | No       | URL aliases for redirects                   |
| `added`       | `{ version, show_badge? }` | No       | Version badge display                       |
| `direction`   | `'rtl'`                    | No       | Force RTL direction                         |
| `extra_js`    | `{ src, async? }[]`        | No       | Additional JS scripts                       |
| `sections`    | `{ title, description }[]` | No       | Sub-section cards                           |
| `thumbnail`   | `string`                   | No       | Social media thumbnail                      |
| `types`       | `string[]`                 | No       | Component type names for versioning lookup  |

**`callouts`** — Reusable markdown fragments (13 files) referenced by name from the `<Callout name="...">` shortcode.

### Content structure

```
content/docs/
├── about/                 # 5 pages (brand, cookies, license, overview, team)
├── components/            # 46 component MDX pages
├── foundation/            # 12 pages (approach, color-modes, tokens, typography...)
├── getting-started/       # 16 pages (introduction, download, javascript, migration...)
├── layout/                # 9 pages (breakpoints, grid, containers...)
└── utilities/             # 27 pages (api, background, border, spacing...)
```

### Layout hierarchy

```
BaseLayout.astro           # Root HTML shell: <html>, <Head>, <Header>, <main>, <Footer>, <Scripts>
├── DocsLayout.astro       # Docs pages: adds sidebar, intro, TOC, GitHub links, sections
├── SingleLayout.astro     # Single-column pages: title bar + content area
├── ExamplesLayout.astro   # Standalone example pages (does NOT use BaseLayout)
└── RedirectLayout.astro   # Client-side redirect pages (does NOT use BaseLayout)
```

### Routing and brand-parameterized pages

```
pages/
├── index.astro                   # / -> redirects to /{brand}/
├── 404.astro                     # 404 page
├── resources.astro               # Resource links
├── robots.txt.ts                 # Dynamic robots.txt
├── [...alias].astro              # Alias redirects (without brand prefix)
└── [brand]/
    ├── index.astro               # /{brand}/ -> homepage
    ├── examples.astro            # Redirects to versioned examples
    ├── [...alias].astro          # Alias redirects (with brand prefix)
    └── docs/
        ├── index.astro           # Redirects to getting-started/introduction
        ├── versions.astro        # Version listing
        └── [version]/
            ├── [...slug].astro   # ALL docs pages (the core route)
            ├── customize/
            │   └── index.astro
            └── examples/
                ├── index.astro
                ├── [...example].astro  # Example pages
                └── [...asset].ts       # Example assets (API route)
```

**URL pattern**: `/{brand}/docs/{version}/{section}/{page}/`

The `[brand]` parameter is **not** a dynamic route that iterates over brands. Each `getStaticPaths()` returns **only one brand** — the one defined in the `BRAND` environment variable (defaults to `"orange"`). Each brand builds its own separate Astro site.

### Shortcode system (auto-import)

All 22 components in `src/components/shortcodes/` are automatically imported into every MDX file via `astro-auto-import`. MDX files can use them without explicit imports.

Key shortcodes:

| Shortcode                  | Purpose                                                                                      |
| -------------------------- | -------------------------------------------------------------------------------------------- |
| `<Example>`                | Live HTML example with preview + code snippet + StackBlitz/clipboard buttons                 |
| `<Code>`                   | Prism-highlighted code block with clipboard. Can load from `filePath` or accept `code` prop. |
| `<Callout>`                | Alert/callout box (info/warning/negative). Can load from named callouts or use slot content. |
| `<ScssDocs>`               | Extracts SCSS between `// scss-docs-start {name}` and `// scss-docs-end {name}` markers      |
| `<JsDocs>`                 | Same as ScssDocs for JS code between `// js-docs-start` and `// js-docs-end` markers         |
| `<BsTable>`                | Applies CSS class to markdown tables via rehype plugin                                       |
| `<Placeholder>`            | SVG or IMG placeholder images                                                                |
| `<AddedIn>`                | "Added in v{version}" badge                                                                  |
| `<DeprecatedIn>`           | "Deprecated in v{version}" badge                                                             |
| `<BrandSpecific>`          | Conditionally renders content for specified brand(s) only                                    |
| `<BootstrapCompatibility>` | Collapsible section for Bootstrap-compatibility content                                      |
| `<ComponentCard>`          | Card with inert preview + link for component index pages                                     |

### Template placeholders

Two remark plugins process placeholders in all MDX content and frontmatter:

1. **`[[config:key.path]]`** — Replaced with values from `config.yml`. Supports nested paths.
2. **`[[docsref:/path]]`** — Replaced with `/{brand}/docs/{version}/path`.

### Rehype plugins

1. **`rehypeHeadingIds`** — Adds IDs to headings.
2. **`rehypeAutolinkHeadings`** — Adds anchor links for h2-h5.
3. **`rehypeBsTable`** — Applies CSS class from `<BsTable>` wrapper to the inner `<table>` element.

### Libs/utilities (18 modules in `src/libs/`)

| File                | Purpose                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| `astro.ts`          | Custom Astro integration: auto-import, remark/rehype plugins, static file copying, build validation     |
| `config.ts`         | Loads and validates brand `config.yml` (Zod schema, 30+ fields). Uses `BRAND` env var.                  |
| `content.ts`        | Pre-fetched Astro content collections: `docsPages`, `callouts`, `aliasedDocsPages`                      |
| `data.ts`           | Typed data loader for `site/data/*.yml` files, each with a Zod schema                                   |
| `examples.ts`       | Example page utilities: frontmatter schema, asset discovery, alias extraction                           |
| `image.ts`          | `getStaticImageSize()` — reads image files and returns dimensions                                       |
| `layout.ts`         | Layout type definitions                                                                                 |
| `oudsWeb.ts`        | Generates versioned CSS/JS `<link>`/`<script>` props (dev vs prod, minification, integrity hashes, RTL) |
| `path.ts`           | Path utilities: `getVersionedDocsPath()`, path validation, filesystem helpers                           |
| `placeholder.ts`    | SVG/IMG placeholder generation and `<Placeholder />` replacement in raw HTML                            |
| `prism.ts`          | Custom Prism plugin for `.line` spans in bash/sh/powershell                                             |
| `rehype.ts`         | `rehypeBsTable` plugin                                                                                  |
| `remark.ts`         | `remarkBsConfig` (config replacements) + `remarkBsDocsref` (docs link replacements)                     |
| `sass-variables.ts` | Uses `sass-export` to extract tokens from `_raw.scss` and `_semantic.scss`                              |
| `toc.ts`            | Hierarchical table-of-contents tree from heading list                                                   |
| `utils.ts`          | `capitalizeFirstLetter`, `getSlug`, `stripMarkdown`, `processMarkdownToHtml`                            |
| `validation.ts`     | Zod validators: semver, hex colors, pixel sizes, sidebar schema                                         |
| `icon.ts`           | `SvgIconProps` interface                                                                                |

### Data files (`site/data/`)

| File                       | Description                                       |
| -------------------------- | ------------------------------------------------- |
| `_components-versions.yml` | Component design version tracking                 |
| `breakpoints.yml`          | Responsive breakpoint definitions                 |
| `colors.yml`               | 13 named hex color definitions                    |
| `grays.yml`                | 9 named gray hex color definitions                |
| `theme-colors.yml`         | Theme colors with hex, dark_hex, contrast_color   |
| `core-team.yml`            | Core team members                                 |
| `docs-versions.yml`        | All documentation versions by major release       |
| `examples.yml`             | Example pages catalog by category                 |
| `sidebar-*.yml`            | Sidebar navigation for each docs section          |
| `components-details.ts`    | Component card data for the components index page |

### Sidebar YAML schema

```yaml
- title: "Section Name"
  icon: "icon-name" # Optional SVG sprite icon
  icon_color: "body-color" # Optional CSS variable for icon color
  pages:
    - title: "Page Title"
      draft: true # Optional: traffic cone icon
      brand: "orange,sosh" # Optional: only for specific brands
      direct_url: "/path" # Optional: override URL
      coming_soon: true # Optional: strike-through, not linked
```

### Brand-specific configuration

**Files**: `packages/<brand>/config.yml`

All three share an identical structure. They differ in:

- `brand`, `display_brand`, `title`
- `algolia.index_name`
- CDN CSS URLs and SRI hashes
- `debug_template` (CodePen IDs)
- Download dist URLs

Shared across all brands: `current_version`, `docs_version`, `baseURL`, `repo`, `bootstrap_current_version`, `icons`, all JS CDN URLs, `anchors`, `toc` settings.

### Static asset handling

The `oudsWeb()` integration handles brand-specific static assets at build time:

1. Cleans `public/` directory
2. Copies TarteAuCitron from `node_modules` to `public/{brand}/docs/{version}/assets/js/`
3. Copies OUDS Web dist (JS from root `dist/`, CSS from `packages/{brand}/dist/`) to `public/{brand}/docs/{version}/dist/`
4. Copies static assets from `site/static/{brand}/` to `public/{brand}/`, replacing `[version]` in directory names
5. Aliases specific files (e.g., favicons to root paths)

---

## Storybook

### Overview

Stories are **NOT written by hand**. They are **automatically generated** from the documentation site using Puppeteer.

### Configuration (`.storybook/`)

| File                | Purpose                                                                                               |
| ------------------- | ----------------------------------------------------------------------------------------------------- |
| `main.js`           | Framework: `@storybook/html-vite`. Addons: `@storybook/addon-a11y`, `addon-themes`, `addon-docs`.     |
| `preview.js`        | Theme decorator: toggles `data-bs-theme="light"/"dark"`. Auto-docs enabled. Imports `storybook.scss`. |
| `manager.js`        | Applies `OrangeTheme` from `ods-storybook-theme` to the Storybook UI.                                 |
| `preview-head.html` | Loads Orange brand CSS and docs CSS from CDN. Loads `ouds-web.bundle.min.js` with defer.              |
| `storybook.scss`    | Overrides PrismJS code block colors.                                                                  |
| `vite.config.js`    | Empty placeholder for Vite customizations.                                                            |

Storybook stories render with the **real compiled CSS and JS** from CDN, not from local source.

### Story generation pipeline

**Script**: `stories/create-stories-from-doc.js`

Pipeline:

1. Reads all MDX files from `site/src/content/docs/components/`
2. Launches **Puppeteer** (headless Chrome)
3. Navigates to the **built documentation site** (`_site/docs/components/<component>/index.html`)
4. Extracts all `.bd-example` elements (the live examples)
5. Generates `.stories.js` files with the extracted HTML
6. Outputs to `stories/auto/<ComponentName>/<ComponentName>.stories.js`

Each generated story:

```javascript
export default {
  title: "Components/<ComponentName>",
  parameters: { docs: { toc: true } },
};
export const ComponentName_0 = () =>
  `<div class="bd-example m-none border-none">...HTML...</div>`;
```

The `stories/auto/` directory is git-ignored.

### Full Storybook build pipeline

```
npm run storybook-generate
├── npm run docs-build    (full docs site build)
└── node stories/create-stories-from-doc.js  (Puppeteer extraction)
```

Then either:

- `storybook dev -p 6006` (development)
- `storybook build -o ./_site/storybook` (static build)

---

## CI/CD pipeline

### GitHub Actions workflows

17 workflow files in `.github/workflows/`, grouped by category.

#### Build and test workflows

| Workflow           | Trigger                                | What it does                                                                                                             |
| ------------------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `css.yml`          | Push to `ouds/main` (scss paths), PR   | npm ci -> CSS build -> CSS tests -> check for leaked stylelint comments                                                  |
| `js.yml`           | Push to `ouds/main` (js paths), PR     | npm ci -> JS build -> Karma/Jasmine tests -> Coveralls upload                                                            |
| `docs.yml`         | Push to `ouds/main` (js/scss/site), PR | npm ci -> docs build -> VNU HTML validation -> Prettier check -> link check (Linkinator)                                 |
| `pa11y.yml`        | Push to `ouds/main` (js/scss/site), PR | npm ci -> dist -> SRI -> docs build -> Pa11y-CI accessibility tests (WCAG2AA). Uploads `.pa11y/` as artifact on failure. |
| `browserstack.yml` | `workflow_dispatch` only               | npm ci -> dist -> Karma on BrowserStack (10 browser configs, currently deactivated for push)                             |
| `bundlewatch.yml`  | Push to `ouds/main` (js/scss), PR      | npm ci -> Orange CSS + JS build -> bundlewatch size check                                                                |

All build/test workflows:

- Skip `dependabot[bot]` PRs (unless `workflow_dispatch`)
- Use Node.js 22 on `ubuntu-latest`
- Set `FORCE_COLOR: 2` for colored output
- Use `actions/checkout@v5.0.0` with `persist-credentials: false`

#### Linting and quality workflows

| Workflow                       | Trigger                           | What it does                                               |
| ------------------------------ | --------------------------------- | ---------------------------------------------------------- |
| `lint.yml`                     | Push to `ouds/main` (js/scss), PR | ESLint + Stylelint + lockfile-lint in parallel             |
| `cspell.yml`                   | Push to `ouds/main`, PR           | Spell check on `**/*.{md\|mdx}` via cspell-action          |
| `calibreapp-image-actions.yml` | PR with image changes             | JPEG/PNG/WebP compression at 75% quality, posts PR comment |

#### Project management workflows

| Workflow                             | Trigger                   | What it does                                                                    |
| ------------------------------------ | ------------------------- | ------------------------------------------------------------------------------- |
| `issue-labeled.yml`                  | Issue labeled             | Auto-comments requesting reduced test case when `needs-example` label added     |
| `issue-close-require.yml`            | Daily cron (midnight UTC) | Closes `awaiting-reply` issues inactive for 14 days                             |
| `update-pr-ready-review.yml`         | PR opened/ready           | Moves PR card to "Need Dev Review" column on GitHub Projects V2                 |
| `update-pr-review-in-progress.yml`   | PR review submitted       | Moves to "Dev Review in Progress" on changes_requested                          |
| `update-pr-approved.yml`             | PR review approved        | Moves to design/a11y review or lead dev review column based on labels           |
| `update-pr-design-a11y-approved.yml` | PR labeled/unlabeled      | Moves to "Need Lead Dev Review" after design/a11y approval                      |
| `update-pr-desc-links.yml`           | PR opened                 | Replaces `{your_pr_number}` placeholder with actual PR number in PR description |

#### Publishing workflows

| Workflow            | Trigger                  | What it does                                                                          |
| ------------------- | ------------------------ | ------------------------------------------------------------------------------------- |
| `publish-nuget.yml` | GitHub Release published | Packs and pushes 8 NuGet packages (common, common.sass, + 3 brands x compiled + sass) |

### PR review pipeline (automated via GitHub Projects V2)

```
PR Opened/Ready -> Need Dev Review -> Dev Review in Progress (if changes requested)
                                   -> Need Design/A11y Review (if labeled)
                                   -> Need Lead Dev Review (final gate)
```

Labels tracked: `upcoming design review`, `ready for design review`, `passed design review`, `upcoming a11y review`, `ready for a11y review`, `passed a11y review`.

### Checks that must pass for a PR

1. **Lint** — ESLint + Stylelint + lockfile-lint
2. **CSS** — CSS build + SCSS tests + stylelint comment check
3. **JS Tests** — JS build + Karma/Jasmine tests + Coveralls
4. **Docs** — Full docs build + HTML validation + Prettier + link check
5. **Pa11y** — Full build + accessibility tests (WCAG2AA)
6. **Bundlewatch** — Bundle size regression check
7. **cspell** — Spell check on documentation
8. **Compress Images** — Only if image files changed

### Secrets and repository variables

**Secrets**:

| Secret                               | Used by                                              |
| ------------------------------------ | ---------------------------------------------------- |
| `GITHUB_TOKEN`                       | Coveralls, image compression, issue management       |
| `BUNDLEWATCH_GITHUB_TOKEN`           | Bundlewatch PR comments                              |
| `BROWSER_STACK_ACCESS_KEY`           | BrowserStack cross-browser tests                     |
| `BROWSER_STACK_USERNAME`             | BrowserStack cross-browser tests                     |
| `BOOSTED_MOD_PERSONAL_TOKEN_CLASSIC` | All project board automation, PR description updates |
| `NUGET_TOKEN`                        | NuGet package publishing                             |

**Repository variables**:

| Variable                                    | Used by                                      |
| ------------------------------------------- | -------------------------------------------- |
| `PR_BOARD_PROJECT_NUMBER`                   | All project board workflows                  |
| `PR_BOARD_NEED_DEV_REVIEW_COL_NAME`         | PR ready review workflow                     |
| `PR_BOARD_DEV_REVIEW_IN_PROGRESS_COL_NAME`  | PR review in progress workflow               |
| `PR_BOARD_NEED_DESIGN_A11Y_REVIEW_COL_NAME` | PR approved workflow                         |
| `PR_BOARD_NEED_LEAD_DEV_REVIEW_COL_NAME`    | PR approved + design/a11y approved workflows |
| `LEAD_DEV_GH_USERNAME`                      | PR review in progress workflow               |
| `A11Y_REVIEWER_GH_USERNAME`                 | PR review in progress workflow               |

### Dependabot configuration

Two ecosystems monitored weekly on Fridays:

- **GitHub Actions**: Auto-updated.
- **npm**: Labels `dependencies` + `v5`. Storybook deps grouped into single PR. **~70+ Bootstrap-inherited deps are ignored** (managed by Bootstrap team). Only Storybook-related deps and a few others get auto-updated.

---

## Testing infrastructure

### JavaScript unit tests (Karma + Jasmine)

**Config**: `js/tests/karma.conf.js`

#### Setup

- **Framework**: Jasmine
- **Preprocessor**: Rollup with `rollup-plugin-istanbul` (code coverage), `@rollup/plugin-babel`, `@rollup/plugin-node-resolve`
- **Output format**: IIFE, named `bootstrapTest`

#### Browser modes

| Mode          | Browser                                       | When                     |
| ------------- | --------------------------------------------- | ------------------------ |
| Default local | ChromeHeadless (CI), or auto-detected (local) | `npm run js-test-karma`  |
| Debug         | Headed browser, auto-watch                    | `npm run js-debug`       |
| BrowserStack  | 10 browser configs (see below)                | `npm run js-test-cloud`  |
| jQuery        | ChromeHeadless, only `jquery.spec.js`         | `npm run js-test-jquery` |

#### Coverage thresholds

```
statements: 90%, branches: 89%, functions: 90%, lines: 90%
```

Emits errors (not warnings) when thresholds are not met. Output: `js/coverage/lcov.info`.

#### BrowserStack browser matrix

10 configurations defined in `js/tests/browsers.js`:

| Config               | OS            | Browser              |
| -------------------- | ------------- | -------------------- |
| `safariMac`          | OS X Monterey | Safari latest        |
| `chromeMac`          | OS X Monterey | Chrome latest        |
| `firefoxMac`         | OS X Monterey | Firefox latest       |
| `chromeWin10`        | Windows 10    | Chrome 120           |
| `firefoxWin10`       | Windows 10    | Firefox 121          |
| `EsrWin10`           | Windows 10    | Firefox ESR 128      |
| `chromeWin10Latest`  | Windows 10    | Chrome latest        |
| `firefoxWin10Latest` | Windows 10    | Firefox latest       |
| `iphone12`           | iOS 14.0      | Safari (real device) |
| `pixel6`             | Android 12.0  | Chrome (real device) |

### Test structure

```
js/tests/
├── karma.conf.js              # Karma configuration
├── browsers.js                # BrowserStack browser definitions
├── helpers/
│   └── fixture.js             # getFixture(), clearFixture(), createEvent(), jQueryMock
├── unit/                      # 28 unit test files
│   ├── alert.spec.js          # 15 component tests
│   ├── base-component.spec.js
│   ├── button.spec.js
│   ├── ...
│   ├── jquery.spec.js         # jQuery compatibility test
│   ├── dom/                   # 4 DOM helper tests
│   │   ├── data.spec.js
│   │   ├── event-handler.spec.js
│   │   ├── manipulator.spec.js
│   │   └── selector-engine.spec.js
│   └── util/                  # 9 utility tests
│       ├── backdrop.spec.js
│       ├── focustrap.spec.js
│       └── ...
├── integration/               # 2 bundle integrity tests (Rollup-based)
│   ├── bundle.js              # Tests ESM bundle import
│   └── bundle-modularity.js   # Tests individual plugin imports
└── visual/                    # 12 standalone HTML files for manual visual testing
```

### Test pattern

Tests follow a consistent Jasmine pattern:

```javascript
import Component from "../../src/<component>.js";
import { clearFixture, getFixture, jQueryMock } from "../helpers/fixture.js";

describe("<Component>", () => {
  let fixtureEl;
  beforeAll(() => {
    fixtureEl = getFixture();
  });
  afterEach(() => {
    clearFixture();
  });

  // Test categories:
  // 1. CSS selector vs DOM element initialization
  // 2. VERSION static property
  // 3. DATA_KEY static property
  // 4. data-api (declarative HTML behavior)
  // 5. Core methods (close, toggle, show, hide, etc.)
  // 6. dispose
  // 7. jQueryInterface
  // 8. getInstance / getOrCreateInstance

  // Async tests use Promise pattern:
  it("should do something async", () => {
    return new Promise((resolve) => {
      element.addEventListener("event.bs.component", () => {
        expect(something).toBeTruthy();
        resolve();
      });
      component.method();
    });
  });
});
```

### Accessibility testing (Pa11y-CI)

**Config**: `build/.pa11yci.json`

| Setting                | Value                                                |
| ---------------------- | ---------------------------------------------------- |
| Standard               | WCAG2AA                                              |
| Level                  | error                                                |
| Runner                 | `axe` (axe-core)                                     |
| Globally ignored rules | `color-contrast`                                     |
| Chrome args            | `--no-sandbox`                                       |
| Reporters              | CLI + `pa11y-ci-reporter-html` (output to `.pa11y/`) |

Hidden elements (excluded from testing): iframes, offcanvas elements, sidebar, overflow containers, disabled star rating fieldsets, accordion collapse panels, text-decoration examples.

**How it runs**: Pa11y-CI crawls the sitemap XML of the built documentation site, testing every page for WCAG2AA violations.

### HTML validation (VNU)

**Script**: `build/vnu-jar.mjs`

- Uses the `vnu-jar` npm package (W3C HTML validator, Java-based). Requires Java.
- Validates: `_site/` (built docs) and `js/tests/` (visual test HTML files).
- Mode: `--Werror` (treats warnings as errors).
- 9 ignored validation patterns for known acceptable deviations (Astro conventions, WAI-ARIA recommendations, Firefox bugs).

### Visual testing

**No automated visual regression testing.** The `js/tests/visual/` directory contains 12 standalone HTML files for manual visual testing only. No Percy, Chromatic, BackstopJS, or similar tool is configured.

### Bundle size monitoring

**Config**: `.bundlewatch.config.json`

Tracks 16 files (Orange brand CSS + all JS) with maximum size limits:

| File                         | Max size |
| ---------------------------- | -------- |
| `ouds-web.css`               | 65.5 kB  |
| `ouds-web.min.css`           | 61.75 kB |
| `ouds-web-bootstrap.css`     | 75.75 kB |
| `ouds-web-bootstrap.min.css` | 72.25 kB |
| `ouds-web-grid.css`          | 9.5 kB   |
| `ouds-web-grid.min.css`      | 8.5 kB   |
| `ouds-web-reboot.css`        | 7.5 kB   |
| `ouds-web-reboot.min.css`    | 7 kB     |
| `ouds-web-utilities.css`     | 24.0 kB  |
| `ouds-web-utilities.min.css` | 23.25 kB |
| `ouds-web.bundle.js`         | 48.5 kB  |
| `ouds-web.bundle.min.js`     | 25.5 kB  |
| `ouds-web.esm.js`            | 33.25 kB |
| `ouds-web.esm.min.js`        | 20.5 kB  |
| `ouds-web.js`                | 34.0 kB  |
| `ouds-web.min.js`            | 18.25 kB |

Tracked branch: `ouds/main`.

---

## Linter configurations

### Stylelint

**File**: `.stylelintrc.json`

Extends `stylelint-config-twbs-bootstrap`.

**Key rules** (SCSS files):

| Rule                                         | Enforced value                                                       |
| -------------------------------------------- | -------------------------------------------------------------------- |
| `declaration-property-value-disallowed-list` | `border: none`, `outline: none`                                      |
| `function-disallowed-list`                   | `lighten`, `darken`                                                  |
| `property-disallowed-list`                   | `border-radius`, `border-*-*-radius`, `transition` (must use mixins) |
| `scss/dollar-variable-default`               | `true` (except local scope)                                          |
| `scss/selector-no-union-class-name`          | `true`                                                               |

**Overrides**:

- SCSS test files: `$-variable-default` and `!important` rules relaxed.
- `site/**/*.scss`: `$-variable-default` rule relaxed.
- Example CSS: Allows vendor prefixes and qualifying selectors.

### ESLint

**File**: `.eslintrc.json`

Extends `plugin:import/errors`, `plugin:import/warnings`, `plugin:unicorn/recommended`, `xo`, `xo/browser`, `plugin:storybook/recommended`.

**Key rules**:

| Rule                   | Setting                                   |
| ---------------------- | ----------------------------------------- |
| `semi`                 | `["error", "never"]` — No semicolons      |
| `indent`               | `["error", 2]` — 2-space indentation      |
| `comma-dangle`         | `["error", "never"]` — No trailing commas |
| `no-console`           | `error`                                   |
| `prefer-template`      | `error` — Template literals required      |
| `strict`               | `error` — Strict mode required            |
| `import/extensions`    | `.js` extensions always required          |
| `import/no-cycle`      | `error`                                   |
| `object-curly-spacing` | `always`                                  |

**Overrides** (10 blocks):

| Files              | Notable settings                                      |
| ------------------ | ----------------------------------------------------- |
| `build/**`         | Node env, `no-console: off`, sourceType: module       |
| `js/**`            | Browser env, sourceType: module                       |
| `js/tests/unit/**` | Jasmine env, `no-console: off`, relaxed unicorn rules |
| `site/**`          | Browser env, `no-new: off`, ecmaVersion 2019          |
| `**/*.md`          | Markdown plugin processor                             |

### Browser support

**File**: `.browserslistrc`

```
>= 0.5%, last 2 major versions, not dead
Chrome >= 120, Edge >= 120, Firefox >= 121, Firefox ESR
iOS >= 15.6, Safari >= 15.6
not Explorer <= 11, Samsung >= 23, not kaios <= 2.5
```

---

## Release process

### SRI hash generation

**Script**: `build/generate-sri.mjs`

Generates SHA-384 SRI hashes for all distributable files and writes them into each brand's `config.yml`:

| File hashed                                                | Config property          |
| ---------------------------------------------------------- | ------------------------ |
| `packages/<brand>/dist/css/ouds-web.min.css`               | `css_hash`               |
| `packages/<brand>/dist/css/ouds-web.rtl.min.css`           | `css_rtl_hash`           |
| `packages/<brand>/dist/css/ouds-web-bootstrap.min.css`     | `css_bootstrap_hash`     |
| `packages/<brand>/dist/css/ouds-web-bootstrap.rtl.min.css` | `css_bootstrap_rtl_hash` |
| `dist/js/ouds-web.min.js`                                  | `js_hash`                |
| `dist/js/ouds-web.bundle.min.js`                           | `js_bundle_hash`         |
| `node_modules/@popperjs/core/dist/umd/popper.min.js`       | `popper_hash`            |

### Example archive creation

**Script**: `build/zip-examples.mjs`

Per brand, creates `ouds-web-<brand>-<version>-examples.zip` containing:

- Example HTML files (with rewritten paths, stripped integrity attributes, Prettier-formatted)
- `assets/brand/<brand>-logo.svg`
- `assets/dist/css/` (brand CSS)
- `assets/dist/js/` (common JS)
- `assets/js/color-modes.js`

### Documentation deployment

**Script**: `build/docs-prep.sh`

Prepares docs for deployment to the separate `ouds-web-doc` repository:

1. Builds Storybook
2. Switches to `../ouds-web-doc` repo, resets to `origin/main`
3. Creates new branch, copies `_site/` output
4. Only replaces the current version's directory in `docs/`

Published at: `https://web.unified-design-system.orange.com/`

### npm publishing

Manual process (per release checklist):

1. `npm pack` each package
2. `npm publish` (use `--tag next` for pre-releases)

### NuGet publishing

Automated via `publish-nuget.yml` on GitHub Release publication. Publishes 8 packages:

- `ouds-web-common` + `ouds-web-common.sass`
- `ouds-web-orange` + `ouds-web-orange.sass`
- `ouds-web-sosh` + `ouds-web-sosh.sass`
- `ouds-web-orange-compact` + `ouds-web-orange-compact.sass`

### Netlify deployment

Deploy previews for PRs:

- URL pattern: `https://deploy-preview-{PR_NUMBER}--boosted.netlify.app/`
- The `update-pr-desc-links.yml` workflow auto-replaces `{your_pr_number}` in PR descriptions.
- The `netlify` npm script runs `npm run storybook-build`.

---

## Root configuration files

| File                       | Purpose                                                                         |
| -------------------------- | ------------------------------------------------------------------------------- |
| `.editorconfig`            | UTF-8, LF line endings, 2-space indent, final newline, trim trailing whitespace |
| `.browserslistrc`          | Browser support targets for Autoprefixer and Babel                              |
| `.babelrc.js`              | Babel preset-env with `loose: true`, `bugfixes: true`, `modules: false`         |
| `.stylelintrc.json`        | Stylelint config extending `stylelint-config-twbs-bootstrap`                    |
| `.eslintrc.json`           | ESLint config extending `xo`, `xo/browser`, `plugin:unicorn/recommended`        |
| `.bundlewatch.config.json` | Bundle size limits for 16 output files                                          |
| `.cspell.json`             | cspell spell-checking config for documentation files                            |
| `site/.prettierrc.json`    | Prettier config (no semi, single quotes, 120 print width, no trailing commas)   |
| `.gitignore`               | Ignores `_site/`, `js/coverage/`, `.pa11y/`, `stories/auto/`, storybook logs    |

---

_This file provides detailed architecture context for AI agents and LLMs working on the OUDS Web codebase. Keep it up to date when build pipeline, CI/CD, docs site structure, or tooling changes._
