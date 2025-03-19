---
layout: docs
title: Radio button
description: Create consistent cross-browser and cross-device radio buttons.
group: forms
aliases:
  - "/docs/forms/radio/"
  - "/docs/0.2/forms/radio/"
toc: true
---

{{< callout info >}}
You can find here the [OUDS Radio button design guidelines](https://unified-design-system.orange.com/472794e18/p/90c467-radio-button).
{{< /callout >}}

## Basic example

{{< example >}}
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioDefault" name="radioBasic">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioDefault">Label</label>
  </div>
</div>
<div class="radio-button-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioFullOption" checked name="radioBasic">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioFullOption">Label</label>
    <p class="control-item-helper">Helper text</p>
  </div>
  <div class="control-item-assets-container">
    <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
    </svg>
  </div>
</div>
{{< /example >}}

{{< bootstrap-compatibility false >}}
{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="radio" value="" id="checkDefault">
  <label class="form-check-label" for="checkDefault">
    Default radio button
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" value="" id="checkChecked" checked>
  <label class="form-check-label" for="checkChecked">
    Checked radio button
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## Approach

Browser default radio buttons are replaced with the help of `.radio-button-item`. Checkboxes are for selecting one or several options in a list.

You can mix almost all the variants that we provide in the documentation.

Checkboxes are implemented using `.control-item-*` classes, see below.

### Control item

Control item is an abstraction for several non-text input components that have similar behavior and layout. It contains an `<input>` indicator, a text container for the label and an optional icon.

We use the future friendly child check selector (`:has`) for all our `<input>` states, like `:invalid` or `:disabled`. When combined with the `.control-item-label` class, we can easily style the text for each item based on the `<input>`'s state.

`.control-item-assets-container` are containers controlling the position of the `.control-item-indicator` and the optional icon.

`.control-item-label` extend their clickable area until a `.control-item`, `.checkbox-standalone` or a `position: relative;` is found in the page hierarchy. It permits to have a more consistent approach, whatever the DOM is. Nonetheless, it means that none of the elements next to the label should be interactive.

`.control-item-indicator` are based on SVGs that are controlled by design tokens directly. These SVGs, that indicate unchecked, checked or indeterminate states, are not Solaris icons but custom OUDS icons that are provided in CSS.

## Variants

### Divider

You can display a divider by adding `.control-item-divider` to a `.control-item`.

{{< example >}}
<div class="radio-button-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioDivider" name="radioDivider">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioDivider">Label</label>
  </div>
</div>
<div class="radio-button-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioDivider2" name="radioDivider">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioDivider2">Label</label>
  </div>
</div>
{{< /example >}}

### Icon

You can display an icon by adding `.control-item-assets-container` with an icon (SVG or font-icon most likely) inside as a child of a `.control-item`.

{{< example >}}
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioWithSVG" name="radioIcon">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioWithSVG">Label</label>
  </div>
  <div class="control-item-assets-container">
    <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
    </svg>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioWithIconFont"  name="radioIcon">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioWithIconFont">Label</label>
  </div>
  <div class="control-item-assets-container">
    <span class="icon si si-settings" aria-hidden="true"></span>
  </div>
</div>
{{< /example >}}

### Helper text

You can display an helper text by adding a `.control-item-helper` as a sibling of a `.control-item-label`.
<!-- TODO: Check for a11y and AT text -->
{{< example >}}
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioHelperText">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioHelperText">Label</label>
    <p class="control-item-helper">Helper Text</p>
  </div>
</div>
{{< /example >}}

### Inverse

You can reverse the component by adding `.control-item-inverse` to a `.control-item`.

{{< example >}}
<div class="radio-button-item control-item-inverse">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioInverse">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioInverse">Label</label>
  </div>
</div>
{{< /example >}}

{{< bootstrap-compatibility false >}}
{{< markdown >}}
Put your checkboxes, radios, and switches on the opposite side with the `.form-check-reverse` modifier class.
{{< /markdown >}}

{{< example >}}
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="radio" value="" id="reverseCheck1">
  <label class="form-check-label" for="reverseCheck1">
    Reverse radio
  </label>
</div>
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="radio" value="" id="reverseCheck2" disabled>
  <label class="form-check-label" for="reverseCheck2">
    Disabled reverse radio
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## States

### Disabled

Add the `disabled` attribute and the associated `<label>` are automatically styled to match with a lighter color to help indicate the input's state.

{{< example class="bd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioIndeterminateDisabled" disabled>
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioIndeterminateDisabled">Label</label>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioDisabled" disabled>
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioDisabled">Label</label>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioCheckedDisabled" checked disabled>
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioCheckedDisabled">Label</label>
  </div>
</div>
{{< /example >}}

{{< bootstrap-compatibility false >}}
{{< example class="bd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="form-check">
  <input class="form-check-input" type="radio" value="" id="checkIndeterminateDisabled" disabled>
  <label class="form-check-label" for="checkIndeterminateDisabled">
    Disabled indeterminate radio button
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" value="" id="checkDisabled" disabled>
  <label class="form-check-label" for="checkDisabled">
    Disabled radio button
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" value="" id="checkCheckedDisabled" checked disabled>
  <label class="form-check-label" for="checkCheckedDisabled">
    Disabled checked radio button
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

<!-- TODO: Introduce Readonly ? -->

### Invalid state

 You can display an invalid radio button by adding `.is-invalid` to a `.control-item-indicator`. <!-- Please take a look at our [Validation]({{< docsref "/forms/validation" >}}) page to know more about this. -->

{{< example >}}
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="radio" value="" id="radioInvalid">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioInvalid">Label</label>
  </div>
</div>
{{< /example >}}

## Standalone

{{< callout warning >}}
They are commonly used to build custom component, and shouldn't be used alone. Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-labelledby`, a `.visually-hidden`, `aria-label` or a second label). See the [forms overview accessibility]({{< docsref "/forms/overview#accessibility" >}}) section for details.
{{< /callout >}}

For the standalone Checkbox, we provide a completely different architecture to ease the integration inside your projects.

{{< example >}}
<label class="radio-button-standalone">
  <input class="control-item-indicator" type="radio" value="">
  <span class="visually-hidden">Label</span>
</label>
{{< /example >}}

{{< bootstrap-compatibility false >}}
{{< callout warning >}}
Be careful using this, you must implement the background on hover, focus and active states and take care of the focus-visible.
{{< /callout >}}

{{< example >}}
<div>
  <input class="form-check-input" type="radio" id="radioNoLabel" value="" aria-label="...">
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## Group

When radio buttons belong to a group (e.g., in a form), you must provide clear context by using a `<legend>` element inside a `<fieldset>` for the group title, this way screen readers will read the legend before navigating through the checkboxes.

{{< example >}}
<div class="row">
  <fieldset class="col-md-6">
    <legend>Checkboxes group example</legend>
    <div class="radio-button-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="checkboxGroup1">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checkboxGroup1">Label</label>
        <p class="control-item-helper">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
        </svg>
      </div>
    </div>
    <div class="radio-button-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="checkboxGroup2" checked>
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checkboxGroup2">A longer label for showing behaviour in this case, checkbox indicator and icon will stick to the top area of the component instead of being centered like in a smaller label</label>
        <p class="control-item-helper">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
        </svg>
      </div>
    </div>
  </fieldset>
</div>
{{< /example >}}
