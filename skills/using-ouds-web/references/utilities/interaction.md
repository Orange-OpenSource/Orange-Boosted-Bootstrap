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

- `.pe-none` — disables pointer interactions
- `.pe-auto` — restores pointer interactions (default)

```html
<a href="#" class="pe-none" tabindex="-1" aria-disabled="true"
  >Non-clickable link</a
>
<a href="#" class="pe-auto">Clickable link</a>
```

`.pe-none` only affects pointer devices (mouse, stylus, touch). To fully disable for keyboard users, also add `tabindex="-1"` and `aria-disabled="true"`.

Simpler alternatives:

- Form controls: use the `disabled` HTML attribute
- Links: remove the `href` attribute
