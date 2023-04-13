/**
 * --------------------------------------------------------------------------
 * Boosted quantity-selector.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import BaseComponent from './base-component.js'
import EventHandler from './dom/event-handler.js'
import SelectorEngine from './dom/selector-engine.js'
import { defineJQueryPlugin } from './util/index.js'

/**
 * Constants
 */

const NAME = 'quantityselector'
const DATA_KEY = 'bs.quantityselector'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`
const EVENT_CHANGE_DATA_API = `change${EVENT_KEY}${DATA_API_KEY}`
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`

const SELECTOR_STEP_UP_BUTTON = '[data-bs-step="up"]'
const SELECTOR_STEP_DOWN_BUTTON = '[data-bs-step="down"]'
const SELECTOR_COUNTER_INPUT = '[data-bs-step="counter"]'
const SELECTOR_QUANTITY_SELECTOR = '.input-group.quantity-selector'

/**
 * Class definition
 */

class QuantitySelector extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME
  }

  // Public
  ValueOnLoad(element) {
    const counterInput = element.querySelector(SELECTOR_COUNTER_INPUT)
    const btnUp = element.querySelector(SELECTOR_STEP_UP_BUTTON)
    const btnDown = element.querySelector(SELECTOR_STEP_DOWN_BUTTON)

    const min = counterInput.getAttribute('min')
    const max = counterInput.getAttribute('max')
    const step = Number(counterInput.getAttribute('step'))

    if (Number(counterInput.value) - step < min) {
      btnDown.setAttribute('disabled', '')
    }

    if (Number(counterInput.value) + step > max) {
      btnUp.setAttribute('disabled', '')
    }
  }

  // Static
  static StepUp(event) {
    const parent = event.target.closest(SELECTOR_QUANTITY_SELECTOR)
    const counterInput = parent.querySelector(SELECTOR_COUNTER_INPUT)

    const max = counterInput.getAttribute('max')
    const step = Number(counterInput.getAttribute('step'))
    const round = Number(counterInput.getAttribute('data-bs-round'))

    const eventChange = new Event('change')

    if (Number(counterInput.value) < max) {
      counterInput.value = (Number(counterInput.value) + step).toFixed(round).toString()
    }

    counterInput.dispatchEvent(eventChange)
  }

  static StepDown(event) {
    const parent = event.target.closest(SELECTOR_QUANTITY_SELECTOR)
    const counterInput = parent.querySelector(SELECTOR_COUNTER_INPUT)

    const min = counterInput.getAttribute('min')
    const step = Number(counterInput.getAttribute('step'))
    const round = Number(counterInput.getAttribute('data-bs-round'))

    const eventChange = new Event('change')

    if (Number(counterInput.value) > min) {
      counterInput.value = (Number(counterInput.value) - step).toFixed(round).toString()
    }

    counterInput.dispatchEvent(eventChange)
  }

  static CheckIfDisabledOnChange(event) {
    const parent = event.target.closest(SELECTOR_QUANTITY_SELECTOR)
    const counterInput = parent.querySelector(SELECTOR_COUNTER_INPUT)
    const btnUp = parent.querySelector(SELECTOR_STEP_UP_BUTTON)
    const btnDown = parent.querySelector(SELECTOR_STEP_DOWN_BUTTON)

    const min = counterInput.getAttribute('min')
    const max = counterInput.getAttribute('max')
    const step = Number(counterInput.getAttribute('step'))

    btnUp.removeAttribute('disabled', '')
    btnDown.removeAttribute('disabled', '')

    if (Number(counterInput.value) - step < min) {
      btnDown.setAttribute('disabled', '')
    }

    if (Number(counterInput.value) + step > max) {
      btnUp.setAttribute('disabled', '')
    }
  }

  static jQueryInterface(config) {
    return this.each(function () {
      const data = QuantitySelector.getOrCreateInstance(this, config)

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

EventHandler.on(document, EVENT_CHANGE_DATA_API, SELECTOR_COUNTER_INPUT, QuantitySelector.CheckIfDisabledOnChange)
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_STEP_UP_BUTTON, QuantitySelector.StepUp)
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_STEP_DOWN_BUTTON, QuantitySelector.StepDown)

EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  for (const el of SelectorEngine.find(SELECTOR_QUANTITY_SELECTOR)) {
    QuantitySelector.getOrCreateInstance(el).ValueOnLoad(el)
  }
})

/**
 * jQuery
 */

defineJQueryPlugin(QuantitySelector)

export default QuantitySelector
