# Stretched link

Make an entire containing block clickable by stretching a nested link via CSS `::after` pseudo-element.

## Usage

Add `.stretched-link` to a link inside a `position: relative` container. The entire container becomes clickable.

```html
<div class="d-flex position-relative">
  <img src="..." class="flex-shrink-0 me-large" alt="..." />
  <div>
    <h5 class="mt-none">Custom component with stretched link</h5>
    <p>Some content here...</p>
    <a href="#" class="stretched-link">Go somewhere</a>
  </div>
</div>
```

## Requirements

- The containing block must have `position: relative` (add `.position-relative` if not default).
- Cannot be mixed with most table elements.
- Avoid multiple links/tap targets within the same stretched-link container.

## Containing block rules

The stretched link targets the nearest containing block. These CSS properties create a containing block:

- `position` value other than `static`
- `transform` or `perspective` other than `none`
- `will-change` of `transform` or `perspective`
- `filter` other than `none` (Firefox only)
