# Stacks

Flexbox shortcut helpers for vertical and horizontal layouts.

## Vertical stack

Use `.vstack` for full-width vertical layouts. Combine with `.gap-*` for spacing.

```html
<div class="vstack gap-large">
  <div>First item</div>
  <div>Second item</div>
  <div>Third item</div>
</div>
```

## Horizontal stack

Use `.hstack` for horizontal layouts. Items are vertically centered and take only necessary width.

```html
<div class="hstack gap-large">
  <div>First item</div>
  <div>Second item</div>
  <div>Third item</div>
</div>
```

### With auto margin spacer

```html
<div class="hstack gap-large">
  <div>First item</div>
  <div class="ms-auto">Second item</div>
  <div>Third item</div>
</div>
```

### With vertical rule divider

```html
<div class="hstack gap-large">
  <div>First item</div>
  <div class="ms-auto">Second item</div>
  <div class="vr"></div>
  <div>Third item</div>
</div>
```

## Examples

Stacked buttons:

```html
<div class="vstack gap-small md:col-5 mx-auto">
  <button type="button" class="btn btn-strong">Save changes</button>
  <button type="button" class="btn btn-default">Cancel</button>
</div>
```

Inline form actions:

```html
<div class="hstack gap-large">
  <button type="button" class="btn btn-strong">Submit</button>
  <div class="vr"></div>
  <button type="button" class="btn btn-negative">Reset</button>
</div>
```
