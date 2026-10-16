/* eslint-disable unicorn/no-array-reduce */
import { boostedReplacements } from './boosted.mjs'
import { ob1Replacements } from './ob1.mjs'
import { oudsReplacements } from './ouds.mjs'

const replacementsMap = {
  boosted: boostedReplacements,
  ob1: ob1Replacements,
  ouds: oudsReplacements
}

export const getReplacements = (source = 'ouds') => {
  const replacements = replacementsMap[source] || oudsReplacements
  return replacements
    .map(([from, to]) => {
      return [new RegExp(`(?<=[". ,\`'])${from}(?=[{\\s"'\`,\\[:).])`, 'g'), to]
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

export { getReplacementsWarnings } from '../utils/warnings.mjs'
