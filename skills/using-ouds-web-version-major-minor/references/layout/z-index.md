# Z-index

CSS `z-index` values used to layer OUDS Web components.

## Overview

OUDS Web uses a predefined z-index scale for overlay components. Values start at an arbitrary high number to avoid conflicts with custom styles.

Defined in `scss/_variables.scss` via `$zindex-*` variables.

## Guidelines

- Do not customize individual values — if one changes, all likely need to change
- Low single-digit `z-index` values (1, 2, 3) handle overlapping borders within components
