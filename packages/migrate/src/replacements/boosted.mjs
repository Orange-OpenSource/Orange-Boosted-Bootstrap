import { warnForClass } from '../warnings.mjs'
import { getGapReplacement, getSpacingReplacement } from '../regexp.mjs'
import { oudsReplacements } from './ouds.mjs'

export const boostedReplacements = [
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
  [...getGapReplacement(1, '2xsmall')],
  [...getGapReplacement(2, 'small')],
  [...getGapReplacement(3, 'large')],
  [...getGapReplacement(4, '2xlarge')],
  [...getGapReplacement(5, '4xlarge')],

  // Spacing
  [...getSpacingReplacement(0, 'none')],
  [...getSpacingReplacement(1, '2xsmall')],
  [...getSpacingReplacement(2, 'small')],
  [...getSpacingReplacement(3, 'large')],
  [...getSpacingReplacement(4, '2xlarge')],
  [...getSpacingReplacement(5, '4xlarge')],

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

  // Border
  ['border(-(?:top|bottom|start|end))?-0', 'border$1-none'],
  ['border(-(?:top|bottom|start|end))?-1', 'border$1-small'],
  ['border(-(?:top|bottom|start|end))?-2', 'border$1-medium'],
  ['border(-(?:top|bottom|start|end))?-[3-5]', 'border$1-large'],
  ['border-[a-z]+-subtle', 'border-default'],
  ['border-primary', 'border-brand-primary'],
  ['border-black', 'border-always-black'],
  ['border-white', 'border-always-white'],
  ['border-(secondary|success|danger|warning|info|light|dark)', 'border-emphasized'],

  // Colors
  ['text-primary(-emphasis)?', 'text-brand-primary'],
  ['text-secondary(-emphasis)?', 'text-muted'],
  [...warnForClass('text-(success|danger|warning|info)(-emphasis)?')],
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

  // OUDS Breakpoints
  ...oudsReplacements,
  ['xxl:([^ "]*)', '2xl:$1'] // replace xxl breakpoints everywhere
]
