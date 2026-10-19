# Switch

> **Not Bootstrap:** OUDS Web uses `.switch-item` with `.control-item-*` classes and `role="switch"` instead of Bootstrap's `.form-check.form-switch`. Bootstrap compatibility classes still work.

## Overview

Use `.switch-item` with `.control-item-indicator[type="checkbox"][role="switch"]`. Group in `<ul class="control-items-list">` or `<fieldset class="control-items-list">`.

```html
<ul class="control-items-list">
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input
        class="control-item-indicator"
        type="checkbox"
        role="switch"
        value=""
        id="switch1"
      />
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switch1">Default switch</label>
    </div>
  </li>
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input
        checked
        class="control-item-indicator"
        type="checkbox"
        role="switch"
        value=""
        id="switch2"
      />
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switch2">Checked switch</label>
    </div>
  </li>
</ul>
```

## Variants

### Divider

Add `.control-item-divider` to `.switch-item`.

### Icon

Add a `.control-item-assets-container` with icon as the **last child** of `.switch-item` (CSS reverses flow).

```html
<li class="switch-item">
  <div class="control-item-assets-container">
    <input
      class="control-item-indicator"
      type="checkbox"
      role="switch"
      value=""
      id="sw"
    />
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="sw">Switch with icon</label>
  </div>
  <div class="control-item-assets-container">
    <svg aria-hidden="true">
      <use xlink:href="/path/to/sprite.svg#heart-empty" />
    </svg>
  </div>
</li>
```

### Description text

Add `.control-item-description` inside `.control-item-text-container`. Link via `aria-describedby`.

## Layout

### Reverse

Add `.control-item-reverse` to `.switch-item`.

### Max width

Add `.component-max-width` to `.switch-item`.

## States

### Disabled

Add `disabled` to the input.

### Read only

Replace `<input>` with `<span class="control-item-indicator" role="switch" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="...">`.

### Invalid

Add `aria-invalid="true"` to `.control-item-indicator`.

**Single switch error:** Wrap in `.switch-item-container`, add `.control-item-error-message` as sibling of `.switch-item`.

```html
<div class="switch-item-container">
  <div class="switch-item">
    <div class="control-item-assets-container">
      <input
        class="control-item-indicator"
        aria-invalid="true"
        type="checkbox"
        role="switch"
        aria-describedby="errorText"
        id="sw"
        checked
      />
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="sw">Invalid switch</label>
    </div>
  </div>
  <p class="control-item-error-message" id="errorText">Error message.</p>
</div>
```

**Group error:** Use `<fieldset class="control-items-list">` — error text auto-displays if any indicator is invalid.

### Skeleton

Wrap in `[aria-busy="true"]` with `inert`.

## Fieldset legend

Add `<legend>` as first child of `<fieldset>` for screen reader context.

## Standalone

```html
<label class="switch-standalone">
  <input
    class="control-item-indicator"
    type="checkbox"
    role="switch"
    value=""
  />
  <span class="visually-hidden">Standalone switch</span>
</label>
```

## Native switch haptics

Add `switch` attribute to input for native iOS haptic feedback (Safari 17.4+). No visual changes.

```html
<input
  class="control-item-indicator"
  type="checkbox"
  role="switch"
  value=""
  switch
/>
```

## Mandatory field

Add `.is-required` to `<label>` (single) or `<legend>` (group), and `required` to inputs.
