---
name: multi-brand
description: >
  Multi-brand architecture for OUDS Web's 3 brands (Orange, Sosh, Orange Compact).
  Covers what is shared vs brand-specific, when to update all brands, and how to
  test cross-brand changes. Applied when working on brand package files.
applyTo: "**/packages/**"
---

# Multi-Brand Architecture

## The 3 brands

OUDS Web serves 3 visual identities from one codebase. Only CSS tokens differ — JavaScript is 100% shared.

| Brand | Package | Dev server | Key visual trait |
|---|---|---|---|
| Orange | `@ouds/web-orange` | `:9001` | Sharp corners, HelvNeueOrange, Orange palette |
| Sosh | `@ouds/web-sosh` | `:9002` | Rounded corners, Sosh font, Magenta palette |
| Orange Compact | `@ouds/web-orange-compact` | `:9003` | Compact spacing, same as Orange otherwise |

Consumer installation: `@ouds/web-common` (JS) + `@ouds/web-<brand>` (CSS)

---

## Shared vs brand-specific

### Always shared (one change affects all brands)

| Location | Content |
|---|---|
| `scss/_*.scss` | All component SCSS (uses token variables) |
| `scss/mixins/` | All mixins |
| `scss/_variables.scss` | Bootstrap ↔ OUDS token bridge |
| `js/src/` | All JavaScript |
| `js/tests/` | All tests |
| `site/` | Documentation (brand routing is automatic) |
| `build/` | Build scripts |

### Brand-specific (exists in each `packages/<brand>/`)

| Location | Content | Editable? |
|---|---|---|
| `scss/tokens/_raw.scss` | Primitive values | Never |
| `scss/tokens/_semantic.scss` | Semantic aliases | Never |
| `scss/tokens/_component.scss` | Component tokens | Never |
| `scss/tokens/_*-custom-props.scss` | Color CSS props | Never |
| `scss/tokens/_composite.scss` | Elevation, fonts, icons | **Yes** |
| `scss/ouds-web.scss` | Brand entry point | Yes |
| `config.yml` | Brand metadata | Yes |

---

## Do I need to update all brands?

| Change type | All brands? |
|---|---|
| Edit `scss/_component.scss` with existing tokens | No ✓ |
| Create new component SCSS using existing tokens | No ✓ |
| Add a new token variable used in component SCSS | **Yes** — add to all 3 |
| Edit `js/src/` | No (shared) ✓ |
| Edit one brand's `_composite.scss` | Only if other brands need same change |
| Add doc content to `site/` | No (Astro auto-routes) ✓ |

---

## Brand entry point pattern

Every `ouds-web.scss` follows this import order — brand tokens are injected before `_variables.scss`:

```scss
@import "@ouds/web-common/scss/config";
@import "@ouds/web-common/scss/functions";
@import "@ouds/web-<brand>/scss/tokens";       // ← Brand tokens here
@import "@ouds/web-common/scss/variables";     // Maps OUDS → Bootstrap vars
@import "@ouds/web-common/scss/variables-dark";
@import "@ouds/web-common/scss/maps";
@import "@ouds/web-common/scss/mixins";
// ... component imports
```

---

## Testing cross-brand changes

After any change that could affect brands, verify all 3:

```bash
npm run dist    # Builds all brand CSS
npm run start   # Starts all 3 dev servers
```

For each brand, check:
- Light + dark mode (`data-bs-theme="dark"`)
- RTL if applicable (`dir="rtl"`)
- All affected component variants
