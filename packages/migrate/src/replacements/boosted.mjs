import { warnForClass } from '../utils/warnings.mjs'
import { commonReplacements, getGapReplacement, getSpacingReplacement } from './common.mjs'
import { oudsReplacements } from './ouds.mjs'

export const boostedReplacements = [
  ...commonReplacements,

  // Layout
  [...getGapReplacement(1, '2xsmall')],
  [...getGapReplacement(2, 'small')],
  [...getGapReplacement(3, 'large')],
  [...getGapReplacement(4, '2xlarge')],
  [...getGapReplacement(5, '4xlarge')],

  // Spacing
  [...getSpacingReplacement(1, '2xsmall')],
  [...getSpacingReplacement(2, 'small')],
  [...getSpacingReplacement(3, 'large')],
  [...getSpacingReplacement(4, '2xlarge')],
  [...getSpacingReplacement(5, '4xlarge')],

  // ----- Utilities -----
  // Background colors
  ['bg-secondary', 'bg-inverted-low'],
  ['bg-success', 'bg-surface-status-positive-emphasized'],
  ['bg-danger', 'bg-surface-status-negative-emphasized'],
  ['bg-info', 'bg-surface-status-info-emphasized'],
  ['bg-warning', 'bg-surface-status-warning-emphasized'],
  ['bg-body', 'bg-primary'],
  ['bg-body-secondary', 'bg-secondary'],
  ['bg-light', 'bg-secondary'],
  ['bg-dark', 'bg-inverse-low'],
  [...warnForClass('bg-supporting-.*')],

  // OUDS Breakpoints
  ...oudsReplacements,
  ['xxl:([^ "]*)', '2xl:$1'] // replace xxl breakpoints everywhere
]
