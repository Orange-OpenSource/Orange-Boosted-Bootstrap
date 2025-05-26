export declare global {
  export const StackBlitzSDK: typeof import('@stackblitz/sdk').default

  /**
   * The `boosted` object is exposed to the global scope and also to the `window` object in the browser.
   * We rely on the DefinitelyTyped community types for this object to get proper type checking for part of the
   * documentation using the Boosted API and avoid any misuse of the API.
   * To temporarily or permanently disable this feature (e.g. when modifying the Boosted API used in the
   * documentation), the 2 lines containing `typeof import('boosted')` can be commented and replaced by the commented
   * lines containing `any`.
   *
   * The documentation is currently using the following APIs from Boosted:
   *
   *  - `boosted.Tooltip.getOrCreateInstance`
   *  - `boosted.Tooltip.getInstance`
   *
   */
  export const boosted: typeof import('boosted')
  // export const boosted: any

  interface Window {
    boosted: typeof import('boosted')
    // boosted: any
  }
}
