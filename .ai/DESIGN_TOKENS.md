# Design Tokens — OUDS Web

> Full reference for the token system powering OUDS Web's multi-brand architecture.
> For a quick overview, see the [Design tokens section in AGENTS.md](../AGENTS.md#design-tokens-system).

🔜 **This file is planned.** It will cover:

- Token generation pipeline: Figma → DTCG export → Style Dictionary → SCSS files → GitHub PR
- Which token files are auto-generated vs. manually managed
- Complete token layer reference (raw, semantic, composite, component)
- Token naming scheme with full examples
- Base multiplier system details
- CSS custom properties and color-mode switching
- Token version management (OUDS Core, brand-specific versions)
- How `_variables.scss` maps Bootstrap variables to OUDS tokens
- The role of `_composite.scss`: icons, elevation, font stacks, Sass maps
- Brand override guide: how tokens differ across Orange, Sosh, Orange Compact

⚠️ **Key constraint**: Only `_composite.scss` can be edited by hand. All other token files (`_raw.scss`, `_semantic.scss`, `_component.scss`, `_*-custom-props.scss`) are auto-generated from Figma via Style Dictionary and must never be manually modified.
