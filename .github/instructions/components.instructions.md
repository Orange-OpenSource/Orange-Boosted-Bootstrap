---
name: component-patterns
description: >
  SCSS and JavaScript structural patterns for OUDS Web components. Covers CSS custom
  property declarations, state management via variable overrides, documentation markers,
  icon patterns, and responsive overrides. Applied when working on component files.
applyTo: "scss/_*.scss,scss/forms/_*.scss,js/src/*.js"
---

# Component Patterns

## Core principle

Every component declares CSS custom properties at the top, then consumes them via `var()`. State changes override the *variable*, not the *property*. This creates a single point of truth and enables runtime theming.

---

## SCSS component structure

```scss
// scss/_my-component.scss

// Root-level shared variables (if needed by child components)
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

  &:hover {
    --#{$prefix}my-component-bg: #{$ouds-color-bg-secondary};
  }

  &:focus-visible {
    @include focus-visible();
  }

  &:disabled,
  &[aria-disabled="true"] {
    --#{$prefix}my-component-color: #{$ouds-color-content-disabled};
    pointer-events: none;
  }
}

// Variants override variables, not properties
.my-component-variant {
  --#{$prefix}my-component-bg: #{$ouds-color-surface-brand};
}
```

---

## Key patterns

### State overrides via custom properties

Override the CSS custom property in pseudo-classes/variants — the `var()` references update automatically. This avoids duplicating property declarations.

```scss
// ✓ override the variable
&:hover {
  --#{$prefix}chip-bg: #{$ouds-chip-color-bg-unselected-hover};
}

// ✗ re-declaring the property — harder to maintain
&:hover {
  background-color: $ouds-chip-color-bg-unselected-hover;
}
```

### Documentation markers

The Astro docs site extracts CSS custom property tables using these markers. Every component's variable block needs them:

```scss
// scss-docs-start badge-css-vars
--#{$prefix}badge-size: #{$value};
// scss-docs-end badge-css-vars
```

### Border-width compensation

Prevent layout shifts when borders change on interaction (e.g., hover adds a thicker border):

```scss
padding: calc(var(--#{$prefix}btn-padding-y) - var(--#{$prefix}btn-border-width))
         calc(var(--#{$prefix}btn-padding-x) - var(--#{$prefix}btn-border-width));
```

### Icon pattern (`mask-image`)

Icons use mask-image to inherit color from `currentcolor`:

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

### Responsive overrides

Override the custom property at the breakpoint — don't duplicate rulesets:

```scss
// ✓
.component {
  --#{$prefix}component-width: #{$mobile-width};

  @include media-breakpoint-up(xl) {
    --#{$prefix}component-width: #{$desktop-width};
  }
}
```

---

## Bootstrap override markers

Every deviation from Bootstrap upstream must be marked for merge visibility:

```scss
display: flex; // OUDS mod: instead of `inline-block`
// OUDS mod: no `@include rfs($btn-font-size, ...)`

// OUDS mod: loading buttons
.btn.loading-indeterminate { ... }
// End mod
```

---

## JavaScript component pattern

See `javascript.instructions.md` for the full BaseComponent structure. Key reminders:

- Extend `BaseComponent`, expose static `NAME` getter
- Use `data-bs-*` attributes for configuration — never inline handlers
- JS lives in `js/src/` only — never in `packages/<brand>/`
- Register in `js/index.esm.js` and `js/index.umd.js`
