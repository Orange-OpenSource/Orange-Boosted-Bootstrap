import { vi } from 'vitest'
import Backdrop from '../../../src/util/backdrop.js'
import { getTransitionDurationFromElement } from '../../../src/util/index.js'
import { clearFixture, getFixture } from '../../helpers/fixture.js'

const CLASS_BACKDROP = '.modal-backdrop'
const CLASS_NAME_FADE = 'fade'
const CLASS_NAME_SHOW = 'show'

describe('Backdrop', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
    const list = document.querySelectorAll(CLASS_BACKDROP)

    for (const el of list) {
      el.remove()
    }
  })

  describe('show', () => {
    it('should append the backdrop html once on show and include the "show" class if it is "shown"', () => {
      return new Promise(resolve => {
        const instance = new Backdrop({
          isVisible: true,
          isAnimated: false
        })
        const getElements = () => document.querySelectorAll(CLASS_BACKDROP)

        expect(getElements()).toHaveSize(0)

        instance.show()
        instance.show(() => {
          expect(getElements()).toHaveSize(1)
          for (const el of getElements()) {
            expect(el).toHaveClass(CLASS_NAME_SHOW)
          }

          resolve()
        })
      })
    })

    it('should not append the backdrop html if it is not "shown"', () => {
      return new Promise(resolve => {
        const instance = new Backdrop({
          isVisible: false,
          isAnimated: true
        })
        const getElements = () => document.querySelectorAll(CLASS_BACKDROP)

        expect(getElements()).toHaveSize(0)
        instance.show(() => {
          expect(getElements()).toHaveSize(0)
          resolve()
        })
      })
    })

    it('should append the backdrop html once and include the "fade" class if it is "shown" and "animated"', () => {
      return new Promise(resolve => {
        const instance = new Backdrop({
          isVisible: true,
          isAnimated: true
        })
        const getElements = () => document.querySelectorAll(CLASS_BACKDROP)

        expect(getElements()).toHaveSize(0)

        instance.show(() => {
          expect(getElements()).toHaveSize(1)
          for (const el of getElements()) {
            expect(el).toHaveClass(CLASS_NAME_FADE)
          }

          resolve()
        })
      })
    })
  })

  describe('hide', () => {
    it('should remove the backdrop html', () => {
      return new Promise(resolve => {
        const instance = new Backdrop({
          isVisible: true,
          isAnimated: true
        })

        const getElements = () => document.body.querySelectorAll(CLASS_BACKDROP)

        expect(getElements()).toHaveSize(0)
        instance.show(() => {
          expect(getElements()).toHaveSize(1)
          instance.hide(() => {
            expect(getElements()).toHaveSize(0)
            resolve()
          })
        })
      })
    })

    it('should remove the "show" class', () => {
      return new Promise(resolve => {
        const instance = new Backdrop({
          isVisible: true,
          isAnimated: true
        })
        const elem = instance._getElement()

        instance.show()
        instance.hide(() => {
          expect(elem).not.toHaveClass(CLASS_NAME_SHOW)
          resolve()
        })
      })
    })

    it('should not try to remove Node on remove method if it is not "shown"', () => {
      return new Promise(resolve => {
        const instance = new Backdrop({
          isVisible: false,
          isAnimated: true
        })
        const getElements = () => document.querySelectorAll(CLASS_BACKDROP)
        const spy = vi.spyOn(instance, 'dispose')

        expect(getElements()).toHaveSize(0)
        expect(instance._isAppended).toBe(false)
        instance.show(() => {
          instance.hide(() => {
            expect(getElements()).toHaveSize(0)
            expect(spy).not.toHaveBeenCalled()
            expect(instance._isAppended).toBe(false)
            resolve()
          })
        })
      })
    })

    it('should not error if the backdrop no longer has a parent', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = '<div id="wrapper"></div>'

        const wrapper = fixtureEl.querySelector('#wrapper')
        const instance = new Backdrop({
          isVisible: true,
          isAnimated: true,
          rootElement: wrapper
        })

        const getElements = () => document.querySelectorAll(CLASS_BACKDROP)

        instance.show(() => {
          wrapper.remove()
          instance.hide(() => {
            expect(getElements()).toHaveSize(0)
            resolve()
          })
        })
      })
    })
  })

  describe('click callback', () => {
    it('should execute callback on click', () => {
      return new Promise(resolve => {
        const spy = vi.fn().mockName('spy')

        const instance = new Backdrop({
          isVisible: true,
          isAnimated: false,
          clickCallback: () => spy()
        })
        const endTest = () => {
          setTimeout(() => {
            expect(spy).toHaveBeenCalled()
            resolve()
          }, 10)
        }

        instance.show(() => {
          const clickEvent = new Event('mousedown', { bubbles: true, cancelable: true })
          document.querySelector(CLASS_BACKDROP).dispatchEvent(clickEvent)
          endTest()
        })
      })
    })

    describe('animation callbacks', () => {
      it('should show and hide backdrop after counting transition duration if it is animated', () => {
        return new Promise(resolve => {
          const instance = new Backdrop({
            isVisible: true,
            isAnimated: true
          })
          const spy2 = vi.fn().mockName('spy2')

          const execDone = () => {
            setTimeout(() => {
              expect(spy2).toHaveBeenCalledTimes(2)
              resolve()
            }, 10)
          }

          instance.show(spy2)
          instance.hide(() => {
            spy2()
            execDone()
          })
          expect(spy2).not.toHaveBeenCalled()
        })
      })

      it('should show and hide backdrop without a delay if it is not animated', () => {
        return new Promise(resolve => {
          const spy = vi.fn(getTransitionDurationFromElement).mockName('spy')
          const instance = new Backdrop({
            isVisible: true,
            isAnimated: false
          })
          const spy2 = vi.fn().mockName('spy2')

          instance.show(spy2)
          instance.hide(spy2)

          setTimeout(() => {
            expect(spy2).toHaveBeenCalled()
            expect(spy).not.toHaveBeenCalled()
            resolve()
          }, 10)
        })
      })

      it('should not call delay callbacks if it is not "shown"', () => {
        return new Promise(resolve => {
          const instance = new Backdrop({
            isVisible: false,
            isAnimated: true
          })
          const spy = vi.fn(getTransitionDurationFromElement).mockName('spy')

          instance.show()
          instance.hide(() => {
            expect(spy).not.toHaveBeenCalled()
            resolve()
          })
        })
      })
    })

    describe('Config', () => {
      describe('rootElement initialization', () => {
        it('should be appended on "document.body" by default', () => {
          return new Promise(resolve => {
            const instance = new Backdrop({
              isVisible: true
            })
            const getElement = () => document.querySelector(CLASS_BACKDROP)
            instance.show(() => {
              expect(getElement().parentElement).toEqual(document.body)
              resolve()
            })
          })
        })

        it('should find the rootElement if passed as a string', () => {
          return new Promise(resolve => {
            const instance = new Backdrop({
              isVisible: true,
              rootElement: 'body'
            })
            const getElement = () => document.querySelector(CLASS_BACKDROP)
            instance.show(() => {
              expect(getElement().parentElement).toEqual(document.body)
              resolve()
            })
          })
        })

        it('should be appended on any element given by the proper config', () => {
          return new Promise(resolve => {
            fixtureEl.innerHTML = '<div id="wrapper"></div>'

            const wrapper = fixtureEl.querySelector('#wrapper')
            const instance = new Backdrop({
              isVisible: true,
              rootElement: wrapper
            })
            const getElement = () => document.querySelector(CLASS_BACKDROP)
            instance.show(() => {
              expect(getElement().parentElement).toEqual(wrapper)
              resolve()
            })
          })
        })
      })

      describe('ClassName', () => {
        it('should allow configuring className', () => {
          return new Promise(resolve => {
            const instance = new Backdrop({
              isVisible: true,
              className: 'foo'
            })
            const getElement = () => document.querySelector('.foo')
            instance.show(() => {
              expect(getElement()).toEqual(instance._getElement())
              instance.dispose()
              resolve()
            })
          })
        })
      })
    })
  })
})
