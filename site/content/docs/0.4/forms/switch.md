---
layout: docs
title: Switch
description: Create consistent cross-browser and cross-device toggle switches.
group: forms
aliases:
  - "/docs/forms/switch/"
toc: true
---

{{< callout info >}}
<!-- TODO: change link -->
You can find here the [OUDS Switch design guidelines](https://unified-design-system.orange.com/472794e18/p/23f1c1-checkbox).
{{< /callout >}}

## Basic example

{{< example >}}
<div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDefault" checked>
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchDefault">Label</label>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDefault2">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchDefault2">Label</label>
  </div>
</div>
{{< /example >}}

{{< bootstrap-compatibility false >}}
{{< example >}}
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault">
  <label class="form-check-label" for="switchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked>
  <label class="form-check-label" for="switchCheckChecked">Checked switch checkbox input</label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## Approach

Browser default switches are replaced with the help of `.control-item-indicator[role="switch"]`. Switches are for selecting one or several options in a list.

Switches are implemented using `.control-item-*` classes, see below.

{{< markdown >}}
{{< partial "control-item.md" >}}
{{< /markdown >}}

## Variants

### Divider

You can display a divider by adding `.control-item-divider` to a `.control-item`.

{{< example >}}
<div class="switch-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDivider">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchDivider">Label</label>
  </div>
</div>
<div class="switch-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDivider2">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchDivider2">Label</label>
  </div>
</div>
{{< /example >}}

### Icon

You can display an icon by adding `.control-item-assets-container` with an icon (SVG or font-icon most likely) inside as a child of a `.control-item`.

{{< example >}}
<div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchWithSVG">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchWithSVG">Label</label>
  </div>
  <div class="control-item-assets-container">
    <svg aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
    </svg>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchWithIconFont">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchWithIconFont">Label</label>
  </div>
  <div class="control-item-assets-container">
    <span class="icon si si-settings" aria-hidden="true"></span>
  </div>
</div>
{{< /example >}}

### Helper text

You can display an helper text by adding a `.control-item-helper` as a sibling of a `.control-item-label`, don't forget to make it accessible by adding an `aria-describedby` attribute on the input.

{{< example >}}
<div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" aria-describedby="switchHelperTextDescription" id="switchHelperText" value="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchHelperText">Label</label>
    <p class="control-item-helper" id="switchHelperTextDescription">Helper Text</p>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" aria-describedby="switchHelperTextDescription2" id="switchHelperText2" value="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchHelperText2">Label</label>
    <p class="control-item-helper" id="switchHelperTextDescription2">Helper Text</p>
  </div>
</div>
{{< /example >}}

### Reverse

You can reverse the component by adding `.control-item-reverse` to a `.control-item`.

{{< example >}}
<div class="switch-item control-item-reverse">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchReverse" name="switchReverse" checked>
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchReverse">Label</label>
  </div>
</div>
<div class="switch-item control-item-reverse">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchReverse2" name="switchReverse">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchReverse2">Label</label>
  </div>
</div>
{{< /example >}}

{{< bootstrap-compatibility false >}}
{{< markdown >}}
Put your checkboxes, radios, and switches on the opposite side with the `.form-check-reverse` modifier class.
{{< /markdown >}}

{{< example >}}
<div class="form-check form-switch form-check-reverse">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckReverse">
  <label class="form-check-label" for="switchCheckReverse">Reverse switch checkbox input</label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## States

### Disabled

Add the `disabled` attribute and the associated `<label>` are automatically styled to match with a lighter color to help indicate the input's state.

{{< example class="bd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchIndeterminateDisabled" disabled>
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchIndeterminateDisabled">Label</label>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchCheckedDisabled" checked disabled>
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchCheckedDisabled">Label</label>
  </div>
</div>
{{< /example >}}

{{< bootstrap-compatibility false >}}
{{< example class="bd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDisabled" disabled>
  <label class="form-check-label" for="switchCheckDisabled">Disabled switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckCheckedDisabled" checked disabled>
  <label class="form-check-label" for="switchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

### Read only

To create a read only switches the input should be replaced by a `span` element with `role="switch"`, `aria-readonly` and `aria-disabled` attributes. The switch will be accessible to keyboard navigation and assistive technologies thanks to `aria-labelledby` and `tabindex` but other interactions will be prevented.

{{< example stackblitz_add_js="true" >}}
<div class="switch-item">
  <div class="control-item-assets-container">
    <span class="control-item-indicator" role="switch" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="switchReadonlyLabel"></span>
  </div>
  <div class="control-item-text-container">
    <p class="control-item-label" id="switchReadonlyLabel">Label</p>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <span class="control-item-indicator" role="switch" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="true" aria-labelledby="switchReadonlyCheckedLabel"></span>
  </div>
  <div class="control-item-text-container">
    <p class="control-item-label" id="switchReadonlyCheckedLabel">Label</p>
  </div>
</div>
{{< /example >}}

### Invalid

{{< callout info >}}
{{< partial "callouts/input-invalid.md" >}}
{{< /callout >}}

You can display an invalid switch by adding `.is-invalid` to a `.control-item-indicator`. Please take a look at our [Validation]({{< docsref "/forms/validation" >}}) page to know more about this.

{{< example >}}
<div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="checkbox" role="switch" value="" id="switchInvalid">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchInvalid">Label</label>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="checkbox" role="switch" value="" id="switchInvalid2">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchInvalid2">Label</label>
  </div>
</div>
{{< /example >}}

{{< bootstrap-compatibility false >}}
{{< example >}}
<div class="form-check form-switch">
  <input class="form-check-input is-invalid" type="checkbox" value="" id="checkInvalid" role="switch">
  <label class="form-check-label" for="checkInvalid">
    Invalid checkbox
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## Group

When switches belong to a group (e.g., in a form), you must provide clear context by using a `<legend>` element inside a `<fieldset>` for the group title, this way screen readers will read the legend before navigating through the switches.

{{< example >}}
<div class="row">
  <fieldset class="col-md-6">
    <legend>Switches group example</legend>
    <div class="switch-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchGroup1" aria-describedby="switchGroup1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchGroup1">Label</label>
        <p class="control-item-helper" id="switchGroup1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
        </svg>
      </div>
    </div>
    <div class="switch-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchGroup2" checked aria-describedby="switchGroup2Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchGroup2">A longer label for showing behavior in this case, switch indicator and icon will stick to the top area of the component</label>
        <p class="control-item-helper" id="switchGroup2Description">Also a longer helper text, it will also wrap at some point depending on the component width</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
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

For the standalone Switch, we provide a completely different architecture to ease the integration inside your projects.

{{< example >}}
<label class="switch-standalone">
  <input class="control-item-indicator" type="checkbox" role="switch" value="">
  <span class="visually-hidden">Label</span>
</label>
{{< /example >}}
