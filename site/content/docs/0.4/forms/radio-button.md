---
layout: docs
title: Radio button
description: Create consistent cross-browser and cross-device radio buttons.
group: forms
aliases:
  - "/docs/forms/radio/"
  - "/docs/forms/radio-button/"
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
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioDefault2" name="radioBasic">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioDefault2">Label</label>
  </div>
</div>
{{< /example >}}

{{< bootstrap-compatibility false >}}
{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="radio" value="" id="checkDefault" name="radioBasicBs">
  <label class="form-check-label" for="checkDefault">
    Default radio button
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" value="" id="checkChecked" checked name="radioBasicBs">
  <label class="form-check-label" for="checkChecked">
    Checked radio button
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## Approach

Browser default radio buttons are replaced with the help of `.control-item-indicator[type="radio"]`. Radio buttons allows user to select a single option from a set of mutually exclusive choices.

Radio buttons are implemented using `.control-item-*` classes, see below.

{{< markdown >}}
{{< partial "control-item.md" >}}
{{< /markdown >}}

## Variants

### Outlined

You can display an outlined radio buttons by adding a `.radio-button-item-outlined` to `.radio-button-item`. If there is an outlined radio button item in a group, all its siblings should also be outlined.

{{< example >}}
<div class="radio-button-item radio-button-item-outlined control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioOutlined1" name="radioOutlined" checked>
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioOutlined1">Label</label>
  </div>
</div>
<div class="radio-button-item radio-button-item-outlined control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioOutlined2" name="radioOutlined">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioOutlined2">Label</label>
  </div>
</div>
{{< /example >}}

### Divider

You can display a divider by adding `.control-item-divider` to a `.radio-button-item`.

{{< example >}}
<div class="radio-button-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioDivider" name="radioDivider" checked>
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

You can display an icon by adding `.control-item-assets-container` with an icon (SVG or font-icon most likely) inside as a child of a `.radio-button-item`.

{{< example >}}
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioWithSVG" name="radioIcon" checked>
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
    <input class="control-item-indicator" type="radio" value="" id="radioWithIconFont" name="radioIcon">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioWithIconFont">Label</label>
  </div>
  <div class="control-item-assets-container">
    <span class="icon si si-settings" aria-hidden="true"></span>
  </div>
</div>
{{< /example >}}

### Additional label

You can display an additional label for critical information for the option by adding a `.radio-button-additional-label` as a sibling of a `.control-item-label`, don't forget to make it accessible by adding an `aria-describedby` attribute on the input.

{{< example >}}
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioAdditionalLabel" aria-describedby="radioAdditionalTextDescription" name="radioAdditionalLabel" checked>
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioAdditionalLabel">Label</label>
    <p class="radio-button-additional-label" id="radioAdditionalTextDescription">Additional label</p>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioAdditionalLabel2" aria-describedby="radioAdditionalTextDescription2" name="radioAdditionalLabel">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioAdditionalLabel2">Label</label>
    <p class="radio-button-additional-label" id="radioAdditionalTextDescription2">Additional label</p>
  </div>
</div>
{{< /example >}}

### Helper text

You can display an helper text by adding a `.control-item-helper` as a sibling of a `.control-item-label`, don't forget to make it accessible by adding an `aria-describedby` attribute on the input.

{{< example >}}
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioHelperText" aria-describedby="radioAdditionalTextHelper" name="radioTextHelper" checked>
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioHelperText">Label</label>
    <p class="control-item-helper" id="radioAdditionalTextHelper">Helper Text</p>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioHelperText2" aria-describedby="radioAdditionalTextHelper2" name="radioTextHelper">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioHelperText2">Label</label>
    <p class="control-item-helper" id="radioAdditionalTextHelper2">Helper Text</p>
  </div>
</div>
{{< /example >}}

### Reverse

You can reverse the component by adding `.control-item-reverse` to a `.radio-button-item`.

{{< example >}}
<div class="radio-button-item control-item-reverse">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioReverse" name="radioReverse" checked>
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioReverse">Label</label>
  </div>
</div>
<div class="radio-button-item control-item-reverse">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioReverse2" name="radioReverse">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioReverse2">Label</label>
  </div>
</div>
{{< /example >}}

{{< bootstrap-compatibility false >}}
{{< markdown >}}
Put your checkboxes, radios, and switches on the opposite side with the `.form-check-reverse` modifier class.
{{< /markdown >}}

{{< example >}}
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="radio" value="" id="reverseCheck1" name="radioReverse">
  <label class="form-check-label" for="reverseCheck1">
    Reverse radio
  </label>
</div>
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="radio" value="" id="reverseCheck2" disabled name="radioReverse">
  <label class="form-check-label" for="reverseCheck2">
    Disabled reverse radio
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## States

### Disabled

Add the `disabled` attribute and the associated `<label>` are automatically styled to match with a lighter color to help indicate the input's state.

{{< example stackblitz_add_js="true" >}}
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioDisabled" disabled name="radioDisabled">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioDisabled">Label</label>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioCheckedDisabled" checked disabled name="radioDisabled">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioCheckedDisabled">Label</label>
  </div>
</div>
{{< /example >}}

{{< bootstrap-compatibility false >}}
{{< example stackblitz_add_js="true" >}}
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

### Read only

To create a read only radio button the input should be replaced by a `span` element with `role="radio"` and `aria-disabled` attributes. All the radio buttons in the group must be surrounded by a container with `role="radiogroup"` and `aria-readonly="true"` attributes. The radio button will be accessible to keyboard navigation and assistive technologies thanks to `aria-labelledby` and `tabindex` but other interactions will be prevented.

{{< example stackblitz_add_js="true" >}}
<div role="radiogroup" aria-readonly="true">
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <span class="control-item-indicator" role="radio" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="radioReadonlyLabel"></span>
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" id="radioReadonlyLabel">Label</label>
    </div>
  </div>
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <span class="control-item-indicator" role="radio" aria-disabled="true" tabindex="0" aria-checked="true" aria-labelledby="radioReadonlyCheckedLabel"></span>
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" id="radioReadonlyCheckedLabel">Label</label>
    </div>
  </div>
</div>
{{< /example >}}

### Invalid

 You can display an invalid radio button by adding `.is-invalid` to a `.control-item-indicator`. Please take a look at our [Validation]({{< docsref "/forms/validation" >}}) page to know more about this.

{{< example >}}
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="radio" value="" name="radioInvalid" id="radioInvalid">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioInvalid">Label</label>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="radio" value="" name="radioInvalid" id="radioInvalid2">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioInvalid2">Label</label>
  </div>
</div>
{{< /example >}}

{{< bootstrap-compatibility false >}}
{{< example stackblitz_add_js="true" >}}
<div class="form-check">
  <input class="form-check-input is-invalid" type="radio" value="" id="radioInvalidBootstrap">
  <label class="form-check-label" for="radioInvalidBootstrap">
    Invalid radio
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

#### Outlined invalid

 This also works for outlined variant of the component.

{{< example >}}
<div class="radio-button-item radio-button-item-outlined">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="radio" value="" name="outlinedInvalid" id="outlinedInvalid1">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="outlinedInvalid1">Label</label>
  </div>
</div>
<div class="radio-button-item radio-button-item-outlined">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="radio" value="" name="outlinedInvalid" id="outlinedInvalid2">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="outlinedInvalid2">Label</label>
  </div>
</div>
{{< /example >}}

## Group

When radio buttons belong to a group (e.g., in a form), you must provide clear context by using a `<legend>` element inside a `<fieldset>` for the group title, this way screen readers will read the legend before navigating through the radio buttons.

{{< example >}}
<div class="row">
  <fieldset class="col-md-6">
    <legend>Radio buttons group example</legend>
    <div class="radio-button-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioGroup1" name="radioGroup" aria-describedby="radioGroup1AdditionalLabel radioGroup1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioGroup1">Label</label>
        <p class="radio-button-additional-label" id="radioGroup1AdditionalLabel">Additional label</p>
        <p class="control-item-helper" id="radioGroup1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
        </svg>
      </div>
    </div>
    <div class="radio-button-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioGroup2" checked name="radioGroup"  aria-describedby="radioGroup2AdditionalLabel radioGroup2Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioGroup2">A longer label for showing behavior in this case</label>
        <p class="radio-button-additional-label" id="radioGroup2AdditionalLabel">Radio button indicator and icon will stick to the top area of the component</p>
        <p class="control-item-helper" id="radioGroup2Description">Also a longer helper text, it will also wrap at some point depending on the component width</p>
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

## Standalone

{{< callout warning >}}
{{< partial "callouts/standalone-form-indicator.md" >}}
{{< /callout >}}

For the standalone Radio button, we provide a completely different architecture to ease the integration inside your projects.

{{< example >}}
<label class="radio-button-standalone">
  <input class="control-item-indicator" type="radio" value="">
  <span class="visually-hidden">Label</span>
</label>
{{< /example >}}

{{< bootstrap-compatibility false >}}
{{< callout warning >}}
Be careful using this, you must implement the background on hover, focus and active states.
{{< /callout >}}

{{< example >}}
<div>
  <input class="form-check-input" type="radio" id="radioNoLabel" value="" aria-label="...">
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}
