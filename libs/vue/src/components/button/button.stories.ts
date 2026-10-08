import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from 'storybook/test';

import Button from './button.component.vue';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Button',
    argTypes: {
        type: {
            description: 'HTML type attribute of a button',
            options: ['button', 'submit', 'reset'],
            control: 'select',
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
            description: 'If true, display a loading state',
            control: 'boolean',
        },
        loadingLabel: {
            description: 'Label announced by screen readers during loading',
            control: 'text',
        },
        isOnColoredBg: {
            description: 'Use on colored backgrounds',
            control: 'boolean',
        },
        onClick: {
            description: 'Emitted when the enabled button is clicked',
        },
    },
    args: {
        // Spy on the `click` emit: logged in the Actions panel and usable in interaction tests.
        onClick: fn(),
    },
    parameters: {
        docs: {
            description: {
                component:
                    'OUDS Web button component with variants: default, strong, brand, minimal, negative.',
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

const args = {
    variant: 'default' as const,
    type: 'button' as const,
    label: 'Default Button',
    isDisabled: false,
    isLoading: false,
};

export const Default: Story = {
    args,
};

export const Strong: Story = {
    args: { ...args, variant: 'strong', label: 'Strong Button' },
};

export const Brand: Story = {
    args: { ...args, variant: 'brand', label: 'Brand Button' },
};

export const Minimal: Story = {
    args: { ...args, variant: 'minimal', label: 'Minimal Button' },
};

export const Negative: Story = {
    args: { ...args, variant: 'negative', label: 'Negative Button' },
};

export const Loading: Story = {
    args: { ...args, isLoading: true, loadingLabel: 'Loading...' },
};
