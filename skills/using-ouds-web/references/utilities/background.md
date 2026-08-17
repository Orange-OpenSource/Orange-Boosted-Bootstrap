# Background

Background utilities (`.bg-*`) are generated from the `$ouds-backgrounds` Sass map and respond to color modes.

> **Not Bootstrap:** OUDS Web replaces Bootstrap's `.bg-primary`, `.bg-secondary`, etc. with design-token-based classes like `.bg-surface-brand-primary`, `.bg-secondary`, `.bg-inverse-low`, etc.

## Classes that auto-set text color

These utilities automatically set an appropriate `color`:

- `.bg-surface-brand-primary`
- `.bg-surface-brand-secondary`, `.bg-surface-brand-tertiary`
- `.bg-surface-status-accent-emphasized`, `.bg-surface-status-accent-muted`
- `.bg-surface-status-positive-emphasized`, `.bg-surface-status-positive-muted`
- `.bg-surface-status-negative-emphasized`, `.bg-surface-status-negative-muted`
- `.bg-surface-status-warning-emphasized`, `.bg-surface-status-warning-muted`
- `.bg-surface-status-info-emphasized`, `.bg-surface-status-info-muted`
- `.bg-always-black`, `.bg-always-white`

## Classes that do NOT set text color

All other `.bg-*` utilities require one of:

- `data-bs-theme` attribute on a child element (preferred, especially when the element contains components)
- `.text-*` color utilities (only when the color pair is accessible in both light and dark modes)

## Using `data-bs-theme`

Use `data-bs-theme` on a child `<span>` or `<div>` to set the correct color mode:

```html
<p class="bg-inverse-high p-large fw-bold">
  <span data-bs-theme="dark">.bg-inverse-high</span>
</p>
```

Values: `"light"`, `"dark"`, `"root"`, `"root-inverted"`

## Opacity backgrounds

For opacifying backgrounds (e.g., making text readable over images). Prefer `.bg-secondary` when possible.

- `.bg-opacity-lower`
- `.bg-opacity-lowest`

## Colored backgrounds (restricted usage)

These backgrounds only support buttons, links, and text — component colors are removed for accessibility:

- `.bg-surface-brand-primary`
- `.bg-surface-status-accent-emphasized`
- `.bg-surface-status-warning-emphasized`
- `.bg-surface-status-negative-emphasized`
- `.bg-surface-status-positive-emphasized`
- `.bg-surface-status-info-emphasized`

## Multiple backgrounds

Layer two background colors by nesting two containers:

```html
<div class="bg-secondary">
  <div class="bg-surface-secondary p-large">
    Content with layered backgrounds
  </div>
</div>
```

## Other available classes

- `.bg-transparent`
