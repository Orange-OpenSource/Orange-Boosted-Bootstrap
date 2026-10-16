// import '@ouds/web-orange/dist/css/ouds-web.min.css';
import './storybook.css';

import { OudsProvider } from '@ouds/vue';
import type { Brand, Theme } from '@ouds/vue';
import type { Decorator, Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { computed, reactive, watchEffect } from 'vue';

setup((app) => {
    app.component('OudsProvider', OudsProvider);
});

export const globalTypes: Preview['globalTypes'] = {
    roundedCorners: {
        name: 'Rounded corners',
        description: 'Toggle rounded corners for buttons, alerts, and inputs',
        defaultValue: 'off',
        toolbar: {
            title: 'Rounded corners',
            items: [
                { value: 'off', title: 'Square corners', icon: 'stopalt' },
                { value: 'on', title: 'Rounded corners', icon: 'circle' },
            ],
            dynamicTitle: true,
        },
    },
    theme: {
        name: 'Theme',
        description: 'Toggle between light and dark mode',
        defaultValue: 'light',
        toolbar: {
            title: 'Theme',
            items: [
                { value: 'light', title: 'Light', icon: 'sun' },
                { value: 'dark', title: 'Dark', icon: 'moon' },
            ],
            dynamicTitle: true,
        },
    },
    brand: {
        name: 'Brand',
        description: 'Toggle between different brands',
        defaultValue: 'orange',
        toolbar: {
            title: 'Brand',
            items: [
                { value: 'orange', title: 'Orange', icon: 'circle' },
                {
                    value: 'orange-compact',
                    title: 'Orange Compact',
                    icon: 'circle',
                },
                {
                    value: 'sosh',
                    title: 'Sosh',
                    icon: 'circle',
                },
            ],
            dynamicTitle: true,
        },
    },
};

export const decorators: Decorator[] = [
    (story, context): any => ({
        components: { story, OudsProvider },
        setup() {
            // Storybook's Vue renderer creates this component once and only updates the (reactive)
            // globals afterwards, so the toolbar values must be read through `reactive(globals)`
            // inside computed values; reading them once here would freeze the first brand and theme.
            const globals = reactive(context.globals);
            const rounded = computed(() => globals['roundedCorners'] === 'on');
            const theme = computed(
                () => (globals['theme'] as Theme) ?? 'light',
            );
            const brand = computed(
                () => (globals['brand'] as Brand) ?? 'orange',
            );

            watchEffect(() => {
                document.documentElement.setAttribute(
                    'data-bs-theme',
                    theme.value,
                );
                document.documentElement.setAttribute(
                    'data-bs-brand',
                    brand.value,
                );
                document.body.style.backgroundColor =
                    theme.value === 'dark' ? '#000' : '';
            });

            return { rounded, theme, brand };
        },
        template: `
        <OudsProvider
          :theme="theme"
          :roundedButtons="rounded"
          :roundedAlerts="rounded"
          :roundedInputs="rounded"
          :brand="brand"
        >
          <story />
        </OudsProvider>
      `,
    }),
];

export const parameters: Preview['parameters'] = {
    options: {
        storySort: {
            order: ['Components', '*', 'Coming soon'],
        },
    },
};

export const tags: Preview['tags'] = ['autodocs'];
