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
    const PARENT = event.target.closest(SELECTOR_INPUT_GROUP)
    const COUNTER_INPUT = PARENT.querySelector(SELECTOR_COUNTER_INPUT)
    const BTN_UP = PARENT.querySelector(SELECTOR_STEP_UP_BUTTON)
    const BTN_DOWN = PARENT.querySelector(SELECTOR_STEP_DOWN_BUTTON)

    const MAX = COUNTER_INPUT.getAttribute('max')
    const STEP = Number(COUNTER_INPUT.getAttribute('step'))
    const ROUND = Number(COUNTER_INPUT.getAttribute('data-bs-round'))

    if (Number(COUNTER_INPUT.value) < MAX) {
      COUNTER_INPUT.value = (Number(COUNTER_INPUT.value) + STEP).toFixed(ROUND).toString()
    } else if (Number(COUNTER_INPUT.value) + STEP > MAX) {
      BTN_UP.setAttribute('disabled', '')
    }

    if (BTN_DOWN.hasAttribute('disabled', '')) {
      BTN_DOWN.removeAttribute('disabled', '')
    }

    if (Number(COUNTER_INPUT.value) + STEP > MAX) {
      BTN_UP.setAttribute('disabled', '')
    }
  }

  static StepDown(event) {
    event.preventDefault()
    const PARENT = event.target.closest(SELECTOR_INPUT_GROUP)
    const COUNTER_INPUT = PARENT.querySelector(SELECTOR_COUNTER_INPUT)
    const BTN_UP = PARENT.querySelector(SELECTOR_STEP_UP_BUTTON)
    const BTN_DOWN = PARENT.querySelector(SELECTOR_STEP_DOWN_BUTTON)

    const MIN = COUNTER_INPUT.getAttribute('min')
    const STEP = Number(COUNTER_INPUT.getAttribute('step'))
    const ROUND = Number(COUNTER_INPUT.getAttribute('data-bs-round'))

    if (Number(COUNTER_INPUT.value) > MIN) {
      COUNTER_INPUT.value = (Number(COUNTER_INPUT.value) - STEP).toFixed(ROUND).toString()
    } else if (Number(COUNTER_INPUT.value) + STEP < MIN) {
      BTN_DOWN.setAttribute('disabled', '')
    }

    if (BTN_UP.hasAttribute('disabled', '')) {
      BTN_UP.removeAttribute('disabled', '')
    }

    if (Number(COUNTER_INPUT.value) - STEP < MIN) {
      BTN_DOWN.setAttribute('disabled', '')
    }
  }

  static ValueChange(event) {
    event.preventDefault()
    const PARENT = event.target.closest(SELECTOR_INPUT_GROUP)
    const COUNTER_INPUT = PARENT.querySelector(SELECTOR_COUNTER_INPUT)
    const BTN_UP = PARENT.querySelector(SELECTOR_STEP_UP_BUTTON)
    const BTN_DOWN = PARENT.querySelector(SELECTOR_STEP_DOWN_BUTTON)

    const MIN = COUNTER_INPUT.getAttribute('min')
    const MAX = COUNTER_INPUT.getAttribute('max')
    const STEP = Number(COUNTER_INPUT.getAttribute('step'))

    BTN_UP.removeAttribute('disabled', '')
    BTN_DOWN.removeAttribute('disabled', '')

    if (Number(COUNTER_INPUT.value) - STEP < MIN) {
      BTN_DOWN.setAttribute('disabled', '')
    }

    if (Number(COUNTER_INPUT.value) + STEP > MAX) {
      BTN_UP.setAttribute('disabled', '')
    }
  }

  // Static
  ValueOnLoad(el) {
    const COUNTER_INPUT = el.querySelector(SELECTOR_COUNTER_INPUT)
    const BTN_UP = el.querySelector(SELECTOR_STEP_UP_BUTTON)
    const BTN_DOWN = el.querySelector(SELECTOR_STEP_DOWN_BUTTON)

    const MIN = COUNTER_INPUT.getAttribute('min')
    const MAX = COUNTER_INPUT.getAttribute('max')
    const STEP = Number(COUNTER_INPUT.getAttribute('step'))

    if (Number(COUNTER_INPUT.value) - STEP < MIN) {
      BTN_DOWN.setAttribute('disabled', '')
    }

    if (Number(COUNTER_INPUT.value) + STEP > MAX) {
      BTN_UP.setAttribute('disabled', '')
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
