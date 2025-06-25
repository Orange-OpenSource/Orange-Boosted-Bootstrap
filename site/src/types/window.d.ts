export declare global {
  export const StackBlitzSDK: typeof import('@stackblitz/sdk').default

  /**
   * The `oudsWeb` object is exposed to the global scope and also to the `window` object in the browser.
   * We rely on the DefinitelyTyped community types for this object to get proper type checking for part of the
   * documentation using the OUDS Web API and avoid any misuse of the API.
   * To temporarily or permanently disable this feature (e.g. when modifying the OUDS Web API used in the
   * documentation), the 2 lines containing `typeof import('oudsWeb')` can be commented and replaced by the commented
   * lines containing `any`.
   *
   * The documentation is currently using the following APIs from OUDS Web:
   *
   *  - `oudsWeb.Tooltip.getOrCreateInstance`
   *  - `oudsWeb.Tooltip.getInstance`
   *
   */
  export const oudsWeb: typeof import('oudsWeb')
  // export const oudsWeb: any

  interface Window {
    oudsWeb: typeof import('oudsWeb')
    // oudsWeb: any
  }
}
