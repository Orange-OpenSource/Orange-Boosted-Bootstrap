# Text Input

> **Not Bootstrap:** OUDS Web uses `.text-input` / `.text-input-container` / `.text-input-field` with CSS-only floating labels. Bootstrap uses `.form-control` with `.form-label`. Bootstrap compatibility classes still work.

## Overview

Wrap `<input class="text-input-field">` and `<label>` in `.text-input-container` inside `.text-input`. Label must come before input.

**Always set `placeholder=" "`** (single space) even without placeholder text — required for floating label CSS to work.

Add `autocomplete` for user info fields (WCAG 1.3.5 compliance).

```html
<div class="text-input">
  <div class="text-input-container">
    <label for="email">Email address</label>
    <input
      type="email"
      autocomplete="email"
      class="text-input-field"
      id="email"
      placeholder=" "
    />
  </div>
</div>
```

With placeholder:

```html
<input
  type="email"
  class="text-input-field"
  id="email"
  placeholder="name@example.com"
/>
```

## Variants

### Outlined

Add `.text-input-container-outlined`:

```html
<div class="text-input-container text-input-container-outlined">
  <label for="input">Firstname</label>
  <input type="text" class="text-input-field" id="input" placeholder=" " />
</div>
```

### Rounded (Orange brand only)

Add `.use-rounded-corner-inputs` on a parent container (e.g. `<body>`). Project-wide option.

### Leading icon

Place `<svg>` inside `.text-input-container` before the label:

```html
<div class="text-input-container">
  <svg aria-hidden="true">
    <use xlink:href="/path/to/sprite.svg#heart-empty" />
  </svg>
  <label for="input">Label</label>
  <input type="text" class="text-input-field" id="input" placeholder=" " />
</div>
```

### Trailing action

Place a minimal icon button (`.btn .btn-minimal .btn-icon`) after the input inside `.text-input-container`:

```html
<div class="text-input-container">
  <label for="input">Label</label>
  <input type="text" class="text-input-field" id="input" placeholder=" " />
  <button class="btn btn-minimal btn-icon">
    <svg aria-hidden="true">
      <use xlink:href="/path/to/sprite.svg#heart-empty" />
    </svg>
    <span class="visually-hidden">Action</span>
  </button>
</div>
```

### Helper text

Add `.helper-text` as sibling of `.text-input-container`. Link via `aria-describedby`.

### Helper link

Use `.link .link-small` as sibling. Link via `aria-labelledby` combining link id and label id. Add `.visually-hidden` span.

### Input prefix and suffix

Wrap `<input>` in `.input-container` with `data-bs-prefix` and/or `data-bs-suffix`. Mention prefix/suffix in helper text for accessibility.

```html
<div class="text-input-container">
  <label for="url">Website URL</label>
  <div class="input-container" data-bs-prefix="https://" data-bs-suffix=".com">
    <input
      type="text"
      class="text-input-field"
      id="url"
      placeholder=" "
      aria-describedby="helper"
    />
  </div>
</div>
<p id="helper" class="helper-text">Fill in the URL without protocol.</p>
```

## Layout

### Max width

Add `.component-max-width` to `.text-input`.

## States

### Disabled

Add `disabled` to `<input>`. Also disable trailing action button.

### Read only

Add `readonly` to `<input>`. Can still be focused. Disable trailing action button.

### Invalid

Add `aria-invalid="true"` to `.text-input-field`. Add `.error-text` linked via `aria-describedby`. Error text replaces helper text visually. Dynamically switch `aria-describedby` to the error text id.

```html
<input
  type="text"
  class="text-input-field"
  aria-invalid="true"
  aria-describedby="feedback"
  placeholder=" "
/>
...
<p class="helper-text">Choose a username.</p>
<p id="feedback" class="error-text">Username is required.</p>
```

### Loading

Add `.loading-indeterminate` or `.loading-determinate` to `.text-input-field`. Include loader SVG and status `<span>` in `.text-input-container`. Disable trailing action.

For determinate: set `style="--bs-loading-time: 5s;"` on the container.

```html
<input
  type="text"
  class="text-input-field loading-indeterminate"
  placeholder=" "
  value="Input"
  aria-describedby="loadMsg"
/>
<svg viewBox="0 0 40 40" class="loader" aria-hidden="true">
  <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
</svg>
<span role="status" id="loadMsg" class="visually-hidden d-none"
  >Loading...</span
>
```

Remove loading class, set final status, refocus input when done.

### Skeleton

Wrap in `[aria-busy="true"]` with `inert`.

## Mandatory field

Add `.is-required` to `<label>` and `required` to `<input>`.

```html
<label for="username" class="is-required">Username</label>
<input
  type="text"
  class="text-input-field"
  id="username"
  placeholder=" "
  required
/>
```
