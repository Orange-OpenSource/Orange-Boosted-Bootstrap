---
name: ouds-knowledge-base
description: >
  Reference knowledge base for OUDS Web: full glossary of 154 project terms,
  architecture and build pipeline overview, CI/CD commands, release process,
  and project context. Use this skill when encountering unfamiliar terms or
  needing context about the project's infrastructure.
---

# Skill: OUDS Web Knowledge Base

## Purpose

Domain reference for OUDS Web. Covers the full glossary, build pipeline, npm scripts, CI/CD structure, and release process.

---

## Project Context

**OUDS Web** (Orange Unified Design System – Web) is the web implementation of Orange's unified design system. It is a fork of Bootstrap 5.3.6, adapted for multi-brand theming with a token-driven architecture.

| Key info | Value |
|---|---|
| Version | 1.1.0 |
| Upstream | Bootstrap 5.3.6 |
| Main branch | `ouds/main` |
| License | MIT (code) / CC BY 3.0 (docs) |
| Docs | https://web.unified-design-system.orange.com/ |
| Repo | https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap |

**Brands**: Orange, Sosh, Orange Compact  
**JS components**: 15 (Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, OrangeNavbar, Popover, QuantitySelector, Scrollspy, Tab, Toast, Tooltip + Popper)  
**SCSS components**: ~40 (root) + 11 (forms)  
**Token layers**: raw → semantic → composite → component → CSS custom properties  

---

## Glossary (154 Terms)

### Project & Architecture

| Term | Definition |
|---|---|
| **OUDS** | Orange Unified Design System — The design system for Orange Group's digital products |
| **OUDS Web** | Web implementation of OUDS, built as a Bootstrap fork |
| **Boosted** | Legacy name (Orange Boosted Bootstrap) — replaced by OUDS Web in v1.0 |
| **Monorepo** | Single repository containing multiple packages (`@ouds/web-common`, etc.) |
| **npm workspaces** | npm feature for managing multiple packages in one repo |
| **Brand** | Visual identity variant (Orange, Sosh, Orange Compact) |
| **`@ouds/web-common`** | Root package — shared SCSS + JS (no CSS output) |
| **`@ouds/web-orange`** | Orange brand package — compiled CSS |
| **`@ouds/web-sosh`** | Sosh brand package — compiled CSS |
| **`@ouds/web-orange-compact`** | Orange Compact brand package — compiled CSS |

### Design Tokens

| Term | Definition |
|---|---|
| **Design Token** | Named variable representing a design decision (color, spacing, font, etc.) |
| **DTCG** | Design Token Community Group — W3C standard format for design tokens |
| **Style Dictionary** | Token transformation tool; converts DTCG JSON to SCSS, CSS, etc. |
| **Raw tokens** | Primitive values (`$core-ouds-*`) — never used directly in components |
| **Semantic tokens** | Meaningful aliases (`$ouds-border-radius-default`) — design intent |
| **Composite tokens** | Complex combined values (elevation, font-stacks, icons) — `_composite.scss` |
| **Component tokens** | Per-component tokens (`$ouds-button-border-radius-default`) |
| **CSS custom properties** | Runtime CSS variables (`--bs-color-*`) — enable dark mode and theming |
| **Token layer** | Hierarchical level: Raw → Semantic → Composite → Component |
| **Base multiplier** | Pattern: base unit × multiplier (e.g., `$core-ouds-border-base * 2`) |

### Tech Stack

| Term | Definition |
|---|---|
| **SCSS** | Sassy CSS — CSS preprocessor with variables, mixins, functions, nesting |
| **Sass** | The compiler (v1.78.0 — pinned, do not update) |
| **PostCSS** | CSS post-processor (autoprefixer + rtlcss) |
| **Autoprefixer** | PostCSS plugin adding vendor prefixes |
| **rtlcss** | PostCSS plugin converting LTR CSS to RTL |
| **Rollup** | JavaScript bundler (ES module, UMD, bundled variants) |
| **ESM** | ECMAScript Modules — `import`/`export` syntax |
| **UMD** | Universal Module Definition — works in browsers, Node, AMD, CommonJS |
| **Terser** | JavaScript minifier — creates `.min.js` |
| **Astro** | Static site generator for multi-brand documentation site |
| **MDX** | Markdown + JSX — documentation format |
| **Storybook** | Component development environment; visual testing |

### Testing & Quality

| Term | Definition |
|---|---|
| **ESLint** | JavaScript linter (extends `xo`, `unicorn` plugins) |
| **Stylelint** | SCSS/CSS linter (extends `stylelint-config-twbs-bootstrap`) |
| **Karma** | JavaScript test runner in real browsers |
| **Jasmine** | JavaScript testing framework (`describe`, `it`, `expect`) |
| **Pa11y-CI** | Accessibility testing tool with axe-core |
| **VNU** | Nu Html Checker — HTML5 markup validation |
| **axe-core** | Accessibility rules engine used by Pa11y-CI and Storybook |
| **WCAG** | Web Content Accessibility Guidelines — W3C standard (target: 2.1 Level AA) |
| **a11y** | Numeronym for "accessibility" (a + 11 letters + y) |
| **SR** | Screen Reader |

### Accessibility Concepts

| Term | Definition |
|---|---|
| **ARIA** | Accessible Rich Internet Applications — spec for dynamic accessible content |
| **WAI-ARIA** | Web Accessibility Initiative - ARIA — full ARIA spec name |
| **WCAG 2.1 Level AA** | Target compliance: 4.5:1 contrast, keyboard access, ARIA, etc. |
| **Focus ring** | Visual indicator around focused element; OUDS uses dual-ring (outline + box-shadow) |
| **Focus trap** | Constraining Tab key within modal/dialog |
| **Visually hidden** | Hidden visually but announced by screen readers (`.visually-hidden`) |
| **Color contrast ratio** | Luminance difference between foreground/background; 4.5:1 minimum |
| **Touch target size** | Minimum interactive element size: 44×44px per WCAG 2.5.8 |
| **Reduced motion** | User preference to minimize animations (`prefers-reduced-motion`) |

### Bootstrap Concepts

| Term | Definition |
|---|---|
| **Bootstrap** | Popular CSS framework; OUDS Web is a fork of Bootstrap 5.3.6 |
| **BaseComponent** | Abstract JS class all interactive components extend |
| **Data attributes** | HTML attributes: `data-bs-*` — configure JS component behavior |
| **Utility classes** | Single-purpose CSS classes (`.d-flex`, `.mt-3`, etc.) |
| **Breakpoint** | Responsive width threshold: xs, sm, md, lg, xl, xxl, 3xl |
| **Grid system** | 12-column responsive layout using flexbox |
| **Color mode** | Light/dark theme variant; toggled via `data-bs-theme` attribute |
| **Reboot** | CSS reset/normalize for consistent baseline styles |

### File Naming & Patterns

| Term | Definition |
|---|---|
| **Partial** | SCSS file prefixed with `_` (e.g., `_buttons.scss`); imported |
| **Mixin** | Reusable SCSS code block; invoked with `@include` |
| **Function** | SCSS function returning a value |
| **Helper** | Utility class (`.visually-hidden`, `.clearfix`, etc.) |
| **`.spec.js`** | Unit test file (Jasmine) |
| **`.stories.js`** | Storybook story file |
| **`.mdx`** | Markdown + JSX — documentation file format |

### Development Workflow

| Term | Definition |
|---|---|
| **LTR** | Left-To-Right — default text direction |
| **RTL** | Right-To-Left — for Arabic, Hebrew, etc.; handled by rtlcss |
| **CI/CD** | Continuous Integration / Continuous Deployment |
| **PR** | Pull Request |
| **SRI** | Subresource Integrity — cryptographic hash for CDN resources |
| **CDN** | Content Delivery Network |
| **Sourcemap** | Maps minified code back to source |
| **Tree shaking** | Build optimization removing unused code |

### Special Prefixes & Conventions

| Prefix | Meaning | Example |
|---|---|---|
| `$prefix` | SCSS variable for CSS custom property prefix | `--#{$prefix}color-*` → `--bs-color-*` |
| `bs-` | CSS class/custom property prefix | `--bs-primary`, `.bs-accordion` |
| `ouds-` | Semantic/component token prefix | `$ouds-border-radius-default` |
| `core-ouds-` | Raw token prefix (OUDS Core — shared) | `$core-ouds-dimension-100` |
| `core-orange-` | Raw token prefix (Orange brand) | `$core-orange-color-orange-550` |
| `core-sosh-` | Raw token prefix (Sosh brand) | `$core-sosh-color-magenta-500` |
| `data-bs-` | Data attribute prefix for JS | `data-bs-toggle="modal"` |
| `aria-` | ARIA attribute prefix | `aria-label`, `aria-expanded` |
| `// OUDS mod:` | Comment marking deviation from Bootstrap upstream | |

---

## Build Pipeline — Quick Reference

### Key commands

```bash
npm run dist          # Build all CSS (3 brands) + JS
npm run start         # Start all 3 brand dev servers
npm run lint          # Run all linters (ESLint + Stylelint)
npm run js-test       # Run all JS unit tests (Karma + Jasmine)
npm run test          # Full test suite (lint + dist + tests + docs)
npm run docs-build    # Build full documentation site (all 3 brands)
npm run docs-accessibility  # Run Pa11y-CI accessibility tests
npm run docs-vnu      # Run VNU HTML validation
npm run storybook     # Start Storybook dev server on port 6006
npm run clean         # Clean build artifacts
```

### CSS build process (per brand)

```
scss/  →  Sass (1.78)  →  PostCSS autoprefixer  →  rtlcss (*.rtl.css)  →  clean-css (*.min.css)
```

Output in `packages/<brand>/dist/css/`:
- `ouds-web.css` — full LTR CSS
- `ouds-web.rtl.css` — full RTL CSS
- `ouds-web.min.css` — minified LTR
- `ouds-web.min.css.map` — source map

### JS build process

```
js/src/  →  Rollup  →  4 variants:
  ouds-web.js          (UMD, no Popper)
  ouds-web.esm.js      (ESM, no Popper)
  ouds-web.bundle.js   (UMD, Popper bundled)
  js/dist/*.js         (individual UMD plugins)
→  Terser  →  *.min.js + *.min.js.map
```

Output in `dist/js/` (root) and `js/dist/` (individual plugins).

### CI/CD jobs (GitHub Actions)

| Job | Trigger | What it checks |
|---|---|---|
| `lint.yml` | Every push | ESLint + Stylelint + lockfile-lint |
| `css.yml` | Every push | CSS build succeeds; no `/* stylelint */` in dist |
| `js.yml` | Every push | JS unit tests (Karma + jQuery compat) |
| `pa11y.yml` | PRs to main | Pa11y-CI accessibility checks |
| `vnu.yml` | PRs to main | VNU HTML validation |
| `bundlewatch.yml` | PRs | Bundle size limit checks |

### Do not commit

- `dist/**` — compiled JS (root)
- `packages/*/dist/css/**` — compiled CSS per brand
- `js/dist/**` — individual compiled JS plugins
- `node_modules/`
- `_site/` — built documentation

---

## File Structure Quick Map

```
Orange-Boosted-Bootstrap/
├── scss/                     # Shared SCSS (all brands consume this)
│   ├── _variables.scss       # Bootstrap ↔ OUDS token bridge (~2200 lines)
│   ├── _config.scss          # $prefix, $color-mode-type, $ouds-root-selector
│   ├── mixins/               # 28 mixin partials
│   └── _<component>.scss     # ~40 component partials
├── js/src/                   # JS source (all brands)
├── packages/
│   ├── orange/               # @ouds/web-orange — brand tokens + compiled CSS
│   ├── sosh/                 # @ouds/web-sosh
│   └── orange-compact/       # @ouds/web-orange-compact
├── site/                     # Astro docs (MDX, components, layouts)
├── build/                    # Build scripts (Rollup, PostCSS, SRI, VNU...)
├── .packmind/                # Agent standards, commands, and skills (this file system)
│   ├── standards/            # Code enforcement standards
│   ├── commands/             # Step-by-step workflow commands
│   └── skills/               # Domain knowledge skills
└── .github/copilot-instructions.md  # Copilot agent configuration
```
