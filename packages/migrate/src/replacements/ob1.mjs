import { warnForClass } from '../utils/warnings.mjs'
import { oudsReplacements } from './ouds.mjs'
import { commonReplacements, getGapReplacement, getSpacingReplacement } from './common.mjs'

export const ob1Replacements = [
  ...commonReplacements,

  // Layout
  [...getGapReplacement(1, 'medium')],
  [...getGapReplacement(2, 'xlarge')],
  [...getGapReplacement(3, '3xlarge')],
  [...getGapReplacement(4, '4xlarge')],
  [...getGapReplacement(5, '5xlarge')],

  // Spacing
  [...getSpacingReplacement(1, 'medium')],
  [...getSpacingReplacement(2, 'xlarge')],
  [...getSpacingReplacement(3, '3xlarge')],
  [...getSpacingReplacement(4, '4xlarge')],
  [...getSpacingReplacement(5, '5xlarge')],

  // ----- Utilities -----
  // Background colors
  ['bg-primary2', 'bg-surface-brand-tertiary'],
  ['bg-primary3', 'bg-surface-brand-secondary'],
  ['bg-success-subtle', 'bg-surface-status-positive-muted'],
  ['bg-success', 'bg-surface-status-positive-emphasized'],
  ['bg-danger-subtle', 'bg-surface-status-negative-muted'],
  ['bg-danger', 'bg-surface-status-negative-emphasized'],
  ['bg-info-subtle', 'bg-surface-status-info-muted'],
  ['bg-info', 'bg-surface-status-info-emphasized'],
  ['bg-warning-subtle', 'bg-surface-status-warning-muted'],
  ['bg-warning', 'bg-surface-status-warning-emphasized'],
  ['bg-greige', 'bg-tertiary'],
  ['bg-dark', 'bg-always-black'],
  ['bg-light', 'bg-secondary'],
  [...warnForClass('bg-supporting-.*')],
  ['bg-gray1', 'bg-inverse-low'],
  ['bg-gray2', 'bg-secondary'],
  ['bg-gray3', 'bg-inverse-low'],
  ['bg-gray4', 'bg-secondary'],

  // Colors
  ['text-primary2(-emphasis)?', 'text-brand-tertiary'],
  ['text-primary3(-emphasis)?', 'text-brand-secondary'],

  // Components
  // Form
  [
    ...warnForClass('ob1-form-group', {
      message: 'The component using class \'{class}\' in {file} needs to be updated to use the new component version.'
    })
  ],

  // OUDS Breakpoints
  ...oudsReplacements,
  ['xxl:([^ "]*)', '2xl:$1'] // replace xxl breakpoints everywhere
]
