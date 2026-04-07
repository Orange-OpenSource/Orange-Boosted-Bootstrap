---
name: ouds-decision-routing
description: >
  Four decision trees for common OUDS Web development questions:
  where to put code, which token to use, whether to update all brands, and how to test a change.
when_to_use:
  - You are unsure where to place new code (SCSS, JS, tokens, docs, tests)
  - You need to choose the right design token for a CSS property
  - You modified a shared file and want to know if all 3 brands need updates
  - You need to decide which tests to run for your change type
---

# Command: OUDS Web Decision Routing

## When to Use

- At any decision point: "Where does this code go?", "Which token?", "Multi-brand update needed?", "How to test?"

---

## Steps

### Decision Tree 1 — Where should I put this code?

Follow this tree to locate the right file:

```
START: I need to add/modify code
│
├─ Is it a design token value (color, spacing, dimension)?
│  ├─ YES → Is it a composite token (elevation, font-stack, icon)?
│  │  ├─ YES → Edit packages/<brand>/scss/tokens/_composite.scss ✅
│  │  └─ NO → Wait for auto-generated PR from design team ⏸️
│  │            (Figma → DTCG → Style Dictionary pipeline)
│  │
├─ Is it SCSS for a component?
│  ├─ YES → Is it specific to one brand?
│  │  ├─ YES → packages/<brand>/scss/ (rare; consult team first)
│  │  └─ NO → Is it a new component?
│  │      ├─ YES → Create scss/_my-component.scss + update brand token files
│  │      └─ NO → Edit existing scss/_component.scss
│  │
├─ Is it JavaScript?
│  ├─ YES → js/src/ (shared across all brands — never in packages/<brand>/)
│  │
├─ Is it a Bootstrap SCSS variable override?
│  ├─ YES → scss/_variables.scss (light) / scss/_variables-dark.scss (dark)
│  │
├─ Is it a Sass mixin or function?
│  ├─ YES → scss/mixins/_name.scss or scss/_functions.scss
│  │        Then update scss/_mixins.scss or scss/_functions.scss index
│  │
├─ Is it documentation?
│  ├─ YES → site/src/content/docs/<section>/<page>.mdx
│  │        Astro handles brand routes automatically
│  │
├─ Is it a unit test?
│  ├─ YES → js/tests/unit/<component>.spec.js
│  │
└─ Is it build configuration?
   └─ YES → build/<script>.mjs or root config files
```

### Decision Tree 2 — Which design token should I use?

```
START: I need a token for a CSS property
│
├─ COLOR (text, background, border)
│  └─ Does it need dark mode support?
│     ├─ YES (almost always) → var(--#{$prefix}color-*)
│     │   Examples: var(--#{$prefix}color-content-default)
│     │             var(--#{$prefix}color-bg-primary)
│     └─ NO (rare) → $ouds-color-*
│
├─ SPACING (padding, margin, gap)
│  └─ $ouds-space-*
│     Examples: $ouds-space-padding-block-medium
│               $ouds-space-padding-inline-small
│               $ouds-space-gap-default
│
├─ BORDER-RADIUS
│  └─ @include border-radius($ouds-border-radius-*)
│     Options: *-default, *-small, *-medium, *-large, *-pill
│
├─ BORDER-WIDTH
│  └─ $ouds-border-width-default (1px)
│     $ouds-border-width-medium (2px)
│     $ouds-border-width-thick (4px)
│
├─ TYPOGRAPHY (size, line-height, weight)
│  └─ $ouds-font-size-*
│     $ouds-line-height-*
│     $ouds-font-weight-*
│
├─ ELEVATION / BOX-SHADOW
│  └─ Composite elevation token (from _composite.scss):
│     $ouds-elevation-raised
│     $ouds-elevation-drag
│     $ouds-elevation-overlay
│
├─ TRANSITION
│  └─ @include transition($ouds-duration-short|medium|long)
│
└─ COMPONENT-SPECIFIC
   └─ Check for component token first:
      $ouds-<component>-<property>-<variant>
      Example: $ouds-button-border-radius-default
      If not exists → use semantic token

NEVER:
  ❌ Raw tokens in components ($core-ouds-*, $core-orange-*)
  ❌ Hardcoded values (16px, #ff7900)
  ❌ Sass color functions (lighten(), darken())
```

### Decision Tree 3 — Do I need to update all 3 brands?

```
START: I made a change
│
├─ SCSS component file: scss/_*.scss
│  └─ Did you ADD new component tokens ($ouds-<component>-*)?
│     ├─ YES → Must add to ALL brands ⚠️
│     │        packages/orange/scss/tokens/_component.scss
│     │        packages/sosh/scss/tokens/_component.scss
│     │        packages/orange-compact/scss/tokens/_component.scss
│     └─ NO (using existing tokens) → No brand-specific change needed ✅
│
├─ JavaScript: js/src/
│  └─ JS is shared → test once, works everywhere ✅
│
├─ Composite token: packages/<brand>/scss/tokens/_composite.scss
│  └─ Should other brands have the same change?
│     ├─ YES → Replicate to the other 2 brands' _composite.scss
│     └─ NO → Brand-specific change is OK
│
├─ Bootstrap variable: scss/_variables.scss
│  └─ Maps to OUDS tokens existing in all brands?
│     ├─ YES → No brand action needed ✅
│     └─ NO → May need token additions to all brands
│
└─ Documentation: site/src/content/docs/
   └─ Is content brand-agnostic?
      ├─ YES → One MDX serves all brands (Astro handles routing) ✅
      └─ NO → Use conditional: {brand === 'orange' && <OrangeContent />}

After multi-brand changes — test all brands:
  npm run dist        # Build all brands
  npm run start       # All dev servers
  # Orange:         http://localhost:9001/orange/
  # Sosh:           http://localhost:9002/sosh/
  # Orange Compact: http://localhost:9003/orange-compact/
```

### Decision Tree 4 — How should I test this change?

```
START: I made a change
│
├─ JavaScript component or utility
│  └─ 1. Create/update js/tests/unit/<component>.spec.js
│     2. npm run js-test
│     3. Check coverage: js/coverage/index.html
│
├─ SCSS component styles
│  └─ 1. npm run css-lint
│     2. Visual check: npm run storybook
│     3. Visual check: npm run start (all 3 brands)
│     4. Test light + dark mode (toggle data-bs-theme)
│     5. Test RTL: add dir="rtl" to <html>
│
├─ Accessibility change
│  └─ 1. Manual keyboard test (Tab, Enter, Esc, Arrow keys)
│     2. Screen reader (VoiceOver on Mac, NVDA on Windows)
│     3. npm run docs-accessibility (Pa11y-CI)
│     4. Storybook a11y addon (development-time)
│     5. Color contrast: verify token enforces 4.5:1 minimum
│
├─ Documentation change
│  └─ 1. npm run docs-build
│     2. npm run docs-vnu (HTML validation)
│     3. npm run docs-lint
│     4. Visual check: npm run start
│
├─ Design token change (composite only)
│  └─ 1. npm run css-compile
│     2. Search for token name in codebase (verify usage)
│     3. Visual regression across components using it
│     4. Test all 3 brands + light/dark modes
│
└─ Build script or config change
   └─ 1. npm run clean
      2. npm ci
      3. npm run dist
      4. npm run test

Pre-submission checklist:
  npm run lint    # ESLint + Stylelint
  npm run dist    # Build CSS + JS (all brands)
  npm run test    # Full test suite
```
