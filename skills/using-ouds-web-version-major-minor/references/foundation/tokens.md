# Tokens

OUDS Web design tokens (from Figma) are structured in a **three-tier architecture**. Only the top two tiers should be used directly in projects.

## Raw tokens

- File: `@ouds/web-{brand}/scss/tokens/_raw.scss`
- No semantic meaning; **not** meant to be used directly in code
- Foundation for semantic (and occasionally composite) tokens

## Semantic tokens

- File: `@ouds/web-{brand}/scss/tokens/_semantic.scss`
- **Usable directly in projects**, though preferably through [utility classes](../utilities/figma-tokens.md) rather than raw Sass/CSS variables
- Derived from raw tokens with an added semantic context
- Color tokens specifically should be used via their CSS variable form (see below), not the raw Sass variable

### Semantic colors via CSS variables

- File: `@ouds/web-{brand}/scss/tokens/_semantic-colors-custom-props.scss`
- These custom properties (`--bs-color-*`) switch value depending on the [color mode](color-modes.md)
- Sass variable equivalents also exist
- See [Colors](colors.md) for the full usable color list

## Composite tokens

- File: `@ouds/web-{brand}/scss/tokens/_composite.scss`
- Aggregations of several semantic tokens (or brand-specific icons), e.g. shadow/elevation tokens and typographic definitions
- Already exposed via utilities/components — **usable directly**

## Component tokens

- File: `@ouds/web-{brand}/scss/tokens/_component.scss`
- Used exclusively inside specific components (may reference semantic, composite, or occasionally raw tokens)
- **Avoid using these in project code** — they're defined for one specific component's internals

## Practical rule

| Tier | Use directly in project code? | Preferred access |
| --- | --- | --- |
| Raw | No | — |
| Semantic | Yes | Utility class > CSS variable > Sass variable |
| Composite | Yes | Utility class / component |
| Component | No | — (component-internal only) |

For mapping a specific Figma token (`ouds/**`) to the concrete utility class or CSS/Sass variable to write, see [Figma tokens mapping](../utilities/figma-tokens.md).
