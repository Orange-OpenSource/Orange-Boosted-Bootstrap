import type { Brand, IconPath, IconSize, OudsIcon } from '../../types';

// Brand to try, in order, when an icon has no drawing for the requested brand.
const BRAND_FALLBACKS: Record<Brand, readonly Brand[]> = {
    'orange': ['orange-compact', 'sosh'],
    'orange-compact': ['orange', 'sosh'],
    'sosh': ['orange', 'orange-compact'],
};

/**
 * Returns the paths of an icon for a brand. When the icon has no drawing for that brand, the
 * closest brand is used (Orange and Orange Compact share their icons); an icon without any
 * drawing returns an empty list.
 */
export const getIconPaths = (
    icon: OudsIcon,
    brand: Brand,
): readonly IconPath[] => {
    for (const candidate of [brand, ...BRAND_FALLBACKS[brand]]) {
        const paths = icon.brands[candidate];
        if (paths) return paths;
    }
    return [];
};

/**
 * Returns the OUDS Web CSS class of an icon size (`bm-medium` becomes `bm-medium-icon`),
 * or `undefined` when no size is given.
 */
export const getIconSizeClass = (size?: IconSize): string | undefined =>
    size ? `${size}-icon` : undefined;
