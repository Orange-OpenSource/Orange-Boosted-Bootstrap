# OUDS Web — AI Agent Context

> **OUDS Web** is a multi-brand design system for the web, built as a fork of Bootstrap 5.3.6.
> It ships accessible, token-driven UI components for Orange group brands (Orange, Sosh, Orange Compact).

| Key info | Value |
|---|---|
| Version | 1.1.0 |
| Upstream | Bootstrap 5.3.6 |
| Main branch | `ouds/main` |
| License | MIT (code) / CC BY 3.0 (docs) |
| Docs | <https://web.unified-design-system.orange.com/> |
| Repo | <https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap> |

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
11. [Extended documentation](#extended-documentation)

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

| Layer | Technology |
|---|---|
| Markup | Semantic HTML5 |
| Styles | SCSS → CSS (via `sass` 1.78) + PostCSS (autoprefixer, RTL via rtlcss) |
| Scripts | Vanilla JavaScript (ES modules), bundled with Rollup |
| Tokens | SCSS variables + CSS custom properties |
| Docs site | Astro 5.x with MDX content collections |
| Testing | Karma + Jasmine (JS), Pa11y-CI (a11y), VNU (HTML validation), Stylelint, ESLint |
| Storybook | `@storybook/html-vite` with a11y addon |

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

### Important files to know

| File | Purpose |
|---|---|
| `scss/_config.scss` | CSS prefix (`bs-`), color-mode type, root selector |
| `scss/_variables.scss` | All Bootstrap variables remapped to OUDS tokens (~2200 lines) |
| `packages/<brand>/scss/tokens/_index.scss` | Token import order for each brand |
| `packages/<brand>/scss/ouds-web.scss` | Brand entry point — imports common + tokens |
| `packages/<brand>/config.yml` | Brand metadata (name, CDN URLs, docs config) |
| `build/rollup.config.mjs` | JS build configuration |
| `build/postcss.config.mjs` | CSS post-processing (autoprefixer) |

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

| Token file | Auto-generated? | Editable by hand? |
|---|---|---|
| `tokens/_raw.scss` | ✅ Yes | ❌ **Never** |
| `tokens/_semantic.scss` | ✅ Yes | ❌ **Never** |
| `tokens/_component.scss` | ✅ Yes | ❌ **Never** |
| `tokens/_semantic-colors-custom-props.scss` | ✅ Yes | ❌ **Never** |
| `tokens/_component-colors-custom-props.scss` | ✅ Yes | ❌ **Never** |
| `tokens/_composite.scss` | ❌ No | ✅ **Yes** — manually managed |

**`_composite.scss` is the exception**: It contains icons (SVG data URIs), composite elevation tokens, font stacks, and Sass maps that cannot be expressed in the DTCG format. This is the only token file that should be edited by hand.

### Token layers

```
Raw (primitives)  →  Semantic  →  Component
$core-ouds-*         $ouds-*      $ouds-<component>-*
```

| Layer | Prefix | Location | Purpose |
|---|---|---|---|
| **Raw** | `$core-ouds-*`, `$core-orange-*` | `tokens/_raw.scss` | Primitive values (colors, dimensions, base units). **Never use directly in component SCSS.** ⚠️ Auto-generated. |
| **Semantic** | `$ouds-*` | `tokens/_semantic.scss` | Meaningful aliases (e.g., `$ouds-border-radius-default`). Maps raw tokens to design intent. ⚠️ Auto-generated. |
| **Composite** | `$ouds-*` | `tokens/_composite.scss` | Combined values (elevation, font stacks, icons, Sass maps). ✅ Manually managed. |
| **Component** | `$ouds-<component>-*` | `tokens/_component.scss` | Per-component tokens (e.g., `$ouds-button-border-radius-default`). References semantic tokens. ⚠️ Auto-generated. |
| **CSS Custom Props** | `--bs-*` | `tokens/_*-custom-props.scss` | Runtime tokens exposed as CSS custom properties for color-mode switching. ⚠️ Auto-generated. |

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
$core-ouds-border-radius-100: $core-ouds-border-base * 1;    // 4px
$core-ouds-border-radius-200: $core-ouds-border-base * 2;    // 8px
$core-ouds-border-radius-300: $core-ouds-border-base * 3;    // 12px
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
@import "@ouds/web-<brand>/scss/tokens";    // ← Brand tokens injected here
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
@import "raw";                            // 1. Primitive values
@import "semantic";                       // 2. Semantic mappings
@import "semantic-colors-custom-props";   // 3. CSS custom properties (semantic)
@import "composite";                      // 4. Composite tokens (elevation, fonts)
@import "component-colors-custom-props";  // 5. CSS custom properties (component)
@import "component";                      // 6. Component-level tokens
```

### Adding or modifying tokens for a brand

⚠️ **Most token files are auto-generated from Figma via Style Dictionary. Do NOT edit them by hand.**

Token updates follow this workflow:
1. Designers update tokens in **Figma**.
2. The pipeline exports DTCG → Style Dictionary → SCSS files.
3. A **PR is opened** on GitHub with the updated token files.
4. The PR is reviewed and merged into `ouds/main`.

| Action | Where |
|---|---|
| Edit composite tokens (elevation, font stacks, icons, maps) | `packages/<brand>/scss/tokens/_composite.scss` ✅ |
| Edit raw, semantic, or component tokens | ❌ **Never** — wait for the generated PR |
| Edit color custom properties | ❌ **Never** — wait for the generated PR |

---

## Components catalog

### OUDS-specific components (beyond Bootstrap)

| Component | SCSS | JS | Description |
|---|---|---|---|
| Back to top | `_back-to-top.scss` | — | Scroll-to-top button |
| Bullet list | `_bullet-list.scss` | — | Styled unordered lists |
| Chips | `_chips.scss` | — | Compact interactive elements |
| Footer | `_footer.scss` | — | Structured page footer |
| Local navigation | `_local-navigation.scss` | — | In-page anchor navigation |
| Orange navbar | `_orange-navbar.scss` | `orange-navbar.js` | Brand-specific navigation bar |
| Quantity selector | `forms/_quantity-selector.scss` | `quantity-selector.js` | Numeric stepper input |
| Skeleton | `_skeleton.scss` | — | Loading placeholder |
| Star rating | `forms/_star-rating.scss` | — | Rating input (CSS-only) |
| Stepped process | `_stepped-process.scss` | — | Multi-step progress indicator |
| Sticker | `_sticker.scss` | — | Promotional badge/label |
| Tags | `_tags.scss` | — | Labeling/categorization elements |
| Title bars | `_title-bars.scss` | — | Section header bars |

### Bootstrap components (customized)

Accordion, Alert, Badge, Breadcrumb, Button, Button group, Card, Carousel, Collapse, Dropdown, Forms (control, select, range, validation, labels, input-group), Grid, Images, Links, List group, Modal, Nav/Tab, Navbar, Offcanvas, Pagination, Popover, Progress, Scrollspy, Spinner, Table, Toast, Tooltip, Typography.

### JavaScript components

All JS components extend `BaseComponent` (`js/src/base-component.js`) and follow a consistent API:

```javascript
// Pattern for all JS components
import BaseComponent from './base-component.js'

class MyComponent extends BaseComponent {
  static get NAME() { return 'myComponent' }
  // ...
}
```

Available JS components: Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, OrangeNavbar, Popover, QuantitySelector, Scrollspy, Tab, Toast, Tooltip.

### Finding component code

| What you need | Where to look |
|---|---|
| Component SCSS | `scss/_<component>.scss` or `scss/forms/_<component>.scss` |
| Component JS | `js/src/<component>.js` |
| Component tokens | `packages/<brand>/scss/tokens/_component.scss` (search for `ouds-<component>-*`) |
| Component docs | `site/src/content/docs/components/<component>.mdx` |
| Component tests | `js/tests/unit/<component>.spec.js` |

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
  @include transition(opacity .15s linear);
}

// ❌ Bad
.my-component {
  padding: 16px;
  color: #333;
  border-radius: 4px;
  transition: opacity .15s linear;
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
const element = document.querySelector(`[data-bs-target="${selector}"]`)

// ❌ Bad
const element = document.querySelector('[data-bs-target="' + selector + '"]');
```

### File formatting

- **Charset**: UTF-8
- **Line endings**: LF (Unix)
- **Final newline**: Always
- **Trailing whitespace**: Trimmed

---

## Accessibility requirements

⚠️ **Accessibility is non-negotiable.** Every component and contribution must meet these standards.

### Standards

- **WCAG 2.1 Level AA** minimum compliance.
- **Pa11y-CI** automated testing on every build (config: `build/.pa11yci.json`).
- **Storybook a11y addon** for development-time checks.

### Mandatory practices

| Requirement | Implementation |
|---|---|
| **Color contrast** | Minimum 4.5:1 for text, 3:1 for large text and UI components. Use OUDS color tokens. |
| **Focus visibility** | Never remove `:focus` styles. Use `focus-ring` mixin or helper. Always provide visible focus indicators. |
| **Focus trapping** | Modals and dialogs must trap focus (`js/src/util/focustrap.js`). |
| **Keyboard navigation** | All interactive elements must be operable with keyboard alone. |
| **ARIA attributes** | Use `role`, `aria-label`, `aria-expanded`, `aria-controls`, `aria-live` as appropriate. |
| **Semantic HTML** | Use correct heading hierarchy. Use `<button>` for actions, `<a>` for navigation. |
| **Touch targets** | Minimum 44×44px touch target size (use `_target-size.scss` mixin). |
| **Visually hidden text** | Use `.visually-hidden` class for screen-reader-only content. Never use `display: none` to hide content that should be announced. |
| **Motion** | Respect `prefers-reduced-motion`. Transitions are disabled automatically via Bootstrap's mixin. |
| **RTL support** | Full RTL layout support via `rtlcss`. Test with `dir="rtl"`. CSS output includes `.rtl.css` variants. |

### Testing accessibility

```bash
# Run Pa11y-CI accessibility tests (requires local docs server)
npm run docs-accessibility

# Run HTML validation
npm run docs-vnu
```

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

| Anti-pattern | Why | Do instead |
|---|---|---|
| Hardcode color values (`#ff7900`, `rgb(...)`) | Breaks theming and dark mode | Use `var(--#{$prefix}color-*)` tokens |
| Hardcode spacing/dimensions (`16px`, `1rem`) | Breaks design consistency across brands | Use `$ouds-space-*` or `$ouds-dimension-*` tokens |
| Use `lighten()` / `darken()` Sass functions | Not supported, breaks token system | Use the appropriate token variant |
| Use `border: none` | Stylelint violation | Use `border: 0` |
| Write `border-radius: Xpx` directly | Stylelint violation — must use mixin | Use `@include border-radius($value)` |
| Write `transition: ...` directly | Stylelint violation — must use mixin | Use `@include transition(...)` |
| Remove `:focus` styles | Accessibility violation | Add visible focus alternative with `focus-ring()` |
| Use raw tokens in component SCSS | Couples components to primitive values | Use semantic or component tokens |
| Edit auto-generated token files (`_raw.scss`, `_semantic.scss`, `_component.scss`, `_*-custom-props.scss`) | These are generated from Figma via Style Dictionary | Only edit `_composite.scss`; wait for generated PRs for the rest |
| Edit `dist/` or `js/dist/` files | Overwritten on build | Edit source in `scss/` and `js/src/` |
| Edit compiled CSS (`ouds-web.css`) | Overwritten on build | Edit SCSS source files |
| Commit `dist/` files in PRs | Not wanted in version control | Let CI build them |
| Use `display: none` for accessible content | Hidden from screen readers | Use `.visually-hidden` |
| Use `<div>` for interactive elements | Not keyboard accessible | Use `<button>` or `<a>` |
| Skip ARIA attributes on dynamic UI | Breaks screen reader experience | Always add relevant `aria-*` attributes |
| Use `data-bs-theme` via media query | Breaks explicit theme toggle | Use `data-bs-theme` attribute on elements |

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

## Extended documentation

> The `.ai/` directory contains detailed documentation on specific topics. Start with this file for an overview, then dive into these references for implementation details.

| File | Topics covered | Status |
|---|---|---|
| [`.ai/CODE_CONVENTIONS.md`](.ai/CODE_CONVENTIONS.md) | Full HTML, SCSS, JS style guide; linter configs; naming conventions; comment patterns | 🔜 Planned |
| [`.ai/ACCESSIBILITY.md`](.ai/ACCESSIBILITY.md) | WCAG 2.1 AA checklist; ARIA patterns per component type; testing strategy; Pa11y config | 🔜 Planned |
| [`.ai/DESIGN_TOKENS.md`](.ai/DESIGN_TOKENS.md) | Full token reference; layer details; naming scheme; how to add new tokens; brand override guide | 🔜 Planned |
| [`.ai/COMPONENTS.md`](.ai/COMPONENTS.md) | Full component catalog; component creation guide; SCSS/JS patterns; testing patterns | ✅ Available |
| [`.ai/ARCHITECTURE.md`](.ai/ARCHITECTURE.md) | Build pipeline details; package publishing; CI/CD; Astro docs site structure | 🔜 Planned |

---

*This file was generated to provide context for AI agents and LLMs working on the OUDS Web codebase. Keep it up to date when project architecture, conventions, or tooling changes.*
