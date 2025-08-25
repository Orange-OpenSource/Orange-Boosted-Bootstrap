/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const getStoredBrand = () => localStorage.getItem('brand')
  const setStoredBrand = brand => localStorage.setItem('brand', brand)

  const getPreferredBrand = () => {
    return getStoredBrand() || 'orange'
  }

  const setBrand = brand => {
    document.documentElement.setAttribute('data-bs-brand', brand)
  }

  setBrand(getPreferredBrand())

  const showActiveBrand = () => { // TODO: Finish this function.
    const brandSwitcher = document.querySelector('#bd-brand')

    if (!brandSwitcher) {
      return
    }

    document.querySelectorAll('[data-bs-brand-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })
  }

  window.addEventListener('DOMContentLoaded', () => {
    showActiveBrand(getPreferredBrand())

    document.querySelectorAll('[data-bs-brand-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const brand = toggle.getAttribute('data-bs-brand-value')
          setStoredBrand(brand)
          setBrand(brand)
          showActiveBrand(brand, true)
        })
      })
  })
})()
