# Project Map & Build Reference

## File Structure

```
Orange-Boosted-Bootstrap/
├── scss/                          # Shared SCSS (all brands consume this)
│   ├── _variables.scss            # Bootstrap ↔ OUDS token bridge (~2200 lines)
│   ├── _variables-dark.scss       # Dark mode variable overrides
│   ├── _config.scss               # $prefix, $color-mode-type, $ouds-root-selector
│   ├── _functions.scss            # Sass functions
│   ├── _maps.scss                 # Sass maps
│   ├── mixins/                    # 28 mixin partials
│   ├── _<component>.scss          # ~40 component partials
│   └── forms/                     # 11 form component partials
├── js/
│   ├── src/                       # JS source (shared across all brands)
│   │   ├── base-component.js      # Abstract base class
│   │   ├── <component>.js         # 15 component files
│   │   ├── dom/                   # DOM utilities (event-handler, manipulator, etc.)
│   │   └── util/                  # Utilities (focustrap, scrollbar, etc.)
│   ├── tests/unit/                # Jasmine unit tests
│   ├── index.esm.js               # ESM entry point
│   └── index.umd.js               # UMD entry point
├── packages/
│   ├── orange/                    # @ouds/web-orange
│   │   ├── scss/tokens/           # Brand tokens (raw, semantic, composite, component)
│   │   ├── scss/ouds-web.scss     # Brand entry point
│   │   └── dist/css/             # Compiled CSS (not committed)
│   ├── sosh/                      # @ouds/web-sosh (same structure)
│   └── orange-compact/            # @ouds/web-orange-compact (same structure)
├── site/                          # Astro documentation site
│   └── src/content/docs/          # MDX documentation pages
├── build/                         # Build scripts (Rollup, PostCSS, SRI, VNU)
├── .github/
│   ├── copilot-instructions.md    # Agent entry point (always loaded)
│   └── instructions/              # Scoped instructions + workflows + references
└── dist/js/                       # Compiled JS (not committed)
```

---

## npm Scripts

### Primary commands

| Command | Purpose | Duration |
|---|---|---|
| `npm run dist` | Build all CSS (3 brands) + JS | ~30s |
| `npm run lint` | ESLint + Stylelint | ~15s |
| `npm run js-test` | Karma + Jasmine unit tests | ~20s |
| `npm run test` | Full suite (lint + dist + tests + docs) | ~2min |
| `npm run start` | Start 3 brand dev servers (9001/9002/9003) | ongoing |
| `npm run clean` | Remove build artifacts | instant |

### Documentation

| Command | Purpose |
|---|---|
| `npm run docs-build` | Build full Astro documentation site |
| `npm run docs-accessibility` | Pa11y-CI accessibility checks (needs running server) |
| `npm run docs-vnu` | VNU HTML validation |
| `npm run storybook` | Storybook on port 6006 |

### Individual builds

| Command | Purpose |
|---|---|
| `npm run css` | Build CSS only (all brands) |
| `npm run css-lint` | Stylelint only |
| `npm run js-lint` | ESLint only |
| `npm run js-compile` | Rollup JS bundle only |

---

## CSS Build Pipeline

```
scss/  →  Sass 1.78  →  PostCSS (autoprefixer)  →  rtlcss (*.rtl.css)  →  clean-css (*.min.css)
```

Output per brand in `packages/<brand>/dist/css/`:
- `ouds-web.css` — full LTR
- `ouds-web.rtl.css` — full RTL
- `ouds-web.min.css` — minified LTR + sourcemap

## JS Build Pipeline

```
js/src/  →  Rollup  →  4 variants:
  ouds-web.js         (UMD, no Popper)
  ouds-web.esm.js     (ESM, no Popper)
  ouds-web.bundle.js  (UMD, Popper bundled)
  js/dist/*.js        (individual UMD plugins)
→  Terser  →  *.min.js + *.min.js.map
```

---

## CI/CD (GitHub Actions)

| Workflow | Trigger | Checks |
|---|---|---|
| `lint.yml` | Every push | ESLint + Stylelint + lockfile-lint |
| `css.yml` | Every push | CSS build succeeds; no `/* stylelint */` in dist |
| `js.yml` | Every push | JS unit tests (Karma + jQuery compat) |
| `pa11y.yml` | PRs to main | Pa11y-CI accessibility |
| `vnu.yml` | PRs to main | VNU HTML validation |
| `bundlewatch.yml` | PRs | Bundle size limits |

---

## Key Configuration Files

| File | Purpose |
|---|---|
| `.stylelintrc.json` | Stylelint rules (extends twbs-bootstrap) |
| `.eslintrc.json` | ESLint rules (extends xo + unicorn) |
| `rollup.config.mjs` | JS bundling configuration |
| `package.json` | Workspaces, scripts, dependencies |
| `karma.conf.cjs` | Test runner config |
| `.browserslistrc` | Browser support targets |

---

## Do Not Commit

- `dist/**` — compiled JS
- `packages/*/dist/css/**` — compiled CSS
- `js/dist/**` — individual JS plugins
- `node_modules/`
- `_site/` — built documentation

---

## Project Metadata

| Key | Value |
|---|---|
| Version | 1.1.0 |
| Upstream | Bootstrap 5.3.6 |
| Main branch | `ouds/main` |
| License | MIT (code) / CC BY 3.0 (docs) |
| Docs URL | https://web.unified-design-system.orange.com/ |
| JS components | 15 (all extend BaseComponent) |
| SCSS components | ~40 + 11 forms |
| Sass version | 1.78.0 (pinned) |
