import { CommonModule } from '@angular/common';
import type { Variant } from '@ouds/core';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

let nextId = 0;

@Component({
    selector: 'orange-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    @Input() variant: Variant = 'default';
    @Input() type: 'button' | 'submit' | 'reset' = 'button';
    @Input() defaultAriaLabel?: string;
    @Input() isDisabled = false;
    @Input() label?: string;
    @Input() isIconOnly = false;
    @Input() isLoading = false;
    @Input() loadingLabel?: string;
    @Input() isOnColoredBg = false;
    @Input() formId?: string;
    @Input() className = '';

    @Output() clicked = new EventEmitter<void>();

    readonly statusId = `orange-button-status-${nextId++}`;

    get buttonClasses(): Record<string, boolean> {
        return {
            'btn': true,
            'btn-icon': this.isIconOnly,
            [`btn-${this.variant}`]: !!this.variant,
            'loading-indeterminate': this.isLoading,
            'btn-on-colored-bg': this.isOnColoredBg,
            // Extra classes from the `className` input (`ngClass` splits on spaces).
            ...(this.className ? { [this.className]: true } : {}),
        };
    }

    get buttonDisabled(): boolean {
        return this.isDisabled || this.isLoading;
    }

    get loadingStatusText(): string {
        if (this.isLoading) {
            return this.loadingLabel || this.label || '';
        }
        return '';
    }

    onClick(): void {
        if (!this.buttonDisabled) {
            this.clicked.emit();
        }
    }
}
