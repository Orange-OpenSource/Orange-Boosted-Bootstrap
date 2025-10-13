/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
    "@storybook/addon-docs"
  ],

  framework: {
    name: "@storybook/html-vite",
    options: {},
  },

  docs: {
    defaultName: 'Docs'
  },

  features: {
    measure: false
  }
};
export default config;
