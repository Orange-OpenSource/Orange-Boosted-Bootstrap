import OrangeNavbar from '../../src/orange-navbar.js'
import {
  clearFixture, getFixture, createEvent, jQueryMock
} from '../helpers/fixture.js'

describe('OrangeNavbar', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  describe('VERSION', () => {
    it('should return plugin version', () => {
      expect(OrangeNavbar.VERSION).toEqual(jasmine.any(String))
    })
  })

  describe('Default', () => {
    it('should return plugin default config', () => {
      expect(OrangeNavbar.Default).toEqual(jasmine.any(Object))
    })
  })

  describe('DefaultType', () => {
    it('should return plugin default type config', () => {
      expect(OrangeNavbar.DefaultType).toEqual(jasmine.any(Object))
    })
  })

  describe('DATA_KEY', () => {
    it('should return plugin data key', () => {
      expect(OrangeNavbar.DATA_KEY).toEqual('bs.orangenavbar')
    })
  })

  describe('jQueryInterface', () => {
    it('should create an orange navbar', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')

      jQueryMock.fn.orangenavbar = OrangeNavbar.jQueryInterface
      jQueryMock.elements = [div]

      jQueryMock.fn.orangenavbar.call(jQueryMock)

      expect(OrangeNavbar.getInstance(div)).not.toBeNull()
    })

    it('should not re create an orange navbar', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')
      const orangenavbar = new OrangeNavbar(div)

      jQueryMock.fn.orangenavbar = OrangeNavbar.jQueryInterface
      jQueryMock.elements = [div]

      jQueryMock.fn.orangenavbar.call(jQueryMock)

      expect(OrangeNavbar.getInstance(div)).toEqual(orangenavbar)
    })

    it('should throw error on undefined method', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')
      const action = 'undefinedMethod'

      jQueryMock.fn.orangenavbar = OrangeNavbar.jQueryInterface
      jQueryMock.elements = [div]

      expect(() => {
        jQueryMock.fn.orangenavbar.call(jQueryMock, action)
      }).toThrowError(TypeError, `No method named "${action}"`)
    })
  })

  it('should call enableMinimizing when the page finish loading', () => {
    fixtureEl.innerHTML = [
      '<header class="sticky-top"></header>'
    ].join('')

    const loadEvent = createEvent('load')
    const spy = spyOn(OrangeNavbar, 'enableMinimizing')

    window.dispatchEvent(loadEvent)

    expect(spy).toHaveBeenCalled()
  })

  it('should call enableMinimizing when there is a scroll on the page', () => {
    fixtureEl.innerHTML = [
      '<header class="sticky-top" style="height: 20000px;"></header>'
    ].join('')

    const scrollEvent = createEvent('scroll')
    const spy = spyOn(OrangeNavbar, 'enableMinimizing')
    window.scrollY = 1

    window.dispatchEvent(scrollEvent)

    expect(spy).toHaveBeenCalled()
  })

  it('should not call enableMinimizing when there is a scroll on the page and the header does not have .sticky-top', () => {
    fixtureEl.innerHTML = [
      '<header style="height: 20000px;"></header>'
    ].join('')

    const scrollEvent = createEvent('scroll')
    const spy = spyOn(OrangeNavbar, 'enableMinimizing')
    window.scrollY = 1

    window.dispatchEvent(scrollEvent)

    expect(spy).not.toHaveBeenCalled()
  })

  it('should add .header-minimized to the global header non-supra first <nav> when enableMinimizing is called not at the top of the page', () => {
    fixtureEl.innerHTML = [
      '<header class="sticky-top" style="height: 20000px;"></header>'
    ].join('')

    const targetEl = fixtureEl.querySelector('header')
    window.scrollY = 1

    OrangeNavbar.enableMinimizing(fixtureEl.querySelector('header.sticky-top'))

    expect(targetEl).toHaveClass('header-minimized')
  })

  it('should remove .header-minimized to the global header non-supra first <nav> when enableMinimizing is called at the top of the page', () => {
    fixtureEl.innerHTML = [
      '<header class="sticky-top" style="height: 20000px;"></header>'
    ].join('')

    const targetEl = fixtureEl.querySelector('header')
    window.scrollY = 0

    OrangeNavbar.enableMinimizing(fixtureEl.querySelector('header.sticky-top'))

    expect(targetEl).not.toHaveClass('header-minimized')
  })
})
