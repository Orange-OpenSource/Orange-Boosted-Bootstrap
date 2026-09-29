---
name: 'multi-brand'
description: 'Multi-brand architecture for OUDS Web (Orange, Sosh, Orange Compact). Use this skill when working on files in packages/, when adding new tokens that need cross-brand sync, when you need to understand what is shared vs brand-specific, or when testing changes across brands. Covers the 3-brand structure, brand entry point import order, what to update in all brands, and how to test cross-brand.'
---

# Multi-Brand Architecture

## The 3 brands

| Brand | Package | Server | Visual trait |
|---|---|---|---|
| Orange | `@ouds/web-orange` | `:9001` | Sharp corners, HelvNeueOrange |
| Sosh | `@ouds/web-sosh` | `:9002` | Rounded corners, Sosh font, Magenta |
| Orange Compact | `@ouds/web-orange-compact` | `:9003` | Compact spacing, same as Orange |

**Key principle**: JavaScript is shared. Only CSS tokens differ per brand.

---

## Shared vs brand-specific

### Shared (modify once)

`scss/_*.scss`, `scss/mixins/`, `scss/_variables.scss`, `js/src/`, `js/tests/`, `site/`, `build/`

### Brand-specific (in each `packages/<brand>/`)

| File | Editable? |
|---|---|
| `scss/tokens/_raw.scss` | Never |
| `scss/tokens/_semantic.scss` | Never |
| `scss/tokens/_component.scss` | Never |
| `scss/tokens/_*-custom-props.scss` | Never |
| `scss/tokens/_composite.scss` | **Yes** |
| `scss/ouds-web.scss` | Yes |

---

## Do I update all brands?

| Change | All brands? |
|---|---|
| Edit shared `scss/_*.scss` with existing tokens | No ✓ |
| Add new token variable used in SCSS | **Yes** — all 3 |
| Edit `js/src/` | No (shared) ✓ |
| Edit one `_composite.scss` | Only if same change needed elsewhere |

---

## Brand entry point order

```scss
// packages/<brand>/scss/ouds-web.scss
@import "@ouds/web-common/scss/config";
@import "@ouds/web-common/scss/functions";
@import "@ouds/web-<brand>/scss/tokens";      // ← Brand tokens HERE
@import "@ouds/web-common/scss/variables";    // Maps OUDS → Bootstrap
@import "@ouds/web-common/scss/variables-dark";
@import "@ouds/web-common/scss/maps";
@import "@ouds/web-common/scss/mixins";
// ... component imports
```

---

## Testing cross-brand

```bash
npm run dist    # Builds all brand CSS
npm run start   # Starts 3 servers
```

For each brand check: light/dark mode, RTL, affected variants.
