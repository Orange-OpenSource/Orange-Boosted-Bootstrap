import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ButtonComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render successfully', () => {
        expect(component).toBeTruthy();
    });

    it('should be disabled when isDisabled input is true', () => {
        fixture.componentRef.setInput('isDisabled', true);
        fixture.detectChanges();
        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');
        expect(button.disabled).toBe(true);
    });

    it('should be disabled when isLoading is true', () => {
        fixture.componentRef.setInput('isLoading', true);
        fixture.detectChanges();
        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');
        expect(button.disabled).toBe(true);
    });

    it('should emit clicked event on click', () => {
        jest.spyOn(component.clicked, 'emit');
        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');
        button.click();
        expect(component.clicked.emit).toHaveBeenCalled();
    });

    it('should not emit clicked when disabled', () => {
        jest.spyOn(component.clicked, 'emit');
        fixture.componentRef.setInput('isDisabled', true);
        fixture.detectChanges();

        component.onClick();

        expect(component.clicked.emit).not.toHaveBeenCalled();
    });

    it('should not emit clicked while loading', () => {
        jest.spyOn(component.clicked, 'emit');
        fixture.componentRef.setInput('isLoading', true);
        fixture.detectChanges();

        component.onClick();

        expect(component.clicked.emit).not.toHaveBeenCalled();
    });

    it('should show loading status text when isLoading', () => {
        fixture.componentRef.setInput('isLoading', true);
        fixture.componentRef.setInput('loadingLabel', 'Loading...');
        fixture.detectChanges();
        const status = fixture.nativeElement.querySelector('[role="status"]');
        expect(status.textContent).toContain('Loading...');
    });

    it('should fall back to the label for the loading status text', () => {
        fixture.componentRef.setInput('isLoading', true);
        fixture.componentRef.setInput('label', 'Save');
        fixture.detectChanges();

        expect(component.loadingStatusText).toBe('Save');
    });

    it('should have an empty loading status text without labels', () => {
        fixture.componentRef.setInput('isLoading', true);
        fixture.detectChanges();

        expect(component.loadingStatusText).toBe('');
    });

    it('should have an empty loading status text when not loading', () => {
        fixture.componentRef.setInput('loadingLabel', 'Loading...');
        fixture.detectChanges();

        expect(component.loadingStatusText).toBe('');
    });

    it('should always render the loader and a hidden status, like OUDS Web', () => {
        const loader = fixture.nativeElement.querySelector('svg.loader');
        const status: HTMLElement =
            fixture.nativeElement.querySelector('[role="status"]');

        expect(loader.getAttribute('aria-hidden')).toBe('true');
        expect(status.id).toBe(component.statusId);
        expect(status.classList).toContain('visually-hidden');
        expect(status.classList).toContain('d-none');
        expect(status.textContent?.trim()).toBe('');
    });

    it('should reveal the status and keep the label and the loader while loading', () => {
        fixture.componentRef.setInput('label', 'Send');
        fixture.componentRef.setInput('loadingLabel', 'Sending…');
        fixture.componentRef.setInput('isLoading', true);
        fixture.detectChanges();
        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');
        const status: HTMLElement =
            fixture.nativeElement.querySelector('[role="status"]');

        expect(button.classList).toContain('loading-indeterminate');
        expect(button.textContent).toContain('Send');
        expect(button.querySelector('svg.loader')).not.toBeNull();
        expect(status.classList).not.toContain('d-none');
        expect(status.textContent?.trim()).toBe('Sending…');
    });

    it('should add the className input to the button classes', () => {
        fixture.componentRef.setInput('className', 'my-button extra');
        fixture.detectChanges();
        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.classList).toContain('my-button');
        expect(button.classList).toContain('extra');
        expect(button.classList).toContain('btn');
    });

    it('should compute the button classes from its inputs', () => {
        expect(component.buttonClasses).toEqual({
            'btn': true,
            'btn-icon': false,
            'btn-default': true,
            'loading-indeterminate': false,
            'btn-on-colored-bg': false,
        });

        fixture.componentRef.setInput('variant', 'strong');
        fixture.componentRef.setInput('isIconOnly', true);
        fixture.componentRef.setInput('isLoading', true);
        fixture.componentRef.setInput('isOnColoredBg', true);
        fixture.detectChanges();

        expect(component.buttonClasses).toEqual({
            'btn': true,
            'btn-icon': true,
            'btn-strong': true,
            'loading-indeterminate': true,
            'btn-on-colored-bg': true,
        });
    });

    it('should not add a variant class without a variant', () => {
        fixture.componentRef.setInput('variant', '');
        fixture.detectChanges();

        expect(component.buttonClasses['btn-']).toBe(false);
    });

    it('should render the label as text for a regular button', () => {
        fixture.componentRef.setInput('label', 'Save');
        fixture.detectChanges();
        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.textContent).toContain('Save');
        expect(
            button.querySelector('.visually-hidden:not([role="status"])'),
        ).toBeNull();
    });

    it('should render the label visually hidden for an icon-only button', () => {
        fixture.componentRef.setInput('label', 'Save');
        fixture.componentRef.setInput('isIconOnly', true);
        fixture.detectChanges();
        const hidden: HTMLElement | null =
            fixture.nativeElement.querySelector('.visually-hidden');

        expect(hidden?.textContent).toBe('Save');
    });

    it('should forward the type, aria-label and form attributes', () => {
        fixture.componentRef.setInput('type', 'submit');
        fixture.componentRef.setInput('defaultAriaLabel', 'Send form');
        fixture.componentRef.setInput('formId', 'my-form');
        fixture.detectChanges();
        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('button');

        expect(button.type).toBe('submit');
        expect(button.getAttribute('aria-label')).toBe('Send form');
        expect(button.getAttribute('form')).toBe('my-form');
        expect(button.hasAttribute('aria-describedby')).toBe(false);
    });

    it('should give each instance a unique status id', () => {
        const other = TestBed.createComponent(ButtonComponent);

        expect(other.componentInstance.statusId).not.toBe(component.statusId);
    });
});
