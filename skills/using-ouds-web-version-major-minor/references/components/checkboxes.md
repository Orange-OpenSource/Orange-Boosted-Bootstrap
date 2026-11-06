# Checkboxes

## Overview

Checkboxes have two component types: [Checkbox item](#checkbox-item), a row with a visible label and optional description or icon, and [Checkbox](#checkbox), a standalone control for integration inside other components.

Use "checkbox item" for the row component and include `Item` in its example IDs and matching label/ARIA references. Keep "checkbox indicator" when referring to the indicator within an item.

## Checkbox item

Uses `.checkbox-item` and `.control-item-*` classes. Replaces browser default with `.control-item-indicator[type="checkbox"]`.

### Basic structure

```html
<fieldset class="control-items-list">
  <div class="checkbox-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" value="" id="checkboxItem1" />
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="checkboxItem1">Label</label>
    </div>
  </div>
</fieldset>
```

### Key classes

- `.control-items-list` — on `<fieldset>` (or `<ul>`) wrapping the group
- `.checkbox-item` — each checkbox item
- `.control-item-assets-container` — wraps indicator and/or icon
- `.control-item-indicator` — the actual `<input type="checkbox">`
- `.control-item-text-container` — wraps label and description
- `.control-item-label` — the label text

### Variants

#### Divider

Add `.control-item-divider` to `.checkbox-item`.

#### Icon

Add a second `.control-item-assets-container` with an SVG or font-icon:

```html
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" id="checkboxItem2" />
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxItem2">With icon</label>
  </div>
  <div class="control-item-assets-container">
    <svg aria-hidden="true"><use xlink:href="...#heart-empty" /></svg>
  </div>
</div>
```

#### Description text

Add `.control-item-description` as sibling of `.control-item-label`. Link with `aria-describedby`.

```html
<div class="control-item-text-container">
  <label class="control-item-label" for="checkboxItem3">Label</label>
  <p class="control-item-description" id="checkboxItem3Description">Description text</p>
</div>
```

### Layout

#### Reverse

Add `.control-item-reverse` to `.checkbox-item`.

#### Horizontal

Use flex utilities on a wrapper inside `.control-items-list`:

```html
<div class="lg:d-flex flex-row gap-small">
  <div class="checkbox-item flex-fill">...</div>
  <div class="checkbox-item flex-fill">...</div>
</div>
```

#### Max width

Add `.component-max-width` to `.checkbox-item`.

### Indeterminate

Set via JavaScript only: `checkbox.indeterminate = true`. Styled via `:indeterminate` pseudo class.

### States

#### Disabled

Add `disabled` attribute to the input.

#### Read only

Replace `<input>` with `<span class="control-item-indicator" role="checkbox" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="...">`.

#### Invalid

Add `aria-invalid="true"` to the input. Error icon shown automatically (decorative icon hidden). Add error message:

```html
<p class="control-item-error-message" id="checkboxItemError">Error message.</p>
```

Place error message as last child of `.control-items-list` (fieldset) or after `</ul>`.

#### Unique checkbox item with validation

Wrap in `.checkbox-item-container` instead of `<fieldset>` for auto error display.

### Fieldset legend

Add `<legend>` as first child of `<fieldset class="control-items-list">`.

### Mandatory field

Add `.is-required` to `.control-item-label` (single) or `<legend>` (group). Add `required` to the input.

## Checkbox

> **Use only inside other components:** Standalone checkboxes are intended for components such as tables and rich selectors. Do not use them directly as form fields; use Checkbox item (`.checkbox-item`) instead.

Simplified structure without the item layout:

```html
<label class="checkbox-standalone">
  <input class="control-item-indicator" type="checkbox" value="" />
  <span class="visually-hidden">Checkbox</span>
</label>
```

### States

#### Disabled

Add `disabled` to the input. This prevents interaction and removes it from the keyboard tab order.

```html
<label class="checkbox-standalone">
  <input disabled class="control-item-indicator" type="checkbox" value="" />
  <span class="visually-hidden">Disabled checkbox</span>
</label>
```

#### Read only

Checkbox inputs do not support `readonly`. Replace the input with a focusable `span` and use a `span` wrapper instead of a `label`. Supply an accessible name and `aria-checked="false"`, `"true"`, or `"mixed"` to represent its state.

```html
<span class="checkbox-standalone">
  <span class="control-item-indicator" role="checkbox" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="true" aria-label="Read only checkbox"></span>
</span>
```

#### Invalid

Prefer built-in form validation. To mark a checkbox invalid manually, add `aria-invalid="true"` to the indicator and link an error message using `aria-describedby`. Unlike checkbox items, standalone checkboxes do not display an error icon automatically; provide explicit error text.

```html
<div>
  <label class="checkbox-standalone">
    <input class="control-item-indicator" type="checkbox" value="" aria-invalid="true" aria-describedby="checkboxStandaloneError" />
    <span class="visually-hidden">Checkbox</span>
  </label>
  <p id="checkboxStandaloneError">Select this option to continue.</p>
</div>
```

### Indeterminate

Use the native input's `indeterminate` property to represent a partial selection. There is no HTML attribute for this state; set it in application JavaScript. It uses the same checkbox indicator styling as the item and can combine with other states.

```html
<label class="checkbox-standalone">
  <input class="control-item-indicator" type="checkbox" value="" id="checkboxStandaloneIndeterminate" />
  <span class="visually-hidden">Indeterminate checkbox</span>
</label>
```

```js
const checkbox = document.getElementById('checkboxStandaloneIndeterminate')
checkbox.indeterminate = true
```

> **Not Bootstrap:** Use `.checkbox-item` for items and `.checkbox-standalone` for standalone controls, both with `.control-item-indicator` (not `.form-check-input`). Group items with `<fieldset class="control-items-list">`. Reverse uses `.control-item-reverse` (not `.form-check-reverse`). Invalid uses `aria-invalid="true"` (not `.is-invalid`). Read-only state uses `<span>` with ARIA attributes.
