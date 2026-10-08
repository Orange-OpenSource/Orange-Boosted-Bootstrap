import './storybook.css';

import { OudsProvider } from '@ouds/react';
import { version as oudsVersion } from '@ouds/web-orange/package.json';
import type { Decorator, Preview } from '@storybook/react';
import { JSX, version as reactVersion } from 'react';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { version as oudsReactVersion } from '../../../libs/react/package.json';

export const globalTypes: Preview['globalTypes'] = {
    version: {
        name: '@ouds/react',
        description: '@ouds/react version',
        defaultValue: `v${oudsReactVersion}`,
        toolbar: {
            title: `@ouds/react ${oudsReactVersion}`,
            items: [],
            dynamicTitle: true,
        },
    },
    oudsVersion: {
        name: '@ouds/web-orange',
        description: '@ouds/web-orange version',
        defaultValue: `v${oudsVersion}`,
        toolbar: {
            title: `@ouds/web-orange ${oudsVersion}`,
            items: [],
            dynamicTitle: true,
        },
    },
    reactVersion: {
        name: 'React',
        description: 'React version',
        defaultValue: `v${reactVersion}`,
        toolbar: {
            icon: 'component',
            title: `React ${reactVersion}`,
            items: [],
            dynamicTitle: true,
        },
    },
    roundedCorners: {
        name: 'Rounded corners',
        description: 'Toggle rounded corners for buttons, alerts, and inputs',
        defaultValue: 'off',
        toolbar: {
            title: 'Rounded corners',
            items: [
                { value: 'off', title: 'Square corners', icon: 'stopalt' },
                { value: 'on', title: 'Rounded corners', icon: 'circle' },
            ],
            dynamicTitle: true,
        },
    },
    theme: {
        name: 'Theme',
        description: 'Toggle between light and dark mode',
        defaultValue: 'light',
        toolbar: {
            title: 'Theme',
            items: [
                { value: 'light', title: 'Light', icon: 'sun' },
                { value: 'dark', title: 'Dark', icon: 'moon' },
            ],
            dynamicTitle: true,
        },
    },
    brand: {
        name: 'Brand',
        description: 'Toggle between different brands',
        defaultValue: 'orange',
        toolbar: {
            title: 'Brand',
            items: [
                { value: 'orange', title: 'Orange', icon: 'circle' },
                {
                    value: 'orange-compact',
                    title: 'Orange Compact',
                    icon: 'circle',
                },
                {
                    value: 'sosh',
                    title: 'Sosh',
                    icon: 'circle',
                },
            ],
            dynamicTitle: true,
        },
    },
};

const InProgressTemplate = ({ title }: { title: string }): JSX.Element => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem',
            textAlign: 'center',
            gap: '1rem',
        }}
    >
        {/* Accessible-emoji pattern: an <img> element cannot render an emoji glyph. */}
        <span
            // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role
            role='img'
            aria-label='Construction sign'
            style={{ fontSize: '3rem' }}
        >
            🚧
        </span>
        <h2 style={{ margin: 0 }}>{title}</h2>
        <p style={{ margin: 0, color: '#666' }}>
            This component story is a work in progress.
        </p>
    </div>
);

export const decorators: Decorator[] = [
    (Story, context): JSX.Element => {
        const rounded = context.globals['roundedCorners'] === 'on';
        const theme = (context.globals['theme'] as 'light' | 'dark') ?? 'dark';
        const brand =
            (context.globals['brand'] as
                'orange' | 'orange-compact' | 'sosh') ?? 'orange';
        const storyTitle: string = context.title ?? '';
        const isOuds = storyTitle.startsWith('Components/');

        document.documentElement.setAttribute('data-bs-theme', theme);
        document.documentElement.setAttribute('data-bs-brand', brand);

        if (!isOuds) {
            const componentName = storyTitle.split('/').pop() ?? storyTitle;
            return (
                <OudsProvider
                    theme={theme}
                    brand={brand}
                    roundedButtons={rounded}
                    roundedAlerts={rounded}
                    roundedInputs={rounded}
                >
                    <InProgressTemplate title={componentName} />
                </OudsProvider>
            );
        }

        return (
            <OudsProvider
                theme={theme}
                brand={brand}
                roundedButtons={rounded}
                roundedAlerts={rounded}
                roundedInputs={rounded}
            >
                <Story />
            </OudsProvider>
        );
    },
];

export const parameters: Preview['parameters'] = {
    options: {
        storySort: {
            order: ['Components', '*'],
        },
    },
};

export const tags: Preview['tags'] = ['autodocs'];
