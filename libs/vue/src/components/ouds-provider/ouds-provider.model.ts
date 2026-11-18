import type { Brand, Theme } from '@ouds/core';
import type { InjectionKey } from 'vue';

/**
 * Defines valid properties in OudsProvider component.
 */
export interface OudsProviderProps {
    theme?: Theme;
    brand?: Brand;
    roundedButtons?: boolean;
    roundedAlerts?: boolean;
    roundedInputs?: boolean;
}

/**
 * Values provided to descendants through `useOuds()`.
 */
export interface OudsContext {
    theme: Theme;
    brand: Brand;
    roundedButtons: boolean;
    roundedAlerts: boolean;
    roundedInputs: boolean;
}

export const OUDS_CONTEXT_KEY: InjectionKey<Readonly<OudsContext>> =
    Symbol('ouds-context');

export const DEFAULT_OUDS_CONTEXT: Readonly<OudsContext> = Object.freeze({
    theme: 'light',
    brand: 'orange',
    roundedButtons: false,
    roundedAlerts: false,
    roundedInputs: false,
});
