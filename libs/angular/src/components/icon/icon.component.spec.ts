import { ComponentFixture, TestBed } from '@angular/core/testing';
import type { OudsIcon } from '@ouds/core';
import { functionalStatusWarning } from '@ouds/icons';

import { OUDS_CONFIG } from '../ouds-provider/ouds.service';
import { IconComponent } from './icon.component';

const setup = (inputs: Record<string, unknown> = {}) => {
    const fixture: ComponentFixture<IconComponent> =
        TestBed.createComponent(IconComponent);
    fixture.componentRef.setInput('icon', functionalStatusWarning);
    for (const [name, value] of Object.entries(inputs)) {
        fixture.componentRef.setInput(name, value);
    }
    fixture.detectChanges();
    return fixture;
};

const getSvg = (fixture: ComponentFixture<IconComponent>): SVGSVGElement =>
    fixture.nativeElement.querySelector('svg');

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

describe('IconComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IconComponent],
        }).compileComponents();
    });

    it('renders the inline svg of the OUDS Web icons', () => {
        const fixture = setup();
        const svg = getSvg(fixture);

        expect(svg.getAttribute('viewBox')).toBe('0 0 24 24');
        expect(svg.getAttribute('fill')).toBe('currentColor');
        expect(svg.getAttribute('width')).toBe('1rem');
        expect(svg.getAttribute('height')).toBe('1rem');
        expect(svg.getAttribute('aria-hidden')).toBe('true');
        expect(svg.hasAttribute('class')).toBe(false);
        expect(
            fixture.nativeElement.querySelector('.visually-hidden'),
        ).toBeNull();
    });

    it('draws the two paths of the bicolor warning icon with their own fills', () => {
        const paths = setup().nativeElement.querySelectorAll('path');

        expect(paths).toHaveLength(2);
        expect(paths[0].getAttribute('fill')).toBe(
            'var(--bs-icon-color-content-status-warning-external-shape)',
        );
        expect(paths[1].getAttribute('fill')).toBe(
            'var(--bs-icon-color-content-status-warning-internal-shape)',
        );
    });

    it('adds the size class and the extra class names', () => {
        const fixture = setup({
            size: 'bm-medium',
            className: 'text-status-info',
        });

        expect(getSvg(fixture).getAttribute('class')).toBe(
            'bm-medium-icon text-status-info',
        );
    });

    it('adds only the extra class names without a size', () => {
        expect(
            setup({ className: 'me-small' })
                .nativeElement.querySelector('svg')
                .getAttribute('class'),
        ).toBe('me-small');
    });

    it('adds a visually hidden label next to the svg for a meaningful icon', () => {
        const fixture = setup({ label: 'Warning' });
        const label: HTMLElement = fixture.nativeElement.querySelector(
            'span.visually-hidden',
        );

        expect(label.textContent).toBe('Warning');
        expect(getSvg(fixture).getAttribute('aria-hidden')).toBe('true');
    });

    it('uses the Orange drawing without a provider', () => {
        expect(
            setup().nativeElement.querySelector('path').getAttribute('d'),
        ).toBe(functionalStatusWarning.brands.orange?.[0].d);
    });

    it('uses the drawing of the brand of the OudsProvider', () => {
        TestBed.overrideProvider(OUDS_CONFIG, {
            useValue: { brand: 'sosh' },
        });
        const fixture = setup();

        expect(
            fixture.nativeElement.querySelector('path').getAttribute('d'),
        ).toBe(functionalStatusWarning.brands.sosh?.[0].d);
    });

    it('passes the fill-rule of a path', () => {
        const icon: OudsIcon = {
            name: 'test',
            viewBox: '0 0 10 10',
            brands: { orange: [{ d: 'M0 0', fillRule: 'evenodd' }] },
        };
        const path: SVGPathElement = setup({
            icon,
        }).nativeElement.querySelector('path');

        expect(path.getAttribute('fill-rule')).toBe('evenodd');
        expect(path.hasAttribute('fill')).toBe(false);
    });

    it('renders an empty svg for an icon without any drawing', () => {
        const icon: OudsIcon = {
            name: 'empty',
            viewBox: '0 0 1 1',
            brands: {},
        };

        expect(
            setup({ icon }).nativeElement.querySelectorAll('path'),
        ).toHaveLength(0);
    });
    it('renders the same markup as @ouds/react and @ouds/vue', () => {
        const fixture = setup({
            icon: markupIcon,
            size: 'bm-medium',
            className: 'me-small',
            label: 'Warning',
        });

        expect([...fixture.nativeElement.children].map(toMarkup)).toEqual(
            expectedMarkup,
        );
    });
});
