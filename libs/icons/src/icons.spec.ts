import { getIconPaths } from '@ouds/core';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { generate } from '../scripts/generate-icons.mjs';
import * as icons from './index';

const packageDirectory = join(dirname(fileURLToPath(import.meta.url)), '..');

describe('generated icon files', () => {
    it('match the OUDS Web sprites (run `npx nx run @ouds/icons:generate-icons` if this fails)', async () => {
        const files = await generate();

        expect([...files.keys()].sort()).toEqual([
            'src/icons/functional-status-warning.ts',
            'src/index.ts',
        ]);

        for (const [relativePath, content] of files) {
            expect(
                readFileSync(join(packageDirectory, relativePath), 'utf8'),
            ).toBe(content);
        }
    });
});

describe('functionalStatusWarning', () => {
    const { functionalStatusWarning } = icons;

    it('is the only export', () => {
        expect(Object.keys(icons)).toEqual(['functionalStatusWarning']);
    });

    it('has the name and viewBox of the sprite symbol', () => {
        expect(functionalStatusWarning.name).toBe('functional-status-warning');
        expect(functionalStatusWarning.viewBox).toBe('0 0 24 24');
    });

    it('is bicolor: the external and internal shapes use the dedicated CSS variables', () => {
        const [external, internal] = getIconPaths(
            functionalStatusWarning,
            'orange',
        );

        expect(external.fill).toBe(
            'var(--bs-icon-color-content-status-warning-external-shape)',
        );
        expect(internal.fill).toBe(
            'var(--bs-icon-color-content-status-warning-internal-shape)',
        );
        expect(external.d).not.toBe(internal.d);
    });

    it('has a different drawing for Sosh, with the same two fills', () => {
        const orange = getIconPaths(functionalStatusWarning, 'orange');
        const sosh = getIconPaths(functionalStatusWarning, 'sosh');

        expect(sosh).toHaveLength(2);
        expect(sosh[0].d).not.toBe(orange[0].d);
        expect(sosh.map((path) => path.fill)).toEqual(
            orange.map((path) => path.fill),
        );
    });

    it('stores no separate drawing for Orange Compact, which reuses Orange', () => {
        expect(Object.keys(functionalStatusWarning.brands)).toEqual([
            'orange',
            'sosh',
        ]);
        expect(getIconPaths(functionalStatusWarning, 'orange-compact')).toBe(
            functionalStatusWarning.brands.orange,
        );
    });
});
