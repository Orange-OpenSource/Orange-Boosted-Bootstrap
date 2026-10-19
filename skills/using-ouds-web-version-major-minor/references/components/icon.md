# Icons

> **Not Bootstrap:** OUDS Web does not include an icon set by default. Orange uses the Solaris icon library (not open-source, Orange projects only). Icons are rendered via SVG sprites, inline SVGs, icon fonts, or CSS mask images.

## SVG Sprite (preferred method)

Use `<svg>` with `<use>` referencing a sprite file. Require `fill="currentColor"` on the `<symbol>` to enable color changes via CSS.

```html
<svg width="3rem" height="3rem" aria-hidden="true">
  <use xlink:href="/path/to/sprite.svg#icon-name" />
</svg>
```

Preload the sprite in `<head>`:

```html
<link
  rel="preload"
  href="/path/to/sprite.svg"
  as="image"
  type="image/svg+xml"
/>
```

## Icon Font

Use for projects with many icons (>20). Cannot render multicolor icons.

```html
<span class="si si-settings" aria-hidden="true" style="font-size: 3rem"></span>
```

## Coloring

- Use color utility classes: `.text-brand-primary`, `.text-disabled`, `.text-status-positive`, etc.
- Or CSS variables: `color: var(--bs-color-content-brand-primary)`.

### Functional icon colors

| Utility                 | CSS Variable                                                                                                      | Usage                    |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `.text-status-accent`   | `--bs-color-content-status-accent`                                                                                | Highlight/attention      |
| `.text-status-info`     | `--bs-color-content-status-info`                                                                                  | Informational feedback   |
| `.text-status-positive` | `--bs-color-content-status-positive`                                                                              | Positive/confirmation    |
| N/A                     | `--bs-icon-color-content-status-warning-external-shape` / `--bs-icon-color-content-status-warning-internal-shape` | Warning (two-color icon) |
| `.text-status-negative` | `--bs-color-content-status-negative`                                                                              | Negative/error           |

### Accessible warning icon

A special two-color warning icon is provided for accessibility contrast. Use SVG symbol `#alert-warning-accessible` from the sprite. Cannot be rendered by a web font.

```html
<svg class="decorative-small-icon" aria-hidden="true">
  <use xlink:href="/path/to/sprite.svg#alert-warning-accessible" />
</svg>
```

## Size Classes

> **Not Bootstrap:** OUDS Web provides its own icon sizing system tied to typography tokens, not Bootstrap's sizing.

### With headings (responsive)

Match icon size to heading level. Pattern: `.{prefix}-{size}-icon`

| Heading             | Prefix | Example classes                                          |
| ------------------- | ------ | -------------------------------------------------------- |
| h1 (heading-xlarge) | `hxl`  | `.hxl-large-icon`, `.hxl-medium-icon`, `.hxl-small-icon` |
| h2 (heading-large)  | `hl`   | `.hl-large-icon`, `.hl-medium-icon`, `.hl-small-icon`    |
| h3 (heading-medium) | `hm`   | `.hm-large-icon`, `.hm-medium-icon`, `.hm-small-icon`    |
| h4 (heading-small)  | `hs`   | `.hs-large-icon`, `.hs-medium-icon`, `.hs-small-icon`    |
| h5 (body-large)     | `bl`   | `.bl-large-icon`, `.bl-medium-icon`, `.bl-small-icon`    |
| h6 (body-medium)    | `bm`   | `.bm-large-icon`, `.bm-medium-icon`, `.bm-small-icon`    |

```html
<div class="d-flex align-items-center">
  <svg
    class="hxl-large-icon me-scaled-small"
    fill="currentColor"
    aria-hidden="true"
  >
    <use xlink:href="/path/to/sprite.svg#icon-name" />
  </svg>
  <h1 class="mb-none">H1 with large icon</h1>
</div>
```

### With body text (responsive)

| Text                  | Prefix | Classes                                               |
| --------------------- | ------ | ----------------------------------------------------- |
| .lead / body-large    | `bl`   | `.bl-large-icon`, `.bl-medium-icon`, `.bl-small-icon` |
| default / body-medium | `bm`   | `.bm-large-icon`, `.bm-medium-icon`, `.bm-small-icon` |
| .small / body-small   | `bs`   | `.bs-large-icon`, `.bs-medium-icon`, `.bs-small-icon` |

### Decorative (not responsive)

Fixed-size icons using `.decorative-{size}-icon`:

- `.decorative-2xlarge-icon`
- `.decorative-xlarge-icon`
- `.decorative-large-icon`
- `.decorative-medium-icon`
- `.decorative-small-icon`
- `.decorative-xsmall-icon`
- `.decorative-2xsmall-icon`
- `.decorative-3xsmall-icon`
- `.decorative-4xsmall-icon`

Do not use icons with `.display-*` font sizes.

## Icon placement with text

### Centered on text block (default)

```html
<div class="d-flex align-items-center">
  <svg
    class="bm-large-icon me-scaled-small"
    fill="currentColor"
    aria-hidden="true"
  >
    <use xlink:href="/path/to/sprite.svg#icon-name" />
  </svg>
  <p class="mb-none">Paragraph text</p>
</div>
```

### Above text block

Place the icon as a block element above the heading/paragraph without the flex container.

## Accessibility

- **Decorative icons:** Add `aria-hidden="true"` on `<svg>` or `<span>`, or empty `alt=""` on `<img>`.
- **Meaningful icons** (no visible text): Keep icon hidden, add `.visually-hidden` label text or `aria-label` on the interactive parent.

```html
<button type="button" class="btn btn-icon btn-default">
  <svg aria-hidden="true">
    <use xlink:href="/path/to/sprite.svg#trash" />
  </svg>
  <span class="visually-hidden">Delete</span>
</button>
```

Use `.overflow-visible` on SVGs that appear cropped.
