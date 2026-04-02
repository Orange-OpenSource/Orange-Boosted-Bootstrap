---
# YAML front-matter for AI agents — machine-readable metadata
project:
  name: OUDS Web
  type: design-system
  version: 1.1.0
  upstream: Bootstrap 5.3.6
  main_branch: ouds/main

tech_stack:
  languages: [SCSS, JavaScript, TypeScript, HTML, MDX]
  frameworks: [Bootstrap, Astro]
  build_tools: [npm, Rollup, PostCSS, Sass]
  testing: [Karma, Jasmine, Pa11y-CI, VNU, Stylelint, ESLint]

architecture:
  type: monorepo
  package_manager: npm_workspaces
  brands: [orange, sosh, orange-compact]
  shared_js: true
  brand_specific_css: true

constraints:
  auto_generated_files:
    - "packages/*/scss/tokens/_raw.scss"
    - "packages/*/scss/tokens/_semantic.scss"
    - "packages/*/scss/tokens/_component.scss"
    - "packages/*/scss/tokens/_*-custom-props.scss"
  never_commit: ["dist/**", "js/dist/**"]
  always_use_tokens: true
  accessibility_level: WCAG-2.1-AA
  min_contrast_ratio: 4.5
  css_prefix: bs-

quick_facts:
  total_components: ~53
  scss_components: ~40
  js_components: 15
  brands: 3
  token_layers: [raw, semantic, composite, component]
  supported_color_modes: [light, dark]
  rtl_support: true

documentation:
  main: AGENTS.md
  extended_dir: .ai/
  docs_site: https://web.unified-design-system.orange.com/
  repo: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap
---

# OUDS Web — AI Agent Context

> **OUDS Web** is a multi-brand design system for the web, built as a fork of Bootstrap 5.3.6.
> It ships accessible, token-driven UI components for Orange group brands (Orange, Sosh, Orange Compact).

| Key info    | Value                                                           |
| ----------- | --------------------------------------------------------------- |
| Version     | 1.1.0                                                           |
| Upstream    | Bootstrap 5.3.6                                                 |
| Main branch | `ouds/main`                                                     |
| License     | MIT (code) / CC BY 3.0 (docs)                                   |
| Docs        | <https://web.unified-design-system.orange.com/>                 |
| Repo        | <https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap> |

---

## Table of contents

1. [Architecture overview](#architecture-overview)
2. [Monorepo structure](#monorepo-structure)
3. [Design tokens system](#design-tokens-system)
4. [Multi-brand system](#multi-brand-system)
5. [Components catalog](#components-catalog)
6. [Code conventions](#code-conventions)
7. [Accessibility requirements](#accessibility-requirements)
8. [Quick-start examples](#quick-start-examples)
9. [Anti-patterns](#anti-patterns)
10. [AI agent workflow](#ai-agent-workflow)
11. [Decision trees](#decision-trees)
12. [Glossary](#glossary)
13. [Extended documentation](#extended-documentation)

---

## Architecture overview

OUDS Web is a **monorepo** with npm workspaces. It publishes:

- **`@ouds/web-common`** — Shared SCSS source files, JavaScript components (compiled to `dist/js/`). This is the root package.
- **`@ouds/web-orange`** — Orange brand tokens + compiled CSS (`dist/css/`).
- **`@ouds/web-sosh`** — Sosh brand tokens + compiled CSS.
- **`@ouds/web-orange-compact`** — Orange Compact brand tokens + compiled CSS.

**Key principle**: JavaScript is shared across all brands. Only CSS/tokens differ per brand.

```
Consumer installs:  @ouds/web-common (JS) + @ouds/web-<brand> (CSS)
```

### Tech stack

| Layer     | Technology                                                                      |
| --------- | ------------------------------------------------------------------------------- |
| Markup    | Semantic HTML5                                                                  |
| Styles    | SCSS → CSS (via `sass` 1.78) + PostCSS (autoprefixer, RTL via rtlcss)           |
| Scripts   | Vanilla JavaScript (ES modules), bundled with Rollup                            |
| Tokens    | SCSS variables + CSS custom properties                                          |
| Docs site | Astro 5.x with MDX content collections                                          |
| Testing   | Karma + Jasmine (JS), Pa11y-CI (a11y), VNU (HTML validation), Stylelint, ESLint |
| Storybook | `@storybook/html-vite` with a11y addon                                          |

> 💡 **Context queries for AI agents:**
>
> - To understand the build pipeline: See [`.ai/ARCHITECTURE.md`](.ai/ARCHITECTURE.md#build-pipeline)
> - To explore JS bundling: `grep_search("rollup.config", includePattern="build/*.mjs")`
> - To see all test configurations: `file_search("**/*{.spec,.test}.js")`

---

## Monorepo structure

```
Orange-Boosted-Bootstrap/
├── package.json              # Root: @ouds/web-common — shared JS + SCSS source
├── scss/                     # 🔵 Common SCSS (components, mixins, utilities, variables)
│   ├── _variables.scss       #    Bootstrap variables mapped to OUDS tokens
│   ├── _variables-dark.scss  #    Dark mode variable overrides
│   ├── _config.scss          #    $prefix: bs-, $color-mode-type, $ouds-root-selector
│   ├── _functions.scss       #    Sass functions
│   ├── _maps.scss            #    Sass maps
│   ├── _mixins.scss          #    Mixin index
│   ├── mixins/               #    28 mixin files (breakpoints, buttons, focus, grid…)
│   ├── forms/                #    11 form component partials
│   ├── helpers/              #    9 helper classes (visually-hidden, focus-ring, stacks…)
│   ├── utilities/            #    _api.scss — utility class generator
│   ├── _accordion.scss       #    Component partials (one file per component)
│   ├── _buttons.scss
│   ├── _modal.scss
│   └── …                     #    ~40 component SCSS partials
├── js/
│   ├── src/                  # 🔵 JavaScript source (ES modules)
│   │   ├── base-component.js #    Abstract base class for all components
│   │   ├── alert.js          #    15 component modules
│   │   ├── dom/              #    4 DOM helpers (event-handler, data, manipulator, selector-engine)
│   │   └── util/             #    9 utility modules (focustrap, backdrop, swipe, sanitizer…)
│   ├── dist/                 #    Compiled individual plugins
│   └── tests/                #    Unit and integration tests
├── dist/                     # 🔵 Compiled common JS output
│   └── js/                   #    ouds-web.js, .esm.js, .bundle.js (+ minified + sourcemaps)
├── packages/
│   ├── orange/               # 🟠 Orange brand package (@ouds/web-orange)
│   │   ├── package.json
│   │   ├── config.yml        #    Brand-specific site config (name, CDN URLs, Algolia…)
│   │   ├── scss/
│   │   │   ├── ouds-web.scss #    Main entry: imports common + Orange tokens
│   │   │   └── tokens/       #    _raw.scss, _semantic.scss, _composite.scss, _component.scss
│   │   │                     #    + _semantic-colors-custom-props.scss
│   │   │                     #    + _component-colors-custom-props.scss
│   │   │                     #    ⚠️ All auto-generated except _composite.scss
│   │   └── dist/css/         #    Compiled brand CSS (LTR, RTL, minified)
│   ├── sosh/                 # 🟣 Sosh brand package (@ouds/web-sosh)
│   │   └── (same structure as orange)
│   └── orange-compact/       # 🟠 Orange Compact brand package
│       └── (same structure as orange)
├── site/                     # 📖 Astro documentation site
│   ├── src/
│   │   ├── content/docs/     #    MDX doc pages organized by section
│   │   ├── components/       #    Astro components (shortcodes, partials, layouts)
│   │   ├── layouts/          #    BaseLayout, DocsLayout, ExamplesLayout…
│   │   ├── libs/             #    18 TypeScript utility modules
│   │   └── pages/            #    Brand-parameterized routes: /[brand]/docs/…
│   └── data/                 #    Shared data files
├── stories/                  # 📘 Storybook stories (auto-generated from docs)
├── build/                    # 🔧 Build scripts (Rollup, PostCSS, SRI, version, VNU…)
├── fonts/                    # Custom font files
└── .storybook/               # Storybook configuration
```

** You must not access to files outside of this repository **

### Important files to know

| File                                       | Purpose                                                       |
| ------------------------------------------ | ------------------------------------------------------------- |
| `scss/_config.scss`                        | CSS prefix (`bs-`), color-mode type, root selector            |
| `scss/_variables.scss`                     | All Bootstrap variables remapped to OUDS tokens (~2200 lines) |
| `packages/<brand>/scss/tokens/_index.scss` | Token import order for each brand                             |
| `packages/<brand>/scss/ouds-web.scss`      | Brand entry point — imports common + tokens                   |
| `packages/<brand>/config.yml`              | Brand metadata (name, CDN URLs, docs config)                  |
| `build/rollup.config.mjs`                  | JS build configuration                                        |
| `build/postcss.config.mjs`                 | CSS post-processing (autoprefixer)                            |

> 💡 **Context queries for AI agents:**
>
> - To see all SCSS component files: `file_search("scss/_*.scss")`
> - To find a specific component: `semantic_search("button component javascript")`
> - To understand package structure: `read_file("packages/orange/package.json")`
> - To see token import order: `read_file("packages/orange/scss/tokens/_index.scss")`

---

## Design tokens system

Tokens are the single source of truth for all visual properties. They follow a **3-tier hierarchy**.

### Token generation pipeline

⚠️ **Most token files are auto-generated. Do NOT edit them by hand.**

Tokens flow through this pipeline:

```
Figma (design)  →  DTCG export  →  Style Dictionary  →  SCSS files  →  PR on GitHub
```

1. Designers define tokens in **Figma**.
2. Tokens are exported in **DTCG format** (Design Token Community Group standard).
3. **Style Dictionary** transforms them into SCSS files (`_raw.scss`, `_semantic.scss`, `_component.scss`, `_semantic-colors-custom-props.scss`, `_component-colors-custom-props.scss`).
4. A **pull request** is opened on GitHub to integrate the updated token files.

| Token file                                   | Auto-generated? | Editable by hand?             |
| -------------------------------------------- | --------------- | ----------------------------- |
| `tokens/_raw.scss`                           | ✅ Yes          | ❌ **Never**                  |
| `tokens/_semantic.scss`                      | ✅ Yes          | ❌ **Never**                  |
| `tokens/_component.scss`                     | ✅ Yes          | ❌ **Never**                  |
| `tokens/_semantic-colors-custom-props.scss`  | ✅ Yes          | ❌ **Never**                  |
| `tokens/_component-colors-custom-props.scss` | ✅ Yes          | ❌ **Never**                  |
| `tokens/_composite.scss`                     | ❌ No           | ✅ **Yes** — manually managed |

**`_composite.scss` is the exception**: It contains icons (SVG data URIs), composite elevation tokens, font stacks, and Sass maps that cannot be expressed in the DTCG format. This is the only token file that should be edited by hand.

### Token layers

```
Raw (primitives)  →  Semantic  →  Component
$core-ouds-*         $ouds-*      $ouds-<component>-*
```

| Layer                | Prefix                           | Location                      | Purpose                                                                                                           |
| -------------------- | -------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Raw**              | `$core-ouds-*`, `$core-orange-*` | `tokens/_raw.scss`            | Primitive values (colors, dimensions, base units). **Never use directly in component SCSS.** ⚠️ Auto-generated.   |
| **Semantic**         | `$ouds-*`                        | `tokens/_semantic.scss`       | Meaningful aliases (e.g., `$ouds-border-radius-default`). Maps raw tokens to design intent. ⚠️ Auto-generated.    |
| **Composite**        | `$ouds-*`                        | `tokens/_composite.scss`      | Combined values (elevation, font stacks, icons, Sass maps). ✅ Manually managed.                                  |
| **Component**        | `$ouds-<component>-*`            | `tokens/_component.scss`      | Per-component tokens (e.g., `$ouds-button-border-radius-default`). References semantic tokens. ⚠️ Auto-generated. |
| **CSS Custom Props** | `--bs-*`                         | `tokens/_*-custom-props.scss` | Runtime tokens exposed as CSS custom properties for color-mode switching. ⚠️ Auto-generated.                      |

### Token naming convention

```scss
// Raw:       $core-ouds-{category}-{value}
$core-ouds-border-radius-100: 4px;

// Semantic:  $ouds-{category}-{variant}
$ouds-border-radius-default: $core-ouds-border-radius-0;

// Component: $ouds-{component}-{category}-{variant}
$ouds-button-border-radius-default: $ouds-border-radius-default;
```

### Base multiplier system

Raw tokens use a base-multiplier pattern for consistency:

```scss
$core-ouds-border-base: 4px !default;
$core-ouds-border-radius-100: $core-ouds-border-base * 1; // 4px
$core-ouds-border-radius-200: $core-ouds-border-base * 2; // 8px
$core-ouds-border-radius-300: $core-ouds-border-base * 3; // 12px
```

### CSS custom properties and color modes

Color tokens are exposed as CSS custom properties to support light/dark mode at runtime:

```scss
// In tokens/_semantic-colors-custom-props.scss
@include color-mode(light, true) {
  --#{$prefix}color-action-enabled: #{$ouds-color-action-enabled-light};
  --#{$prefix}color-bg-primary: #{$ouds-color-bg-primary-light};
}

@include color-mode(dark) {
  --#{$prefix}color-action-enabled: #{$ouds-color-action-enabled-dark};
  --#{$prefix}color-bg-primary: #{$ouds-color-bg-primary-dark};
}
```

All variables use `!default` to allow consumer overrides.

> 💡 **Context queries for AI agents:**
>
> - To see complete token documentation: See [`.ai/DESIGN_TOKENS.md`](.ai/DESIGN_TOKENS.md)
> - To find all composite tokens: `grep_search("ouds-elevation|ouds-font-family", includePattern="packages/*/scss/tokens/_composite.scss")`
> - To see how colors work in dark mode: `read_file("packages/orange/scss/tokens/_semantic-colors-custom-props.scss", 1, 50)`
> - To understand token naming: `semantic_search("token naming convention hierarchy")`

---

## Multi-brand system

Each brand package follows the **same structure** but provides different token values.

### How brand theming works

1. **Shared core**: `$core-ouds-*` tokens are identical across brands (OUDS Core v1.9.0).
2. **Brand-specific**: `$core-orange-*` / `$core-sosh-*` tokens differ per brand (colors, fonts, etc.).
3. **Semantic mapping**: Each brand maps raw tokens to semantic tokens differently.
4. **Component tokens**: Reference semantic tokens — automatically adapted per brand.

### Brand entry point pattern

Every brand's `ouds-web.scss` follows the same structure:

```scss
// packages/<brand>/scss/ouds-web.scss
@import "@ouds/web-common/scss/config";
@import "@ouds/web-common/scss/functions";
@import "@ouds/web-<brand>/scss/tokens"; // ← Brand tokens injected here
@import "@ouds/web-common/scss/variables";
@import "@ouds/web-common/scss/variables-dark";
@import "@ouds/web-common/scss/maps";
@import "@ouds/web-common/scss/mixins";
@import "@ouds/web-common/scss/utilities";

// Then all common layout & component imports…
@import "@ouds/web-common/scss/root";
@import "@ouds/web-common/scss/reboot";
// …
```

### Token import order (within each brand)

```scss
// packages/<brand>/scss/tokens/_index.scss
@import "raw"; // 1. Primitive values
@import "semantic"; // 2. Semantic mappings
@import "semantic-colors-custom-props"; // 3. CSS custom properties (semantic)
@import "composite"; // 4. Composite tokens (elevation, fonts)
@import "component-colors-custom-props"; // 5. CSS custom properties (component)
@import "component"; // 6. Component-level tokens
```

### Adding or modifying tokens for a brand

⚠️ **Most token files are auto-generated from Figma via Style Dictionary. Do NOT edit them by hand.**

Token updates follow this workflow:

1. Designers update tokens in **Figma**.
2. The pipeline exports DTCG → Style Dictionary → SCSS files.
3. A **PR is opened** on GitHub with the updated token files.
4. The PR is reviewed and merged into `ouds/main`.

| Action                                                      | Where                                             |
| ----------------------------------------------------------- | ------------------------------------------------- |
| Edit composite tokens (elevation, font stacks, icons, maps) | `packages/<brand>/scss/tokens/_composite.scss` ✅ |
| Edit raw, semantic, or component tokens                     | ❌ **Never** — wait for the generated PR          |
| Edit color custom properties                                | ❌ **Never** — wait for the generated PR          |

> 💡 **Context queries for AI agents:**
>
> - To compare brand differences: `semantic_search("core-orange core-sosh brand specific colors")`
> - To see a complete brand entry point: `read_file("packages/orange/scss/ouds-web.scss")`
> - To understand brand config: `read_file("packages/orange/config.yml")`

---

## Components catalog

### OUDS-specific components (beyond Bootstrap)

| Component         | SCSS                            | JS                     | Description                      |
| ----------------- | ------------------------------- | ---------------------- | -------------------------------- |
| Back to top       | `_back-to-top.scss`             | —                      | Scroll-to-top button             |
| Bullet list       | `_bullet-list.scss`             | —                      | Styled unordered lists           |
| Chips             | `_chips.scss`                   | —                      | Compact interactive elements     |
| Footer            | `_footer.scss`                  | —                      | Structured page footer           |
| Local navigation  | `_local-navigation.scss`        | —                      | In-page anchor navigation        |
| Orange navbar     | `_orange-navbar.scss`           | `orange-navbar.js`     | Brand-specific navigation bar    |
| Quantity selector | `forms/_quantity-selector.scss` | `quantity-selector.js` | Numeric stepper input            |
| Skeleton          | `_skeleton.scss`                | —                      | Loading placeholder              |
| Star rating       | `forms/_star-rating.scss`       | —                      | Rating input (CSS-only)          |
| Stepped process   | `_stepped-process.scss`         | —                      | Multi-step progress indicator    |
| Sticker           | `_sticker.scss`                 | —                      | Promotional badge/label          |
| Tags              | `_tags.scss`                    | —                      | Labeling/categorization elements |
| Title bars        | `_title-bars.scss`              | —                      | Section header bars              |

### Bootstrap components (customized)

Accordion, Alert, Badge, Breadcrumb, Button, Button group, Card, Carousel, Collapse, Dropdown, Forms (control, select, range, validation, labels, input-group), Grid, Images, Links, List group, Modal, Nav/Tab, Navbar, Offcanvas, Pagination, Popover, Progress, Scrollspy, Spinner, Table, Toast, Tooltip, Typography.

### JavaScript components

All JS components extend `BaseComponent` (`js/src/base-component.js`) and follow a consistent API:

```javascript
// Pattern for all JS components
import BaseComponent from "./base-component.js";

class MyComponent extends BaseComponent {
  static get NAME() {
    return "myComponent";
  }
  // ...
}
```

Available JS components: Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, OrangeNavbar, Popover, QuantitySelector, Scrollspy, Tab, Toast, Tooltip.

### Finding component code

| What you need    | Where to look                                                                    |
| ---------------- | -------------------------------------------------------------------------------- |
| Component SCSS   | `scss/_<component>.scss` or `scss/forms/_<component>.scss`                       |
| Component JS     | `js/src/<component>.js`                                                          |
| Component tokens | `packages/<brand>/scss/tokens/_component.scss` (search for `ouds-<component>-*`) |
| Component docs   | `site/src/content/docs/components/<component>.mdx`                               |
| Component tests  | `js/tests/unit/<component>.spec.js`                                              |

> 💡 **Context queries for AI agents:**
>
> - To see all component details: See [`.ai/COMPONENTS.md`](.ai/COMPONENTS.md)
> - To find component patterns: `semantic_search("BaseComponent extends class pattern")`
> - To list all JS components: `file_search("js/src/*.js")`
> - To see component tokens: `grep_search("ouds-button-", includePattern="packages/*/scss/tokens/_component.scss")`

---

## Code conventions

### HTML

- **Semantic elements**: Use `<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`, `<aside>` appropriately.
- **Follow [Code Guide](https://codeguide.co)**: Attribute order, self-closing tags, etc.
- **WAI-ARIA**: Always add appropriate `role`, `aria-label`, `aria-expanded`, `aria-controls`, etc.
- **Color mode**: Use `data-bs-theme="light"` or `data-bs-theme="dark"` on elements (not `prefers-color-scheme` media queries).

### SCSS

- **2-space indentation**, no tabs.
- **Variable naming**: `$component-state-property-size` (e.g., `$nav-link-disabled-color`).
- **Use `!default`** on all SCSS variables (except local/temporary variables).
- **Use OUDS tokens**: Never hardcode colors, dimensions, or spacing.
- **Use mixins for `border-radius` and `transition`**: Direct properties are forbidden by Stylelint.
- **Use `border: 0`**, not `border: none`.
- **Never use `lighten()` or `darken()`** — use token-defined colors.
- **No `outline: none`** without a visible focus alternative.
- **Stylelint config**: Extends `stylelint-config-twbs-bootstrap`.
- **CSS prefix**: All custom properties use `--bs-` prefix (defined in `_config.scss`).

```scss
// ✅ Good
.my-component {
  padding: $ouds-space-padding-block-medium;
  color: var(--#{$prefix}color-content-default);
  @include border-radius($ouds-border-radius-default);
  @include transition(opacity 0.15s linear);
}

// ❌ Bad
.my-component {
  padding: 16px;
  color: #333;
  border-radius: 4px;
  transition: opacity 0.15s linear;
}
```

### JavaScript

- **No semicolons** (enforced by ESLint).
- **2-space indentation**.
- **Strict mode** (`'use strict'`) required.
- **No `console.log`** in production code.
- **Prefer template literals** over string concatenation.
- **No trailing commas**.
- **ES module** source type in `js/` directory.
- **ESLint config**: Extends `xo`, `xo/browser`, `plugin:unicorn/recommended`.

```javascript
// ✅ Good
const element = document.querySelector(`[data-bs-target="${selector}"]`);

// ❌ Bad
const element = document.querySelector('[data-bs-target="' + selector + '"]');
```

### File formatting

- **Charset**: UTF-8
- **Line endings**: LF (Unix)
- **Final newline**: Always
- **Trailing whitespace**: Trimmed

> 💡 **Context queries for AI agents:**
>
> - To see complete code conventions: See [`.ai/CODE_CONVENTIONS.md`](.ai/CODE_CONVENTIONS.md)
> - To check linter configs: `file_search("**/.{eslintrc,stylelintrc}*")`
> - To see SCSS mixins: `file_search("scss/mixins/_*.scss")`
> - To understand SCSS variable naming: `semantic_search("$component-state-property-size naming convention")`

---

## Accessibility requirements

⚠️ **Accessibility is non-negotiable.** Every component and contribution must meet these standards.

### Standards

- **WCAG 2.1 Level AA** minimum compliance.
- **Pa11y-CI** automated testing on every build (config: `build/.pa11yci.json`).
- **Storybook a11y addon** for development-time checks.

### Mandatory practices

| Requirement              | Implementation                                                                                                                   |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| **Color contrast**       | Minimum 4.5:1 for text, 3:1 for large text and UI components. Use OUDS color tokens.                                             |
| **Focus visibility**     | Never remove `:focus` styles. Use `focus-ring` mixin or helper. Always provide visible focus indicators.                         |
| **Focus trapping**       | Modals and dialogs must trap focus (`js/src/util/focustrap.js`).                                                                 |
| **Keyboard navigation**  | All interactive elements must be operable with keyboard alone.                                                                   |
| **ARIA attributes**      | Use `role`, `aria-label`, `aria-expanded`, `aria-controls`, `aria-live` as appropriate.                                          |
| **Semantic HTML**        | Use correct heading hierarchy. Use `<button>` for actions, `<a>` for navigation.                                                 |
| **Touch targets**        | Minimum 44×44px touch target size (use `_target-size.scss` mixin).                                                               |
| **Visually hidden text** | Use `.visually-hidden` class for screen-reader-only content. Never use `display: none` to hide content that should be announced. |
| **Motion**               | Respect `prefers-reduced-motion`. Transitions are disabled automatically via Bootstrap's mixin.                                  |
| **RTL support**          | Full RTL layout support via `rtlcss`. Test with `dir="rtl"`. CSS output includes `.rtl.css` variants.                            |

### Testing accessibility

```bash
# Run Pa11y-CI accessibility tests (requires local docs server)
npm run docs-accessibility

# Run HTML validation
npm run docs-vnu
```

> 💡 **Context queries for AI agents:**
>
> - To see complete accessibility guide: See [`.ai/ACCESSIBILITY.md`](.ai/ACCESSIBILITY.md)
> - To find Pa11y config: `read_file("build/.pa11yci.json")`
> - To see focus management patterns: `semantic_search("focustrap focus-ring focus-visible")`
> - To check ARIA patterns: `grep_search("aria-", includePattern="js/src/*.js")`

---

## Quick-start examples

### Using a component in HTML

```html
<!-- Alert component with proper accessibility -->
<div class="alert alert-info" role="alert">
  <span class="alert-icon">
    <span class="visually-hidden">Info</span>
  </span>
  <p>This is an informational alert.</p>
</div>
```

### Creating a new SCSS component

```scss
// scss/_my-component.scss

// 1. Use component tokens (defined in packages/<brand>/scss/tokens/_component.scss)
$ouds-my-component-space-padding: $ouds-space-padding-block-medium !default;
$ouds-my-component-border-radius: $ouds-border-radius-default !default;

// 2. Component styles using tokens
.my-component {
  padding: $ouds-my-component-space-padding;
  @include border-radius($ouds-my-component-border-radius);
  color: var(--#{$prefix}color-content-default);
  background-color: var(--#{$prefix}color-bg-primary);

  // 3. State variations
  &:focus-visible {
    @include focus-ring();
  }
}
```

### Using design tokens in SCSS

```scss
// ✅ Use semantic tokens
padding: $ouds-space-padding-block-medium;
border-width: $ouds-border-width-default;

// ✅ Use CSS custom properties for colors (enables dark mode)
color: var(--#{$prefix}color-content-default);
background: var(--#{$prefix}color-bg-primary);

// ✅ Use component tokens for component-specific values
margin: $ouds-card-space-padding-block;

// ❌ Never use raw tokens in components
padding: $core-ouds-dimension-200; // WRONG
color: $core-orange-color-orange-550; // WRONG
```

### Building the project

```bash
# Install dependencies
npm install

# Build CSS + JS
npm run dist

# Start local dev servers (all brands in parallel)
npm run start
# → Orange:         http://localhost:9001/orange/
# → Sosh:           http://localhost:9002/sosh/
# → Orange Compact: http://localhost:9003/orange-compact/

# Run all tests
npm run test

# Lint only
npm run lint
```

---

## Anti-patterns

### ❌ Do NOT

| Anti-pattern                                  | Why                                                 | Do instead                                                       | Detection pattern                                                                                      |
| --------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Hardcode color values (`#ff7900`, `rgb(...)`) | Breaks theming and dark mode                        | Use `var(--#{$prefix}color-*)` tokens                            | Regex: `#[0-9a-fA-F]{3,6}\|rgb\(`                                                                      |
| Hardcode spacing/dimensions (`16px`, `1rem`)  | Breaks design consistency across brands             | Use `$ouds-space-*` or `$ouds-dimension-*` tokens                | Look for `padding\|margin:.*\d+(px\|rem)`                                                              |
| Use `lighten()` / `darken()` Sass functions   | Not supported, breaks token system                  | Use the appropriate token variant                                | Regex: `lighten\(\|darken\(`                                                                           |
| Use `border: none`                            | Stylelint violation                                 | Use `border: 0`                                                  | Regex: `border:\s*none`                                                                                |
| Write `border-radius: Xpx` directly           | Stylelint violation — must use mixin                | Use `@include border-radius($value)`                             | File: `scss/**/*.scss`, Look for `border-radius:` without `@include`                                   |
| Write `transition: ...` directly              | Stylelint violation — must use mixin                | Use `@include transition(...)`                                   | File: `scss/**/*.scss`, Look for `transition:` without `@include`                                      |
| Remove `:focus` styles                        | Accessibility violation                             | Add visible focus alternative with `focus-ring()`                | Look for `:focus { outline: none }`                                                                    |
| Use raw tokens in component SCSS              | Couples components to primitive values              | Use semantic or component tokens                                 | Regex: `\$core-(ouds\|orange\|sosh)-` in `scss/_*.scss`                                                |
| Edit auto-generated token files               | These are generated from Figma via Style Dictionary | Only edit `_composite.scss`; wait for generated PRs for the rest | Files: `packages/*/scss/tokens/_raw.scss`, `_semantic.scss`, `_component.scss`, `_*-custom-props.scss` |
| Edit `dist/` or `js/dist/` files              | Overwritten on build                                | Edit source in `scss/` and `js/src/`                             | Any changes in `dist/` or `js/dist/` directories                                                       |
| Edit compiled CSS (`ouds-web.css`)            | Overwritten on build                                | Edit SCSS source files                                           | Files: `packages/*/dist/css/*.css`                                                                     |
| Commit `dist/` files in PRs                   | Not wanted in version control                       | Let CI build them                                                | Check git diff for `dist/` paths                                                                       |
| Use `display: none` for accessible content    | Hidden from screen readers                          | Use `.visually-hidden`                                           | Look for `display: none` with semantic content                                                         |
| Use `<div>` for interactive elements          | Not keyboard accessible                             | Use `<button>` or `<a>`                                          | Look for `<div onclick=` or `<div role="button"` without proper keyboard handlers                      |
| Skip ARIA attributes on dynamic UI            | Breaks screen reader experience                     | Always add relevant `aria-*` attributes                          | Components with JS interaction missing `aria-expanded`, `aria-controls`, etc.                          |
| Use `data-bs-theme` via media query           | Breaks explicit theme toggle                        | Use `data-bs-theme` attribute on elements                        | Look for `@media (prefers-color-scheme:` for theme switching                                           |

### Common anti-pattern examples and fixes

#### Example 1: Hardcoded colors

```scss
// ❌ BAD
.my-button {
  background: #ff7900;
  color: #000;
}

// ✅ GOOD
.my-button {
  background: var(--#{$prefix}color-action-enabled);
  color: var(--#{$prefix}color-content-on-action-enabled);
}
```

#### Example 2: Direct CSS properties instead of mixins

```scss
// ❌ BAD
.my-card {
  border-radius: 8px;
  transition: all 0.3s ease;
}

// ✅ GOOD
.my-card {
  @include border-radius($ouds-border-radius-medium);
  @include transition(all 0.3s ease);
}
```

#### Example 3: Using raw tokens

```scss
// ❌ BAD
.my-component {
  padding: $core-ouds-dimension-200;
  color: $core-orange-color-orange-550;
}

// ✅ GOOD
.my-component {
  padding: $ouds-space-padding-block-medium;
  color: var(--#{$prefix}color-content-primary);
}
```

#### Example 4: Editing auto-generated files

```bash
# ❌ BAD - Never edit these files directly
packages/orange/scss/tokens/_raw.scss
packages/orange/scss/tokens/_semantic.scss
packages/orange/scss/tokens/_component.scss

# ✅ GOOD - Only edit this file if needed
packages/orange/scss/tokens/_composite.scss

# ✅ GOOD - Wait for auto-generated PR from design team
# When tokens need to change, designers update Figma → PR is created
```

---

## AI agent workflow

### When working on this project, follow this process:

#### 1. Understand the scope

- **Which brand(s)** are affected? Changes in `scss/` affect all brands. Changes in `packages/<brand>/` affect only that brand.
- **Is it a common component or brand-specific?** Common SCSS is in the root `scss/` directory.
- **Token layer**: Are you modifying raw, semantic, or component tokens? ⚠️ Most token files are **auto-generated** — only `_composite.scss` can be edited by hand.

#### 2. Locate existing code

```
Component SCSS    → scss/_<component>.scss
Component JS      → js/src/<component>.js
Brand tokens      → packages/<brand>/scss/tokens/
Component tokens  → packages/<brand>/scss/tokens/_component.scss
Variables         → scss/_variables.scss, scss/_variables-dark.scss
Mixins            → scss/mixins/_<name>.scss
Documentation     → site/src/content/docs/<section>/<component>.mdx
Tests             → js/tests/unit/<component>.spec.js
```

#### 3. Make changes

- Always use design tokens — never hardcode values.
- Follow the existing code style (2-space indent, no semicolons in JS, etc.).
- For new SCSS variables, always add `!default`.
- For new components, add tokens in `_component.scss` for **each** brand package.
- ⚠️ **Never edit auto-generated token files** (`_raw.scss`, `_semantic.scss`, `_component.scss`, `_*-custom-props.scss`). Only `_composite.scss` is manually editable.
- Comments: Use `// OUDS mod:` prefix when modifying Bootstrap's original code.

#### 4. Verify

```bash
# Lint SCSS + JS
npm run lint

# Build all CSS + JS
npm run dist

# Run JS tests
npm run js-test

# Run full test suite
npm run test
```

#### 5. Checklist before submitting

- [ ] Design tokens used (no hardcoded values)
- [ ] Accessibility: ARIA attributes, keyboard navigation, focus styles, color contrast
- [ ] Dark mode: Colors use CSS custom properties
- [ ] RTL: No directional assumptions (use logical properties or let rtlcss handle it)
- [ ] Multi-brand: Tokens added in ALL brand packages if needed (`orange`, `sosh`, `orange-compact`)
- [ ] Lint passes (`npm run lint`)
- [ ] Build succeeds (`npm run dist`)
- [ ] No `dist/` files committed
- [ ] PR targets `ouds/main` branch

---

## Decision trees

> Quick decision-making guides for common development scenarios.

### Decision tree 1: Where should I put this code?

```
START: I need to add/modify code
│
├─ Is it a design token value (color, spacing, dimension)?
│  ├─ YES → Is it a composite token (elevation, font-stack, icon)?
│  │  ├─ YES → Edit `packages/<brand>/scss/tokens/_composite.scss` ✅
│  │  └─ NO → Wait for auto-generated PR from design team ⏸️
│  │         (Tokens come from Figma → DTCG → Style Dictionary)
│  │
├─ Is it SCSS for a component?
│  ├─ YES → Is it specific to one brand?
│  │  ├─ YES → `packages/<brand>/scss/` (rare, consult team first)
│  │  └─ NO → Is it a new component?
│  │      ├─ YES → Create `scss/_my-component.scss` + update brand token files
│  │      └─ NO → Edit existing `scss/_component.scss`
│  │
├─ Is it JavaScript?
│  ├─ YES → All JS is shared across brands
│  │      → Add to `js/src/` (components, utils, or dom helpers)
│  │      → Never put JS in `packages/<brand>/`
│  │
├─ Is it a Bootstrap SCSS variable override?
│  ├─ YES → Edit `scss/_variables.scss` (light mode)
│  │        or `scss/_variables-dark.scss` (dark mode overrides)
│  │
├─ Is it a Sass mixin or function?
│  ├─ YES → Add to `scss/mixins/_name.scss` or `scss/_functions.scss`
│  │        Update `scss/_mixins.scss` or `scss/_functions.scss` index
│  │
├─ Is it documentation?
│  ├─ YES → `site/src/content/docs/<section>/<page>.mdx`
│  │        Use brand-agnostic content; Astro handles brand variants
│  │
├─ Is it a test?
│  ├─ YES → Unit tests: `js/tests/unit/<component>.spec.js`
│  │        Integration: `js/tests/integration/`
│  │        Visual: `stories/auto/<component>.stories.js`
│  │
└─ Is it build configuration?
   └─ YES → `build/<script>.mjs` or root config files
            (`package.json`, `.stylelintrc.json`, etc.)
```

### Decision tree 2: Which design token should I use?

```
START: I need a token for a CSS property
│
├─ What type of property?
│  │
│  ├─ COLOR (text, background, border, etc.)
│  │  └─ Does it need dark mode support?
│  │     ├─ YES → Use CSS custom property: `var(--#{$prefix}color-*)`
│  │     │        Example: `var(--#{$prefix}color-content-default)`
│  │     └─ NO → Use semantic token: `$ouds-color-*`
│  │              (Rare, most colors need dark mode)
│  │
│  ├─ SPACING (padding, margin, gap)
│  │  └─ Use semantic spacing token: `$ouds-space-*`
│  │     Examples:
│  │     - `$ouds-space-padding-block-medium`
│  │     - `$ouds-space-padding-inline-small`
│  │     - `$ouds-space-gap-default`
│  │
│  ├─ BORDER-RADIUS
│  │  └─ Use semantic radius token via mixin:
│  │     `@include border-radius($ouds-border-radius-default)`
│  │     Options: `*-default`, `*-small`, `*-medium`, `*-large`, `*-pill`
│  │
│  ├─ BORDER-WIDTH
│  │  └─ Use semantic border token:
│  │     `$ouds-border-width-default` (usually 1px)
│  │     `$ouds-border-width-medium` (usually 2px)
│  │     `$ouds-border-width-thick` (usually 4px)
│  │
│  ├─ FONT SIZE / LINE HEIGHT / WEIGHT
│  │  └─ Use typography tokens:
│  │     `$ouds-font-size-*`
│  │     `$ouds-line-height-*`
│  │     `$ouds-font-weight-*`
│  │
│  ├─ ELEVATION / BOX-SHADOW
│  │  └─ Use composite elevation token:
│  │     `$ouds-elevation-raised`
│  │     `$ouds-elevation-drag`
│  │     `$ouds-elevation-overlay`
│  │     (Defined in `_composite.scss`)
│  │
│  ├─ TRANSITION / ANIMATION
│  │  └─ Use semantic duration token via mixin:
│  │     `@include transition($ouds-duration-short)`
│  │     Options: `*-short`, `*-medium`, `*-long`
│  │
│  └─ COMPONENT-SPECIFIC (button padding, card radius, etc.)
│     └─ First check for component token:
│        `$ouds-<component>-<property>-<variant>`
│        Example: `$ouds-button-border-radius-default`
│        If not exists → use semantic token
│
└─ NEVER use:
   ❌ Raw tokens (`$core-ouds-*`, `$core-orange-*`) in components
   ❌ Hardcoded values (`16px`, `#ff7900`, `1rem`)
   ❌ Sass color functions (`lighten()`, `darken()`)
```

### Decision tree 3: Do I need to update all brands?

```
START: I made a change
│
├─ What did you change?
│  │
│  ├─ SCSS component file in `scss/_*.scss`
│  │  └─ Do you reference component tokens (`$ouds-<component>-*`)?
│  │     ├─ YES → Did you ADD new component tokens?
│  │     │  ├─ YES → Must add to ALL brands ⚠️
│  │     │  │        1. Add token to `packages/orange/scss/tokens/_component.scss`
│  │     │  │        2. Add token to `packages/sosh/scss/tokens/_component.scss`
│  │     │  │        3. Add token to `packages/orange-compact/scss/tokens/_component.scss`
│  │     │  │        Each brand may have different values
│  │     │  └─ NO → Only edit component SCSS
│  │     │           The existing tokens work for all brands ✅
│  │     └─ NO → Just using semantic tokens?
│  │              → No brand-specific changes needed ✅
│  │
│  ├─ JavaScript in `js/src/`
│  │  └─ JS is shared across all brands
│  │     → Test once, works everywhere ✅
│  │     (Brand differences only affect CSS)
│  │
│  ├─ Composite token in `packages/<brand>/scss/tokens/_composite.scss`
│  │  └─ Did you edit one brand's `_composite.scss`?
│  │     ├─ YES → Should other brands have the same change?
│  │     │  ├─ YES → Replicate to other brands' `_composite.scss` files
│  │     │  └─ NO → Brand-specific change is OK
│  │     │           (e.g., brand-specific icon, elevation, font-stack)
│  │     └─ NO → N/A
│  │
│  ├─ Bootstrap variable in `scss/_variables.scss`
│  │  └─ Maps to OUDS tokens that exist in all brands?
│  │     ├─ YES → No brand-specific action needed ✅
│  │     └─ NO → You may need to add tokens to all brands
│  │
│  ├─ Documentation in `site/src/content/docs/`
│  │  └─ Is the content brand-agnostic?
│  │     ├─ YES → One MDX file serves all brands ✅
│  │     │        Astro handles brand routes automatically
│  │     └─ NO → Use conditional content:
│  │              {brand === 'orange' && <OrangeContent />}
│  │              (Rare, avoid if possible)
│  │
│  └─ Build scripts, configs, tests
│     └─ Shared across all brands
│        → No brand-specific changes needed ✅
│
└─ Testing checklist for multi-brand changes:
   # Build all brands
   npm run dist

   # Start all brand dev servers in parallel
   npm run start

   # Check each brand:
   # - Orange:         http://localhost:9001/orange/
   # - Sosh:           http://localhost:9002/sosh/
   # - Orange Compact: http://localhost:9003/orange-compact/

   # Visual regression if available
   npm run test-visual
```

### Decision tree 4: How should I test this change?

````
START: I made a change
│
├─ What type of change?
│  │
│  ├─ JavaScript component or utility
│  │  └─ Write unit test:
│  │     1. Create/update `js/tests/unit/<component>.spec.js`
│  │     2. Test public API, events, data attributes
│  │     3. Run: `npm run js-test`
│  │     4. Check coverage: `js/coverage/index.html`
│  │
│  ├─ SCSS component styles
│  │  └─ Multi-layered testing:
│  │     1. Lint: `npm run css-lint`
│  │     2. Visual check in Storybook: `npm run storybook`
│  │     3. Visual check in docs: `npm run start`
│  │     4. Test all 3 brands
│  │     5. Test light + dark mode (toggle `data-bs-theme`)
│  │     6. Test RTL: Add `dir="rtl"` to `<html>`
│  │
│  ├─ Accessibility enhancement
│  │  └─ Accessibility testing stack:
│  │     1. Manual keyboard test (Tab, Enter, Esc, Arrow keys)
│  │     2. Manual screen reader test (VoiceOver on Mac, NVDA on Windows)
│  │     3. Automated: `npm run docs-accessibility` (Pa11y-CI)
│  │     4. Storybook a11y addon (while developing)
│  │     5. Color contrast: Use token system (enforces 4.5:1 minimum)
│  │
│  ├─ Documentation change
│  │  └─ Docs validation:
│  │     1. Build: `npm run docs-build`
│  │     2. HTML validation: `npm run docs-vnu`
│  │     3. Check formatting: `npm run docs-lint`
│  │     4. Visual check: `npm run start` (all brands)
│  │     5. Check code examples work (copy-paste test)
│  │
│  ├─ Design token change (composite only)
│  │  └─ Token validation:
│  │     1. Build CSS: `npm run css-compile`
│  │     2. Check token is used: `grep_search("<token-name>")`
│  │     3. Visual regression across all components using it
│  │     4. Test all brands (tokens may differ per brand)
│  │     5. Test light/dark modes
│  │
│  └─ Build script or config change
│     └─ Full pipeline test:
│        1. Clean: `npm run clean`
│        2. Install: `npm ci`
│        3. Full build: `npm run dist`
│        4. Full test suite: `npm run test`
│        5. Check CI logs for issues
│
└─ Pre-submission checklist:
   ```bash
   # Run full validation
   npm run lint      # ESLint + Stylelint
   npm run dist      # Build CSS + JS
   npm run test      # Full test suite

   # If all pass → ready for PR
   # If failures → fix and re-run
````

```

---

## Glossary

> Key terms, acronyms, and technical concepts used throughout the OUDS Web codebase.

### Project & Architecture

| Term | Definition |
|---|---|
| **OUDS** | Orange Unified Design System — The design system for Orange Group's digital products |
| **OUDS Web** | Web implementation of OUDS, built as a Bootstrap fork |
| **Boosted** | Legacy name (Orange Boosted Bootstrap) — replaced by OUDS Web in v1.0 |
| **Monorepo** | Single repository containing multiple packages (`@ouds/web-common`, `@ouds/web-orange`, etc.) |
| **npm workspaces** | npm feature for managing multiple packages in one repo; used for brand packages |
| **Brand** | Visual identity variant (Orange, Sosh, Orange Compact) — each has unique tokens but shares JS/components |

### Design Tokens

| Term | Definition |
|---|---|
| **Design Token** | Named variable representing a design decision (color, spacing, font size, etc.) |
| **DTCG** | Design Token Community Group — W3C standard format for design tokens |
| **Style Dictionary** | Token transformation tool; converts DTCG JSON to SCSS, CSS, JSON, etc. |
| **Raw tokens** | Primitive values (`$core-ouds-*`, `$core-orange-*`) — never used directly in components |
| **Semantic tokens** | Meaningful aliases (`$ouds-border-radius-default`) — map raw tokens to design intent |
| **Composite tokens** | Complex tokens combining multiple values (elevation, font-stacks, icons) — in `_composite.scss` |
| **Component tokens** | Per-component tokens (`$ouds-button-border-radius-default`) — reference semantic tokens |
| **CSS custom properties** | Runtime CSS variables (`--bs-color-*`) — enable dark mode and theming |
| **Token layer** | Hierarchical level in token system: Raw → Semantic → Composite → Component |
| **Base multiplier** | Pattern where tokens use a base unit × multiplier (e.g., `$core-ouds-border-base * 2`) |

### Tech Stack

| Term | Definition |
|---|---|
| **SCSS** | Sassy CSS — CSS preprocessor with variables, mixins, functions, nesting |
| **Sass** | The compiler that transforms SCSS to CSS (`sass` npm package, v1.78+) |
| **PostCSS** | CSS post-processor; used for autoprefixer and RTL transformations |
| **Autoprefixer** | PostCSS plugin that adds vendor prefixes (`-webkit-`, `-moz-`, etc.) |
| **rtlcss** | PostCSS plugin that converts LTR CSS to RTL (right-to-left) for Arabic/Hebrew |
| **Rollup** | JavaScript bundler; creates ES module, UMD, and bundle versions |
| **ESM** | ECMAScript Modules — modern JS module format (`import`/`export`) |
| **UMD** | Universal Module Definition — works in browsers, Node, AMD, CommonJS |
| **Terser** | JavaScript minifier; creates `.min.js` files |
| **Astro** | Static site generator; used for multi-brand documentation site |
| **MDX** | Markdown + JSX — allows React-like components in Markdown docs |
| **Storybook** | Component development environment; visual testing and documentation |

### Testing & Quality

| Term | Definition |
|---|---|
| **ESLint** | JavaScript linter; enforces code style (extends `xo`, `unicorn` plugins) |
| **Stylelint** | SCSS/CSS linter; enforces style rules (extends `stylelint-config-twbs-bootstrap`) |
| **Karma** | JavaScript test runner; runs unit tests in real browsers |
| **Jasmine** | JavaScript testing framework; provides `describe`, `it`, `expect` API |
| **Pa11y-CI** | Accessibility testing tool; runs automated WCAG checks with axe-core |
| **VNU** | HTML validator (Nu Html Checker); validates HTML5 markup |
| **axe-core** | Accessibility rules engine; used by Pa11y-CI and Storybook a11y addon |
| **WCAG** | Web Content Accessibility Guidelines — W3C standard (targeting 2.1 Level AA) |
| **a11y** | Numeronym for "accessibility" (a + 11 letters + y) |
| **SR** | Screen Reader — assistive technology for blind/low-vision users |

### Accessibility Concepts

| Term | Definition |
|---|---|
| **ARIA** | Accessible Rich Internet Applications — spec for making dynamic content accessible |
| **WAI-ARIA** | Web Accessibility Initiative - ARIA — full name of ARIA spec |
| **WCAG 2.1 Level AA** | Target compliance level; requires 4.5:1 contrast, keyboard access, ARIA, etc. |
| **Focus ring** | Visual indicator around focused element; OUDS uses dual-ring (outline + box-shadow) |
| **Focus trap** | Constraining Tab key to cycle within modal/dialog; prevents focus escaping |
| **Visually hidden** | Content hidden visually but announced by screen readers (`.visually-hidden` class) |
| **Color contrast ratio** | Luminance difference between foreground/background; 4.5:1 minimum for text |
| **Touch target size** | Minimum interactive element size; 44×44px per WCAG 2.5.8 |
| **Reduced motion** | User preference to minimize animations (`prefers-reduced-motion` media query) |

### Bootstrap Concepts

| Term | Definition |
|---|---|
| **Bootstrap** | Popular CSS framework; OUDS Web is a fork of Bootstrap 5.3.6 |
| **BaseComponent** | Abstract JS class extended by all interactive components (Alert, Modal, etc.) |
| **Data attributes** | HTML attributes prefixed with `data-bs-*`; configure JS component behavior |
| **Utility classes** | Single-purpose CSS classes (`.d-flex`, `.mt-3`, etc.) generated by utilities API |
| **Breakpoint** | Responsive design width threshold (xs, sm, md, lg, xl, xxl) |
| **Grid system** | 12-column responsive layout system using flexbox |
| **Color mode** | Light/dark theme variant; toggled via `data-bs-theme` attribute |
| **Reboot** | CSS reset/normalize; establishes consistent baseline styles |

### File Naming & Patterns

| Term | Definition |
|---|---|
| **Partial** | SCSS file prefixed with `_` (e.g., `_buttons.scss`); imported into main files |
| **Mixin** | Reusable SCSS code block; invoked with `@include` (e.g., `@include border-radius()`) |
| **Function** | SCSS function returning a value; invoked with `function-name()` |
| **Helper** | Utility class providing a specific function (`.visually-hidden`, `.clearfix`, etc.) |
| **`.spec.js`** | Unit test file (Jasmine); tests correspond to `<component>.js` |
| **`.stories.js`** | Storybook story file; defines component variants for visual testing |
| **`.mdx`** | Markdown file with JSX/component support; used for documentation |

### Development Workflow

| Term | Definition |
|---|---|
| **LTR** | Left-To-Right — default text direction (English, French, etc.) |
| **RTL** | Right-To-Left — text direction for Arabic, Hebrew, etc. |
| **CI/CD** | Continuous Integration / Continuous Deployment — automated testing and deployment |
| **PR** | Pull Request — proposed code changes submitted for review |
| **SRI** | Subresource Integrity — cryptographic hash for CDN resources (ensures file integrity) |
| **CDN** | Content Delivery Network — distributed servers for fast file delivery |
| **Hot reload** | Dev server feature; automatically refreshes browser on file changes |
| **Sourcemap** | File mapping minified code back to source; enables debugging `.min.js` files |
| **Tree shaking** | Build optimization; removes unused code from bundles |

### Component-Specific Terms

| Term | Definition |
|---|---|
| **Accordion** | Collapsible content panels; only one panel open at a time (uses Collapse) |
| **Alert** | Contextual feedback message; dismissible with close button |
| **Backdrop** | Semi-transparent overlay behind modals/offcanvas; prevents interaction with page |
| **Carousel** | Image/content slider with prev/next controls and indicators |
| **Dropdown** | Contextual overlay menu; triggered by button/link |
| **Modal** | Dialog overlay; traps focus and blocks page interaction |
| **Offcanvas** | Sidebar panel; slides in from left/right/top/bottom |
| **Popover** | Contextual overlay; triggered by hover/click; larger than tooltip |
| **Toast** | Temporary notification; auto-dismisses after timeout |
| **Tooltip** | Small contextual hint; triggered by hover/focus |
| **Quantity selector** | Numeric stepper input; increment/decrement buttons |
| **Orange navbar** | Brand-specific supra bar with logo, mega-menu, search |
| **Star rating** | CSS-only rating input; uses radio buttons styled as stars |
| **Stepped process** | Multi-step progress indicator; shows current step |
| **Sticker** | Circular promotional badge; absolute positioned on cards/images |
| **Title bar** | Section header with optional actions; visually separates content |

### Special Prefixes & Conventions

| Prefix | Meaning | Example |
|---|---|---|
| `$prefix` | SCSS variable for CSS custom property prefix | `--#{$prefix}color-*` → `--bs-color-*` |
| `bs-` | CSS class/custom property prefix | `.bs-accordion`, `--bs-primary` |
| `ouds-` | Semantic/component token prefix | `$ouds-border-radius-default` |
| `core-ouds-` | Raw token prefix (OUDS Core) | `$core-ouds-dimension-100` |
| `core-orange-` | Raw token prefix (Orange brand) | `$core-orange-color-orange-550` |
| `data-bs-` | Data attribute prefix for JS | `data-bs-toggle="modal"` |
| `aria-` | ARIA attribute prefix | `aria-label`, `aria-expanded` |
| `// OUDS mod:` | Comment marking deviation from Bootstrap | `// OUDS mod: custom focus style` |

---

## Extended documentation

> The `.ai/` directory contains detailed documentation on specific topics. Start with this file for an overview, then dive into these references for implementation details.
> **Not sure which file to open?** Use [`.ai/QUICK_LOOKUP.md`](.ai/QUICK_LOOKUP.md) — it maps any topic or task to the right file and section.

| File | Topics covered | Status |
|---|---|---|
| [`.ai/QUICK_LOOKUP.md`](.ai/QUICK_LOOKUP.md) | Topic → file routing index; anti-patterns quick-ref; file map | ✅ Available |
| [`.ai/DECISION_TREES.md`](.ai/DECISION_TREES.md) | Where to put code; which token to use; multi-brand updates; testing strategy | ✅ Available |
| [`.ai/GLOSSARY.md`](.ai/GLOSSARY.md) | 154 project terms, acronyms, prefixes, and patterns | ✅ Available |
| [`.ai/CODE_CONVENTIONS.md`](.ai/CODE_CONVENTIONS.md) | Full HTML, SCSS, JS style guide; linter configs; naming conventions; comment patterns | ✅ Available |
| [`.ai/ACCESSIBILITY.md`](.ai/ACCESSIBILITY.md) | WCAG 2.1 AA checklist; ARIA patterns per component type; testing strategy; Pa11y config | ✅ Available |
| [`.ai/DESIGN_TOKENS.md`](.ai/DESIGN_TOKENS.md) | Full token reference; layer details; naming scheme; how to add new tokens; brand override guide | ✅ Available |
| [`.ai/COMPONENTS.md`](.ai/COMPONENTS.md) | Full component catalog; component creation guide; SCSS/JS patterns; testing patterns | ✅ Available |
| [`.ai/ARCHITECTURE.md`](.ai/ARCHITECTURE.md) | Build pipeline details; package publishing; CI/CD; Astro docs site structure | ✅ Available |

---

*This file was generated to provide context for AI agents and LLMs working on the OUDS Web codebase. Keep it up to date when project architecture, conventions, or tooling changes.*
```
