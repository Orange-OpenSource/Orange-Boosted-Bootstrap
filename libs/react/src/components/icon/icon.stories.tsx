import { functionalStatusWarning } from '@ouds/icons';
import { Meta } from '@storybook/react';
import { JSX } from 'react';

import { Icon } from './icon.component';
import { IconProps } from './icon.model';

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

export default {
    title: 'Components/Icon',
    component: Icon,
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
        className: {
            description: 'CSS class(es) to be applied on the svg',
        },
    },
    parameters: {
        docs: {
            description: {
                component:
                    'Inline SVG icon with the markup of the OUDS Web icons. The icon is hidden from assistive technologies; set `label` when it carries meaning.',
            },
        },
    },
} as Meta;

const args = {
    icon: functionalStatusWarning,
    size: 'decorative-large' as const,
};

export const Default = {
    args,
    render: function Render(args: IconProps): JSX.Element {
        return <Icon {...args} />;
    },
};
