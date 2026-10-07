import { Variant } from '../../theming/theming';

export type CoreButtonProps = {
    type?: HTMLButtonElement['type'];
    /**
     * Text of the button.
     */
    label?: string;
    /**
     * Defines the style of the button.
     */
    variant?: Variant;
    /**
     * Add disabled property to the button.
     * @defaultValue false
     */
    isDisabled?: boolean;
    /**
     * Defines the default aria-label of the button.
     */
    defaultAriaLabel?: string;
    /**
     * ID of the form to submit
     */
    formId?: string;
    /**
     * Use on colored backgrounds (not with brand/negative).
     */
    isOnColoredBg?: boolean;
    isIconOnly?: boolean;
    isLoading?: boolean;
    loadingLabel?: string;
};
