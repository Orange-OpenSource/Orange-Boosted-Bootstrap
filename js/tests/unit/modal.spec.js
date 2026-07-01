import Modal from '../../src/modal.js'
import {
  clearBodyAndDocument, clearFixture, getFixture
} from '../helpers/fixture.js'

describe('Modal', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
    clearBodyAndDocument()
  })

  describe('constructor', () => {
    it('should create instance for a dialog element', () => {
      fixtureEl.innerHTML = '<dialog data-bs-role="modal" id="modal-under-test"></dialog>'

      const modalEl = fixtureEl.querySelector('dialog')
      const modal = new Modal(modalEl)

      expect(modal._element).toEqual(modalEl)
    })

    it('should throw if element is not a dialog', () => {
      fixtureEl.innerHTML = '<div id="not-dialog"></div>'

      expect(() => new Modal('#not-dialog')).toThrowError(TypeError)
    })
  })

  describe('show/hide', () => {
    it('should open and close the dialog', () => {
      fixtureEl.innerHTML = '<dialog data-bs-role="modal" id="modal-under-test"></dialog>'

      const modalEl = fixtureEl.querySelector('dialog')
      const modal = new Modal(modalEl)

      modal.show()
      expect(modalEl.open).toBeTrue()

      modal.hide()
      expect(modalEl.open).toBeFalse()
    })

    it('should restore focus to invoker when closed', done => {
      fixtureEl.innerHTML = `
        <button id="invoker">Open</button>
        <dialog data-bs-role="modal" id="modal-under-test"></dialog>
      `

      const invoker = fixtureEl.querySelector('#invoker')
      const modalEl = fixtureEl.querySelector('dialog')
      const modal = new Modal(modalEl)

      modalEl.addEventListener('hidden.bs.modal', () => {
        expect(document.activeElement).toEqual(invoker)
        done()
      })

      modal.show(invoker)
      modal.hide()
    })

    it('should not open when show event is prevented', () => {
      fixtureEl.innerHTML = '<dialog data-bs-role="modal" id="modal-under-test"></dialog>'

      const modalEl = fixtureEl.querySelector('dialog')
      const modal = new Modal(modalEl)

      modalEl.addEventListener('show.bs.modal', event => {
        event.preventDefault()
      })

      modal.show()
      expect(modalEl.open).toBeFalse()
    })
  })

  describe('invoker commands', () => {
    it('should open a dialog from command invoker', () => {
      fixtureEl.innerHTML = `
        <button type="button" commandfor="modal-under-test" command="show-modal">Open</button>
        <dialog data-bs-role="modal" id="modal-under-test"></dialog>
      `

      const trigger = fixtureEl.querySelector('[command="show-modal"]')
      const modalEl = fixtureEl.querySelector('dialog')

      trigger.click()

      expect(modalEl.open).toBeTrue()
    })

    it('should close a dialog from command invoker', () => {
      fixtureEl.innerHTML = `
        <button type="button" commandfor="modal-under-test" command="show-modal">Open</button>
        <dialog data-bs-role="modal" id="modal-under-test">
          <button type="button" commandfor="modal-under-test" command="close">Close</button>
        </dialog>
      `

      const openTrigger = fixtureEl.querySelector('[command="show-modal"]')
      const closeTrigger = fixtureEl.querySelector('[command="close"]')
      const modalEl = fixtureEl.querySelector('dialog')

      openTrigger.click()
      expect(modalEl.open).toBeTrue()

      closeTrigger.click()
      expect(modalEl.open).toBeFalse()
    })
  })
})
