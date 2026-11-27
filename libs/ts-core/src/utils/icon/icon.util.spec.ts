import type { OudsIcon } from '../../types';
import { getIconPaths, getIconSizeClass } from './icon.util';

const orangePaths = [{ d: 'M0 0' }];
const soshPaths = [{ d: 'M1 1', fill: 'red', fillRule: 'evenodd' as const }];

const icon = (brands: OudsIcon['brands']): OudsIcon => ({
    name: 'test-icon',
    viewBox: '0 0 24 24',
    brands,
});

describe('getIconPaths', () => {
    it('returns the paths of the requested brand', () => {
        const both = icon({ orange: orangePaths, sosh: soshPaths });

        expect(getIconPaths(both, 'orange')).toBe(orangePaths);
        expect(getIconPaths(both, 'sosh')).toBe(soshPaths);
    });

    it('lets Orange Compact use the Orange paths', () => {
        const both = icon({ orange: orangePaths, sosh: soshPaths });

        expect(getIconPaths(both, 'orange-compact')).toBe(orangePaths);
    });

    it('prefers the Orange Compact paths when the icon has them', () => {
        const compactPaths = [{ d: 'M2 2' }];
        const all = icon({
            'orange': orangePaths,
            'orange-compact': compactPaths,
        });

        expect(getIconPaths(all, 'orange-compact')).toBe(compactPaths);
        expect(getIconPaths(all, 'orange')).toBe(orangePaths);
    });

    it('falls back to another brand when the requested one is missing', () => {
        expect(getIconPaths(icon({ sosh: soshPaths }), 'orange')).toBe(
            soshPaths,
        );
        expect(getIconPaths(icon({ sosh: soshPaths }), 'orange-compact')).toBe(
            soshPaths,
        );
        expect(getIconPaths(icon({ orange: orangePaths }), 'sosh')).toBe(
            orangePaths,
        );
    });

    it('falls back to Orange Compact when only that brand has paths', () => {
        const compactOnly = icon({ 'orange-compact': orangePaths });

        expect(getIconPaths(compactOnly, 'sosh')).toBe(orangePaths);
        expect(getIconPaths(compactOnly, 'orange')).toBe(orangePaths);
    });

    it('returns an empty list when the icon has no paths', () => {
        expect(getIconPaths(icon({}), 'orange')).toEqual([]);
    });
});

describe('getIconSizeClass', () => {
    it('adds the -icon suffix', () => {
        expect(getIconSizeClass('bm-medium')).toBe('bm-medium-icon');
        expect(getIconSizeClass('hxl-large')).toBe('hxl-large-icon');
        expect(getIconSizeClass('decorative-2xsmall')).toBe(
            'decorative-2xsmall-icon',
        );
    });

    it('returns undefined without a size', () => {
        expect(getIconSizeClass()).toBeUndefined();
        expect(getIconSizeClass(undefined)).toBeUndefined();
    });
});
