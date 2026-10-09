// import '@ouds/web-orange/dist/css/ouds-web.min.css';
import './storybook.css';

import { OudsProvider } from '@ouds/vue';
import type { Decorator, Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';

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
    (story, context): any => {
        const rounded = context.globals['roundedCorners'] === 'on';
        const theme = (context.globals['theme'] as 'light' | 'dark') ?? 'light';
        const brand =
            (context.globals['brand'] as
                'orange' | 'orange-compact' | 'sosh') ?? 'orange';

        document.documentElement.setAttribute('data-bs-theme', theme);
        document.documentElement.setAttribute('data-bs-brand', brand);
        document.body.style.backgroundColor = theme === 'dark' ? '#000' : '';

        return {
            components: { story, OudsProvider },
            setup() {
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
        };
    },
];

export const parameters: Preview['parameters'] = {
    options: {
        storySort: {
            order: ['Components', '*', 'Coming soon'],
        },
    },
};

export const tags: Preview['tags'] = ['autodocs'];
