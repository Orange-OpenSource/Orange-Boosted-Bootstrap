# Aspect Ratio

Maintain specific aspect ratios on elements using `.ratio-*` classes. Works on `<iframe>`, `<embed>`, `<video>`, `<object>`, or any standard HTML element.

## Available classes

- `.ratio-auto`
- `.ratio-1x1`
- `.ratio-4x3`
- `.ratio-16x9`
- `.ratio-21x9`
- `.ratio-9x16`

> **Not Bootstrap:** OUDS Web uses `.ratio-*` directly on the element (e.g., `class="ratio-16x9"`), not Bootstrap's wrapper pattern of `.ratio > .ratio-16x9`. An additional `.ratio-9x16` portrait ratio is available.

## Usage

Pair with width utilities as needed:

```html
<iframe
  class="w-100 ratio-16x9"
  src="https://www.youtube.com/embed/..."
  title="YouTube video"
  allowfullscreen
></iframe>
```

```html
<div class="w-25 ratio-1x1">
  <div>1x1</div>
</div>
<div class="w-50 ratio-4x3">
  <div>4x3</div>
</div>
<div class="w-75 ratio-16x9">
  <div>16x9</div>
</div>
```

## Sass customization

Modify the `$aspect-ratios` map in `_variables.scss` to add or change available ratios.
