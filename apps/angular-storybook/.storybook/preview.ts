import { OudsProviderComponent, provideOuds } from '@ouds/angular';
import type { Brand, Theme } from '@ouds/angular';
import type { Preview } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';

const preview: Preview = {
    tags: ['autodocs'],
    decorators: [
        applicationConfig({
            providers: [
                ...provideOuds({
                    roundedButtons: false,
                    roundedAlerts: false,
                    roundedInputs: false,
                }),
            ],
        }),
        moduleMetadata({
            imports: [OudsProviderComponent],
        }),
        (storyFn, context): any => {
            const rounded = context.globals['roundedCorners'] === 'on';
            const brand =
                (context.globals['brand'] as Brand) ?? 'orange';
            const theme = (context.globals['theme'] as Theme) ?? 'dark';
            const story = storyFn();

            document.documentElement.setAttribute('data-bs-theme', theme);
            document.documentElement.setAttribute('data-bs-brand', brand);
            document.body.style.backgroundColor =
                theme === 'dark' ? '#000' : '';

            return {
                ...story,
                template: `<orange-ouds-provider
                    theme="${theme}"
                    brand="${brand}"
                    [roundedButtons]="${rounded}"
                    [roundedAlerts]="${rounded}"
                    [roundedInputs]="${rounded}"
                >${story.template || ''}</orange-ouds-provider>`,
            };
        },
    ],
    parameters: {},
    globalTypes: {
        roundedCorners: {
            name: 'Rounded corners',
            description:
                'Toggle rounded corners for buttons, alerts, and inputs',
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
    },
};

export default preview;
