import { loadBrandCSS } from '@ouds/core';
import { mount } from '@vue/test-utils';
import { defineComponent, h, nextTick } from 'vue';

import OudsProvider from './ouds-provider.component.vue';
import { useOuds } from './use-ouds';

vi.mock('@ouds/core', async (importOriginal) => ({
    ...(await importOriginal<typeof import('@ouds/core')>()),
    loadBrandCSS: vi.fn(),
}));

// Renders the injected context so tests can read it back.
const ContextProbe = defineComponent({
    setup() {
        const ouds = useOuds();
        return () =>
            h('pre', { 'data-testid': 'context' }, JSON.stringify(ouds));
    },
});

const mountProvider = (props = {}) =>
    mount(OudsProvider, { props, slots: { default: () => h(ContextProbe) } });

const readContext = (wrapper: ReturnType<typeof mount>) =>
    JSON.parse(wrapper.get('[data-testid="context"]').text());

describe('OudsProvider', () => {
    afterEach(() => {
        vi.mocked(loadBrandCSS).mockClear();
    });

    it('applies the default theme and brand and loads the brand CSS', () => {
        const wrapper = mountProvider();
        const root = wrapper.get('div');

        expect(root.attributes('data-bs-theme')).toBe('light');
        expect(root.attributes('data-bs-brand')).toBe('orange');
        expect(root.attributes('class')).toBeUndefined();
        expect(readContext(wrapper)).toEqual({
            theme: 'light',
            brand: 'orange',
            roundedButtons: false,
            roundedAlerts: false,
            roundedInputs: false,
        });
        expect(loadBrandCSS).toHaveBeenCalledExactlyOnceWith('orange');
    });

    it('passes the given props to the DOM and the context', () => {
        const wrapper = mountProvider({
            theme: 'dark',
            brand: 'sosh',
            roundedButtons: true,
            roundedAlerts: true,
            roundedInputs: true,
        });
        const root = wrapper.get('div');

        expect(root.attributes('data-bs-theme')).toBe('dark');
        expect(root.attributes('data-bs-brand')).toBe('sosh');
        expect(root.attributes('class')).toBe(
            'use-rounded-corner-buttons use-rounded-corner-alert use-rounded-corner-inputs',
        );
        expect(readContext(wrapper)).toEqual({
            theme: 'dark',
            brand: 'sosh',
            roundedButtons: true,
            roundedAlerts: true,
            roundedInputs: true,
        });
        expect(loadBrandCSS).toHaveBeenCalledExactlyOnceWith('sosh');
    });

    it('only adds the classes of the enabled rounded options', () => {
        const wrapper = mountProvider({ roundedInputs: true });
        expect(wrapper.get('div').attributes('class')).toBe(
            'use-rounded-corner-inputs',
        );
    });

    it('updates the context and reloads the brand CSS only when the brand changes', async () => {
        const wrapper = mountProvider({ brand: 'orange' });

        await wrapper.setProps({ theme: 'dark' });
        expect(readContext(wrapper).theme).toBe('dark');
        expect(loadBrandCSS).toHaveBeenCalledTimes(1);

        await wrapper.setProps({ brand: 'orange-compact' });
        await nextTick();
        expect(readContext(wrapper).brand).toBe('orange-compact');
        expect(loadBrandCSS).toHaveBeenCalledTimes(2);
        expect(loadBrandCSS).toHaveBeenLastCalledWith('orange-compact');
    });
});

describe('useOuds', () => {
    it('returns the default values outside of a provider', () => {
        const wrapper = mount(ContextProbe);

        expect(readContext(wrapper)).toEqual({
            theme: 'light',
            brand: 'orange',
            roundedButtons: false,
            roundedAlerts: false,
            roundedInputs: false,
        });
        expect(loadBrandCSS).not.toHaveBeenCalled();
    });
});
