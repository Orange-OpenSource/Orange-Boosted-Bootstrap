// import '@ouds/web-orange/dist/css/ouds-web.min.css';
import './storybook.css';

import { OudsProvider } from '@ouds/vue';
import type { Decorator, Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { defineComponent, h, version as vueVersion } from 'vue';
import { version as oudsVersion } from '@ouds/web-orange/package.json';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { version as oudsVueVersion } from '../../../libs/vue/package.json';

setup((app) => {
    app.component('OudsProvider', OudsProvider);
});

export const InProgressTemplate = (title: string) =>
    defineComponent({
        name: 'InProgressTemplate',
        setup() {
            return () =>
                h(
                    'div',
                    {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '3rem',
                            textAlign: 'center',
                            gap: '1rem',
                        },
                    },
                    [
                        h(
                            'span',
                            {
                                'role': 'img',
                                'aria-label': 'Construction sign',
                                'style': { fontSize: '3rem' },
                            },
                            '🚧',
                        ),
                        h('h2', { style: { margin: 0 } }, title),
                        h(
                            'p',
                            { style: { margin: 0, color: '#666' } },
                            'This component story is a work in progress.',
                        ),
                    ],
                );
        },
    });

export const globalTypes: Preview['globalTypes'] = {
    version: {
        name: '@ouds/vue',
        description: '@ouds/vue version',
        defaultValue: `v${oudsVueVersion}`,
        // Shown as a read-only label by .storybook/toolbar-addon.ts (not a dropdown).
        toolbar: {
            title: `@ouds/vue ${oudsVueVersion}`,
            items: [],
            dynamicTitle: true,
        },
    },
    oudsVersion: {
        name: '@ouds/web-orange',
        description: '@ouds/web-orange version',
        defaultValue: `v${oudsVersion}`,
        // Shown as a read-only label by .storybook/toolbar-addon.ts (not a dropdown).
        toolbar: {
            title: `@ouds/web-orange ${oudsVersion}`,
            items: [],
            dynamicTitle: true,
        },
    },
    vueVersion: {
        name: 'Vue',
        description: 'Vue version in use',
        defaultValue: `v${vueVersion}`,
        toolbar: {
            title: `Vue ${vueVersion}`,
            items: [],
            dynamicTitle: true,
        },
    },
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
        const storyTitle: string = context.title ?? '';
        const isOuds = storyTitle.startsWith('Components/');

        document.documentElement.setAttribute('data-bs-theme', theme);
        document.body.style.backgroundColor = theme === 'dark' ? '#000' : '';

        // 👇 Show InProgressTemplate if story is not under Components/
        if (!isOuds) {
            const componentName = storyTitle.split('/').pop() ?? storyTitle;
            return {
                components: { OudsProvider },
                setup() {
                    return {
                        rounded,
                        theme,
                        brand,
                        inProgress: InProgressTemplate(componentName),
                    };
                },
                template: `
          <OudsProvider
            :theme="theme"
            :brand="brand"
            :roundedButtons="rounded"
            :roundedAlerts="rounded"
            :roundedInputs="rounded"
          >
            <component :is="inProgress" />
          </OudsProvider>
        `,
            };
        }

        // 👇 Normal story rendering
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
