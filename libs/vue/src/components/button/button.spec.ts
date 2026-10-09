import { mount } from '@vue/test-utils';

import Button from './button.component.vue';

describe('Button', () => {
    it('renders properly', () => {
        const wrapper = mount(Button, {});
        expect(wrapper.findComponent(Button)).toBeTruthy();
    });

    it('uses defaults: type button, default variant, enabled, hidden empty status', () => {
        const wrapper = mount(Button, { props: { label: 'Save' } });
        const button = wrapper.get('button');

        expect(button.attributes('type')).toBe('button');
        expect(button.classes()).toEqual(['btn', 'btn-default']);
        expect(button.attributes('disabled')).toBeUndefined();
        expect(button.text()).toContain('Save');

        const status = wrapper.get('[role="status"]');
        expect(status.classes()).toEqual(['visually-hidden', 'd-none']);
        expect(status.text()).toBe('');
    });

    it.each(['strong', 'brand', 'minimal', 'negative'] as const)(
        'applies the %s variant class',
        (variant) => {
            const wrapper = mount(Button, {
                props: { variant, label: variant },
            });
            expect(wrapper.get('button').classes()).toContain(`btn-${variant}`);
        },
    );

    it('forwards type, aria-label, form id and extra class', () => {
        const wrapper = mount(Button, {
            props: {
                type: 'submit',
                label: 'Send',
                defaultAriaLabel: 'Send the form',
                formId: 'contact-form',
                class: 'my-button',
            },
        });
        const button = wrapper.get('button');

        expect(button.attributes('type')).toBe('submit');
        expect(button.attributes('aria-label')).toBe('Send the form');
        expect(button.attributes('form')).toBe('contact-form');
        expect(button.classes()).toContain('my-button');
    });

    it('adds the colored-background class', () => {
        const wrapper = mount(Button, {
            props: { label: 'On color', isOnColoredBg: true },
        });
        expect(wrapper.get('button').classes()).toContain('btn-on-colored-bg');
    });

    it('emits click when clicked', async () => {
        const wrapper = mount(Button, { props: { label: 'Go' } });

        await wrapper.get('button').trigger('click');

        expect(wrapper.emitted('click')).toHaveLength(1);
    });

    it('is disabled and does not emit click when isDisabled is set', async () => {
        const wrapper = mount(Button, {
            props: { label: 'Go', isDisabled: true },
        });
        const button = wrapper.get('button');

        expect(button.attributes('disabled')).toBeDefined();
        // A disabled <button> ignores real clicks; call the handler path explicitly.
        await button.element.dispatchEvent(new MouseEvent('click'));

        expect(wrapper.emitted('click')).toBeUndefined();
    });

    it('renders the icon and default slots', () => {
        const wrapper = mount(Button, {
            props: { label: 'With icon' },
            slots: {
                icon: '<svg data-testid="icon" aria-hidden="true" />',
                default: '<span data-testid="child">extra</span>',
            },
        });

        expect(wrapper.find('[data-testid="icon"]').exists()).toBe(true);
        expect(wrapper.get('[data-testid="child"]').text()).toBe('extra');
    });

    it('keeps the label for screen readers only when icon-only', () => {
        const wrapper = mount(Button, {
            props: { label: 'Close', isIconOnly: true },
        });
        const button = wrapper.get('button');

        expect(button.classes()).toContain('btn-icon');
        expect(button.get('span.visually-hidden:not([role])').text()).toBe(
            'Close',
        );
    });

    it('renders no hidden label for an icon-only button without label', () => {
        const wrapper = mount(Button, { props: { isIconOnly: true } });
        expect(wrapper.find('span.visually-hidden:not([role])').exists()).toBe(
            false,
        );
    });

    it('announces the loading label and disables the button while loading', async () => {
        const wrapper = mount(Button, {
            props: { label: 'Send', isLoading: true, loadingLabel: 'Sending…' },
        });
        const button = wrapper.get('button');
        const status = wrapper.get('[role="status"]');

        expect(button.classes()).toContain('loading-indeterminate');
        expect(button.attributes('disabled')).toBeDefined();
        expect(status.text()).toBe('Sending…');
        expect(status.classes()).not.toContain('d-none');

        await button.element.dispatchEvent(new MouseEvent('click'));
        expect(wrapper.emitted('click')).toBeUndefined();
    });

    it('falls back to the label when no loading label is given', () => {
        const wrapper = mount(Button, {
            props: { label: 'Send', isLoading: true },
        });
        expect(wrapper.get('[role="status"]').text()).toBe('Send');
    });

    it('announces an empty status when loading without any label', () => {
        const wrapper = mount(Button, {
            props: { isLoading: true, isIconOnly: true },
        });
        expect(wrapper.get('[role="status"]').text()).toBe('');
    });
});
