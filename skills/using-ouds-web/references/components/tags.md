# Tags

> **Not Bootstrap:** Tags are an OUDS Web-specific component (`.tag`) with no Bootstrap equivalent. They provide status variants, icons, bullets, loading state, and input tags.

## Overview

Two types: **Tag** (display-only) and **Input tag** (removable, interactive).

Base class: `.tag`

```html
<p class="tag">Tag</p>
<button type="button" class="tag tag-input">
  Input tag<span class="visually-hidden">Remove this tag</span>
</button>
```

## Accessibility

- Wrap tags in semantic elements (`<li>`, `<p>`, `<h2>`, etc.) or use `<button>` for input tags.
- Tag lists must be in `<ul>` or `<ol>` with either a visible title via `aria-labelledby` or an `aria-label`.
- Add `.visually-hidden` text if tag labels are not self-explanatory.

## Tag

### Status variants

**Non-functional:** `.tag` (neutral default), `.tag-accent`

**Functional:** `.tag-positive`, `.tag-info`, `.tag-warning`, `.tag-negative`

### Appearance: muted

Add `.tag-muted` for secondary/muted appearance:

```html
<li class="tag tag-accent tag-muted">Accent muted</li>
```

### Icon (non-functional)

Add icon with `.tag-icon` class inside the tag. Always `aria-hidden="true"`.

```html
<li class="tag">
  <svg aria-hidden="true" class="tag-icon">
    <use xlink:href="/path/to/sprite.svg#heart-empty" />
  </svg>
  Label
</li>
```

Font icon variant: `<span class="si-settings tag-icon" aria-hidden="true"></span>`

### Status icon (functional)

Add `<span class="tag-status-icon"></span>` — each functional status has a dedicated icon. Do not use other icons.

```html
<li class="tag tag-positive">
  <span class="tag-status-icon"></span>
  Activated
</li>
```

### Bullet

Add `<span class="tag-bullet"></span>` inside the tag:

```html
<li class="tag tag-accent">
  <span class="tag-bullet"></span>
  Accent
</li>
```

### Squared corners

Add `.rounded-none` to remove default rounded corners.

### Small size

Add `.tag-small`:

```html
<li class="tag tag-small">Small tag</li>
```

### States

**Disabled:** Add `.disabled` to the tag or a parent element.

**Loading:** Add `.tag-loader` SVG and status `<span>`. Add `.loading` class to activate animation.

```html
<p class="tag tag-accent loading">
  <svg viewBox="0 0 40 40" class="tag-loader" aria-hidden="true">
    <circle class="tag-loader-inner" cx="20" cy="20" r="15"></circle>
  </svg>
  <span role="status" class="visually-hidden">Loading</span>
  Label
</p>
```

**Skeleton:** Wrap in `[aria-busy="true"]` with `inert`.

### Layout

Use flexbox with `.column-gap-xsmall` and `.row-gap-medium` for spacing between tags:

```html
<ul
  class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium"
  aria-label="Keywords"
>
  <li class="tag">Label 1</li>
  <li class="tag">Label 2</li>
</ul>
```

Use `.align-middle` when placing tags next to text: `<h2>Title <span class="tag align-middle">New</span></h2>`

## Input Tag

Use `<button>` with `.tag .tag-input`. Include `.visually-hidden` text after the label to describe the action.

Do **not** apply tag variants (status, icon, bullet) to input tags.

```html
<ul
  class="list-unstyled d-flex flex-wrap column-gap-xsmall"
  aria-label="Selected items"
>
  <li>
    <button type="button" class="tag tag-input">
      Label
      <span class="visually-hidden">Remove this tag</span>
    </button>
  </li>
</ul>
```

### Disabled input tag

Add `disabled` attribute to the button.

### Skeleton

Wrap in `[aria-busy="true"]` with `inert`.
