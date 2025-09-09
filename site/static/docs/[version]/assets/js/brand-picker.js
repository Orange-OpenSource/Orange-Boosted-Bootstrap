/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const url = new URLSearchParams(document.location.search)
  const getStoredBrand = () => localStorage.getItem('brand')
  const setStoredBrand = brand => localStorage.setItem('brand', brand)

  const getPreferredBrand = () => {
    return url.get('brand') || getStoredBrand() || 'orange'
  }

  const setBrand = brand => {
    document.documentElement.setAttribute('data-bs-brand', brand)
    url.set('brand', brand)
    window.history.replaceState({}, '', `${window.location.pathname}?${url}`)
  }

  setBrand(getPreferredBrand())

  const showActiveBrand = brand => {
    const brandSwitcher = document.querySelector('#bd-brand')

    if (!brandSwitcher) {
      return
    }

    const btnToActive = document.querySelector(`[data-bs-brand-value="${brand}"]`)
    const pathToActiveImage = btnToActive.querySelector('img').getAttribute('src')
    const mainLogo = document.querySelector('.bd-header .navbar-brand img')

    document.querySelectorAll('[data-bs-brand-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    brandSwitcher.setAttribute('aria-label', `Toggle brand (${brand})`)
    brandSwitcher.querySelector('img').src = pathToActiveImage
    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    mainLogo.src = pathToActiveImage
  }

  window.addEventListener('DOMContentLoaded', () => {
    showActiveBrand(getPreferredBrand())

    document.querySelectorAll('[data-bs-brand-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const brand = toggle.getAttribute('data-bs-brand-value')
          setStoredBrand(brand)
          setBrand(brand)
          showActiveBrand(brand)
        })
      })
  })
})()
