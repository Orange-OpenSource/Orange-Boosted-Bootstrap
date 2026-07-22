# Border

## Additive borders

```html
<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>
```

## Subtractive borders

> **Not Bootstrap:** Use `.border-none` instead of Bootstrap's `.border-0`. Same for sides: `.border-top-none`, `.border-end-none`, `.border-bottom-none`, `.border-start-none`.

```html
<span class="border border-none"></span>
<span class="border border-top-none"></span>
<span class="border border-end-none"></span>
<span class="border border-bottom-none"></span>
<span class="border border-start-none"></span>
```

## Border color

Generated from `$ouds-border-colors` Sass map. Use `.border-{token-name}`:

- `.border-default`, `.border-emphasis`, `.border-on-brand-primary`, etc.
- `.border-always-black`, `.border-always-white`
- `.border-always-on-black`, `.border-always-on-white`

For "on-" variants, place them inside their matching background:

```html
<div class="bg-always-black d-inline-flex p-xsmall">
  <span class="border border-always-on-black bg-transparent"></span>
</div>
```

## Border width

> **Not Bootstrap:** Use named width tokens instead of Bootstrap's numeric `.border-1` through `.border-5`.

- `.border-none`
- `.border-thin`
- `.border-medium`
- `.border-thick`
- `.border-thicker`

```html
<span class="border border-thin"></span>
<span class="border border-medium"></span>
<span class="border border-thick"></span>
<span class="border border-thicker"></span>
```

## Border radius

> **Not Bootstrap:** Use named size tokens instead of Bootstrap's `.rounded-0` through `.rounded-5`.

Add `.rounded-{size}` with optional side prefix (`-top`, `-end`, `-bottom`, `-start`):

Sizes: `none`, `small`, `medium`, `large`, `circle`, `pill`

```html
<img class="rounded-large" ... />
<img class="rounded-top-large" ... />
<img class="rounded-end-large" ... />
<img class="rounded-bottom-large" ... />
<img class="rounded-start-large" ... />
```

Combine side and size:

```html
<img class="rounded-bottom-small" ... />
<img class="rounded-start-medium" ... />
<img class="rounded-end-circle" ... />
<img class="rounded-large rounded-top-none" ... />
```

Note: `.rounded` alone maps to the "default" border radius design token (zero in Orange brand).

## Drag and drop

Use `.border-drag` for drop zone styling only:

```html
<span class="border border-drag"></span>
```
