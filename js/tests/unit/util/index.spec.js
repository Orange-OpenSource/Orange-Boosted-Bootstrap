import { vi } from 'vitest'
import * as Util from '../../../src/util/index.js'
import { noop } from '../../../src/util/index.js'
import { clearFixture, getFixture } from '../../helpers/fixture.js'

describe('Util', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  describe('getUID', () => {
    it('should generate uid', () => {
      const uid = Util.getUID('bs')
      const uid2 = Util.getUID('bs')

      expect(uid).not.toEqual(uid2)
    })
  })

  describe('getTransitionDurationFromElement', () => {
    it('should get transition from element', () => {
      fixtureEl.innerHTML = '<div style="transition: all 300ms ease-out;"></div>'

      expect(Util.getTransitionDurationFromElement(fixtureEl.querySelector('div'))).toEqual(300)
    })

    it('should return 0 if the element is undefined or null', () => {
      expect(Util.getTransitionDurationFromElement(null)).toEqual(0)
      expect(Util.getTransitionDurationFromElement(undefined)).toEqual(0)
    })

    it('should return 0 if the element do not possess transition', () => {
      fixtureEl.innerHTML = '<div></div>'

      expect(Util.getTransitionDurationFromElement(fixtureEl.querySelector('div'))).toEqual(0)
    })
  })

  describe('triggerTransitionEnd', () => {
    it('should trigger transitionend event', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = '<div></div>'

        const el = fixtureEl.querySelector('div')
        const spy = vi.spyOn(el, 'dispatchEvent')

        el.addEventListener('transitionend', () => {
          expect(spy).toHaveBeenCalled()
          resolve()
        })

        Util.triggerTransitionEnd(el)
      })
    })
  })

  describe('isElement', () => {
    it('should detect if the parameter is an element or not and return Boolean', () => {
      fixtureEl.innerHTML = [
        '<div id="foo" class="test"></div>',
        '<div id="bar" class="test"></div>'
      ].join('')

      const el = fixtureEl.querySelector('#foo')

      expect(Util.isElement(el)).toBe(true)
      expect(Util.isElement({})).toBe(false)
      expect(Util.isElement(fixtureEl.querySelectorAll('.test'))).toBe(false)
    })
  })

  describe('getElement', () => {
    it('should try to parse element', () => {
      fixtureEl.innerHTML = [
        '<div id="foo" class="test"></div>',
        '<div id="bar" class="test"></div>'
      ].join('')

      const el = fixtureEl.querySelector('div')

      expect(Util.getElement(el)).toEqual(el)
      expect(Util.getElement('#foo')).toEqual(el)
      expect(Util.getElement('#fail')).toBeNull()
      expect(Util.getElement({})).toBeNull()
      expect(Util.getElement([])).toBeNull()
      expect(Util.getElement()).toBeNull()
      expect(Util.getElement(null)).toBeNull()
      expect(Util.getElement(fixtureEl.querySelectorAll('.test'))).toBeNull()
    })
  })

  describe('isVisible', () => {
    it('should return false if the element is not defined', () => {
      expect(Util.isVisible(null)).toBe(false)
      expect(Util.isVisible(undefined)).toBe(false)
    })

    it('should return false if the element provided is not a dom element', () => {
      expect(Util.isVisible({})).toBe(false)
    })

    it('should return false if the element is not visible with display none', () => {
      fixtureEl.innerHTML = '<div style="display: none;"></div>'

      const div = fixtureEl.querySelector('div')

      expect(Util.isVisible(div)).toBe(false)
    })

    it('should return false if the element is not visible with visibility hidden', () => {
      fixtureEl.innerHTML = '<div style="visibility: hidden;"></div>'

      const div = fixtureEl.querySelector('div')

      expect(Util.isVisible(div)).toBe(false)
    })

    it('should return false if an ancestor element is display none', () => {
      fixtureEl.innerHTML = [
        '<div style="display: none;">',
        '  <div>',
        '    <div>',
        '      <div class="content"></div>',
        '    </div>',
        '  </div>',
        '</div>'
      ].join('')

      const div = fixtureEl.querySelector('.content')

      expect(Util.isVisible(div)).toBe(false)
    })

    it('should return false if an ancestor element is visibility hidden', () => {
      fixtureEl.innerHTML = [
        '<div style="visibility: hidden;">',
        '  <div>',
        '    <div>',
        '      <div class="content"></div>',
        '    </div>',
        '  </div>',
        '</div>'
      ].join('')

      const div = fixtureEl.querySelector('.content')

      expect(Util.isVisible(div)).toBe(false)
    })

    it('should return true if an ancestor element is visibility hidden, but reverted', () => {
      fixtureEl.innerHTML = [
        '<div style="visibility: hidden;">',
        '  <div style="visibility: visible;">',
        '    <div>',
        '      <div class="content"></div>',
        '    </div>',
        '  </div>',
        '</div>'
      ].join('')

      const div = fixtureEl.querySelector('.content')

      expect(Util.isVisible(div)).toBe(true)
    })

    it('should return true if the element is visible', () => {
      fixtureEl.innerHTML = [
        '<div>',
        '  <div id="element"></div>',
        '</div>'
      ].join('')

      const div = fixtureEl.querySelector('#element')

      expect(Util.isVisible(div)).toBe(true)
    })

    it('should return false if the element is hidden, but not via display or visibility', () => {
      fixtureEl.innerHTML = [
        '<details>',
        '  <div id="element"></div>',
        '</details>'
      ].join('')

      const div = fixtureEl.querySelector('#element')

      expect(Util.isVisible(div)).toBe(false)
    })

    it('should return true if its a closed details element', () => {
      fixtureEl.innerHTML = '<details id="element"></details>'

      const div = fixtureEl.querySelector('#element')

      expect(Util.isVisible(div)).toBe(true)
    })

    it('should return true if the element is visible inside an open details element', () => {
      fixtureEl.innerHTML = [
        '<details open>',
        '  <div id="element"></div>',
        '</details>'
      ].join('')

      const div = fixtureEl.querySelector('#element')

      expect(Util.isVisible(div)).toBe(true)
    })

    it('should return true if the element is a visible summary in a closed details element', () => {
      fixtureEl.innerHTML = [
        '<details>',
        '  <summary id="element-1">',
        '    <span id="element-2"></span>',
        '  </summary>',
        '</details>'
      ].join('')

      const element1 = fixtureEl.querySelector('#element-1')
      const element2 = fixtureEl.querySelector('#element-2')

      expect(Util.isVisible(element1)).toBe(true)
      expect(Util.isVisible(element2)).toBe(true)
    })
  })

  describe('isDisabled', () => {
    it('should return true if the element is not defined', () => {
      expect(Util.isDisabled(null)).toBe(true)
      expect(Util.isDisabled(undefined)).toBe(true)
      expect(Util.isDisabled()).toBe(true)
    })

    it('should return true if the element provided is not a dom element', () => {
      expect(Util.isDisabled({})).toBe(true)
      expect(Util.isDisabled('test')).toBe(true)
    })

    it('should return true if the element has disabled attribute', () => {
      fixtureEl.innerHTML = [
        '<div>',
        '  <div id="element" disabled="disabled"></div>',
        '  <div id="element1" disabled="true"></div>',
        '  <div id="element2" disabled></div>',
        '</div>'
      ].join('')

      const div = fixtureEl.querySelector('#element')
      const div1 = fixtureEl.querySelector('#element1')
      const div2 = fixtureEl.querySelector('#element2')

      expect(Util.isDisabled(div)).toBe(true)
      expect(Util.isDisabled(div1)).toBe(true)
      expect(Util.isDisabled(div2)).toBe(true)
    })

    it('should return false if the element has disabled attribute with "false" value, or doesn\'t have attribute', () => {
      fixtureEl.innerHTML = [
        '<div>',
        '  <div id="element" disabled="false"></div>',
        '  <div id="element1" ></div>',
        '</div>'
      ].join('')

      const div = fixtureEl.querySelector('#element')
      const div1 = fixtureEl.querySelector('#element1')

      expect(Util.isDisabled(div)).toBe(false)
      expect(Util.isDisabled(div1)).toBe(false)
    })

    it('should return false if the element is not disabled ', () => {
      fixtureEl.innerHTML = [
        '<div>',
        '  <button id="button"></button>',
        '  <select id="select"></select>',
        '  <select id="input"></select>',
        '</div>'
      ].join('')

      const el = selector => fixtureEl.querySelector(selector)

      expect(Util.isDisabled(el('#button'))).toBe(false)
      expect(Util.isDisabled(el('#select'))).toBe(false)
      expect(Util.isDisabled(el('#input'))).toBe(false)
    })

    it('should return true if the element has disabled attribute', () => {
      fixtureEl.innerHTML = [
        '<div>',
        '  <input id="input" disabled="disabled" />',
        '  <input id="input1" disabled="disabled" />',
        '  <button id="button" disabled="true"></button>',
        '  <button id="button1" disabled="disabled"></button>',
        '  <button id="button2" disabled></button>',
        '  <select id="select" disabled></select>',
        '  <select id="input" disabled></select>',
        '</div>'
      ].join('')

      const el = selector => fixtureEl.querySelector(selector)

      expect(Util.isDisabled(el('#input'))).toBe(true)
      expect(Util.isDisabled(el('#input1'))).toBe(true)
      expect(Util.isDisabled(el('#button'))).toBe(true)
      expect(Util.isDisabled(el('#button1'))).toBe(true)
      expect(Util.isDisabled(el('#button2'))).toBe(true)
      expect(Util.isDisabled(el('#input'))).toBe(true)
    })

    it('should return true if the element has class "disabled"', () => {
      fixtureEl.innerHTML = [
        '<div>',
        '  <div id="element" class="disabled"></div>',
        '</div>'
      ].join('')

      const div = fixtureEl.querySelector('#element')

      expect(Util.isDisabled(div)).toBe(true)
    })

    it('should return true if the element has class "disabled" but disabled attribute is false', () => {
      fixtureEl.innerHTML = [
        '<div>',
        '  <input id="input" class="disabled" disabled="false" />',
        '</div>'
      ].join('')

      const div = fixtureEl.querySelector('#input')

      expect(Util.isDisabled(div)).toBe(true)
    })
  })

  describe('findShadowRoot', () => {
    it('should return null if shadow dom is not available', () => {
      // Only for newer browsers
      if (!document.documentElement.attachShadow) {
        return
      }

      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')

      vi.spyOn(document.documentElement, 'attachShadow').mockReturnValue(null)

      expect(Util.findShadowRoot(div)).toBeNull()
    })

    it('should return null when we do not find a shadow root', () => {
      // Only for newer browsers
      if (!document.documentElement.attachShadow) {
        return
      }

      vi.spyOn(document, 'getRootNode').mockReturnValue(undefined)

      expect(Util.findShadowRoot(document)).toBeNull()
    })

    it('should return the shadow root when found', () => {
      // Only for newer browsers
      if (!document.documentElement.attachShadow) {
        return
      }

      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')
      const shadowRoot = div.attachShadow({
        mode: 'open'
      })

      expect(Util.findShadowRoot(shadowRoot)).toEqual(shadowRoot)

      shadowRoot.innerHTML = '<button>Shadow Button</button>'

      expect(Util.findShadowRoot(shadowRoot.firstChild)).toEqual(shadowRoot)
    })
  })

  describe('noop', () => {
    it('should be a function', () => {
      expect(Util.noop).toEqual(expect.any(Function))
    })
  })

  describe('reflow', () => {
    it('should return element offset height to force the reflow', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')
      const spy = vi.spyOn(div, 'offsetHeight', 'get').mockImplementation(() => {})
      Util.reflow(div)
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('onDOMContentLoaded', () => {
    it('should execute callbacks when DOMContentLoaded is fired and should not add more than one listener', () => {
      const spy = vi.fn()
      const spy2 = vi.fn()

      const spyAdd = vi.spyOn(document, 'addEventListener')
      vi.spyOn(document, 'readyState', 'get').mockReturnValue('loading')

      Util.onDOMContentLoaded(spy)
      Util.onDOMContentLoaded(spy2)

      document.dispatchEvent(new Event('DOMContentLoaded', {
        bubbles: true,
        cancelable: true
      }))

      expect(spy).toHaveBeenCalled()
      expect(spy2).toHaveBeenCalled()
      expect(spyAdd).toHaveBeenCalledTimes(1)
    })

    it('should execute callback if readyState is not "loading"', () => {
      const spy = vi.fn()
      Util.onDOMContentLoaded(spy)
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('execute', () => {
    it('should execute if arg is function', () => {
      const spy = vi.fn().mockName('spy')
      Util.execute(spy)
      expect(spy).toHaveBeenCalled()
    })

    it('should execute if arg is function & return the result', () => {
      const functionFoo = (num1, num2 = 10) => num1 + num2
      const resultFoo = Util.execute(functionFoo, [undefined, 4, 5])
      expect(resultFoo).toBe(9)

      const resultFoo1 = Util.execute(functionFoo, [undefined, 4])
      expect(resultFoo1).toBe(14)

      const functionBar = () => 'foo'
      const resultBar = Util.execute(functionBar)
      expect(resultBar).toBe('foo')
    })

    it('should not execute if arg is not function & return default argument', () => {
      const foo = 'bar'
      expect(Util.execute(foo)).toBe('bar')
      expect(Util.execute(foo, [], 4)).toBe(4)
    })
  })

  describe('executeAfterTransition', () => {
    it('should immediately execute a function when waitForTransition parameter is false', () => {
      const el = document.createElement('div')
      const callbackSpy = vi.fn().mockName('callback spy')
      const eventListenerSpy = vi.spyOn(el, 'addEventListener').mockImplementation(() => {})

      Util.executeAfterTransition(callbackSpy, el, false)

      expect(callbackSpy).toHaveBeenCalled()
      expect(eventListenerSpy).not.toHaveBeenCalled()
    })

    it('should execute a function when a transitionend event is dispatched', () => {
      const el = document.createElement('div')
      const callbackSpy = vi.fn().mockName('callback spy')

      vi.spyOn(window, 'getComputedStyle').mockReturnValue({
        transitionDuration: '0.05s',
        transitionDelay: '0s'
      })

      Util.executeAfterTransition(callbackSpy, el)

      el.dispatchEvent(new TransitionEvent('transitionend'))

      expect(callbackSpy).toHaveBeenCalled()
    })

    it('should execute a function after a computed CSS transition duration and there was no transitionend event dispatched', () => {
      return new Promise(resolve => {
        const el = document.createElement('div')
        const callbackSpy = vi.fn().mockName('callback spy')

        vi.spyOn(window, 'getComputedStyle').mockReturnValue({
          transitionDuration: '0.05s',
          transitionDelay: '0s'
        })

        Util.executeAfterTransition(callbackSpy, el)

        setTimeout(() => {
          expect(callbackSpy).toHaveBeenCalled()
          resolve()
        }, 70)
      })
    })

    it('should not execute a function a second time after a computed CSS transition duration and if a transitionend event has already been dispatched', () => {
      return new Promise(resolve => {
        const el = document.createElement('div')
        const callbackSpy = vi.fn().mockName('callback spy')

        vi.spyOn(window, 'getComputedStyle').mockReturnValue({
          transitionDuration: '0.05s',
          transitionDelay: '0s'
        })

        Util.executeAfterTransition(callbackSpy, el)

        setTimeout(() => {
          el.dispatchEvent(new TransitionEvent('transitionend'))
        }, 50)

        setTimeout(() => {
          expect(callbackSpy).toHaveBeenCalledTimes(1)
          resolve()
        }, 70)
      })
    })

    it('should not trigger a transitionend event if another transitionend event had already happened', () => {
      return new Promise(resolve => {
        const el = document.createElement('div')

        vi.spyOn(window, 'getComputedStyle').mockReturnValue({
          transitionDuration: '0.05s',
          transitionDelay: '0s'
        })

        Util.executeAfterTransition(noop, el)

        // simulate a event dispatched by the browser
        el.dispatchEvent(new TransitionEvent('transitionend'))

        const dispatchSpy = vi.spyOn(el, 'dispatchEvent')

        setTimeout(() => {
          // setTimeout should not have triggered another transitionend event.
          expect(dispatchSpy).not.toHaveBeenCalled()
          resolve()
        }, 70)
      })
    })

    it('should ignore transitionend events from nested elements', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = [
          '<div class="outer">',
          '  <div class="nested"></div>',
          '</div>'
        ].join('')

        const outer = fixtureEl.querySelector('.outer')
        const nested = fixtureEl.querySelector('.nested')
        const callbackSpy = vi.fn().mockName('callback spy')

        vi.spyOn(window, 'getComputedStyle').mockReturnValue({
          transitionDuration: '0.05s',
          transitionDelay: '0s'
        })

        Util.executeAfterTransition(callbackSpy, outer)

        nested.dispatchEvent(new TransitionEvent('transitionend', {
          bubbles: true
        }))

        setTimeout(() => {
          expect(callbackSpy).not.toHaveBeenCalled()
        }, 20)

        setTimeout(() => {
          expect(callbackSpy).toHaveBeenCalled()
          resolve()
        }, 70)
      })
    })
  })

  describe('getNextActiveElement', () => {
    it('should return first element if active not exists or not given and shouldGetNext is either true, or false with cycling being disabled', () => {
      const array = ['a', 'b', 'c', 'd']

      expect(Util.getNextActiveElement(array, '', true, true)).toEqual('a')
      expect(Util.getNextActiveElement(array, 'g', true, true)).toEqual('a')
      expect(Util.getNextActiveElement(array, '', true, false)).toEqual('a')
      expect(Util.getNextActiveElement(array, 'g', true, false)).toEqual('a')
      expect(Util.getNextActiveElement(array, '', false, false)).toEqual('a')
      expect(Util.getNextActiveElement(array, 'g', false, false)).toEqual('a')
    })

    it('should return last element if active not exists or not given and shouldGetNext is false but cycling is enabled', () => {
      const array = ['a', 'b', 'c', 'd']

      expect(Util.getNextActiveElement(array, '', false, true)).toEqual('d')
      expect(Util.getNextActiveElement(array, 'g', false, true)).toEqual('d')
    })

    it('should return next element or same if is last', () => {
      const array = ['a', 'b', 'c', 'd']

      expect(Util.getNextActiveElement(array, 'a', true, true)).toEqual('b')
      expect(Util.getNextActiveElement(array, 'b', true, true)).toEqual('c')
      expect(Util.getNextActiveElement(array, 'd', true, false)).toEqual('d')
    })

    it('should return next element or first, if is last and "isCycleAllowed = true"', () => {
      const array = ['a', 'b', 'c', 'd']

      expect(Util.getNextActiveElement(array, 'c', true, true)).toEqual('d')
      expect(Util.getNextActiveElement(array, 'd', true, true)).toEqual('a')
    })

    it('should return previous element or same if is first', () => {
      const array = ['a', 'b', 'c', 'd']

      expect(Util.getNextActiveElement(array, 'b', false, true)).toEqual('a')
      expect(Util.getNextActiveElement(array, 'd', false, true)).toEqual('c')
      expect(Util.getNextActiveElement(array, 'a', false, false)).toEqual('a')
    })

    it('should return next element or first, if is last and "isCycleAllowed = true"', () => {
      const array = ['a', 'b', 'c', 'd']

      expect(Util.getNextActiveElement(array, 'd', false, true)).toEqual('c')
      expect(Util.getNextActiveElement(array, 'a', false, true)).toEqual('d')
    })
  })
})
