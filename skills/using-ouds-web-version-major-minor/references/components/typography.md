# Typography

Typography is a set of UI elements that structure and style text content. Five types: **Heading**, **Display**, **Body**, **Label**, **Code**.

Use the HTML tag matching the **semantic meaning** of the content (heading, paragraph, code snippet, etc.) — never pick a tag just because of how it looks on screen; appearance is handled by the class/token, not the tag.

## Heading

HTML `<h1>` through `<h6>` — each sets `font-size`, `line-height`, `letter-spacing`, `font-weight: bold`, and `max-width` (remove with `.mw-none` [width utility](../utilities/sizing.md)). Responsive across 3 breakpoint ranges.

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

Classes `.h1` through `.h6` are also available, for when a heading needs to be styled like another level without using the associated HTML element:

```html
<h2 class="h1">h2 element styled like a h1</h2>
<h3 class="h2">h3 element styled like a h2</h3>
```

> **Prefer the real heading element:** use `<h1>`–`<h6>` to represent headings in the document structure. Use `.h1`–`.h6` only to give an *actual heading* a visual size different from its semantic level (e.g. `<h2 class="h1">`) — never on a non-heading element such as `<p class="h1">`: screen reader users rely on real heading elements to navigate the page, and a styled `<p>` is invisible to that navigation.

### Heading with marker

A brand-colored marker can be displayed below a heading large (`<h2>` or `.h2`) to reinforce visual emphasis and information hierarchy. Add the `.marker` class:

```html
<h2 class="marker">h2. OUDS Web heading with marker</h2>
<h3 class="h2 marker">h3 element styled like a h2, with marker</h3>
```

> **Brand-dependent:** the marker only renders if the active theme defines the `$ouds-typography-heading-large-marker` flag and a `$ouds-heading-large-marker-img` asset. It is available on Orange and Orange Compact; Sosh does not define a marker image, so `.marker` has no visible effect there.

## Display

Larger, more opinionated heading styles for impactful content (landing pages, marketing, key messages). Use sparingly. **OUDS Web uses named sizes, not numbers.**

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

> **Not Bootstrap:** Bootstrap uses `.display-1` through `.display-6`. OUDS Web uses `.display-large`, `.display-medium`, `.display-small`. With `$enable-bootstrap-compatibility: true`, `.display-1` through `.display-6` are also available.

`.display-large`/`.display-medium`/`.display-small` are equivalent to the font-size text utilities `.fs-dl`/`.fs-dm`/`.fs-ds` (except for `font-weight`) — both also set `line-height`, `letter-spacing`, and `max-width`.

Sass: `$display-font-sizes`, `$display-font-weight`, `$display-font-family`, `$display-font-style`, `$display-line-height`.

## Body

Regular body text, used for paragraphs, descriptions, and informational messages. Only headings, display headings, and `<strong>` text use **bold** by default; body text uses `normal` font-weight (overridable via [font weight utilities](../utilities/text.md)). Body medium is set by default on the `:root` element.

| Reference   | Class/Element         |
| ----------- | --------------------- |
| Body large  | `.lead`               |
| Body medium | Default `<p>`         |
| Body small  | `.small` or `<small>` |

```html
<p class="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>

<p>This is a regular body paragraph.</p>

<p class="small">This is a small paragraph.</p>
<p><small>This is another small paragraph.</small></p>
```

`.lead`, default `<p>`, and `.small`/`<small>` are equivalent to the font-size text utilities `.fs-bl`, `.fs-bm`, `.fs-bs` — all of them also set `line-height`, `letter-spacing`, and `max-width`. Use the appropriate HTML tag to convey the right semantic meaning (generally a `<p>`).

> For other inline text elements (`<mark>`, `<del>`, `<s>`, `<ins>`, `<u>`) and blockquotes, see [Reboot](../foundation/reboot.md).

## Label

Label is non-responsive text for compact UI components such as buttons, form fields, badges, and tags — single value regardless of breakpoint, unlike Heading/Display/Body (responsive). Four size levels, `normal` font-weight by default:

| Class      | Level          |
| ---------- | -------------- |
| `.fs-lxl`  | Label xlarge   |
| `.fs-ll`   | Label large    |
| `.fs-lm`   | Label medium   |
| `.fs-ls`   | Label small    |

```html
<span class="fs-lm">Label medium text</span>
```

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

> To size text in a custom component rather than using one of the classes above, use the `get-font-size()` composite-token mixin — see [Tokens](../foundation/tokens.md#composite-tokens).
