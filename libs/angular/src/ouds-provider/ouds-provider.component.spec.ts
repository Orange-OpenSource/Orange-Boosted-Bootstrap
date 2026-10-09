import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OudsProviderComponent } from './ouds-provider.component';
import { OudsService } from './ouds.service';

@Component({
    selector: 'orange-test-host',
    standalone: true,
    imports: [OudsProviderComponent],
    template: `
        <orange-ouds-provider
            [theme]="theme()"
            [brand]="brand()"
            [roundedButtons]="roundedButtons()"
            [roundedAlerts]="roundedAlerts()"
            [roundedInputs]="roundedInputs()"
        >
            <p class="projected">Content</p>
        </orange-ouds-provider>
    `,
})
class TestHostComponent {
    readonly theme = signal<'light' | 'dark'>('light');
    readonly brand = signal<'orange' | 'orange-compact' | 'sosh'>('orange');
    readonly roundedButtons = signal(false);
    readonly roundedAlerts = signal(false);
    readonly roundedInputs = signal(false);
}

const getBrandLink = (): HTMLLinkElement | null =>
    document.getElementById('ouds-brand-css') as HTMLLinkElement | null;

describe('OudsProviderComponent', () => {
    let fixture: ComponentFixture<OudsProviderComponent>;
    let component: OudsProviderComponent;

    const getWrapper = (): HTMLDivElement =>
        fixture.nativeElement.querySelector('div');

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [OudsProviderComponent, TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(OudsProviderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        getBrandLink()?.remove();
    });

    it('should render successfully with default inputs', () => {
        expect(component).toBeTruthy();
        expect(component.theme).toBe('light');
        expect(component.brand).toBe('orange');
        expect(component.roundedButtons).toBe(false);
        expect(component.roundedAlerts).toBe(false);
        expect(component.roundedInputs).toBe(false);
        expect(component.wrapperClass).toBe('');
    });

    it('should expose the brand and theme as data attributes', () => {
        expect(getWrapper().getAttribute('data-bs-brand')).toBe('orange');
        expect(getWrapper().getAttribute('data-bs-theme')).toBe('light');

        fixture.componentRef.setInput('brand', 'sosh');
        fixture.componentRef.setInput('theme', 'dark');
        fixture.detectChanges();

        expect(getWrapper().getAttribute('data-bs-brand')).toBe('sosh');
        expect(getWrapper().getAttribute('data-bs-theme')).toBe('dark');
    });

    it('should apply the rounded corner classes for the enabled options', () => {
        fixture.componentRef.setInput('roundedButtons', true);
        fixture.componentRef.setInput('roundedInputs', true);
        fixture.detectChanges();

        expect(component.wrapperClass).toBe(
            'use-rounded-corner-buttons use-rounded-corner-inputs',
        );
        expect(getWrapper().classList.contains('use-rounded-corner-buttons')).toBe(
            true,
        );
        expect(getWrapper().classList.contains('use-rounded-corner-alert')).toBe(
            false,
        );
        expect(getWrapper().classList.contains('use-rounded-corner-inputs')).toBe(
            true,
        );
    });

    it('should apply the alert rounded corner class', () => {
        fixture.componentRef.setInput('roundedAlerts', true);
        fixture.detectChanges();

        expect(component.wrapperClass).toBe('use-rounded-corner-alert');
    });

    it('should sync the inputs to the OudsService', () => {
        const service = TestBed.inject(OudsService);

        fixture.componentRef.setInput('theme', 'dark');
        fixture.componentRef.setInput('brand', 'orange-compact');
        fixture.componentRef.setInput('roundedButtons', true);
        fixture.componentRef.setInput('roundedAlerts', true);
        fixture.componentRef.setInput('roundedInputs', true);
        fixture.detectChanges();

        expect(service.theme).toBe('dark');
        expect(service.brand).toBe('orange-compact');
        expect(service.roundedButtons).toBe(true);
        expect(service.roundedAlerts).toBe(true);
        expect(service.roundedInputs).toBe(true);
    });

    it('should load the brand stylesheet once on init', () => {
        const link = getBrandLink();

        expect(link).not.toBeNull();
        expect(link?.rel).toBe('stylesheet');
        expect(link?.getAttribute('data-brand')).toBe('orange');
        expect(link?.href).toContain('@ouds/web-orange@');
        expect(document.querySelectorAll('#ouds-brand-css').length).toBe(1);
    });

    it('should project its content into the wrapper', () => {
        const hostFixture = TestBed.createComponent(TestHostComponent);
        hostFixture.detectChanges();

        const projected: HTMLElement | null =
            hostFixture.nativeElement.querySelector('div > p.projected');
        expect(projected?.textContent).toBe('Content');
    });

    it('should react to host binding changes', () => {
        const hostFixture = TestBed.createComponent(TestHostComponent);
        hostFixture.detectChanges();

        const host = hostFixture.componentInstance;
        host.theme.set('dark');
        host.brand.set('sosh');
        host.roundedButtons.set(true);
        hostFixture.detectChanges();

        const wrapper: HTMLDivElement =
            hostFixture.nativeElement.querySelector('div');
        expect(wrapper.getAttribute('data-bs-theme')).toBe('dark');
        expect(wrapper.getAttribute('data-bs-brand')).toBe('sosh');
        expect(wrapper.classList.contains('use-rounded-corner-buttons')).toBe(
            true,
        );
    });
});
