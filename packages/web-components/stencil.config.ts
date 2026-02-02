import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  buildEs5: 'prod',
  devServer: {
    reloadStrategy: 'pageReload' // The hmr do not work with the style updates
  },
  // globalStyle: '../orange/dist/css/ouds-web.css',
  namespace: 'ouds-web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      // copy: [
      //   {
      //     src: "../orange/dist/css/ouds-web.css",
      //     dest: "assets/style.css",
      //   }
      // ]
    },
    angularOutputTarget({
      componentCorePackage: '@ouds/web-components',
      outputType: 'standalone',
      directivesProxyFile: '../web-components-angular/lib/stencil-generated/components.ts',
      directivesArrayFile: '../web-components-angular/lib/stencil-generated/index.ts',
      customElementsDir: 'dist/components',
    }),
    reactOutputTarget({
      outDir: '../web-components-react/lib/components/stencil-generated/',
    }),
    { type: 'dist-custom-elements' },
  ],
  plugins: [
    sass({
      includePaths: [".node_modules"],
      quietDeps: true,
      silenceDeprecations: ['import'],
    }),
  ],
  testing: {
    browserHeadless: "shell",
  },
};
