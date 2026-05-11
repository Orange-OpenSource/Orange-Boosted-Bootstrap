---
title: "Decision Trees — OUDS Web"
description: "Logic trees for common AI agent development decisions: where to put code, which token to use, multi-brand updates, and testing strategy."
audience:
  - ai-agents
  - github-copilot
  - opencode
  - developers
keywords:
  - decision
  - logic
  - workflow
  - where
  - token
  - brand
  - testing
  - routing
related_files:
  - "../AGENTS.md"
  - "QUICK_LOOKUP.md"
  - "DESIGN_TOKENS.md"
  - "COMPONENTS.md"
last_updated: "2026-04-02"
---

# Decision Trees — OUDS Web

> Logic trees for common development decisions.
> Source of truth: this file. Also reproduced in [AGENTS.md](../AGENTS.md#decision-trees) for quick access.

---

## Table of contents

1. [Decision tree 1: Where should I put this code?](#decision-tree-1-where-should-i-put-this-code)
2. [Decision tree 2: Which design token should I use?](#decision-tree-2-which-design-token-should-i-use)
3. [Decision tree 3: Do I need to update all brands?](#decision-tree-3-do-i-need-to-update-all-brands)
4. [Decision tree 4: How should I test this change?](#decision-tree-4-how-should-i-test-this-change)

---

## Decision tree 1: Where should I put this code?

```
START: I need to add/modify code
│
├─ Is it a design token value (color, spacing, dimension)?
│  ├─ YES → Is it a composite token (elevation, font-stack, icon)?
│  │  ├─ YES → Edit `packages/<brand>/scss/tokens/_composite.scss` ✅
│  │  └─ NO → Wait for auto-generated PR from design team ⏸️
│  │         (Tokens come from Figma → DTCG → Style Dictionary)
│  │
├─ Is it SCSS for a component?
│  ├─ YES → Is it specific to one brand?
│  │  ├─ YES → `packages/<brand>/scss/` (rare, consult team first)
│  │  └─ NO → Is it a new component?
│  │      ├─ YES → Create `scss/_my-component.scss` + update brand token files
│  │      └─ NO → Edit existing `scss/_component.scss`
│  │
├─ Is it JavaScript?
│  ├─ YES → All JS is shared across brands
│  │      → Add to `js/src/` (components, utils, or dom helpers)
│  │      → Never put JS in `packages/<brand>/`
│  │
├─ Is it a Bootstrap SCSS variable override?
│  ├─ YES → Edit `scss/_variables.scss` (light mode)
│  │        or `scss/_variables-dark.scss` (dark mode overrides)
│  │
├─ Is it a Sass mixin or function?
│  ├─ YES → Add to `scss/mixins/_name.scss` or `scss/_functions.scss`
│  │        Update `scss/_mixins.scss` or `scss/_functions.scss` index
│  │
├─ Is it documentation?
│  ├─ YES → `site/src/content/docs/<section>/<page>.mdx`
│  │        Use brand-agnostic content; Astro handles brand variants
│  │
├─ Is it a test?
│  ├─ YES → Unit tests: `js/tests/unit/<component>.spec.js`
│  │        Integration: `js/tests/integration/`
│  │        Visual: `stories/auto/<component>.stories.js`
│  │
└─ Is it build configuration?
   └─ YES → `build/<script>.mjs` or root config files
            (`package.json`, `.stylelintrc.json`, etc.)
```

---

## Decision tree 2: Which design token should I use?

```
START: I need a token for a CSS property
│
├─ What type of property?
│  │
│  ├─ COLOR (text, background, border, etc.)
│  │  └─ Does it need dark mode support?
│  │     ├─ YES → Use CSS custom property: `var(--#{$prefix}color-*)`
│  │     │        Example: `var(--#{$prefix}color-content-default)`
│  │     └─ NO → Use semantic token: `$ouds-color-*`
│  │              (Rare, most colors need dark mode)
│  │
│  ├─ SPACING (padding, margin, gap)
│  │  └─ Use semantic spacing token: `$ouds-space-*`
│  │     Examples:
│  │     - `$ouds-space-padding-block-medium`
│  │     - `$ouds-space-padding-inline-small`
│  │     - `$ouds-space-gap-default`
│  │
│  ├─ BORDER-RADIUS
│  │  └─ Use semantic radius token via mixin:
│  │     `@include border-radius($ouds-border-radius-default)`
│  │     Options: `*-default`, `*-small`, `*-medium`, `*-large`, `*-pill`
│  │
│  ├─ BORDER-WIDTH
│  │  └─ Use semantic border token:
│  │     `$ouds-border-width-default` (usually 1px)
│  │     `$ouds-border-width-medium` (usually 2px)
│  │     `$ouds-border-width-thick` (usually 4px)
│  │
│  ├─ FONT SIZE / LINE HEIGHT / WEIGHT
│  │  └─ Use typography tokens:
│  │     `$ouds-font-size-*`
│  │     `$ouds-line-height-*`
│  │     `$ouds-font-weight-*`
│  │
│  ├─ ELEVATION / BOX-SHADOW
│  │  └─ Use composite elevation token:
│  │     `$ouds-elevation-raised`
│  │     `$ouds-elevation-drag`
│  │     `$ouds-elevation-overlay`
│  │     (Defined in `_composite.scss`)
│  │
│  ├─ TRANSITION / ANIMATION
│  │  └─ Use semantic duration token via mixin:
│  │     `@include transition($ouds-duration-short)`
│  │     Options: `*-short`, `*-medium`, `*-long`
│  │
│  └─ COMPONENT-SPECIFIC (button padding, card radius, etc.)
│     └─ First check for component token:
│        `$ouds-<component>-<property>-<variant>`
│        Example: `$ouds-button-border-radius-default`
│        If not exists → use semantic token
│
└─ NEVER use:
   ❌ Raw tokens (`$core-ouds-*`, `$core-orange-*`) in components
   ❌ Hardcoded values (`16px`, `#ff7900`, `1rem`)
   ❌ Sass color functions (`lighten()`, `darken()`)
```

---

## Decision tree 3: Do I need to update all brands?

```
START: I made a change
│
├─ What did you change?
│  │
│  ├─ SCSS component file in `scss/_*.scss`
│  │  └─ Do you reference component tokens (`$ouds-<component>-*`)?
│  │     ├─ YES → Did you ADD new component tokens?
│  │     │  ├─ YES → Must add to ALL brands ⚠️
│  │     │  │        1. Add token to `packages/orange/scss/tokens/_component.scss`
│  │     │  │        2. Add token to `packages/sosh/scss/tokens/_component.scss`
│  │     │  │        3. Add token to `packages/orange-compact/scss/tokens/_component.scss`
│  │     │  │        Each brand may have different values
│  │     │  └─ NO → Only edit component SCSS
│  │     │           The existing tokens work for all brands ✅
│  │     └─ NO → Just using semantic tokens?
│  │              → No brand-specific changes needed ✅
│  │
│  ├─ JavaScript in `js/src/`
│  │  └─ JS is shared across all brands
│  │     → Test once, works everywhere ✅
│  │     (Brand differences only affect CSS)
│  │
│  ├─ Composite token in `packages/<brand>/scss/tokens/_composite.scss`
│  │  └─ Did you edit one brand's `_composite.scss`?
│  │     ├─ YES → Should other brands have the same change?
│  │     │  ├─ YES → Replicate to other brands' `_composite.scss` files
│  │     │  └─ NO → Brand-specific change is OK
│  │     │           (e.g., brand-specific icon, elevation, font-stack)
│  │     └─ NO → N/A
│  │
│  ├─ Bootstrap variable in `scss/_variables.scss`
│  │  └─ Maps to OUDS tokens that exist in all brands?
│  │     ├─ YES → No brand-specific action needed ✅
│  │     └─ NO → You may need to add tokens to all brands
│  │
│  ├─ Documentation in `site/src/content/docs/`
│  │  └─ Is the content brand-agnostic?
│  │     ├─ YES → One MDX file serves all brands ✅
│  │     │        Astro handles brand routes automatically
│  │     └─ NO → Use conditional content:
│  │              {brand === 'orange' && <OrangeContent />}
│  │              (Rare, avoid if possible)
│  │
│  └─ Build scripts, configs, tests
│     └─ Shared across all brands
│        → No brand-specific changes needed ✅
│
└─ Testing checklist for multi-brand changes:
   # Build all brands
   npm run dist

   # Start all brand dev servers in parallel
   npm run start

   # Check each brand:
   # - Orange:         http://localhost:9001/orange/
   # - Sosh:           http://localhost:9002/sosh/
   # - Orange Compact: http://localhost:9003/orange-compact/

   # Visual regression if available
   npm run test-visual
```

---

## Decision tree 4: How should I test this change?

```
START: I made a change
│
├─ What type of change?
│  │
│  ├─ JavaScript component or utility
│  │  └─ Write unit test:
│  │     1. Create/update `js/tests/unit/<component>.spec.js`
│  │     2. Test public API, events, data attributes
│  │     3. Run: `npm run js-test`
│  │     4. Check coverage: `js/coverage/index.html`
│  │
│  ├─ SCSS component styles
│  │  └─ Multi-layered testing:
│  │     1. Lint: `npm run css-lint`
│  │     2. Visual check in Storybook: `npm run storybook`
│  │     3. Visual check in docs: `npm run start`
│  │     4. Test all 3 brands
│  │     5. Test light + dark mode (toggle `data-bs-theme`)
│  │     6. Test RTL: Add `dir="rtl"` to `<html>`
│  │
│  ├─ Accessibility enhancement
│  │  └─ Accessibility testing stack:
│  │     1. Manual keyboard test (Tab, Enter, Esc, Arrow keys)
│  │     2. Manual screen reader test (VoiceOver on Mac, NVDA on Windows)
│  │     3. Automated: `npm run docs-accessibility` (Pa11y-CI)
│  │     4. Storybook a11y addon (while developing)
│  │     5. Color contrast: Use token system (enforces 4.5:1 minimum)
│  │
│  ├─ Documentation change
│  │  └─ Docs validation:
│  │     1. Build: `npm run docs-build`
│  │     2. HTML validation: `npm run docs-vnu`
│  │     3. Check formatting: `npm run docs-lint`
│  │     4. Visual check: `npm run start` (all brands)
│  │     5. Check code examples work (copy-paste test)
│  │
│  ├─ Design token change (composite only)
│  │  └─ Token validation:
│  │     1. Build CSS: `npm run css-compile`
│  │     2. Check token is used: search for `<token-name>` in codebase
│  │     3. Visual regression across all components using it
│  │     4. Test all brands (tokens may differ per brand)
│  │     5. Test light/dark modes
│  │
│  └─ Build script or config change
│     └─ Full pipeline test:
│        1. Clean: `npm run clean`
│        2. Install: `npm ci`
│        3. Full build: `npm run dist`
│        4. Full test suite: `npm run test`
│        5. Check CI logs for issues
│
└─ Pre-submission checklist:
   # Run full validation
   npm run lint      # ESLint + Stylelint
   npm run dist      # Build CSS + JS
   npm run test      # Full test suite

   # If all pass → ready for PR
   # If failures → fix and re-run
```
