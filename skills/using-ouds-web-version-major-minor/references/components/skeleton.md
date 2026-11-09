# Skeleton

> **Not Bootstrap:** OUDS Web uses `[aria-busy="true"]` containers and `.skeleton` elements instead of Bootstrap's `.placeholder` / `.placeholder-glow` / `.placeholder-wave`. Bootstrap placeholder classes still work for compatibility.

## Overview

A skeleton indicates loading content by showing gray animated placeholders simulating the visual structure.

- Wrap children in `[aria-busy="true"]` with `inert` to set all children components to skeleton state.
- `.skeleton` is a single skeleton element (no default height/width).

```html
<div class="skeleton" style="width: 50%; height: 50px;" inert></div>
```

## Accessibility

- Add `[inert]` to prevent interaction and hide from assistive technologies.
- Use `[aria-busy="true"]` on parent to announce loading to screen readers.
- On load complete, remove skeleton or hide with `.d-none`, set `[aria-busy="false"]`.

## Size helpers

### Title height

Use `.skeleton-title` on the skeleton or a parent — renders title-sized height.

```html
<div class="skeleton skeleton-title" inert></div>
```

### Paragraph height

Use `.skeleton-text` — renders paragraph-sized height. Last line can be shorter via sizing utilities.

```html
<div class="skeleton-text" inert>
  <div class="skeleton"></div>
  <div class="skeleton"></div>
  <div class="skeleton col-9"></div>
</div>
```

### Aspect ratio

Use ratio utilities for specific aspect ratios:

```html
<div class="skeleton w-50 ratio-1x1" inert></div>
```

## No margins

Use `.skeleton-no-margins` to remove default security margins, then set spacing manually:

```html
<div class="skeleton-no-margins skeleton-text" inert>
  <div class="skeleton mb-2xsmall"></div>
  <div class="skeleton mb-2xsmall"></div>
  <div class="skeleton w-50"></div>
</div>
```

## With components

Wrap any components in `[aria-busy="true"]` with `inert` to apply skeleton state to all children automatically. Works with buttons, inputs, selects, checkboxes, radios, switches, tags, links, alerts, etc.

```html
<div aria-busy="true" inert>
  <button class="btn btn-default">Label</button>
  <div class="text-input">
    <div class="text-input-container">
      <label for="skeletonInput">Label</label>
      <input
        type="text"
        class="text-input-field"
        id="skeletonInput"
        placeholder=" "
      />
    </div>
  </div>
</div>
```

## Live example pattern

1. Show skeleton with `[aria-busy="true"]` and `inert`, plus `<p role="alert" class="visually-hidden">Loading...</p>`
2. Via JS, replace skeleton with actual content, set `[aria-busy="false"]`, remove `inert`
