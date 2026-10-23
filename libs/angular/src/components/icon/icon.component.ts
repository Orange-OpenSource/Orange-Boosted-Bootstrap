import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
} from '@angular/core';
import { getIconPaths, getIconSizeClass } from '@ouds/core';
import type { IconPath, IconSize, OudsIcon } from '@ouds/core';

import { OudsService } from '../ouds-provider/ouds.service';

/**
 * Renders an OUDS icon as an inline `<svg>`, with the same markup as the OUDS Web icons: it is
 * hidden from assistive technologies, and `label` adds a visually hidden text for a meaningful icon.
 */
@Component({
    selector: 'orange-icon',
    standalone: true,
    templateUrl: './icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
    /** Icon data from `@ouds/icons`, e.g. `functionalStatusWarning`. */
    @Input({ required: true }) icon!: OudsIcon;
    @Input() size?: IconSize;
    @Input() label?: string;
    /** Extra CSS class(es) for the `<svg>`. */
    @Input() className = '';

    private readonly ouds = inject(OudsService);

    get paths(): readonly IconPath[] {
        return getIconPaths(this.icon, this.ouds.brand);
    }

    get svgClass(): string | null {
        return (
            [getIconSizeClass(this.size), this.className]
                .filter(Boolean)
                .join(' ') || null
        );
    }
}
