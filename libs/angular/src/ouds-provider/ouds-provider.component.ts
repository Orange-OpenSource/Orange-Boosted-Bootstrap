import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    OnChanges,
    OnInit,
} from '@angular/core';
import { loadBrandCSS } from '@ouds/core';

import { OudsService } from './ouds.service';

@Component({
    selector: 'orange-ouds-provider',
    standalone: true,
    template: `
        <div
            [class]="wrapperClass"
            [attr.data-bs-brand]="brand"
            [attr.data-bs-theme]="theme"
        >
            <ng-content></ng-content>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OudsProviderComponent implements OnChanges, OnInit {
    @Input() theme: 'light' | 'dark' = 'light';
    @Input() brand: 'orange' | 'orange-compact' | 'sosh' = 'orange';
    @Input() roundedButtons = false;
    @Input() roundedAlerts = false;
    @Input() roundedInputs = false;

    wrapperClass = '';

    private readonly oudsService = inject(OudsService);

    ngOnInit(): void {
        loadBrandCSS(this.brand);
    }

    ngOnChanges(): void {
        this.oudsService.theme = this.theme;
        this.oudsService.brand = this.brand;
        this.oudsService.roundedButtons = this.roundedButtons;
        this.oudsService.roundedAlerts = this.roundedAlerts;
        this.oudsService.roundedInputs = this.roundedInputs;
        this.wrapperClass = this.oudsService.getCssClasses();
    }
}
