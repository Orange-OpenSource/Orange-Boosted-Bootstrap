# Sizing

Set element width and height relative to parent or viewport.

## Width (relative to parent)

```html
<div class="w-25">Width 25%</div>
<div class="w-50">Width 50%</div>
<div class="w-75">Width 75%</div>
<div class="w-100">Width 100%</div>
<div class="w-auto">Width auto</div>
```

## Height (relative to parent)

```html
<div class="h-25">Height 25%</div>
<div class="h-50">Height 50%</div>
<div class="h-75">Height 75%</div>
<div class="h-100">Height 100%</div>
<div class="h-auto">Height auto</div>
```

## Max width / Max height

```html
<div class="mw-100">Max-width 100%</div>
<div class="mh-100">Max-height 100%</div>
<div class="mw-none">Max-width none</div>
```

> **Not Bootstrap:** `.mw-none` sets `max-width: none`, useful when font-size utilities set a `max-width` that needs to be removed.

## Viewport-relative

```html
<div class="min-vw-100">Min-width 100vw</div>
<div class="min-vh-100">Min-height 100vh</div>
<div class="vw-100">Width 100vw</div>
<div class="vh-100">Height 100vh</div>
```
