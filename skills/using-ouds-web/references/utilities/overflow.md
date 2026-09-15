# Overflow

Control how content overflows an element. Not responsive by default.

## Classes

### `overflow`

```html
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-visible">...</div>
<div class="overflow-scroll">...</div>
```

### `overflow-x`

```html
<div class="overflow-x-auto">...</div>
<div class="overflow-x-hidden">...</div>
<div class="overflow-x-visible">...</div>
<div class="overflow-x-scroll">...</div>
```

### `overflow-y`

```html
<div class="overflow-y-auto">...</div>
<div class="overflow-y-hidden">...</div>
<div class="overflow-y-visible">...</div>
<div class="overflow-y-scroll">...</div>
```

## Usage

Set width/height constraints on the element for overflow to take effect:

```html
<div
  class="overflow-auto"
  style="max-width: 260px; max-height: 100px;"
  tabindex="0"
>
  Scrollable content...
</div>
```

Add `tabindex="0"` on scrollable containers (`.overflow-auto`, `.overflow-scroll`) for keyboard accessibility.
