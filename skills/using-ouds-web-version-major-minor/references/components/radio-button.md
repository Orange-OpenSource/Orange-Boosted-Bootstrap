# Radio Button

> **Not Bootstrap:** OUDS Web replaces Bootstrap's `.form-check` / `.form-check-input` with a control-item architecture: `.radio-button-item`, `.control-item-indicator`, `.control-item-label`, etc. Bootstrap compatibility classes still work but lack OUDS features.

## Overview

Use `.radio-button-item` with `.control-item-*` classes. Browser default radios are replaced via `.control-item-indicator[type="radio"]`. Group radios in `<fieldset class="control-items-list">`.

```html
<fieldset class="control-items-list">
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input
        class="control-item-indicator"
        type="radio"
        value=""
        id="radio1"
        name="group"
      />
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radio1">Option 1</label>
    </div>
  </div>
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input
        checked
        class="control-item-indicator"
        type="radio"
        value=""
        id="radio2"
        name="group"
      />
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radio2">Option 2</label>
    </div>
  </div>
</fieldset>
```

## Variants

### Divider

Add `.control-item-divider` to `.radio-button-item`.

### Icon

Add a second `.control-item-assets-container` with an icon as a child of `.radio-button-item` (after the text container):

```html
<div class="control-item-assets-container">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/path/to/sprite.svg#heart-empty" />
  </svg>
</div>
```

### Extra label

Add `.radio-button-extra-label` inside `.control-item-text-container`. Link via `aria-describedby`.

```html
<div class="control-item-text-container">
  <label class="control-item-label" for="radio1">Label</label>
  <p class="radio-button-extra-label" id="extraLabel">Extra label</p>
</div>
```

### Description text

Add `.control-item-description` inside `.control-item-text-container`. Link via `aria-describedby`. Can combine with extra label (extra label first).

### Outlined

Add `.radio-button-item-outlined` to `.radio-button-item`. All siblings should also be outlined.

## Layout

### Reverse

Add `.control-item-reverse` to `.radio-button-item`.

### Horizontal

Use flex utilities on a container inside the fieldset. Limit to 3 items with short labels.

```html
<div class="d-flex flex-row gap-small w-50">
  <div class="radio-button-item flex-fill">...</div>
  <div class="radio-button-item flex-fill">...</div>
</div>
```

### Max width

Add `.component-max-width` to `.radio-button-item`.

## States

### Disabled

Add `disabled` attribute to the input.

### Read only

Replace `<input>` with `<span class="control-item-indicator" role="radio" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="...">`. Wrap group in `<div role="radiogroup" aria-readonly="true">`.

### Invalid

Add `aria-invalid="true"` to `.control-item-indicator`. Add `.control-item-error-message` inside the fieldset. Link error text via `aria-describedby`.

```html
<p class="control-item-error-message" id="errorText">There is an error.</p>
```

### Skeleton

Wrap in `[aria-busy="true"]` with `inert`.

## Fieldset legend

Add `<legend>` as the first child of `<fieldset>` for screen reader context.

## Standalone

For integration inside other components, use `.radio-button-standalone`:

```html
<label class="radio-button-standalone">
  <input class="control-item-indicator" type="radio" value="" />
  <span class="visually-hidden">Label</span>
</label>
```

## Mandatory field

Add `.is-required` to `<label>` (single radio) or `<legend>` (group), and `required` to inputs.
