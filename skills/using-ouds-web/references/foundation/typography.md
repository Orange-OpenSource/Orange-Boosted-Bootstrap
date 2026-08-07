# Typography

Global typography settings, headings, body text, display headings, and text utilities.

## Global Settings

- Custom font stack with native font fallback per OS/device
- Browser default root `font-size` (16px) — set `$font-size-base` in `rem`
- `max-width` applied on all font references for readability — remove with `.mw-none` utility
- `--bs-color-bg-primary` sets `background-color` on `:root` children
- Sass variables: `$font-family-base`, `$font-size-base`, `$line-height-base`
- Styles in `_reboot.scss`, variables in `_variables.scss`

## Headings

HTML `<h1>` through `<h6>` — each sets `font-size`, `line-height`, `letter-spacing`, `font-weight: bold`, and `max-width`. Responsive across 3 ranges.

| Heading        | Element | Breakpoints 2xs–sm | Breakpoints md–lg | Breakpoints xl+ |
| -------------- | ------- | ------------------ | ----------------- | --------------- |
| Heading xlarge | `<h1>`  | token-based        | token-based       | token-based     |
| Heading large  | `<h2>`  | token-based        | token-based       | token-based     |
| Heading medium | `<h3>`  | token-based        | token-based       | token-based     |
| Heading small  | `<h4>`  | token-based        | token-based       | token-based     |
| Body large     | `<h5>`  | token-based        | token-based       | token-based     |
| Body medium    | `<h6>`  | token-based        | token-based       | token-based     |

```html
<h1>h1. OUDS Web heading</h1>
<h2>h2. OUDS Web heading</h2>
<h3>h3. OUDS Web heading</h3>
<h4>h4. OUDS Web heading</h4>
<h5>h5. OUDS Web heading</h5>
<h6>h6. OUDS Web heading</h6>
```

Classes `.h1` through `.h6` available for matching heading styling without the HTML element:

```html
<p class="h1">h1. OUDS Web heading</p>
```

## Display Headings

Larger, more opinionated heading styles. **OUDS Web uses named sizes, not numbers.**

| Class             | Description      |
| ----------------- | ---------------- |
| `.display-large`  | Largest display  |
| `.display-medium` | Medium display   |
| `.display-small`  | Smallest display |

```html
<h1 class="display-large">Display large</h1>
<h1 class="display-medium">Display medium</h1>
<h1 class="display-small">Display small</h1>
```

> **Not Bootstrap:** Bootstrap uses `.display-1` through `.display-6`. OUDS Web uses `.display-large`, `.display-medium`, `.display-small`.

With `$enable-bootstrap-compatibility: true`, `.display-1` through `.display-6` are also available.

Sass: `$display-font-sizes`, `$display-font-weight`, `$display-font-family`, `$display-font-style`, `$display-line-height`.

## Regular Texts

Only headings, display headings, and `<strong>` text use **bold**. Other content uses `normal` font-weight.

| Reference   | Class/Element         |
| ----------- | --------------------- |
| Body large  | `.lead`               |
| Body medium | Default `<p>`         |
| Body small  | `.small` or `<small>` |

### Lead

```html
<p class="lead">
  This is a lead paragraph. It stands out from regular paragraphs.
</p>
```

### Small

```html
<p><small>This is a small paragraph.</small></p>
<p class="small">This is a small paragraph.</p>
```

## Inline Text Elements

```html
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p>
  <ins
    >This line of text is meant to be treated as an addition to the
    document.</ins
  >
</p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p>
  <em>This line rendered as bold text too,</em> but would natively be
  italicized.
</p>
```

Equivalent classes: `.mark`, `.small`, `.text-decoration-underline`, `.text-decoration-line-through`.

## Blockquotes

Uses body large text. Wrap with `<blockquote class="blockquote">`.

```html
<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>
```

### With Attribution

```html
<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
```

## Sass Mixin: `get-font-size()`

For custom components, use the `get-font-size()` mixin. Label levels: `small`, `medium`, `large`, `xlarge`.

```scss
.my-custom-component {
  @include get-font-size("label-medium");
}
```

Outputs:

```css
.my-custom-component {
  font-size: var(--bs-font-size-label-medium);
  line-height: var(--bs-font-line-height-label-medium);
  letter-spacing: var(--bs-font-letter-spacing-label-medium); /* ltr only */
}
```
