# Select Input

> **Not Bootstrap:** OUDS Web uses `.select-input` / `.select-input-container` / `.select-input-field` with floating labels instead of Bootstrap's `.form-select`. Bootstrap compatibility classes still work.

## Overview

Wrap `<select class="select-input-field">` and `<label>` in `.select-input-container` inside `.select-input`. Label must come before the select. Require an empty disabled placeholder `<option>` for floating label detection.

```html
<div class="select-input">
  <div class="select-input-container">
    <label for="mySelect">Label</label>
    <select class="select-input-field" id="mySelect">
      <option value="" disabled selected></option>
      <option value="1">One</option>
      <option value="2">Two</option>
    </select>
  </div>
</div>
```

## Variants

### Outlined

Add `.select-input-container-outlined`:

```html
<div class="select-input-container select-input-container-outlined">...</div>
```

### Rounded (Orange brand only)

Add `.use-rounded-corner-inputs` on a parent container (e.g. `<body>`). Affects all inputs project-wide.

### Leading icon

Place `<svg>` or `<img>` inside `.select-input-container` before the label:

```html
<div class="select-input-container">
  <svg aria-hidden="true">
    <use xlink:href="/path/to/sprite.svg#heart-empty" />
  </svg>
  <label for="mySelect">Label</label>
  <select class="select-input-field" id="mySelect">
    ...
  </select>
</div>
```

### Helper text

Add `.helper-text` as sibling of `.select-input-container`. Link via `aria-describedby`.

```html
<p id="helper" class="helper-text">Helper text.</p>
```

### Helper link

Use `.link .link-small` as sibling. Link via `aria-labelledby` combining the link id and select label id.

## Optgroup

Use `<optgroup label="...">` to group options.

## Layout

### Max width

Add `.component-max-width` to `.select-input`.

## States

### Disabled

Add `disabled` to `<select>`.

### Invalid

Add `aria-invalid="true"` to `.select-input-field`. Add `.error-text` linked via `aria-describedby`. Error text replaces helper text visually.

```html
<select
  class="select-input-field"
  aria-invalid="true"
  aria-describedby="feedback"
>
  ...
</select>
...
<p id="helperText" class="helper-text">Choose a number.</p>
<p id="feedback" class="error-text">A number is required.</p>
```

### Loading

Add `.loading-indeterminate` or `.loading-determinate` to `.select-input-field`. Include loader SVG and status `<span>` in `.select-input-container`.

For determinate loading, set `style="--bs-loading-time: 5s;"` on the container.

```html
<select
  class="select-input-field loading-indeterminate"
  aria-describedby="loadMsg"
>
  ...
</select>
<svg viewBox="0 0 40 40" class="loader" aria-hidden="true">
  <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
</svg>
<span role="status" id="loadMsg" class="visually-hidden d-none"
  >Loading...</span
>
```

Remove loading class, set final status message, and refocus select when done.

### Skeleton

Wrap in `[aria-busy="true"]` with `inert`.

## Mandatory field

Add `.is-required` to `<label>` and `required` to `<select>`.
