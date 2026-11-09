# Reboot

Element-specific CSS changes providing a consistent baseline. Builds on Normalize.

## Key Decisions

- Use `px` instead of `em` for fixed component spacing
- No `margin-top` — only `margin-bottom` (single-direction margin)
- Block elements use `px` for margins
- `max-width` on all font references (remove with `.mw-none` utility)
- Minimal `font` declarations, using `inherit` where possible

## Page Defaults

- `box-sizing: border-box` globally on all elements (including `::before`/`::after`)
- No base `font-size` on `<html>` (browser default 16px assumed); `font-size: 1rem` on `:root` children
- `:root` children set `font-family`, `font-weight`, `line-height`, `color`
- `background-color` on `:root` children defaults to `#fff`

## Font Stack

Custom fonts loaded from CDN with native font stack as fallback. Font faces generated in `_root.scss` from `$custom-font-cdn-urls` map. Customize URLs to avoid loading from Internet.

- `$font-family-base` — body font
- `$font-family-code` — code/monospace font

## Headings

`<h1>`–`<h6>`: `margin-top` removed, `margin-bottom` set to `$ouds-space-fixed-medium`, tightened `line-height`. Override color via `--bs-heading-color`.

## Paragraphs

`<p>`: `margin-top` removed, `margin-bottom` set to `$ouds-space-fixed-medium`. Remove with `.mb-none`.

## Links

- Bold and underlined by default
- Change on `:hover`, no `:visited` style by default
- Disabled style via `aria-disabled="true"`
- `.visited-links` utility class (on link or parent) to style `:visited` links (Orange brand)
- Placeholder links (no `href`) reset to default `color`/`text-decoration`

```html
<a href="#">Normal link</a>
<a aria-disabled="true">Disabled link</a>
<div class="visited-links">
    <a href="">Visited link</a>
</div>
```

### Links on Colored Backgrounds

Use appropriate `data-bs-theme` and `.bg-surface-*` classes:

```html
<div class="bg-surface-brand-primary p-large">
  <div data-bs-theme="dark">
    This is a <a href="#">link on colored background</a>.
  </div>
</div>
```

## Horizontal Rules

Styled via `border-top`, inherits `border-color` via `color`. Customize with border utilities. See Divider component.

## Lists

Refer to Bullet list component for `<ul>`/`<ol>` styling, `.list-unstyled`, `.list-inline`.

## Forms

- `<fieldset>`: no borders, padding, or margin
- `<legend>`: displayed as heading
- `<label>`: `display: inline-block`
- `<input>`, `<select>`, `<textarea>`, `<button>`: `margin` removed, `line-height: inherit`
- `<textarea>`: vertical resize only
- `<button>`, `<input>` buttons: `cursor: pointer` when `:not(:disabled)`
- `role="button"` elements get `cursor: pointer`

## HTML5 `[hidden]`

Enhanced to `display: none !important` to prevent accidental overrides.
