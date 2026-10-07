import { loadBrandCSS } from '@ouds/core';
import React, { createContext, useContext, useEffect } from 'react';

export type OudsProviderProps = {
    theme?: 'light' | 'dark';
    brand?: 'orange' | 'orange-compact' | 'sosh';
    roundedButtons?: boolean;
    roundedAlerts?: boolean;
    roundedInputs?: boolean;
    children: React.ReactNode;
};

type OudsContextValue = {
    theme: 'light' | 'dark';
    brand: 'orange' | 'orange-compact' | 'sosh';
    roundedButtons: boolean;
    roundedAlerts: boolean;
    roundedInputs: boolean;
};

const OudsContext = createContext<OudsContextValue>({
    theme: 'light',
    brand: 'orange',
    roundedButtons: false,
    roundedAlerts: false,
    roundedInputs: false,
});

export const useOuds = (): OudsContextValue => useContext(OudsContext);

export const OudsProvider: React.FC<OudsProviderProps> = ({
    theme = 'light',
    brand = 'orange',
    roundedButtons = false,
    roundedAlerts = false,
    roundedInputs = false,
    children,
}) => {
    useEffect(() => {
        loadBrandCSS(brand);
    }, [brand]);
    const classNames = [
        roundedButtons && 'use-rounded-corner-buttons',
        roundedAlerts && 'use-rounded-corner-alert',
        roundedInputs && 'use-rounded-corner-inputs',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <OudsContext.Provider
            value={{
                theme,
                brand,
                roundedButtons,
                roundedAlerts,
                roundedInputs,
            }}
        >
            <div
                className={classNames || undefined}
                data-bs-theme={theme}
                data-bs-brand={brand}
            >
                {children}
            </div>
        </OudsContext.Provider>
    );
};
