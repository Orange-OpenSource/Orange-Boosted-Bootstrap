export { default as Button } from './components/button/button.component.vue';
export type {
    ButtonEmits,
    ButtonProps,
} from './components/button/button.model';
export { default as Icon } from './components/icon/icon.component.vue';
export type { IconProps } from './components/icon/icon.model';
export { default as OudsProvider } from './components/ouds-provider/ouds-provider.component.vue';
export type {
    OudsContext,
    OudsProviderProps,
} from './components/ouds-provider/ouds-provider.model';
export { useOuds } from './components/ouds-provider/use-ouds';
export type { Brand, Theme } from '@ouds/core';
