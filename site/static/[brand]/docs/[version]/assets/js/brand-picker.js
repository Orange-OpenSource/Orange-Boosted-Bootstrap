/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-bs-brand-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', e => {
          e.preventDefault()
          const url = new URL(window.location)
          const brand = toggle.getAttribute('data-bs-brand-value')
          const brandToChange = url.pathname.split('/')[1]
          window.location = url.href.replace(brandToChange, brand)
        })
      })
  })
})()
