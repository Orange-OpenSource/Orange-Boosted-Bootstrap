// Playground for Breadcrumb
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/breadcrumb/
// Gap — Level: on the Figma side each level is an instance of Link, with its own
// Size, Layout and State. The OUDS markup puts a bare <a> inside
// <li class="breadcrumb-item">: no .link class, the styling comes from the
// `.breadcrumb-item a` selector. Link's properties therefore have no counterpart
// in the breadcrumb markup. GAP TO BE ARBITRATED.
//
// Drilldown only fixes the *number* of levels before the current page. Figma
// stops at N+4; nothing in the markup does, so the control is a number and any
// depth can be tried.

// Labels of the documentation example. They are the fallback for any level the
// `items` control leaves out, so raising `levels` never renders an empty link.
const defaultItems = [
  { label: 'Home', truncatable: true },
  { label: 'Category 1', truncatable: true },
  { label: 'Sub category B', truncatable: true },
  { label: 'Sub sub category IV', truncatable: true }
]

// Preview only — every level stays on screen.
//
// The OUDS stylesheet hides levels rather than wrapping them: `.breadcrumb-item`
// is `display: none`, and the rules that put one back are viewport-wide media
// queries — the last two levels always, three from 736px, four from 1024px, all
// of them from 1320px (scss/_breadcrumb.scss). On a real page that is the
// intended responsive behaviour. In a playground it means raising `levels` makes
// the levels one is trying to look at disappear instead of appear, since the
// canvas is never 1320px wide.
//
// The canvas therefore carries this override, which restores `display` on every
// level and lets the row scroll rather than be clipped. `render` and `transform`
// are two distinct functions, so the Code panel gets none of it: the snippet
// stays plain OUDS markup, with the design system's own responsive behaviour.
const previewStyle = `<style>
  .breadcrumb-all-levels { overflow-x: auto; }
  .breadcrumb-all-levels .breadcrumb .breadcrumb-item { display: inline-flex; }
</style>`

// Only a positive integer is allowed for the depth.
const toLevels = (value) => {
  const parsed = Number.parseInt(value, 10)

  return Number.isNaN(parsed) ? 1 : Math.min(Math.max(1, parsed), 12)
}

const itemAt = (items, index) => {
  const item = Array.isArray(items) ? items[index] : undefined
  const fallback = defaultItems[index] ?? { label: `Level ${index + 1}`, truncatable: true }

  return {
    label: item && item.label !== undefined ? item.label : fallback.label,
    truncatable: item && item.truncatable !== undefined ? item.truncatable : fallback.truncatable
  }
}

// Once every level is displayed, the width left over is shared between them and
// the labels are cut with an ellipsis. The only documented lever against that is
// to take a level out of the sharing, which is what `flex-shrink-0` does — hence
// `truncatable: false`. The two last levels are already spared by the stylesheet.
//
// A level is a `<li>`, whatever its kind: the current page differs only by the
// class it carries, by `aria-current` and by the element it wraps its label in.
// Three small tables keyed by the kind, and one function renders them both.
const kindClasses = {
  'link': '',
  'current': 'active'
}

const kindAttr = {
  'link': '',
  'current': ' aria-current="page"'
}

const kindContent = {
  'link': (label) => `<a href="#" title="${label}">${label}</a>`,
  'current': (label) => `<span title="${label}">${label}</span>`
}

const itemClasses = ({ truncatable, kind }) => [
  'breadcrumb-item',
  kindClasses[kind],
  truncatable ? '' : 'flex-shrink-0'
].filter(Boolean).join(' ')

const renderItem = (item) =>
  `    <li class="${itemClasses(item)}"${kindAttr[item.kind]}>${kindContent[item.kind](item.label)}</li>`

// The levels before the current page, then the current page: one list, one
// shape, no special case at the end.
const itemsOf = ({ levels, items, pageLabel }) => [
  ...Array.from({ length: toLevels(levels) }, (_, index) => ({ ...itemAt(items, index), kind: 'link' })),
  { label: pageLabel, truncatable: true, kind: 'current' }
]

// `basic breadcrumb` on two items, `full breadcrumb` beyond — the wording of the
// documentation examples.
const navLabels = {
  'basic': 'basic breadcrumb',
  'full': 'full breadcrumb'
}

// The canvas gets the override, the Code panel gets plain OUDS markup.
const surroundings = {
  'preview': (markup) => `${previewStyle}
<div class="breadcrumb-all-levels">
${markup}
</div>`,
  'code': (markup) => markup
}

// An optional width constraint, carried by an ancestor: that is how a page
// bounds a component the design system leaves full width. `component-max-width`
// exists too, but the stylesheet reserves it for the form components — text
// input, text area, select input, and the control items. Empty: no wrapper at
// all, the markup is unchanged.
const maxWidthWrapper = (markup, maxWidth) => (String(maxWidth ?? '').trim()
  ? `<div style="max-width: ${maxWidth}">
${markup.split('\n').map((line) => (line ? `  ${line}` : line)).join('\n')}
</div>`
  : markup)

const renderBreadcrumb = ({ levels, items, pageLabel, maxWidth }, preview = true) => {
  const lines = itemsOf({ levels, items, pageLabel }).map(renderItem)

  const markup = `<nav aria-label="${navLabels[toLevels(levels) === 1 ? 'basic' : 'full']}">
  <ol class="breadcrumb">
${lines.join('\n')}
  </ol>
</nav>`

  return maxWidthWrapper(surroundings[preview ? 'preview' : 'code'](markup), maxWidth)
}

export default {
  title: 'Playground/Breadcrumb',
  argTypes: {
    levels: {
      name: 'Levels (N+)',
      control: { type: 'number', min: 1, max: 12, step: 1 },
      description: 'How many levels before the current page. Figma stops at N+4, the markup does not. Every level stays visible on the canvas, which the OUDS stylesheet only does from 1320px — see the note at the top of the file.',
    },
    items: {
      name: 'Levels detail',
      control: 'object',
      description: 'One entry per level, in order. `label` is the visible text, copied into the `title` attribute. `truncatable: false` adds `flex-shrink-0`, the only documented way to keep a level out of the automatic truncation. Entries left out fall back to the documentation labels.',
    },
    pageLabel: {
      name: 'Current page',
      control: 'text',
      description: 'Last item. It renders a `<span>`, not a link, and carries `aria-current="page"`.',
    },
    maxWidth: {
      name: 'Max width',
      control: 'text',
      description: 'Any CSS length — `24rem`, `320px`. Wraps the component in an ancestor carrying the constraint, which is how a page bounds it. `component-max-width` exists in the stylesheet but is reserved for the form components. Empty: no wrapper.',
    }
  }
}

export const PlaygroundBreadcrumb = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { levels, items, pageLabel, maxWidth } = context.args

          return renderBreadcrumb({
            levels,
            items,
            pageLabel,
            maxWidth,
          }, false)
        },
      },
    },
  },
  render: ({ levels, items, pageLabel, maxWidth }) => {
    return renderBreadcrumb({
      levels,
      items,
      pageLabel,
      maxWidth,
    })
  },
  args: {
    levels: 1,
    items: defaultItems,
    pageLabel: 'Current page',
    maxWidth: ''
  },
}
