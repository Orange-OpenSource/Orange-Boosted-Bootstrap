import { afterEach, describe, expect, it } from 'vitest'
import { version as orangeVersion } from '@ouds/web-orange/package.json'
import { version as soshVersion } from '@ouds/web-sosh/package.json'
import { loadBrandCSS } from './brand.util'

const getLink = () => document.getElementById('ouds-brand-css') as HTMLLinkElement | null

describe('loadBrandCSS', () => {
  afterEach(() => {
    getLink()?.remove()
  })

  it('adds a stylesheet link for the brand, pinned to the brand package version', () => {
    loadBrandCSS('orange')

    const link = getLink()
    expect(link?.rel).toBe('stylesheet')
    expect(link?.getAttribute('data-brand')).toBe('orange')
    expect(link?.getAttribute('href')).toBe(
      `https://cdn.jsdelivr.net/npm/@ouds/web-orange@${orangeVersion}/dist/css/ouds-web.min.css`
    )
  })

  it('reuses the existing link when switching brands', () => {
    loadBrandCSS('orange')
    loadBrandCSS('sosh')

    expect(document.querySelectorAll('#ouds-brand-css')).toHaveLength(1)
    expect(getLink()?.getAttribute('data-brand')).toBe('sosh')
    expect(getLink()?.getAttribute('href')).toContain(`@ouds/web-sosh@${soshVersion}/`)
  })

  it('does nothing when the same brand is already loaded', () => {
    loadBrandCSS('orange-compact')
    const link = getLink()
    link?.setAttribute('href', 'unchanged')

    loadBrandCSS('orange-compact')

    expect(getLink()?.getAttribute('href')).toBe('unchanged')
  })
})
