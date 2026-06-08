# Text

Utilities for text alignment, wrapping, weight, size, transform, and decoration.

## Text alignment

Responsive classes: `.text-{breakpoint}-{start|center|end}`

```html
<p class="text-start">Start aligned text on all viewport sizes.</p>
<p class="text-center mx-auto">Center aligned text on all viewport sizes.</p>
<p class="text-end ms-auto">End aligned text on all viewport sizes.</p>
<p class="text-md-end ms-md-auto">End aligned from MD breakpoint.</p>
```

Combine `.text-end` with `.ms-auto` (or `.text-center` with `.mx-auto`) for proper alignment.

## Text wrapping and overflow

```html
<div class="text-wrap" style="width: 6rem;">This text should wrap.</div>
<div class="text-nowrap" style="width: 8rem;">
  This text should overflow the parent.
</div>
```

## Word break

```html
<p class="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
```

Note: `.text-break` is removed from RTL compiled CSS (word breaking is not possible in Arabic).

## Text transform

```html
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
```

## Font size

> **Not Bootstrap:** OUDS Web uses semantic font-size classes instead of Bootstrap's `.fs-1` through `.fs-6`. These classes set `font-size`, `line-height`, `letter-spacing`, and `max-width` together (responsive across mobile/tablet/desktop). Use `.mw-none` to remove the `max-width` if needed.

| Class     | Font reference |
| --------- | -------------- |
| `.fs-dl`  | Display large  |
| `.fs-dm`  | Display medium |
| `.fs-ds`  | Display small  |
| `.fs-hxl` | Heading xlarge |
| `.fs-hl`  | Heading large  |
| `.fs-hm`  | Heading medium |
| `.fs-hs`  | Heading small  |
| `.fs-bl`  | Body large     |
| `.fs-bm`  | Body medium    |
| `.fs-bs`  | Body small     |
| `.fs-cm`  | Code medium    |

```html
<p class="fs-hl">Heading large text</p>
<p class="fs-bm">Body medium text</p>
<p class="fs-cm font-monospace">Code medium text</p>
```

## Font weight

> **Not Bootstrap:** OUDS Web only provides `.fw-bold`, `.fw-medium`, and `.fw-normal`. Bootstrap compatibility mode adds `.fw-bolder`, `.fw-semibold`, `.fw-light`, `.fw-lighter`. Medium font-weight is restricted to label and body font references.

```html
<p class="fw-bold">Bold text.</p>
<p class="fw-medium">Medium weight text.</p>
<p class="fw-normal">Normal weight text.</p>
```

## Line height

Requires Bootstrap compatibility to be enabled: `.lh-1`, `.lh-sm`, `.lh-base`, `.lh-lg`.

## Monospace

```html
<p class="font-monospace">This is in monospace</p>
```

## Reset color

```html
<p class="text-muted">
  Secondary text with a <a href="#" class="text-reset">reset link</a>.
</p>
```

## Text decoration

```html
<p class="text-decoration-underline">Underlined text.</p>
<p class="text-decoration-line-through">Strikethrough text.</p>
<a href="#" class="text-decoration-none">No underline on this link.</a>
```
