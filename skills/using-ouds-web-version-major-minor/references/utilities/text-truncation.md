# Text truncation

Truncate long text with an ellipsis using `.text-truncate`. Requires `display: inline-block` or `display: block`.

## Usage

```html
<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    This text is quite long, and will be truncated once displayed.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  This text is quite long, and will be truncated once displayed.
</span>
```
