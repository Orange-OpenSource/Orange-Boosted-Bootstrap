---
layout: docs
title: Checkbox
description: Create consistent cross-browser and cross-device checkboxes.
group: forms
aliases:
  - "/docs/forms/checks/"
  - "/docs/forms/checks-radios/"
  - "/docs/forms/checkbox/"
toc: true
---

{{< callout info >}}
You can find here the [OUDS Checkbox design guidelines](https://unified-design-system.orange.com/472794e18/p/23f1c1-checkbox).
{{< /callout >}}

## Basic example

{{< example >}}
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxDefault" checked>
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxDefault">Label</label>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxDefault2">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxDefault2">Label</label>
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

Browser default checkboxes are replaced with the help of `.control-item-indicator[type="checkbox"]`. Checkboxes are for selecting one or several options in a list.

Checkboxes are implemented using `.control-item-*` classes, see below.

{{< markdown >}}
{{< partial "control-item.md" >}}
{{< /markdown >}}

## Variants

### Divider

You can display a divider by adding `.control-item-divider` to a `.checkbox-item`.

{{< example >}}
<div class="checkbox-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxDivider">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxDivider">Label</label>
  </div>
</div>
<div class="checkbox-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxDivider2">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxDivider2">Label</label>
  </div>
</div>
{{< /example >}}

### Icon

You can display an icon by adding `.control-item-assets-container` with an icon (SVG or font-icon most likely) inside as a child of a `.checkbox-item`.

{{< example >}}
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxWithSVG">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxWithSVG">Label</label>
  </div>
  <div class="control-item-assets-container">
    <svg aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
    </svg>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxWithIconFont">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxWithIconFont">Label</label>
  </div>
  <div class="control-item-assets-container">
    <span class="icon si si-settings" aria-hidden="true"></span>
  </div>
</div>
{{< /example >}}

### Helper text

You can display an helper text by adding a `.control-item-helper` as a sibling of a `.control-item-label`, don't forget to make it accessible by adding an `aria-describedby` attribute on the input.

{{< example >}}
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" aria-describedby="checkboxHelperTextDescription" id="checkboxHelperText" value="" checked>
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxHelperText">Label</label>
    <p class="control-item-helper" id="checkboxHelperTextDescription">Helper Text</p>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" aria-describedby="checkboxHelperTextDescription2" id="checkboxHelperText2" value="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxHelperText2">Label</label>
    <p class="control-item-helper" id="checkboxHelperTextDescription2">Helper Text</p>
  </div>
</div>
{{< /example >}}

### Reverse

You can reverse the component by adding `.control-item-reverse` to a `.checkbox-item`.

{{< example >}}
<div class="checkbox-item control-item-reverse">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxReverse" checked>
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxReverse">Label</label>
  </div>
</div>
<div class="checkbox-item control-item-reverse">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxReverse2">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxReverse2">Label</label>
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

Often used when the checkbox represents a partial selection. For example, in a nested (hierarchical) list, a parent checkbox can be indeterminate if some but not all sub-options are checked. This is not a state the user can directly selects, it must be calculated by the system.

Checkboxes can utilize the `:indeterminate` pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).

{{< callout info >}}
Indeterminate state can be combined with disabled and invalid states.
{{< /callout >}}

{{< example class="bd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxIndeterminate">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxIndeterminate">Label</label>
  </div>
</div>
{{< /example >}}

Here is the associated JavaScript to set the indeterminate state.

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
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxIndeterminateDisabled" disabled>
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxIndeterminateDisabled">Label</label>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxDisabled" disabled>
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxDisabled">Label</label>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxCheckedDisabled" checked disabled>
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxCheckedDisabled">Label</label>
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

### Read only

To create a read only checkbox the input should be replaced by a `span` element with `role="checkbox"`, `aria-readonly` and `aria-disabled` attributes. The Checkbox will be accessible to keyboard navigation and assistive technologies thanks to `aria-labelledby` and `tabindex` but other interactions will be prevented.

{{< example class="bd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <span class="control-item-indicator" role="checkbox" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="checkboxReadonlyLabel"></span>
  </div>
  <div class="control-item-text-container">
    <p class="control-item-label" id="checkboxReadonlyLabel">Label</p>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <span class="control-item-indicator" role="checkbox" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="true" aria-labelledby="checkboxReadonlyCheckedLabel"></span>
  </div>
  <div class="control-item-text-container">
    <p class="control-item-label" id="checkboxReadonlyCheckedLabel">Label</p>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <span class="control-item-indicator" role="checkbox"  aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="mixed" aria-labelledby="checkboxReadonlyIndeterminate"></span>
  </div>
  <div class="control-item-text-container">
    <p class="control-item-label" id="checkboxReadonlyIndeterminate">Label</p>
  </div>
</div>
{{< /example >}}

### Invalid

{{< callout info >}}
{{< partial "callouts/input-invalid.md" >}}
{{< /callout >}}

 You can display an invalid checkbox by adding `.is-invalid` to a `.control-item-indicator`. Please take a look at our [Validation]({{< docsref "/forms/validation" >}}) page to know more about this.

{{< example >}}
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="checkbox" value="" id="checkboxInvalid">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxInvalid">Label</label>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="checkbox" value="" id="checkboxInvalid2">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxInvalid2">Label</label>
  </div>
</div>
{{< /example >}}

{{< bootstrap-compatibility false >}}
{{< example class="bd-example-indeterminate" stackblitz_add_js="true" >}}
<div class="form-check">
  <input class="form-check-input is-invalid" type="checkbox" value="" id="checkInvalid">
  <label class="form-check-label" for="checkInvalid">
    Invalid checkbox
  </label>
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## Group

When checkboxes belong to a group (e.g., in a form), you must provide clear context by using a `<legend>` element inside a `<fieldset>` for the group title, this way screen readers will read the legend before navigating through the checkboxes.

{{< example >}}
<div class="row">
  <fieldset class="col-md-6">
    <legend>Checkboxes group example</legend>
    <div class="checkbox-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" value="" id="checkboxGroup1" aria-describedby="checkboxGroup1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checkboxGroup1">Label</label>
        <p class="control-item-helper" id="checkboxGroup1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
        </svg>
      </div>
    </div>
    <div class="checkbox-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" value="" id="checkboxGroup2" checked aria-describedby="checkboxGroup2Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checkboxGroup2">A longer label for showing behavior in this case, checkbox indicator and icon will stick to the top area of the component</label>
        <p class="control-item-helper" id="checkboxGroup2Description">Also a longer helper text, it will also wrap at some point depending on the component width</p>
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

For the standalone Checkbox, we provide a completely different architecture to ease the integration inside your projects.

{{< example >}}
<label class="checkbox-standalone">
  <input class="control-item-indicator" type="checkbox" value="">
  <span class="visually-hidden">Label</span>
</label>
{{< /example >}}

{{< bootstrap-compatibility false >}}
{{< callout warning >}}
Be careful using this, you must implement the background on hover, focus and active states.
{{< /callout >}}

{{< example >}}
<div style="position: relative">
  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
</div>
{{< /example >}}
{{< /bootstrap-compatibility >}}
