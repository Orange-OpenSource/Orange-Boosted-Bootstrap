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
      message: 'The badge component using class \'{class}\' in {file} needs to be updated to use the new component DOM.',
      link: 'https://web.unified-design-system.orange.com/docs/components/badges'
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
  ['btn-dropdown', 'btn-default'],
  [...warnForClass('btn-social', { link: 'https://web.unified-design-system.orange.com/docs/components/buttons#button' })],
  [...warnForClass('btn-toggle', { link: 'https://web.unified-design-system.orange.com/docs/components/buttons#button' })],
  ['btn-outline-[a-z]+', 'btn-default'],
  [...warnForClass('btn-sm', { link: 'https://web.unified-design-system.orange.com/docs/components/buttons#button' })],
  [...warnForClass('btn-lg', { link: 'https://web.unified-design-system.orange.com/docs/components/buttons#button' })],

  // Skeleton
  [...warnForClass('placeholder-(wave|glow)', { link: 'https://web.unified-design-system.orange.com/docs/components/skeleton' })],
  ['placeholder', 'skeleton'],

  // Tags
  [
    ...warnForClass('tag', {
      message: 'The tag component using class \'{class}\' in {file} needs to be updated to use the new component DOM.',
      link: 'https://web.unified-design-system.orange.com/docs/components/tags#tag'
    })
  ],
  ['tag-sm', 'tag-small'],

  // OUDS updates
  ...oudsReplacements,
  ['xxl:([^ "]*)', '2xl:$1'] // replace xxl breakpoints everywhere
]
