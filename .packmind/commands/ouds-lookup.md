---
name: ouds-lookup
description: >
  Quick routing index for OUDS Web development topics.
  Maps tasks and questions to the right .packmind/ standard, command, or skill.
when_to_use:
  - You don't know which standard or command applies to your task
  - You need to find documentation on a specific topic quickly
  - You want to check the right approach before starting work
---

# Command: OUDS Web Quick Lookup

## When to Use

When you need to find the right standard, command, or skill for a topic — use this lookup table.

---

## Steps

### 1. Find your topic below and follow the reference

---

## Design Tokens

| Task / Topic | Where to look |
|---|---|
| Which token to use for a CSS property | `ouds-decision-routing` command → Tree 2 |
| Token layers (raw/semantic/composite/component) | `ouds-design-tokens` standard |
| Auto-generated vs editable token files | `ouds-design-tokens` standard |
| Token naming convention (`$ouds-*`, `$core-*`) | `ouds-design-tokens` standard |
| Token pipeline (Figma → DTCG → SCSS) | `ouds-token-strategy` skill |
| Dark mode token architecture (CSS custom props) | `ouds-token-strategy` skill |
| Composite tokens (elevation, fonts, icons) | `ouds-design-tokens` standard → composite section |
| Multi-brand token comparison | `ouds-multi-brand-sync` skill |
| Adding tokens to all brands | `ouds-create-component` command → Step 3 |
| **Anti-pattern: using raw tokens** | `ouds-design-tokens` standard |
| **Anti-pattern: hardcoded colors/spacing** | `ouds-code-conventions` standard |

---

## Components

| Task / Topic | Where to look |
|---|---|
| Create a new component step-by-step | `ouds-create-component` command |
| SCSS CSS custom property declaration pattern | `ouds-component-patterns` standard |
| State management via CSS custom property overrides | `ouds-component-patterns` standard |
| JS BaseComponent class pattern | `ouds-component-patterns` standard |
| JS event pair pattern (show/shown/hide/hidden) | `ouds-component-patterns` standard |
| Component token reference chain | `ouds-design-tokens` standard + `ouds-token-strategy` skill |
| Brand-specific token values | `ouds-multi-brand-sync` skill |
| Testing a component | `ouds-decision-routing` command → Tree 4 |

---

## Code Conventions

| Task / Topic | Where to look |
|---|---|
| SCSS naming, `!default`, token usage | `ouds-code-conventions` standard |
| Forbidden SCSS properties (`border-radius`, `transition`) | `ouds-code-conventions` standard |
| Forbidden SCSS values (`border: none`, `lighten()`) | `ouds-code-conventions` standard |
| SCSS file organization structure | `ouds-code-conventions` standard |
| SCSS `// OUDS mod:` comment pattern | `ouds-component-patterns` standard |
| JS no semicolons, template literals, `.js` extensions | `ouds-code-conventions` standard |
| File formatting (UTF-8, LF, 2-space) | `ouds-code-conventions` standard |

---

## Accessibility

| Task / Topic | Where to look |
|---|---|
| WCAG 2.1 AA compliance overview | `ouds-accessibility-wcag` standard |
| Focus ring (`@include focus-visible()`) | `ouds-accessibility-wcag` standard |
| Focus trapping (Modal, Offcanvas) | `ouds-accessibility-wcag` standard |
| Keyboard navigation per component | `ouds-accessibility-wcag` standard |
| ARIA patterns (aria-expanded, aria-labelledby, etc.) | `ouds-accessibility-wcag` standard |
| Color contrast (4.5:1 minimum) | `ouds-accessibility-wcag` standard |
| `.visually-hidden` usage | `ouds-accessibility-wcag` standard |
| Touch target 44×44px | `ouds-accessibility-wcag` standard |
| RTL support | `ouds-accessibility-wcag` standard |
| Running Pa11y-CI accessibility tests | `ouds-decision-routing` command → Tree 4 |
| **Anti-pattern: removing `:focus-visible`** | `ouds-accessibility-wcag` standard |
| **Anti-pattern: `display: none` on accessible content** | `ouds-accessibility-wcag` standard |
| **Anti-pattern: `<div>` for interactive elements** | `ouds-accessibility-wcag` standard |

---

## Decision Making

| Scenario | Where to look |
|---|---|
| Where should I put this code? | `ouds-decision-routing` command → Tree 1 |
| Which design token should I use? | `ouds-decision-routing` command → Tree 2 |
| Do I need to update all 3 brands? | `ouds-decision-routing` command → Tree 3 |
| How should I test this change? | `ouds-decision-routing` command → Tree 4 |

---

## Troubleshooting / Errors

| Error | Where to look |
|---|---|
| Stylelint: `Unexpected property "border-radius"` | `ouds-diagnose-error` command |
| Stylelint: `Unexpected value "none" for "border"` | `ouds-diagnose-error` command |
| Stylelint: `Expected variable to have default value` | `ouds-diagnose-error` command |
| ESLint: `Extra semicolon` / `Trailing comma` | `ouds-diagnose-error` command |
| Sass: `Undefined variable "$ouds-..."` | `ouds-diagnose-error` command |
| CI failure (lint.yml, css.yml, js.yml, pa11y.yml) | `ouds-diagnose-error` command |
| Pa11y accessibility failure | `ouds-diagnose-error` command |

---

## Multi-Brand

| Task / Topic | Where to look |
|---|---|
| How brand theming works (orange/sosh/orange-compact) | `ouds-multi-brand-sync` skill |
| Brand entry point pattern (`ouds-web.scss`) | `ouds-multi-brand-sync` skill |
| Adding component tokens to all brands | `ouds-create-component` command → Step 3 |
| Do I need to update all brands? | `ouds-decision-routing` command → Tree 3 |
| Multi-brand token differences | `ouds-multi-brand-sync` skill |

---

## Terminology / Glossary

| Term | Definition |
|---|---|
| **OUDS** | Orange Unified Design System |
| **raw tokens** | `$core-ouds-*` — primitives, never use in components |
| **semantic tokens** | `$ouds-*` — meaningful aliases for design intent |
| **component tokens** | `$ouds-<component>-*` — per-component references |
| **composite tokens** | elevation, font stacks, icons — only in `_composite.scss` |
| **`$prefix`** | SCSS var generating `--bs-` CSS custom property prefix |
| **DTCG** | Design Token Community Group format |
| **RTL** | Right-to-left layout support via `rtlcss` |
| **BaseComponent** | Abstract JS class all components extend |
| **`// OUDS mod:`** | Comment marking Bootstrap overrides |
| **Brand** | Visual identity variant (Orange, Sosh, Orange Compact) |
| Full glossary (154 terms) | `ouds-knowledge-base` skill |

---

## Anti-Patterns Quick Reference

| Anti-pattern | Correct approach |
|---|---|
| `#ff7900`, `rgb(...)` hardcoded | `var(--#{$prefix}color-*)` |
| `16px`, `1rem` hardcoded spacing | `$ouds-space-*` or `$ouds-dimension-*` tokens |
| `border-radius: 8px` direct | `@include border-radius($ouds-border-radius-*)` |
| `transition: ...` direct | `@include transition(...)` |
| `border: none` | `border: 0` |
| `lighten()` / `darken()` | Use token variant |
| `$core-ouds-*` in component SCSS | Use semantic or component tokens |
| Edit `_raw.scss`, `_semantic.scss`, `_component.scss` | Wait for design pipeline PR |
| Edit `dist/` files | Edit source in `scss/` or `js/src/` |
| `display: none` for accessible content | `.visually-hidden` class |
| `:focus { outline: none }` without alternative | `@include focus-visible()` |
| `<div onclick=...>` | `<button>` or `<a>` |
