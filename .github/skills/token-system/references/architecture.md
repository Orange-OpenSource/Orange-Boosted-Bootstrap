# Token Architecture — Deep Reference

This document explains *how* and *why* the OUDS token system works. Read it when you need to understand the token pipeline, the dark mode mechanism, or when debugging token-related issues.

---

## Generation Pipeline

Tokens are never manually authored (except composites). They follow this pipeline:

```
Figma (design decisions)
  → DTCG export (Design Token Community Group standard JSON)
  → Style Dictionary transformer (per-brand configuration)
  → SCSS files (one set per brand)
  → PR on GitHub
  → Merged to main
```

### Generated files per brand (5 files, all read-only)

| File | Content |
|---|---|
| `_raw.scss` | Primitive values (colors, dimensions, border units) |
| `_semantic.scss` | Meaningful aliases mapping raw → design intent |
| `_component.scss` | Per-component tokens referencing semantic tokens |
| `_semantic-colors-custom-props.scss` | Light/dark CSS custom properties for semantic colors |
| `_component-colors-custom-props.scss` | Light/dark CSS custom properties for component colors |

### Manually maintained (1 file per brand)

`_composite.scss` — contains values Style Dictionary can't express in DTCG format:
- Multi-layer box-shadows (elevation)
- Font-family stack strings
- Embedded SVG icon data URIs
- Sass maps

---

## Layer Hierarchy (6 layers)

```
Layer 1: Raw tokens          $core-ouds-*, $core-orange-*, $core-sosh-*
               ↓
Layer 2: Semantic tokens     $ouds-{category}-{variant}
               ↓
Layer 3: Composite tokens    $ouds-{name} — in _composite.scss
               ↓
Layer 4: CSS custom props    --bs-color-* — the dark mode bridge
               ↓
Layer 5: Component tokens    $ouds-{component}-{category}-{variant}
               ↓
Layer 6: Bootstrap variables $btn-*, $card-*, $modal-* — in scss/_variables.scss
```

### Layer 1: Raw tokens

- Prefix: `$core-ouds-*` (shared), `$core-orange-*`, `$core-sosh-*` (brand-specific)
- Use a base-multiplier pattern: `$core-ouds-border-base: 4px`, `$core-ouds-border-radius-200: $core-ouds-border-base * 2`
- Never use in components — they have no semantic meaning

### Layer 2: Semantic tokens

- Prefix: `$ouds-{category}-{variant}`
- Provide design intent: `$ouds-border-radius-default`, `$ouds-space-padding-block-medium`
- Color tokens come in light/dark pairs: `$ouds-color-action-enabled-light` / `$ouds-color-action-enabled-dark`
- Use in components for non-color values (spacing, radius, border-width)

### Layer 3: Composite tokens

- Defined in `_composite.scss` only
- Elevation: `$ouds-elevation-raised: 0 2px 4px #{rgba($ouds-elevation-color-raised, 0.12)} !default`
- Font stacks: `$ouds-font-family-brand: "Helvetica Neue", Helvetica, Arial, sans-serif !default`
- Icons: SVG data URIs

### Layer 4: CSS Custom Properties (the dark mode bridge)

This is the most architecturally important layer. Color semantic tokens come as SCSS variables in light/dark pairs. The `_semantic-colors-custom-props.scss` file:

1. Declares CSS custom properties for light and dark modes
2. **Redefines the SCSS variable** to point to the CSS custom property

```scss
// Step 1: CSS custom properties with mode-specific values
@include color-mode(light, true) {
  --bs-color-action-enabled: #{$ouds-color-action-enabled-light};  // → #000000
}
@include color-mode(dark) {
  --bs-color-action-enabled: #{$ouds-color-action-enabled-dark};   // → #e0e0e0
}

// Step 2: SCSS variable now points to the CSS custom property
$ouds-color-action-enabled: var(--bs-color-action-enabled) !default;
```

After this redefinition, any SCSS that uses `$ouds-color-action-enabled` compiles to `var(--bs-color-action-enabled)` in output CSS — enabling runtime theme switching without recompiling Sass.

### Layer 5: Component tokens

- Reference semantic tokens (which for colors now resolve to `var()`)
- Result: component tokens with colors also output `var()` in compiled CSS

```scss
// In _component.scss:
$ouds-button-color-content-default-enabled: $ouds-color-action-enabled !default;
// ↑ At this point = var(--bs-color-action-enabled)
```

### Layer 6: Bootstrap variable bridge

`scss/_variables.scss` maps OUDS tokens to Bootstrap's classical variable names:

```scss
$btn-border-radius: $ouds-button-border-radius-default !default;
$btn-color: $ouds-button-color-content-default-enabled !default;
// ↑ = var(--bs-color-action-enabled)
```

---

## Color Token Flow (visual)

```
Non-color (e.g., border-radius):
  $core-ouds-border-radius-100 (4px)
    → $ouds-border-radius-default
    → $ouds-button-border-radius-default
    → $btn-border-radius
    → CSS output: border-radius: 4px (static value)

Color (e.g., button text):
  $core-ouds-color-functional-black (#000)
    → $ouds-color-action-enabled-light = #000
  $core-ouds-color-functional-gray-light-160 (#e0e0e0)
    → $ouds-color-action-enabled-dark = #e0e0e0

  ↓ CSS custom property bridge:
  --bs-color-action-enabled: #000  (light mode)
  --bs-color-action-enabled: #e0e0e0  (dark mode)
  $ouds-color-action-enabled = var(--bs-color-action-enabled)  ← SCSS var redefined

  ↓ Component token:
  $ouds-button-color-content-default-enabled = var(--bs-color-action-enabled)

  ↓ Bootstrap var:
  $btn-color = var(--bs-color-action-enabled)

  ↓ Compiled CSS:
  --bs-btn-color: var(--bs-color-action-enabled);  → resolves at runtime
```

---

## Import Order (Critical)

In `packages/<brand>/scss/tokens/_index.scss`:

```scss
@import "raw";                           // 1. Primitive values
@import "semantic";                      // 2. Aliases (references raw)
@import "semantic-colors-custom-props";  // 3. CSS custom props + SCSS redefinitions
@import "composite";                     // 4. Uses redefined vars (var() for colors)
@import "component-colors-custom-props"; // 5. Component color custom props
@import "component";                     // 6. Component tokens (references all above)
```

Order matters because `_composite.scss` uses the redefined `$ouds-color-*` variables (now pointing to `var()`), so it must come after `_semantic-colors-custom-props.scss`.

---

## Token Categories

| Category | Semantic prefix | CSS custom prop? | Notes |
|---|---|---|---|
| Spacing | `$ouds-space-*` | No (static) | padding-block, padding-inline, gap, inset, scaled |
| Border radius | `$ouds-border-radius-*` | No (static) | default, small, medium, large, pill |
| Border width | `$ouds-border-width-*` | No (static) | default (1px), medium (2px), thick (4px) |
| Color | `$ouds-color-*-light/dark` | Yes (`--bs-color-*`) | action, bg, border, content, overlay, surface |
| Typography | `$ouds-font-*` | No (static) | family, size, weight, line-height |
| Elevation | `$ouds-elevation-*` | Yes (`--bs-elevation-*`) | In `_composite.scss` |
| Opacity | `$ouds-opacity-*` | No | disabled, weak, strong |
| Grid | `$ouds-grid-*` | No | per-breakpoint columns, gap, margin |
