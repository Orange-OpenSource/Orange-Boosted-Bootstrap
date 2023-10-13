import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import './storybook.scss';
import prettier from 'prettier/esm/standalone';
import htmlParser from 'prettier/esm/parser-html';

export const preview = {
  /* globalTypes: {
    theme: { type: 'string' },
  }, */
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true
    },
    viewport: { viewports: INITIAL_VIEWPORTS },
    docs: {
      transformSource: (src) => {
        // Remove `() => `` from stories
        const match = /^\(\) => [`'"](.*)['`"]$/sm.exec(src);
        // Pretty print the Docs code source
        return match ? prettier.format(match[1].trim(), {printWidth: 120, parser: "html", plugins: [htmlParser]}) : src;
      }
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-bs-theme',
    }),
  ]
}
export default preview;
