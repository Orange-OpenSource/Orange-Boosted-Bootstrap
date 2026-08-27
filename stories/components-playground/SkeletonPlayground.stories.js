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
//
// ONE `Height` CONTROL, NOT A CLASS AND A RATIO SIDE BY SIDE.
//
// There used to be a `Height class` select and a `Ratio` select, and the two
// controls under them meant nothing in most of their combinations: the ratio is
// ignored under a height class, and the pixel height is ignored under either of
// them. Gating those needed two conditions at once — `heightClass is Free` and
// `ratio is None` — and Storybook's `if` carries exactly one.
//
// The three ways of giving a skeleton its height are exclusive anyway: a
// container class, an aspect ratio on the bar, or a length. So they are one
// select, and each remaining control then depends on that one value: `Height
// (px)` is the only control gated, on `Free`, and it is the only place a length
// is read. The markup is unchanged — the class still goes on the container and
// the ratio still goes on the bar.

const heights = ['Free', 'Title', 'Text', '1x1', '4x3', '16x9', '21x9']

// A control left on "Choose option" gives `undefined`. The component must still
// render, so every select falls back on the first value of its list rather than
// on an empty output.
const orElse = (value, options) => (options.includes(value) ? value : options[0])

// Only a positive integer is allowed for the number of bars.
const toCount = (value) => {
  const parsed = Number.parseInt(value, 10)

  return Number.isNaN(parsed) ? 1 : Math.min(Math.max(1, parsed), 8)
}

// The container classes: they set the height of each bar and the margins
// between them.
const heightClasses = {
  'Title': 'skeleton-title',
  'Text': 'skeleton-text'
}

const securityMarginClasses = {
  'True': '',
  'False': 'skeleton-no-margins'
}

// The aspect ratio utilities: they go on each bar and compute its height from
// its width.
const ratioClasses = {
  '1x1': 'ratio-1x1',
  '4x3': 'ratio-4x3',
  '16x9': 'ratio-16x9',
  '21x9': 'ratio-21x9'
}

// Width and height are numbers of pixels, not free text: a length is the only
// thing that makes sense here, and typing `50%` or `12rem` into a text field was
// asking for a unit the control could not check. 0 means “not set”.
const toSize = (value) => Math.max(0, Number.parseInt(value, 10) || 0)

// Only `Free` puts a height in the style attribute; with no length given it
// falls back on the size of the documentation example, otherwise the bar would
// have no height and stay invisible.
const heightStyles = {
  'Free': (height) => (toSize(height) ? `height: ${toSize(height)}px;` : 'height: 50px;')
}

const styleAttr = ({ width, heightPx, height }) => {
  const style = [
    toSize(width) ? `width: ${toSize(width)}px;` : '',
    (heightStyles[height] ?? (() => ''))(heightPx)
  ].filter(Boolean).join(' ')

  return style ? ` style="${style}"` : ''
}

const renderSkeleton = ({ count, height, securityMargin, width, heightPx }) => {
  const safeHeight = orElse(height, heights)

  const containerClasses = [
    heightClasses[safeHeight] ?? '',
    securityMarginClasses[(securityMargin ? 'True' : 'False')]
  ].filter(Boolean).join(' ')

  const barClasses = [
    'skeleton',
    ratioClasses[safeHeight] ?? ''
  ].filter(Boolean).join(' ')

  const style = styleAttr({ width, heightPx, height: safeHeight })

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
    height: {
      name: 'Height',
      control: 'select',
      options: heights,
      description: 'The three exclusive ways of giving a skeleton its height, in one control. `Title` and `Text` are the documented container **classes** — they set the height of each bar and the margin between them. `1x1` to `21x9` are the aspect **ratio** utilities, carried by each bar, which compute the height from the width. `Free` carries neither, and reads the length below.',
    },
    securityMargin: {
      name: 'Security margins',
      control: 'boolean',
      description: 'Unchecked adds `skeleton-no-margins` on the container, which removes the security margins.',
    },
    width: {
      name: 'Width (px)',
      control: { type: 'number', min: 0, max: 1200, step: 10 },
      description: 'In pixels, on each bar. 0: full width. In a real page a sizing utility — `w-50`, `w-75`, `col-9` — does the same job in relative units. Under a ratio it is the width that decides the height.',
    },
    heightPx: {
      name: 'Height (px)',
      control: { type: 'number', min: 0, max: 400, step: 5 },
      description: 'In pixels. Only on a `Free` height — a class or a ratio already answers the question, which is why this control is not on screen then. 0: 50px, the value of the documentation example.',
      if: { arg: 'height', eq: 'Free' },
    }
  }
}

export const PlaygroundSkeleton = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { count, height, securityMargin, width, heightPx } = context.args

          return renderSkeleton({
            count,
            height,
            securityMargin,
            width,
            heightPx,
          })
        },
      },
    },
  },
  render: ({ count, height, securityMargin, width, heightPx }) => {
    return renderSkeleton({
      count,
      height,
      securityMargin,
      width,
      heightPx,
    })
  },
  args: {
    count: 3,
    height: 'Text',
    securityMargin: true,
    width: 0,
    heightPx: 0
  },
}
