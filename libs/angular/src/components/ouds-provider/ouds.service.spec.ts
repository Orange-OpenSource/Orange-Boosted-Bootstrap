import { ApplicationInitStatus } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { OUDS_CONFIG, OudsService, provideOuds } from './ouds.service';

const ROUNDED_CLASSES = [
    'use-rounded-corner-buttons',
    'use-rounded-corner-alert',
    'use-rounded-corner-inputs',
];

describe('OudsService', () => {
    afterEach(() => {
        document.body.classList.remove(...ROUNDED_CLASSES);
    });

    describe('without configuration', () => {
        let service: OudsService;

        beforeEach(() => {
            TestBed.configureTestingModule({});
            service = TestBed.inject(OudsService);
        });

        it('should use the default values', () => {
            expect(service.theme).toBe('light');
            expect(service.brand).toBe('orange');
            expect(service.roundedButtons).toBe(false);
            expect(service.roundedAlerts).toBe(false);
            expect(service.roundedInputs).toBe(false);
        });

        it('should return no CSS class by default', () => {
            expect(service.getCssClasses()).toBe('');
        });

        it('should return the class of each enabled option', () => {
            service.roundedButtons = true;
            expect(service.getCssClasses()).toBe('use-rounded-corner-buttons');

            service.roundedButtons = false;
            service.roundedAlerts = true;
            expect(service.getCssClasses()).toBe('use-rounded-corner-alert');

            service.roundedAlerts = false;
            service.roundedInputs = true;
            expect(service.getCssClasses()).toBe('use-rounded-corner-inputs');
        });

        it('should join all the classes with a space', () => {
            service.roundedButtons = true;
            service.roundedAlerts = true;
            service.roundedInputs = true;

            expect(service.getCssClasses()).toBe(ROUNDED_CLASSES.join(' '));
        });
    });

    describe('with a full configuration', () => {
        it('should take its values from OUDS_CONFIG', () => {
            TestBed.configureTestingModule({
                providers: [
                    {
                        provide: OUDS_CONFIG,
                        useValue: {
                            theme: 'dark',
                            brand: 'sosh',
                            roundedButtons: true,
                            roundedAlerts: true,
                            roundedInputs: true,
                        },
                    },
                ],
            });
            const service = TestBed.inject(OudsService);

            expect(service.theme).toBe('dark');
            expect(service.brand).toBe('sosh');
            expect(service.roundedButtons).toBe(true);
            expect(service.roundedAlerts).toBe(true);
            expect(service.roundedInputs).toBe(true);
        });
    });

    describe('with a partial configuration', () => {
        it('should fall back to the defaults for missing values', () => {
            TestBed.configureTestingModule({
                providers: [{ provide: OUDS_CONFIG, useValue: {} }],
            });
            const service = TestBed.inject(OudsService);

            expect(service.theme).toBe('light');
            expect(service.brand).toBe('orange');
            expect(service.roundedButtons).toBe(false);
            expect(service.roundedAlerts).toBe(false);
            expect(service.roundedInputs).toBe(false);
        });
    });
});

describe('provideOuds', () => {
    it('should provide the config token and an app initializer', () => {
        const providers = provideOuds({ brand: 'sosh' }) as {
            provide: unknown;
            useValue?: unknown;
            multi?: boolean;
        }[];

        expect(providers.length).toBe(2);
        expect(providers[0].provide).toBe(OUDS_CONFIG);
        expect(providers[0].useValue).toEqual({ brand: 'sosh' });
        expect(providers[1].multi).toBe(true);
    });

    it('should add the rounded classes to the body when the app initializes', async () => {
        TestBed.configureTestingModule({
            providers: [
                provideOuds({
                    roundedButtons: true,
                    roundedInputs: true,
                }),
            ],
        });
        await TestBed.inject(ApplicationInitStatus).donePromise;

        expect(
            document.body.classList.contains('use-rounded-corner-buttons'),
        ).toBe(true);
        expect(
            document.body.classList.contains('use-rounded-corner-alert'),
        ).toBe(false);
        expect(
            document.body.classList.contains('use-rounded-corner-inputs'),
        ).toBe(true);
    });

    it('should leave the body untouched when no rounded option is enabled', async () => {
        const before = document.body.className;

        TestBed.configureTestingModule({
            providers: [provideOuds({ theme: 'dark' })],
        });
        await TestBed.inject(ApplicationInitStatus).donePromise;

        expect(document.body.className).toBe(before);
    });
});
