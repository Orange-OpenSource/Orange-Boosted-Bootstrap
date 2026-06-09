# Buttons

Two types: **Button** and **Navigation button**. Both use base class `.btn`.

## Button

### Variants

```html
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-strong">Strong</button>
<button type="button" class="btn btn-brand">Brand</button>
<button type="button" class="btn btn-minimal">Minimal</button>
<button type="button" class="btn btn-negative">Negative</button>
```

### Colored background

Add `.btn-on-colored-bg` for use on colored backgrounds. Set appropriate `data-bs-theme` on the parent.

Never use `.btn-negative` or `.btn-brand` on colored backgrounds.

### Rounded corners (Orange brand)

Add `.use-rounded-corner-buttons` on a top container (e.g. `<body>`).

### With icon (text + icon)

Place SVG or font-icon inside the button. Mark icon `aria-hidden="true"`. Spacing is handled automatically.

```html
<button type="button" class="btn btn-default">
  <svg aria-hidden="true">
    <use xlink:href="path/to/ouds-web-sprite.svg#heart-empty" />
  </svg>
  Default
</button>
```

### Icon only

Add `.btn-icon`. Provide accessible name via `.visually-hidden` or `aria-label`.

```html
<button type="button" class="btn btn-icon btn-default">
  <svg aria-hidden="true">
    <use xlink:href="path/to/ouds-web-sprite.svg#heart-empty" />
  </svg>
  <span class="visually-hidden">Favourite</span>
</button>
```

### Disabled

- `<button>`: add `disabled` attribute
- `<a>`: add `aria-disabled="true"`, remove `href`

### Loading

Add `.loading-indeterminate` or `.loading-determinate` to the button. Include a loader SVG and a `<span role="status">` for screen readers. Set `disabled` while loading.

For determinate loading, set `--bs-btn-loading-time` CSS variable (e.g. `style="--bs-btn-loading-time: 5s;"`).

```html
<button type="button" class="btn btn-default loading-indeterminate" disabled>
  Download file
  <svg viewBox="0 0 40 40" class="loader" aria-hidden="true">
    <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
  </svg>
  <span role="status" class="visually-hidden">Downloading file</span>
</button>
```

### Skeleton

Wrap in `<div aria-busy="true" inert>`.

## Navigation button

Directional buttons for forward/backward navigation.

- `.btn-previous` — left arrow
- `.btn-next` — right arrow

```html
<a class="btn btn-default btn-previous" href="#">Previous</a>
<a class="btn btn-default btn-next" href="#">Next</a>
```

### Variants

Same as button except no `.btn-negative` for navigation buttons: `.btn-default`, `.btn-strong`, `.btn-brand`, `.btn-minimal`.

### Icon only navigation

Add `.btn-icon`:

```html
<a class="btn btn-next btn-icon btn-default" href="#">
  <span class="visually-hidden">Next</span>
</a>
```

### Disabled navigation

- `<a>`: `aria-disabled="true"`, remove `href`
- `<button>`: `disabled` attribute

### Colored background

Same as button — add `.btn-on-colored-bg`. No `.btn-brand` on colored backgrounds.

## Layout

### Block buttons

Use `.d-grid` and `.gap-small` for full-width stacked buttons.

### Responsive block

`.d-grid gap-small md:d-block` — stacked on mobile, inline from `md`.

## Accessibility

- Use `<button>` for actions, `<a>` for navigation
- Wrap navigation buttons in `<nav>` with `aria-label` when used for page navigation
- Always provide accessible name for icon-only buttons

> **Not Bootstrap:** Variants are `.btn-default`, `.btn-strong`, `.btn-brand`, `.btn-minimal`, `.btn-negative` (not `.btn-primary`, `.btn-secondary`, etc.). Navigation buttons (`.btn-previous`, `.btn-next`) are OUDS Web-specific. Loading states use `.loading-indeterminate`/`.loading-determinate` with SVG loader. Colored background support via `.btn-on-colored-bg`.
