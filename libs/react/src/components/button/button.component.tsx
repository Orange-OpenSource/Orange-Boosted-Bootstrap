import cx from 'classnames';
import { useId } from 'react';

import { ButtonProps } from './button.model';

export const Button: React.FC<ButtonProps> = ({
    variant = 'default',
    type = 'button',
    defaultAriaLabel,
    isDisabled = false,
    onClick,
    className = '',
    children,
    icon,
    isIconOnly = false,
    formId,
    isLoading = false,
    loadingLabel,
    label,
    isOnColoredBg = false,
}) => {
    const statusId = useId();

    return (
        <button
            className={cx(className, {
                'btn': true,
                'btn-icon': isIconOnly,
                [`btn-${variant}`]: !!variant,
                'btn-on-colored-bg': isOnColoredBg,
                'loading-indeterminate': isLoading,
            })}
            type={type}
            aria-label={defaultAriaLabel}
            disabled={isDisabled || isLoading}
            onClick={onClick}
            form={formId}
        >
            {icon ?? null}
            {label && !isIconOnly ? label : null}
            {isIconOnly && label ? (
                <span className='visually-hidden'>{label}</span>
            ) : null}
            {children}
            <svg
                viewBox='0 0 40 40'
                xmlns='http://www.w3.org/2000/svg'
                className='loader'
                aria-hidden='true'
            >
                <circle className='loader-inner' cx='20' cy='20' r='17' />
            </svg>
            {/* Same markup as the OUDS Web loading button; a span live region is used on purpose. */}
            <span
                // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role
                role='status'
                id={statusId}
                className={cx('visually-hidden', { 'd-none': !isLoading })}
            >
                {isLoading ? loadingLabel || label || '' : ''}
            </span>
        </button>
    );
};
