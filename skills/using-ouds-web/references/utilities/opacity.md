# Opacity

Control element opacity using `.opacity-{value}` utilities.

> **Not Bootstrap:** OUDS Web uses semantic named tokens instead of Bootstrap's numeric `.opacity-0`, `.opacity-25`, `.opacity-50`, `.opacity-75`, `.opacity-100`.

## Common values

- `.opacity-opaque` — fully opaque
- `.opacity-strong`
- `.opacity-medium`
- `.opacity-weak`
- `.opacity-weaker`
- `.opacity-weakest`
- `.opacity-invisible` — fully transparent

```html
<div class="opacity-opaque">...</div>
<div class="opacity-strong">...</div>
<div class="opacity-medium">...</div>
<div class="opacity-weak">...</div>
<div class="opacity-weaker">...</div>
<div class="opacity-weakest">...</div>
<div class="opacity-invisible">...</div>
```

## Disabled state

Use `.opacity-disabled` on images or SVGs to visually indicate a disabled state:

```html
<svg class="bi opacity-disabled text-brand-primary" aria-hidden="true">
  <use xlink:href="/assets/img/ouds-web-sprite.svg#heart-empty" />
</svg>
```
