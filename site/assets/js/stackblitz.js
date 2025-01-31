// NOTICE!!! Initially embedded in our docs this JavaScript
// file contains elements that can help you create reproducible
// use cases in StackBlitz for instance.
// In a real project please adapt this content to your needs.
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2024 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

import sdk from '@stackblitz/sdk'
// https://gohugo.io/hugo-pipes/js/#options
import {
  cssCdn, docsVersion, jsBundleCdn, jsSnippetFile
} from '@params' // eslint-disable-line import/no-unresolved

// Open in StackBlitz logic
document.querySelectorAll('.btn-edit').forEach(btn => {
  btn.addEventListener('click', event => {
    const codeSnippet = event.target.closest('.bd-code-snippet')
    const exampleEl = codeSnippet.querySelector('.bd-example')

    const htmlSnippet = exampleEl.innerHTML
    const jsSnippet = codeSnippet.querySelector('.btn-edit').getAttribute('data-sb-js-snippet')
    // Get extra classes for this example
    const classes = Array.from(exampleEl.classList).join(' ')

    openOUDSWebSnippet(htmlSnippet, jsSnippet, classes)
  })
})

const openOUDSWebSnippet = (htmlSnippet, jsSnippet, classes) => {
  const indexHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="${cssCdn}" rel="stylesheet">
  <link href="https://web.unified-design-system.orange.com/docs/${docsVersion}/assets/css/docs.css" rel="stylesheet">
  <title>OUDS Web Example</title>
  <${'script'} defer src="${jsBundleCdn}"></${'script'}>
</head>
<body class="p-tall m-none border-none ${classes}">
  <!-- Example Code -->
${htmlSnippet.trimStart().replace(/^/gm, '    ').replace(/^ {4}$/gm, '').trimEnd()}
  <!-- End Example Code -->
</body>
</html>
`

  const project = {
    files: {
      'index.html': indexHtml,
      ...(jsSnippet && { 'index.js': jsSnippetFile })
    },
    title: 'OUDS Web Example',
    description: `Official example from ${window.location.href}`,
    template: jsSnippet ? 'javascript' : 'html',
    tags: ['ouds-web']
  }

  sdk.openProject(project, { openFile: 'index.html' })
}
