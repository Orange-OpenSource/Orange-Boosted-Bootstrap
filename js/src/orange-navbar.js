/**
 * --------------------------------------------------------------------------
 * Boosted (v5.2.3): orange-navbar.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import { defineJQueryPlugin } from './util/index'
import EventHandler from './dom/event-handler'
import BaseComponent from './base-component'
import SelectorEngine from './dom/selector-engine'

/**
 * Constants
 */

const NAME = 'orangenavbar'
const DATA_KEY = 'bs.orangenavbar'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'
const EVENT_SCROLL_DATA_API = `scroll${EVENT_KEY}${DATA_API_KEY}`
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`
const SELECTOR_STICKY_TOP = 'header.sticky-top'

/**
 * Class definition
 */

class OrangeNavbar extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME
  }

  // Static
  static enableMinimizing(el) {
    // The minimized behaviour works only if your header has .sticky-top (fixed-top will be sticky without minimizing)
    const scroll = window.scrollY
    const headerChildren = [...el.children]
    const globalHeaderChild = headerChildren.find(element => !element.classList.contains('supra'))

    if (globalHeaderChild) {
      if (scroll > 0) {
        // Consider first element not having .supra in array is the first header
        globalHeaderChild.classList.add('header-minimized')
      } else {
        globalHeaderChild.classList.remove('header-minimized')
      }
    }
  }

  static jQueryInterface(config) {
    return this.each(function () {
      const data = OrangeNavbar.getOrCreateInstance(this, config)

      if (typeof config !== 'string') {
        return
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config]()
    })
  }
}

/**
 * Data API implementation
 */

EventHandler.on(window, EVENT_SCROLL_DATA_API, () => {
  for (const el of SelectorEngine.find(SELECTOR_STICKY_TOP)) {
    OrangeNavbar.enableMinimizing(el)
  }
})

EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  for (const el of SelectorEngine.find(SELECTOR_STICKY_TOP)) {
    OrangeNavbar.enableMinimizing(el)
  }
})

/**
 * jQuery
 */

defineJQueryPlugin(OrangeNavbar)

export default OrangeNavbar
