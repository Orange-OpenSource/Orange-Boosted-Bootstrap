import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import type { StorybookConfig } from '@storybook/vue3-vite';
import vue from '@vitejs/plugin-vue';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
    stories: ['../../../libs/vue/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: ['@storybook/addon-docs'],
    framework: {
        name: '@storybook/vue3-vite',
        options: {
            docgen: 'vue-component-meta',
        },
    },
    docs: {
        defaultName: 'Documentation',
    },

    viteFinal: async (config) =>
        mergeConfig(config, {
            plugins: [nxViteTsPaths(), vue()],
        }),
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
