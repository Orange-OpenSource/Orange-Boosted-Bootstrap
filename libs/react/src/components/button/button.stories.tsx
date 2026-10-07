import { Meta } from '@storybook/react';
import { JSX } from 'react';
import { fn } from 'storybook/test';

import { ButtonProps } from './button.model';
import { Button } from './button.component';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        type: {
            description: 'HTML type attribute of a button',
        },
        label: {
            description: 'The label of the button.',
        },
        variant: {
            description: 'OUDS Web button variant',
            options: ['default', 'strong', 'brand', 'minimal', 'negative'],
            control: 'select',
        },
        isDisabled: {
            description: 'If true, the button will be disabled.',
            control: 'boolean',
        },
        defaultAriaLabel: {
            description: 'Defines the default aria-label of the button',
        },
        onClick: {
            description: 'Function called whenever the button is clicked',
        },
        className: {
            description: 'CSS class to be applied on the button',
        },
        icon: {
            description:
                'React Component representing the icon to be displayed',
        },
        isIconOnly: {
            description: 'If true, the button has only an icon',
        },
        isLoading: {
            description: 'If true, display a loading state',
        },
        isOnColoredBg: {
            description: 'Use on colored backgrounds',
            control: 'boolean',
        },
    },
    parameters: {
        docs: {
            description: {
                component:
                    'OUDS Web button component with variants: default, strong, brand, minimal, negative.',
            },
        },
    },
} as Meta;

const args = {
    variant: 'default' as const,
    type: 'button' as const,
    label: 'Default Button',
    className: '',
    onClick: fn(),
    isDisabled: false,
    isLoading: false,
};

export const Default = {
    args,
    render: function Render(args: ButtonProps): JSX.Element {
        return <Button {...args} />;
    },
};

export const Strong = {
    args: { ...args, variant: 'strong' as const, label: 'Strong Button' },
    render: function Render(args: ButtonProps): JSX.Element {
        return <Button {...args} />;
    },
};

export const Brand = {
    args: { ...args, variant: 'brand' as const, label: 'Brand Button' },
    render: function Render(args: ButtonProps): JSX.Element {
        return <Button {...args} />;
    },
};

export const Minimal = {
    args: { ...args, variant: 'minimal' as const, label: 'Minimal Button' },
    render: function Render(args: ButtonProps): JSX.Element {
        return <Button {...args} />;
    },
};

export const Negative = {
    args: { ...args, variant: 'negative' as const, label: 'Negative Button' },
    render: function Render(args: ButtonProps): JSX.Element {
        return <Button {...args} />;
    },
};

export const Loading = {
    args: { ...args, isLoading: true, loadingLabel: 'Loading...' },
    render: function Render(args: ButtonProps): JSX.Element {
        return <Button {...args} />;
    },
};
