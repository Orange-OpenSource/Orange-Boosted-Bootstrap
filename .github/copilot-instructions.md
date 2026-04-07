---
applyTo: "**"
---

# OUDS Web — AI Agent Instructions

You are working in **OUDS Web** (Orange Unified Design System — Web), a multi-brand design system built as a fork of Bootstrap 5.3.6.  
Version: 1.1.0 | Main branch: `ouds/main` | Brands: Orange, Sosh, Orange Compact

---

## Standards — Apply Always

The following standards define mandatory conventions. Always apply them when writing or reviewing code:

- **[Code Conventions](.packmind/standards/ouds-code-conventions.md)** — HTML/SCSS/JS style rules: `!default` on variables, forbidden direct properties (`border-radius`, `transition`), forbidden values (`border: none`, `lighten()`), token usage, JS no-semicolons, template literals.

- **[Accessibility WCAG 2.1 AA](.packmind/standards/ouds-accessibility-wcag.md)** — Non-negotiable: `@include focus-visible()`, ARIA attributes, `.visually-hidden`, keyboard navigation, 4.5:1 contrast, 44×44px touch targets, RTL support.

- **[Design Token System](.packmind/standards/ouds-design-tokens.md)** — 3-tier hierarchy (raw → semantic → component). Never edit auto-generated files (`_raw.scss`, `_semantic.scss`, `_component.scss`, `_*-custom-props.scss`). Colors via `var(--#{$prefix}color-*)`. New tokens in all 3 brands.

- **[Component Patterns](.packmind/standards/ouds-component-patterns.md)** — CSS custom property declaration at top of class, state overrides via variable overrides, `scss-docs-start/end` markers, `// OUDS mod:` comments, JS BaseComponent pattern.

---

## Commands — Use for Specific Workflows

When the user asks to perform a specific task, load and follow the appropriate command:

- **[ouds-create-component](.packmind/commands/ouds-create-component.md)** — Full step-by-step guide for creating a new SCSS/JS component (SCSS structure, tokens per brand, ARIA, JS boilerplate, tests, docs).

- **[ouds-diagnose-error](.packmind/commands/ouds-diagnose-error.md)** — Diagnostic workflow for Stylelint, ESLint, Sass build, CI, token, JS test, and Pa11y errors.

- **[ouds-decision-routing](.packmind/commands/ouds-decision-routing.md)** — 4 decision trees (where to put code, which token, multi-brand updates, testing strategy).

- **[ouds-lookup](.packmind/commands/ouds-lookup.md)** — Quick lookup index: maps any topic to the right standard, command, or skill.

- **[ouds-validate-tokens](.packmind/commands/ouds-validate-tokens.md)** — Read-only audit: cross-brand token presence check and anti-pattern detection for SCSS component files.

---

## Skills — Domain Knowledge

Load these skills when deep conceptual understanding is needed:

- **[ouds-token-strategy](.packmind/skills/ouds-token-strategy.md)** — Full token architecture: pipeline, layer hierarchy, CSS custom property bridge for dark mode, color token dual-track, consumption patterns. Load when asked about tokens, dark mode, or brand differentiation.

- **[ouds-multi-brand-sync](.packmind/skills/ouds-multi-brand-sync.md)** — 3-brand architecture: what is shared, what differs, when to update all brands, brand entry point pattern, testing multi-brand changes.

- **[ouds-knowledge-base](.packmind/skills/ouds-knowledge-base.md)** — Full glossary (154 terms), build pipeline, npm scripts reference, CI/CD jobs, release process, and project file map. Load when encountering unfamiliar terms or working on build/infra.

---

## Critical Constraints (Always Active)

1. **Never hardcode** colors (`#ff7900`), spacing (`16px`), or dimensions — use OUDS tokens.
2. **Never use `border-radius: X` or `transition: X` directly** — use `@include border-radius()` / `@include transition()`.
3. **Never edit auto-generated token files**: `_raw.scss`, `_semantic.scss`, `_component.scss`, `_*-custom-props.scss` — only `_composite.scss` is editable.
4. **Never commit `dist/`** files — they are build artifacts.
5. **Never put JavaScript** in `packages/<brand>/` — JS is shared via `js/src/`.
6. **Color tokens for dark mode** → always `var(--#{$prefix}color-*)`, never the SCSS variable directly.
7. **Accessibility**: never remove `:focus-visible` styles, always add ARIA attributes to interactive components, never use `display: none` for screen-reader content.

---

## Project Quick Facts

| | |
|---|---|
| CSS prefix | `--bs-` (via `$prefix` in `scss/_config.scss`) |
| Brands | orange, sosh, orange-compact |
| JS components | 15 (all extend `BaseComponent`) |
| Token layers | raw → semantic → composite → component → CSS custom props |
| Build | `npm run dist` (CSS + JS) |
| Lint | `npm run lint` |
| Tests | `npm run test` |
| Dev servers | `:9001` (orange), `:9002` (sosh), `:9003` (orange-compact) |
