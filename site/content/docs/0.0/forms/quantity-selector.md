---
layout: docs
title: Quantity selector
description: Use our custom quantity selector in forms for incremental and decremental display of small numbers.
group: forms
aliases:
  - "/docs/forms/quantity-selector/"
toc: true
---

## Default

Quantity selector is a form element used to select a number.

**Please note that this component is suitable for incremental and decremental display of small numbers, i.e. numbers with 3-4 digits. We do not recommend using it with larger numbers.**

A default value can be specified with the input `value` attribute.

Value will vary between the values defined for the `min` and `max` attributes (negative value are allowed). `min` and `max` values are customizable.

`step` attribute is also customizable and define the interval between values.

{{< example >}}
<div class="quantity-selector">
  <input type="number" id="inputQuantitySelector" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">
  <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector" data-bs-step="down">
    <span class="visually-hidden">Step down</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector" data-bs-step="up">
    <span class="visually-hidden">Step up</span>
  </button>
</div>
{{< /example >}}

## Sizing

Set small size using the contextual class `.quantity-selector-sm`.

{{< example >}}
<div class="quantity-selector quantity-selector-sm">
  <input type="number" id="inputQuantitySelectorSm" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">
  <button type="button" class="btn btn-icon btn-outline-secondary btn-sm" aria-describedby="inputQuantitySelectorSm" data-bs-step="down">
    <span class="visually-hidden">Step down</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary btn-sm" aria-describedby="inputQuantitySelectorSm" data-bs-step="up">
    <span class="visually-hidden">Step up</span>
  </button>
</div>
{{< /example >}}

## Disabled

Add the `disabled` boolean attribute on quantity selector elements to give it a grayed out appearance and remove pointer events.

{{< example >}}
<div class="quantity-selector">
  <input type="number" id="inputQuantitySelectorDisabled" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector" disabled>
  <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelectorDisabled" data-bs-step="down" disabled>
    <span class="visually-hidden">Step down</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelectorDisabled" data-bs-step="up" disabled>
    <span class="visually-hidden">Step up</span>
  </button>
</div>
{{< /example >}}

## CSS

### Sass variables

For more details, please have a look at the exhaustive list of available variables:

{{< scss-docs name="quantity-selector" file="scss/_variables.scss" >}}

## Usage

### Via data attributes

The `data-bs-round` attribute will help you to define the number of digits to appear after the decimal point.

### Events

OUDS Web's quantity selector form component exposes the classic `change` event when the value of an input has been changed.

<table class="table">
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>change</code>
      </td>
      <td>
        Fires immediately when the value inside the input is modified.
      </td>
    </tr>
  </tbody>
</table>

```js
const myQuantitySelector = document.getElementById('inputQuantitySelector')
myQuantitySelector.addEventListener('change', () => {
  // do something...
})
```
