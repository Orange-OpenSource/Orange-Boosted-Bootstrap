---
applyTo: "**"
---

# OUDS Web

**OUDS Web** (Orange Unified Design System — Web) is a multi-brand design system built as a fork of Bootstrap 5.3.6. It serves 3 brands (Orange, Sosh, Orange Compact) from a single codebase — only CSS tokens differ per brand, JavaScript is fully shared.

## Quick Reference

| Key | Value |
|---|---|
| Version | 1.1.0 |
| Main branch | `main` |
| CSS prefix | `--bs-` (via `$prefix`) |
| Build | `npm run dist` |
| Lint | `npm run lint` |
| Tests | `npm run test` |
| Dev servers | `:9001` (orange) · `:9002` (sosh) · `:9003` (orange-compact) |

## Skills

This project provides specialized skills in `.github/skills/`. Invoke them when relevant — they contain detailed conventions, workflows, and reference material:

- **scss-conventions** — SCSS rules (variables, mixins, tokens, forbidden patterns)
- **javascript-conventions** — JS rules (no-semi, BaseComponent, imports)
- **accessibility** — WCAG 2.2 AAA/AA, ARIA, focus, contrast, touch targets
- **token-system** — 3-tier token hierarchy, dark mode, auto-gen protections
- **component-patterns** — CSS custom props, state overrides, markers
- **multi-brand** — 3-brand architecture, cross-brand sync
- **create-component** — Step-by-step workflow for new components
- **diagnose-errors** — Error diagnostic decision tree
- **validate-tokens** — Read-only token audit
- **code-review** — Compliance checker (safety net before commit/PR)
- **project-knowledge** — Glossary, npm scripts, CI/CD, file map
