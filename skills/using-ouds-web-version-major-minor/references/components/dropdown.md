# Dropdown

Contextual overlay menu displaying a list of actions or links. The dropdown component is **only the menu** (`.dropdown-menu`); the button/link that toggles it is documented separately.

> **Draft component:** the design is not final and the DOM may change. Use it as a temporary component. The DOM is the same as Boosted's.

## Trigger

The trigger is not part of this component:

- Expand button (`.btn.btn-default.btn-expand`): see [buttons.md](buttons.md)
- Expand link (`.link.link-expand`): see [links.md](links.md)

The trigger needs `data-bs-toggle="dropdown"` and `aria-expanded="false"`.

## Structure

A `.dropdown` wrapper contains the trigger and a `ul.dropdown-menu`. Each entry is an `<li>`.

```html
<div class="dropdown">
  <button type="button" class="btn btn-default btn-expand" data-bs-toggle="dropdown" aria-expanded="false">
    Expand button
  </button>
  <ul class="dropdown-menu">
    <li><button type="button" class="dropdown-item">Action</button></li>
    <li><hr class="dropdown-divider" /></li>
    <li><h6 class="dropdown-header">Dropdown header</h6></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item disabled">A disabled action</a></li>
  </ul>
</div>
```

| Class | Usage                                                |
|---|------------------------------------------------------|
| `.dropdown-item` | Entry. Add `.disabled` for a disabled entry          |
| `.dropdown-divider` | Separator (`<hr>`)                                   |
| `.dropdown-header` | Group title (`<hx>` level depending on parent title) |

## Semantics

Adapt the tag of each item: `<button type="button">` for actions in the page, `<a href>` for navigation links.

## JavaScript

API identical to Bootstrap's dropdown plugin; see Bootstrap docs for details.

- Methods: `show`, `hide`, `toggle`, `update`, `dispose`, `getInstance`, `getOrCreateInstance`
- Events: `show.bs.dropdown`, `shown.bs.dropdown`, `hide.bs.dropdown`, `hidden.bs.dropdown`
- Options (data attributes or JS): `autoClose` (`true`), `boundary` (`'clippingParents'`), `display` (`'dynamic'`), `offset` (`[0, 0]`), `popperConfig` (`null`), `reference` (`'toggle'`)

> **Not Bootstrap:** the default `offset` is `[0, 0]` (Bootstrap: `[0, 2]`). Popper is required (included in the bundle).
>
> **Not Boosted:** the trigger is not part of the dropdown (no `.dropdown-toggle`); variants such as dark menus, split buttons, directions and sizes are not documented here.
