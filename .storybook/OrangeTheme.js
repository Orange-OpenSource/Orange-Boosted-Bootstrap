import { create } from '@storybook/theming/create';

// Source: https://storybook.js.org/docs/react/configure/theming
// Tip: When working locally on themes, use the --no-manager-cache option
export default create({
  base: 'light',

  //colorPrimary: 'hotpink',
  colorPrimary: '#ff7900',
  //colorSecondary: 'deepskyblue',
  colorSecondary: '#000',

  // UI
  appBg: '#fff',
  appContentBg: '#fff',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Helvetica Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#000',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#fff',
  barSelectedColor: '#ff7900',
  barBg: '#000',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Orange Storybook',
  brandUrl: 'https://www.orange.com',
  // TODO: change this URL
  brandImage: 'https://www.orange.com/themes/theme_boosted/Master_Logo_RGB.png',
});