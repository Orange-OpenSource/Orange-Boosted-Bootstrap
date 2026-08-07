# Badges

Three types: **Badge** (dot), **Badge - Count** (number), **Badge - Icon** (with icon). All share base class `.badge`.

## Badge (dot)

Color-only indicator with no text/icon. Always add `.visually-hidden` text.

```html
<p class="badge"><span class="visually-hidden">Beware</span></p>
```

### Status variants

- Non-functional: `.badge-neutral`, `.badge-accent`
- Functional: `.badge-positive`, `.badge-info`, `.badge-warning`, default (no modifier = negative)

### Sizes

Four sizes. Default is medium.

`.badge-xsmall`, `.badge-small`, (default medium), `.badge-large`

### Disabled

Add `.badge-disabled`.

## Badge - Count

Shows a number. Add `.badge-count`.

```html
<p class="badge badge-count">1<span class="visually-hidden">error</span></p>
```

### Status variants

Same as badge: `.badge-neutral`, `.badge-accent`, `.badge-positive`, `.badge-info`, `.badge-warning`, default.

### Sizes

Two sizes: default medium, `.badge-large`.

### Disabled

Add `.badge-disabled`.

## Badge - Icon

Shows an icon. Add icon element inside `.badge`.

- Functional: use `.badge-status-icon` span (auto icon per status)
- Non-functional: use `<svg class="badge-icon">` or `<span class="badge-icon si si-settings">`

```html
<p class="badge">
  <span class="badge-status-icon"></span>
  <span class="visually-hidden">Beware</span>
</p>

<p class="badge badge-neutral">
  <svg class="badge-icon" aria-hidden="true">
    <use xlink:href="path/to/ouds-web-sprite.svg#heart-empty" />
  </svg>
  <span class="visually-hidden">Favourite</span>
</p>
```

### Sizes

Two sizes: default medium, `.badge-large`.

### Disabled

Add `.badge-disabled`.

## Positioning

Use utility classes to position badges on buttons:

```html
<button type="button" class="btn btn-default position-relative">
  Inbox
  <span
    class="position-absolute top-0 start-100 translate-middle badge badge-count badge-info"
  >
    +99
    <span class="visually-hidden">New emails</span>
  </span>
</button>
```

## Accessibility

- Always add `.visually-hidden` text to describe the badge's meaning
- Functional badges should not be combined (colorblind users cannot differentiate); prefer badge-icon variant for distinction

> **Not Bootstrap:** Variants are `.badge-neutral`, `.badge-accent`, `.badge-positive`, `.badge-info`, `.badge-warning` (not `.bg-danger`, `.text-bg-*`). Sizes use `.badge-xsmall`/`.badge-small`/`.badge-large` (not `.rounded-pill`). Count badges use `.badge-count`. Icon badges use `.badge-status-icon` or `.badge-icon`. Disabled state uses `.badge-disabled`.
