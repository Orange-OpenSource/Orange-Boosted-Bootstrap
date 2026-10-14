import { vi } from 'vitest'
import EventHandler from '../../../src/dom/event-handler.js'
import SelectorEngine from '../../../src/dom/selector-engine.js'
import FocusTrap from '../../../src/util/focustrap.js'
import { clearFixture, createEvent, getFixture } from '../../helpers/fixture.js'

describe('FocusTrap', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  describe('activate', () => {
    it('should autofocus itself by default', () => {
      fixtureEl.innerHTML = '<div id="focustrap" tabindex="-1"></div>'

      const trapElement = fixtureEl.querySelector('div')

      const spy = vi.spyOn(trapElement, 'focus').mockImplementation(() => {})

      const focustrap = new FocusTrap({ trapElement })
      focustrap.activate()

      expect(spy).toHaveBeenCalled()
    })

    it('if configured not to autofocus, should not autofocus itself', () => {
      fixtureEl.innerHTML = '<div id="focustrap" tabindex="-1"></div>'

      const trapElement = fixtureEl.querySelector('div')

      const spy = vi.spyOn(trapElement, 'focus').mockImplementation(() => {})

      const focustrap = new FocusTrap({ trapElement, autofocus: false })
      focustrap.activate()

      expect(spy).not.toHaveBeenCalled()
    })

    it('should force focus inside focus trap if it can', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = [
          '<a href="#" id="outside">outside</a>',
          '<div id="focustrap" tabindex="-1">',
          '  <a href="#" id="inside">inside</a>',
          '</div>'
        ].join('')

        const trapElement = fixtureEl.querySelector('div')
        const focustrap = new FocusTrap({ trapElement })
        focustrap.activate()

        const inside = document.getElementById('inside')

        const focusInListener = () => {
          expect(spy).toHaveBeenCalled()
          document.removeEventListener('focusin', focusInListener)
          resolve()
        }

        const spy = vi.spyOn(inside, 'focus').mockImplementation(() => {})
        vi.spyOn(SelectorEngine, 'focusableChildren').mockImplementation(() => [inside])

        document.addEventListener('focusin', focusInListener)

        const focusInEvent = createEvent('focusin', { bubbles: true })
        Object.defineProperty(focusInEvent, 'target', {
          value: document.getElementById('outside')
        })

        document.dispatchEvent(focusInEvent)
      })
    })

    it('should wrap focus around forward on tab', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = [
          '<a href="#" id="outside">outside</a>',
          '<div id="focustrap" tabindex="-1">',
          '  <a href="#" id="first">first</a>',
          '  <a href="#" id="inside">inside</a>',
          '  <a href="#" id="last">last</a>',
          '</div>'
        ].join('')

        const trapElement = fixtureEl.querySelector('div')
        const focustrap = new FocusTrap({ trapElement })
        focustrap.activate()

        const first = document.getElementById('first')
        const inside = document.getElementById('inside')
        const last = document.getElementById('last')
        const outside = document.getElementById('outside')

        vi.spyOn(SelectorEngine, 'focusableChildren').mockImplementation(() => [first, inside, last])
        const spy = vi.spyOn(first, 'focus')

        const focusInListener = () => {
          expect(spy).toHaveBeenCalled()
          first.removeEventListener('focusin', focusInListener)
          resolve()
        }

        first.addEventListener('focusin', focusInListener)

        const keydown = createEvent('keydown')
        keydown.key = 'Tab'

        document.dispatchEvent(keydown)
        outside.focus()
      })
    })

    it('should wrap focus around backwards on shift-tab', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = [
          '<a href="#" id="outside">outside</a>',
          '<div id="focustrap" tabindex="-1">',
          '  <a href="#" id="first">first</a>',
          '  <a href="#" id="inside">inside</a>',
          '  <a href="#" id="last">last</a>',
          '</div>'
        ].join('')

        const trapElement = fixtureEl.querySelector('div')
        const focustrap = new FocusTrap({ trapElement })
        focustrap.activate()

        const first = document.getElementById('first')
        const inside = document.getElementById('inside')
        const last = document.getElementById('last')
        const outside = document.getElementById('outside')

        vi.spyOn(SelectorEngine, 'focusableChildren').mockImplementation(() => [first, inside, last])
        const spy = vi.spyOn(last, 'focus')

        const focusInListener = () => {
          expect(spy).toHaveBeenCalled()
          last.removeEventListener('focusin', focusInListener)
          resolve()
        }

        last.addEventListener('focusin', focusInListener)

        const keydown = createEvent('keydown')
        keydown.key = 'Tab'
        keydown.shiftKey = true

        document.dispatchEvent(keydown)
        outside.focus()
      })
    })

    it('should force focus on itself if there is no focusable content', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = [
          '<a href="#" id="outside">outside</a>',
          '<div id="focustrap" tabindex="-1"></div>'
        ].join('')

        const trapElement = fixtureEl.querySelector('div')
        const focustrap = new FocusTrap({ trapElement })
        focustrap.activate()

        const focusInListener = () => {
          expect(spy).toHaveBeenCalled()
          document.removeEventListener('focusin', focusInListener)
          resolve()
        }

        const spy = vi.spyOn(focustrap._config.trapElement, 'focus').mockImplementation(() => {})

        document.addEventListener('focusin', focusInListener)

        const focusInEvent = createEvent('focusin', { bubbles: true })
        Object.defineProperty(focusInEvent, 'target', {
          value: document.getElementById('outside')
        })

        document.dispatchEvent(focusInEvent)
      })
    })
  })

  describe('deactivate', () => {
    it('should flag itself as no longer active', () => {
      const focustrap = new FocusTrap({ trapElement: fixtureEl })
      focustrap.activate()
      expect(focustrap._isActive).toBe(true)

      focustrap.deactivate()
      expect(focustrap._isActive).toBe(false)
    })

    it('should remove all event listeners', () => {
      const focustrap = new FocusTrap({ trapElement: fixtureEl })
      focustrap.activate()

      const spy = vi.spyOn(EventHandler, 'off').mockImplementation(() => {})
      focustrap.deactivate()

      expect(spy).toHaveBeenCalled()
    })

    it('doesn\'t try removing event listeners unless it needs to (in case it hasn\'t been activated)', () => {
      const focustrap = new FocusTrap({ trapElement: fixtureEl })

      const spy = vi.spyOn(EventHandler, 'off').mockImplementation(() => {})
      focustrap.deactivate()

      expect(spy).not.toHaveBeenCalled()
    })
  })
})
