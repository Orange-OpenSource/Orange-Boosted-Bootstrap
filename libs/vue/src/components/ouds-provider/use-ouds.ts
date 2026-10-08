import { inject } from 'vue';

import {
    DEFAULT_OUDS_CONTEXT,
    OUDS_CONTEXT_KEY,
    type OudsContext,
} from './ouds-provider.model';

/**
 * Returns the theme, brand, and rounded-corner settings of the closest
 * `OudsProvider`, or the defaults when there is none.
 */
export const useOuds = (): Readonly<OudsContext> =>
    inject(OUDS_CONTEXT_KEY, DEFAULT_OUDS_CONTEXT);
