---
name: 'token-system'
description: 'OUDS design token system rules and architecture. Use this skill when working with tokens, adding new component tokens, debugging undefined token errors, working on dark mode, editing _variables.scss, or touching any file in packages/*/scss/tokens/. Covers the 3-tier hierarchy (raw→semantic→component), CSS custom property bridge for dark mode, auto-generated file protections, import order, and the color-mode mixin. For deep architecture details, read references/architecture.md.'
---

# Token System

## Why tokens matter

The token system makes one codebase serve 3 brands. Component SCSS uses token variables → each brand provides different values → same SCSS produces different visual output. Breaking the token contract breaks multi-brand.

---

## Token hierarchy

```
Raw ($core-ouds-*)       → never use in components
  ↓
Semantic ($ouds-space-*) → use for non-color values
  ↓
Component ($ouds-btn-*)  → preferred when available
  ↓
CSS custom props (--bs-color-*) → use for ALL colors (dark mode)
```

---

## Rules

### 1. Component tokens first, then semantic

```scss
// ✓ component token
@include border-radius($ouds-button-border-radius-default);

// ✓ no component token → semantic fallback
@include border-radius($ouds-border-radius-default);
```

### 2. CSS custom properties for ALL colors

Colors come in light/dark pairs → exposed as CSS custom props → runtime switching.

```scss
// ✓
color: var(--#{$prefix}color-content-default);

// ✗ locked to one mode
color: $ouds-color-content-default-light;
```

### 3. Never use raw tokens

`$core-ouds-*`, `$core-orange-*`, `$core-sosh-*` — no semantic meaning, breaks on redesign.

### 4. Never edit auto-generated files

Read-only per brand: `_raw.scss`, `_semantic.scss`, `_component.scss`, `_*-custom-props.scss`

Only `_composite.scss` is hand-editable (elevation, fonts, SVG icons, Sass maps).

### 5. Import order is critical

```
_raw → _semantic → _semantic-colors-custom-props → _composite → _component-colors-custom-props → _component
```

### 6. New tokens → all 3 brands

Add to all: `packages/orange/`, `packages/sosh/`, `packages/orange-compact/`. Each brand can have different values. Temporary fallbacks go in `scss/_variables.scss` with `// TODO:`.

### 7. Use `color-mode()` for theme declarations

```scss
@include color-mode(light, true) {
  --#{$prefix}color-action-enabled: #{$ouds-color-action-enabled-light};
}
@include color-mode(dark) {
  --#{$prefix}color-action-enabled: #{$ouds-color-action-enabled-dark};
}
```

---

## Naming convention

| Layer | Pattern | Example |
|---|---|---|
| Raw | `$core-ouds-{cat}-{scale}` | `$core-ouds-border-radius-200` |
| Semantic | `$ouds-{cat}-{variant}` | `$ouds-border-radius-default` |
| Component | `$ouds-{comp}-{cat}-{variant}` | `$ouds-button-border-radius-default` |
| CSS prop | `--{$prefix}{cat}-{name}` | `--bs-color-action-enabled` |

---

## Deep reference

For the full pipeline (Figma → DTCG → Style Dictionary → SCSS), layer-by-layer explanation, and color flow diagrams, read `references/architecture.md` in this skill directory.
