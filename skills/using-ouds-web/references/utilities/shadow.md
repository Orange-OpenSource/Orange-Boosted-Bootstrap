# Shadows

Add or remove box-shadow using semantic elevation classes.

> **Not Bootstrap:** OUDS Web uses semantic shadow names instead of Bootstrap's `.shadow-sm`, `.shadow`, `.shadow-lg`. Box-shadow styles are referred to as "elevation" in the design system.

## OUDS Web shadow classes

```html
<div class="shadow-none">No shadow</div>
<div class="shadow-elevated">Elevated shadow</div>
<div class="shadow-drag">Drag shadow</div>
<div class="shadow-emphasized">Emphasized shadow</div>
<div class="shadow-raised">Raised shadow</div>
<div class="shadow-sticky">Sticky shadow</div>
```

> **Breaking change (v1.4.0+):** `.shadow-default` has been removed in favor of `.shadow-elevated`.

## Bootstrap compatibility classes

Available only when Bootstrap compatibility is enabled:

```html
<div class="shadow-none">No shadow</div>
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Regular shadow</div>
<div class="shadow-lg">Larger shadow</div>
```
