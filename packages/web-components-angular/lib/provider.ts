import { provideHttpClient } from '@angular/common/http';
import { makeEnvironmentProviders } from '@angular/core';
// import { ElementsConfig, initialize } from '@ouds/web-components';
// import { defineCustomElements } from '@stencil-demo/elements/loader';

/**
 * Sets up providers necessary to use the elements library in the application.
 */
export function provideAngularElements() {
  return makeEnvironmentProviders([
    // provideAppInitializer(() => initialize(config)),
    // Define all custom elements in the app. For test purpose, incompatible with the standalone components
    // provideAppInitializer(() => {
    //   defineCustomElements();
    // }),
    provideHttpClient(),
  ]);
}
