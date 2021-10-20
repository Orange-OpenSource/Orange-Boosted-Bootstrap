---
layout: docs
title: Quantity selector
description: Form element used to select a number.
group: forms
toc: true
---

## Examples

Quantity selector is a form element used to select a number. The default version is the large version. To use the small version, use the contextual class `.quantity-selector-sm`.

You can specify a default value in the `value` attribute of your input.

Value will vary between the values define in the `min` and `max` attributes (negatives values are allowed).

The custom `data-bs-round` attribute will help you to define the number of digits to appear after the decimal point.

{{< example >}}
<form>
  <div class="mb-3">
    <label for="inputQuantitySelector1" class="form-label">Quantity selector large:</label>
    <div class="input-group quantity-selector w-100">
      <input type="number" id="inputQuantitySelector1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">
      <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector1" data-bs-step="down">
        <span class="visually-hidden">Step down</span>
      </button>
      <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector1" data-bs-step="up">
        <span class="visually-hidden">Step up</span>
      </button>
    </div>
    <div class="quantitySelectorHelp form-text">Lorem ipsum.</div>
  </div>
  <div class="mb-3">
    <label for="inputQuantitySelector2" class="form-label">Quantity selector small:</label>
    <div class="input-group quantity-selector quantity-selector-sm w-100">
      <input type="number" id="inputQuantitySelector2" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">
      <button type="button" class="btn btn-icon btn-secondary btn-sm" aria-describedby="inputQuantitySelector2" data-bs-step="down">
        <span class="visually-hidden">Step down</span>
      </button>
      <button type="button" class="btn btn-icon btn-secondary btn-sm" aria-describedby="inputQuantitySelector2" data-bs-step="up">
        <span class="visually-hidden">Step up</span>
      </button>
    </div>
    <div class="quantitySelectorHelp form-text">Lorem ipsum.</div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{{< /example >}}

## Disabled

Add the `disabled` boolean attribute on a select to give it a grayed out appearance and remove pointer events.

{{< example >}}
<form>
  <div class="mb-3">
    <label for="inputQuantitySelector3" class="form-label">Disabled large quantity selector:</label>
    <div class="input-group quantity-selector">
      <input type="number" id="inputQuantitySelector3" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector" disabled>
      <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector3" data-bs-step="down" disabled>
        <span class="visually-hidden">Step down</span>
      </button>
      <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector3" data-bs-step="up" disabled>
        <span class="visually-hidden">Step up</span>
      </button>
    </div>
    <div class="quantitySelectorHelp form-text">Lorem ipsum.</div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{{< /example >}}

## Sass

### Variables

For more details, please have a look at the exhaustive list of available variables:

{{< scss-docs name="quantity-selector" file="scss/_variables.scss" >}}