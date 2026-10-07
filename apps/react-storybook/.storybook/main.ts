import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
    stories: ['../../../libs/react/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: ['@storybook/addon-docs'],
    framework: {
        name: '@storybook/react-vite',
        options: {
            builder: {
                viteConfigPath: 'libs/react/vite.config.ts',
            },
        },
    },
    docs: {
        defaultName: 'Documentation',
    },
    viteFinal: async (config: any) =>
        mergeConfig(config, {
            plugins: [nxViteTsPaths()],
        }),
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
