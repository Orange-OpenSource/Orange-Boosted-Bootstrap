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

  // Components
  // Badge
  [
    ...warnForClass('badge', {
      message: 'The component using class \'{class}\' in {file} needs to be updated to use the new component DOM.'
    })
  ],

  // Buttons
  [...warnForClass('btn-close-white', { remove: true })],
  ['btn-(secondary|dark)', 'btn-strong'],
  ['btn-primary', 'btn-brand'],
  ['btn-(light|success)', 'btn-default'],
  ['btn-(danger|warning)', 'btn-negative'],
  ['btn-(info|no-outline)', 'btn-minimal'],
  ['btn-link', 'link'],
  [...warnForClass('btn-dropdown')],
  [...warnForClass('btn-social')],
  [...warnForClass('btn-toggle')],
  ['btn-outline-[a-z]+', 'btn-default'],
  [...warnForClass('btn-sm')],
  [...warnForClass('btn-lg')],

  // Skeleton
  [...warnForClass('placeholder-(wave|glow)')],
  ['placeholder', 'skeleton'],

  // Tags
  [
    ...warnForClass('tag', {
      message: 'The component using class \'{class}\' in {file} needs to be updated to use the new component DOM.'
    })
  ],
  ['tag-sm', 'tag-small'],

  // OUDS updates
  ...oudsReplacements,
  ['xxl:([^ "]*)', '2xl:$1'] // replace xxl breakpoints everywhere
]
