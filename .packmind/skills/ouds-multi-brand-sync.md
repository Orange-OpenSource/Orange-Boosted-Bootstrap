---
name: ouds-multi-brand-sync
description: >
  Knowledge about OUDS Web's 3-brand architecture (Orange, Sosh, Orange Compact).
  How brands share JS and SCSS structure but differentiate through tokens.
  When and how to propagate changes across all brand packages.
---

# Skill: OUDS Web Multi-Brand Architecture

## Purpose

This skill provides deep understanding of how the 3 brand packages (Orange, Sosh, Orange Compact) share code, where they diverge, and how to safely make changes that affect one or all brands.

---

## Brand Overview

OUDS Web serves **3 visual brands** from a single codebase:

| Brand | Package | Dev server | Key differentiator |
|---|---|---|---|
| Orange | `@ouds/web-orange` | `:9001/orange/` | Sharp corners, HelvNeueOrange font, Orange palette |
| Sosh | `@ouds/web-sosh` | `:9002/sosh/` | Rounded corners, Sosh font, Magenta palette |
| Orange Compact | `@ouds/web-orange-compact` | `:9003/orange-compact/` | Compact spacing, same palette as Orange |

**Key principle**: JavaScript is shared across all brands. Only CSS (via tokens) differs per brand.

```
Consumer installs:  @ouds/web-common (JS) + @ouds/web-<brand> (CSS)
```

---

## Shared vs. Brand-Specific Code

### Always shared (modify once)

| Location | What it contains |
|---|---|
| `scss/_*.scss` | All component SCSS (no brand values — uses token variables) |
| `scss/mixins/` | All mixins |
| `scss/_variables.scss` | Bootstrap-to-OUDS variable bridge |
| `scss/_variables-dark.scss` | Dark mode SCSS variable overrides |
| `js/src/` | All JavaScript components and utilities |
| `js/tests/` | All unit tests |
| `site/` | Astro documentation site (brand routes auto-generated) |
| `build/` | Build scripts |

### Brand-specific (exists in each `packages/<brand>/`)

| Location | What it contains |
|---|---|
| `packages/<brand>/scss/tokens/_raw.scss` | Brand primitive values — auto-generated |
| `packages/<brand>/scss/tokens/_semantic.scss` | Brand semantic aliases — auto-generated |
| `packages/<brand>/scss/tokens/_component.scss` | Brand component token values — auto-generated |
| `packages/<brand>/scss/tokens/_*-custom-props.scss` | Brand color CSS props — auto-generated |
| `packages/<brand>/scss/tokens/_composite.scss` | Brand elevation, fonts, icons — **manually edited** |
| `packages/<brand>/scss/ouds-web.scss` | Brand entry point (imports common + brand tokens) |
| `packages/<brand>/config.yml` | Brand metadata (name, CDN URLs, docs config) |
| `packages/<brand>/dist/css/` | Compiled brand CSS (do not commit) |

---

## The Brand Entry Point Pattern

Every brand's `ouds-web.scss` follows this exact import order:

```scss
// packages/orange/scss/ouds-web.scss (same pattern for sosh, orange-compact)

@import "@ouds/web-common/scss/config";              // CSS prefix, color-mode type
@import "@ouds/web-common/scss/functions";           // Sass functions
@import "@ouds/web-orange/scss/tokens";              // ← Brand tokens injected HERE
@import "@ouds/web-common/scss/variables";           // Bootstrap variables (mapped from OUDS tokens)
@import "@ouds/web-common/scss/variables-dark";      // Dark mode overrides
@import "@ouds/web-common/scss/maps";                // Sass maps
@import "@ouds/web-common/scss/mixins";              // Mixin index
// ... then all component imports
```

The brand tokens are injected **before** `_variables.scss` so that OUDS token variables are available when Bootstrap variables are mapped.

---

## What Differs Between Brands

### Visual differentiation (from token layer)

| Visual aspect | Orange | Sosh | Orange Compact |
|---|---|---|---|
| Default border-radius | 0px (sharp) | 4px (rounded) | 0px (sharp) |
| Default border-width | 1px | 2px | 1px |
| Primary accent color | Orange (#ff7900) | Magenta/Sosh | Orange (#ff7900) |
| Font family | HelvNeueOrange | Sosh | HelvNeueOrange |
| Spacing scale | Normal | Normal | Compact |
| Elevation style | Geometric | Organic | Geometric |

### Identical between brands

- Component structure (HTML class names, JS API, ARIA patterns)
- All SCSS logic (selectors, mixins, calc formulas)
- All JavaScript behavior
- RTL support
- Accessibility requirements

---

## Making Changes That Affect One Brand

### Composite token change (manual token)

Edit `packages/<brand>/scss/tokens/_composite.scss` only for that brand.

```scss
// packages/sosh/scss/tokens/_composite.scss — Sosh-specific icon
$ouds-icon-chevron-right: url("data:image/svg+xml;base64,...") !default;
// Other brands keep their own version
```

For changes that should apply to all brands, replicate to all 3 `_composite.scss` files.

### Bootstrap variable override for one brand

This is rare. If needed, create a brand-specific `_variables-override.scss` in `packages/<brand>/scss/` and import it in `ouds-web.scss` after the common `_variables.scss`.

---

## Making Changes That Affect All Brands

### New component SCSS (most common)

When you create or modify `scss/_my-component.scss`, it automatically applies to all brands because:
1. The component SCSS uses token variables (`$ouds-*`)
2. Each brand provides different values for those variables
3. No brand-specific action needed unless new component tokens are introduced

### New component tokens

If you add a **new token variable** referenced in component SCSS, you must add it to all 3 brand packages:

```scss
// Add to packages/orange/scss/tokens/_component.scss  (or _composite.scss)
$ouds-my-component-border-radius: $ouds-border-radius-default !default;

// Add to packages/sosh/scss/tokens/_component.scss
$ouds-my-component-border-radius: $ouds-border-radius-medium !default;   // Different value for Sosh!

// Add to packages/orange-compact/scss/tokens/_component.scss
$ouds-my-component-border-radius: $ouds-border-radius-default !default;
```

> **⚠️** Remember: `_component.scss` is auto-generated. Use `_composite.scss` if adding composite values, or use `_variables.scss` as a temporary bridge with a `// TODO:` note.

---

## Testing Multi-Brand Changes

Always build and verify all 3 brands after changes that could affect them:

```bash
# Build all brand CSS
npm run dist

# Start all dev servers in parallel
npm run start
# Orange:         http://localhost:9001/orange/
# Sosh:           http://localhost:9002/sosh/
# Orange Compact: http://localhost:9003/orange-compact/
```

For each brand, check:
- Light mode and dark mode (`data-bs-theme="dark"`)
- RTL if applicable (`dir="rtl"` on `<html>`)
- Relevant component variants

---

## Decision: Do I Need to Update All Brands?

| Change type | All brands needed? |
|---|---|
| Edit `scss/_component.scss` with existing tokens | No — tokens already exist in all brands ✅ |
| Create a new `scss/_component.scss` using existing tokens | No ✅ |
| Add a new token variable used in component SCSS | Yes — add to all 3 `_component.scss` (or use `_composite.scss` for composite) ⚠️ |
| Edit `js/src/` | No — JS is shared ✅ |
| Edit one brand's `_composite.scss` | Only if same change applies to other brands |
| Edit `scss/_variables.scss` with existing tokens | No ✅ |
| Add doc content to `site/src/content/docs/` | No — Astro handles brand routing ✅ |

For the full decision tree, use the `ouds-decision-routing` command → Tree 3.
