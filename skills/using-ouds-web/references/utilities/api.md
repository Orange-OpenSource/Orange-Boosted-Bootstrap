# Utility API

Sass-based tool to generate utility classes. All utilities are defined in the `$utilities` map.

## Utility map options

| Option              | Required | Description                                                                  |
| ------------------- | -------- | ---------------------------------------------------------------------------- |
| `property`          | Yes      | CSS property name (string or array of strings)                               |
| `values`            | Yes      | List or map of values. If map key is `null`, `class` is not prepended        |
| `class`             | No       | Custom class prefix. If `null`, uses `values` keys directly as class names   |
| `css-var`           | No       | Generate CSS custom properties instead of CSS rules                          |
| `css-variable-name` | No       | Custom name for the CSS variable (un-prefixed)                               |
| `local-vars`        | No       | Map of local CSS variables to generate alongside rules                       |
| `state`             | No       | Pseudo-class variants (e.g., `hover`, `focus`). Space-separated for multiple |
| `responsive`        | No       | Generate responsive classes per breakpoint                                   |
| `print`             | No       | Generate print-only classes inside `@media print`                            |
| `rtl`               | No       | Keep utility in RTL output (default `true`)                                  |

## Sass import order for customization

```scss
@import "@ouds/web/scss/config";
@import "@ouds/web/scss/functions";
@import "@ouds/web/scss/tokens/raw";
@import "@ouds/web/scss/tokens/semantic";
@import "@ouds/web/scss/tokens/semantic-colors-custom-props";
@import "@ouds/web/scss/tokens/composite";
@import "@ouds/web/scss/tokens/component-colors-custom-props";
@import "@ouds/web/scss/tokens/component";
@import "@ouds/web/scss/variables";
@import "@ouds/web/scss/variables-dark";
@import "@ouds/web/scss/maps";
@import "@ouds/web/scss/mixins";
@import "@ouds/web/scss/utilities";

// Customizations here...

@import "@ouds/web/scss/utilities/api";
```

## Override utilities

Use the same key in `$utilities` to replace an existing utility entirely.

## Add utilities

Use `map-merge` to add new entries:

```scss
$utilities: map-merge(
  $utilities,
  (
    "cursor": (
      property: cursor,
      class: cursor,
      responsive: true,
      values: auto pointer grab,
    ),
  )
);
```

## Modify utilities

Use `map-get` + `map-merge` to modify nested values:

```scss
$utilities: map-merge(
  $utilities,
  (
    "width": map-merge(
        map-get($utilities, "width"),
        (
          values: map-merge(
              map-get(map-get($utilities, "width"), "values"),
              (
                10: 10%,
              )
            ),
        )
      ),
  )
);
```

## Enable responsive on existing utility

```scss
"border-ouds": map-merge(
  map-get($utilities, "border-ouds"),
  ( responsive: true ),
),
```

> **Not Bootstrap:** The utility key for borders is `"border-ouds"`, and margin-start is `"margin-start-ouds"`.

## Rename utilities

Override the `class` key via `map-merge`:

```scss
"margin-start-ouds": map-merge(
  map-get($utilities, "margin-start-ouds"),
  ( class: ml ),
),
```

## Remove utilities

Use `map-remove()` or set key to `null`:

```scss
$utilities: map-remove($utilities, "width", "float");
// or
$utilities: map-merge(
  $utilities,
  (
    "width": null,
  )
);
```

## RTL removal

Set `rtl: false` to exclude a utility from RTL output.

## Importance

All generated utilities include `!important`. Toggle globally with `$enable-important-utilities`.

> **Not Bootstrap:** OUDS Web breakpoints are: `2xs` (default, no abbreviation), `xs` (390px), `sm` (480px), `md` (736px), `lg` (1024px), `xl` (1320px), `2xl` (1640px), `3xl` (1880px).
