import { version as oudsVersion } from '@ouds/web-orange/package.json';
import { createElement } from 'react';
import { addons, types } from 'storybook/manager-api';
import { version as vueVersion } from 'vue/package.json';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { version as oudsVueVersion } from '../../../libs/vue/package.json';

const ADDON_ID = 'ouds/version-labels';
const TOOL_ID = `${ADDON_ID}/tool`;

const labels = [
    `@ouds/vue ${oudsVueVersion}`,
    `@ouds/web-orange ${oudsVersion}`,
    `Vue ${vueVersion}`,
];

// Read-only label in the Storybook toolbar (not a selector).
addons.register(ADDON_ID, () => {
    addons.add(TOOL_ID, {
        type: types.TOOL,
        title: 'Versions',
        match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
        render: () =>
            createElement(
                'span',
                {
                    style: {
                        padding: '0 8px',
                        fontSize: 12,
                        opacity: 0.8,
                        whiteSpace: 'nowrap',
                    },
                },
                labels.join(' · '),
            ),
    });
});
