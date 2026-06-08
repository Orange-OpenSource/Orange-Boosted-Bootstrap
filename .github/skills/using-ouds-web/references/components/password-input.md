# Password Input

> **Not Bootstrap:** Password input uses the OUDS Web `.text-input` wrapper system with floating labels and a show/hide toggle button. There is no Bootstrap equivalent component.

## Overview

A password input is a specific configuration of the text input. Use `.text-input` wrapper, `.text-input-container`, `<label>` before `<input>`, and a toggle visibility button.

Always define `placeholder=" "` (single space) even if no placeholder text is needed — required for the CSS-only floating label to work.

All text input features (leading icons, helper text, validation, outlined, prefix/suffix) also apply to password inputs.

## Basic structure

```html
<div class="text-input">
  <div class="text-input-container">
    <label for="inputPassword">Password</label>
    <input
      type="password"
      id="inputPassword"
      class="text-input-field"
      placeholder=" "
    />
    <button class="btn btn-minimal btn-icon">
      <svg aria-hidden="true">
        <use xlink:href="/path/to/sprite.svg#accessibility-vision" />
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
</div>
```

## With leading icon

Place an `<svg>` before the `<label>` inside `.text-input-container`:

```html
<div class="text-input">
  <div class="text-input-container">
    <svg aria-hidden="true">
      <use xlink:href="/path/to/sprite.svg#lock-closed" />
    </svg>
    <label for="inputPasswordIcon">Password</label>
    <input
      type="password"
      id="inputPasswordIcon"
      class="text-input-field"
      placeholder=" "
    />
    <button class="btn btn-minimal btn-icon">
      <svg aria-hidden="true">
        <use xlink:href="/path/to/sprite.svg#accessibility-vision" />
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
</div>
```

## Outlined variant

Add `.text-input-container-outlined` to `.text-input-container`:

```html
<div class="text-input">
  <div class="text-input-container text-input-container-outlined">
    <label for="inputPasswordOutlined">Password</label>
    <input
      type="password"
      id="inputPasswordOutlined"
      class="text-input-field"
      placeholder=" "
    />
    <button class="btn btn-minimal btn-icon">...</button>
  </div>
  <p id="helper" class="helper-text">
    Enter a password with at least 8 characters
  </p>
</div>
```

## With prefix

Wrap `<input>` in `.input-container` with `data-bs-prefix`:

```html
<div class="input-container" data-bs-prefix="DEV-">
  <input
    type="password"
    id="inputPasswordPrefix"
    class="text-input-field"
    placeholder=" "
  />
</div>
```

## Invalid state

Add `.is-invalid` to the input. Provide `.error-text` linked via `aria-describedby`:

```html
<input
  type="password"
  class="text-input-field is-invalid"
  aria-describedby="errorMsg"
  placeholder=" "
  value="12345"
/>
...
<p id="errorMsg" class="error-text">Password must be at least 8 characters.</p>
```

## Mandatory field

Add `.is-required` to `<label>` and `required` to `<input>`:

```html
<label for="mandatoryPassword" class="is-required">Password</label>
<input
  type="password"
  id="mandatoryPassword"
  class="text-input-field"
  placeholder=" "
  required
/>
```
