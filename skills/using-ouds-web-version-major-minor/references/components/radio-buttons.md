# Radio buttons

> **Not Bootstrap:** OUDS Web replaces Bootstrap's `.form-check` / `.form-check-input` with a control-item architecture: `.radio-button-item`, `.control-item-indicator`, `.control-item-label`, etc. Bootstrap compatibility classes still work but lack OUDS features.

## Overview

Radio buttons have two component types: [Radio button item](#radio-button-item), a row with a visible label and optional extra label, description, or icon, and [Radio button](#radio-button), a standalone control for integration inside other components.

Use "radio button item" for the row component and include `Item` in its example IDs and matching label/ARIA references. Keep "radio button indicator" when referring to the indicator within an item.

## Radio button item

Use `.radio-button-item` with `.control-item-*` classes. Browser default radios are replaced via `.control-item-indicator[type="radio"]`. Group radios in `<fieldset class="control-items-list">`.

```html
<fieldset class="control-items-list">
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input
        class="control-item-indicator"
        type="radio"
        value=""
        id="radioButtonItem1"
        name="group"
      />
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioButtonItem1">Option 1</label>
    </div>
  </div>
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input
        checked
        class="control-item-indicator"
        type="radio"
        value=""
        id="radioButtonItem2"
        name="group"
      />
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioButtonItem2">Option 2</label>
    </div>
  </div>
</fieldset>
```

### Variants

#### Divider

Add `.control-item-divider` to `.radio-button-item`.

#### Icon

Add a second `.control-item-assets-container` with an icon as a child of `.radio-button-item` (after the text container):

```html
<div class="control-item-assets-container">
  <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
    <use xlink:href="/path/to/sprite.svg#heart-empty" />
  </svg>
</div>
```

#### Extra label

Add `.radio-button-extra-label` inside `.control-item-text-container`. Link via `aria-describedby`.

```html
<div class="control-item-text-container">
  <label class="control-item-label" for="radioButtonItem1">Label</label>
  <p class="radio-button-extra-label" id="radioButtonItemExtraLabel">Extra label</p>
</div>
```

#### Description text

Add `.control-item-description` inside `.control-item-text-container`. Link via `aria-describedby`. Can combine with extra label (extra label first).

#### Outlined

Add `.radio-button-item-outlined` to `.radio-button-item`. All siblings should also be outlined.

### Layout

#### Reverse

Add `.control-item-reverse` to `.radio-button-item`.

#### Horizontal

Use flex utilities on a container inside the fieldset. Limit to 3 items with short labels.

```html
<div class="d-flex flex-row gap-small w-50">
  <div class="radio-button-item flex-fill">...</div>
  <div class="radio-button-item flex-fill">...</div>
</div>
```

#### Max width

Add `.component-max-width` to `.radio-button-item`.

## Accessibility

Keep radio buttons and meaningful icons physically adjacent to their descriptive labels to maintain a clear visual hierarchy and help Assistive Technology users understand their relationship without navigating large areas of whitespace. Use `.component-max-width` when needed to control the component width.

### States

#### Disabled

Add `disabled` attribute to the input.

#### Read only

Replace `<input>` with `<span class="control-item-indicator" role="radio" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="...">`. Wrap group in `<div role="radiogroup" aria-readonly="true">`.

#### Invalid

Add `aria-invalid="true"` to `.control-item-indicator`. Add `.control-item-error-message` inside the fieldset. Link error text via `aria-describedby`.

```html
<p class="control-item-error-message" id="radioButtonItemError">There is an error.</p>
```

#### Skeleton

Wrap in `[aria-busy="true"]` with `inert`.

### Fieldset legend

Add `<legend>` as the first child of `<fieldset>` for screen reader context.

### Mandatory field

Add `.is-required` to `<label>` (single radio button item) or `<legend>` (group), and `required` to inputs.

## Radio button

> **Use only inside other components:** Standalone radio buttons are intended for components such as tables and rich selectors. Do not use them directly as form fields; use Radio button item (`.radio-button-item`) instead.

For integration inside other components, use `.radio-button-standalone`:

```html
<label class="radio-button-standalone">
  <input class="control-item-indicator" type="radio" value="" />
  <span class="visually-hidden">Label</span>
</label>
```

### States

#### Disabled

Add `disabled` to the input. This prevents interaction and removes it from the keyboard tab order.

```html
<label class="radio-button-standalone">
  <input disabled class="control-item-indicator" type="radio" name="standaloneRadioDisabled" value="" />
  <span class="visually-hidden">Disabled radio button</span>
</label>
```

#### Read only

Radio inputs do not support `readonly`. Replace inputs with focusable `span` elements with `role="radio"`, `aria-disabled="true"`, `aria-checked`, and an accessible name. Put them inside a named `radiogroup` with `aria-readonly="true"`; do not put `aria-readonly` on individual radios.

```html
<div class="radio-button-standalone" role="radiogroup" aria-readonly="true" aria-label="Read only radio button group">
  <span class="control-item-indicator" role="radio" aria-disabled="true" tabindex="0" aria-checked="true" aria-label="Selected option"></span>
</div>
```

#### Invalid

Prefer built-in form validation. To mark a radio button invalid manually, add `aria-invalid="true"` to the indicator and link an error message using `aria-describedby`. Unlike radio button items, standalone radio buttons do not display an error icon automatically; provide explicit error text.

```html
<div>
  <label class="radio-button-standalone">
    <input class="control-item-indicator" type="radio" name="standaloneRadioInvalid" value="" aria-invalid="true" aria-describedby="radioButtonStandaloneError" />
    <span class="visually-hidden">Radio button</span>
  </label>
  <p id="radioButtonStandaloneError">Choose an available option.</p>
</div>
```
