---
name: 'project-knowledge'
description: 'OUDS Web project knowledge base: glossary of 154 terms, build pipeline, npm scripts, CI/CD jobs, and file structure. Use this skill when encountering unfamiliar project terminology (DTCG, rtlcss, Pa11y, etc.), when you need to know which npm command to run, what CI jobs check, where files live, or general project context. For the detailed file map, read references/project-map.md.'
---

# Project Knowledge Base

## Project context

**OUDS Web** (Orange Unified Design System – Web) is a Bootstrap 5.3.6 fork adapted for multi-brand theming with a token-driven architecture.

| Key | Value |
|---|---|
| Version | 1.1.0 |
| Main branch | `ouds/main` |
| Brands | Orange, Sosh, Orange Compact |
| JS components | 15 (all extend BaseComponent) |
| SCSS components | ~40 + 11 forms |
| Sass version | 1.78.0 (pinned) |

---

## Key commands

| Command | Purpose |
|---|---|
| `npm run dist` | Build all CSS (3 brands) + JS |
| `npm run lint` | ESLint + Stylelint |
| `npm run js-test` | Karma + Jasmine unit tests |
| `npm run test` | Full suite (lint + dist + tests) |
| `npm run start` | Dev servers (:9001/:9002/:9003) |
| `npm run clean` | Remove build artifacts |
| `npm run storybook` | Storybook on :6006 |
| `npm run docs-accessibility` | Pa11y-CI checks |
| `npm run docs-vnu` | HTML validation |

---

## CI/CD jobs

| Workflow | Trigger | Checks |
|---|---|---|
| `lint.yml` | Every push | ESLint + Stylelint + lockfile |
| `css.yml` | Every push | CSS build; no stylelint comments in dist |
| `js.yml` | Every push | JS unit tests |
| `pa11y.yml` | PRs to main | Accessibility |
| `vnu.yml` | PRs to main | HTML validation |
| `bundlewatch.yml` | PRs | Bundle size |

---

## Key terms (quick reference)

| Term | Meaning |
|---|---|
| DTCG | Design Token Community Group — W3C token format |
| Style Dictionary | Converts DTCG JSON → SCSS |
| rtlcss | PostCSS plugin: LTR → RTL |
| Pa11y-CI | Accessibility testing (axe-core) |
| VNU | Nu Html Checker |
| BaseComponent | Abstract JS class for components |
| Partial | SCSS file prefixed `_` (imported, not compiled alone) |
| Composite token | Hand-editable token in `_composite.scss` |

For the full 154-term glossary and detailed file structure, read `references/project-map.md`.

---

## Do not commit

- `dist/**`, `packages/*/dist/css/**`, `js/dist/**`
- `node_modules/`, `_site/`
