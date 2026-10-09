import { addons } from 'storybook/manager-api';
import OrangeTheme from '@ouds/storybook-theme/OrangeTheme.js';

import './toolbar-addon';

addons.setConfig({
    theme: OrangeTheme,
});
