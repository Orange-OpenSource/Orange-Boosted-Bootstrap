import {
    APP_INITIALIZER,
    Injectable,
    InjectionToken,
    inject,
    Provider,
} from '@angular/core';
import type { Theme, Brand } from '@ouds/core';

export interface OudsConfig {
    theme?: Theme;
    brand?: Brand;
    roundedButtons?: boolean;
    roundedAlerts?: boolean;
    roundedInputs?: boolean;
}

export const OUDS_CONFIG = new InjectionToken<OudsConfig>('OudsConfig');

@Injectable({ providedIn: 'root' })
export class OudsService {
    theme: Theme = 'light';
    brand: Brand = 'orange';
    roundedButtons = false;
    roundedAlerts = false;
    roundedInputs = false;

    constructor() {
        const config = inject(OUDS_CONFIG, { optional: true });
        if (config) {
            this.theme = config.theme ?? 'light';
            this.brand = config.brand ?? 'orange';
            this.roundedButtons = config.roundedButtons ?? false;
            this.roundedAlerts = config.roundedAlerts ?? false;
            this.roundedInputs = config.roundedInputs ?? false;
        }
    }

    getCssClasses(): string {
        return [
            this.roundedButtons && 'use-rounded-corner-buttons',
            this.roundedAlerts && 'use-rounded-corner-alert',
            this.roundedInputs && 'use-rounded-corner-inputs',
        ]
            .filter(Boolean)
            .join(' ');
    }
}

function initOuds(oudsService: OudsService): () => void {
    return () => {
        const classes = oudsService.getCssClasses();
        if (classes) {
            document.body.classList.add(...classes.split(' '));
        }
    };
}

export function provideOuds(config: OudsConfig): Provider[] {
    return [
        { provide: OUDS_CONFIG, useValue: config },
        {
            provide: APP_INITIALIZER,
            useFactory: initOuds,
            deps: [OudsService],
            multi: true,
        },
    ];
}
