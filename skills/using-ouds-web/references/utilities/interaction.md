# Interactions

## Text selection

- `.user-select-all` — entire element selected on click
- `.user-select-auto` — default browser behavior
- `.user-select-none` — not selectable on click

```html
<p class="user-select-all">Entirely selected when clicked.</p>
<p class="user-select-auto">Default select behavior.</p>
<p class="user-select-none">Not selectable.</p>
```

## Pointer events

- `.pointer-events-none` — disables pointer interactions
- `.pointer-events-auto` — restores pointer interactions (default)

```html
<a href="#" class="pointer-events-none" tabindex="-1" aria-disabled="true"
  >Non-clickable link</a
>
<a href="#" class="pointer-events-auto">Clickable link</a>
```

> **Breaking change (v1.4.0+):** these classes were previously named `.pe-none`/`.pe-auto` (renamed to avoid collision with padding utilities).

`.pointer-events-none` only affects pointer devices (mouse, stylus, touch). To fully disable for keyboard users, also add `tabindex="-1"` and `aria-disabled="true"`.

Simpler alternatives:

- Form controls: use the `disabled` HTML attribute
- Links: remove the `href` attribute
