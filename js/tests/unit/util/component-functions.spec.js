import { vi } from 'vitest'
import BaseComponent from '../../../src/base-component.js'
import { enableDismissTrigger } from '../../../src/util/component-functions.js'
import { clearFixture, createEvent, getFixture } from '../../helpers/fixture.js'

class DummyClass2 extends BaseComponent {
  static get NAME() {
    return 'test'
  }

  hide() {
    return true
  }

  testMethod() {
    return true
  }
}

describe('Plugin functions', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  describe('data-bs-dismiss functionality', () => {
    it('should get Plugin and execute the given method, when a click occurred on data-bs-dismiss="PluginName"', () => {
      fixtureEl.innerHTML = [
        '<div id="foo" class="test">',
        '  <button type="button" data-bs-dismiss="test" data-bs-target="#foo"></button>',
        '</div>'
      ].join('')

      const spyGet = vi.spyOn(DummyClass2, 'getOrCreateInstance')
      const spyTest = vi.spyOn(DummyClass2.prototype, 'testMethod').mockImplementation(() => {})
      const componentWrapper = fixtureEl.querySelector('#foo')
      const btnClose = fixtureEl.querySelector('[data-bs-dismiss="test"]')
      const event = createEvent('click')

      enableDismissTrigger(DummyClass2, 'testMethod')
      btnClose.dispatchEvent(event)

      expect(spyGet).toHaveBeenCalledWith(componentWrapper)
      expect(spyTest).toHaveBeenCalled()
    })

    it('if data-bs-dismiss="PluginName" hasn\'t got "data-bs-target", "getOrCreateInstance" has to be initialized by closest "plugin.Name" class', () => {
      fixtureEl.innerHTML = [
        '<div id="foo" class="test">',
        '  <button type="button" data-bs-dismiss="test"></button>',
        '</div>'
      ].join('')

      const spyGet = vi.spyOn(DummyClass2, 'getOrCreateInstance')
      const spyHide = vi.spyOn(DummyClass2.prototype, 'hide').mockImplementation(() => {})
      const componentWrapper = fixtureEl.querySelector('#foo')
      const btnClose = fixtureEl.querySelector('[data-bs-dismiss="test"]')
      const event = createEvent('click')

      enableDismissTrigger(DummyClass2)
      btnClose.dispatchEvent(event)

      expect(spyGet).toHaveBeenCalledWith(componentWrapper)
      expect(spyHide).toHaveBeenCalled()
    })

    it('if data-bs-dismiss="PluginName" is disabled, must not trigger function', () => {
      fixtureEl.innerHTML = [
        '<div id="foo" class="test">',
        '  <button type="button" disabled data-bs-dismiss="test"></button>',
        '</div>'
      ].join('')

      const spy = vi.spyOn(DummyClass2, 'getOrCreateInstance')
      const btnClose = fixtureEl.querySelector('[data-bs-dismiss="test"]')
      const event = createEvent('click')

      enableDismissTrigger(DummyClass2)
      btnClose.dispatchEvent(event)

      expect(spy).not.toHaveBeenCalled()
    })

    it('should prevent default when the trigger is <a> or <area>', () => {
      fixtureEl.innerHTML = [
        '<div id="foo" class="test">',
        '  <a type="button" data-bs-dismiss="test"></a>',
        '</div>'
      ].join('')

      const btnClose = fixtureEl.querySelector('[data-bs-dismiss="test"]')
      const event = createEvent('click')

      enableDismissTrigger(DummyClass2)
      const spy = vi.spyOn(Event.prototype, 'preventDefault')

      btnClose.dispatchEvent(event)

      expect(spy).toHaveBeenCalled()
    })
  })
})
