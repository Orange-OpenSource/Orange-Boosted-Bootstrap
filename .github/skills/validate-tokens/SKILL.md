---
name: 'validate-tokens'
description: 'Read-only audit of OUDS design token usage across SCSS component files. Use this skill when the user asks to validate, check, or audit tokens, when reviewing PRs that touch scss/_*.scss or packages/, or before a release. Performs cross-brand presence check (are tokens defined in all 3 brands?) and anti-pattern detection (hardcoded values, raw tokens, forbidden patterns). Generates a structured report — does not modify files.'
---

# Workflow: Validate Token Usage

**This is a read-only audit.** Generate a report, do not modify files.

---

## Step 1 — Load brand tokens

Read all 3 files and extract `$ouds-*` definitions:

- `packages/orange/scss/tokens/_component.scss`
- `packages/sosh/scss/tokens/_component.scss`
- `packages/orange-compact/scss/tokens/_component.scss`

---

## Step 2 — Identify component SCSS files

All `scss/_*.scss` + `scss/forms/_*.scss`, excluding: `_variables.scss`, `_config.scss`, `_functions.scss`, `_mixins.scss`, `_maps.scss`, `_root.scss`, `_reboot.scss`, `_utilities.scss`, `_helpers.scss`, `_grid.scss`, `_containers.scss`, `_images.scss`, `_type.scss`, `_transitions.scss`, `_forms.scss`, `_variables-dark.scss`

---

## Step 3 — For each file

### Cross-brand check

Find `$ouds-<component>-*` tokens used as values → verify present in all 3 brands. Skip semantic tokens (`$ouds-color-*`, `$ouds-space-*`, etc.) — always present.

### Anti-pattern detection

| Pattern | Severity |
|---|---|
| Hardcoded px/rem/em | WARNING |
| Hardcoded hex color | WARNING |
| `$core-ouds-*` (raw token) | ERROR |
| `$core-orange-*` / `$core-sosh-*` | ERROR |
| `lighten()` / `darken()` | ERROR |
| `border: none` | ERROR |
| Direct `transition:` | ERROR |
| Direct `border-radius:` | ERROR |

**Exceptions**: standalone `0`, `@keyframes`, comments, `100%`, `calc()` multipliers, `// stylelint-disable` lines.

---

## Step 4 — Generate report

```
╔══════════════════════════════════════════════╗
║  OUDS TOKEN VALIDATION REPORT               ║
║  Files analyzed: N                           ║
╚══════════════════════════════════════════════╝

── CROSS-BRAND PRESENCE ────────────────────────
✅ PASS: N files — all tokens in all brands
❌ FAIL: $token-name missing in [brand]

── ANTI-PATTERNS ───────────────────────────────
⚠️  WARNING: file:line → suggestion
❌ ERROR: file:line → fix

── SUMMARY ─────────────────────────────────────
Cross-brand: N pass, N fail
Anti-patterns: N warnings, N errors
```
