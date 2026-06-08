# Object Fit

Control how replaced elements (`<img>`, `<video>`) are resized to fit their container.

## Classes

- `.object-fit-contain`
- `.object-fit-cover`
- `.object-fit-fill`
- `.object-fit-scale` (maps to `scale-down`)
- `.object-fit-none`

```html
<img src="..." class="object-fit-contain border" />
<img src="..." class="object-fit-cover border" />
<img src="..." class="object-fit-fill border" />
<img src="..." class="object-fit-scale border" />
<img src="..." class="object-fit-none border" />
```

## Responsive variants

`.object-fit-{breakpoint}-{value}`

> **Not Bootstrap:** OUDS Web breakpoints are `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`.

```html
<img src="..." class="object-fit-md-contain" />
<img src="..." class="object-fit-xl-cover" />
```

## Video

Works on `<video>` elements the same way:

```html
<video src="..." class="object-fit-cover" autoplay></video>
```
