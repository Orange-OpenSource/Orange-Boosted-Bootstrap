// Note: addon-measure is forced to false in order to avoid it enabled in ZeroHeight
const config = {
  "stories": ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-a11y", {
    name: "@storybook/addon-essentials",
    options: {
      measure: false
    }
  }, "@storybook/addon-themes", "@storybook/preset-scss"],
  "framework": "@storybook/html-webpack5",
  docs: {
    autodocs: true
  }
};
export default config;
