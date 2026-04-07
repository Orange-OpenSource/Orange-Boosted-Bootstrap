---
name: ouds-validate-tokens
description: >
  Read-only audit of OUDS design token usage in SCSS component files.
  Checks every $ouds-<component>-* token against all three brand files to ensure
  cross-brand presence, and detects anti-patterns such as hardcoded values, raw tokens,
  and forbidden CSS patterns (border-radius, transition, border: none, lighten/darken).
when_to_use:
  - You have added or modified SCSS component files and want to verify token usage is correct across all brands
  - You are reviewing a PR that touches scss/_*.scss or scss/forms/_*.scss files
  - You want to audit the full codebase for token-related issues
  - The user says "validate tokens", "check tokens", "audit tokens", or "validate [component name]"
---

# Command: Validate OUDS Design Tokens

## When to Use

- Added or modified a SCSS component file and want to verify token usage across all 3 brands
- Reviewing a PR that touches `scss/_*.scss` or `scss/forms/_*.scss`
- Auditing the codebase for token anti-patterns before a release

## Checkpoints

- Are the three brand `_component.scss` files readable? (`packages/orange/`, `packages/sosh/`, `packages/orange-compact/`)
- Is the scope a single component (e.g. "validate button") or the full codebase?
- This is a **read-only** audit — make no file modifications.

---

## Steps

### Step 1 — Load all component tokens per brand

Read all three brand token files:

- `packages/orange/scss/tokens/_component.scss`
- `packages/sosh/scss/tokens/_component.scss`
- `packages/orange-compact/scss/tokens/_component.scss`

For each file, extract every SCSS variable definition matching:

```
^\$(ouds-[a-z][a-z0-9-]*):\s
```

This produces three sets: `tokens_orange`, `tokens_sosh`, `tokens_orange_compact`.

> **Note**: Tokens are grouped by component using `// scss-docs-start ouds-component-<name>` / `// scss-docs-end ouds-component-<name>` markers. The three brand files share the same token names but different values — all three must define the same set.

### Step 2 — Identify component SCSS files to analyze

List all files matching:

- `scss/_*.scss`
- `scss/forms/_*.scss`

Then **exclude** these non-component files:

| Excluded file |
|---|
| `scss/_variables.scss` |
| `scss/_variables-dark.scss` |
| `scss/_config.scss` |
| `scss/_functions.scss` |
| `scss/_mixins.scss` |
| `scss/_maps.scss` |
| `scss/_root.scss` |
| `scss/_reboot.scss` |
| `scss/_utilities.scss` |
| `scss/_helpers.scss` |
| `scss/_grid.scss` |
| `scss/_containers.scss` |
| `scss/_images.scss` |
| `scss/_type.scss` |
| `scss/_transitions.scss` |
| `scss/_forms.scss` |

If the user specifies a component (e.g. "validate button"), only analyze `scss/_buttons.scss`.

### Step 3 — For each component SCSS file

#### 3a. Extract all `$ouds-*` component token references

Grep the file for all occurrences of `\$ouds-[a-z][a-z0-9-]*` used as **values** (not definitions). Collect unique token names.

Limit to component tokens — tokens whose name prefix matches a known component group (see reference below). Do **not** cross-brand-check semantic tokens (`$ouds-color-*`, `$ouds-space-*`, `$ouds-border-*`, `$ouds-dimension-*`, `$ouds-size-*`, `$ouds-opacity-*`) — those are defined in `_semantic.scss` and are always present.

#### 3b. Cross-brand presence check

For each component token found:

- Check if it exists in `tokens_orange`
- Check if it exists in `tokens_sosh`
- Check if it exists in `tokens_orange_compact`

A token **passes** if it exists in all three. A token **fails** if it is missing in one or more brands.

#### 3c. Anti-pattern detection

Scan the file for the following patterns:

| Anti-pattern | Regex / Pattern | Severity |
|---|---|---|
| Hardcoded pixel/rem/em values | `:\s*[\d.]+(?:px\|rem\|em)` | WARNING |
| Hardcoded hex color | `#[0-9a-fA-F]{3,8}` as a value | WARNING |
| Hardcoded rgb/rgba | `rgba?\(` | WARNING |
| Raw OUDS core token | `\$core-ouds-` | ERROR |
| Raw brand token | `\$core-orange-\|\$core-sosh-\|\$core-orange-compact-` | ERROR |
| Forbidden Sass function | `lighten\(\|darken\(` | ERROR |
| `border: none` | `border:\s*none` | ERROR |
| Direct `transition:` property | `^\s+transition:\s` (without `@include`) | ERROR |
| Direct `border-radius:` property | `^\s+border-radius:\s` (without `@include` and without `stylelint-disable`) | ERROR |

**Do NOT flag these exceptions**:

- Standalone `0` (e.g. `margin: 0`, `border: 0`) — valid, no unit
- Values inside `@keyframes` blocks (animation percentages)
- Values inside comments (`//` or `/* */`)
- `100%` for width/height fill
- `1` or `-1` multipliers in `calc()` expressions
- Lines with `// stylelint-disable` on the same line

### Step 4 — Generate the report

Output the structured report below. Do not modify any files.

```
╔══════════════════════════════════════════════════════╗
║  OUDS TOKEN VALIDATION REPORT                        ║
║  Files analyzed: <N>                                 ║
╚══════════════════════════════════════════════════════╝

── CROSS-BRAND TOKEN PRESENCE ──────────────────────────

✅ PASS (<N> files — all tokens present in all brands)
  • _alert.scss ............... 13 tokens ✓
  • _buttons.scss ............. 59 tokens ✓
  [list all passing files]

❌ FAIL (<N> files)
  • _<component>.scss
    ❌ $ouds-<token-name>
       orange:         ✓
       sosh:           ✗ MISSING  ← packages/sosh/scss/tokens/_component.scss
       orange-compact: ✓

── ANTI-PATTERNS ───────────────────────────────────────

✅ No anti-patterns found

  OR

⚠️  WARNING — Hardcoded values
  • scss/_chips.scss
    line 5:  gap: 0 8px;  → replace with a spacing token
    line 6:  padding: 0 5px;  → replace with a spacing token

❌ ERROR — Forbidden patterns
  • scss/_<component>.scss
    line 42:  $core-ouds-dimension-200  → use semantic token instead

── SUMMARY ─────────────────────────────────────────────
  Cross-brand: <N_pass> pass, <N_fail> fail
  Anti-patterns: <N_warnings> warnings, <N_errors> errors
```

---

## Reference

### Component token groups

| scss-docs marker | Token prefix |
|---|---|
| `ouds-component-alert` | `$ouds-alert-*` |
| `ouds-component-badge` | `$ouds-badge-*` |
| `ouds-component-breadcrumb` | `$ouds-breadcrumb-*` |
| `ouds-component-bullet` | `$ouds-bullet-list-*` |
| `ouds-component-button` | `$ouds-button-*` |
| `ouds-component-checkbox` | `$ouds-checkbox-*` |
| `ouds-component-chip` | `$ouds-chip-*` |
| `ouds-component-control` | `$ouds-control-item-*` |
| `ouds-component-divider` | `$ouds-divider-*` |
| `ouds-component-expand` | `$ouds-expand-*` |
| `ouds-component-input` | `$ouds-input-tag-*` |
| `ouds-component-link` | `$ouds-link-*` |
| `ouds-component-pin` | `$ouds-pin-code-input-*` |
| `ouds-component-quantity` | `$ouds-quantity-input-*` |
| `ouds-component-radio` | `$ouds-radio-button-*` |
| `ouds-component-select` | `$ouds-select-input-*` |
| `ouds-component-skeleton` | `$ouds-skeleton-*` |
| `ouds-component-switch` | `$ouds-switch-*` |
| `ouds-component-tag` | `$ouds-tag-*` |
| `ouds-component-text` | `$ouds-text-input-*`, `$ouds-text-area-*` |

### Token naming convention

Component tokens follow: `$ouds-<component>-<category>-<variant>`

Where `<component>` can be multi-word with hyphens:
`$ouds-bullet-list-*`, `$ouds-control-item-*`, `$ouds-input-tag-*`, `$ouds-text-input-*`, `$ouds-text-area-*`

### Semantic tokens (do not cross-brand-check)

`$ouds-color-*`, `$ouds-space-*`, `$ouds-border-*`, `$ouds-dimension-*`, `$ouds-size-*`, `$ouds-opacity-*` — defined in `_semantic.scss`, always present in all brands.

### Known anti-patterns (confirmed in codebase)

| File | Line | Pattern | Type |
|---|---|---|---|
| `scss/_button-group.scss` | 142, 146 | `$core-orange-color-orange-500` | ERROR: raw brand token |
| `scss/_chips.scss` | 90, 91, 158, 159 | `width: 1em; height: 1em;` | WARNING: hardcoded value |
