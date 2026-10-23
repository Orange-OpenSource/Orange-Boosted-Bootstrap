import { getIconPaths, getIconSizeClass } from '@ouds/core';
import cx from 'classnames';

import { useOuds } from '../ouds-provider/ouds-provider.component';
import { IconProps } from './icon.model';

/**
 * Renders an OUDS icon as an inline `<svg>`, with the same markup as the OUDS Web icons: it is
 * hidden from assistive technologies, and `label` adds a visually hidden text for a meaningful icon.
 */
export const Icon: React.FC<IconProps> = ({ icon, size, label, className }) => {
    const ouds = useOuds();
    const paths = getIconPaths(icon, ouds.brand);

    return (
        <>
            <svg
                className={cx(getIconSizeClass(size), className) || undefined}
                width='1rem'
                height='1rem'
                viewBox={icon.viewBox}
                fill='currentColor'
                aria-hidden='true'
            >
                {paths.map((path, index) => (
                    <path
                        key={index}
                        d={path.d}
                        fill={path.fill}
                        fillRule={path.fillRule}
                    />
                ))}
            </svg>
            {label ? <span className='visually-hidden'>{label}</span> : null}
        </>
    );
};
