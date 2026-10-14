import { vi } from 'vitest'
import EventHandler from '../../../src/dom/event-handler.js'
import { noop } from '../../../src/util/index.js'
import Swipe from '../../../src/util/swipe.js'
import { clearFixture, getFixture } from '../../helpers/fixture.js'

describe('Swipe', () => {
  const { Simulator, PointerEvent } = window
  const originWinPointerEvent = PointerEvent
  const supportPointerEvent = Boolean(PointerEvent)

  let fixtureEl
  let swipeEl
  const clearPointerEvents = () => {
    window.PointerEvent = null
  }

  const restorePointerEvents = () => {
    window.PointerEvent = originWinPointerEvent
  }

  // The headless browser does not support touch events, so we need to fake it
  // in order to test that touch events are added properly
  const defineDocumentElementOntouchstart = () => {
    document.documentElement.ontouchstart = noop
  }

  const deleteDocumentElementOntouchstart = () => {
    delete document.documentElement.ontouchstart
  }

  const mockSwipeGesture = (element, options = {}, type = 'touch') => {
    Simulator.setType(type)
    const _options = { deltaX: 0, deltaY: 0, ...options }

    Simulator.gestures.swipe(element, _options)
  }

  beforeEach(() => {
    fixtureEl = getFixture()
    const cssStyle = [
      '<style>',
      '  #fixture .pointer-event {',
      '    touch-action: pan-y;',
      '  }',
      '  #fixture div {',
      '    width: 300px;',
      '    height: 300px;',
      '  }',
      '</style>'
    ].join('')

    fixtureEl.innerHTML = `<div id="swipeEl"></div>${cssStyle}`
    swipeEl = fixtureEl.querySelector('div')
  })

  afterEach(() => {
    clearFixture()
    deleteDocumentElementOntouchstart()
  })

  describe('constructor', () => {
    it('should add touch event listeners by default', () => {
      defineDocumentElementOntouchstart()

      vi.spyOn(Swipe.prototype, '_initEvents')
      const swipe = new Swipe(swipeEl)
      expect(swipe._initEvents).toHaveBeenCalled()
    })

    it('should not add touch event listeners if touch is not supported', () => {
      vi.spyOn(Swipe, 'isSupported').mockReturnValue(false)

      vi.spyOn(Swipe.prototype, '_initEvents')
      const swipe = new Swipe(swipeEl)

      expect(swipe._initEvents).not.toHaveBeenCalled()
    })
  })

  describe('Config', () => {
    it('Test leftCallback', () => {
      return new Promise(resolve => {
        const spyRight = vi.fn().mockName('spy')
        clearPointerEvents()
        defineDocumentElementOntouchstart()
        // eslint-disable-next-line no-new
        new Swipe(swipeEl, {
          leftCallback() {
            expect(spyRight).not.toHaveBeenCalled()
            restorePointerEvents()
            resolve()
          },
          rightCallback: spyRight
        })

        mockSwipeGesture(swipeEl, {
          pos: [300, 10],
          deltaX: -300
        })
      })
    })

    it('Test rightCallback', () => {
      return new Promise(resolve => {
        const spyLeft = vi.fn().mockName('spy')
        clearPointerEvents()
        defineDocumentElementOntouchstart()
        // eslint-disable-next-line no-new
        new Swipe(swipeEl, {
          rightCallback() {
            expect(spyLeft).not.toHaveBeenCalled()
            restorePointerEvents()
            resolve()
          },
          leftCallback: spyLeft
        })

        mockSwipeGesture(swipeEl, {
          pos: [10, 10],
          deltaX: 300
        })
      })
    })

    it('Test endCallback', () => {
      return new Promise(resolve => {
        clearPointerEvents()
        defineDocumentElementOntouchstart()
        let isFirstTime = true

        const callback = () => {
          if (isFirstTime) {
            isFirstTime = false
            return
          }

          restorePointerEvents()
          resolve()
        }

        // eslint-disable-next-line no-new
        new Swipe(swipeEl, {
          endCallback: callback
        })
        mockSwipeGesture(swipeEl, {
          pos: [10, 10],
          deltaX: 300
        })

        mockSwipeGesture(swipeEl, {
          pos: [300, 10],
          deltaX: -300
        })
      })
    })
  })

  describe('Functionality on PointerEvents', () => {
    it('should not allow pinch with touch events', () => {
      Simulator.setType('touch')
      clearPointerEvents()
      deleteDocumentElementOntouchstart()

      const swipe = new Swipe(swipeEl)
      const spy = vi.spyOn(swipe, '_handleSwipe').mockImplementation(() => {})

      mockSwipeGesture(swipeEl, {
        pos: [300, 10],
        deltaX: -300,
        deltaY: 0,
        touches: 2
      })

      restorePointerEvents()
      expect(spy).not.toHaveBeenCalled()
    })

    it('should allow swipeRight and call "rightCallback" with pointer events', () => {
      return new Promise(resolve => {
        if (!supportPointerEvent) {
          resolve()
          return
        }

        const style = '#fixture .pointer-event { touch-action: none !important; }'
        fixtureEl.innerHTML += style

        defineDocumentElementOntouchstart()
        // eslint-disable-next-line no-new
        new Swipe(swipeEl, {
          rightCallback() {
            deleteDocumentElementOntouchstart()
            resolve()
          }
        })

        mockSwipeGesture(swipeEl, { deltaX: 300 }, 'pointer')
      })
    })

    it('should allow swipeLeft and call "leftCallback" with pointer events', () => {
      return new Promise(resolve => {
        if (!supportPointerEvent) {
          resolve()
          return
        }

        const style = '#fixture .pointer-event { touch-action: none !important; }'
        fixtureEl.innerHTML += style

        defineDocumentElementOntouchstart()
        // eslint-disable-next-line no-new
        new Swipe(swipeEl, {
          leftCallback() {
            deleteDocumentElementOntouchstart()
            resolve()
          }
        })

        mockSwipeGesture(swipeEl, {
          pos: [300, 10],
          deltaX: -300
        }, 'pointer')
      })
    })
  })

  describe('Dispose', () => {
    it('should call EventHandler.off', () => {
      defineDocumentElementOntouchstart()
      vi.spyOn(EventHandler, 'off')
      const swipe = new Swipe(swipeEl)

      swipe.dispose()
      expect(EventHandler.off).toHaveBeenCalledWith(swipeEl, '.bs.swipe')
    })

    it('should destroy', () => {
      const addEventSpy = vi.spyOn(fixtureEl, 'addEventListener')
      const removeEventSpy = vi.spyOn(EventHandler, 'off')
      defineDocumentElementOntouchstart()

      const swipe = new Swipe(fixtureEl)

      const expectedArgs =
        swipe._supportPointerEvents ?
          [
            ['pointerdown', expect.any(Function), expect.any(Boolean)],
            ['pointerup', expect.any(Function), expect.any(Boolean)]
          ] :
          [
            ['touchstart', expect.any(Function), expect.any(Boolean)],
            ['touchmove', expect.any(Function), expect.any(Boolean)],
            ['touchend', expect.any(Function), expect.any(Boolean)]
          ]

      expect(addEventSpy.mock.calls).toEqual(expectedArgs)

      swipe.dispose()

      expect(removeEventSpy).toHaveBeenCalledWith(fixtureEl, '.bs.swipe')
      deleteDocumentElementOntouchstart()
    })
  })

  describe('"isSupported" static', () => {
    it('should return "true" if "touchstart" exists in document element)', () => {
      Object.defineProperty(window.navigator, 'maxTouchPoints', () => 0)
      defineDocumentElementOntouchstart()

      expect(Swipe.isSupported()).toBe(true)
    })

    it('should return "false" if "touchstart" not exists in document element and "navigator.maxTouchPoints" are zero (0)', () => {
      Object.defineProperty(window.navigator, 'maxTouchPoints', () => 0)
      deleteDocumentElementOntouchstart()

      if ('ontouchstart' in document.documentElement) {
        return
      }

      expect(Swipe.isSupported()).toBe(false)
    })
  })
})
