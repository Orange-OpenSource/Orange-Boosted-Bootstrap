import type { OudsIcon } from '@ouds/core';
import { functionalStatusWarning } from '@ouds/icons';
import { mount } from '@vue/test-utils';
import { h } from 'vue';

import OudsProvider from '../ouds-provider/ouds-provider.component.vue';
import Icon from './icon.component.vue';

vi.mock('@ouds/core', async (importOriginal) => ({
    ...(await importOriginal<typeof import('@ouds/core')>()),
    loadBrandCSS: vi.fn(),
}));

const mountIcon = (props: Record<string, unknown> = {}) =>
    mount(Icon, { props: { icon: functionalStatusWarning, ...props } });

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
        const wrapper = mountIcon();
        const svg = wrapper.get('svg');

        expect(svg.attributes('viewBox')).toBe('0 0 24 24');
        expect(svg.attributes('fill')).toBe('currentColor');
        expect(svg.attributes('width')).toBe('1rem');
        expect(svg.attributes('height')).toBe('1rem');
        expect(svg.attributes('aria-hidden')).toBe('true');
        expect(svg.attributes('class')).toBeUndefined();
        expect(wrapper.find('.visually-hidden').exists()).toBe(false);
    });

    it('draws the two paths of the bicolor warning icon with their own fills', () => {
        const paths = mountIcon().findAll('path');

        expect(paths).toHaveLength(2);
        expect(paths[0].attributes('fill')).toBe(
            'var(--bs-icon-color-content-status-warning-external-shape)',
        );
        expect(paths[1].attributes('fill')).toBe(
            'var(--bs-icon-color-content-status-warning-internal-shape)',
        );
    });

    it('adds the size class and the extra class names', () => {
        const wrapper = mountIcon({
            size: 'bm-medium',
            class: 'text-status-info',
        });

        expect(wrapper.get('svg').attributes('class')).toBe(
            'bm-medium-icon text-status-info',
        );
    });

    it('adds only the extra class names without a size', () => {
        expect(
            mountIcon({ class: 'me-small' }).get('svg').attributes('class'),
        ).toBe('me-small');
    });

    it('adds a visually hidden label next to the svg for a meaningful icon', () => {
        const wrapper = mountIcon({ label: 'Warning' });
        const label = wrapper.get('span.visually-hidden');

        expect(label.text()).toBe('Warning');
        expect(wrapper.get('svg').attributes('aria-hidden')).toBe('true');
    });

    it('uses the Orange drawing without a provider', () => {
        expect(mountIcon().get('path').attributes('d')).toBe(
            functionalStatusWarning.brands.orange?.[0].d,
        );
    });

    it('uses the drawing of the brand of the OudsProvider', () => {
        const wrapper = mount(OudsProvider, {
            props: { brand: 'sosh' },
            slots: {
                default: () => h(Icon, { icon: functionalStatusWarning }),
            },
        });

        expect(wrapper.get('svg path').attributes('d')).toBe(
            functionalStatusWarning.brands.sosh?.[0].d,
        );
    });

    it('passes the fill-rule of a path', () => {
        const icon: OudsIcon = {
            name: 'test',
            viewBox: '0 0 10 10',
            brands: { orange: [{ d: 'M0 0', fillRule: 'evenodd' }] },
        };
        const path = mountIcon({ icon }).get('path');

        expect(path.attributes('fill-rule')).toBe('evenodd');
        expect(path.attributes('fill')).toBeUndefined();
    });

    it('renders an empty svg for an icon without any drawing', () => {
        const icon: OudsIcon = {
            name: 'empty',
            viewBox: '0 0 1 1',
            brands: {},
        };

        expect(mountIcon({ icon }).findAll('path')).toHaveLength(0);
    });

    it('renders the same markup as @ouds/react and @ouds/angular', () => {
        const host = document.createElement('div');
        mount(Icon, {
            attachTo: host,
            props: {
                icon: markupIcon,
                size: 'bm-medium',
                class: 'me-small',
                label: 'Warning',
            },
        });

        // Vue Test Utils mounts the component in a wrapper `div` inside the host.
        const root = host.firstElementChild as Element;

        expect([...root.children].map(toMarkup)).toEqual(expectedMarkup);
    });
});
