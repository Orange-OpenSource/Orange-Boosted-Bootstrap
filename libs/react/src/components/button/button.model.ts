import { CoreButtonProps } from '@ouds/core';

export type ButtonProps = CoreButtonProps & {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    icon?: React.ReactNode;
};
