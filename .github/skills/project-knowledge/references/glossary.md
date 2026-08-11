# OUDS Web Glossary

Reference glossary of project-specific terms. Consult when encountering unfamiliar terminology.

---

## Project & Architecture

| Term | Definition |
|---|---|
| **OUDS** | Orange Unified Design System — design system for Orange Group digital products |
| **OUDS Web** | Web implementation of OUDS, built as a Bootstrap fork |
| **Boosted** | Legacy name (Orange Boosted Bootstrap) — replaced by OUDS Web in v1.0 |
| **Monorepo** | Single repository containing multiple packages (`@ouds/web-common`, etc.) |
| **npm workspaces** | npm feature for managing multiple packages in one repo |
| **Brand** | Visual identity variant (Orange, Sosh, Orange Compact) |
| **`@ouds/web-common`** | Root package — shared SCSS + JS (no CSS output) |
| **`@ouds/web-orange`** | Orange brand package — compiled CSS |
| **`@ouds/web-sosh`** | Sosh brand package — compiled CSS |
| **`@ouds/web-orange-compact`** | Orange Compact brand package — compiled CSS |

## Design Tokens

| Term | Definition |
|---|---|
| **Design Token** | Named variable representing a design decision (color, spacing, font, etc.) |
| **DTCG** | Design Token Community Group — W3C standard format for design tokens |
| **Style Dictionary** | Token transformation tool; converts DTCG JSON to SCSS, CSS, etc. |
| **Raw tokens** | Primitive values (`$core-ouds-*`) — never used directly in components |
| **Semantic tokens** | Meaningful aliases (`$ouds-border-radius-default`) — design intent |
| **Composite tokens** | Complex combined values (elevation, font-stacks, icons) — `_composite.scss` |
| **Component tokens** | Per-component tokens (`$ouds-button-border-radius-default`) |
| **CSS custom properties** | Runtime CSS variables (`--bs-color-*`) — enable dark mode and theming |
| **Token layer** | Hierarchical level: Raw → Semantic → Composite → Component |
| **Base multiplier** | Pattern: base unit × multiplier (e.g., `$core-ouds-border-base * 2`) |

## Tech Stack

| Term | Definition |
|---|---|
| **SCSS** | Sassy CSS — CSS preprocessor with variables, mixins, functions, nesting |
| **Sass** | The compiler (v1.78.0 — pinned, do not update) |
| **PostCSS** | CSS post-processor (autoprefixer + rtlcss) |
| **Autoprefixer** | PostCSS plugin adding vendor prefixes |
| **rtlcss** | PostCSS plugin converting LTR CSS to RTL |
| **Rollup** | JavaScript bundler (ES module, UMD, bundled variants) |
| **ESM** | ECMAScript Modules — `import`/`export` syntax |
| **UMD** | Universal Module Definition — works in browsers, Node, AMD, CommonJS |
| **Terser** | JavaScript minifier — creates `.min.js` |
| **Astro** | Static site generator for multi-brand documentation site |
| **MDX** | Markdown + JSX — documentation format |
| **Storybook** | Component development environment; visual testing |

## Testing & Quality

| Term | Definition |
|---|---|
| **ESLint** | JavaScript linter (extends `xo`, `unicorn` plugins) |
| **Stylelint** | SCSS/CSS linter (extends `stylelint-config-twbs-bootstrap`) |
| **Karma** | JavaScript test runner in real browsers |
| **Jasmine** | JavaScript testing framework (`describe`, `it`, `expect`) |
| **Pa11y-CI** | Accessibility testing tool with axe-core |
| **VNU** | Nu Html Checker — HTML5 markup validation |
| **axe-core** | Accessibility rules engine used by Pa11y-CI and Storybook |
| **WCAG** | Web Content Accessibility Guidelines — W3C standard (target: 2.2 AAA/AA) |
| **a11y** | Numeronym for "accessibility" (a + 11 letters + y) |
| **SR** | Screen Reader |

## Accessibility Concepts

| Term | Definition |
|---|---|
| **ARIA** | Accessible Rich Internet Applications — spec for dynamic content |
| **WAI-ARIA** | Web Accessibility Initiative - ARIA — full spec name |
| **Focus ring** | Visual indicator around focused element; OUDS uses dual-ring |
| **Focus trap** | Constraining Tab key within modal/dialog |
| **Visually hidden** | Hidden visually but announced by screen readers (`.visually-hidden`) |
| **Color contrast ratio** | Luminance difference between foreground/background |
| **Touch target size** | Minimum interactive element size: 44×44px per WCAG 2.5.8 |
| **Reduced motion** | User preference to minimize animations (`prefers-reduced-motion`) |

## Bootstrap Concepts

| Term | Definition |
|---|---|
| **Bootstrap** | Popular CSS framework; OUDS Web is a fork of Bootstrap 5.3.6 |
| **BaseComponent** | Abstract JS class all interactive components extend |
| **Data attributes** | `data-bs-*` — configure JS component behavior |
| **Utility classes** | Single-purpose CSS classes (`.d-flex`, `.mt-3`, etc.) |
| **Breakpoint** | Responsive width threshold: xs, sm, md, lg, xl, xxl, 3xl |
| **Grid system** | 12-column responsive layout using flexbox |
| **Color mode** | Light/dark variant; toggled via `data-bs-theme` attribute |
| **Reboot** | CSS reset/normalize for consistent baseline styles |

## File Naming & Patterns

| Term | Definition |
|---|---|
| **Partial** | SCSS file prefixed with `_` (e.g., `_buttons.scss`); imported, not compiled alone |
| **Mixin** | Reusable SCSS code block; invoked with `@include` |
| **Function** | SCSS function returning a value |
| **Helper** | Utility class (`.visually-hidden`, `.clearfix`, etc.) |
| **`.spec.js`** | Unit test file (Jasmine) |
| **`.stories.js`** | Storybook story file |
| **`.mdx`** | Markdown + JSX — documentation format |

## Development Workflow

| Term | Definition |
|---|---|
| **LTR** | Left-To-Right — default text direction |
| **RTL** | Right-To-Left — Arabic, Hebrew; handled by rtlcss |
| **CI/CD** | Continuous Integration / Continuous Deployment |
| **PR** | Pull Request |
| **SRI** | Subresource Integrity — cryptographic hash for CDN resources |
| **CDN** | Content Delivery Network |
| **Sourcemap** | Maps minified code back to source |
| **Tree shaking** | Build optimization removing unused code |

## Prefixes & Conventions

| Prefix | Meaning | Example |
|---|---|---|
| `$prefix` | CSS custom property prefix variable | `--#{$prefix}color-*` → `--bs-color-*` |
| `bs-` | CSS class/custom property prefix | `--bs-primary` |
| `ouds-` | Semantic/component token prefix | `$ouds-border-radius-default` |
| `core-ouds-` | Raw token prefix (shared) | `$core-ouds-dimension-100` |
| `core-orange-` | Raw token prefix (Orange brand) | `$core-orange-color-orange-550` |
| `core-sosh-` | Raw token prefix (Sosh brand) | `$core-sosh-color-magenta-500` |
| `data-bs-` | Data attribute prefix for JS | `data-bs-toggle="modal"` |
| `aria-` | ARIA attribute prefix | `aria-expanded` |
| `// OUDS mod:` | Comment marking Bootstrap deviation | |
