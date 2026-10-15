# Color

Text color utilities using `.text-*` classes, generated from OUDS design tokens.

> **Not Bootstrap:** OUDS Web replaces Bootstrap's `.text-primary`, `.text-secondary`, etc. with design-token-based classes like `.text-default`, `.text-muted`, `.text-brand-primary`, `.text-status-*`, etc.

## Recommended text utilities

Prefer these three for most use cases:

- `.text-brand-primary`
- `.text-default`
- `.text-muted`

Most other `.text-*` utilities are contextual — prefer using color modes (`data-bs-theme`) with background utilities instead.

## Accessibility

Always define `color`, `background-color`, and `font-size` together to meet WCAG 2.2 contrast standards.

- **Orange brand:** `.text-brand-primary` on light background (`#f15e00`) requires font size >= 24px (`.fs-ds`) or >= 19px bold (`.fs-hm` + `.fw-bold`). On dark background (`#ff7900`), any size is fine.
- **Large text:** >= 24px or >= 19px bold (`.fs-hl` and above, or `.fs-hm` bold and above)
- **Normal text:** everything smaller

## Usage with backgrounds

Pair `.text-*` with matching `.bg-*` for accessible combinations:

```html
<p class="text-default p-small">Default text</p>
<p class="text-muted p-small">Muted text</p>
<p class="text-brand-primary p-small">Brand primary text</p>
<p class="text-always-black bg-always-white p-small">Always black on white</p>
<p class="text-always-white bg-always-black p-small">Always white on black</p>
```

For "on-" variants, use with their matching background:

```html
<p class="bg-surface-brand-primary text-on-brand-primary p-small">
  On brand primary
</p>
<p class="bg-always-black text-always-on-black p-small">Always on black</p>
```

## On icons

See the icon component documentation for icon-specific color usage.

## Specificity

When contextual classes conflict with other selectors, wrap content in a `<div>` or semantic element with the desired class.
