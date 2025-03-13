---
layout: docs
title: Checkbox
description: Create consistent cross-browser and cross-device checkboxes.
group: forms
aliases:
  - "/docs/forms/checks/"
  - "/docs/0.2/forms/checks/"
  - "/docs/forms/checks-radios/"
  - "/docs/forms/checkbox"
toc: true
---

{{< callout info >}}
You can find here the [OUDS Checkbox design guidelines](https://unified-design-system.orange.com/472794e18/p/23f1c1-checkbox).
{{< /callout >}}

## Basic example

{{< example >}}
<div class="checkbox-item">
  <div class="checkbox-item-indicator-container">
    <input class="checkbox-indicator" type="checkbox" value="" id="checkboxDefault">
  </div>
  <div class="checkbox-item-text">
    <label class="checkbox-label" for="checkboxDefault">Label</label>
  </div>
</div>
<div class="checkbox-item checkbox-item-divider">
  <div class="checkbox-item-indicator-container">
    <input class="checkbox-indicator" type="checkbox" value="" id="checkboxFullOption" checked>
  </div>
  <div class="checkbox-item-text">
    <label class="checkbox-label" for="checkboxFullOption">Label</label>
    <p class="checkbox-helper">Helper text</p>
  </div>
  <div class="checkbox-item-icon-container">
    <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
    </svg>
  </div>
</div>
{{< /example >}}

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

## Approach

Browser default checkboxes are replaced with the help of `.checkbox-indicator`. Checkboxes are for selecting one or several options in a list.

We use the future friendly child check selector (`:has`) for all our `<input>` states, like `:invalid` or `:disabled`. When combined with the `.checkbox-label` class, we can easily style the text for each item based on the `<input>`'s state.

`.checkbox-item-indicator-container` and `.checkbox-item-icon-container` are containers to better control the position of the `.checkbox-indicator` and the icon.

`.checkbox-label` extend their clickable area until a `.checkbox-item`, `.checkbox-standalone` or a `position: relative;` is found in the page hierarchy. It permits to have a more consistent approach, whatever the DOM is. Nonetheless, it means that none of the elements next to the label should be interactive.

`.checkbox-indicator` are based on SVGs that are controlled by design tokens directly. These SVGs, that indicate unchecked, checked or indeterminate states, are not Solaris icons but custom OUDS icons that are provided in CSS.

You can mix almost all the variants that we provide in the documentation.

## Variants

### Divider

You can display a divider by adding `.checkbox-item-divider` to a `.checkbox-item`.

{{< example >}}
<div class="checkbox-item checkbox-item-divider">
  <div class="checkbox-item-indicator-container">
    <input class="checkbox-indicator" type="checkbox" value="" id="checkboxDivider">
  </div>
  <div class="checkbox-item-text">
    <label class="checkbox-label" for="checkboxDivider">Label</label>
  </div>
</div>
<div class="checkbox-item checkbox-item-divider">
  <div class="checkbox-item-indicator-container">
    <input class="checkbox-indicator" type="checkbox" value="" id="checkboxDivider2">
  </div>
  <div class="checkbox-item-text">
    <label class="checkbox-label" for="checkboxDivider2">Label</label>
  </div>
</div>
{{< /example >}}

### Icon

You can display an icon by adding `.checkbox-item-icon-container` with an icon (SVG or font-icon most likely) inside as a child of a `.checkbox-item`.

{{< example >}}
<div class="checkbox-item">
  <div class="checkbox-item-indicator-container">
    <input class="checkbox-indicator" type="checkbox" value="" id="checkboxWithSVG">
  </div>
  <div class="checkbox-item-text">
    <label class="checkbox-label" for="checkboxWithSVG">Label</label>
  </div>
  <div class="checkbox-item-icon-container">
    <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
    </svg>
  </div>
</div>
<div class="checkbox-item">
  <div class="checkbox-item-indicator-container">
    <input class="checkbox-indicator" type="checkbox" value="" id="checkboxWithIconFont">
  </div>
  <div class="checkbox-item-text">
    <label class="checkbox-label" for="checkboxWithIconFont">Label</label>
  </div>
  <div class="checkbox-item-icon-container">
    <span class="icon si si-settings" aria-hidden="true"></span>
  </div>
</div>
{{< /example >}}

### Helper text

You can display an helper text by adding a `.checkbox-helper` as a sibling of a `.checkbox-label`.
<!-- TODO: Check for a11y and AT text -->
{{< example >}}
<div class="checkbox-item">
  <div class="checkbox-item-indicator-container">
    <input class="checkbox-indicator" type="checkbox" value="" id="checkboxHelperText">
  </div>
  <div class="checkbox-item-text">
    <label class="checkbox-label" for="checkboxHelperText">Label</label>
    <p class="checkbox-helper">Helper Text</p>
  </div>
</div>
{{< /example >}}

### Inverse

You can reverse the component by adding `.checkbox-item-inverse` to a `.checkbox-item`.

{{< example >}}
<div class="checkbox-item checkbox-item-inverse">
  <div class="checkbox-item-indicator-container">
    <input class="checkbox-indicator" type="checkbox" value="" id="checkboxInverse">
  </div>
  <div class="checkbox-item-text">
    <label class="checkbox-label" for="checkboxInverse">Label</label>
  </div>
</div>
{{< /example >}}

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

## States

### Indeterminate

Often used when the checkbox represents a partial selection. For example, in a nested (hierarchical) list, a parent checkbox can be indeterminate if some but not all sub-options are checked. This is not a state the user directly selects but is calculated by the system.

Checkboxes can utilize the `:indeterminate` pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).

{{< callout info >}}
Indeterminate state can be combined with disabled and error states.
{{< /callout >}}

{{< example class="bd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="checkbox-item">
  <div class="checkbox-item-indicator-container">
    <input class="checkbox-indicator" type="checkbox" value="" id="checkboxIndeterminate">
  </div>
  <div class="checkbox-item-text">
    <label class="checkbox-label" for="checkboxIndeterminate">Label</label>
  </div>
</div>
{{< /example >}}

Here is the associated Javascript to set the indeterminate state.

```javascript
const checkbox = document.getElementById('checkbox')

checkbox.indeterminate = true
```

{{< bootstrap-compatibility false >}}
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

Add the `disabled` attribute and the associated `<label>` are automatically styled to match with a lighter color to help indicate the input's state.

{{< example class="bd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="checkbox-item">
  <div class="checkbox-item-indicator-container">
    <input class="checkbox-indicator" type="checkbox" value="" id="checkboxIndeterminateDisabled" disabled>
  </div>
  <div class="checkbox-item-text">
    <label class="checkbox-label" for="checkboxIndeterminateDisabled">Label</label>
  </div>
</div>
<div class="checkbox-item">
  <div class="checkbox-item-indicator-container">
    <input class="checkbox-indicator" type="checkbox" value="" id="checkboxDisabled" disabled>
  </div>
  <div class="checkbox-item-text">
    <label class="checkbox-label" for="checkboxDisabled">Label</label>
  </div>
</div>
<div class="checkbox-item">
  <div class="checkbox-item-indicator-container">
    <input class="checkbox-indicator" type="checkbox" value="" id="checkboxCheckedDisabled" checked disabled>
  </div>
  <div class="checkbox-item-text">
    <label class="checkbox-label" for="checkboxCheckedDisabled">Label</label>
  </div>
</div>
{{< /example >}}

{{< bootstrap-compatibility false >}}
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

<!-- TODO: Introduce Readonly ? -->

### Invalid state

 You can display an invalid checkbox by adding `.is-invalid` to a `.checkbox-indicator`. <!-- Please take a look at our [Validation]({{< docsref "/forms/validation" >}}) page to know more about this. -->

{{< example >}}
<div class="checkbox-item">
  <div class="checkbox-item-indicator-container">
    <input class="checkbox-indicator is-invalid" type="checkbox" value="" id="checkboxInvalid">
  </div>
  <div class="checkbox-item-text">
    <label class="checkbox-label" for="checkboxInvalid">Label</label>
  </div>
</div>
{{< /example >}}

## Standalone

{{< callout warning >}}
They are commonly used to build custom component, and shouldn't be used alone. Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-labelledby`, a `.visually-hidden`, `aria-label` or a second label). See the [forms overview accessibility]({{< docsref "/forms/overview#accessibility" >}}) section for details.
{{< /callout >}}

For the standalone Checkbox, we provide a completely different architecture to ease the integration inside your projects.

{{< example >}}
<label class="checkbox-standalone">
  <input class="checkbox-indicator" type="checkbox" value="">
  <span class="visually-hidden">Label</span>
</label>
{{< /example >}}

{{< bootstrap-compatibility false >}}
{{< callout warning >}}
Be careful using this, you must implement the background on hover, focus and active states and take care of the focus-visible.
{{< /callout >}}

{{< example >}}
<div>
  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## Group

When checkboxes belong to a group (e.g., in a form), you must provide clear context by using a `<legend>` element inside a `<fieldset>` for the group title, this way screen readers will read the legend before navigating through the checkboxes.

{{< example >}}
<div class="row">
  <fieldset class="col-md-6">
    <legend>Checkboxes group example</legend>
    <div class="checkbox-item checkbox-item-divider">
      <div class="checkbox-item-indicator-container">
        <input class="checkbox-indicator" type="checkbox" value="" id="checkboxGroup1">
      </div>
      <div class="checkbox-item-text">
        <label class="checkbox-label" for="checkboxGroup1">Label</label>
        <p class="checkbox-helper">Helper text</p>
      </div>
      <div class="checkbox-item-icon-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
        </svg>
      </div>
    </div>
    <div class="checkbox-item checkbox-item-divider">
      <div class="checkbox-item-indicator-container">
        <input class="checkbox-indicator" type="checkbox" value="" id="checkboxGroup2" checked>
      </div>
      <div class="checkbox-item-text">
        <label class="checkbox-label" for="checkboxGroup2">Label</label>
        <p class="checkbox-helper">Helper text</p>
      </div>
      <div class="checkbox-item-icon-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
        </svg>
      </div>
    </div>
  </fieldset>
</div>
{{< /example >}}
