import { describe, it, expect } from 'vitest'
import { getBreakpointsReplacement, getGapReplacement, getSpacingReplacement } from './regexp.mjs'

describe('GapReplacement', () => {
  for (const [search, replaced] of [
    ['g-1', 'g-shortest'],
    ['g-n1', 'g-nshortest'],
    ['gx-1', 'gx-shortest'],
    ['gy-1', 'gy-shortest'],
    ['g-md-1', 'g-md-shortest']
  ]) {
    it(`should transform ${search} to ${replaced}`, () => {
      const [regex, replacement] = getGapReplacement(1, 'shortest')
      expect(search.replace(new RegExp(regex, 'g'), replacement)).toEqual(replaced)
    })
  }
})

describe('SpacingReplacement', () => {
  for (const [search, replaced] of [
    ['m-1', 'm-shortest'],
    ['m-n1', 'm-nshortest'],
    ['p-1', 'p-shortest'],
    ['mt-1', 'mt-shortest'],
    ['mb-1', 'mb-shortest'],
    ['ml-1', 'ml-shortest'],
    ['mr-1', 'mr-shortest'],
    ['mx-1', 'mx-shortest'],
    ['my-1', 'my-shortest'],
    ['m-md-1', 'm-md-shortest'],
    ['row-gap-1', 'row-gap-shortest'],
    ['column-gap-1', 'column-gap-shortest'],
    ['row-gap-md-1', 'row-gap-md-shortest'],
    ['gap-1', 'gap-shortest']
  ]) {
    it(`should transform ${search} to ${replaced}`, () => {
      const [regex, replacement] = getSpacingReplacement(1, 'shortest')
      expect(search.replace(new RegExp(regex, 'g'), replacement)).toEqual(replaced)
    })
  }
})

describe('BreakpointsReplacement', () => {
  for (const [search, replaced] of [
    ['my-xs-xsmall', 'xs:my-xsmall'],
    ['align-items-xs-end', 'xs:align-items-end'],
    ['flex-xs-fill', 'xs:flex-fill'],
    ['flex-xs-grow-0', 'xs:flex-grow-0'],
    ['order-xs-5', 'xs:order-5'],
    ['d-xs-none', 'xs:d-none']
  ]) {
    it(`should transform ${search} to ${replaced}`, () => {
      const [regex, replacement] = getBreakpointsReplacement('xs')
      expect(search.replace(new RegExp(regex, 'g'), replacement)).toEqual(replaced)
    })
  }

  for (const [search, replaced] of [
    ['my-2xl-xsmall', '2xl:my-xsmall'],
    ['align-items-2xl-end', '2xl:align-items-end'],
    ['flex-2xl-fill', '2xl:flex-fill'],
    ['flex-2xl-grow-0', '2xl:flex-grow-0'],
    ['order-2xl-5', '2xl:order-5'],
    ['d-2xl-none', '2xl:d-none']
  ]) {
    it(`should transform ${search} to ${replaced}`, () => {
      const [regex, replacement] = getBreakpointsReplacement('2xl')
      expect(search.replace(new RegExp(regex, 'g'), replacement)).toEqual(replaced)
    })
  }
})
