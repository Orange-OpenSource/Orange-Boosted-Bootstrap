---
title: "Quick Lookup — OUDS Web AI Agent Routing Index"
description: "Single-source routing table for AI agents. Maps any development task or topic to the right file and section."
audience:
  - ai-agents
  - github-copilot
  - opencode
keywords:
  - index
  - routing
  - lookup
  - reference
  - topics
last_updated: "2026-04-02"
---

# Quick Lookup — AI Agent Routing Index

> Use this file to find the right documentation for any task.
> Format: **Topic** → **File** → **Section**

---

## How to use this file

1. Find your topic or task in the tables below.
2. Open the listed file and jump to the listed section.
3. If your topic doesn't appear, check `AGENTS.md` first — it covers every domain briefly.

---

## Design Tokens

| Task / Topic                                           | File                   | Section                                                                                           |
| ------------------------------------------------------ | ---------------------- | ------------------------------------------------------------------------------------------------- |
| Understand the token system                            | `AGENTS.md`            | [Design tokens system](../AGENTS.md#design-tokens-system)                                         |
| Token naming conventions (`$ouds-*`, `$core-*`)        | `.ai/DESIGN_TOKENS.md` | [Token naming scheme](DESIGN_TOKENS.md#token-naming-scheme)                                                       |
| Difference between raw / semantic / component tokens   | `.ai/DESIGN_TOKENS.md` | [Token layers](DESIGN_TOKENS.md#token-layers)                                                                     |
| Which token files are auto-generated?                  | `.ai/DESIGN_TOKENS.md` | [Token file inventory](DESIGN_TOKENS.md#token-file-inventory)                                                     |
| How tokens flow from Figma to SCSS                     | `.ai/DESIGN_TOKENS.md` | [Token generation pipeline](DESIGN_TOKENS.md#token-generation-pipeline)                                           |
| Base multiplier pattern (`$core-ouds-border-base * 2`) | `.ai/DESIGN_TOKENS.md` | [Base multiplier system](DESIGN_TOKENS.md#base-multiplier-system)                                                 |
| CSS custom properties for dark mode (`--bs-color-*`)   | `.ai/DESIGN_TOKENS.md` | [CSS custom properties and color-mode switching](DESIGN_TOKENS.md#css-custom-properties-and-color-mode-switching) |
| Composite tokens (elevation, font stacks, icons)       | `.ai/DESIGN_TOKENS.md` | [Composite tokens](DESIGN_TOKENS.md#composite-tokens)                                                             |
| Bootstrap variable bridge (`$ouds-*` → `$btn-*`)       | `.ai/DESIGN_TOKENS.md` | [Bootstrap variable bridge](DESIGN_TOKENS.md#bootstrap-variable-bridge)                                           |
| Dark mode token architecture                           | `.ai/DESIGN_TOKENS.md` | [Dark mode architecture](DESIGN_TOKENS.md#dark-mode-architecture)                                                 |
| Sass maps derived from tokens                          | `.ai/DESIGN_TOKENS.md` | [Sass maps from tokens](DESIGN_TOKENS.md#sass-maps-from-tokens)                                                   |
| Multi-brand token comparison                           | `.ai/DESIGN_TOKENS.md` | [Multi-brand comparison](DESIGN_TOKENS.md#multi-brand-comparison)                                                 |
| Which component token to use                           | `.ai/DESIGN_TOKENS.md` | [Component token consumption](DESIGN_TOKENS.md#component-token-consumption)                                       |
| **Which token should I use for property X?**           | `AGENTS.md`            | [Decision tree 2](../AGENTS.md#decision-tree-2-which-design-token-should-i-use)                   |
| **Anti-pattern: using raw tokens**                     | `AGENTS.md`            | [Anti-patterns](../AGENTS.md#anti-patterns)                                                       |
| **Anti-pattern: hardcoded colors or spacing**          | `AGENTS.md`            | [Anti-patterns](../AGENTS.md#anti-patterns)                                                       |

---

## Components

| Task / Topic                                   | File                | Section                                                         |
| ---------------------------------------------- | ------------------- | --------------------------------------------------------------- |
| Full list of all components (OUDS + Bootstrap) | `.ai/COMPONENTS.md` | [Full component catalog](COMPONENTS.md#full-component-catalog)               |
| Create a new component step-by-step            | `.ai/COMPONENTS.md` | [Creating a new component](COMPONENTS.md#creating-a-new-component)           |
| SCSS component patterns (13 patterns)          | `.ai/COMPONENTS.md` | [SCSS component patterns](COMPONENTS.md#scss-component-patterns)             |
| JavaScript component patterns                  | `.ai/COMPONENTS.md` | [JavaScript component patterns](COMPONENTS.md#javascript-component-patterns) |
| Component token system                         | `.ai/COMPONENTS.md` | [Component token system](COMPONENTS.md#component-token-system)               |
| Testing a component                            | `.ai/COMPONENTS.md` | [Testing patterns](COMPONENTS.md#testing-patterns)                           |
| Documenting a component (MDX)                  | `.ai/COMPONENTS.md` | [Documentation patterns](COMPONENTS.md#documentation-patterns)               |
| Storybook stories for a component              | `.ai/COMPONENTS.md` | [Storybook patterns](COMPONENTS.md#storybook-patterns)                       |
| Where is component SCSS/JS?                    | `AGENTS.md`         | [Finding component code](../AGENTS.md#finding-component-code)   |
| BaseComponent JS API                           | `AGENTS.md`         | [JavaScript components](../AGENTS.md#javascript-components)     |

---

## Code Conventions

| Task / Topic                                            | File                      | Section                                           |
| ------------------------------------------------------- | ------------------------- | ------------------------------------------------- |
| Full SCSS conventions                                   | `.ai/CODE_CONVENTIONS.md` | [SCSS conventions](CODE_CONVENTIONS.md#scss-conventions)             |
| Full JavaScript conventions                             | `.ai/CODE_CONVENTIONS.md` | [JavaScript conventions](CODE_CONVENTIONS.md#javascript-conventions) |
| Full HTML conventions                                   | `.ai/CODE_CONVENTIONS.md` | [HTML conventions](CODE_CONVENTIONS.md#html-conventions)             |
| File formatting (charset, line endings)                 | `.ai/CODE_CONVENTIONS.md` | [File formatting](CODE_CONVENTIONS.md#file-formatting)               |
| Comment conventions (`// OUDS mod:`)                    | `.ai/CODE_CONVENTIONS.md` | [Comment conventions](CODE_CONVENTIONS.md#comment-conventions)       |
| Testing conventions (Jasmine, spec files)               | `.ai/CODE_CONVENTIONS.md` | [Testing conventions](CODE_CONVENTIONS.md#testing-conventions)       |
| Linter quick-reference (ESLint, Stylelint rules)        | `.ai/CODE_CONVENTIONS.md` | [Linter quick-reference](CODE_CONVENTIONS.md#linter-quick-reference) |
| SCSS variable naming (`$component-state-property-size`) | `AGENTS.md`               | [Code conventions](../AGENTS.md#code-conventions) |
| **Anti-pattern: `border-radius` / `transition` direct** | `AGENTS.md`               | [Anti-patterns](../AGENTS.md#anti-patterns)       |
| **Anti-pattern: `border: none`**                        | `AGENTS.md`               | [Anti-patterns](../AGENTS.md#anti-patterns)       |
| **Anti-pattern: `lighten()` / `darken()`**              | `AGENTS.md`               | [Anti-patterns](../AGENTS.md#anti-patterns)       |

---

## Accessibility

| Task / Topic                                            | File                   | Section                                                     |
| ------------------------------------------------------- | ---------------------- | ----------------------------------------------------------- |
| WCAG 2.1 AA compliance overview                         | `.ai/ACCESSIBILITY.md` | [Standards and compliance](ACCESSIBILITY.md#standards-and-compliance)       |
| Focus ring implementation (dual-ring pattern)           | `.ai/ACCESSIBILITY.md` | [Focus management](ACCESSIBILITY.md#focus-management)                       |
| Keyboard navigation patterns                            | `.ai/ACCESSIBILITY.md` | [Keyboard navigation](ACCESSIBILITY.md#keyboard-navigation)                 |
| ARIA patterns per component type                        | `.ai/ACCESSIBILITY.md` | [ARIA patterns per component](ACCESSIBILITY.md#aria-patterns-per-component) |
| Color contrast requirements (4.5:1)                     | `.ai/ACCESSIBILITY.md` | [Color and contrast](ACCESSIBILITY.md#color-and-contrast)                   |
| Dark mode accessibility                                 | `.ai/ACCESSIBILITY.md` | [Dark mode and color modes](ACCESSIBILITY.md#dark-mode-and-color-modes)     |
| Reduced motion (`prefers-reduced-motion`)               | `.ai/ACCESSIBILITY.md` | [Motion and animation](ACCESSIBILITY.md#motion-and-animation)               |
| Touch target sizing (44×44px)                           | `.ai/ACCESSIBILITY.md` | [Touch target sizing](ACCESSIBILITY.md#touch-target-sizing)                 |
| `.visually-hidden` pattern                              | `.ai/ACCESSIBILITY.md` | [Visually hidden content](ACCESSIBILITY.md#visually-hidden-content)         |
| RTL accessibility                                       | `.ai/ACCESSIBILITY.md` | [RTL layout support](ACCESSIBILITY.md#rtl-layout-support)                   |
| Running accessibility tests (Pa11y-CI)                  | `.ai/ACCESSIBILITY.md` | [Testing strategy](ACCESSIBILITY.md#testing-strategy)                       |
| Contributor accessibility checklist                     | `.ai/ACCESSIBILITY.md` | [Contributor checklist](ACCESSIBILITY.md#contributor-checklist)             |
| **Anti-pattern: removing `:focus` styles**              | `AGENTS.md`            | [Anti-patterns](../AGENTS.md#anti-patterns)                 |
| **Anti-pattern: `display: none` on accessible content** | `AGENTS.md`            | [Anti-patterns](../AGENTS.md#anti-patterns)                 |
| **Anti-pattern: `<div>` for interactive elements**      | `AGENTS.md`            | [Anti-patterns](../AGENTS.md#anti-patterns)                 |

---

## Architecture & Build

| Task / Topic                                          | File                   | Section                                                                         |
| ----------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------- |
| Build pipeline overview (CSS + JS)                    | `.ai/ARCHITECTURE.md`  | [Build pipeline](ARCHITECTURE.md#build-pipeline)                                               |
| CSS compilation (Sass + PostCSS + RTL)                | `.ai/ARCHITECTURE.md`  | [CSS build pipeline](ARCHITECTURE.md#css-build-pipeline)                                       |
| JavaScript bundling (Rollup + Babel)                  | `.ai/ARCHITECTURE.md`  | [JavaScript build pipeline](ARCHITECTURE.md#javascript-build-pipeline)                         |
| npm workspaces & package publishing                   | `.ai/ARCHITECTURE.md`  | [npm workspaces and package publishing](ARCHITECTURE.md#npm-workspaces-and-package-publishing) |
| Distribution file reference (`dist/css/`, `dist/js/`) | `.ai/ARCHITECTURE.md`  | [Distribution files](ARCHITECTURE.md#distribution-files)                                       |
| Astro documentation site                              | `.ai/ARCHITECTURE.md`  | [Astro documentation site](ARCHITECTURE.md#astro-documentation-site)                           |
| Storybook setup                                       | `.ai/ARCHITECTURE.md`  | [Storybook](ARCHITECTURE.md#storybook)                                                         |
| CI/CD pipeline (GitHub Actions)                       | `.ai/ARCHITECTURE.md`  | [CI/CD pipeline](ARCHITECTURE.md#cicd-pipeline)                                                |
| Testing infrastructure (Karma, Pa11y-CI, VNU)         | `.ai/ARCHITECTURE.md`  | [Testing infrastructure](ARCHITECTURE.md#testing-infrastructure)                               |
| Linter configurations (ESLint, Stylelint)             | `.ai/ARCHITECTURE.md`  | [Linter configurations](ARCHITECTURE.md#linter-configurations)                                 |
| Release process                                       | `.ai/ARCHITECTURE.md`  | [Release process](ARCHITECTURE.md#release-process)                                             |
| Token import order per brand                          | `.ai/DESIGN_TOKENS.md` | [Brand import pipeline](DESIGN_TOKENS.md#brand-import-pipeline)                                 |
| Monorepo structure                                    | `AGENTS.md`            | [Monorepo structure](../AGENTS.md#monorepo-structure)                           |
| **Anti-pattern: editing `dist/` files**               | `AGENTS.md`            | [Anti-patterns](../AGENTS.md#anti-patterns)                                     |
| **Anti-pattern: committing dist/ in PRs**             | `AGENTS.md`            | [Anti-patterns](../AGENTS.md#anti-patterns)                                     |

---

## Multi-Brand

| Task / Topic                                | File                   | Section                                                                        |
| ------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------ |
| How brand theming works                     | `AGENTS.md`            | [Multi-brand system](../AGENTS.md#multi-brand-system)                          |
| Brand entry point pattern (`ouds-web.scss`) | `AGENTS.md`            | [Brand entry point pattern](../AGENTS.md#brand-entry-point-pattern)            |
| **Do I need to update all 3 brands?**       | `AGENTS.md`            | [Decision tree 3](../AGENTS.md#decision-tree-3-do-i-need-to-update-all-brands) |
| Multi-brand token comparison                | `.ai/DESIGN_TOKENS.md` | [Multi-brand comparison](#multi-brand-comparison)                              |
| Token import order in a brand package       | `.ai/DESIGN_TOKENS.md` | [Brand import pipeline](#brand-import-pipeline)                                |
| Adding new component tokens to all brands   | `AGENTS.md`            | [AI agent workflow](../AGENTS.md#ai-agent-workflow)                            |

---

## Decision Making (AI Agent Logic)

| Scenario                            | File                    | Section                                                                              |
| ----------------------------------- | ----------------------- | ------------------------------------------------------------------------------------ |
| **Where should I put this code?**   | `.ai/DECISION_TREES.md` | [Decision tree 1](DECISION_TREES.md#decision-tree-1-where-should-i-put-this-code)    |
| **Which token should I use?**       | `.ai/DECISION_TREES.md` | [Decision tree 2](DECISION_TREES.md#decision-tree-2-which-design-token-should-i-use) |
| **Do I need to update all brands?** | `.ai/DECISION_TREES.md` | [Decision tree 3](DECISION_TREES.md#decision-tree-3-do-i-need-to-update-all-brands)  |
| **How should I test this change?**  | `.ai/DECISION_TREES.md` | [Decision tree 4](DECISION_TREES.md#decision-tree-4-how-should-i-test-this-change)   |
| Step-by-step agent workflow         | `AGENTS.md`             | [AI agent workflow](../AGENTS.md#ai-agent-workflow)                                  |
| Pre-submission checklist            | `AGENTS.md`             | [Checklist before submitting](../AGENTS.md#5-checklist-before-submitting)            |

---

## Testing & Validation

| Task / Topic                                 | File                      | Section                                                                            |
| -------------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------- |
| **How to test my change?**                   | `.ai/DECISION_TREES.md`   | [Decision tree 4](DECISION_TREES.md#decision-tree-4-how-should-i-test-this-change) |
| JS unit tests (Karma + Jasmine)              | `.ai/CODE_CONVENTIONS.md` | [Testing conventions](CODE_CONVENTIONS.md#testing-conventions)                                        |
| Run build: `npm run dist`                    | `AGENTS.md`               | [Building the project](../AGENTS.md#building-the-project)                          |
| Run lint: `npm run lint`                     | `AGENTS.md`               | [Building the project](../AGENTS.md#building-the-project)                          |
| Run a11y tests: `npm run docs-accessibility` | `.ai/ACCESSIBILITY.md`    | [Testing strategy](ACCESSIBILITY.md#testing-strategy)                                              |
| HTML validation: `npm run docs-vnu`          | `.ai/ARCHITECTURE.md`     | [Testing infrastructure](ARCHITECTURE.md#testing-infrastructure)                                  |
| Test all brands (3 dev servers)              | `AGENTS.md`               | [Building the project](../AGENTS.md#building-the-project)                          |

---

## Terminology (Glossary Quick Ref)

| Term                      | Definition                                                 | Full glossary     |
| ------------------------- | ---------------------------------------------------------- | ----------------- |
| **OUDS**                  | Orange Unified Design System                               | `.ai/GLOSSARY.md` |
| **raw tokens**            | `$core-ouds-*` — primitive values, never use in components | `.ai/GLOSSARY.md` |
| **semantic tokens**       | `$ouds-*` — meaningful aliases for design intent           | `.ai/GLOSSARY.md` |
| **component tokens**      | `$ouds-<component>-*` — per-component references           | `.ai/GLOSSARY.md` |
| **composite tokens**      | elevation, font stacks, icons — in `_composite.scss`       | `.ai/GLOSSARY.md` |
| **`$prefix`**             | SCSS var for CSS custom property prefix → `--bs-`          | `.ai/GLOSSARY.md` |
| **DTCG**                  | Design Token Community Group standard format               | `.ai/GLOSSARY.md` |
| **RTL**                   | Right-to-left layout support via `rtlcss`                  | `.ai/GLOSSARY.md` |
| **BaseComponent**         | Abstract JS class all components extend                    | `.ai/GLOSSARY.md` |
| **`// OUDS mod:`**        | Comment prefix for Bootstrap overrides                     | `.ai/GLOSSARY.md` |
| Full glossary (154 terms) | All project terms, acronyms and patterns                   | `.ai/GLOSSARY.md` |

---

## Anti-Patterns Quick Reference

> Full anti-patterns catalog with examples and fixes: `AGENTS.md` → [Anti-patterns](../AGENTS.md#anti-patterns)

| Anti-pattern                                          | Correct approach                                |
| ----------------------------------------------------- | ----------------------------------------------- |
| `#ff7900`, `rgb(...)` hardcoded                       | `var(--#{$prefix}color-*)`                      |
| `16px`, `1rem` hardcoded                              | `$ouds-space-*` or `$ouds-dimension-*` tokens   |
| `border-radius: 8px` direct                           | `@include border-radius($ouds-border-radius-*)` |
| `transition: ...` direct                              | `@include transition(...)`                      |
| `border: none`                                        | `border: 0`                                     |
| `lighten()` / `darken()`                              | Use token variant                               |
| `$core-ouds-*` in component SCSS                      | Use semantic or component tokens                |
| Edit `_raw.scss`, `_semantic.scss`, `_component.scss` | Wait for generated PR (Figma pipeline)          |
| Edit `dist/` files                                    | Edit source in `scss/` or `js/src/`             |
| `display: none` for accessible content                | `.visually-hidden` class                        |
| `:focus { outline: none }` without alternative        | `@include focus-ring()`                         |
| `<div onclick=...>`                                   | `<button>` or `<a>`                             |

---

## File Map

> All documentation files at a glance.

| File                      | Lines | Role                                                                       | When to load                             |
| ------------------------- |-------| -------------------------------------------------------------------------- | ---------------------------------------- |
| `AGENTS.md`               | ~820  | Master index + quick reference + decision trees + glossary + anti-patterns | Always (entry point)                     |
| `.ai/QUICK_LOOKUP.md`     | ~228  | This file — routing index                                                  | When unsure which file covers your topic |
| `.ai/ACCESSIBILITY.md`    | ~733  | WCAG 2.1 AA deep-dive                                                      | When implementing/auditing a11y          |
| `.ai/ARCHITECTURE.md`     | ~1268 | Build pipeline + CI/CD                                                     | When working on build, release, or infra |
| `.ai/CODE_CONVENTIONS.md` | ~898  | HTML / SCSS / JS style guide                                               | When writing or reviewing code           |
| `.ai/COMPONENTS.md`       | ~1276 | Component catalog + patterns + creation guide                              | When creating or updating components     |
| `.ai/DESIGN_TOKENS.md`    | ~921  | Token system complete reference                                            | When working with design tokens          |
| `.ai/DECISION_TREES.md`   | ~285  | 4 logic trees for common decisions                                         | When at a decision point                 |
| `.ai/GLOSSARY.md`         | ~209  | 154 project terms and acronyms                                             | When encountering an unfamiliar term     |
