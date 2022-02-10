import OrangeNavbar from '../../src/orange-navbar'
import { clearFixture, getFixture, createEvent } from '../helpers/fixture'

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

  it('should add .header-minimized to the global header non-supra first <nav> when scrolling down and remove it when back to top', () => {
    fixtureEl.innerHTML = [
      '<header class="sticky-top" style="height: 20000px;">',
      '  <nav id="target"></nav>',
      '</header>'
    ].join('')

    const targetEl = fixtureEl.querySelector('#target')
    const scrollEvent = createEvent('scroll')
    window.scrollY = 1
    window.dispatchEvent(scrollEvent)

    expect(targetEl.classList).toContain('header-minimized')

    const scrollEvent2 = createEvent('scroll')
    window.scrollY = 0
    window.dispatchEvent(scrollEvent2)

    expect(targetEl.classList).not.toContain('header-minimized')
  })

  it('should add .header-minimized to the global header non-supra first <nav> when header has a supra bar', () => {
    fixtureEl.innerHTML = [
      '<header class="sticky-top" style="height: 20000px;">',
      '  <nav class="supra"></nav>',
      '  <nav id="target"></nav>',
      '  <nav id="target2"></nav>',
      '</header>'
    ].join('')

    const targetEl = fixtureEl.querySelector('#target')
    const target2El = fixtureEl.querySelector('#target2')
    const scrollEvent = createEvent('scroll')
    window.scrollY = 1
    window.dispatchEvent(scrollEvent)

    expect(targetEl.classList).toContain('header-minimized')
    expect(target2El.classList).not.toContain('header-minimized')

    const scrollEvent2 = createEvent('scroll')
    window.scrollY = 0
    window.dispatchEvent(scrollEvent2)

    expect(targetEl.classList).not.toContain('header-minimized')
    expect(target2El.classList).not.toContain('header-minimized')
  })

  it('should not add .header-minimized to the global header non-supra first <nav> when the header is .fixed-top', () => {
    fixtureEl.innerHTML = [
      '<header class="fixed-top" style="height: 20000px;">',
      '  <nav id="target"></nav>',
      '</header>'
    ].join('')

    const targetEl = fixtureEl.querySelector('#target')
    const scrollEvent = createEvent('scroll')
    window.scrollY = 1
    window.dispatchEvent(scrollEvent)

    expect(targetEl.classList).not.toContain('header-minimized')
  })

  it('should not add .header-minimized to the global header non-supra first <nav> when the header only has .supra <nav>', () => {
    fixtureEl.innerHTML = [
      '<header class="sticky-top" style="height: 20000px;">',
      '  <nav class="supra" id="target"></nav>',
      '</header>'
    ].join('')

    const targetEl = fixtureEl.querySelector('#target')
    const scrollEvent = createEvent('scroll')
    window.scrollY = 1
    window.dispatchEvent(scrollEvent)

    expect(targetEl.classList).not.toContain('header-minimized')
  })
})
