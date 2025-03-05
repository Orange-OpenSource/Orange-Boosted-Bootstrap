---
layout: docs
title: Checks and radios
description: Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component.
group: forms
aliases:
  - "/docs/forms/checks/"
  - "/docs/0.2/forms/checks/"
  - "/docs/forms/checks-radios/"
toc: true
---

{{< example >}}
<input class="form-check-input" type="checkbox" value="" id="checkDefault-2">
<label for="checkDefault-2"></label>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDefault-1">
  <label for="checkDefault-1"></label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDefault0">
  <label class="form-check-label" for="checkDefault0"></label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDefault1">
  <label class="form-check-label" for="checkDefault1">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <label class="form-check-label ms-auto" for="checkDefault2">
    Default checkbox
  </label>
  <input class="form-check-input" type="checkbox" value="" id="checkDefault2">
</div>
<!-- Without control item -->
<div class="form-check">
  <div>
    <input class="form-check-input" type="checkbox" value="" id="checkDefault3">
  </div>
  <div>
    <label class="form-check-label ms-auto" for="checkDefault3">
      Default checkbox
    </label>
    <p class="mb-none">Helper text</p>
  </div>
  <div class="ms-auto">
    Obj
  </div>
</div>
<div class="form-check">
  <div>
    Obj
  </div>
  <div class="ms-auto">
    <label class="form-check-label ms-auto" for="checkDefault4">
      Default checkbox
    </label>
    <p class="mb-none">Helper text</p>
  </div>
  <div>
    <input class="form-check-input" type="checkbox" value="" id="checkDefault4">
  </div>
</div>
{{< /example >}}

## Approach

Browser default checkboxes and radios are replaced with the help of `.form-check`, a series of classes for both input types that improve the layout and behavior of their HTML elements, that provide greater customization and cross browser consistency. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

Structurally, our `<input>`s and `<label>`s are sibling elements as opposed to an `<input>` within a `<label>`. This is slightly more verbose as you must specify `id` and `for` attributes to relate the `<input>` and `<label>`. We use the future friendly child check selector (`:has`) for all our `<input>` states, like `:checked` or `:disabled`. When combined with the `.form-check-label` class, we can easily style the text for each item based on the `<input>`'s state.

`.form-check-label` extend their clickable area until a `position: relative;` is found in the hierarchy. It permits to have a more consistent approach, whatever the DOM is. Nonetheless, it means that none of the elements next to the label should be interactive.

`.form-check-input` are based on `svg`s that are controlled by design tokens directly.

Our checks use custom OUDS icons to indicate checked or indeterminate states.

## Checks

{{< bootstrap-compatibility false >}}
{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDefault">
  <label class="form-check-label" for="checkDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkChecked" checked>
  <label class="form-check-label" for="checkChecked">
    Checked checkbox
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

### Indeterminate

{{< bootstrap-compatibility false >}}
{{< markdown >}}
Checkboxes can utilize the `:indeterminate` pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).
{{< /markdown >}}

{{< example class="bd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkIndeterminate">
  <label class="form-check-label" for="checkIndeterminate">
    Indeterminate checkbox
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

### Disabled

{{< bootstrap-compatibility false >}}
{{< markdown >}}
Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.
{{< /markdown >}}

{{< example class="bd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkIndeterminateDisabled" disabled>
  <label class="form-check-label" for="checkIndeterminateDisabled">
    Disabled indeterminate checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDisabled" disabled>
  <label class="form-check-label" for="checkDisabled">
    Disabled checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkCheckedDisabled" checked disabled>
  <label class="form-check-label" for="checkCheckedDisabled">
    Disabled checked checkbox
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## Default (stacked)

{{< bootstrap-compatibility false >}}
{{< markdown >}}
By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with `.form-check`.
{{< /markdown >}}

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
  <label class="form-check-label" for="defaultCheck2">
    Disabled checkbox
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## Inline

{{< bootstrap-compatibility false >}}
{{< markdown >}}
Group checkboxes or radios on the same horizontal row by adding `.form-check-inline` to any `.form-check`.
{{< /markdown >}}

{{< example >}}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## Reverse

{{< bootstrap-compatibility false >}}
{{< markdown >}}
Put your checkboxes, radios, and switches on the opposite side with the `.form-check-reverse` modifier class.
{{< /markdown >}}

{{< example >}}
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck1">
  <label class="form-check-label" for="reverseCheck1">
    Reverse checkbox
  </label>
</div>
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck2" disabled>
  <label class="form-check-label" for="reverseCheck2">
    Disabled reverse checkbox
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## Without labels

Omit the wrapping `.form-check` for checkboxes and radios that have no label text. Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-label`). See the [forms overview accessibility]({{< docsref "/forms/overview#accessibility" >}}) section for details.

{{< callout warning >}}
They are commonly used to build custom component, and shouldn't be used alone. You might need to complete the behavior of this by adding a gray background on `:hover`, `:focus-visible` and `:active`, and handling the `:focus-visible` by yourself.
{{< /callout >}}

{{< example >}}
<div>
  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
</div>
{{< /example >}}

## CSS

### Sass variables

Variables for checks:

{{< scss-docs name="form-check-variables" file="scss/_variables.scss" >}}
