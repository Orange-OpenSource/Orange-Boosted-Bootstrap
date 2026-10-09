import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './button.component';

describe('Button', () => {
    it('should render default button', () => {
        const { baseElement } = render(<Button label='Click me' />);
        expect(baseElement).toBeTruthy();
        expect(baseElement.querySelector('.btn-default')).toBeTruthy();
    });

    it('should render brand button', () => {
        const { baseElement } = render(
            <Button variant='brand' label='Brand' />,
        );
        expect(baseElement.querySelector('.btn-brand')).toBeTruthy();
    });

    it('should render strong button', () => {
        const { baseElement } = render(
            <Button variant='strong' label='Strong' />,
        );
        expect(baseElement.querySelector('.btn-strong')).toBeTruthy();
    });

    it('should render minimal button', () => {
        const { baseElement } = render(
            <Button variant='minimal' label='Minimal' />,
        );
        expect(baseElement.querySelector('.btn-minimal')).toBeTruthy();
    });

    it('should render negative button', () => {
        const { baseElement } = render(
            <Button variant='negative' label='Negative' />,
        );
        expect(baseElement.querySelector('.btn-negative')).toBeTruthy();
    });

    it('should render icon-only button', () => {
        const { baseElement } = render(
            <Button icon={<svg />} isIconOnly label='Action' />,
        );
        expect(baseElement.querySelector('.btn-icon')).toBeTruthy();
        expect(baseElement.querySelector('.visually-hidden')).toBeTruthy();
    });

    it('should render loading state', () => {
        const { baseElement } = render(<Button label='Loading' isLoading />);
        expect(
            baseElement.querySelector('.loading-indeterminate'),
        ).toBeTruthy();
        expect(baseElement.querySelector('button')?.disabled).toBe(true);
    });

    it('should use defaults: type button, enabled, not loading', () => {
        render(<Button label='Save' />);
        const button = screen.getByRole('button', { name: 'Save' });

        expect(button.getAttribute('type')).toBe('button');
        expect(button).toHaveProperty('disabled', false);
        expect(button.className).toBe('btn btn-default');
        expect(screen.getByRole('status').className).toBe(
            'visually-hidden d-none',
        );
        expect(screen.getByRole('status').textContent).toBe('');
    });

    it('should forward type, aria-label, form id and extra class', () => {
        render(
            <Button
                type='submit'
                label='Send'
                defaultAriaLabel='Send the form'
                formId='contact-form'
                className='my-button'
            />,
        );
        const button = screen.getByRole('button', { name: 'Send the form' });

        expect(button.getAttribute('type')).toBe('submit');
        expect(button.getAttribute('form')).toBe('contact-form');
        expect(button.classList).toContain('my-button');
    });

    it('should add the colored-background class', () => {
        render(<Button label='On color' isOnColoredBg />);
        expect(screen.getByRole('button').classList).toContain(
            'btn-on-colored-bg',
        );
    });

    it('should call onClick when clicked', () => {
        const onClick = vi.fn();
        render(<Button label='Go' onClick={onClick} />);

        fireEvent.click(screen.getByRole('button', { name: 'Go' }));

        expect(onClick).toHaveBeenCalledOnce();
    });

    it('should not call onClick when disabled', () => {
        const onClick = vi.fn();
        render(<Button label='Go' onClick={onClick} isDisabled />);
        const button = screen.getByRole('button', { name: 'Go' });

        fireEvent.click(button);

        expect(button).toHaveProperty('disabled', true);
        expect(onClick).not.toHaveBeenCalled();
    });

    it('should render the icon and children', () => {
        render(
            <Button
                label='With icon'
                icon={<svg data-testid='icon' aria-hidden='true' />}
            >
                <span data-testid='child'>extra</span>
            </Button>,
        );

        expect(screen.getByTestId('icon')).toBeTruthy();
        expect(screen.getByTestId('child').textContent).toBe('extra');
    });

    it('should render nothing visible for an icon-only button without label', () => {
        const { container } = render(
            <Button isIconOnly icon={<svg aria-hidden='true' />} />,
        );

        expect(
            container.querySelector('button > .visually-hidden:not([role])'),
        ).toBeNull();
    });

    it('should announce the loading label while loading', () => {
        render(<Button label='Send' isLoading loadingLabel='Sending…' />);
        const status = screen.getByRole('status');

        expect(status.textContent).toBe('Sending…');
        expect(status.classList).not.toContain('d-none');
    });

    it('should fall back to the label when no loading label is given', () => {
        render(<Button label='Send' isLoading />);
        expect(screen.getByRole('status').textContent).toBe('Send');
    });

    it('should announce an empty status when loading without any label', () => {
        render(<Button isLoading icon={<svg aria-hidden='true' />} isIconOnly />);
        expect(screen.getByRole('status').textContent).toBe('');
    });
});
