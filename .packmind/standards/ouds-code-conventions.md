---
name: ouds-code-conventions
description: >
  HTML, SCSS, and JavaScript style guide for OUDS Web contributions.
  Covers naming conventions, required mixins, forbidden values, token usage, and file formatting.
scope: "All source files: scss/**/*.scss, js/src/**/*.js, site/**/*.{html,mdx}"
applyTo: "**/*.{scss,js,html,mdx}"
---

# OUDS Web — Code Conventions

## Scope

All source files: `scss/**/*.scss`, `js/src/**/*.js`, `site/**/*.{html,mdx}`.

---

## Rules

### File formatting

- Use **UTF-8** encoding, **LF** line endings, **2-space** indentation (no tabs), a final newline, and no trailing whitespace. Applies to every file type (SCSS, JS, HTML, MDX, JSON, YAML).

### HTML: use semantic elements for structure

Use `<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`, `<aside>` appropriately. Follow [Code Guide](https://codeguide.co/#html) for attribute order and self-closing tags.

### HTML: use `<button>` for actions, `<a>` for navigation

Never use `<div>` or `<span>` as interactive elements. Failing to do so breaks keyboard navigation and accessibility.

```html
<!-- Good -->
<button type="button" class="btn btn-brand">Submit</button>
<a href="/page">Go to page</a>

<!-- Bad -->
<div onclick="doAction()" class="btn">Submit</div>
<span onclick="navigate()">Go to page</span>
```

### HTML: use `data-bs-theme` for color modes — never media queries

Color modes are controlled via the `data-bs-theme` attribute on HTML elements. Never use `prefers-color-scheme` media queries for theme switching.

```html
<!-- Good -->
<div data-bs-theme="dark">...</div>

<!-- Bad -->
<style>@media (prefers-color-scheme: dark) { ... }</style>
```

### SCSS: follow the `$component-state-property-size` variable naming formula

Examples: `$nav-link-disabled-color`, `$modal-content-box-shadow-xs`, `$btn-padding-y`.

### SCSS: always add `!default` on global variables

Every SCSS variable defined at module scope must use `!default`. Exception: local/temporary variables inside mixins or functions.

```scss
// Good
$btn-padding-y: $ouds-button-space-padding-block !default;

// Bad
$btn-padding-y: 8px;
```

### SCSS: always use OUDS design tokens — never hardcode values

Never hardcode colors, dimensions, or spacing. Use semantic tokens for spacing, CSS custom properties for colors, and component tokens for component-specific values.

```scss
// Good
padding: $ouds-space-padding-block-medium;
color: var(--#{$prefix}color-content-default);
background: var(--#{$prefix}color-bg-primary);
margin: $ouds-card-space-padding-block;

// Bad
padding: 16px;
color: #333333;
background: #ffffff;
```

### SCSS: use `@include border-radius()` and `@include transition()` — never direct properties

Stylelint forbids using `border-radius`, `transition`, and all corner-radius variants directly. Always use the corresponding SCSS mixins.

```scss
// Good
@include border-radius($ouds-border-radius-default);
@include transition(opacity 0.15s linear);
@include border-top-start-radius($ouds-border-radius-default);

// Bad
border-radius: 4px;
transition: opacity 0.15s linear;
border-top-left-radius: 2px;
```

Mixin equivalents for corner radii use **logical directions** (not physical):

| Forbidden property           | Required mixin                                |
| ---------------------------- | --------------------------------------------- |
| `border-top-left-radius`     | `@include border-top-start-radius($value)`    |
| `border-top-right-radius`    | `@include border-top-end-radius($value)`      |
| `border-bottom-right-radius` | `@include border-bottom-end-radius($value)`   |
| `border-bottom-left-radius`  | `@include border-bottom-start-radius($value)` |

### SCSS: use `border: 0` not `border: none`

`border: none` is a Stylelint violation (`declaration-property-value-disallowed-list`).

### SCSS: never use `lighten()` or `darken()` Sass functions

These functions are in `function-disallowed-list`. Use the appropriate lighter/darker token variant from `_semantic.scss` or `_component.scss` instead.

### SCSS: never use raw tokens in component SCSS

Raw tokens (`$core-ouds-*`, `$core-orange-*`, `$core-sosh-*`) are primitives. Using them in component SCSS couples components to primitive values and bypasses the token system.

```scss
// Good — use semantic or component tokens
padding: $ouds-space-padding-block-medium;
color: var(--#{$prefix}color-content-primary);

// Bad — raw tokens in component SCSS
padding: $core-ouds-dimension-200;
color: $core-orange-color-orange-550;
```

### SCSS: use `color-mode()` mixin for theme-specific styles

Never write raw `[data-bs-theme="light"]` selectors or `@media (prefers-color-scheme:...)` for theme switching.

```scss
// Good
@include color-mode(light, true) {
  --#{$prefix}color-action-enabled: #{$ouds-color-action-enabled-light};
}
@include color-mode(dark) {
  --#{$prefix}color-action-enabled: #{$ouds-color-action-enabled-dark};
}

// Bad
[data-bs-theme="light"] { --bs-color-action-enabled: #000; }
@media (prefers-color-scheme: dark) { ... }
```

### SCSS: use `$ouds-root-selector` not `:root` directly

```scss
// Good
#{$ouds-root-selector} {
  --#{$prefix}btn-border-radius: #{$btn-border-radius};
}

// Bad
:root {
  --bs-btn-border-radius: 4px;
}
```

### SCSS: mark Bootstrap overrides with `// OUDS mod:` comments

When modifying Bootstrap's original code, prefix the comment with `// OUDS mod:`.

```scss
display: flex; // OUDS mod: instead of `inline-block`
// OUDS mod: no `@include rfs($btn-font-size, --#{$prefix}btn-font-size)`

// OUDS mod: loading buttons
.btn.loading-indeterminate { ... }
// End mod
```

### JavaScript: no semicolons

`semi: ["error", "never"]` — enforced by ESLint.

```javascript
// Good
const x = 1

// Bad
const x = 1;
```

### JavaScript: no trailing commas

`comma-dangle: ["error", "never"]`.

```javascript
// Good
const obj = { a: 1, b: 2 }

// Bad
const obj = { a: 1, b: 2, }
```

### JavaScript: prefer template literals over concatenation

```javascript
// Good
const msg = `Hello, ${name}`

// Bad
const msg = "Hello, " + name
```

### JavaScript: add `.js` extension on all local imports

```javascript
// Good
import Foo from './foo.js'

// Bad
import Foo from './foo'
```

### JavaScript: no `console.*` in production code (`js/src/`)

`no-console: "error"` bans all `console.log`, `console.warn`, `console.error` in `js/src/`. They are allowed in `build/`, tests, and `site/`.

### JavaScript: use strict mode

Every JS module in `js/src/` must have `'use strict'` at the top.

---

## Examples

### Good — complete SCSS component structure

```scss
// scss/_my-component.scss

// 1. Root-level custom properties
#{$ouds-root-selector} {
  --#{$prefix}my-component-border-radius: #{$ouds-border-radius-default};
}

// 2. Main component class
.my-component {
  // scss-docs-start my-component-css-vars
  --#{$prefix}my-component-padding: #{$ouds-space-padding-block-medium};
  --#{$prefix}my-component-color: #{$ouds-color-content-default};
  // scss-docs-end my-component-css-vars

  padding: var(--#{$prefix}my-component-padding);
  color: var(--#{$prefix}my-component-color);
  @include border-radius(var(--#{$prefix}my-component-border-radius));
  @include transition(opacity 0.15s linear);
  border: 0;

  &:focus-visible {
    @include focus-visible();
  }
}
```

### Bad — multiple violations

```scss
.my-component {
  padding: 16px;            // hardcoded spacing
  color: #333333;           // hardcoded color
  border-radius: 4px;       // direct property — use @include
  transition: opacity 0.15s; // direct property — use @include
  border: none;             // use border: 0
  background: lighten($core-ouds-color-orange-550, 10%); // raw token + lighten()
}
```
