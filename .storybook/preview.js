import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import './storybook.scss';

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-bs-theme',
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: { viewports: INITIAL_VIEWPORTS },
  },
  tags: ['autodocs'],
};

export default preview;
