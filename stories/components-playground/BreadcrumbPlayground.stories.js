// Playground for Breadcrumb
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/breadcrumb/
// Gap — Level: on the Figma side each level is an instance of Link, with its own
// Size, Layout and State. The OUDS markup puts a bare <a> inside
// <li class="breadcrumb-item">: no .link class, the styling comes from the
// `.breadcrumb-item a` selector. Link's properties therefore have no counterpart
// in the breadcrumb markup. GAP TO BE ARBITRATED.
//
// `Drilldown` keeps its Figma name and, now, its Figma ceiling: a number from 1
// to 4. The markup itself does not stop at four — it used to be capped at 12 —
// but the stylesheet is built around four plus the current page (it puts levels
// back one media query at a time and shows all of them from 1320px), and a
// fifth level adds a fifth identical `<li>`.
//
// One pair of controls per level rather than a single `object` one: Storybook
// renders an `object` control as a raw JSON editor, which is not a thing anyone
// wants to type a label into. Each pair carries
// `if: { arg: 'drilldown', gte: level }`, so a level only asks for its label
// once the drilldown reaches it — exactly, in the standalone preview, which
// understands `gte`. Storybook's own `if` grammar has only `eq`, `neq`,
// `truthy` and `exists`: it reads a `gte` as a truthiness test and therefore
// shows the four pairs at once. Level 1 is gated on `neq: 0` instead — it is
// always rendered, and the rule is exact on both surfaces.
const LEVELS = [1, 2, 3, 4]

// Only a positive integer is allowed for the depth, and never more than four.
const toDrilldown = (value) => {
  const parsed = Number.parseInt(value, 10)

  return Number.isNaN(parsed) ? 1 : Math.min(Math.max(1, parsed), LEVELS.length)
}


// Preview only — every level stays on screen.
//
// The OUDS stylesheet hides levels rather than wrapping them: `.breadcrumb-item`
// is `display: none`, and the rules that put one back are viewport-wide media
// queries — the last two levels always, three from 736px, four from 1024px, all
// of them from 1320px (scss/_breadcrumb.scss). On a real page that is the
// intended responsive behaviour. In a playground it means raising the drilldown
// makes the levels one is trying to look at disappear instead of appear, since
// the canvas is never 1320px wide.
//
// The canvas therefore carries this override, which restores `display` on every
// level and lets the row scroll rather than be clipped. `render` and `transform`
// are two distinct functions, so the Code panel gets none of it: the snippet
// stays plain OUDS markup, with the design system's own responsive behaviour.
const previewStyle = `<style>
  .breadcrumb-all-levels { overflow-x: auto; }
  .breadcrumb-all-levels .breadcrumb .breadcrumb-item { display: inline-flex; }
</style>`

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

// The labels of the documentation example, used when a level is left empty.
const defaultLabels = ['Home', 'Category 1', 'Sub category B', 'Sub sub category IV']

// The levels before the current page, then the current page: one list, one
// shape, no special case at the end. Each level reads its own two controls.
const itemsOf = (args) => [
  ...LEVELS.slice(0, toDrilldown(args.drilldown)).map((level) => ({
    label: args[`level${level}Label`] || defaultLabels[level - 1],
    truncatable: args[`level${level}Truncatable`] ?? true,
    kind: 'link'
  })),
  { label: args.pageLabel, truncatable: true, kind: 'current' }
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

const renderBreadcrumb = (args, preview = true) => {
  const lines = itemsOf(args).map(renderItem)
  const levels = toDrilldown(args.drilldown)

  const markup = `<nav aria-label="${navLabels[levels === 1 ? 'basic' : 'full']}">
  <ol class="breadcrumb">
${lines.join('\n')}
  </ol>
</nav>`

  return surroundings[preview ? 'preview' : 'code'](markup)
}

// Level 1 is always rendered, so `neq: 0` says the truth on both surfaces;
// beyond, only `gte` can express it, and only the standalone preview honours it.
const levelCondition = (level) => (level === 1
  ? { arg: 'drilldown', neq: 0 }
  : { arg: 'drilldown', gte: level })

// One label control and one truncation control per level, built from the same
// pair so the four levels cannot drift apart.
const levelArgTypes = Object.fromEntries(LEVELS.flatMap((level) => {
  const index = level - 1

  return [
    [`level${level}Label`, {
      name: `Level ${level} — label`,
      control: 'text',
      description: `Visible text of level ${level}, copied into the \`title\` attribute. Empty: “${defaultLabels[index]}”, the label of the documentation example.`,
      if: levelCondition(level),
    }],
    [`level${level}Truncatable`, {
      name: `Level ${level} — truncatable`,
      control: 'boolean',
      description: 'Unchecked adds `flex-shrink-0` on the `<li>`, the only documented way to keep a level out of the automatic truncation. It only bites once the levels are competing for the width, which at four levels they do.',
      if: levelCondition(level),
    }]
  ]
}))

const levelArgs = Object.fromEntries(LEVELS.flatMap((level) => [
  [`level${level}Label`, ''],
  [`level${level}Truncatable`, true]
]))

export default {
  title: 'Playground/Breadcrumb',
  argTypes: {
    drilldown: {
      name: 'Drilldown',
      control: { type: 'number', min: 1, max: 4, step: 1 },
      description: 'How many levels before the current page, from the arrows — Figma stops at N+4 and so does this control. The `<nav>` is announced as `basic breadcrumb` at one level and `full breadcrumb` beyond, as the documentation names its two examples. The stylesheet only shows every level from 1320px, which the canvas works around; see the note at the top of the file.',
    },
    ...levelArgTypes,
    pageLabel: {
      name: 'Current page',
      control: 'text',
      description: 'Last item. It renders a `<span>`, not a link, and carries `aria-current="page"`.',
    }
  }
}

export const PlaygroundBreadcrumb = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          return renderBreadcrumb(context.args, false)
        },
      },
    },
  },
  render: (args) => {
    return renderBreadcrumb(args)
  },
  args: {
    drilldown: 4,
    ...levelArgs,
    pageLabel: 'Current page'
  },
}
