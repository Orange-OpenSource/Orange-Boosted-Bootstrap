# Bullet list

Styled lists using `.bullet-list` on `<ul>` or `<ol>` elements.

## Unordered lists

```html
<ul class="bullet-list">
  <li>Item</li>
  <li>Item</li>
</ul>
```

Nested lists get different markers automatically per nesting level. Only the top-level `<ul>` needs `.bullet-list`.

## Ordered lists

```html
<ol class="bullet-list">
  <li>Step</li>
  <li>Step</li>
</ol>
```

## Marker color

- Default marker uses brand color
- `.bullet-list-default-color` — switches marker to default body color
- `.bullet-list-brand-color` — explicitly sets brand color (useful for mixing)

## Custom marker

Set `--bs-bullet-list-custom-marker` CSS custom property on the `<ul>`, `<ol>`, or individual `<li>`:

```html
<style>
  .bullet-list-heart {
    --bs-bullet-list-custom-marker: url("data:image/svg+xml,...");
  }
</style>
<ul class="bullet-list bullet-list-heart">
  <li>Custom item</li>
</ul>
```

Apply on `<li>` for per-item custom markers.

## Tick marker

- Via SCSS: set `$enable-bullet-list-tick: true`, then use `.bullet-list-tick`
- Via CSS custom property: set `--bs-bullet-list-custom-marker` to a tick SVG

## Mixed lists

Mix `<ol>` and `<ul>` — add `.bullet-list` to nested lists of a different type.

## Bare lists

`.bullet-list-bare` — no markers, retains indentation.

## Text style

- Default: body large, bold
- `.fs-bm` — body medium font size
- `.fw-normal` — normal font weight

## Utilities

- `.list-unstyled` — removes all styles (immediate children only)
- `.list-inline` + `.list-inline-item` — inline list

## Skeleton

Wrap in `<div aria-busy="true" inert>`.

> **Not Bootstrap:** `.bullet-list` is an OUDS Web-specific component with custom markers, brand colors, and nesting behavior. Not present in Bootstrap. Supports `--bs-bullet-list-custom-marker` for custom icons.
