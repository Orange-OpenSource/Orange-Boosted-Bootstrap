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

  it('should take care of element either passed as a CSS selector or DOM element (Step Up button)', () => {
    fixtureEl.innerHTML = [
      '<div class="input-group quantity-selector">',
      '  <input type="number" id="inputQuantitySelector1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" aria-label="Quantity selector">',
      '  <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector1" data-bs-step="down">',
      '    <span class="visually-hidden">Step down</span>',
      '  </button>',
      '  <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector1" data-bs-step="up">',
      '    <span class="visually-hidden">Step up</span>',
      '  </button>',
      '</div>'
    ].join('')

    const buttonStepUpEl = fixtureEl.querySelector('[data-bs-step="up"]')
    const buttonStepUpBySelector = new QuantitySelector('[data-bs-step="up"]')
    const buttonStepUpByElement = new QuantitySelector(buttonStepUpEl)

    expect(buttonStepUpBySelector._element).toEqual(buttonStepUpEl)
    expect(buttonStepUpByElement._element).toEqual(buttonStepUpEl)
  })

  it('should take care of element either passed as a CSS selector or DOM element (Step Down button)', () => {
    fixtureEl.innerHTML = [
      '<div class="input-group quantity-selector">',
      '  <input type="number" id="inputQuantitySelector1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" aria-label="Quantity selector">',
      '  <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector1" data-bs-step="down">',
      '    <span class="visually-hidden">Step down</span>',
      '  </button>',
      '  <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector1" data-bs-step="up">',
      '    <span class="visually-hidden">Step up</span>',
      '  </button>',
      '</div>'
    ].join('')

    const buttonStepDownEl = fixtureEl.querySelector('[data-bs-step="down"]')
    const buttonStepDownBySelector = new QuantitySelector('[data-bs-step="down"]')
    const buttonStepDownByElement = new QuantitySelector(buttonStepDownEl)

    expect(buttonStepDownBySelector._element).toEqual(buttonStepDownEl)
    expect(buttonStepDownByElement._element).toEqual(buttonStepDownEl)
  })

  it('should increment by one step on click on Step Up button', () => {
    fixtureEl.innerHTML = [
      '<div class="input-group quantity-selector">',
      '  <input type="number" id="inputQuantitySelector1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="9" min="0" max="10" step="1" aria-label="Quantity selector">',
      '  <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector1" data-bs-step="down">',
      '    <span class="visually-hidden">Step down</span>',
      '  </button>',
      '  <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector1" data-bs-step="up">',
      '    <span class="visually-hidden">Step up</span>',
      '  </button>',
      '</div>'
    ].join('')

    const buttonStepUpEl = fixtureEl.querySelector('[data-bs-step="up"]')
    const inputEl = fixtureEl.querySelector('[data-bs-step="counter"]')

    expect(inputEl.value).toBe('9')

    buttonStepUpEl.click()

    expect(inputEl.value).toBe('10')

    buttonStepUpEl.click()

    expect(inputEl.value).toBe('10')
  })

  it('should decrement by one step on click on Step Down button', () => {
    fixtureEl.innerHTML = [
      '<div class="input-group quantity-selector">',
      '  <input type="number" id="inputQuantitySelector1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="1" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">',
      '  <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector1" data-bs-step="down">',
      '    <span class="visually-hidden">Step down</span>',
      '  </button>',
      '  <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector1" data-bs-step="up">',
      '    <span class="visually-hidden">Step up</span>',
      '  </button>',
      '</div>'
    ].join('')

    const buttonStepDownEl = fixtureEl.querySelector('[data-bs-step="down"]')
    const inputEl = fixtureEl.querySelector('[data-bs-step="counter"]')

    expect(inputEl.value).toBe('1')

    buttonStepDownEl.click()

    expect(inputEl.value).toBe('0')

    buttonStepDownEl.click()

    expect(inputEl.value).toBe('0')
  })

  it('should increment by 0.5 step on click on Step Up button', () => {
    fixtureEl.innerHTML = [
      '<div class="input-group quantity-selector">',
      '  <input type="number" id="inputQuantitySelector1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="1.25" min="0" max="10" step="0.5" data-bs-round="1" aria-label="Quantity selector">',
      '  <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector1" data-bs-step="down">',
      '    <span class="visually-hidden">Step down</span>',
      '  </button>',
      '  <button type="button" class="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector1" data-bs-step="up">',
      '    <span class="visually-hidden">Step up</span>',
      '  </button>',
      '</div>'
    ].join('')

    const buttonStepUpEl = fixtureEl.querySelector('[data-bs-step="up"]')
    const inputEl = fixtureEl.querySelector('[data-bs-step="counter"]')

    expect(inputEl.value).toBe('1.25')

    buttonStepUpEl.click()

    expect(inputEl.value).toBe('1.8') // 1.25 + .5 = 1.75 and with data-bs-round="1" = 1.8
  })
})
