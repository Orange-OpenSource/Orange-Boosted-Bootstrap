import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import {
    generate,
    iconToSource,
    parseSprite,
    toExportName,
} from '../scripts/generate-icons.mjs';

const sprite = (symbols: string) =>
    `<svg xmlns="http://www.w3.org/2000/svg">${symbols}</svg>`;

describe('parseSprite', () => {
    it('reads the viewBox and the paths of the requested symbols only', () => {
        const symbols = parseSprite(
            sprite(`
                <!-- a comment -->
                <symbol id="one" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h1" fill-rule="evenodd"/>
                    <path
                        fill="red"
                        d="M1 1h1"/>
                </symbol>
                <symbol id="other" viewBox="0 0 10 10"><path d="M5 5"/></symbol>
            `),
            ['one'],
        );

        expect([...symbols.keys()]).toEqual(['one']);
        expect(symbols.get('one')).toEqual({
            viewBox: '0 0 24 24',
            paths: [
                { d: 'M0 0h1', fillRule: 'evenodd' },
                { d: 'M1 1h1', fill: 'red' },
            ],
        });
    });

    it('fails when a requested symbol is missing', () => {
        expect(() => parseSprite(sprite(''), ['missing'])).toThrow(
            'Symbol "missing" not found in the sprite',
        );
    });

    it('fails when a symbol has no viewBox', () => {
        expect(() =>
            parseSprite(sprite('<symbol id="a"><path d="M0 0"/></symbol>'), [
                'a',
            ]),
        ).toThrow('Symbol "a" has no viewBox');
    });

    it('fails on elements other than <path>', () => {
        expect(() =>
            parseSprite(
                sprite(
                    '<symbol id="a" viewBox="0 0 1 1"><circle r="1"/></symbol>',
                ),
                ['a'],
            ),
        ).toThrow('contains a <circle> element: only <path> is supported');
    });

    it('fails on a path without d', () => {
        expect(() =>
            parseSprite(
                sprite(
                    '<symbol id="a" viewBox="0 0 1 1"><path fill="red"/></symbol>',
                ),
                ['a'],
            ),
        ).toThrow('has a <path> without a "d" attribute');
    });

    it('fails on a symbol without any path', () => {
        expect(() =>
            parseSprite(sprite('<symbol id="a" viewBox="0 0 1 1"></symbol>'), [
                'a',
            ]),
        ).toThrow('Symbol "a" has no <path>');
    });
});

describe('toExportName', () => {
    it('converts kebab-case to camelCase', () => {
        expect(toExportName('functional-status-warning')).toBe(
            'functionalStatusWarning',
        );
        expect(toExportName('heart-empty')).toBe('heartEmpty');
        expect(toExportName('trash')).toBe('trash');
    });

    it('prefixes names that start with a digit', () => {
        expect(toExportName('3d-view')).toBe('icon3dView');
    });
});

describe('iconToSource', () => {
    it('writes the icon data and escapes quotes', () => {
        const source = iconToSource('my-icon', '0 0 24 24', {
            orange: [{ d: "M0 0 'a'\\", fill: 'red', fillRule: 'evenodd' }],
        });

        expect(source).toContain('export const myIcon: OudsIcon = {');
        expect(source).toContain("import type { OudsIcon } from '@ouds/core';");
        expect(source).toContain("d: 'M0 0 \\'a\\'\\\\'");
        expect(source).toContain("fill: 'red'");
        expect(source).toContain("fillRule: 'evenodd'");
    });
});

describe('generate', () => {
    let directory: string;

    const writeProject = async (sprites: Record<string, string>) => {
        await writeFile(
            join(directory, 'icons.config.json'),
            JSON.stringify({
                sprite: 'sprites/{brand}.svg',
                brands: ['orange', 'orange-compact', 'sosh'],
                icons: ['star'],
            }),
        );
        await mkdir(join(directory, 'sprites'));
        for (const [brand, content] of Object.entries(sprites)) {
            await writeFile(
                join(directory, 'sprites', `${brand}.svg`),
                content,
            );
        }
    };

    const star = (d: string, viewBox = '0 0 24 24') =>
        sprite(
            `<symbol id="star" viewBox="${viewBox}"><path d="${d}"/></symbol>`,
        );

    beforeEach(async () => {
        directory = await mkdtemp(join(tmpdir(), 'ouds-icons-'));
    });

    afterEach(async () => {
        await rm(directory, { recursive: true, force: true });
    });

    it('keeps a brand only when its drawing differs from the first brand', async () => {
        await writeProject({
            'orange': star('M0 0'),
            'orange-compact': star('M0 0'),
            'sosh': star('M9 9'),
        });

        const files = await generate({ packageDirectory: directory });
        const source = files.get('src/icons/star.ts') ?? '';

        // The files are formatted with the Prettier config found from the directory, so the
        // assertions don't depend on quotes or line breaks.
        expect(source).toMatch(/orange:\s*\[\s*\{\s*d:\s*["']M0 0["']/);
        expect(source).toMatch(/sosh:\s*\[\s*\{\s*d:\s*["']M9 9["']/);
        expect(source).not.toContain('orange-compact');
        expect(files.get('src/index.ts')).toMatch(
            /export \{ star \} from ["']\.\/icons\/star["']/,
        );
    });

    it('keeps Orange Compact when its drawing differs', async () => {
        await writeProject({
            'orange': star('M0 0'),
            'orange-compact': star('M1 1'),
            'sosh': star('M0 0'),
        });

        const source =
            (await generate({ packageDirectory: directory })).get(
                'src/icons/star.ts',
            ) ?? '';

        expect(source).toMatch(
            /["']orange-compact["']:\s*\[\s*\{\s*d:\s*["']M1 1["']/,
        );
    });

    it('fails when the viewBox differs between brands', async () => {
        await writeProject({
            'orange': star('M0 0'),
            'orange-compact': star('M0 0'),
            'sosh': star('M0 0', '0 0 32 32'),
        });

        await expect(generate({ packageDirectory: directory })).rejects.toThrow(
            'different viewBox in the sosh sprite',
        );
    });

    it('reads its files relative to the package directory', async () => {
        await writeProject({
            'orange': star('M0 0'),
            'orange-compact': star('M0 0'),
            'sosh': star('M0 0'),
        });

        expect(
            await readFile(join(directory, 'sprites', 'orange.svg'), 'utf8'),
        ).toContain('M0 0');
        expect((await generate({ packageDirectory: directory })).size).toBe(2);
    });
});
