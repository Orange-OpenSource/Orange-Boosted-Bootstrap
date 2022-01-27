/**
 * --------------------------------------------------------------------------
 * Boosted (v5.1.3): quantity-selector.js
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
const SELECTOR_INPUT_GROUP = '.input-group'

/**
 * Class definition
 */

class QuantitySelector extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME
  }

  // Static
  static StepUp(event) {
    event.preventDefault()
    const parent = event.target.closest(SELECTOR_INPUT_GROUP)
    const counterInput = parent.querySelector(SELECTOR_COUNTER_INPUT)
    const btnUp = parent.querySelector(SELECTOR_STEP_UP_BUTTON)
    const btnDown = parent.querySelector(SELECTOR_STEP_DOWN_BUTTON)

    const max = counterInput.getAttribute('max')
    const step = Number(counterInput.getAttribute('step'))
    const round = Number(counterInput.getAttribute('data-bs-round'))

    if (Number(counterInput.value) < max) {
      counterInput.value = (Number(counterInput.value) + step).toFixed(round).toString()
    } else if (Number(counterInput.value) + step > max) {
      btnUp.setAttribute('disabled', '')
    }

    if (btnDown.hasAttribute('disabled', '')) {
      btnDown.removeAttribute('disabled', '')
    }

    if (Number(counterInput.value) + step > max) {
      btnUp.setAttribute('disabled', '')
    }
  }

  // Public
  ValueOnLoad(element) {
    const counterInput = element.querySelector(SELECTOR_COUNTER_INPUT)
    const BTN_UP = element.querySelector(SELECTOR_STEP_UP_BUTTON)
    const BTN_DOWN = element.querySelector(SELECTOR_STEP_DOWN_BUTTON)

    const MIN = counterInput.getAttribute('min')
    const MAX = counterInput.getAttribute('max')
    const STEP = Number(counterInput.getAttribute('step'))

    if (Number(counterInput.value) - STEP < MIN) {
      BTN_DOWN.setAttribute('disabled', '')
    }

    if (Number(counterInput.value) + STEP > MAX) {
      BTN_UP.setAttribute('disabled', '')
    }
  }

  static StepDown(event) {
    event.preventDefault()
    const parent = event.target.closest(SELECTOR_INPUT_GROUP)
    const counterInput = parent.querySelector(SELECTOR_COUNTER_INPUT)
    const btnUp = parent.querySelector(SELECTOR_STEP_UP_BUTTON)
    const btnDown = parent.querySelector(SELECTOR_STEP_DOWN_BUTTON)

    const min = counterInput.getAttribute('min')
    const step = Number(counterInput.getAttribute('step'))
    const round = Number(counterInput.getAttribute('data-bs-round'))

    if (Number(counterInput.value) > min) {
      counterInput.value = (Number(counterInput.value) - step).toFixed(round).toString()
    } else if (Number(counterInput.value) + step < min) {
      btnDown.setAttribute('disabled', '')
    }

    if (btnUp.hasAttribute('disabled', '')) {
      btnUp.removeAttribute('disabled', '')
    }

    if (Number(counterInput.value) - step < min) {
      btnDown.setAttribute('disabled', '')
    }
  }

  static ValueChange(event) {
    event.preventDefault()
    const parent = event.target.closest(SELECTOR_INPUT_GROUP)
    const counterInput = parent.querySelector(SELECTOR_COUNTER_INPUT)
    const btnUp = parent.querySelector(SELECTOR_STEP_UP_BUTTON)
    const btnDown = parent.querySelector(SELECTOR_STEP_DOWN_BUTTON)

    const min = counterInput.getAttribute('min')
    const max = counterInput.getAttribute('max')
    const STEP = Number(counterInput.getAttribute('step'))

    btnUp.removeAttribute('disabled', '')
    btnDown.removeAttribute('disabled', '')

    if (Number(counterInput.value) - STEP < min) {
      btnDown.setAttribute('disabled', '')
    }

    if (Number(counterInput.value) + STEP > max) {
      btnUp.setAttribute('disabled', '')
    }
  }
}

/**
 * Data API implementation
 */

EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  for (const el of SelectorEngine.find(SELECTOR_INPUT_GROUP)) {
    QuantitySelector.getOrCreateInstance(el).ValueOnLoad(el)
  }
})
EventHandler.on(document, EVENT_CHANGE_DATA_API, SELECTOR_COUNTER_INPUT, QuantitySelector.ValueChange)
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_STEP_UP_BUTTON, QuantitySelector.StepUp)
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_STEP_DOWN_BUTTON, QuantitySelector.StepDown)

/**
 * jQuery
 */

defineJQueryPlugin(QuantitySelector)

export default QuantitySelector
