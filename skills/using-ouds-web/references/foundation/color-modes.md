# Color Modes

OUDS Web supports 4 color modes: `light`, `dark`, `root`, and `root-inverted`.

## Modes Overview

| Mode            | Type    | Behavior                                              |
| --------------- | ------- | ----------------------------------------------------- |
| `light`         | Static  | Always light text/components regardless of page theme |
| `dark`          | Static  | Always dark text/components regardless of page theme  |
| `root`          | Dynamic | Follows the main page theme                           |
| `root-inverted` | Dynamic | Opposite of the main page theme                       |

Set via `data-bs-theme` attribute on any element:

```html
<div data-bs-theme="dark">
  <!-- Everything inside is dark mode -->
</div>
```

> **Not Bootstrap:** Bootstrap has only `light` and `dark`. OUDS Web adds `root` and `root-inverted` dynamic modes.

## Static Modes

```html
<div data-bs-theme="dark">
  <p>Always dark mode</p>
  <button class="btn btn-strong">Dark mode button</button>
</div>

<div data-bs-theme="light">
  <p>Always light mode</p>
  <button class="btn btn-strong">Light mode button</button>
</div>
```

## Dynamic Modes

- `root` — resets to the main page theme (not meant for root element itself)
- `root-inverted` — sets the opposite of the main page theme

```html
<div data-bs-theme="root-inverted">
  <p>Inverted compared to main mode</p>
  <button class="btn btn-strong">Inverted mode button</button>
</div>
```

## Theme Selection Table

| Wanted text in light main | Wanted text in dark main | Use theme         |
| ------------------------- | ------------------------ | ----------------- |
| Dark                      | Dark                     | `"light"`         |
| Light                     | Light                    | `"dark"`          |
| Light                     | Dark                     | `"root-inverted"` |
| Dark                      | Light                    | `"root"`          |

## Enable Dark Mode Globally

```html
<!doctype html>
<html lang="en" data-bs-theme="dark">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>OUDS Web demo</title>
    <link href="{{cdn.css}}" rel="stylesheet" crossorigin="anonymous" />
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="{{cdn.js_bundle}}" crossorigin="anonymous"></script>
  </body>
</html>
```

## Sass Configuration

Disable dark mode: `$enable-dark-mode: false`

### color-mode() Mixin

```scss
// Data attribute approach (default)
$color-mode-type: data;

@include color-mode(dark) {
  .element {
    color: var(--bs-color-content-on-status--info-muted);
    background-color: var(--bs-color-surface-status-info-muted);
  }
}
// Outputs: [data-bs-theme=dark] .element { ... }
```

```scss
// Media query approach
$color-mode-type: media-query;

@include color-mode(dark) {
  .element { ... }
}
// Outputs: @media (prefers-color-scheme: dark) { .element { ... } }
```

### Custom Root Selector

For frameworks like Angular where `<html>` is not easily accessible:

```scss
$ouds-root-selector: "#app";
@import "../../../../node_modules/@ouds/web-orange/scss/ouds-web";
```

## JavaScript Color Mode Toggler

Include at the top of the page to reduce screen flickering. The toggler should control the `data-bs-theme` attribute on `<html>`.

## Important Warning

Do not use `data-bs-theme` on an element that also carries a `.bg-*` utility — the `background-color` will be overridden. Use two separate elements instead.
