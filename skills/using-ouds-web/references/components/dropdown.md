# Dropdown

> **Draft component:** the dropdown component is not yet finalized in OUDS Web (design and DOM may still change). Its documentation is currently the same as Boosted's: refer to the [Boosted dropdowns docs](https://boosted.orange.com/docs/5.3/components/dropdowns/) for extra background. Do not use Boosted-only classes (`.btn-dropdown`, `.btn-outline-secondary`) — use OUDS Web buttons instead.

## Overview

Toggleable overlays for lists of links and more, driven by the Dropdown JS plugin. They open on click (never on hover). Positioning relies on Popper (included in `ouds-web.bundle.js`; not used inside navbars).

Wrap the toggle and `.dropdown-menu` in `.dropdown` (or any element with `position: relative`). Use a [button](buttons.md) variant for the toggle; `.dropdown-toggle` adds the caret. [`.btn-expand`](buttons.md#expand-button) is the documented chevron alternative.

```html
<div class="dropdown">
  <button type="button" class="btn btn-default btn-expand" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```

`<button>` is the recommended toggle. If an `<a>` is required, add `role="button"`.

## Accessibility

- Dropdowns are generic (can hold forms, inputs, text): no `role` / `aria-*` for true ARIA menus is added automatically. Add them yourself if you build a real `role="menu"`.
- Keep `aria-expanded` on the toggle (`false` by default; the plugin updates it).
- Built-in keyboard support: arrow keys move across `.dropdown-item`, `Esc` closes.
- Mark the current item with `.active` + `aria-current="page"` (or `"true"` for an item in a set).
- Disabled `<a>` items: `.disabled` + `aria-disabled="true"`; disabled `<button>` items: `disabled`.

## Split button

Add `.dropdown-toggle-split` on a second button inside a `.btn-group`, with a `.visually-hidden` label.

```html
<div class="btn-group">
  <button type="button" class="btn btn-default">Action</button>
  <button type="button" class="btn btn-default dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

## Sizing

Works with all button sizes (`.btn-lg`, etc.), default and split.

## Directions

Add the class on the parent (`.btn-group` or `.dropdown`). Directions are flipped in RTL.

| Class | Menu position |
| --- | --- |
| `.dropdown` | Below (default) |
| `.dropdown-center` | Below, centered |
| `.dropup` | Above |
| `.dropup-center` | Above, centered |
| `.dropend` | Right |
| `.dropstart` | Left |

```html
<div class="btn-group dropup">
  <button type="button" class="btn btn-default dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropup
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>
```

For a split `.dropstart`, place the caret button and `<ul>` before the main button.

## Menu items

- `<a class="dropdown-item">` or `<button class="dropdown-item" type="button">` inside `<li>`.
- `.dropdown-item-text` — non-interactive text item.
- `.active` / `.disabled` — states (see Accessibility).

```html
<ul class="dropdown-menu">
  <li><span class="dropdown-item-text">Dropdown item text</span></li>
  <li><a class="dropdown-item" href="#">Regular link</a></li>
  <li><a class="dropdown-item active" href="#" aria-current="true">Active link</a></li>
  <li><a class="dropdown-item disabled" aria-disabled="true">Disabled link</a></li>
</ul>
```

## Menu content

- Header: `<li><h6 class="dropdown-header">Header</h6></li>`
- Divider: `<li><hr class="dropdown-divider" /></li>`
- Free text and forms are supported; size them with [spacing utilities](../utilities/spacing.md) and constrain the menu width as needed.

## Menu alignment

Menus are left-aligned by default. Add `.dropdown-menu-end` to right-align (mirrored in RTL).

Responsive alignment uses the OUDS **breakpoint prefix** (not Bootstrap's `.dropdown-menu-lg-end`) and requires `data-bs-display="static"` on the toggle (not needed in navbars):

- Right-align from a breakpoint: `.{bp}:dropdown-menu-end`
- Left-align from a breakpoint: `.{bp}:dropdown-menu-start` (combine with `.dropdown-menu-end`)

```html
<div class="btn-group">
  <button type="button" class="btn btn-default dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Left-aligned but right-aligned on large screens
  </button>
  <ul class="dropdown-menu lg:dropdown-menu-end">
    <li><button class="dropdown-item" type="button">Action</button></li>
  </ul>
</div>
```

## Dark mode

Do not use dark dropdown variants (deprecated). Set `data-bs-theme="dark"` on the `.dropdown-menu` or any ancestor (see [Color modes](../foundation/color-modes.md)).

## JavaScript

Toggle via `data-bs-toggle="dropdown"` (required even when initializing from JS), or:

```js
const dropdownList = [...document.querySelectorAll('.dropdown-toggle')].map(el => new Dropdown(el))
```

### Options (data attributes `data-bs-*` or JS object)

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `autoClose` | boolean, string | `true` | `true`: close on inside/outside click; `false`: only via toggle/`hide`/`toggle` (no `Esc` either); `'inside'`: only inside clicks; `'outside'`: only outside clicks. `Esc` always closes except with `false` |
| `boundary` | string, element | `'clippingParents'` | Overflow boundary for Popper's `preventOverflow` |
| `display` | string | `'dynamic'` | `'static'` disables Popper |
| `offset` | array, string, function | `[0, 2]` | `data-bs-offset="10,20"` in markup |
| `popperConfig` | null, object, function | `null` | Override the default Popper config |
| `reference` | string, element, object | `'toggle'` | `'toggle'`, `'parent'`, an element, or a virtual element |

### Methods

`show`, `hide`, `toggle`, `update`, `dispose`, and static `getInstance` / `getOrCreateInstance`.

### Events

Fired on the toggle element and bubbled: `show.bs.dropdown`, `shown.bs.dropdown`, `hide.bs.dropdown`, `hidden.bs.dropdown` (the hide events expose `clickEvent` for click-triggered closes).

## CSS variables

Set on `.dropdown-menu`: `--bs-dropdown-zindex`, `-min-width`, `-padding-y`, `-spacer`, `-color`, `-bg`, `-border-color`, `-border-radius`, `-border-width`, `-inner-border-radius`, `-divider-bg`, `-divider-margin-y`, `-box-shadow`, `-link-color`, `-link-hover-color`, `-link-hover-bg`, `-link-active-color`, `-link-active-bg`, `-link-disabled-color`, `-item-padding-x`, `-item-padding-y`, `-header-color`, `-header-padding-x`, `-header-padding-y` (all prefixed `--bs-dropdown-`).
