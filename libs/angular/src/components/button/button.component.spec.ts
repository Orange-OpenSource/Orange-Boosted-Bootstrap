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
        expect(fixture.nativeElement.querySelector('[role="status"]')).toBeNull();
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
        expect(button.querySelector('.visually-hidden')).toBeNull();
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
        expect(button.getAttribute('aria-describedby')).toBe(component.statusId);
    });

    it('should give each instance a unique status id', () => {
        const other = TestBed.createComponent(ButtonComponent);

        expect(other.componentInstance.statusId).not.toBe(component.statusId);
    });
});
