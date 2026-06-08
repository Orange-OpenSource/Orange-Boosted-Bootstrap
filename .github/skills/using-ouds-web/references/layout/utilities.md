# Utilities for Layout

Quick reference for layout-related utilities.

## Display

Use display utilities to toggle `display` property responsively:

```html
<div class="d-none d-md-block">Hidden below md</div>
<div class="d-flex">Flexbox container</div>
<div class="d-sm-flex">Flexbox from sm up</div>
```

See: [Display utilities](../utilities/display.md)

## Flexbox

Add `display: flex` with `.d-flex` or responsive variants. Required to use flex utilities for sizing, alignment, spacing.

See: [Flex utilities](../utilities/flex.md)

## Margin and Padding

11-level spacing scale using OUDS design token names. Base unit: `$core-ouds-dimension-base` (4px).

```html
<div class="me-large">margin-right: large</div>
<div class="me-md-large">margin-right: large from md up</div>
```

See: [Spacing utilities](../utilities/spacing.md)

## Visibility

Toggle visibility without changing layout:

```html
<div class="invisible">Hidden but takes space</div>
<div class="visible">Visible</div>
```

See: [Visibility utilities](../utilities/visibility.md)
