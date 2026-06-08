# Chips

Two types: **Filter chip** and **Suggestion chip**. Always inside a `<ul class="chips-container">`.

## Common structure

- `.chips-container` — `<ul>` managing layout
- `.chip` — `<li>` wrapping each chip
- `.chip-interactive` — the interactive element (label, button)

## Filter chip

Add `.chip-filter` to `.chip`. Based on checkbox inputs by default.

```html
<ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filter1" checked />
    <label class="chip-interactive" for="filter1">Apple</label>
  </li>
  <li class="chip chip-filter">
    <input type="checkbox" id="filter2" />
    <label class="chip-interactive" for="filter2">Samsung</label>
  </li>
</ul>
```

### Using radio buttons

For single-select, use `<input type="radio">` with same `name`.

### Using buttons

Use `<button>` with `data-bs-toggle="button"`. Style applies on `[aria-pressed="true"]`.

```html
<li class="chip chip-filter">
  <button class="chip-interactive" data-bs-toggle="button">Filter</button>
</li>
```

### Text and icon

Add icon as last child of `.chip-interactive`:

```html
<label class="chip-interactive" for="filter1">
  Label
  <svg aria-hidden="true"><use xlink:href="...#heart-empty" /></svg>
</label>
```

### Icon only

Add `.chip-icon` to `.chip-interactive`. Provide `.visually-hidden` text.

### Disabled

Add `disabled` attribute to the input or button.

## Suggestion chip

Add `.chip-suggestion` to `.chip`. Uses `<button>` elements.

```html
<ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive">Thanks.</button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive">Looks good to me.</button>
  </li>
</ul>
```

### Text and icon

Add icon as first child of `.chip-interactive`.

### Icon only

Add `.chip-icon` to the `<button>`. Provide `.visually-hidden` text.

### Disabled

Add `disabled` attribute to the button.

## Layout

- Default: single-line horizontal scroll (`.chips-container`)
- Wrapping: add `.flex-wrap` to `.chips-container`
- Wrap + scroll: add `.flex-wrap` and a `max-height` style

## Accessibility

- Always use a `<ul>` list
- Add a descriptive title (via heading + `role="group"` on parent, or `aria-label` on `<ul>`)
- Provide `.visually-hidden` text for icon-only chips

## JavaScript (filter chips with buttons)

Toggle via `data-bs-toggle="button"`. Methods: `toggle`, `dispose`, `getInstance`, `getOrCreateInstance`.

```js
const chip = oudsWeb.Button.getOrCreateInstance(element);
chip.toggle();
```

> **Not Bootstrap:** Chips are an OUDS Web-specific component (not present in Bootstrap). Structure uses `.chips-container`, `.chip`, `.chip-filter`/`.chip-suggestion`, `.chip-interactive`. Filter chips support checkbox, radio, and button implementations.
