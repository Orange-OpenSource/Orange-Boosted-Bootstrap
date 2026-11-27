import { CoreButtonProps } from '@ouds/ts-core';

export type ButtonProps = CoreButtonProps & {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    icon?: React.ReactNode;
};
