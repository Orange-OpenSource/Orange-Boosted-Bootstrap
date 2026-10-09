// Import the package.json of each brand package to get the version
// Named imports let the bundler inline only the version string, not the whole package.json.
import { version as orangeVersion } from '@ouds/web-orange/package.json';
import { version as orangeCompactVersion } from '@ouds/web-orange-compact/package.json';
import { version as soshVersion } from '@ouds/web-sosh/package.json';

import { Brand } from '../../types';

const LINK_TAG_ID = 'ouds-brand-css';

const BRAND_VERSION_MAP: Record<Brand, string> = {
    'orange': orangeVersion,
    'sosh': soshVersion,
    'orange-compact': orangeCompactVersion,
};

const getBrandCSSHref = (brand: Brand): string => {
    const version = BRAND_VERSION_MAP[brand];
    return `https://cdn.jsdelivr.net/npm/@ouds/web-${brand}@${version}/dist/css/ouds-web.min.css`;
};

export const loadBrandCSS = (brand: Brand): void => {
    if (typeof document === 'undefined') return; // SSR guard

    const href = getBrandCSSHref(brand);

    const existing = document.getElementById(
        LINK_TAG_ID,
    ) as HTMLLinkElement | null;

    if (existing) {
        if (existing.getAttribute('data-brand') === brand) return;
        existing.setAttribute('href', href);
        existing.setAttribute('data-brand', brand);
    } else {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.id = LINK_TAG_ID;
        link.href = href;
        link.setAttribute('data-brand', brand);
        document.head.appendChild(link);
    }
};
