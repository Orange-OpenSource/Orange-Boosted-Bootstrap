import { warnForClass } from '../warnings.mjs'
import { getGapReplacement, getSpacingReplacement } from '../regexp.mjs'
import { oudsReplacements } from './ouds.mjs'

export const ob1Replacements = [
  // Typography
  ['display-1', 'display-large'],
  ['display-2', 'display-medium'],
  ['display-3', 'display-small'],
  [...warnForClass('initialism')],

  // Layout
  [...warnForClass('container')],
  ['container-xxl', 'container-fluid container-max-width'],
  [...warnForClass('container-[a-z]{2,3}')], // must be after container-xxl
  [...getGapReplacement(0, 'none')],
  [...getGapReplacement(1, 'medium')],
  [...getGapReplacement(2, 'xlarge')],
  [...getGapReplacement(3, '3xlarge')],
  [...getGapReplacement(4, '4xlarge')],
  [...getGapReplacement(5, '5xlarge')],

  // Spacing
  [...getSpacingReplacement(0, 'none')],
  [...getSpacingReplacement(1, 'medium')],
  [...getSpacingReplacement(2, 'xlarge')],
  [...getSpacingReplacement(3, '3xlarge')],
  [...getSpacingReplacement(4, '4xlarge')],
  [...getSpacingReplacement(5, '5xlarge')],

  // Buttons
  [...warnForClass('btn-close-white')],
  ['btn-(primary|dark)', 'btn-strong'],
  ['btn-(secondary|success)', 'btn-default'],
  ['btn-(danger|warning)', 'btn-negative'],
  ['btn-(info|light|no-outline)', 'btn-minimal'],
  [...warnForClass('btn-social')],
  ['btn-outline-[a-z]+', 'btn-default'],
  [...warnForClass('btn-sm')],
  [...warnForClass('btn-lg')],

  // ----- Utilities -----
  // Background colors
  ['bg-white', 'bg-always-white'],
  ['bg-black', 'bg-always-black'],
  ['bg-primary', 'bg-surface-brand-primary'],
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

  // Border
  ['border(-(?:top|bottom|start|end))?-0', 'border$1-none'],
  ['border(-(?:top|bottom|start|end))?-1', 'border$1-small'],
  ['border(-(?:top|bottom|start|end))?-2', 'border$1-medium'],
  ['border(-(?:top|bottom|start|end))?-[3-5]', 'border$1-large'],
  ['border-[a-z]+-subtle', 'border-default'],
  ['border-primary', 'border-brand-primary'],
  ['border-white', 'border-always-white'],
  ['border-(secondary|black|dark)', 'border-emphasized'],
  ['border-light', 'border-default'],
  ['border-success', 'border-status-positive'],
  ['border-danger', 'border-status-negative'],
  ['border-info', 'border-status-info'],
  ['border-warning', 'border-status-warning'],

  // Colors
  ['text-primary(-emphasis)?', 'text-brand-primary'],
  ['text-primary2(-emphasis)?', 'text-brand-tertiary'],
  ['text-primary3(-emphasis)?', 'text-brand-secondary'],
  ['text-secondary(-emphasis)?', 'text-muted'],
  ['text-success(-emphasis)?', 'text-status-positive'],
  ['text-danger(-emphasis)?', 'text-status-negative'],
  ['text-warning(-emphasis)?', 'text-status-warning'],
  ['text-info(-emphasis)?', 'text-status-info'],
  ['text-light(-emphasis)?', 'text-disabled'],
  ['text-dark(-emphasis)?', 'text-default'],
  ['text-body(-emphasis)?', 'text-default'],
  ['text-body-secondary', 'text-muted'],
  ['text-body-tertiary', 'text-disabled'],
  ['text-black', 'text-always-black'],
  ['text-white', 'text-always-white'],
  ['text-black-50', 'text-muted'],
  ['text-white-50', 'text-muted'],

  // Link
  [...warnForClass('link-opacity-[0-9]+(-hover)?')],
  [...warnForClass('link-offset-[0-9]+')],
  [...warnForClass('link-underline')],
  [...warnForClass('link-underline-opacity-[0-9]+(-hover)?')],

  // Opacity
  ['opacity-0', 'opacity-invisible'],
  ['opacity-25', 'opacity-weak'],
  ['opacity-50', 'opacity-medium'],
  ['opacity-75', 'opacity-strong'],
  ['opacity-100', 'opacity-opaque'],

  // Shadow
  ['shadow-sm', 'shadow-default'],
  ['shadow-lg', 'shadow-emphasized'],

  // Text
  ['fs-1', 'fs-hxl'],
  ['fs-2', 'fs-hl'],
  ['fs-3', 'fs-hm'],
  ['fs-4', 'fs-hs'],
  ['fs-5', 'fs-bl'],
  ['fs-6', 'fs-bl'],
  [...warnForClass('fw-semibold')],
  [...warnForClass('fw-medium')],
  [...warnForClass('lh-(1|sm|base|lg)')],
  [...warnForClass('ll-(sm|md)')],

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
