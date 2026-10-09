/**
 *
 * Button is an extension to standard button element with icons and theming.
 * @module button
 *
 */
import { CoreButtonProps } from '@ouds/core';

/**
 * Defines valid properties in Button component.
 */
export interface ButtonProps extends CoreButtonProps {
    class?: string;
}

/**
 * Defines valid emits in Button component.
 */
export interface ButtonEmits {
    /**
     * Callback to invoke when clicked.
     */
    click(): void;
}
