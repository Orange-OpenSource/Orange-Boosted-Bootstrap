/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2026 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const getBrandPath = brand => {
    switch (brand) {
      case 'orange': {
        return 'orange'
      }

      case 'orange-compact': {
        return 'orange-compact'
      }

      case 'sosh': {
        return 'sosh'
      }

      default: {
        return null
      }
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-bs-brand-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', e => {
          e.preventDefault()
          const url = new URL(window.location)
          const brand = getBrandPath(toggle.getAttribute('data-bs-brand-value'))

          if (brand === null) {
            return
          }

          const pathSegments = url.pathname.split('/')
          pathSegments[1] = brand
          url.pathname = pathSegments.join('/')
          window.location.assign(url.href)
        })
      })
  })
})()
