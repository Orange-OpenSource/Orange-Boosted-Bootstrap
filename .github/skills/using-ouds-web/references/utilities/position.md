# Position

Configure element positioning. Not responsive (except sticky variants).

## Position values

```html
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
```

## Edge positioning

Format: `{property}-{position}` where property is `top`, `start`, `bottom`, `end` and position is `0`, `50`, `100`.

```html
<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  <div class="position-absolute top-0 end-0"></div>
  <div class="position-absolute top-50 start-50"></div>
  <div class="position-absolute bottom-0 end-0"></div>
</div>
```

## Centering with translate

Use `.translate-middle` to apply `translateX(-50%) translateY(-50%)` for absolute centering:

```html
<div class="position-absolute top-50 start-50 translate-middle"></div>
```

Use `.translate-middle-x` or `.translate-middle-y` for single-axis centering.

## Fixed and sticky helpers

```html
<div class="fixed-top">...</div>
<div class="fixed-bottom">...</div>
<div class="sticky-top">...</div>
<div class="sticky-bottom">...</div>
```

> **Not Bootstrap:** Responsive sticky uses OUDS Web breakpoints: `.sticky-{xs|sm|md|lg|xl|2xl|3xl}-top` and `.sticky-{xs|sm|md|lg|xl|2xl|3xl}-bottom`.

```html
<div class="sticky-md-top">Sticky top from MD breakpoint</div>
<div class="sticky-lg-bottom">Sticky bottom from LG breakpoint</div>
```
