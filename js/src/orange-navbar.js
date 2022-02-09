import EventHandler from './dom/event-handler'
import BaseComponent from './base-component'
import SelectorEngine from './dom/selector-engine'

const NAME = 'orangenavbar'
const DATA_KEY = 'bs.orangenavbar'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'
const EVENT_SCROLL_DATA_API = `scroll${EVENT_KEY}${DATA_API_KEY}`
const SELECTOR_STICKY_TOP = '.sticky-top'

class OrangeNavbar extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME
  }

  enableMinimizing(el) {
    // The minimized behaviour works only if your header has .sticky-top (fixed-top will be sticky without minimizing)
    const Scroll = window.scrollY
    const headerChildren = [...el.children]
    const globalHeaderChild = headerChildren.find(element => !element.classList.contains('supra'))
    if (Scroll > 0) {
      // Consider first element not having .supra in array is the first header
      globalHeaderChild.classList.add('header-minimized')
    } else {
      globalHeaderChild.classList.remove('header-minimized')
    }
  }
}

EventHandler.on(document, EVENT_SCROLL_DATA_API, () => {
  for (const el of SelectorEngine.find(SELECTOR_STICKY_TOP)) {
    OrangeNavbar.getOrCreateInstance(el).enableMinimizing(el)
  }
})

export default OrangeNavbar
