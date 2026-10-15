# Z-index

Low-level `z-index` utilities to control element stacking order. Requires a non-`static` position value.

## Classes

Values range from `-1` to `3`:

```html
<div class="z-n1 position-absolute">z-index: -1</div>
<div class="z-0 position-absolute">z-index: 0</div>
<div class="z-1 position-absolute">z-index: 1</div>
<div class="z-2 position-absolute">z-index: 2</div>
<div class="z-3 position-absolute">z-index: 3</div>
```

Always combine with a position utility (e.g., `.position-absolute`, `.position-relative`).
