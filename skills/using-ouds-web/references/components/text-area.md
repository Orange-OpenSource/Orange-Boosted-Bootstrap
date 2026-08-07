# Text Area

> **Not Bootstrap:** OUDS Web uses `.text-area` / `.text-area-container` / `.text-area-field` with floating labels. Bootstrap uses `.form-control` on `<textarea>` with `.form-label`.

## Overview

Wrap `<textarea class="text-area-field">` and `<label>` in `.text-area-container` inside `.text-area`. Label must come before textarea.

```html
<div class="text-area">
  <div class="text-area-container">
    <label for="myTextArea">Additional comments</label>
    <textarea class="text-area-field" id="myTextArea"></textarea>
  </div>
</div>
```

With placeholder:

```html
<textarea
  class="text-area-field"
  id="ta"
  placeholder="Enter your comment here"
></textarea>
```

## Variants

### Outlined

Add `.text-area-container-outlined`:

```html
<div class="text-area-container text-area-container-outlined">
  <label for="ta">Label</label>
  <textarea class="text-area-field" id="ta"></textarea>
</div>
```

### Rounded (Orange brand only)

Add `.use-rounded-corner-inputs` on a parent container. Project-wide option.

### Helper text

Add `.helper-text` as sibling of `.text-area-container`. Link via `aria-describedby`.

```html
<p id="helper" class="helper-text">Limit to 180 characters.</p>
```

### Helper link

Use `.link .link-small` as sibling. Link via `aria-labelledby` combining link id and label id. Add `.visually-hidden` span for context.

## Layout

### Max width

Add `.component-max-width` to `.text-area`.

## States

### Disabled

Add `disabled` to `<textarea>`.

### Read only

Add `readonly` to `<textarea>`. Can still be focused/selected.

### Invalid

Add `aria-invalid="true"` to `.text-area-field`. Add `.error-text` linked via `aria-describedby`. Error text replaces helper text visually.

```html
<textarea
  class="text-area-field"
  aria-invalid="true"
  aria-describedby="feedback"
></textarea>
...
<p class="helper-text">Helper text.</p>
<p id="feedback" class="error-text">This field can't be empty.</p>
```

### Skeleton

Wrap in `[aria-busy="true"]` with `inert`.

## Mandatory field

Add `.is-required` to `<label>` and `required` to `<textarea>`.

```html
<label for="ta" class="is-required">Comments</label>
<textarea class="text-area-field" id="ta" required></textarea>
```
