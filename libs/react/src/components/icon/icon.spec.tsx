import type { OudsIcon } from '@ouds/core';
import { functionalStatusWarning } from '@ouds/icons';
import { render, screen } from '@testing-library/react';

import { OudsProvider } from '../ouds-provider/ouds-provider.component';
import { Icon } from './icon.component';

vi.mock('@ouds/core', async (importOriginal) => ({
    ...(await importOriginal<typeof import('@ouds/core')>()),
    loadBrandCSS: vi.fn(),
}));

const getSvg = (container: HTMLElement) =>
    container.querySelector('svg') as SVGSVGElement;

// The same markup is expected from `@ouds/react`, `@ouds/vue` and `@ouds/angular` (each library has
// this test): keep the three in sync.
type MarkupNode = {
    tag: string;
    attributes: Record<string, string>;
    text?: string;
    children: MarkupNode[];
};

const toMarkup = (element: Element): MarkupNode => ({
    tag: element.tagName.toLowerCase(),
    attributes: Object.fromEntries(
        [...element.attributes]
            .map(({ name, value }) => [name, value] as const)
            .sort(([a], [b]) => a.localeCompare(b)),
    ),
    ...(element.children.length === 0 && { text: element.textContent ?? '' }),
    children: [...element.children].map(toMarkup),
});

const markupIcon: OudsIcon = {
    name: 'markup',
    viewBox: '0 0 24 24',
    brands: {
        orange: [
            { d: 'M0 0h1', fill: 'red', fillRule: 'evenodd' },
            { d: 'M1 1h1' },
        ],
    },
};

const expectedMarkup: MarkupNode[] = [
    {
        tag: 'svg',
        attributes: {
            'aria-hidden': 'true',
            'class': 'bm-medium-icon me-small',
            'fill': 'currentColor',
            'height': '1rem',
            'viewBox': '0 0 24 24',
            'width': '1rem',
        },
        children: [
            {
                tag: 'path',
                attributes: {
                    'd': 'M0 0h1',
                    'fill': 'red',
                    'fill-rule': 'evenodd',
                },
                text: '',
                children: [],
            },
            {
                tag: 'path',
                attributes: { d: 'M1 1h1' },
                text: '',
                children: [],
            },
        ],
    },
    {
        tag: 'span',
        attributes: { class: 'visually-hidden' },
        text: 'Warning',
        children: [],
    },
];

describe('Icon', () => {
    it('renders the inline svg of the OUDS Web icons', () => {
        const { container } = render(<Icon icon={functionalStatusWarning} />);
        const svg = getSvg(container);

        expect(svg.getAttribute('viewBox')).toBe('0 0 24 24');
        expect(svg.getAttribute('fill')).toBe('currentColor');
        expect(svg.getAttribute('width')).toBe('1rem');
        expect(svg.getAttribute('height')).toBe('1rem');
        expect(svg.getAttribute('aria-hidden')).toBe('true');
        expect(svg.hasAttribute('class')).toBe(false);
        expect(container.querySelector('.visually-hidden')).toBeNull();
    });

    it('draws the two paths of the bicolor warning icon with their own fills', () => {
        const { container } = render(<Icon icon={functionalStatusWarning} />);
        const paths = container.querySelectorAll('path');

        expect(paths).toHaveLength(2);
        expect(paths[0].getAttribute('fill')).toBe(
            'var(--bs-icon-color-content-status-warning-external-shape)',
        );
        expect(paths[1].getAttribute('fill')).toBe(
            'var(--bs-icon-color-content-status-warning-internal-shape)',
        );
    });

    it('adds the size class and the extra class names', () => {
        const { container } = render(
            <Icon
                icon={functionalStatusWarning}
                size='bm-medium'
                className='text-status-info'
            />,
        );

        expect(getSvg(container).getAttribute('class')).toBe(
            'bm-medium-icon text-status-info',
        );
    });

    it('adds only the extra class names without a size', () => {
        const { container } = render(
            <Icon icon={functionalStatusWarning} className='me-small' />,
        );

        expect(getSvg(container).getAttribute('class')).toBe('me-small');
    });

    it('adds a visually hidden label next to the svg for a meaningful icon', () => {
        const { container } = render(
            <Icon icon={functionalStatusWarning} label='Warning' />,
        );

        expect(getSvg(container).getAttribute('aria-hidden')).toBe('true');
        expect(getSvg(container).nextElementSibling?.className).toBe(
            'visually-hidden',
        );
        expect(screen.getByText('Warning').textContent).toBe('Warning');
    });

    it('uses the Orange drawing without a provider', () => {
        const { container } = render(<Icon icon={functionalStatusWarning} />);

        expect(container.querySelector('path')?.getAttribute('d')).toBe(
            functionalStatusWarning.brands.orange?.[0].d,
        );
    });

    it('uses the drawing of the brand of the OudsProvider', () => {
        const { container } = render(
            <OudsProvider brand='sosh'>
                <Icon icon={functionalStatusWarning} />
            </OudsProvider>,
        );

        expect(container.querySelector('svg path')?.getAttribute('d')).toBe(
            functionalStatusWarning.brands.sosh?.[0].d,
        );
    });

    it('passes the fill-rule of a path', () => {
        const icon: OudsIcon = {
            name: 'test',
            viewBox: '0 0 10 10',
            brands: { orange: [{ d: 'M0 0', fillRule: 'evenodd' }] },
        };
        const { container } = render(<Icon icon={icon} />);

        expect(container.querySelector('path')?.getAttribute('fill-rule')).toBe(
            'evenodd',
        );
        expect(container.querySelector('path')?.hasAttribute('fill')).toBe(
            false,
        );
    });

    it('renders an empty svg for an icon without any drawing', () => {
        const icon: OudsIcon = {
            name: 'empty',
            viewBox: '0 0 1 1',
            brands: {},
        };
        const { container } = render(<Icon icon={icon} />);

        expect(getSvg(container).querySelectorAll('path')).toHaveLength(0);
    });
    it('renders the same markup as @ouds/vue and @ouds/angular', () => {
        const { container } = render(
            <Icon
                icon={markupIcon}
                size='bm-medium'
                className='me-small'
                label='Warning'
            />,
        );

        expect([...container.children].map(toMarkup)).toEqual(expectedMarkup);
    });
});
