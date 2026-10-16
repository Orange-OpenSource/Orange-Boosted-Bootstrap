import { fn } from 'storybook/test';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { IconComponent } from '../icon/icon.component';
import { ButtonComponent } from './button.component';
import { Variant } from '@ouds/core';
import { functionalStatusWarning } from '@ouds/icons';

type StoryArgs = {
    variant?: Variant;
    type?: ButtonComponent['type'];
    label?: string;
    className?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    isIconOnly?: boolean;
    isOnColoredBg?: boolean;
    loadingLabel?: string;
    onClicked?: () => void;
};

const meta: Meta<ButtonComponent> = {
    title: 'Components/Button',
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
            imports: [ButtonComponent, IconComponent],
        }),
    ],
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
        isIconOnly: {
            description: 'If true, the button has only an icon',
            control: 'boolean',
        },
        isLoading: {
            description: 'If true, display a loading spinner',
            control: 'boolean',
        },
        loadingLabel: {
            description: 'Label announced by screen readers during loading',
            control: 'text',
        },
        isOnColoredBg: {
            description: 'If true, adapts the button for colored backgrounds',
            control: 'boolean',
        },
        className: {
            description: 'CSS class to be applied on the button',
        },
    },
    parameters: {
        docs: {
            description: {
                component:
                    'Boosted includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

const args = {
    variant: 'default' as Variant,
    type: 'button' as ButtonComponent['type'],
    label: 'Default Button',
    className: '',
    isDisabled: false,
    isLoading: false,
};

const buttonTemplate = `<orange-button
    [variant]="variant"
    [type]="type"
    [label]="label"
    [className]="className"
    [isDisabled]="isDisabled"
    [isLoading]="isLoading"
    [isIconOnly]="isIconOnly"
    [isOnColoredBg]="isOnColoredBg"
    [loadingLabel]="loadingLabel"
    (clicked)="onClicked()"
></orange-button>`;

const renderButton = (
    args: StoryArgs,
): { props: StoryArgs; template: string } => ({
    props: {
        ...args,
        onClicked: fn(),
    },
    template: buttonTemplate,
});

export const Default: Story = {
    args,
    render: renderButton,
};

export const Strong: Story = {
    args: { ...args, variant: 'strong' as Variant, label: 'Strong Button' },
    render: renderButton,
};

export const Brand: Story = {
    args: { ...args, variant: 'brand' as Variant, label: 'Brand Button' },
    render: renderButton,
};

export const Minimal: Story = {
    args: { ...args, variant: 'minimal' as Variant, label: 'Minimal Button' },
    render: renderButton,
};

export const Negative: Story = {
    args: { ...args, variant: 'negative' as Variant, label: 'Negative Button' },
    render: renderButton,
};

export const WithIcon: Story = {
    args: {
        ...args,
        label: 'Button with icon',
        isIconOnly: false,
    },
    render: (storyArgs) => ({
        props: {
            ...storyArgs,
            warningIcon: functionalStatusWarning,
            onClicked: fn(),
        },
        template: `<orange-button
            [variant]="variant"
            [type]="type"
            [label]="label"
            [className]="className"
            [isDisabled]="isDisabled"
            [isLoading]="isLoading"
            [isIconOnly]="isIconOnly"
            (clicked)="onClicked()"
        >
            <span icon><orange-icon [icon]="warningIcon"></orange-icon></span>
        </orange-button>`,
    }),
};

export const IconOnly: Story = {
    args: {
        ...args,
        // The label is kept for assistive technologies (visually hidden).
        label: 'Warning',
        isIconOnly: true,
    },
    render: (storyArgs) => ({
        props: {
            ...storyArgs,
            warningIcon: functionalStatusWarning,
            onClicked: fn(),
        },
        template: `<orange-button
            [variant]="variant"
            [type]="type"
            [label]="label"
            [className]="className"
            [isDisabled]="isDisabled"
            [isLoading]="isLoading"
            [isIconOnly]="isIconOnly"
            (clicked)="onClicked()"
        >
            <span icon><orange-icon [icon]="warningIcon"></orange-icon></span>
        </orange-button>`,
    }),
};

export const Loading: Story = {
    args: { ...args, isLoading: true, loadingLabel: 'Loading...' },
    render: renderButton,
};
