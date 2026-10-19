# Mapping Figma tokens to code

When integrating a Figma design, tokens are named `ouds/**`. This page maps Figma token names to the OUDS Web utility classes (or CSS/Sass variables) to use in code. See [Tokens](../foundation/tokens.md) for the underlying raw/semantic/composite/component token architecture this mapping is based on.

## General rule

- **Semantic tokens** (`ouds/color/*`, `ouds/space/*`, `ouds/font/*`, `ouds/opacity/*`, `ouds/border/*`, `ouds/elevation/*`, `ouds/grid/*`) → prefer a **utility class** if one exists.
- **Component tokens** and **raw tokens** → no utility class exists; use them only inside component Sass/CSS, not directly in markup.
- If no utility class exists for a semantic/composite token (rare — e.g. `ouds/color/action/*`, used on pseudo-elements, or in custom components), fall back to the **CSS variable** (`--bs-*`) or **Sass variable** (`$ouds-*`).

## Figma token → utility class

| On Figma                                             | Example token                                                        | Utility class(es)                                | Reference                                   |
| ----------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------- | -------------------------------------------- |
| Background color `ouds/color/{bg\|surface}/*`        | `ouds/color/bg/secondary`<br/>`ouds/color/surface/brand-primary`      | `.bg-secondary`<br/>`.bg-surface-brand-primary`   | [Background](background.md)                  |
| Border `ouds/color/border/*` or `ouds/border/*`      | `ouds/color/border/default`<br/>`ouds/border/radius/small`<br/>`ouds/border/width/thick` | `.border-default`<br/>`.rounded-small`<br/>`.border-thick` | [Border](border.md)          |
| Content color `ouds/color/content/*`                 | `ouds/color/content/muted`<br/>`ouds/color/content/on/brand-primary`  | `.text-muted`<br/>`.text-on-brand-primary`        | [Color](color.md)                            |
| Action color `ouds/color/action/*` (state-dependent) | `ouds/color/action/pressed`                                            | *No utility* — use CSS variable `--bs-color-action-pressed` | -                                |
| Opacity `ouds/opacity/*` (use carefully — a11y impact) | `ouds/opacity/medium`                                                | `.opacity-medium`                                 | [Opacity](opacity.md)                        |
| Shadow/elevation `ouds/elevation/*`                  | `ouds/elevation/**/emphasized`                                         | `.shadow-emphasized`                              | [Shadow](shadow.md)                          |
| Spacing `ouds/space/{scaled\|fixed}/*` or `ouds/space/{column-gap\|row-gap}/*` | `ouds/space/scaled/2xlarge`<br/>`ouds/space/fixed/medium`<br/>`ouds/space/row-gap/none` | `.p-scaled-2xlarge`<br/>`.p-medium`<br/>`.row-gap-none` | [Spacing](spacing.md) |
| Typography `ouds/font/*` or `font-ref/size/weight`   | `ouds/font/**/body-large`<br/>`Body/Large/Strong`                      | `.fs-bl`<br/>`.fs-bl.fw-bold`                     | [Text](text.md)                              |
| Grid spacing `ouds/grid/*`                           | `ouds/grid/column-gap`<br/>`ouds/grid/margin`                          | `.gap-gridgap`<br/>`.px-gridmargin`               | [Spacing](spacing.md)                        |

## Figma token → CSS/Sass variable (fallback)

Use when there is no utility class, when applying a token on a pseudo-element, or when creating a custom component.

| On Figma                                             | Example token                                                        | CSS variable                                                  | Sass variable                                             |
| ----------------------------------------------------- | ----------------------------------------------------------------------| -------------------------------------------------------------- | ------------------------------------------------------------ |
| Background/action color `ouds/color/*`               | `ouds/color/bg/secondary`<br/>`ouds/color/action/hover`                | `--bs-color-bg-secondary`<br/>`--bs-color-action-hover`         | `$ouds-color-bg-secondary`<br/>`$ouds-color-action-hover`      |
| Border `ouds/color/border/*` or `ouds/border/*`      | `ouds/border/radius/small`<br/>`ouds/border/width/thick`               | none                                                            | `$ouds-border-radius-small`<br/>`$ouds-border-width-thick`     |
| Content color `ouds/color/content/*`                 | `ouds/color/content/muted`                                             | `--bs-color-content-muted`                                      | `$ouds-color-content-muted`                                    |
| Opacity `ouds/opacity/*`                              | `ouds/opacity/medium`                                                  | none                                                            | `$ouds-opacity-medium`                                         |
| Shadow `ouds/elevation/*`                              | `ouds/elevation/**/emphasized`                                         | none                                                            | `$ouds-elevation-emphasized`                                   |
| Spacing `ouds/space/*`                                 | `ouds/space/scaled/2xlarge`<br/>`ouds/space/fixed/medium`              | `--bs-space-scaled-2xlarge`<br/>none                            | none<br/>`$ouds-space-fixed-medium`                            |
| Typography `ouds/font/*` or `font-ref/size/weight`    | `ouds/font/**/body-large`                                              | Use the `get-font-size()` Sass mixin (see [typography](../foundation/typography.md)) | `$ouds-font-weight-web-body-strong` (weight only) |
| Grid `ouds/grid/*`                                     | `ouds/grid/column-gap`<br/>`ouds/grid/margin`                          | `--bs-grid-gap`<br/>`--bs-grid-margin`                          | none                                                           |
