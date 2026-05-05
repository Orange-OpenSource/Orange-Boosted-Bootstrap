/**
 * --------------------------------------------------------------------------
 * Bootstrap button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import BaseComponent from './base-component.js'
import EventHandler from './dom/event-handler.js'
import { defineJQueryPlugin } from './util/index.js'

/**
 * Constants
 */

const NAME = 'button'
const DATA_KEY = 'bs.button'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const CLASS_NAME_ACTIVE = 'active'
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="button"]'
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`

/**
 * Class definition
 */

class Button extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME
  }

  // Public
  toggle() {
    // OUDS mod: Determine current pressed state from aria-pressed attribute if present or active class as a fallback (deprecated pattern)
    const ariaPressed = this._element.getAttribute('aria-pressed')
    const hasActiveClass = this._element.classList.contains(CLASS_NAME_ACTIVE)

    // Determine new pressed state
    let newPressedState
    // eslint-disable-next-line unicorn/prefer-ternary
    if (ariaPressed === 'true' || ariaPressed === 'false') {
      // Toggle existing aria-pressed value
      newPressedState = ariaPressed !== 'true'
    } else {
      // Convert active class presence to aria-pressed state
      newPressedState = !hasActiveClass
    }

    // Update aria-pressed attribute
    this._element.setAttribute('aria-pressed', String(newPressedState))

    // Remove active class (deprecated pattern)
    if (hasActiveClass) {
      this._element.classList.remove(CLASS_NAME_ACTIVE)
    }
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Button.getOrCreateInstance(this)

      if (config === 'toggle') {
        data[config]()
      }
    })
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, event => {
  event.preventDefault()

  const button = event.target.closest(SELECTOR_DATA_TOGGLE)
  const data = Button.getOrCreateInstance(button)

  data.toggle()
})

/**
 * jQuery
 */

defineJQueryPlugin(Button)

export default Button
