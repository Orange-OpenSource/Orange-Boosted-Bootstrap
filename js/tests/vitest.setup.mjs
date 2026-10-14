// eslint-disable-next-line import/no-unresolved
import simulatorSource from 'hammer-simulator/index.js?raw'
import { expect } from 'vitest'

const simulatorScript = document.createElement('script')
simulatorScript.textContent = simulatorSource
document.head.append(simulatorScript)
simulatorScript.remove()

expect.extend({
  toHaveClass(received, className) {
    const pass = received?.classList?.contains(className) ?? false

    return {
      pass,
      message: () =>
        `expected element ${this.isNot ? 'not ' : ''}to have class "${className}"`
    }
  },
  toHaveSize(received, expectedSize) {
    const actualSize = received?.size ?? received?.length
    const pass = actualSize === expectedSize

    return {
      pass,
      message: () =>
        `expected size ${this.isNot ? 'not ' : ''}to be ${expectedSize}, received ${actualSize}`
    }
  }
})
