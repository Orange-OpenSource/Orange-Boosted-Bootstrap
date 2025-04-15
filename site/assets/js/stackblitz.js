// NOTICE!!! Initially embedded in our docs this JavaScript
// file contains elements that can help you create reproducible
// use cases in StackBlitz for instance.
// In a real project please adapt this content to your needs.
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2025 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

import sdk from '@stackblitz/sdk'
// https://gohugo.io/hugo-pipes/js/#options
import {
  cssCdn, docsVersion, helvNeue55W1GCdn, helvNeue55W1GHash, helvNeue75W1GCdn, helvNeue75W1GHash, helveticaCdn, helveticaHash, jsBundleCdn, jsSnippetFile
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

    openBoostedSnippet(htmlSnippet, jsSnippet, classes)
  })
})

const openBoostedSnippet = (htmlSnippet, jsSnippet, classes) => {
  const indexHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!--
    Neue Helvetica is a trademark of Monotype Imaging Inc. registered in the U.S.
    Patent and Trademark Office and may be registered in certain other jurisdictions.
    Copyright © 2014 Monotype Imaging Inc. All rights reserved.
    Orange has purchased the right to use Helvetica in its websites and mobile applications.
    If you are not authorized to used it, don’t include the orange-helvetica.css
    See NOTICE.txt for more information.
  -->
  <link href="${helvNeue55W1GCdn}" rel="preload" as="font" type="font/woff2" integrity="${helvNeue55W1GHash}" crossorigin="anonymous">
  <link href="${helvNeue75W1GCdn}" rel="preload" as="font" type="font/woff2" integrity="${helvNeue75W1GHash}" crossorigin="anonymous">
  <link href="${helveticaCdn}" rel="stylesheet" integrity="${helveticaHash}" crossorigin="anonymous">

  <link href="${cssCdn}" rel="stylesheet">
  <link href="https://boosted.orange.com/docs/${docsVersion}/assets/css/docs.css" rel="stylesheet">
  <title>Boosted Example</title>
  <${'script'} defer src="${jsBundleCdn}"></${'script'}>
</head>
<body class="p-3 m-0 border-0 ${classes}">
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
    title: 'Boosted Example',
    description: `Official example from ${window.location.href}`,
    template: jsSnippet ? 'javascript' : 'html',
    tags: ['boosted']
  }

  sdk.openProject(project, { openFile: 'index.html' })
}
