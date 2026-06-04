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
  ['bg-greige', 'bg-tertiary'],
  ['bg-gray1', 'bg-inverse-low'],
  ['bg-gray2', 'bg-secondary'],
  ['bg-gray3', 'bg-inverse-low'],
  ['bg-gray4', 'bg-secondary'],

  // Border
  [...warnForClass('border-(primary[2]?|gray[1-4])', { link: 'https://web.unified-design-system.orange.com/docs/utilities/border#color' })],
  ['border-primary', 'border-brand-primary'],
  ['border-primary2', 'border-brand-secondary'],
  ['border-gray[13]', 'border-emphasized'],
  ['border-gray[24]', 'border-default'],

  // Colors
  ['text-primary2', 'text-brand-tertiary'],
  ['text-primary3', 'text-brand-secondary'],
  ['text-gray[34]', 'text-muted'],

  // Text
  [...warnForClass('update-font-size', { link: 'https://web.unified-design-system.orange.com/docs/foundation/typography' })],
  [...warnForClass('text-mw', { remove: true, link: 'https://web.unified-design-system.orange.com/docs/utilities/text' })],

  // Components
  // Badge
  ['ob1-badge', 'badge badge-count badge-positive'],
  ['ob1-badge-negative', 'badge-negative'],
  ['ob1-badge-warning', 'badge-warning'],
  ['ob1-badge-info', 'badge-info'],
  ['ob1-badge-disabled', 'badge-disabled'],
  [...warnForClass('ob1-badge-small', { remove: true, link: 'https://web.unified-design-system.orange.com/docs/components/badges#badge---count' })],
  ['ob1-badge-large', 'badge-large'],
  [...warnForClass('ob1-badge-inverse', { remove: true, link: 'https://web.unified-design-system.orange.com/docs/components/badges#badge---count' })],

  // Bullet list
  ['list', 'bullet-list'],
  [...warnForClass('ob1-list-inverse', { remove: true, link: 'https://web.unified-design-system.orange.com/docs/components/bullet-list' })],
  ['ob1-list-tick', 'bullet-list-tick'],

  // Buttons
  ['btn-secondary', 'btn-default'],
  ['btn-primary', 'btn-strong'],

  // Chips
  [
    ...warnForClass('ob1-inputchip', {
      message: 'The component using class \'{class}\' in {file} needs to be updated to use the new component version.',
      link: 'https://web.unified-design-system.orange.com/docs/components/tags#input-tag'
    })
  ],
  [
    ...warnForClass('ob1-filterchip', {
      message: 'The component using class \'{class}\' in {file} needs to be updated to use the new component version.',
      link: 'https://web.unified-design-system.orange.com/docs/components/chips#filter-chip'
    })
  ],

  // Divider
  [...warnForClass('separator', {
    message: 'The component using class \'{class}\' in {file} needs to be updated to use the new component version.',
    link: 'https://web.unified-design-system.orange.com/docs/components/divider'
  })],

  // Form
  [
    ...warnForClass('ob1-form-group', {
      message: 'The component using class \'{class}\' in {file} needs to be updated to use the new component version.',
      link: 'https://web.unified-design-system.orange.com/docs/components/text-input'
    })
  ],
  [
    ...warnForClass('ob1-switch', {
      message: 'The component using class \'{class}\' in {file} needs to be updated to use the new component version.',
      link: 'https://web.unified-design-system.orange.com/docs/components/switch'
    })
  ],

  // In-line suggestion
  [
    ...warnForClass('ob1-inline-suggestion', {
      message: 'The component using class \'{class}\' in {file} needs to be updated to use the new component version.',
      link: 'https://web.unified-design-system.orange.com/docs/components/alerts#alert-message'
    })
  ],

  // Link
  ['ob1-link', 'link'],
  ['ob1-link-arrow', 'link link-chevron'],
  ['ob1-link-small', 'link-small'],
  ['ob1-link-dark', 'link-on-colored-bg'],
  [...warnForClass('ob1-link-reverse', { remove: true, link: 'https://web.unified-design-system.orange.com/docs/components/links' })],
  [...warnForClass('no-decoration', { remove: true, link: 'https://web.unified-design-system.orange.com/docs/components/links' })],
  [
    ...warnForClass('ob1-link-icon', {
      message: 'The component using class \'{class}\' in {file} needs to be updated to use the new component version.',
      link: 'https://web.unified-design-system.orange.com/docs/components/links#with-icon'
    })
  ],

  // Skeleton
  [...warnForClass('ob1-skeleton', { link: 'https://web.unified-design-system.orange.com/docs/components/skeleton' })],
  ['ob1-skeleton-[\\w-]+', 'skeleton'],

  // Tag
  ['ob1-capsule', 'tag tag-positive'],
  ['ob1-capsule-negative', 'tag-negative'],
  ['ob1-capsule-warning', 'tag-warning'],
  ['ob1-capsule-information', 'tag-info'],
  ['ob1-capsule-disabled', 'tag-disabled'],
  ['ob1-capsule-reminder', 'tag-muted'],
  [...warnForClass('ob1-capsule-inverse', { remove: true, link: 'https://web.unified-design-system.orange.com/docs/components/tags#tag' })],
  ['ob1-capsule-small', 'tag-small'],
  ['ob1-tag', 'tag rounded-none'],
  ['ob1-tag-primary', 'tag-warning'],
  [...warnForClass('ob1-tag-subscribed', { link: 'https://web.unified-design-system.orange.com/docs/components/tags#tag' })],
  ['ob1-tag-unavailable', 'tag-muted'],
  [...warnForClass('ob1-tag-information', { remove: true, link: 'https://web.unified-design-system.orange.com/docs/components/tags#tag' })],
  [...warnForClass('ob1-tag-inverse', { remove: true, link: 'https://web.unified-design-system.orange.com/docs/components/tags#tag' })],
  ['ob1-tag-small', 'tag-small'],

  // OUDS updates
  ...oudsReplacements,
  ['xxl:([^ "]*)', '2xl:$1'] // replace xxl breakpoints everywhere
]
