// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global ClipboardJS: false */

(() => {
  'use strict'

  new ClipboardJS('.color-copy', {
    // target: trigger => trigger.closest('.bd-code-snippet').querySelector('.highlight'),
    text: trigger => trigger.getAttribute('data-clipboard-text')
  })
})()
