import { functionalStatusWarning } from '@ouds/icons';
import type { Meta, StoryObj } from '@storybook/vue3';

import Icon from './icon.component.vue';

const sizes = [
    'hxl-large',
    'hxl-medium',
    'hxl-small',
    'hl-large',
    'hl-medium',
    'hl-small',
    'hm-large',
    'hm-medium',
    'hm-small',
    'hs-large',
    'hs-medium',
    'hs-small',
    'bl-large',
    'bl-medium',
    'bl-small',
    'bm-large',
    'bm-medium',
    'bm-small',
    'bs-large',
    'bs-medium',
    'bs-small',
    'decorative-2xlarge',
    'decorative-xlarge',
    'decorative-large',
    'decorative-medium',
    'decorative-small',
    'decorative-xsmall',
    'decorative-2xsmall',
    'decorative-3xsmall',
    'decorative-4xsmall',
];

const meta: Meta<typeof Icon> = {
    component: Icon,
    title: 'Components/Icon',
    argTypes: {
        icon: {
            description:
                'Icon data from @ouds/icons, e.g. `functionalStatusWarning`.',
            control: false,
        },
        size: {
            description:
                'OUDS Web icon size (`<size>-icon` class). Without it, the size comes from the surrounding CSS.',
            options: sizes,
            control: 'select',
        },
        label: {
            description:
                'Accessible name of a meaningful icon, rendered as visually hidden text. Leave it empty for a decorative icon.',
            control: 'text',
        },
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

const args = {
    icon: functionalStatusWarning,
    size: 'decorative-large' as const,
};

export const Default: Story = {
    args,
};
