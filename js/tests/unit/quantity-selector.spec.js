import QuantitySelector from '../../src/quantity-selector'
import { clearFixture, getFixture } from '../helpers/fixture'

describe('QuantitySelector', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  describe('VERSION', () => {
    it('should return plugin version', () => {
      expect(QuantitySelector.VERSION).toEqual(jasmine.any(String))
    })
  })

  describe('Default', () => {
    it('should return plugin default config', () => {
      expect(QuantitySelector.Default).toEqual(jasmine.any(Object))
    })
  })

  describe('DefaultType', () => {
    it('should return plugin default type config', () => {
      expect(QuantitySelector.DefaultType).toEqual(jasmine.any(Object))
    })
  })

  describe('DATA_KEY', () => {
    it('should return plugin data key', () => {
      expect(QuantitySelector.DATA_KEY).toEqual('bs.quantityselector')
    })
  })

  it('should take care of element either passed as a CSS selector or DOM element - Step Up button', () => {
    fixtureEl.innerHTML = '<button data-bs-step="up"></button>'
    const buttonEl = fixtureEl.querySelector('[data-bs-step="up"]')
    const buttonBySelector = new QuantitySelector('[data-bs-step="up"]')
    const buttonByElement = new QuantitySelector(buttonEl)

    expect(buttonBySelector._element).toEqual(buttonEl)
    expect(buttonByElement._element).toEqual(buttonEl)
  })

  it('should take care of element either passed as a CSS selector or DOM element - Step Down button', () => {
    fixtureEl.innerHTML = '<button data-bs-step="down"></button>'
    const buttonEl = fixtureEl.querySelector('[data-bs-step="down"]')
    const buttonBySelector = new QuantitySelector('[data-bs-step="down"]')
    const buttonByElement = new QuantitySelector(buttonEl)

    expect(buttonBySelector._element).toEqual(buttonEl)
    expect(buttonByElement._element).toEqual(buttonEl)
  })

  it('should increment by one step on click on StepUp button', () => {
    fixtureEl.innerHTML = '<button data-bs-step="up"></button>'
    const buttonEl = fixtureEl.querySelector('[data-bs-step="up"]')
    fixtureEl.innerHTML = '<input data-bs-step="counter"></input>'
    const inputEl = fixtureEl.querySelector('[data-bs-step="counter"]')
    const counterStep = inputEl.getAttribute('step')
    const counterMax = inputEl.getAttribute('max')
    const counterValue = inputEl.value

    buttonEl.click()

    expect(inputEl.value === counterValue + counterStep || inputEl.value === counterMax)
  })

  it('should decrement by one step on click on StepDown button', () => {
    fixtureEl.innerHTML = '<button data-bs-step="down"></button>'
    const buttonEl = fixtureEl.querySelector('[data-bs-step="down"]')
    fixtureEl.innerHTML = '<input data-bs-step="counter"></input>'
    const inputEl = fixtureEl.querySelector('[data-bs-step="counter"]')
    const counterStep = inputEl.getAttribute('step')
    const counterMin = inputEl.getAttribute('min')
    const counterValue = inputEl.value

    buttonEl.click()

    expect(inputEl.value === counterValue - counterStep || inputEl.value === counterMin)
  })
})
