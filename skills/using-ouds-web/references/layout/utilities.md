# Utilities for Layout

Quick reference for layout-related utilities.

## Layout decision table

OUDS Web is a Bootstrap fork: it has both the 12-column grid (`.row`/`.col-*`) and a full layout utility layer (flex, stack, position, display...). Pick the right tool with this priority: **1. Grid, 2. Helpers, 3. Custom CSS.**

- **Grid (tier 1)** — use for the page/section's overall structure: major page regions, a repeating set of blocks (card list, gallery, form laid out in columns), anything that should reflow its column count per breakpoint. See [Grid](grid.md).
- **Helpers (tier 2)** — use to align/space a handful of elements *inside* a single component (icon + label, a row of buttons, centering one element, a sticky footer bar). Do not reach for `.row`/`.col-*` for this — see the nesting note in [Grid](grid.md#nesting).
- **Custom CSS (tier 3)** — only when neither of the above covers the need (e.g. `grid-template-columns`, a specific animation). Prefer Sass variable/map overrides over hardcoded values.

| Need                                      | Tier | Use                                                                                | Not this                                       |
| ------------------------------------------ | ---- | ------------------------------------------------------------------------------------ | ------------------------------------------------ |
| Page/section major regions or repeating column-based blocks (cards, gallery...) | 1 Grid | `.row` / `.col-*` (see [Grid](grid.md))                                              | `.d-flex`/`display:grid` custom layout, media queries |
| Form fields laid out in columns            | 1 Grid | `.row` / `.col-*`                                                                     | flex/grid custom CSS                             |
| Flex container (row/column) for a component | 2 Helper | `.d-flex`, `.flex-column`, `.flex-row`                                               | `style="display:flex"` / custom CSS               |
| Center content (horiz./vert.) within a component | 2 Helper | `.d-flex .justify-content-center .align-items-center`                          | `margin: 0 auto` + custom flex CSS                |
| Space a few items apart / between           | 2 Helper | `.justify-content-between`, `.justify-content-evenly`                               | manual `margin-left`/`margin-right`               |
| Gap between flex/grid children              | 2 Helper | `.gap-{token}`, `.row-gap-*`, `.column-gap-*`                                       | margins on children                               |
| Vertical/horizontal stack of items          | 2 Helper | `.vstack`, `.hstack` (+ `.gap-*`)                                                    | custom flex CSS, nested `.row`/`.col`             |
| Margin/padding of any kind                  | 2 Helper | `{m\|p}{side}-{token}` (e.g. `mt-large`, `px-small`)                                | pixel values in `style=` or custom CSS            |
| Width/height (relative, viewport)            | 2 Helper | `.w-*`, `.h-*`, `.vw-*`, `.vh-*`, `.mw-*`, `.mh-*`                                  | `style="width:...; height:..."`                   |
| Show/hide responsively                       | 2 Helper | `.d-none`, `{breakpoint}:d-block` (see [Display](../utilities/display.md))          | custom media queries                              |
| Sticky/fixed header or footer                | 2 Helper | `.sticky-top`, `.sticky-bottom`, `.fixed-top`, `.fixed-bottom`                      | `position: fixed/sticky` custom CSS               |
| Absolute centering / overlay                 | 2 Helper | `.position-absolute .top-50 .start-50 .translate-middle`                            | manual `transform`/`top`/`left` custom CSS        |
| Order of flex/grid items                     | 2 Helper | `.order-{0-5}`, `.order-first`, `.order-last`                                       | custom CSS `order` property                       |
| CSS Grid template with custom track sizes    | 3 Custom | `display: grid` + `grid-template-columns` (no utility equivalent)                    | —                                                  |

## Display

Use display utilities to toggle `display` property responsively:

```html
<div class="d-none md:d-block">Hidden below md</div>
<div class="d-flex">Flexbox container</div>
<div class="sm:d-flex">Flexbox from sm up</div>
```

See: [Display utilities](../utilities/display.md)

## Flexbox

Add `display: flex` with `.d-flex` or responsive variants. Required to use flex utilities for sizing, alignment, spacing.

Use for arrangement *within* a component, not as a substitute for the grid when laying out a page/section's major structure.

See: [Flex utilities](../utilities/flex.md)

## Margin and Padding

11-level spacing scale using OUDS design token names. Base unit: `$core-ouds-dimension-base` (4px).

```html
<div class="me-large">margin-right: large</div>
<div class="md:me-large">margin-right: large from md up</div>
```

See: [Spacing utilities](../utilities/spacing.md)

## Visibility

Toggle visibility without changing layout:

```html
<div class="invisible">Hidden but takes space</div>
<div class="visible">Visible</div>
```

See: [Visibility utilities](../utilities/visibility.md)

