# Interactive icon

> **Not Bootstrap:** there is no Bootstrap equivalent. `.icon-interactive` is an OUDS Web-specific component for icon-only interactive elements (distinct from `.btn-icon`).

## Overview

An interactive icon is a UI element that triggers a user interaction, such as opening, closing, or toggling a state. It can be used standalone or inside other components (static card or list items, menus).

Apply `.icon-interactive` to a `<button>` or `<a>` and put an icon (SVG sprite `<use>` or icon font `<span>`) inside it.

```html
<button class="icon-interactive" aria-label="Default interactive icon">
  <svg aria-hidden="true">
    <use xlink:href="/path/to/sprite.svg#heart-empty" />
  </svg>
</button>

<button class="icon-interactive" aria-label="Default interactive icon">
  <span class="icon si si-settings" aria-hidden="true"></span>
</button>
```

## Accessibility

There is no discernible text, so always provide one of:

- `aria-label` on the `<button>`/`<a>`, or
- a `<span class="visually-hidden">` as a child.

```html
<button class="icon-interactive" aria-label="Button icon">
  <svg aria-hidden="true">
    <use xlink:href="/path/to/sprite.svg#heart-empty" />
  </svg>
</button>

<a class="icon-interactive" href="#">
  <span class="visually-hidden">Link icon</span>
  <svg aria-hidden="true">
    <use xlink:href="/path/to/sprite.svg#heart-empty" />
  </svg>
</a>
```

## States

### Disabled

Add `disabled` on `<button>`. For `<a>`, use `aria-disabled="true"` instead (links cannot be natively disabled).

```html
<button class="icon-interactive" disabled aria-label="Disabled interactive button icon">
  <svg aria-hidden="true">
    <use xlink:href="/path/to/sprite.svg#heart-empty" />
  </svg>
</button>

<a class="icon-interactive" aria-disabled="true">
  <span class="visually-hidden">Disabled interactive icon link</span>
  <svg aria-hidden="true">
    <use xlink:href="/path/to/sprite.svg#heart-empty" />
  </svg>
</a>
```

### Loading

Add `.loading-indeterminate` (unknown duration) or `.loading-determinate` (with `--bs-loading-time` set to the known duration) alongside `disabled`, plus the loader SVG and a live region for the status message.

```html
<button class="icon-interactive loading-indeterminate" disabled aria-label="Indeterminate loading interactive icon">
  <svg aria-hidden="true">
    <use xlink:href="/path/to/sprite.svg#heart-empty" />
  </svg>
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="loader" aria-hidden="true">
    <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
  </svg>
  <span role="status" id="loading-icon-msg-1" class="visually-hidden d-none"></span>
</button>

<button class="icon-interactive loading-determinate" style="--bs-loading-time: 5s;" disabled aria-label="Determinate loading interactive icon">
  <svg aria-hidden="true">
    <use xlink:href="/path/to/sprite.svg#heart-empty" />
  </svg>
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="loader" aria-hidden="true">
    <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
  </svg>
  <span role="status" id="loading-icon-msg-2" class="visually-hidden d-none"></span>
</button>
```

### Skeleton

Wrap in a container with `aria-busy="true"` and `inert` while content is loading.

```html
<div aria-busy="true" inert>
  <button class="icon-interactive" aria-label="Skeleton interactive icon">
    <svg aria-hidden="true">
      <use xlink:href="/path/to/sprite.svg#heart-empty" />
    </svg>
  </button>
</div>
```

## Sizes

Interactive icons have min/max width and height constraints but can take any size within those boundaries:

- Inline `style="width: ...; height: ...;"` on the `.icon-interactive` element, or
- `.decorative-*-icon` classes (e.g. `.decorative-small-icon`, `.decorative-large-icon`) on the inner `<svg>`.

```html
<button class="icon-interactive" aria-label="Inline style interactive icon" style="width: 2.375rem; height: 2.375rem;">
  <svg aria-hidden="true">
    <use xlink:href="/path/to/sprite.svg#heart-empty" />
  </svg>
</button>

<button class="icon-interactive" aria-label="Small interactive icon">
  <svg class="decorative-small-icon" aria-hidden="true">
    <use xlink:href="/path/to/sprite.svg#heart-empty" />
  </svg>
</button>

<button class="icon-interactive" aria-label="Large interactive icon">
  <svg class="decorative-large-icon" aria-hidden="true">
    <use xlink:href="/path/to/sprite.svg#heart-empty" />
  </svg>
</button>
```
