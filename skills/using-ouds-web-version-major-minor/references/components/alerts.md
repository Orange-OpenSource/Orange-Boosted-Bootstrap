# Alerts

Two types: **alert message** (`.alert-message`) and **inline alert** (`.alert` alone).

## Common structure

- Base class: `.alert` on a `<div>`
- `.alert-label` — mandatory title element
- `.alert-icon` — icon container

## Alert message

Add `.alert-message` to `.alert`. Uses extra layout classes:

- `.alert-container` — aligns content
- `.alert-text-container` — vertically distributes text
- `.alert-action-container` — wraps action link + close button
- `.alert-close-container` — wraps `.btn-close` only (helps with rounded corners)

```html
<div class="alert alert-message alert-negative">
  <div class="alert-icon"><p class="visually-hidden">Error</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Connection failed.</p>
    </div>
  </div>
</div>
```

### Functional variants

`.alert-negative`, `.alert-positive`, `.alert-info`, `.alert-warning` — do NOT add custom icons; icons are automatic.

### Non-functional variants

Default (no modifier) and `.alert-accent` — require a custom icon in `.alert-icon` (SVG, `<img>`, or `.icon`). Icon can be removed entirely for non-functional alerts (add `.visually-hidden` context in label).

### Custom icon (non-functional only)

- Place `<svg>`, `<img>`, or `.icon` inside `.alert-icon`
- Or set CSS custom property `--bs-alert-icon` on the `.alert`
- Or apply `mask-image` on `.alert-icon`

### Close button

Place inside `.alert-action-container`:

```html
<div class="alert-action-container">
  <div class="alert-close-container">
    <button class="btn-close" data-bs-dismiss="alert">
      <span class="visually-hidden">Close info alert</span>
    </button>
  </div>
</div>
```

### With action link

Add a `.link` element (`<a>` or `<button>`) either inside `.alert-container` after `.alert-text-container`, or inside `.alert-action-container`.

### Description

Add a `<p>` after `.alert-label` inside `.alert-text-container`.

### Rounded corners (Orange brand)

Add `.use-rounded-corner-alert` on a top container (e.g. `<body>`) — project-wide setting.

## Inline alert

Use `.alert` without `.alert-message`. Simpler structure — no `.alert-container` or `.alert-text-container`. No close button or action link.

```html
<div class="alert alert-info">
  <div class="alert-icon"></div>
  <p class="alert-label">We're processing your request.</p>
</div>
```

Non-functional inline alerts require a custom icon specified in `.alert-icon`.

## Skeleton

Wrap in `<div aria-busy="true" inert>`.

## Accessibility

- Wrap text in semantic elements (`<p>`, `<hn>`)
- Add `.visually-hidden` text in `.alert-icon` when title is not self-explanatory
- Label close buttons via `aria-labelledby`, `aria-label`, or `.visually-hidden` content
- For dynamic alerts: use `role="status"` (informational) or `role="alert"` (urgent action required)

## JavaScript

- Dismiss via `data-bs-dismiss="alert"` on close button
- Initialize: `new oudsWeb.Alert('#myAlert')`
- Methods: `close`, `dispose`, `getInstance`, `getOrCreateInstance`
- Events: `close.bs.alert`, `closed.bs.alert`

> **Not Bootstrap:** Alert variants are `.alert-negative`, `.alert-positive`, `.alert-info`, `.alert-warning`, `.alert-accent` (not `.alert-danger`, `.alert-success`, `.alert-primary`). Structure uses `.alert-message`, `.alert-container`, `.alert-text-container`, `.alert-action-container` layout classes. Icons are handled via `.alert-icon` container, not inline SVGs.
