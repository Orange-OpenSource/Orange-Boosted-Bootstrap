/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-essentials",
      options: {
        measure: false, // Note: addon-measure is forced to false in order to avoid it enabled in ZeroHeight
      }
    },
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: 'Docs',
  }
};
export default config;
