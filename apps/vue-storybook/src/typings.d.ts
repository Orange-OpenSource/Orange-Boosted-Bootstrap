declare module '@ouds/storybook-theme/OrangeTheme.js';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, unknown>;
  export default component;
}
