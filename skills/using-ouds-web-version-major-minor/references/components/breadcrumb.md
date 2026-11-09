# Breadcrumb

Displays hierarchical navigation path. Uses standard `.breadcrumb` / `.breadcrumb-item` classes inside a `<nav>` with `aria-label`.

## Basic usage

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#" title="Home">Home</a></li>
    <li class="breadcrumb-item"><a href="#" title="Category">Category</a></li>
    <li class="breadcrumb-item active" aria-current="page">
      <span title="Current page">Current page</span>
    </li>
  </ol>
</nav>
```

## Key differences

- Add `title` attributes on each item
- Active (current) item uses a `<span>` with `title`, not bare text
- Breadcrumb never wraps; items are hidden based on available width; the final two items always show

## Avoiding truncation

Add `.flex-shrink-0` on a `<li>` to prevent that item from being truncated. The penultimate item has this by default.

> **Not Bootstrap:** Active item must use `<span title="...">` (not plain text). `title` attributes are strongly advised on all items. Items auto-hide on smaller viewports instead of wrapping.
