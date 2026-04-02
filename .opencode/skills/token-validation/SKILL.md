---
name: token-validation
description: Validate OUDS design token usage in SCSS component files - checks that every component token used is present in all three brands (orange, sosh, orange-compact) and detects anti-patterns like hardcoded values, raw tokens, and forbidden CSS patterns
compatibility: opencode
metadata:
  audience: developers
  workflow: token-audit
---

## What I do

I analyze SCSS component files in the OUDS Web project to:

1. **Cross-brand token presence check**: For every `$ouds-<component>-*` token referenced in a component SCSS file, I verify it is defined in ALL three brand `_component.scss` files:
   - `packages/orange/scss/tokens/_component.scss`
   - `packages/sosh/scss/tokens/_component.scss`
   - `packages/orange-compact/scss/tokens/_component.scss`

2. **Anti-pattern detection**: I flag forbidden patterns in component SCSS files:
   - Hardcoded numeric values (e.g. `8px`, `1rem`, `#ff7900`, `rgb(...)`)
   - Raw tokens used directly in components (`$core-ouds-*`, `$core-orange-*`, `$core-sosh-*`)
   - Forbidden Sass functions (`lighten(`, `darken(`)
   - `border: none` (must be `border: 0`)
   - Direct `transition:` or `border-radius:` properties without `@include`

## When to use me

Use me when:

- You have added or modified SCSS component files and want to verify token usage is correct across all brands
- You are reviewing a PR that touches `scss/_*.scss` or `scss/forms/_*.scss` files
- You want to audit the full codebase for token-related issues

## Scope

### Files to analyze

Only analyze files in these two directories:

- `scss/_*.scss` (root component files)
- `scss/forms/_*.scss` (form component files)

### Files to EXCLUDE from analysis

These are not component implementations — skip them entirely:

- `scss/_variables.scss`
- `scss/_variables-dark.scss`
- `scss/_config.scss`
- `scss/_functions.scss`
- `scss/_mixins.scss`
- `scss/_maps.scss`
- `scss/_root.scss`
- `scss/_reboot.scss`
- `scss/_utilities.scss`
- `scss/_helpers.scss`
- `scss/_grid.scss`
- `scss/_containers.scss`
- `scss/_images.scss`
- `scss/_type.scss`
- `scss/_transitions.scss`
- `scss/_forms.scss`

### Token files to read (all three brands, mandatory)

- `packages/orange/scss/tokens/_component.scss`
- `packages/sosh/scss/tokens/_component.scss`
- `packages/orange-compact/scss/tokens/_component.scss`

## Step-by-step instructions

### Phase 1: Load all component tokens per brand

Read all three brand `_component.scss` files. For each file, extract every SCSS variable definition that matches the pattern:

```
^\$(ouds-[a-z][a-z0-9-]*):\s
```

This gives you three sets: `tokens_orange`, `tokens_sosh`, `tokens_orange_compact`.

The union of all three sets is the complete list of known component tokens.

### Phase 2: Identify component SCSS files to analyze

Use Glob to list:

- `scss/_*.scss`
- `scss/forms/_*.scss`

Then exclude the files listed in the **Files to EXCLUDE** section above.

If the user specifies a particular component (e.g. "validate button"), only analyze `scss/_buttons.scss`.

### Phase 3: For each component SCSS file

#### 3a. Extract all `$ouds-*` token references

Grep the file for all occurrences of `\$ouds-[a-z][a-z0-9-]*` (excluding the `: ` assignment syntax to avoid re-reading token definitions if the file defines local overrides). Collect unique token names used.

**Important**: A token is "used" if it appears as a value reference (e.g. `$ouds-button-size-min-width`, not as a definition). In practice, component SCSS files do not define `$ouds-*` tokens — they only use them. So any `$ouds-*` occurrence is a usage.

#### 3b. Cross-brand presence check

For each token found in step 3a:

- Check if it exists in `tokens_orange`
- Check if it exists in `tokens_sosh`
- Check if it exists in `tokens_orange_compact`

A token **passes** if it exists in all three.
A token **fails** if it is missing in one or more brands.

#### 3c. Anti-pattern detection

Scan the file content for:

| Anti-pattern                  | Regex / Pattern                                                             | Severity |
| ----------------------------- | --------------------------------------------------------------------------- | -------- |
| Hardcoded pixel/rem/em values | `:\s*[\d.]+(?:px\|rem\|em)`                                                 | WARNING  |
| Hardcoded hex color           | `#[0-9a-fA-F]{3,8}(?!\s*[;,{])` or as a value                               | WARNING  |
| Hardcoded rgb/rgba            | `rgba?\(`                                                                   | WARNING  |
| Raw OUDS core token           | `\$core-ouds-`                                                              | ERROR    |
| Raw brand token               | `\$core-orange-\|\$core-sosh-\|\$core-orange-compact-`                      | ERROR    |
| Forbidden Sass function       | `lighten\(\|darken\(`                                                       | ERROR    |
| border: none                  | `border:\s*none`                                                            | ERROR    |
| Direct transition property    | `^\s+transition:\s` (without `@include`)                                    | ERROR    |
| Direct border-radius property | `^\s+border-radius:\s` (without `@include` and without `stylelint-disable`) | ERROR    |

**Exceptions for hardcoded values** (do NOT flag these):

- Standalone `0` (e.g. `margin: 0`, `border: 0`, `padding: 0`) — `0` has no unit and is valid
- Values inside `@keyframes` blocks (animation percentages are not design tokens)
- Values inside comments `//` or `/* */`
- `100%` used for width/height fill
- `1` or `-1` used as multipliers in `calc()` expressions
- Line numbers or indices in CSS counters
- Values flagged with `// stylelint-disable` comments on the same line

### Phase 4: Generate the report

Output a clear, structured report:

```
╔══════════════════════════════════════════════════════╗
║  OUDS TOKEN VALIDATION REPORT                        ║
║  Files analyzed: <N>                                 ║
╚══════════════════════════════════════════════════════╝

── CROSS-BRAND TOKEN PRESENCE ──────────────────────────

✅ PASS (<N> files — all tokens present in all brands)
  • _alert.scss ............... 13 tokens ✓
  • _buttons.scss ............. 59 tokens ✓
  • _chips.scss ............... 44 tokens ✓
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

## Important context

### Token naming convention

Component tokens follow this pattern: `$ouds-<component>-<category>-<variant>`

Where `<component>` can be multi-word with hyphens:

- `$ouds-alert-*` → component: alert
- `$ouds-button-*` → component: button
- `$ouds-bullet-list-*` → component: bullet-list
- `$ouds-control-item-*` → component: control-item
- `$ouds-input-tag-*` → component: input-tag
- `$ouds-text-input-*` → component: text-input
- `$ouds-text-area-*` → component: text-area

### Brand token files structure

Each brand's `_component.scss` groups tokens by component, delimited by markers:

```scss
// scss-docs-start ouds-component-<name>
$ouds-<name>-...: ... !default;
// scss-docs-end ouds-component-<name>
```

The three brand files have the **same token names** but **different values**. All three must define the same set of tokens.

### Known component token groups (from \_component.scss)

The following component token groups are defined (same across all brands):

- `ouds-component-alert` → `$ouds-alert-*`
- `ouds-component-badge` → `$ouds-badge-*`
- `ouds-component-breadcrumb` → `$ouds-breadcrumb-*`
- `ouds-component-bullet` → `$ouds-bullet-list-*`
- `ouds-component-button` → `$ouds-button-*`
- `ouds-component-checkbox` → `$ouds-checkbox-*`
- `ouds-component-chip` → `$ouds-chip-*`
- `ouds-component-control` → `$ouds-control-item-*`
- `ouds-component-divider` → `$ouds-divider-*`
- `ouds-component-expand` → `$ouds-expand-*`
- `ouds-component-input` → `$ouds-input-tag-*`
- `ouds-component-link` → `$ouds-link-*`
- `ouds-component-pin` → `$ouds-pin-code-input-*`
- `ouds-component-quantity` → `$ouds-quantity-input-*`
- `ouds-component-radio` → `$ouds-radio-button-*`
- `ouds-component-select` → `$ouds-select-input-*`
- `ouds-component-skeleton` → `$ouds-skeleton-*`
- `ouds-component-switch` → `$ouds-switch-*`
- `ouds-component-tag` → `$ouds-tag-*`
- `ouds-component-text` → `$ouds-text-input-*`, `$ouds-text-area-*`

### What counts as a component SCSS token vs a semantic token

- Component tokens: `$ouds-<specific-component>-*` (e.g. `$ouds-button-size-min-width`) → MUST be checked across all brands
- Semantic tokens: `$ouds-color-*`, `$ouds-space-*`, `$ouds-border-*`, `$ouds-dimension-*`, `$ouds-size-*`, `$ouds-opacity-*` → These are defined in `_semantic.scss`, not `_component.scss`. **Do NOT check these cross-brand** — they are always present.

To distinguish: a component token is any `$ouds-*` variable whose name prefix matches one of the known component groups listed above.

## Known real anti-patterns (validated)

These are confirmed issues found in the codebase that the skill should flag:

| File                      | Line             | Pattern                         | Type                     |
| ------------------------- | ---------------- | ------------------------------- | ------------------------ |
| `scss/_button-group.scss` | 142, 146         | `$core-orange-color-orange-500` | ERROR: raw brand token   |
| `scss/_chips.scss`        | 90, 91, 158, 159 | `width: 1em; height: 1em;`      | WARNING: hardcoded value |

## How to run

When this skill is loaded, immediately:

1. Read all three brand `_component.scss` files
2. List all SCSS component files (excluding non-component files)
3. For each file, run checks as described above
4. Output the full report

If the user says "validate [component name]", only analyze the SCSS file(s) corresponding to that component.

Do not make any file modifications. This is a read-only audit.
