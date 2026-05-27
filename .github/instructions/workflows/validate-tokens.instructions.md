---
name: validate-tokens-workflow
description: >
  Read-only audit of OUDS design token usage in SCSS component files.
  Checks cross-brand token presence and detects anti-patterns (hardcoded values,
  raw tokens, forbidden CSS patterns). Use when reviewing or validating token usage.
applyTo: "**/packages/**,scss/_*.scss,scss/forms/_*.scss"
---

# Workflow: Validate Token Usage

This is a **read-only audit** — do not modify files. Generate a report only.

---

## Step 1 — Load component tokens per brand

Read these 3 files and extract all `$ouds-*` variable definitions:

- `packages/orange/scss/tokens/_component.scss`
- `packages/sosh/scss/tokens/_component.scss`
- `packages/orange-compact/scss/tokens/_component.scss`

Pattern: `^\$(ouds-[a-z][a-z0-9-]*):\s`

This produces 3 sets for cross-referencing.

## Step 2 — Identify component SCSS files

List all `scss/_*.scss` and `scss/forms/_*.scss`, excluding non-component files:
`_variables.scss`, `_variables-dark.scss`, `_config.scss`, `_functions.scss`, `_mixins.scss`, `_maps.scss`, `_root.scss`, `_reboot.scss`, `_utilities.scss`, `_helpers.scss`, `_grid.scss`, `_containers.scss`, `_images.scss`, `_type.scss`, `_transitions.scss`, `_forms.scss`

## Step 3 — For each component file

### 3a. Extract component token references

Find all `$ouds-<component>-*` tokens used as values (not definitions). Skip semantic tokens (`$ouds-color-*`, `$ouds-space-*`, `$ouds-border-*`) — they're always present.

### 3b. Cross-brand check

Verify each component token exists in all 3 brand sets. Flag missing tokens.

### 3c. Anti-pattern detection

| Pattern | Severity |
|---|---|
| Hardcoded px/rem/em values | WARNING |
| Hardcoded hex color | WARNING |
| `$core-ouds-*` (raw token) | ERROR |
| `$core-orange-*` / `$core-sosh-*` | ERROR |
| `lighten()` / `darken()` | ERROR |
| `border: none` | ERROR |
| Direct `transition:` (no mixin) | ERROR |
| Direct `border-radius:` (no mixin) | ERROR |

**Exceptions** (do NOT flag): standalone `0`, values inside `@keyframes`, comments, `100%` fill, `calc()` multipliers, lines with `// stylelint-disable`.

## Step 4 — Generate report

```
╔══════════════════════════════════════════════════════╗
║  OUDS TOKEN VALIDATION REPORT                        ║
║  Files analyzed: <N>                                 ║
╚══════════════════════════════════════════════════════╝

── CROSS-BRAND TOKEN PRESENCE ──────────────────────────

✅ PASS (N files — all tokens present)
  • _alert.scss ............... 13 tokens ✓
  • _buttons.scss ............. 59 tokens ✓

❌ FAIL (N files)
  • _component.scss
    ❌ $ouds-token-name
       orange: ✓  sosh: ✗ MISSING  orange-compact: ✓

── ANTI-PATTERNS ───────────────────────────────────────

⚠️  WARNING
  • scss/_chips.scss:5  gap: 0 8px → use spacing token

❌ ERROR
  • scss/_button-group.scss:142  $core-orange-color-orange-500 → use semantic token

── SUMMARY ─────────────────────────────────────────────
  Cross-brand: N pass, N fail
  Anti-patterns: N warnings, N errors
```
