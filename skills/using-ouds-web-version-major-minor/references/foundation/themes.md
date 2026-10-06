# Themes and brands

OUDS Web ships three themes, covering two brands: **Orange** and **Sosh**.

| Theme          | npm package                | Brand  | Purpose                                                                            |
| -------------- | --------------------------- | ------ | ----------------------------------------------------------------------------------- |
| Orange         | `@ouds/web-orange`          | Orange | Default Orange brand, suitable for most contexts. Vibrant color scheme, modern typography. |
| Orange Compact | `@ouds/web-orange-compact`  | Orange | Condensed variant of the Orange theme for information-dense contexts (business tools, operational interfaces). Same color scheme, typography, and logo as Orange. |
| Sosh           | `@ouds/web-sosh`            | Sosh   | Sosh brand — brighter color scheme, playful typography, distinctive logo, more marketing/social-media feel. |

> **Critical rule:** a project must pick **one** theme and use it consistently across all screens. Never mix multiple themes in the same project — each theme package includes its own tokens, and combining them creates visual/design inconsistencies.

Each theme package provides the same component APIs (HTML/CSS classes) — only the underlying design tokens (colors, typography, logo, spacing) change. Code generated against one theme is generally portable to another by simply swapping the theme package.

## Logos

- **Orange / Orange Compact**: share the same logo SVG (single file usable for master and small sizes).
- **Sosh**: dedicated logo SVG.

Logo files ship inside each theme package's assets.
