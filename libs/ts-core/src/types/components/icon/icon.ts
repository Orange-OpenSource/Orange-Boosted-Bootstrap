import type { Brand } from '../../theming/theming';

/**
 * One `<path>` of an icon.
 */
export type IconPath = {
    /**
     * The `d` attribute of the path.
     */
    d: string;
    /**
     * Fill of the path. Leave it out to inherit `currentColor` from the `<svg>`; set it for
     * multicolor icons (for example `var(--bs-icon-color-content-status-warning-external-shape)`).
     */
    fill?: string;
    /**
     * The `fill-rule` attribute of the path.
     */
    fillRule?: 'evenodd' | 'nonzero';
};

/**
 * Data of one icon: its `viewBox` and the paths to draw for each brand.
 */
export type OudsIcon = {
    /**
     * Name of the icon, as in the OUDS Web sprite (`<symbol id>`), e.g. `functional-status-warning`.
     */
    name: string;
    /**
     * The `viewBox` attribute of the `<svg>`.
     */
    viewBox: string;
    /**
     * Paths per brand. A brand that is missing falls back to another one (see `getIconPaths`).
     */
    brands: Partial<Record<Brand, readonly IconPath[]>>;
};

type TextIconStep = 'hxl' | 'hl' | 'hm' | 'hs' | 'bl' | 'bm' | 'bs';
type IconStepSize = 'large' | 'medium' | 'small';
type DecorativeIconSize =
    | '2xlarge'
    | 'xlarge'
    | 'large'
    | 'medium'
    | 'small'
    | 'xsmall'
    | '2xsmall'
    | '3xsmall'
    | '4xsmall';

/**
 * Size of an icon, named after the OUDS Web icon size classes (`<size>-icon`):
 * `hxl` to `hs` follow the headings, `bl` to `bs` follow the body text (both are responsive),
 * and `decorative-*` are fixed sizes for decorative icons.
 */
export type IconSize =
    `${TextIconStep}-${IconStepSize}` | `decorative-${DecorativeIconSize}`;

export type CoreIconProps = {
    /**
     * Data of the icon to draw, e.g. `functionalStatusWarning` from `@ouds/icons`.
     */
    icon: OudsIcon;
    /**
     * Size of the icon. Without it, the size comes from the surrounding CSS.
     */
    size?: IconSize;
    /**
     * Accessible name of a meaningful icon, rendered as visually hidden text next to the icon.
     * Leave it out for a decorative icon, which is hidden from assistive technologies.
     */
    label?: string;
};
