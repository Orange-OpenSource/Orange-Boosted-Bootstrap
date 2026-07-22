# Links

> **Not Bootstrap:** OUDS Web uses a dedicated `.link` class for standalone links with specific padding, alignment, focus/hover/active styles, and size variants. Bootstrap has no equivalent standalone link component class.

## Overview

Use `.link` on `<a>` for standalone links (not inline within a sentence). For inline links, use a plain `<a>` tag as per the reboot page.

`:visited` standalone links have no specific styling.

```html
<a class="link" href="#">This is an example of link</a>
```

### Alternative tag

Use `.link` on `<button>` elements too:

```html
<button class="link" type="submit">Button link</button>
```

## Variants

### On colored background

Add `.link-on-colored-bg` along with the appropriate `data-bs-theme` on a parent. Use on colored backgrounds for accessible readability.

```html
<div class="bg-surface-brand-primary p-large">
  <div data-bs-theme="light">
    <a class="link link-on-colored-bg" href="#">Link on colored bg</a>
  </div>
</div>
```

### With chevron

Add `.link-chevron` for a right-side chevron. Add `.back` for a left-side chevron.

```html
<a class="link link-chevron" href="#">Link with chevron</a>
<a class="link link-chevron back" href="#">Link with back chevron</a>
```

### With icon

Use `.icon-link` with an icon before the text. Icons auto-size to `1em`. For font icons, add `.icon` class.

```html
<a class="link icon-link" href="#">
  <svg aria-hidden="true">
    <use xlink:href="/path/to/sprite.svg#heart-empty" />
  </svg>
  Link with icon
</a>
```

## States

### Disabled

Add `aria-disabled="true"` to `<a>`. Remove `href` when possible. Uses `pointer-events: none`.

```html
<a class="link" aria-disabled="true">Disabled link</a>
```

If `href` must be kept and the link conveys no useful info, also add `tabindex="-1"` and disable via JS. If it conveys useful info, keep it keyboard-focusable (do not add `tabindex="-1"`).

```html
<a href="#" class="link" tabindex="-1" aria-disabled="true"
  >Non-focusable disabled link</a
>
<a href="#" class="link" aria-disabled="true">Focusable disabled link</a>
```

### Skeleton

Wrap in `[aria-busy="true"]` with `inert`:

```html
<div aria-busy="true" inert>
  <a class="link" href="#">Link text</a>
</div>
```

## Sizes

Add `.link-small` for a smaller size.

```html
<a class="link" href="#">Default link</a>
<a class="link link-small" href="#">Small link</a>
```
