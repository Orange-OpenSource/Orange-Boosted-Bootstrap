# Breakpoints

8 responsive breakpoints for controlling layout across device sizes. Mobile-first with `min-width` media queries.

> **Not Bootstrap:** Bootstrap has 6 breakpoints (`xs` through `xxl`). OUDS Web has 8: `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`.

## Available Breakpoints

| Breakpoint | Class prefix | Min-width        |
| ---------- | ------------ | ---------------- |
| 2x-small   | _(none)_     | 0 (default)      |
| X-small    | `xs`         | >=390px          |
| Small      | `sm`         | >=480px          |
| Medium     | `md`         | >=736px          |
| Large      | `lg`         | >=1024px         |
| X-large    | `xl`         | >=1320px         |
| 2x-large   | `2xl`        | >=1640px         |
| 3x-large   | `3xl`        | >=1880px         |

> **Breaking change (v1.3.0):** Responsive utilities use a **colon-prefix** format instead of the Bootstrap infix pattern.
> - Old (Bootstrap-style infix): `.{utility}-{breakpoint}-{value}` → e.g. `.d-md-none`, `.col-lg-6`
> - New (OUDS Web prefix): `{breakpoint}:{utility}-{value}` → e.g. `.md:d-none`, `.lg:col-6`
>
> The base `2xs` breakpoint has no prefix — base classes apply from `2xs` up (e.g. `.d-none`).

<a id="not-tailwind"></a>

> **Not Tailwind:** the `breakpoint:` prefix looks like Tailwind's responsive variants (`md:flex`, `lg:hidden`), but that's where the similarity ends — do not reuse Tailwind class names or conventions.
>
> | Need                     | Tailwind (wrong here)      | OUDS Web (correct)         |
> | ------------------------ | --------------------------- | ---------------------------- |
> | Hide from `md` up        | `md:hidden`                 | `md:d-none`                  |
> | Flex container from `lg` | `lg:flex`                   | `lg:d-flex`                  |
> | Gap                      | `gap-4`                     | `gap-medium`                 |
> | Padding                  | `p-4`                       | `p-medium`                   |
> | Column span              | `md:w-1/2` / `grid-cols-2`  | `md:col-6`                   |
> | Float                    | `float-right`               | `float-end`                  |
> | Arbitrary value          | `w-[327px]`, `bg-[#fff]`   | *not supported* — use tokens |
>
> OUDS Web utility class names come from Bootstrap's utility API and OUDS design tokens, not from Tailwind's scale. There is also no Tailwind-style config file, JIT/on-demand compiler, or `@apply` — classes are precompiled and shipped in the theme's CSS bundle, like the rest of Bootstrap.

With `$enable-bootstrap-compatibility: true`, `xxl` is an alias for `2xl`.

Customizable via `$grid-breakpoints` Sass map in `_variables.scss`.

## Media Query Mixins

### Min-width (mobile-first)

```scss
// No media query needed for 2xs (it's the default)
@include media-breakpoint-up(xs) { ... }
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(2xl) { ... }
@include media-breakpoint-up(3xl) { ... }
```

### Max-width

```scss
@include media-breakpoint-down(xs) { ... }  // <390px
@include media-breakpoint-down(sm) { ... }  // <480px
@include media-breakpoint-down(md) { ... }  // <736px
// etc.
```

Subtracts `.02px` from breakpoint for `max-width` value.

### Single breakpoint

```scss
@include media-breakpoint-only(md) { ... }
// Outputs: @media (min-width: 736px) and (max-width: 1023.98px) { ... }
```

### Between breakpoints

```scss
@include media-breakpoint-between(md, xl) { ... }
// Outputs: @media (min-width: 736px) and (max-width: 1319.98px) { ... }
```
