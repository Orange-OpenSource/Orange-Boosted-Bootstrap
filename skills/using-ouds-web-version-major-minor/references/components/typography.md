# Typography

Typography is a set of UI elements that structure and style text content: headings, display text, body text, labels, and code. Five types: **Heading**, **Display**, **Body**, **Label**, **Code**.

Use the HTML tag matching the **semantic meaning** of the content (heading, paragraph, code snippet, etc.) — never pick a tag just because of how it looks on screen; appearance is handled by the class/token, not the tag.

## Global Settings

- Custom font stack with native font fallback per OS/device
- Browser default root `font-size` (16px) — set `$font-size-base` in `rem`
- `max-width` applied on all font references for readability — remove with `.mw-none` utility
- `--bs-color-bg-primary` sets `background-color` on `:root` children
- Sass variables: `$font-family-base`, `$font-size-base`, `$line-height-base`
- Styles in `_reboot.scss` and `_typography.scss`, variables in `_variables.scss`

## Heading

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

```html
<!-- Good: <h2> for document structure, styled like an h1 -->
<h2 class="h1">Section title styled larger</h2>

<!-- Avoid: not a real heading, invisible to heading-based screen reader navigation -->
<p class="h1">Section title styled larger</p>
```

### Heading with marker

A brand-colored marker can be displayed below a heading large (`<h2>` or `.h2`) to reinforce visual emphasis and information hierarchy. Add the `.marker` class:

```html
<h2 class="marker">h2. OUDS Web heading with marker</h2>
<p class="h2 marker">h2. OUDS Web heading with marker</p>
```

> **Brand-dependent:** the marker only renders if the active theme defines the `$ouds-typography-heading-large-marker` flag and a `$ouds-heading-large-marker-img` asset. It is available on Orange and Orange Compact; Sosh does not define a marker image, so `.marker` has no visible effect there.

## Display

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

## Body

Regular body text, used for paragraphs, descriptions, and informational messages. Only headings, display headings, and `<strong>` text use **bold** by default; body text uses `normal` font-weight (overridable via [font weight utilities](../utilities/text.md)).

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

`.lead`, default `<p>`, and `.small`/`<small>` are equivalent to the font-size text utilities `.fs-bl`, `.fs-bm`, `.fs-bs` — all of them also set `line-height`, `letter-spacing`, and `max-width`.

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

> For blockquotes, see [Reboot](../foundation/reboot.md#blockquotes).

## Label

Label is non-responsive text for compact UI components such as buttons, form fields, badges, and tags — single value regardless of breakpoint (non-responsive), unlike Heading/Display/Body (responsive). Four size levels:

| Class      | Level          |
| ---------- | -------------- |
| `.fs-lxl`  | Label xlarge   |
| `.fs-ll`   | Label large    |
| `.fs-lm`   | Label medium   |
| `.fs-ls`   | Label small    |

```html
<span class="fs-lm">Label medium text</span>
```

Label texts use `normal` font-weight by default too.

## Code

Styles technical content like code snippets, commands, system values, and identifiers, using a monospace typeface. Single size — reserve it for content that genuinely needs a code-like representation.

> **Color:** `<code>` and `<pre>` no longer force a muted text color by default (the library leaves `color` to inherit the surrounding text color). If a muted appearance is desired, apply it explicitly, e.g. `color: var(--bs-color-content-muted)`.

### Inline code

```html
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
```

### Code blocks

Use `<pre><code>` for multiple lines; `<pre>` preserves whitespace/indentation, `<code>` marks the content as code.

```html
<pre><code>
if (document.getElementById('myId')) {
  document.getElementById('myId').addEventListener('click', () => {
    ...
  })
}
</code></pre>
```

## Sizing text in custom components

To size text in a custom component, use the `get-font-size()` composite-token mixin — see [Tokens](../foundation/tokens.md#composite-tokens).
