/* eslint-disable unicorn/no-array-reduce */
import { boostedReplacements } from './replacements/boosted.mjs'
import { ob1Replacements } from './replacements/ob1.mjs'

export const getReplacements = (isOb1 = false) => {
  const replacements = isOb1 ? ob1Replacements : boostedReplacements
  return replacements
    .map(([from, to]) => {
      return [new RegExp(`(?<=[". ,\`'])${from}(?=[{\\s"'\`,\\[:)])`, 'g'), to]
    })
    .reduce(
      (acc, [from, to]) => {
        acc.from.push(from)
        acc.to.push(to)
        return acc
      },
      { from: [], to: [] }
    )
}

export { getReplacementsWarnings } from './warnings.mjs'
