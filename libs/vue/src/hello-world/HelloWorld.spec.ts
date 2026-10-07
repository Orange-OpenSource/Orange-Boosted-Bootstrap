import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders a greeting with the default name', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.text()).toBe('Hello, world!')
  })

  it('renders a greeting with a custom name', () => {
    const wrapper = mount(HelloWorld, { props: { name: 'Orange' } })
    expect(wrapper.text()).toBe('Hello, Orange!')
  })
})
