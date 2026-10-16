# Assistant icon

> **Not Bootstrap:** no Bootstrap equivalent. `.icon-assistant` is distinct from `.btn-assistant` (the Assistant button): it's an icon-only element, not a labeled call-to-action button.

## Overview

An assistant icon is a UI element that triggers an action or event featuring AI-powered capabilities, such as conversational assistance, content generation, or contextual suggestions. It combines standard interactive icon behaviors with AI-specific visual features (a built-in icon and a distinct border color) to clearly indicate AI-enhanced actions.

Apply `.icon-assistant` to a `<button>` or `<a>`. Unlike `.icon-interactive`, no inner SVG is required — the icon is rendered automatically via a mask image.

```html
<button class="icon-assistant" aria-label="Default assistant icon"></button>
```

Use it to indicate AI actions in a process or a flow.

## Browser transparency caveat

An assistant icon does not have a transparent background on older browsers and Firefox because [`background-clip: border-area`](https://caniuse.com/wf-background-clip-border-area) is not fully supported there.

For compatibility, set `--bs-icon-bg` to the container's background color. Use a **background token** (not a semi-transparent surface token) so the fallback color is opaque and matches the surrounding background.

```html
<div class="bg-tertiary">
  <button type="button" class="icon-assistant" aria-label="First transparent assistant icon"></button>

  <button
    type="button"
    class="icon-assistant"
    style="--bs-icon-bg: var(--bs-color-bg-tertiary);"
    aria-label="Second transparent assistant icon"
  ></button>
</div>
```

## Accessibility

There is no discernible text, so always provide one of:

- `aria-label` on the `<button>`/`<a>`, or
- a `<span class="visually-hidden">` as a child.

## States

### Disabled

Add `disabled` on `<button>`. For `<a>`, use `aria-disabled="true"` instead.

```html
<button class="icon-assistant" disabled aria-label="Disabled assistant icon"></button>

<a class="icon-assistant" aria-disabled="true">
  <span class="visually-hidden">Disabled interactive icon link</span>
</a>
```

### Loading

Same `.loading-indeterminate` / `.loading-determinate` (with `--bs-loading-time` set to the known duration) pattern as the interactive icon, but without the content svg — the assistant icon's own icon is hidden while loading.

```html
<button class="icon-assistant loading-indeterminate" disabled aria-label="Indeterminate loading assistant icon">
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="loader" aria-hidden="true">
    <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
  </svg>
  <span role="status" id="assistant-loading-icon-msg-1" class="visually-hidden d-none"></span>
</button>

<button class="icon-assistant loading-determinate" style="--bs-loading-time: 5s;" disabled aria-label="Determinate loading assistant icon">
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="loader" aria-hidden="true">
    <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
  </svg>
  <span role="status" id="assistant-loading-icon-msg-2" class="visually-hidden d-none"></span>
</button>
```

### Skeleton

Wrap in a container with `aria-busy="true"` and `inert` while content is loading.

```html
<div aria-busy="true" inert>
  <button class="icon-assistant" aria-label="Skeleton assistant icon"></button>
</div>
```

## Sizes

Assistant icons have min/max width and height constraints but can take any size within those boundaries. Unlike the interactive icon, sizing classes are applied **directly on the `button`** (there is no inner `svg` to target since the icon is a mask image).

```html
<button
  type="button"
  class="icon-assistant"
  aria-label="First transparent assistant icon"
  style="width: 2rem; height: 2rem;"
></button>

<button class="icon-assistant decorative-large-icon" aria-label="Large assistant icon"></button>
```
