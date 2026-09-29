---
name: 'component-patterns'
description: 'SCSS and JS structural patterns for OUDS Web components. Use this skill when creating, editing, or reviewing component SCSS files (scss/_*.scss, scss/forms/_*.scss) or JS component files (js/src/*.js). Covers CSS custom property declarations at top of class, state overrides via variable overrides (not property overrides), scss-docs-start/end markers, border-width compensation with calc(), mask-image icon pattern, responsive breakpoint overrides, and the OUDS mod comment convention.'
---

# Component Patterns

## Core principle

Every component declares CSS custom properties at the top of its main selector, then consumes them via `var()`. State changes (hover, disabled, variants) override the *variable*, never the *property*. This creates one source of truth and enables runtime theming.

---

## SCSS structure template

```scss
#{$ouds-root-selector} {
  --#{$prefix}my-comp-border-radius: #{$ouds-border-radius-default};
}

.my-component {
  // scss-docs-start my-component-css-vars
  --#{$prefix}my-comp-padding: #{$ouds-my-comp-space-padding-block};
  --#{$prefix}my-comp-color: #{$ouds-color-content-default};
  --#{$prefix}my-comp-bg: #{$ouds-color-bg-primary};
  // scss-docs-end my-component-css-vars

  padding: var(--#{$prefix}my-comp-padding);
  color: var(--#{$prefix}my-comp-color);
  background-color: var(--#{$prefix}my-comp-bg);
  @include border-radius(var(--#{$prefix}my-comp-border-radius));
  @include transition($transition-base);

  &:hover {
    --#{$prefix}my-comp-bg: #{$ouds-color-bg-secondary};  // Override var, not property
  }

  &:focus-visible {
    @include focus-visible();
  }

  &:disabled, &[aria-disabled="true"] {
    --#{$prefix}my-comp-color: #{$ouds-color-content-disabled};
    pointer-events: none;
  }
}

.my-component-variant {
  --#{$prefix}my-comp-bg: #{$ouds-color-surface-brand};
}
```

---

## Key patterns

### Documentation markers

The Astro docs site extracts CSS variable tables from these markers. Every component needs them:

```scss
// scss-docs-start badge-css-vars
// scss-docs-end badge-css-vars
```

### Border-width compensation

Prevent layout shift when borders change on interaction:

```scss
padding: calc(var(--#{$prefix}btn-padding-y) - var(--#{$prefix}btn-border-width))
         calc(var(--#{$prefix}btn-padding-x) - var(--#{$prefix}btn-border-width));
```

### Icon pattern (mask-image)

Icons inherit color from `currentcolor`:

```scss
&::before {
  content: "";
  background-color: currentcolor;
  mask-image: escape-svg(var(--#{$prefix}icon));
  mask-size: 100%;
  mask-repeat: no-repeat;
}
```

### Responsive overrides

Override the variable at breakpoints, don't duplicate rulesets:

```scss
.component {
  --#{$prefix}comp-width: #{$mobile};
  @include media-breakpoint-up(xl) {
    --#{$prefix}comp-width: #{$desktop};
  }
}
```

---

## OUDS mod markers

Every deviation from Bootstrap upstream must be marked:

```scss
display: flex; // OUDS mod: instead of `inline-block`
// OUDS mod: loading buttons
.btn.loading-indeterminate { ... }
// End mod
```
