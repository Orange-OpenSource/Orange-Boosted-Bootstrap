# Checkbox

Uses `.checkbox-item` and `.control-item-*` classes. Replaces browser default with `.control-item-indicator[type="checkbox"]`.

## Basic structure

```html
<fieldset class="control-items-list">
  <div class="checkbox-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" value="" id="cb1" />
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="cb1">Label</label>
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

## Variants

### Divider

Add `.control-item-divider` to `.checkbox-item`.

### Icon

Add a second `.control-item-assets-container` with an SVG or font-icon:

```html
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" id="cb2" />
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="cb2">With icon</label>
  </div>
  <div class="control-item-assets-container">
    <svg aria-hidden="true"><use xlink:href="...#heart-empty" /></svg>
  </div>
</div>
```

### Description text

Add `.control-item-description` as sibling of `.control-item-label`. Link with `aria-describedby`.

```html
<div class="control-item-text-container">
  <label class="control-item-label" for="cb3">Label</label>
  <p class="control-item-description" id="cb3Desc">Description text</p>
</div>
```

## Layout

### Reverse

Add `.control-item-reverse` to `.checkbox-item`.

### Horizontal

Use flex utilities on a wrapper inside `.control-items-list`:

```html
<div class="d-lg-flex flex-row gap-small">
  <div class="checkbox-item flex-fill">...</div>
  <div class="checkbox-item flex-fill">...</div>
</div>
```

### Max width

Add `.component-max-width` to `.checkbox-item`.

## Indeterminate

Set via JavaScript only: `checkbox.indeterminate = true`. Styled via `:indeterminate` pseudo class.

## States

### Disabled

Add `disabled` attribute to the input.

### Read only

Replace `<input>` with `<span class="control-item-indicator" role="checkbox" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="...">`.

### Invalid

Add `aria-invalid="true"` to the input. Error icon shown automatically (decorative icon hidden). Add error message:

```html
<p class="control-item-error-message" id="errorText">Error message.</p>
```

Place error message as last child of `.control-items-list` (fieldset) or after `</ul>`.

### Unique checkbox with validation

Wrap in `.checkbox-item-container` instead of `<fieldset>` for auto error display.

## Fieldset legend

Add `<legend>` as first child of `<fieldset class="control-items-list">`.

## Standalone checkbox

Simplified structure without the item layout:

```html
<label class="checkbox-standalone">
  <input class="control-item-indicator" type="checkbox" value="" />
  <span class="visually-hidden">Standalone checkbox</span>
</label>
```

## Mandatory field

Add `.is-required` to `.control-item-label` (single) or `<legend>` (group). Add `required` to the input.

> **Not Bootstrap:** Uses `.checkbox-item`, `.control-item-*` classes (not `.form-check`/`.form-check-input`/`.form-check-label`). Grouping uses `<fieldset class="control-items-list">`. Reverse uses `.control-item-reverse` (not `.form-check-reverse`). Invalid uses `aria-invalid="true"` (not `.is-invalid`). Read-only state uses `<span>` with ARIA attributes.
