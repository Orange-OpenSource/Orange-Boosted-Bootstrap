import BaseComponent from './base-component.js'
import EventHandler from './dom/event-handler.js'
import { isVisible } from './util/index.js'

const NAME = 'modal'
const DATA_KEY = 'bs.modal'
const EVENT_KEY = `.${DATA_KEY}`

const EVENT_SHOW = `show${EVENT_KEY}`
const EVENT_SHOWN = `shown${EVENT_KEY}`
const EVENT_HIDE = `hide${EVENT_KEY}`
const EVENT_HIDDEN = `hidden${EVENT_KEY}`

const EVENT_CLICK = `click${EVENT_KEY}.data-api`

const SELECTOR_DIALOG = 'dialog[data-bs-role="modal"]'
const SELECTOR_INVOKER = 'button[commandfor][command]'

const COMMAND_OPEN = 'show-modal'
const COMMAND_CLOSE = new Set(['close', 'request-close'])

const Default = {
  restoreFocus: true
}

const DefaultType = {
  restoreFocus: 'boolean'
}

const supportsNativeCommands = () => {
  const proto = globalThis.HTMLButtonElement?.prototype
  return Boolean(proto?.command && proto?.commandForElement)
}

let fallbackWired = false

const resolveDialogFromInvoker = invoker => {
  const id = invoker?.getAttribute('commandfor')
  if (!id) {
    return null
  }

  const candidate = document.getElementById(id)
  return candidate instanceof HTMLDialogElement ? candidate : null
}

const emitLifecycle = (dialog, eventName, payload = {}) => EventHandler.trigger(dialog, eventName, payload)

const attachStaticBackdropBehavior = () => {
  EventHandler.on(document, EVENT_CLICK, SELECTOR_DIALOG, event => {
    const dialog = event.delegateTarget ?? event.target
    if (!(dialog instanceof HTMLDialogElement)) {
      return
    }

    if (event.target === dialog && dialog.hasAttribute('data-bs-backdrop-static')) {
      event.preventDefault()
    }
  })
}

const attachFallbackInvokerBehavior = () => {
  EventHandler.on(document, EVENT_CLICK, SELECTOR_INVOKER, event => {
    const invoker = event.delegateTarget ?? event.target.closest(SELECTOR_INVOKER)
    const targetDialog = resolveDialogFromInvoker(invoker)
    if (!targetDialog) {
      return
    }

    const command = invoker.getAttribute('command')
    const api = Modal.getOrCreateInstance(targetDialog)

    if (command === COMMAND_OPEN) {
      event.preventDefault()
      api.show(invoker)
      return
    }

    if (COMMAND_CLOSE.has(command)) {
      event.preventDefault()
      api.hide(invoker?.value ?? '')
    }
  })
}

const ensureGlobalBehavior = () => {
  if (fallbackWired) {
    return
  }

  attachStaticBackdropBehavior()

  if (!supportsNativeCommands()) {
    attachFallbackInvokerBehavior()
  }

  fallbackWired = true
}

class Modal extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    if (!this._element) {
      return
    }

    if (!(this._element instanceof HTMLDialogElement)) {
      throw new TypeError('Modal expects a dialog element')
    }

    this._triggerElement = null
    ensureGlobalBehavior()
    this._bindDialogEvents()
  }

  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  show(triggerElement = null) {
    if (this._element.open) {
      return
    }

    const lifecycleEvent = emitLifecycle(this._element, EVENT_SHOW, {
      relatedTarget: triggerElement
    })

    if (lifecycleEvent.defaultPrevented) {
      return
    }

    this._triggerElement = triggerElement
    this._element.showModal()

    emitLifecycle(this._element, EVENT_SHOWN, {
      relatedTarget: triggerElement
    })
  }

  hide(returnValue = '') {
    if (!this._element.open) {
      return
    }

    const lifecycleEvent = emitLifecycle(this._element, EVENT_HIDE)
    if (lifecycleEvent.defaultPrevented) {
      return
    }

    this._element.close(returnValue)
  }

  toggle(triggerElement = null) {
    if (this._element.open) {
      this.hide()
      return
    }

    this.show(triggerElement)
  }

  dispose() {
    EventHandler.off(this._element, EVENT_KEY)
    super.dispose()
  }

  _bindDialogEvents() {
    EventHandler.on(this._element, 'close', () => {
      if (this._config.restoreFocus && this._triggerElement && isVisible(this._triggerElement)) {
        this._triggerElement.focus()
      }

      this._triggerElement = null
      emitLifecycle(this._element, EVENT_HIDDEN)
    })
  }
}

export default Modal
