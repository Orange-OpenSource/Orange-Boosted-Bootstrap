import { loadBrandCSS } from '@ouds/core';
import { render, screen } from '@testing-library/react';

import { OudsProvider, useOuds } from './ouds-provider.component';

vi.mock('@ouds/core', async (importOriginal) => ({
    ...(await importOriginal<typeof import('@ouds/core')>()),
    loadBrandCSS: vi.fn(),
}));

const ContextProbe = () => {
    const value = useOuds();
    return <pre data-testid='context'>{JSON.stringify(value)}</pre>;
};

const readContext = () =>
    JSON.parse(screen.getByTestId('context').textContent ?? '{}');

const getWrapper = () => screen.getByTestId('context').parentElement;

describe('OudsProvider', () => {
    afterEach(() => {
        vi.mocked(loadBrandCSS).mockClear();
    });

    it('should apply the default theme and brand and load the brand CSS', () => {
        render(
            <OudsProvider>
                <ContextProbe />
            </OudsProvider>,
        );

        const wrapper = getWrapper();
        expect(wrapper?.getAttribute('data-bs-theme')).toBe('light');
        expect(wrapper?.getAttribute('data-bs-brand')).toBe('orange');
        expect(wrapper?.hasAttribute('class')).toBe(false);
        expect(readContext()).toEqual({
            theme: 'light',
            brand: 'orange',
            roundedButtons: false,
            roundedAlerts: false,
            roundedInputs: false,
        });
        expect(loadBrandCSS).toHaveBeenCalledExactlyOnceWith('orange');
    });

    it('should pass the given props to the DOM and the context', () => {
        render(
            <OudsProvider
                theme='dark'
                brand='sosh'
                roundedButtons
                roundedAlerts
                roundedInputs
            >
                <ContextProbe />
            </OudsProvider>,
        );

        const wrapper = getWrapper();
        expect(wrapper?.getAttribute('data-bs-theme')).toBe('dark');
        expect(wrapper?.getAttribute('data-bs-brand')).toBe('sosh');
        expect(wrapper?.className).toBe(
            'use-rounded-corner-buttons use-rounded-corner-alert use-rounded-corner-inputs',
        );
        expect(readContext()).toEqual({
            theme: 'dark',
            brand: 'sosh',
            roundedButtons: true,
            roundedAlerts: true,
            roundedInputs: true,
        });
        expect(loadBrandCSS).toHaveBeenCalledExactlyOnceWith('sosh');
    });

    it('should only add the classes of the enabled rounded options', () => {
        render(
            <OudsProvider roundedInputs>
                <ContextProbe />
            </OudsProvider>,
        );

        expect(getWrapper()?.className).toBe('use-rounded-corner-inputs');
    });

    it('should reload the brand CSS only when the brand changes', () => {
        const { rerender } = render(
            <OudsProvider brand='orange'>
                <ContextProbe />
            </OudsProvider>,
        );

        rerender(
            <OudsProvider brand='orange' theme='dark'>
                <ContextProbe />
            </OudsProvider>,
        );
        expect(loadBrandCSS).toHaveBeenCalledTimes(1);

        rerender(
            <OudsProvider brand='orange-compact' theme='dark'>
                <ContextProbe />
            </OudsProvider>,
        );
        expect(loadBrandCSS).toHaveBeenCalledTimes(2);
        expect(loadBrandCSS).toHaveBeenLastCalledWith('orange-compact');
    });
});

describe('useOuds', () => {
    it('should return the default values outside of a provider', () => {
        render(<ContextProbe />);

        expect(readContext()).toEqual({
            theme: 'light',
            brand: 'orange',
            roundedButtons: false,
            roundedAlerts: false,
            roundedInputs: false,
        });
        expect(loadBrandCSS).not.toHaveBeenCalled();
    });
});
