---
title: "Glossary — OUDS Web"
description: "Key terms, acronyms, and technical concepts used throughout the OUDS Web codebase."
audience:
  - ai-agents
  - developers
  - contributors
keywords:
  - glossary
  - terms
  - acronyms
  - definitions
  - OUDS
  - Bootstrap
  - tokens
  - SCSS
  - accessibility
related_files:
  - "../AGENTS.md"
  - "DESIGN_TOKENS.md"
  - "ARCHITECTURE.md"
last_updated: "2026-04-02"
---

# Glossary — OUDS Web

> Key terms, acronyms, and technical concepts used throughout the OUDS Web codebase.
> Source of truth: this file. Also reproduced in [AGENTS.md](../AGENTS.md#glossary) for quick access.

---

## Table of contents

1. [Project & Architecture](#project--architecture)
2. [Design Tokens](#design-tokens)
3. [Tech Stack](#tech-stack)
4. [Testing & Quality](#testing--quality)
5. [Accessibility Concepts](#accessibility-concepts)
6. [Bootstrap Concepts](#bootstrap-concepts)
7. [File Naming & Patterns](#file-naming--patterns)
8. [Development Workflow](#development-workflow)
9. [Component-Specific Terms](#component-specific-terms)
10. [Special Prefixes & Conventions](#special-prefixes--conventions)

---

## Project & Architecture

| Term               | Definition                                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| **OUDS**           | Orange Unified Design System — The design system for Orange Group's digital products                     |
| **OUDS Web**       | Web implementation of OUDS, built as a Bootstrap fork                                                    |
| **Boosted**        | Legacy name (Orange Boosted Bootstrap) — replaced by OUDS Web in v1.0                                    |
| **Monorepo**       | Single repository containing multiple packages (`@ouds/web-common`, `@ouds/web-orange`, etc.)            |
| **npm workspaces** | npm feature for managing multiple packages in one repo; used for brand packages                          |
| **Brand**          | Visual identity variant (Orange, Sosh, Orange Compact) — each has unique tokens but shares JS/components |

---

## Design Tokens

| Term                      | Definition                                                                                      |
| ------------------------- | ----------------------------------------------------------------------------------------------- |
| **Design Token**          | Named variable representing a design decision (color, spacing, font size, etc.)                 |
| **DTCG**                  | Design Token Community Group — W3C standard format for design tokens                            |
| **Style Dictionary**      | Token transformation tool; converts DTCG JSON to SCSS, CSS, JSON, etc.                          |
| **Raw tokens**            | Primitive values (`$core-ouds-*`, `$core-orange-*`) — never used directly in components         |
| **Semantic tokens**       | Meaningful aliases (`$ouds-border-radius-default`) — map raw tokens to design intent            |
| **Composite tokens**      | Complex tokens combining multiple values (elevation, font-stacks, icons) — in `_composite.scss` |
| **Component tokens**      | Per-component tokens (`$ouds-button-border-radius-default`) — reference semantic tokens         |
| **CSS custom properties** | Runtime CSS variables (`--bs-color-*`) — enable dark mode and theming                           |
| **Token layer**           | Hierarchical level in token system: Raw → Semantic → Composite → Component                      |
| **Base multiplier**       | Pattern where tokens use a base unit × multiplier (e.g., `$core-ouds-border-base * 2`)          |

---

## Tech Stack

| Term             | Definition                                                                    |
| ---------------- | ----------------------------------------------------------------------------- |
| **SCSS**         | Sassy CSS — CSS preprocessor with variables, mixins, functions, nesting       |
| **Sass**         | The compiler that transforms SCSS to CSS (`sass` npm package, v1.78+)         |
| **PostCSS**      | CSS post-processor; used for autoprefixer and RTL transformations             |
| **Autoprefixer** | PostCSS plugin that adds vendor prefixes (`-webkit-`, `-moz-`, etc.)          |
| **rtlcss**       | PostCSS plugin that converts LTR CSS to RTL (right-to-left) for Arabic/Hebrew |
| **Rollup**       | JavaScript bundler; creates ES module, UMD, and bundle versions               |
| **ESM**          | ECMAScript Modules — modern JS module format (`import`/`export`)              |
| **UMD**          | Universal Module Definition — works in browsers, Node, AMD, CommonJS          |
| **Terser**       | JavaScript minifier; creates `.min.js` files                                  |
| **Astro**        | Static site generator; used for multi-brand documentation site                |
| **MDX**          | Markdown + JSX — allows React-like components in Markdown docs                |
| **Storybook**    | Component development environment; visual testing and documentation           |

---

## Testing & Quality

| Term          | Definition                                                                        |
| ------------- | --------------------------------------------------------------------------------- |
| **ESLint**    | JavaScript linter; enforces code style (extends `xo`, `unicorn` plugins)          |
| **Stylelint** | SCSS/CSS linter; enforces style rules (extends `stylelint-config-twbs-bootstrap`) |
| **Karma**     | JavaScript test runner; runs unit tests in real browsers                          |
| **Jasmine**   | JavaScript testing framework; provides `describe`, `it`, `expect` API             |
| **Pa11y-CI**  | Accessibility testing tool; runs automated WCAG checks with axe-core              |
| **VNU**       | HTML validator (Nu Html Checker); validates HTML5 markup                          |
| **axe-core**  | Accessibility rules engine; used by Pa11y-CI and Storybook a11y addon             |
| **WCAG**      | Web Content Accessibility Guidelines — W3C standard (targeting 2.1 Level AA)      |
| **a11y**      | Numeronym for "accessibility" (a + 11 letters + y)                                |
| **SR**        | Screen Reader — assistive technology for blind/low-vision users                   |

---

## Accessibility Concepts

| Term                     | Definition                                                                          |
| ------------------------ | ----------------------------------------------------------------------------------- |
| **ARIA**                 | Accessible Rich Internet Applications — spec for making dynamic content accessible  |
| **WAI-ARIA**             | Web Accessibility Initiative - ARIA — full name of ARIA spec                        |
| **WCAG 2.1 Level AA**    | Target compliance level; requires 4.5:1 contrast, keyboard access, ARIA, etc.       |
| **Focus ring**           | Visual indicator around focused element; OUDS uses dual-ring (outline + box-shadow) |
| **Focus trap**           | Constraining Tab key to cycle within modal/dialog; prevents focus escaping          |
| **Visually hidden**      | Content hidden visually but announced by screen readers (`.visually-hidden` class)  |
| **Color contrast ratio** | Luminance difference between foreground/background; 4.5:1 minimum for text          |
| **Touch target size**    | Minimum interactive element size; 44×44px per WCAG 2.5.8                            |
| **Reduced motion**       | User preference to minimize animations (`prefers-reduced-motion` media query)       |

---

## Bootstrap Concepts

| Term                | Definition                                                                       |
| ------------------- | -------------------------------------------------------------------------------- |
| **Bootstrap**       | Popular CSS framework; OUDS Web is a fork of Bootstrap 5.3.6                     |
| **BaseComponent**   | Abstract JS class extended by all interactive components (Alert, Modal, etc.)    |
| **Data attributes** | HTML attributes prefixed with `data-bs-*`; configure JS component behavior       |
| **Utility classes** | Single-purpose CSS classes (`.d-flex`, `.mt-3`, etc.) generated by utilities API |
| **Breakpoint**      | Responsive design width threshold (xs, sm, md, lg, xl, xxl)                      |
| **Grid system**     | 12-column responsive layout system using flexbox                                 |
| **Color mode**      | Light/dark theme variant; toggled via `data-bs-theme` attribute                  |
| **Reboot**          | CSS reset/normalize; establishes consistent baseline styles                      |

---

## File Naming & Patterns

| Term              | Definition                                                                           |
| ----------------- | ------------------------------------------------------------------------------------ |
| **Partial**       | SCSS file prefixed with `_` (e.g., `_buttons.scss`); imported into main files        |
| **Mixin**         | Reusable SCSS code block; invoked with `@include` (e.g., `@include border-radius()`) |
| **Function**      | SCSS function returning a value; invoked with `function-name()`                      |
| **Helper**        | Utility class providing a specific function (`.visually-hidden`, `.clearfix`, etc.)  |
| **`.spec.js`**    | Unit test file (Jasmine); tests correspond to `<component>.js`                       |
| **`.stories.js`** | Storybook story file; defines component variants for visual testing                  |
| **`.mdx`**        | Markdown file with JSX/component support; used for documentation                     |

---

## Development Workflow

| Term             | Definition                                                                            |
| ---------------- | ------------------------------------------------------------------------------------- |
| **LTR**          | Left-To-Right — default text direction (English, French, etc.)                        |
| **RTL**          | Right-To-Left — text direction for Arabic, Hebrew, etc.                               |
| **CI/CD**        | Continuous Integration / Continuous Deployment — automated testing and deployment     |
| **PR**           | Pull Request — proposed code changes submitted for review                             |
| **SRI**          | Subresource Integrity — cryptographic hash for CDN resources (ensures file integrity) |
| **CDN**          | Content Delivery Network — distributed servers for fast file delivery                 |
| **Hot reload**   | Dev server feature; automatically refreshes browser on file changes                   |
| **Sourcemap**    | File mapping minified code back to source; enables debugging `.min.js` files          |
| **Tree shaking** | Build optimization; removes unused code from bundles                                  |

---

## Component-Specific Terms

| Term                  | Definition                                                                       |
| --------------------- | -------------------------------------------------------------------------------- |
| **Accordion**         | Collapsible content panels; only one panel open at a time (uses Collapse)        |
| **Alert**             | Contextual feedback message; dismissible with close button                       |
| **Backdrop**          | Semi-transparent overlay behind modals/offcanvas; prevents interaction with page |
| **Carousel**          | Image/content slider with prev/next controls and indicators                      |
| **Dropdown**          | Contextual overlay menu; triggered by button/link                                |
| **Modal**             | Dialog overlay; traps focus and blocks page interaction                          |
| **Offcanvas**         | Sidebar panel; slides in from left/right/top/bottom                              |
| **Popover**           | Contextual overlay; triggered by hover/click; larger than tooltip                |
| **Toast**             | Temporary notification; auto-dismisses after timeout                             |
| **Tooltip**           | Small contextual hint; triggered by hover/focus                                  |
| **Quantity selector** | Numeric stepper input; increment/decrement buttons                               |
| **Orange navbar**     | Brand-specific supra bar with logo, mega-menu, search                            |
| **Star rating**       | CSS-only rating input; uses radio buttons styled as stars                        |
| **Stepped process**   | Multi-step progress indicator; shows current step                                |
| **Sticker**           | Circular promotional badge; absolute positioned on cards/images                  |
| **Title bar**         | Section header with optional actions; visually separates content                 |

---

## Special Prefixes & Conventions

| Prefix         | Meaning                                      | Example                                |
| -------------- | -------------------------------------------- | -------------------------------------- |
| `$prefix`      | SCSS variable for CSS custom property prefix | `--#{$prefix}color-*` → `--bs-color-*` |
| `bs-`          | CSS class/custom property prefix             | `.bs-accordion`, `--bs-primary`        |
| `ouds-`        | Semantic/component token prefix              | `$ouds-border-radius-default`          |
| `core-ouds-`   | Raw token prefix (OUDS Core)                 | `$core-ouds-dimension-100`             |
| `core-orange-` | Raw token prefix (Orange brand)              | `$core-orange-color-orange-550`        |
| `data-bs-`     | Data attribute prefix for JS                 | `data-bs-toggle="modal"`               |
| `aria-`        | ARIA attribute prefix                        | `aria-label`, `aria-expanded`          |
| `// OUDS mod:` | Comment marking deviation from Bootstrap     | `// OUDS mod: custom focus style`      |
