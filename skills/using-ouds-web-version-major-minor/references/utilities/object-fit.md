# Object Fit

Control how replaced elements (`<img>`, `<video>`) are resized to fit their container.

> Responsive examples below use the `{breakpoint}:` prefix — see [Breakpoints](../layout/breakpoints.md#not-tailwind) for the syntax and a note on why this isn't Tailwind.

## Classes

- `.object-fit-contain`
- `.object-fit-cover`
- `.object-fit-fill`
- `.object-fit-scale` (maps to `scale-down`)
- `.object-fit-none`

```html
<img src="..." class="object-fit-contain border" alt="" />
<img src="..." class="object-fit-cover border" alt="" />
<img src="..." class="object-fit-fill border" alt="" />
<img src="..." class="object-fit-scale border" alt="" />
<img src="..." class="object-fit-none border" alt="" />
```

## Responsive variants

`{breakpoint}:object-fit-{value}`

> **Not Bootstrap:** OUDS Web breakpoints are `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`.

```html
<img src="..." class="md:object-fit-contain" />
<img src="..." class="xl:object-fit-cover" />
```

## Video

Works on `<video>` elements the same way:

```html
<video src="..." class="object-fit-cover" controls></video>
```
