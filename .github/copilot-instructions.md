---
applyTo: "**"
---

# OUDS Web — Project Context

**OUDS Web** (Orange Unified Design System — Web) is a multi-brand design system built as a fork of Bootstrap 5.3.6. It serves 3 brands (Orange, Sosh, Orange Compact) from a single codebase where only CSS tokens differ per brand — JavaScript is fully shared.

## Quick Reference

| Key | Value |
|---|---|
| Version | 1.1.0 |
| Main branch | `ouds/main` |
| CSS prefix | `--bs-` (via `$prefix`) |
| Build | `npm run dist` |
| Lint | `npm run lint` |
| Tests | `npm run test` |
| Dev servers | `:9001` (orange) · `:9002` (sosh) · `:9003` (orange-compact) |

## Critical Constraints

These rules are non-negotiable and apply to every contribution:

1. **Use tokens, not hardcoded values** — colors, spacing, dimensions all come from the OUDS token system.
2. **Use mixins for `border-radius` and `transition`** — direct CSS properties are forbidden by Stylelint.
3. **Auto-generated token files are read-only** — never edit `_raw.scss`, `_semantic.scss`, `_component.scss`, or `_*-custom-props.scss`. Only `_composite.scss` is hand-editable.
4. **Never commit `dist/`** — build artifacts are generated in CI.
5. **JavaScript lives in `js/src/` only** — never in `packages/<brand>/`.
6. **Colors use CSS custom properties** — `var(--#{$prefix}color-*)` enables runtime dark mode switching.
7. **Accessibility is mandatory** — visible `:focus-visible`, ARIA attributes on all interactive elements, `.visually-hidden` for SR content.

## Scoped Instructions

Detailed conventions are loaded automatically based on the files you're working on. They live in `.github/instructions/`:

- `scss.instructions.md` — SCSS conventions and patterns
- `javascript.instructions.md` — JS conventions
- `html-accessibility.instructions.md` — HTML structure and WCAG compliance
- `tokens.instructions.md` — Token system rules
- `components.instructions.md` — Component SCSS/JS patterns
- `multi-brand.instructions.md` — Cross-brand synchronization

## Workflows

For complex multi-step tasks, follow the dedicated workflow guides:

- `workflows/create-component.instructions.md` — Creating a new component
- `workflows/diagnose-errors.instructions.md` — Debugging build/lint/CI errors
- `workflows/validate-tokens.instructions.md` — Auditing token usage

## Deep References

For in-depth architecture knowledge, read the reference docs in `.github/instructions/references/`:

- `token-architecture.md` — Full token pipeline and layer hierarchy
- `glossary.md` — 154 project-specific terms
- `project-map.md` — File structure, npm scripts, CI/CD jobs
