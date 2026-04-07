---
name: ouds-component-patterns
description: >
  SCSS and JavaScript structural patterns for OUDS Web components.
  Covers CSS custom property declarations, state management, token reference levels,
  the BaseComponent JS pattern, and OUDS modification markers.
scope: "SCSS component files and JavaScript component files"
applyTo: "scss/_*.scss,scss/forms/_*.scss,js/src/*.js"
---

# OUDS Web — Component Patterns

## Scope

All SCSS component files (`scss/_*.scss`, `scss/forms/_*.scss`) and JavaScript component source files (`js/src/*.js`).

---

## Rules

### SCSS: declare CSS custom properties at the top of the component class, then consume via `var()`

Every component declares its CSS custom properties in a `scss-docs-start/end` block at the top of the main selector, then uses them for all property values. This enables runtime overrides and theming.

```scss
// Good
.badge {
  // scss-docs-start badge-css-vars
  --#{$prefix}badge-size: #{px-to-rem($ouds-badge-size-medium)};
  --#{$prefix}badge-color: #{$ouds-color-content-on-status-negative-emphasized};
  --#{$prefix}badge-bg: #{$ouds-color-surface-status-negative-emphasized};
  // scss-docs-end badge-css-vars

  display: inline-flex;
  min-width: var(--#{$prefix}badge-size);
  color: var(--#{$prefix}badge-color);
  background-color: var(--#{$prefix}badge-bg);
}

// Bad — declaring and consuming hardcoded values directly
.badge {
  display: inline-flex;
  min-width: 20px;
  color: #fff;
  background-color: #d9200b;
}
```

### SCSS: override CSS custom properties in variant classes and pseudo-classes — not properties

State or variant changes override the component's CSS custom properties, not the underlying CSS properties. This ensures that all consuming `var()` calls update automatically.

```scss
// Good — override the variable, not the property
.chip-interactive {
  --#{$prefix}chip-bg: #{$ouds-chip-color-bg-unselected-enabled};

  &:hover {
    --#{$prefix}chip-bg: #{$ouds-chip-color-bg-unselected-hover};
  }

  &:active {
    --#{$prefix}chip-bg: #{$ouds-chip-color-bg-unselected-pressed};
  }
}

// Bad — re-declaring background-color in each state
.chip-interactive {
  background-color: $ouds-chip-color-bg-unselected-enabled;

  &:hover {
    background-color: $ouds-chip-color-bg-unselected-hover;
  }
}
```

### SCSS: use `scss-docs-start/end` markers for documentation extraction

Documentation markers are parsed by the Astro site to display variable tables. Every component's CSS custom property block must be wrapped.

```scss
// scss-docs-start my-component-css-vars
--#{$prefix}my-component-padding: #{$value};
--#{$prefix}my-component-color: #{$value};
// scss-docs-end my-component-css-vars
```

### SCSS: use `// OUDS mod:` when modifying Bootstrap's original code

Every deviation from Bootstrap's upstream code must be marked:

```scss
display: flex; // OUDS mod: instead of `inline-block`
// OUDS mod: no `@include rfs($btn-font-size, ...)`

// OUDS mod: loading buttons
.btn.loading-indeterminate { ... }
// End mod
```

### SCSS: use `calc()` with `var()` for border-width-compensated padding

Prevent layout shifts when border width changes on interaction (buttons, chips, tags, text inputs):

```scss
.btn {
  padding: calc(var(--#{$prefix}btn-padding-y) - var(--#{$prefix}btn-border-width))
    calc(var(--#{$prefix}btn-padding-x) - var(--#{$prefix}btn-border-width));

  &:hover {
    --#{$prefix}btn-border-width: #{$ouds-button-border-width-default-interaction};
    // padding adjusts automatically via calc()
  }
}
```

### SCSS: use `mask-image` + `background-color` for icons

Icons must use the `mask-image` pattern to allow color inheritance:

```scss
&::before {
  content: "";
  display: inline-block;
  background-color: currentcolor;
  mask-image: escape-svg(var(--#{$prefix}some-icon));
  mask-size: 100%;
  mask-repeat: no-repeat;
}
```

### SCSS: use responsive CSS custom property overrides for breakpoint changes

```scss
// Good — override the variable at the breakpoint
.component {
  --#{$prefix}component-width: #{$mobile-width};

  @include media-breakpoint-up(xl) {
    --#{$prefix}component-width: #{$desktop-width};
  }
}

// Bad — duplicate rulesets
.component {
  width: $mobile-width;
}
@include media-breakpoint-up(xl) {
  .component {
    width: $desktop-width;
  }
}
```

### JavaScript: all components must extend `BaseComponent`

```javascript
// Good
import BaseComponent from './base-component.js'

class Alert extends BaseComponent {
  static get NAME() {
    return 'alert'
  }
  // ...
}

export default Alert
```

### JavaScript: expose a static `NAME` getter

```javascript
// Good
static get NAME() {
  return 'myComponent'
}

// Bad — no NAME getter
```

### JavaScript: JavaScript is shared across all brands — never put JS in `packages/<brand>/`

All JS is in `js/src/`. Brand differences are CSS/token only. Tests written once cover all brands.

### JavaScript: use `data-bs-*` attributes for all JavaScript-driven behavior configuration

```html
<!-- Good -->
<button data-bs-toggle="collapse" data-bs-target="#myCollapse">Expand</button>
<button data-bs-dismiss="alert">Close</button>

<!-- Bad — inline JS handler -->
<button onclick="toggleCollapse()">Expand</button>
```

---

## Examples

### Good — complete SCSS component following all patterns

```scss
// scss/_my-component.scss

// Root-level variable (if shared with other components)
#{$ouds-root-selector} {
  --#{$prefix}my-component-border-radius: #{$ouds-border-radius-default};
}

.my-component {
  // scss-docs-start my-component-css-vars
  --#{$prefix}my-component-padding: #{$ouds-my-component-space-padding-block};
  --#{$prefix}my-component-color: #{$ouds-color-content-default};
  --#{$prefix}my-component-bg: #{$ouds-color-bg-primary};
  // scss-docs-end my-component-css-vars

  padding: var(--#{$prefix}my-component-padding);
  color: var(--#{$prefix}my-component-color);
  background-color: var(--#{$prefix}my-component-bg);
  @include border-radius(var(--#{$prefix}my-component-border-radius));
  @include transition($transition-base);

  &:focus-visible {
    @include focus-visible();
  }

  &:disabled,
  &[aria-disabled="true"] {
    --#{$prefix}my-component-color: #{$ouds-color-content-disabled};
    pointer-events: none;
  }
}

// Variant
.my-component-variant {
  --#{$prefix}my-component-bg: #{$ouds-color-bg-secondary};
}
```

### Good — JavaScript component structure

```javascript
'use strict'

import EventHandler from './dom/event-handler.js'
import BaseComponent from './base-component.js'

const NAME = 'myComponent'
const EVENT_KEY = `.bs.${NAME}`

class MyComponent extends BaseComponent {
  static get NAME() {
    return NAME
  }

  _init() {
    EventHandler.on(this._element, `click${EVENT_KEY}`, event => {
      this._handleClick(event)
    })
  }

  _handleClick(event) {
    // handler logic
  }

  static jQueryInterface(config) {
    return this.each(function () {
      const data = MyComponent.getOrCreateInstance(this)
      if (typeof config === 'string') {
        data[config]()
      }
    })
  }
}

export default MyComponent
```
