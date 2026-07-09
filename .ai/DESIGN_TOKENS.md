---
title: "Design Tokens — OUDS Web"
description: "Complete reference for the OUDS token system: generation pipeline, layers (raw/semantic/composite/component), naming scheme, CSS custom properties, dark mode, multi-brand comparison."
audience:
  - token-specialists
  - component-developers
  - design-system-maintainers
  - ai-agents
keywords:
  - tokens
  - design-tokens
  - SCSS-variables
  - raw
  - semantic
  - composite
  - component
  - CSS-custom-properties
  - dark-mode
  - multi-brand
  - Figma
  - DTCG
  - Style-Dictionary
related_files:
  - "../AGENTS.md#design-tokens-system"
  - "ARCHITECTURE.md"
  - "CODE_CONVENTIONS.md#scss-conventions"
  - "QUICK_LOOKUP.md#design-tokens"
last_updated: "2026-03-31"
---

# Design Tokens — OUDS Web

> Full reference for the token system powering OUDS Web's multi-brand architecture.
> For a quick overview, see the [Design tokens section in AGENTS.md](../AGENTS.md#design-tokens-system).

---

## Table of contents

1. [Token generation pipeline](#token-generation-pipeline)
2. [Token file inventory](#token-file-inventory)
3. [Token layers](#token-layers)
4. [Token naming scheme](#token-naming-scheme)
5. [Base multiplier system](#base-multiplier-system)
6. [CSS custom properties and color-mode switching](#css-custom-properties-and-color-mode-switching)
7. [The `_composite.scss` file](#the-_compositescss-file)
8. [How `_variables.scss` bridges Bootstrap and OUDS](#how-_variablesscss-bridges-bootstrap-and-ouds)
9. [Dark mode architecture](#dark-mode-architecture)
10. [Sass maps built from tokens](#sass-maps-built-from-tokens)
11. [Token-aware mixins](#token-aware-mixins)
12. [Token-aware functions](#token-aware-functions)
13. [Brand import pipeline](#brand-import-pipeline)
14. [Multi-brand comparison](#multi-brand-comparison)
15. [How component SCSS consumes tokens](#how-component-scss-consumes-tokens)
16. [Token version management](#token-version-management)
17. [Quick reference: what to do and what to avoid](#quick-reference-what-to-do-and-what-to-avoid)

---

## Token generation pipeline

Tokens are **auto-generated** from design tools. The pipeline is:

```
Figma (design)  →  DTCG export  →  Style Dictionary  →  SCSS files  →  PR on GitHub
```

1. Designers define tokens in **Figma**.
2. Tokens are exported in **DTCG format** (Design Token Community Group standard).
3. **Style Dictionary** transforms DTCG into SCSS files: `_raw.scss`, `_semantic.scss`, `_component.scss`, `_semantic-colors-custom-props.scss`, `_component-colors-custom-props.scss`.
4. A **pull request** is opened on GitHub with the updated token files.
5. The PR is reviewed and merged into `ouds/main`.

| Token file                                   | Auto-generated? | Editable by hand?          |
| -------------------------------------------- | --------------- | -------------------------- |
| `tokens/_raw.scss`                           | Yes             | **Never**                  |
| `tokens/_semantic.scss`                      | Yes             | **Never**                  |
| `tokens/_component.scss`                     | Yes             | **Never**                  |
| `tokens/_semantic-colors-custom-props.scss`  | Yes             | **Never**                  |
| `tokens/_component-colors-custom-props.scss` | Yes             | **Never**                  |
| `tokens/_composite.scss`                     | No              | **Yes** — manually managed |

---

## Token file inventory

Each brand package (`packages/<brand>/scss/tokens/`) contains 7 files:

| File                                  | Lines (Orange) | Variables (approx)                                      | Purpose                                                                          |
| ------------------------------------- | -------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `_index.scss`                         | 6              | 0 (imports only)                                        | Import manifest — defines the load order                                         |
| `_raw.scss`                           | 485            | ~440                                                    | Primitive values (colors, dimensions, border units)                              |
| `_semantic.scss`                      | 779            | ~724                                                    | Meaningful aliases mapping raw tokens to design intent                           |
| `_composite.scss`                     | 130            | ~40                                                     | Combined values that cannot be expressed in DTCG (elevation, fonts, icons, maps) |
| `_component.scss`                     | 459            | ~354                                                    | Per-component tokens referencing semantic tokens                                 |
| `_semantic-colors-custom-props.scss`  | 316            | 103 light + 103 dark CSS props, 102 SCSS re-definitions | Light/dark semantic color switching                                              |
| `_component-colors-custom-props.scss` | 114            | 50 light + 50 dark CSS props                            | Light/dark component color switching                                             |

**Total per brand**: ~2,283 lines, ~1,660 SCSS variables + ~306 CSS custom property declarations.

### Import order

The import order in `_index.scss` is critical — later files depend on earlier ones:

```scss
@import "raw"; // 1. Primitive values
@import "semantic"; // 2. Semantic mappings (references raw)
@import "semantic-colors-custom-props"; // 3. CSS custom properties (redefines semantic color vars)
@import "composite"; // 4. Elevation, fonts, icons, maps (references semantic)
@import "component-colors-custom-props"; // 5. CSS custom properties (component colors)
@import "component"; // 6. Component tokens (references semantic + custom props)
```

Key ordering constraint: `_composite.scss` is imported **after** `_semantic-colors-custom-props.scss` (so it can use redefined semantic vars) but **before** `_component-colors-custom-props.scss`.

---

## Token layers

Tokens follow a strict 3-tier hierarchy, plus a composite and CSS custom properties layer:

```
Raw (primitives)  →  Semantic  →  Component
$core-ouds-*         $ouds-*      $ouds-<component>-*
$core-<brand>-*
```

### Layer 1: Raw tokens (`_raw.scss`)

Primitive values with no design intent. **Never use directly in component SCSS.**

| Prefix           | Scope                | Shared across brands?                                          |
| ---------------- | -------------------- | -------------------------------------------------------------- |
| `$core-ouds-*`   | OUDS Core primitives | Yes — identical in all brands                                  |
| `$core-orange-*` | Orange brand palette | Present in Orange + Orange Compact (and also embedded in Sosh) |
| `$core-sosh-*`   | Sosh brand palette   | Sosh only                                                      |

Raw tokens are organized into 8 categories, each delimited with `// scss-docs-start ouds-raw-<category>` / `// scss-docs-end ouds-raw-<category>` markers:

| Category      | Variable count | Description                                                           |
| ------------- | -------------- | --------------------------------------------------------------------- |
| **Border**    | ~18            | Base unit (4px), radius (0–800), width (0–200), style                 |
| **Color**     | ~197           | Decorative palettes, functional colors, opacity variants (rgba)       |
| **Dimension** | ~44            | Base unit (4px), dimension scale (0–11000), out-of-system values      |
| **Effect**    | 2              | Blur values (160, 320)                                                |
| **Elevation** | ~22            | Blur, spread, x-offset, y-offset for shadow layers                    |
| **Font**      | ~68            | Family names, letter-spacing, line-height, size, weight               |
| **Grid**      | ~50            | Column count, max-width, min-width, column-gap, margin per breakpoint |
| **Opacity**   | ~25            | Unitless decimal scale from 0 to 1                                    |

### Layer 2: Semantic tokens (`_semantic.scss`)

Meaningful aliases that map raw tokens to design intent. This is the layer that differs most between brands.

| Category      | Variable count | Description                                                                         |
| ------------- | -------------- | ----------------------------------------------------------------------------------- |
| **Border**    | ~16            | radius, style, width with meaningful names                                          |
| **Color**     | ~243           | Action, bg, border, content, overlay, surface — **light/dark pairs**                |
| **Dimension** | ~30            | T-shirt size scale (12xsmall through 11xlarge)                                      |
| **Effect**    | 1              | blur-drag                                                                           |
| **Elevation** | ~36            | blur/color/spread/x/y for 6 elevation levels                                        |
| **Font**      | ~124           | family, letter-spacing, line-height, size, weight — per typography style × viewport |
| **Grid**      | ~49            | Per-breakpoint grid settings (2xs through 3xl)                                      |
| **Opacity**   | 8              | disabled, invisible, medium, opaque, strong, weak, weaker, weakest                  |
| **Size**      | ~133           | Icon sizes, max-width-type, min interactive area, decorative sizes                  |
| **Space**     | ~94            | fixed, column-gap, inset, padding-block, padding-inline, row-gap, scaled            |

Color tokens come in **light/dark pairs**:

```scss
$ouds-color-action-enabled-light: $core-ouds-color-functional-black !default;
$ouds-color-action-enabled-dark: $core-ouds-color-functional-gray-light-160 !default;
```

Some semantic tokens reference other semantic tokens (within the same file):

```scss
$ouds-font-family-web-body: $ouds-font-family-system-web !default;
$ouds-space-padding-block-medium: $ouds-dimension-6xsmall !default;
```

### Layer 3: Component tokens (`_component.scss`)

Per-component tokens that reference semantic tokens. Each component's tokens are grouped together.

**Components with tokens** (20 components in Orange):

| Component       | Prefix                                     | Variable count |
| --------------- | ------------------------------------------ | -------------- |
| Alert           | `$ouds-alert-*`                            | ~14            |
| Badge           | `$ouds-badge-*`                            | ~7             |
| Breadcrumb      | `$ouds-breadcrumb-*`                       | ~2             |
| Bullet list     | `$ouds-bullet-list-*`                      | ~7             |
| Button          | `$ouds-button-*` + `$ouds-button-mono-*`   | ~100           |
| Checkbox        | `$ouds-checkbox-*`                         | ~14            |
| Chip            | `$ouds-chip-*`                             | ~50            |
| Control item    | `$ouds-control-item-*`                     | ~22            |
| Divider         | `$ouds-divider-*`                          | 1              |
| Expand link     | `$ouds-expand-*`                           | ~2             |
| Input tag       | `$ouds-input-tag-*`                        | ~15            |
| Link            | `$ouds-link-*` + `$ouds-link-mono-*`       | ~23            |
| Pin code input  | `$ouds-pin-code-input-*`                   | ~3             |
| Quantity input  | `$ouds-quantity-input-*`                   | ~5             |
| Radio button    | `$ouds-radio-button-*`                     | ~14            |
| Select input    | `$ouds-select-input-*`                     | 1              |
| Skeleton        | `$ouds-skeleton-*`                         | ~3             |
| Switch          | `$ouds-switch-*`                           | ~25            |
| Tag             | `$ouds-tag-*`                              | ~23            |
| Text input/area | `$ouds-text-input-*` + `$ouds-text-area-*` | ~31            |

Component tokens use three reference patterns:

```scss
// Pattern 1: Reference a semantic token (most common)
$ouds-button-border-radius-rounded: $ouds-border-radius-medium !default;

// Pattern 2: Reference a CSS custom property (for color-mode-dependent values)
$ouds-button-color-bg-brand-loading: var(
  --#{$prefix}button-color-bg-brand-loading
) !default;

// Pattern 3: Reference a raw token directly (for fixed component-specific values)
$ouds-alert-size-min-width: $core-ouds-dimension-2000 !default;
```

### Composite tokens (`_composite.scss`)

This is the **only manually editable token file**. It contains values that cannot be expressed in DTCG format. See [dedicated section below](#the-_compositescss-file).

### CSS custom property layers (`_*-colors-custom-props.scss`)

These files bridge SCSS compile-time tokens to CSS runtime custom properties for color-mode switching. See [CSS custom properties section below](#css-custom-properties-and-color-mode-switching).

---

## Token naming scheme

### Raw tokens

```
$core-ouds-{category}-{scale-or-name}
$core-{brand}-{category}-{scale-or-name}
```

Examples:

```scss
$core-ouds-border-radius-200           // Category: border, scale: 200
$core-ouds-color-functional-black      // Category: color, name: functional-black
$core-ouds-dimension-600               // Category: dimension, scale: 600
$core-ouds-font-size-650               // Category: font, subcategory: size, scale: 650
$core-ouds-opacity-640                 // Category: opacity, scale: 640
$core-orange-color-orange-550          // Brand: orange, category: color, name: orange-550
$core-sosh-color-magenta-500           // Brand: sosh, category: color, name: magenta-500
```

### Semantic tokens

```
$ouds-{category}-{variant}
$ouds-{category}-{variant}-{light|dark}     (for color tokens)
```

Examples:

```scss
$ouds-border-radius-default            // Simple semantic
$ouds-border-radius-pill               // Named variant
$ouds-dimension-large                  // T-shirt size
$ouds-color-action-enabled-light       // Light-mode color
$ouds-color-action-enabled-dark        // Dark-mode color
$ouds-font-size-heading-large-desktop  // Typography: style-size-viewport
$ouds-space-padding-block-medium       // Spacing: type-direction-size
$ouds-opacity-disabled                 // Named semantic
```

### Component tokens

```
$ouds-{component}-{category}-{variant}
```

Examples:

```scss
$ouds-button-border-radius-default     // Component: button, category: border-radius
$ouds-button-space-padding-block       // Component: button, category: space
$ouds-chip-border-radius               // Component: chip, category: border-radius
$ouds-alert-size-min-width             // Component: alert, category: size
$ouds-switch-color-cursor              // Component: switch, category: color
$ouds-text-input-color-border-hover    // Component: text-input, state: hover
```

### CSS custom properties

```
--{$prefix}{category}-{name}                     (semantic)
--{$prefix}{component}-{category}-{name}          (component)
```

All custom properties use the `bs-` prefix (defined in `scss/_config.scss`):

```scss
--bs-color-action-enabled            // Semantic color
--bs-color-bg-primary                // Semantic background
--bs-elevation-color-default         // Semantic elevation
--bs-button-color-bg-brand-pressed   // Component: button color
--bs-switch-color-track-selected     // Component: switch color
```

---

## Base multiplier system

Raw tokens use a `$base * multiplier` pattern for dimensional consistency. Three categories use this pattern:

### Border (base = 4px)

```scss
$core-ouds-border-base: 4px !default;
$core-ouds-border-radius-0: $core-ouds-border-base * 0 !default; // 0px
$core-ouds-border-radius-100: $core-ouds-border-base * 1 !default; // 4px
$core-ouds-border-radius-200: $core-ouds-border-base * 2 !default; // 8px
$core-ouds-border-radius-300: $core-ouds-border-base * 3 !default; // 12px
$core-ouds-border-width-25: $core-ouds-border-base * 0.25 !default; // 1px
$core-ouds-border-width-50: $core-ouds-border-base * 0.5 !default; // 2px
```

### Dimension (base = 4px)

```scss
$core-ouds-dimension-base: 4px !default;
$core-ouds-dimension-0: $core-ouds-dimension-base * 0 !default; // 0px
$core-ouds-dimension-50: $core-ouds-dimension-base * 1 !default; // 4px
$core-ouds-dimension-100: $core-ouds-dimension-base * 2 !default; // 8px
$core-ouds-dimension-600: $core-ouds-dimension-base * 12 !default; // 48px
$core-ouds-dimension-1000: $core-ouds-dimension-base * 20 !default; // 80px
$core-ouds-dimension-11000: $core-ouds-dimension-base * 260 !default; // 1040px
```

### Grid (uses dimension-base)

```scss
$core-ouds-grid-column-gap-100: $core-ouds-dimension-base * 2 !default; // 8px
$core-ouds-grid-column-gap-400: $core-ouds-dimension-base * 6 !default; // 24px
$core-ouds-grid-margin-100: $core-ouds-dimension-base * 4 !default; // 16px
```

The scale numbers roughly indicate the multiplier (e.g., `200` = base × 2), though this is an approximation — the actual multiplier varies.

---

## CSS custom properties and color-mode switching

Color tokens need to switch values at runtime when the user changes between light and dark mode. This is achieved through CSS custom properties in two files per brand.

### Semantic colors (`_semantic-colors-custom-props.scss`)

This file has three sections:

**Section 1: Light mode declarations** — Uses `@include color-mode(light, true)` where the `true` parameter makes this the default (applied when no `data-bs-theme` attribute is set):

```scss
@include color-mode(light, true) {
  --#{$prefix}color-action-enabled: #{$ouds-color-action-enabled-light};
  --#{$prefix}color-bg-primary: #{$ouds-color-bg-primary-light};
  --#{$prefix}elevation-color-default: #{$ouds-elevation-color-default-light};
  // ... ~103 custom properties
}
```

**Section 2: Dark mode declarations** — Uses `@include color-mode(dark, true)`:

```scss
@include color-mode(dark, true) {
  --#{$prefix}color-action-enabled: #{$ouds-color-action-enabled-dark};
  --#{$prefix}color-bg-primary: #{$ouds-color-bg-primary-dark};
  --#{$prefix}elevation-color-default: #{$ouds-elevation-color-default-dark};
  // ... same properties with -dark values
}
```

**Section 3: SCSS variable re-definitions** — Each semantic color variable is **redefined** to point to its CSS custom property. This is the key bridge that allows component SCSS to use `$ouds-color-action-enabled` as a Sass variable while the output CSS uses `var()` for runtime switching:

```scss
$ouds-color-action-enabled: var(--#{$prefix}color-action-enabled) !default;
$ouds-color-bg-primary: var(--#{$prefix}color-bg-primary) !default;
// ... ~102 re-definitions
```

**Custom property categories**: Action (~21), Always (4), Background (5), Border (13), Content (27), Opacity (3), Overlay (4), Surface (15), Elevation (6).

### Component colors (`_component-colors-custom-props.scss`)

Same light/dark pattern, but for component-specific colors. **No SCSS variable re-definition section** — the `_component.scss` file references the custom properties directly using `var(--#{$prefix}...)`.

**Important difference**: Component custom properties often reference **raw tokens directly** (not semantic tokens), because these are component-specific color decisions without corresponding semantic pairs:

```scss
// Light mode
--#{$prefix}switch-color-track-selected: #{$core-ouds-color-functional-malachite-700};
// Dark mode
--#{$prefix}switch-color-track-selected: #{$core-ouds-color-functional-malachite-600};
```

Component categories covered: Button brand (4 props), Button mono (34 props), Link mono (5 props), Switch (5 props), Icon (3 props).

### The `color-mode` mixin

Defined in `scss/mixins/_color-mode.scss` (33 lines). It generates the CSS selectors for light/dark mode based on `$color-mode-type` from `_config.scss`:

```scss
@mixin color-mode(
  $mode: light,
  $root: false,
  $inverted-mode: if($mode == light, dark, light)
);
```

When `$color-mode-type == "data"` (default), it generates `[data-bs-theme="light"]` / `[data-bs-theme="dark"]` selectors. It also supports nested color-mode patterns with `[data-bs-theme="root"]` and `[data-bs-theme="root-inverted"]` for complex layouts where a child element needs to follow or invert the document root theme.

---

## The `_composite.scss` file

This is the **only token file that can be edited by hand**. It contains values not expressible in the DTCG format used by Style Dictionary.

### Elevation tokens

Composite `box-shadow` values combining 5 semantic sub-tokens:

```scss
$ouds-elevation-default: $ouds-elevation-x-default $ouds-elevation-y-default $ouds-elevation-blur-default $ouds-elevation-spread-default var(--#{$prefix}elevation-color-default) !default;
$ouds-elevation-drag: ...
$ouds-elevation-emphasized: ...
$ouds-elevation-none: ...
$ouds-elevation-raised: ...
$ouds-elevation-sticky: ...
```

Note: The color component uses a CSS custom property to support light/dark switching.

### Font stacks

```scss
// Brand font name (differs per brand)
$custom-font-name: "HelvNeueOrange" !default; // Orange + Orange Compact
// $custom-font-name: "Sosh" !default;          // Sosh

// CDN URLs for web fonts (Sass map: weight → URL)
$custom-font-cdn-urls: (
  $ouds-font-weight-system-web-default: "https://...HelveticaNeue-Default.woff2",
  $ouds-font-weight-system-web-moderate:
    "https://...HelveticaNeue-Moderate.woff2",
  $ouds-font-weight-system-web-strong: "https://...HelveticaNeue-Strong.woff2",
) !default;

// Sans-serif fallback stack
$ouds-font-family-sans-serif-stack:
  $custom-font-name, "Helvetica Neue", Helvetica, "SF Pro", Roboto, Arial,
  "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;

// Monospace stack (identical across brands)
$ouds-font-family-monospace-stack:
  Consolas, "SFMono-Regular", "Roboto Mono", "Liberation Mono", Menlo, monospace !default;
```

### SVG icon data URIs

22 icons defined as SVG data URIs. Each brand provides its own icon designs with the same variable names:

| Variable                                                  | Used by                      |
| --------------------------------------------------------- | ---------------------------- |
| `$chevron-icon`                                           | Accordion, navigation        |
| `$cross-icon`, `$cross-icon-stroke`                       | Modals, alerts, close button |
| `$burger-icon`, `$burger-icon-small`                      | Navbar toggler               |
| `$add-icon`, `$add-icon-sm`                               | Quantity selector (plus)     |
| `$remove-icon`, `$remove-icon-sm`                         | Quantity selector (minus)    |
| `$play-icon`, `$pause-icon`                               | Carousel media controls      |
| `$helper-icon`                                            | Form helpers                 |
| `$breadcrumb-divider`                                     | Breadcrumb separator         |
| `$bullet-list-marker-level-0/1/2`                         | Bullet list levels           |
| `$bullet-list-empty-marker`, `$bullet-list-marker-tick`   | Bullet list variants         |
| `$chip-tick-icon`                                         | Chip selection               |
| `$form-check-input-checked-bg-image`                      | Checkbox checked             |
| `$form-check-radio-checked-bg-image`                      | Radio checked                |
| `$form-check-input-indeterminate-bg-image`                | Checkbox indeterminate       |
| `$form-switch-checked-bg-image`                           | Switch checked               |
| `$alert-icon-success/info/warning-*/important`            | Alert status icons           |
| `$select-input-chevron`, `$select-input-expanded-chevron` | Select dropdown              |
| `$btn-previous-icon`, `$btn-next-icon`                    | Navigation buttons           |

### Sass map for SVG custom properties

```scss
$svg-as-custom-props: (
  "chevron": $chevron-icon,
  "close": $cross-icon-stroke,
  "success": $alert-icon-success,
  "info": $alert-icon-info,
  "warning": $alert-icon-warning-external,
  "warning-internal": $alert-icon-warning-internal,
  "error": $alert-icon-important,
) !default;
```

This map is consumed by `_root.scss` to expose frequently-used SVGs as CSS custom properties for runtime theming.

---

## How `_variables.scss` bridges Bootstrap and OUDS

`scss/_variables.scss` (2,177 lines) is the **translation layer** between OUDS tokens and Bootstrap's variable system. Every original Bootstrap variable is remapped to an OUDS token reference, documented with `// OUDS mod:` comments.

### Mapping patterns

**Pattern 1: Direct SCSS token reference** — For compile-time values (dimensions, sizes, weights):

```scss
$border-width: $ouds-border-width-default !default; // OUDS mod: instead of `.125rem`
$border-radius: $ouds-border-radius-default !default; // OUDS mod: instead of `.375rem`
$box-shadow: $ouds-elevation-default !default; // OUDS mod: instead of `0 .5rem 1rem rgba($black, .15)`
$font-weight-bold: $ouds-font-weight-system-web-strong !default;
```

**Pattern 2: CSS custom property reference** — For runtime color-mode switching:

```scss
$table-border-color: var(--#{$prefix}color-border-default) !default;
$card-border-color: var(--#{$prefix}color-border-default) !default;
$form-text-color: var(--#{$prefix}color-content-muted) !default;
```

**Pattern 3: Light-mode specific token** — For variables with dark-mode counterparts in `_variables-dark.scss`:

```scss
$body-color: $ouds-color-content-default-light !default;
$body-bg: $ouds-color-bg-primary-light !default;
$border-color: $ouds-color-border-emphasized-light !default;
```

### The `!default` cascade mechanism

This is how multi-brand theming works:

1. Brand tokens are loaded **before** `_variables.scss` in the entry point.
2. Because `_variables.scss` uses `!default` on every variable, brand tokens (already defined) take precedence.
3. `_variables.scss` only provides fallback values for anything not already defined.

### Variables that do NOT use tokens

Some categories remain as literal values:

| Category        | Examples                                                                   | Reason                             |
| --------------- | -------------------------------------------------------------------------- | ---------------------------------- |
| Feature flags   | `$enable-rounded: true`, `$enable-transitions: true`                       | Boolean toggles, not design values |
| Z-index         | `$zindex-dropdown: 1000`, `$zindex-modal: 1055`                            | CSS stacking order, not branded    |
| Structural CSS  | `$gradient: linear-gradient(...)`, `$modal-fade-transform: translate(...)` | CSS mechanics, not design tokens   |
| Grid structural | `$grid-columns: 12`, `$grid-row-columns: 6`                                | Layout constants                   |
| `null` values   | `$headings-font-family: null`, `$font-size-root: null`                     | Explicitly removed from OUDS       |

### Grid system: fully token-driven

```scss
$grid-breakpoints: (
  2xs: 0,
  xs: $ouds-grid-xs-min-width,
  // 390px
  sm: $ouds-grid-sm-min-width,
  // 480px
  md: $ouds-grid-md-min-width,
  // 736px
  lg: $ouds-grid-lg-min-width,
  // 1024px
  xl: $ouds-grid-xl-min-width,
  // 1320px
  2xl: $ouds-grid-2xl-min-width,
  // 1640px
  3xl: $ouds-grid-3xl-min-width, // 1880px
);
```

---

## Dark mode architecture

Dark mode uses a layered approach combining SCSS variables and CSS custom properties.

### `_variables-dark.scss` (144 lines)

For every light-mode variable in `_variables.scss` that uses a `-light` suffixed token, there is a corresponding `-dark` variable:

```scss
// _variables.scss (light mode):
$body-color: $ouds-color-content-default-light !default;
$body-bg: $ouds-color-bg-primary-light !default;

// _variables-dark.scss (dark mode):
$body-color-dark: $ouds-color-content-default-dark !default;
$body-bg-dark: $ouds-color-bg-primary-dark !default;
```

Sections covered: theme colors, text emphasis, bg-subtle, border-subtle, body colors, focus ring, forms, tables.

Notable removals: Many Bootstrap dark-mode variables that used `invert(1)` filter hacks are **removed** (commented with `// OUDS mod: no ...`) and replaced with proper semantic color tokens. This includes accordion icons, carousel indicators, close button filter, and breadcrumb divider filter.

### How dark mode variables propagate

1. `_variables-dark.scss` defines `-dark` suffixed SCSS variables.
2. `_maps.scss` builds dark-mode Sass maps within `@if $enable-dark-mode { ... }` blocks (e.g., `$theme-colors-dark`, `$theme-colors-text-dark`).
3. `_root.scss` emits CSS custom properties inside `@include color-mode(dark)` blocks.
4. Components use `var(--bs-...)` which automatically resolves to light or dark values at runtime.

---

## Sass maps built from tokens

`scss/_maps.scss` (453 lines) builds Sass maps consumed by the utility class generator and component styles.

### OUDS-specific maps (not in Bootstrap)

| Map                            | Purpose                          | Values reference                                    |
| ------------------------------ | -------------------------------- | --------------------------------------------------- |
| `$ouds-border-radiuses`        | Border radius utility classes    | `$ouds-border-radius-*` tokens                      |
| `$ouds-border-widths`          | Border width utility classes     | `$ouds-border-width-*` tokens                       |
| `$ouds-border-colors`          | Border color utility classes     | `var(--bs-color-border-*)`                          |
| `$ouds-dimension-space-scaled` | Responsive spacing utilities     | `var(--bs-space-scaled-*)`                          |
| `$ouds-dimension-space-fixed`  | Fixed spacing utilities          | Mix of SCSS tokens and CSS custom properties        |
| `$ouds-elevations`             | Elevation utility classes        | `$ouds-elevation-*` composite tokens                |
| `$ouds-font-sizes`             | Typography utility references    | String references to font size categories           |
| `$ouds-font-weights`           | Font weight utility classes      | `$ouds-font-weight-system-web-*` tokens             |
| `$ouds-opacities`              | Opacity utility classes          | `$ouds-opacity-*` tokens                            |
| `$ouds-backgrounds`            | Background color utility classes | `var(--bs-color-surface-*)`, `var(--bs-color-bg-*)` |
| `$ouds-text-colors`            | Text color utility classes       | `var(--bs-color-content-*)`                         |

### Brand-conditional entries

Maps use `if(variable-exists(...), ...)` to conditionally include brand-specific tokens:

```scss
"brand-secondary": if(variable-exists(ouds-color-border-brand-secondary-light),
                      var(--#{$prefix}color-border-brand-secondary), null),
```

This allows brands without secondary/tertiary brand tokens (like Orange) to gracefully omit those map entries, while brands that define them (like Sosh) include them automatically.

### Remapped Bootstrap maps

Standard Bootstrap maps (`$theme-colors-rgb`, `$theme-colors-text`, `$theme-colors-bg-subtle`, `$theme-colors-border-subtle`, `$utilities-text-colors`, `$utilities-bg-colors`, `$utilities-border-colors`, `$grid-gutter-widths`, `$gutters`) are all overridden to use OUDS token references.

---

## Token-aware mixins

Defined in `scss/mixins/`. 28 mixin files total, of which 6 are particularly relevant to the token system:

### `focus-visible` (`_focus.scss`, OUDS-specific)

Creates a double-ring focus indicator (outline + box-shadow) for accessibility compliance:

```scss
@mixin focus-visible(
  $color: var(--#{$prefix}color-border-focus),
  // CSS custom property → light/dark switch
  $width: $focus-visible-outer-width,
  // 3px
  $offset: $focus-visible-outer-offset,
  // 2px
  $box-width: $focus-visible-inner-width,
  // 2px
  $box-color: var(--#{$prefix}color-border-focus-inset) // CSS custom property
);
```

### `get-font-size` (`_fonts.scss`, OUDS-specific)

Sets responsive font-size, line-height, letter-spacing, and max-width from a single typography reference string:

```scss
@mixin get-font-size($font-size-ref: "display-large") {
  // Sets: font-size, line-height, letter-spacing, max-width
  // All via CSS custom properties: var(--bs-font-size-<ref>), var(--bs-font-line-height-<ref>), etc.
}
```

### `target-size` (`_target-size.scss`, OUDS-specific)

Ensures WCAG 2.2 minimum touch target size (44×44px) using an invisible pseudo-element overlay. Uses `$target-size` which defaults to `$ouds-size-min-interactive-area`.

### `border-radius` (`_border-radius.scss`)

Wraps `border-radius` with `$enable-rounded` check and value validation. **Must be used instead of the direct CSS property** (Stylelint enforced). Default value comes from `$ouds-border-radius-default`.

### `transition` (`_transition.scss`)

Wraps `transition` with `$enable-transitions` check and automatic `prefers-reduced-motion` support. **Must be used instead of the direct CSS property** (Stylelint enforced).

### `color-mode` (`_color-mode.scss`)

Generates light/dark mode selectors. Heavily used by token custom property files. Supports nested `[data-bs-theme="root"]` and `[data-bs-theme="root-inverted"]` for complex color-mode nesting.

---

## Token-aware functions

Defined in `scss/_functions.scss` (277 lines). Key functions for token manipulation:

| Function                           | Purpose                                         | Token relevance                                           |
| ---------------------------------- | ----------------------------------------------- | --------------------------------------------------------- |
| `px-to-rem($value)`                | Converts pixel values to rem (16px base)        | Used to convert pixel-based tokens to rem. OUDS-specific. |
| `strip-units($value)`              | Removes units from a value                      | Used in token conversion. OUDS-specific.                  |
| `escape-svg($string)`              | Escapes SVG data URIs for safe embedding        | Used for icon tokens in `_composite.scss`.                |
| `color-contrast($background, ...)` | Finds WCAG-compliant foreground color           | Accessibility-driven color selection.                     |
| `varify($list)`                    | Converts names to `var(--bs-<name>)` references | Generates CSS custom property references.                 |
| `negativify-map($map)`             | Creates negative versions of spacing maps       | Used for negative margin utilities from token maps.       |

Note: `_functions.scss` imports `mixins/_color-mode` at the top (line 6) because the color-mode mixin is needed during the functions phase, before the full mixin set is loaded.

---

## Brand import pipeline

Every brand's entry point (`ouds-web.scss`) follows this exact import sequence:

```scss
// 1-2. SCSS infrastructure
@import "@ouds/web-common/scss/config"; // $prefix, $color-mode-type, $ouds-root-selector
@import "@ouds/web-common/scss/functions"; // px-to-rem, escape-svg, color-contrast, etc.

// 3. ★ BRAND INJECTION POINT ★
@import "@ouds/web-<brand>/scss/tokens"; // _raw → _semantic → _custom-props → _composite → _component

// 4-8. Common framework
@import "@ouds/web-common/scss/variables"; // Bootstrap vars → OUDS tokens (2177 lines)
@import "@ouds/web-common/scss/variables-dark"; // Dark mode overrides (144 lines)
@import "@ouds/web-common/scss/maps"; // Sass maps from token variables (453 lines)
@import "@ouds/web-common/scss/mixins"; // 28 mixin files
@import "@ouds/web-common/scss/utilities"; // Utility class generator config

// 9-66. All layout & component imports (shared)
@import "@ouds/web-common/scss/root"; // CSS custom properties, @font-face
@import "@ouds/web-common/scss/reboot"; // Reset/normalize
// ... ~50 component SCSS imports ...
@import "@ouds/web-common/scss/utilities/api"; // Generates utility classes (must be last)
```

The **only line that differs** between brand entry points is step 3 (the token import). Everything else is shared via `@ouds/web-common`.

### Brand entry point variants

Each brand also provides 4 additional entry points for partial CSS output:

| File                      | Purpose                                                              |
| ------------------------- | -------------------------------------------------------------------- |
| `ouds-web.scss`           | Full CSS with all components                                         |
| `ouds-web-grid.scss`      | Grid-only CSS                                                        |
| `ouds-web-utilities.scss` | Utilities-only CSS                                                   |
| `ouds-web-reboot.scss`    | Reset/reboot CSS only                                                |
| `ouds-web-bootstrap.scss` | Sets `$enable-bootstrap-compatibility: true` then imports `ouds-web` |

### Bootstrap compatibility mode

`$enable-bootstrap-compatibility` (default: `false`) is a flag that, when `true`, enables legacy Bootstrap class names (`.btn-primary`, `.btn-secondary`, `.container`, `xxl` breakpoint alias, etc.). Activated via `ouds-web-bootstrap.scss`. Controlled by 37+ conditional blocks across the codebase.

---

## Multi-brand comparison

### What is SHARED across all brands (identical values)

| What                      | Where                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `$core-ouds-*` raw tokens | Borders, dimensions, grays, functional colors, opacities, elevations, font sizes/weights/line-heights, grid |
| Token file structure      | Same 7 files, same import order, same section markers                                                       |
| Elevation composites      | Same formula combining semantic sub-tokens                                                                  |
| Monospace font stack      | Same fallback chain                                                                                         |
| Component token **names** | Same structure — same 20 components, same variable names                                                    |
| Custom property structure | Same `@include color-mode()` pattern                                                                        |
| Non-color semantic tokens | Spacing, dimensions, font sizing, opacity, elevation all reference same `$core-ouds-*` values               |

### Orange vs Sosh: key differences

| Aspect                     | Orange                                                                                                   | Sosh                                                                                             |
| -------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Brand palette**          | `$core-orange-*`: Orange (11 shades), Warm Gray (10 shades), Decorative (amber, amethyst, emerald, etc.) | `$core-sosh-*`: Blue Duck/teal (24 shades), Citrine/yellow (13 shades), Magenta/pink (14 shades) |
| **Font**                   | "HelvNeueOrange" (3 weights)                                                                             | "Sosh" (2 weights: moderate, strong — no default weight)                                         |
| **Border radius**          | Default = 0px (sharp corners)                                                                            | Default = 4px (rounded corners), all radii shifted up one tier                                   |
| **Border width**           | Default = 1px                                                                                            | Default = 2px, all widths shifted up one tier                                                    |
| **Action colors (light)**  | Black (`$core-ouds-color-functional-black`)                                                              | Magenta (`$core-sosh-color-magenta-500`)                                                         |
| **Action colors (dark)**   | Light gray                                                                                               | Teal/Blue Duck                                                                                   |
| **Brand tiers**            | Primary only (Orange)                                                                                    | 3-tier: Primary (Magenta), Secondary (Blue Duck), Tertiary (Citrine)                             |
| **Backgrounds (dark)**     | Neutral gray (#141414)                                                                                   | Brand-tinted near-black (#061618, Blue Duck dark)                                                |
| **SVG icons**              | Square/angular geometries                                                                                | Rounded/circular geometries                                                                      |
| **Switch track**           | Malachite green                                                                                          | Blue Duck teal                                                                                   |
| **Extra CSS custom props** | —                                                                                                        | Brand-secondary, brand-tertiary borders/content/surfaces                                         |

### Orange vs Orange Compact: a pure density variant

Orange Compact shares the **exact same visual identity** as Orange (same palette, same font, same icons, same elevation, same border radii/widths). The differences are:

| Aspect                    | Orange                                   | Orange Compact                                                          | Mechanism                                      |
| ------------------------- | ---------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------- |
| **Dimensions**            | Standard scale                           | Every semantic dimension shifted down ~1 tier (4-32px smaller)          | `$ouds-dimension-*` maps to smaller raw tokens |
| **Typography**            | Standard scale                           | Display sizes ~halved on desktop; headings -6 to -12px; body -1 to -2px | `$ouds-font-size-*` maps to smaller raw tokens |
| **Responsive typography** | 3 distinct sizes (desktop/tablet/mobile) | Flattened: tablet and mobile often share the same size                  | Less responsive variation                      |
| **Min interactive area**  | 48px                                     | 40px                                                                    | `$ouds-size-min-interactive-area`              |
| **Colors**                | —                                        | Identical                                                               | No change                                      |
| **Icons**                 | —                                        | Identical (byte-for-byte)                                               | No change                                      |
| **Elevation**             | —                                        | Identical                                                               | No change                                      |

Orange Compact achieves compactness through **three coordinated mechanisms** at the semantic token layer:

1. **Systematic dimension downshift** — all semantic dimensions map to one-step-smaller raw tokens.
2. **Dramatically reduced typography scale** — especially for display and heading sizes.
3. **Smaller minimum interactive area** — 40px instead of 48px, rippling through every interactive component.

---

## How component SCSS consumes tokens

A component SCSS file (e.g., `scss/_buttons.scss`) consumes tokens through multiple channels:

### Direct component token references

```scss
.btn {
  min-width: $ouds-button-size-min-width;
  padding: $ouds-button-space-padding-block $ouds-button-space-padding-inline;
}
```

### CSS custom properties for colors

```scss
.btn-brand {
  color: $ouds-button-color-content-brand-enabled; // resolves to var(--bs-...)
  background-color: $ouds-button-color-bg-brand-enabled; // resolves to var(--bs-...)
}
```

### Semantic tokens for structural values

```scss
.btn {
  border-width: $ouds-border-width-none;
  @include border-radius($ouds-button-border-radius-default);
  @include transition($transition-focus);
}
```

### The token cascade for a single property

Example: How `border-radius` resolves for a button in the Orange brand:

```
Component:  $ouds-button-border-radius-default
    ↓ references
Semantic:   $ouds-border-radius-default
    ↓ references
Raw:        $core-ouds-border-radius-0
    ↓ resolves to
Value:      0px  (Orange)

Same chain for Sosh:
Raw:        $core-ouds-border-radius-100
    ↓ resolves to
Value:      4px  (Sosh)
```

### Component SCSS structure conventions

- **Component tokens** at the top: `$ouds-<component>-*` references.
- **CSS custom properties** for any color: `var(--#{$prefix}color-*)`.
- **Mixins** for `border-radius` and `transition` (never direct CSS properties).
- **`// OUDS mod:` comments** when modifying Bootstrap's original code.

---

## Token version management

Token files carry version information in their header comments:

```scss
// Raw primitive values
// Insertion of brand foundations
// OUDS Core tokens version 1.9.0
// Orange Core tokens version 1.2.0
// Orange System tokens version 2.3.0
```

| Version                  | Scope                                       | Shared?                     |
| ------------------------ | ------------------------------------------- | --------------------------- |
| **OUDS Core** (1.9.0)    | `$core-ouds-*` tokens — shared primitives   | Identical across all brands |
| **Brand Core** (1.2.0)   | `$core-<brand>-*` tokens — brand primitives | Per-brand                   |
| **Brand System** (2.3.0) | Semantic/component mappings                 | Per-brand                   |

All three versions are tracked in the auto-generated header comments of `_raw.scss`, `_semantic.scss`, and `_component.scss`. These versions come from the Style Dictionary pipeline and should not be edited manually.

---

## Quick reference: what to do and what to avoid

### When modifying component styles

```scss
// ✅ Use component tokens
padding: $ouds-button-space-padding-block;
min-width: $ouds-chip-size-min-height-interactive-area;

// ✅ Use CSS custom properties for colors
color: var(--#{$prefix}color-content-default);
background-color: var(--#{$prefix}color-bg-primary);

// ✅ Use semantic tokens for shared values
border-width: $ouds-border-width-default;
@include border-radius($ouds-border-radius-medium);

// ✅ Use mixins for border-radius and transition
@include border-radius($value);
@include transition(opacity 0.15s linear);

// ❌ Never hardcode values
padding: 16px;
color: #333;
border-radius: 4px;
transition: opacity 0.15s linear;

// ❌ Never use raw tokens in components
padding: $core-ouds-dimension-200;
color: $core-orange-color-orange-550;
```

### When working with token files

| Action                      | Allowed?               | Details                                    |
| --------------------------- | ---------------------- | ------------------------------------------ |
| Edit `_composite.scss`      | **Yes**                | Icons, elevation, font stacks, Sass maps   |
| Edit `_raw.scss`            | **Never**              | Auto-generated from Figma/Style Dictionary |
| Edit `_semantic.scss`       | **Never**              | Auto-generated                             |
| Edit `_component.scss`      | **Never**              | Auto-generated                             |
| Edit `_*-custom-props.scss` | **Never**              | Auto-generated                             |
| Add new component tokens    | Wait for generated PR  | Tokens originate in Figma                  |
| Add new icon SVGs           | Edit `_composite.scss` | This is the correct location               |
| Modify font stacks          | Edit `_composite.scss` | This is the correct location               |
| Modify elevation composites | Edit `_composite.scss` | This is the correct location               |

### When adding a new component

1. Check if component tokens exist in `packages/<brand>/scss/tokens/_component.scss` — search for `$ouds-<component>-*`.
2. If tokens exist, use them. If not, use semantic tokens (`$ouds-*`).
3. For colors that need light/dark switching, use `var(--#{$prefix}color-*)` CSS custom properties.
4. Add the component SCSS in `scss/_<component>.scss`.
5. Import it in each brand's `ouds-web.scss`.
6. Ensure the component works across **all brands** (the token abstraction should handle this automatically).

### Key files to consult

| What you need                       | Where to look                                       |
| ----------------------------------- | --------------------------------------------------- |
| Available component tokens          | `packages/<brand>/scss/tokens/_component.scss`      |
| Available semantic tokens           | `packages/<brand>/scss/tokens/_semantic.scss`       |
| Available CSS custom properties     | `packages/<brand>/scss/tokens/_*-custom-props.scss` |
| Bootstrap variable to token mapping | `scss/_variables.scss`                              |
| Dark mode overrides                 | `scss/_variables-dark.scss`                         |
| Sass maps for utilities             | `scss/_maps.scss`                                   |
| Icon SVGs and font stacks           | `packages/<brand>/scss/tokens/_composite.scss`      |
| CSS prefix and config               | `scss/_config.scss`                                 |

---

_This file provides detailed context for AI agents and LLMs working with the OUDS Web design token system. Keep it up to date when the token architecture, pipeline, or brand structure changes._
