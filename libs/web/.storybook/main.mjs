import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
/** @type { import('@storybook/html-vite').StorybookConfig } */

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

const config = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-docs")
  ],

  framework: {
    name: getAbsolutePath("@storybook/html-vite"),
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
