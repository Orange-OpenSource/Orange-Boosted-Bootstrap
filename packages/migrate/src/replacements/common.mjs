import { warnForClass } from '../utils/warnings.mjs'

export const getGapReplacement = (value, semantic) => {
  return [`(g[xy]?(-[a-z23]{0,3})?-n?)${value}`, `$1${semantic}`]
}

export const getSpacingReplacement = (value, semantic) => {
  return [`(([mp][tblrsexy]?|((row|column)-)?gap)(-[a-z23]{0,3})?-n?)${value}`, `$1${semantic}`]
}

export const getBreakpointsReplacement = value => {
  return [`([\\w-]+)-${value}-([\\w-]+)`, (...args) => `${value}:${args[1]}-${args[2]}`]
}

export const commonReplacements = [
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

  // Spacing
  [...getSpacingReplacement(0, 'none')],

  // ----- Utilities -----
  // Background colors
  ['bg-white', 'bg-always-white'],
  ['bg-black', 'bg-always-black'],
  ['bg-primary', 'bg-surface-brand-primary'],
  ['bg-success', 'bg-surface-status-positive-emphasized'],
  ['bg-danger', 'bg-surface-status-negative-emphasized'],
  ['bg-info', 'bg-surface-status-info-emphasized'],
  ['bg-warning', 'bg-surface-status-warning-emphasized'],
  ['bg-light', 'bg-secondary'],
  [...warnForClass('bg-supporting-.*')],

  // Border
  ['border(-(?:top|bottom|start|end))?-0', 'border$1-none'],
  ['border(-(?:top|bottom|start|end))?-1', 'border$1-small'],
  ['border(-(?:top|bottom|start|end))?-2', 'border$1-medium'],
  ['border(-(?:top|bottom|start|end))?-[3-5]', 'border$1-large'],
  ['border-[a-z]+-subtle', 'border-default'],
  ['border-primary', 'border-brand-primary'],
  ['border-white', 'border-always-white'],
  ['border-light', 'border-default'],
  ['border-success', 'border-status-positive'],
  ['border-danger', 'border-status-negative'],
  ['border-info', 'border-status-info'],
  ['border-warning', 'border-status-warning'],
  ['border-(secondary|dark)', 'border-emphasized'],
  ['border-black', 'border-always-black'],
  ['rounded(-(?:top|bottom|start|end))?-0', 'rounded$1-none'],
  ['rounded(-(?:top|bottom|start|end))?-1', 'rounded$1-small'],
  ['rounded(-(?:top|bottom|start|end))?-2', 'rounded$1-medium'],
  ['rounded(-(?:top|bottom|start|end))?-[3-5]', 'rounded$1-large'],

  // Clearfix
  ['clearfix', 'd-flow-root'],

  // Color and background
  [...warnForClass('text-bg-(primary|secondary|success|danger|info|warning|light|dark)')],

  // Colors
  ['text-primary(-emphasis)?', 'text-brand-primary'],
  ['text-secondary(-emphasis)?', 'text-muted'],
  ['text-success(-emphasis)?', 'text-status-positive'],
  ['text-danger(-emphasis)?', 'text-status-negative'],
  ['text-info(-emphasis)?', 'text-status-info'],
  ['text-warning(-emphasis)?', 'text-status-warning'],
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
  ['link-chevron', 'link link-chevron'],
  [...warnForClass('link-(primary|secondary|success|danger|info|warning|light|dark)')],

  // Opacity
  ['opacity-0', 'opacity-invisible'],
  ['opacity-25', 'opacity-weak'],
  ['opacity-50', 'opacity-medium'],
  ['opacity-75', 'opacity-strong'],
  ['opacity-100', 'opacity-opaque'],

  // Ratio
  [...warnForClass('ratio')],

  // Shadow
  ['shadow(-sm)?', 'shadow-default'],
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

  // Alert
  [
    ...warnForClass('alert', {
      message: 'The component using class \'{class}\' in {file} needs to be updated to use the new component DOM.'
    })
  ],
  ['alert', 'alert alert-message'],
  ['alert-danger', 'alert-negative'],
  ['alert-success', 'alert-positive'],
  ['alert-heading', 'alert-label'],
  [...warnForClass('alert-(sm|dismissible)', { remove: true })],

  // Badge
  [
    ...warnForClass('badge', {
      message: 'The component using class \'{class}\' in {file} needs to be updated to use the new component DOM.'
    })
  ],

  // Breadcrumb
  [
    ...warnForClass('breadcrumb-item', {
      message: 'The component using class \'{class}\' in {file} needs to be updated to use the new component DOM.'
    })
  ],

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

  // Form
  [
    ...warnForClass('was-validated', {
      message: 'The form using class \'{class}\' in {file} needs to be updated to use the new form validation style.'
    })
  ],

  // Checkbox and radios
  [...warnForClass('form-(check|select|control)')],

  // Tags
  [
    ...warnForClass('tag', {
      message: 'The component using class \'{class}\' in {file} needs to be updated to use the new component DOM.'
    })
  ],
  ['tag-sm', 'tag-small'],

  // Skeleton
  [...warnForClass('placeholder-(wave|glow)')],
  ['placeholder', 'skeleton']
]
