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
- `background-color` on `:root` children set via `--bs-color-bg-primary`

## Font Stack

Custom fonts loaded from CDN with native font stack as fallback. Font faces generated in `_root.scss` from `$custom-font-cdn-urls` map. Customize URLs to avoid loading from Internet.

- `$font-family-base` — body font
- `$font-family-code` — code/monospace font

## Headings

`<h1>`–`<h6>`: `margin-top` removed, `margin-bottom` set to `$ouds-space-fixed-medium`, tightened `line-height`. Override color via `--bs-heading-color`.

## Paragraphs

`<p>`: `margin-top` removed, `margin-bottom` set to `$ouds-space-fixed-medium`. Remove with `.mb-none`.

## Inline Text Elements

```html
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as bold text too,</em> but would natively be italicized.</p>
```

Use these tags for semantic purpose: `<mark>` (marked/highlighted for reference), `<small>` (side-comments, legal text — uses [body small](../components/typography.md#body)), `<s>` (no longer relevant/accurate), `<u>` (non-textual annotation). To style text without the semantic meaning, use the equivalent classes instead: `.mark`, `.small`, `.text-decoration-underline` (like `<u>`), `.text-decoration-line-through` (like `<s>`). `<b>` and `<i>` remain available for highlighting without added importance / voice & technical terms.

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

## Blockquotes

Style applies directly to the bare `<blockquote>` element — **there is no `.blockquote` class** (removed; do not add it). Uses [body large text](../components/typography.md#body).

```html
<blockquote>
  <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>
```

### Naming a source

The HTML spec requires attribution to be placed outside the `<blockquote>`. Wrap the `<blockquote>` in a `<figure>` and add a `<figcaption>` (or a block-level element like `<p>`) with the `.blockquote-footer` class **immediately after** the `<blockquote>` — it only renders its styling (dash prefix, body small text) when it is the adjacent sibling of a `<blockquote>` (CSS selector `blockquote + .blockquote-footer`). Wrap the source name in `<cite>`.

```html
<figure>
  <blockquote>
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
```

> **Breaking change (v1.6.0):** previously `.blockquote` and `.blockquote-footer` worked as standalone classes. Now the plain `<blockquote>` element carries the style, and `.blockquote-footer` requires the adjacent-sibling structure above to be styled.

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
