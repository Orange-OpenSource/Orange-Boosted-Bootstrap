import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
    stories: ['../../../libs/angular/**/*.stories.@(ts|mdx)'],
    addons: ['@storybook/addon-docs'],
    framework: {
        name: '@storybook/angular',
        options: {
            builder: {
                tsConfig: 'apps/angular-storybook/tsconfig.storybook.json',
            },
        },
    },
    docs: {
        defaultName: 'Documentation',
    },
};

export default config;
