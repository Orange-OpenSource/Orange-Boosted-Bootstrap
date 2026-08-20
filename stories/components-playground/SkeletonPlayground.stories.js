// Playground for Skeleton
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/skeleton/
//
// Several skeletons at once, not one: the security margins are what sits
// *between* two of them, so a single bar shows nothing of what the component
// does. They are wrapped in the container the documentation uses —
// `<div aria-busy="true" inert>` — which is also how a skeleton state is put on
// real components: every child of that container renders as a skeleton, and
// `inert` takes them out of the tab order and of the accessibility tree.
//
// The height classes are containers in the documentation examples
// (`<div class="skeleton-text" inert><div class="skeleton"></div>…`), not
// classes on each bar: that is where the margins between bars are defined.

const heights = ['Free', 'Title', 'Text']
const ratios = ['None', '1x1', '4x3', '16x9', '21x9']

// A control left on "Choose option" gives `undefined`. The component must still
// render, so every select falls back on the first value of its list rather than
// on an empty output.
const orElse = (value, options) => (options.includes(value) ? value : options[0])

// Only a positive integer is allowed for the number of bars.
const toCount = (value) => {
  const parsed = Number.parseInt(value, 10)

  return Number.isNaN(parsed) ? 1 : Math.min(Math.max(1, parsed), 8)
}

const heightClasses = {
  'Free': '',
  'Title': 'skeleton-title',
  'Text': 'skeleton-text'
}

const securityMarginClasses = {
  'True': '',
  'False': 'skeleton-no-margins'
}

const ratioClasses = {
  'None': '',
  '1x1': 'ratio-1x1',
  '4x3': 'ratio-4x3',
  '16x9': 'ratio-16x9',
  '21x9': 'ratio-21x9'
}

// A ratio computes the height from the width: an explicit height would fight
// it, so it is dropped. `Free` with no size at all falls back on the size of the
// documentation example, otherwise the bar would have no height and stay
// invisible.
// Width and height are numbers of pixels, not free text: a length is the only
// thing that makes sense here, and typing `50%` or `12rem` into a text field was
// asking for a unit the control could not check. 0 means “not set”.
const toSize = (value) => Math.max(0, Number.parseInt(value, 10) || 0)

const heightStyle = {
  'ratio': () => '',
  'class': () => '',
  'given': (height) => `height: ${toSize(height)}px;`,
  'fallback': () => 'height: 50px;'
}

const heightKey = ({ ratio, height, heightClass }) => [
  { key: 'ratio', when: ratioClasses[ratio] !== '' },
  { key: 'class', when: heightClass !== 'Free' },
  { key: 'given', when: toSize(height) > 0 },
  { key: 'fallback', when: heightClass === 'Free' }
].filter((entry) => entry.when).map((entry) => entry.key)[0] ?? 'ratio'

const styleAttr = ({ width, height, ratio, heightClass }) => {
  const style = [
    toSize(width) ? `width: ${toSize(width)}px;` : '',
    heightStyle[heightKey({ ratio, height, heightClass })](height)
  ].filter(Boolean).join(' ')

  return style ? ` style="${style}"` : ''
}

const renderSkeleton = ({ count, heightClass, securityMargin, ratio, width, height }) => {
  const safeHeight = orElse(heightClass, heights)
  const safeRatio = orElse(ratio, ratios)

  const containerClasses = [
    heightClasses[safeHeight],
    securityMarginClasses[(securityMargin ? 'True' : 'False')]
  ].filter(Boolean).join(' ')

  const barClasses = [
    'skeleton',
    ratioClasses[safeRatio]
  ].filter(Boolean).join(' ')

  const style = styleAttr({ width, height, ratio: safeRatio, heightClass: safeHeight })

  const bars = Array.from({ length: toCount(count) }, () =>
    `    <div class="${barClasses}"${style}></div>`)

  return `<div aria-busy="true" inert>
  <div${containerClasses ? ` class="${containerClasses}"` : ''}>
${bars.join('\n')}
  </div>
</div>`
}

export default {
  title: 'Playground/Skeleton',
  argTypes: {
    count: {
      name: 'Bars',
      control: { type: 'number', min: 1, max: 8, step: 1 },
      description: 'How many skeletons in the container. Two or more show the security margins, which sit between the bars.',
    },
    heightClass: {
      name: 'Height class',
      control: 'select',
      options: heights,
      description: '`Title` and `Text` are the documented container classes: they set the height of each bar and the margin between them. `Free`: no class, the height comes from the field below.',
    },
    securityMargin: {
      name: 'Security margins',
      control: 'boolean',
      description: 'Unchecked adds `skeleton-no-margins` on the container, which removes the security margins.',
    },
    ratio: {
      control: 'select',
      options: ratios,
      description: 'Aspect ratio utility, carried by each bar. It computes the height from the width, so the height below is then ignored.',
    },
    width: {
      name: 'Width (px)',
      control: { type: 'number', min: 0, max: 1200, step: 10 },
      description: 'In pixels. 0: full width. In a real page a sizing utility — `w-50`, `w-75`, `col-9` — does the same job in relative units.',
    },
    height: {
      name: 'Height (px)',
      control: { type: 'number', min: 0, max: 400, step: 5 },
      description: 'In pixels. Ignored when a ratio or a height class is set. 0 with a free height: 50px, the value of the documentation example.',
    }
  }
}

export const PlaygroundSkeleton = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { count, heightClass, securityMargin, ratio, width, height } = context.args

          return renderSkeleton({
            count,
            heightClass,
            securityMargin,
            ratio,
            width,
            height,
          })
        },
      },
    },
  },
  render: ({ count, heightClass, securityMargin, ratio, width, height }) => {
    return renderSkeleton({
      count,
      heightClass,
      securityMargin,
      ratio,
      width,
      height,
    })
  },
  args: {
    count: 3,
    heightClass: 'Text',
    securityMargin: true,
    ratio: 'None',
    width: 0,
    height: 0
  },
}
