# Divider

Visually separates content areas.

## Horizontal rules

Use `<hr />` when the separator has semantic meaning (topic change). For purely decorative dividers, use border utilities or `aria-hidden="true"`.

```html
<hr />
<div class="border-top border-default my-medium"></div>
```

## Vertical rules

Use `.vr` class for vertical dividers. They have `min-height: 1em` and scale in flex layouts.

```html
<div class="vr"></div>
```

## Color

Use border color utilities:

```html
<hr class="border-default" />
<div class="vr border-default"></div>
```

## Size (thickness)

Use border width utilities:

```html
<hr class="border-thin" />
<hr class="border-medium" />
<hr class="border-thick" />
<hr class="border-thicker" />
```

> **Not Bootstrap:** Color is set via border utilities (e.g. `border-default`) not text utilities. Thickness uses `.border-thin`, `.border-medium`, `.border-thick`, `.border-thicker` (not numeric border widths).
