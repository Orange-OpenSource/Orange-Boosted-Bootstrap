// Playground for Breadcrumb
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/breadcrumb/
// Gap — Level: on the Figma side each level is an instance of Link, with its own
// Size, Layout and State. The OUDS markup puts a bare <a> inside
// <li class="breadcrumb-item">: no .link class, the styling comes from the
// `.breadcrumb-item a` selector. Link's properties therefore have no counterpart
// in the breadcrumb markup. GAP TO BE ARBITRATED.
//
// `Drilldown` keeps its Figma name, but not its four values: Figma stops at N+4,
// the markup does not. It is a number, capped at 12 to avoid the runaway.
//
// One control per level rather than a single `object` one: Storybook renders an
// `object` control as a raw JSON editor, which is not a thing anyone wants to
// type a label into. Those controls carry `if: { gte }`, so a level only asks
// for its label once the drilldown reaches it. Storybook understands `eq`,
// `neq`, `truthy` and `exists`, not `gte` — it therefore shows the four of them
// at once, while the standalone playground hides those beyond the drilldown.
//
// Only the first four levels have controls: beyond, a level takes the label the
// documentation gives it, then `Level 5`, `Level 6`… — never an empty link.
const NAMED_LEVELS = [1, 2, 3, 4]

// Only a positive integer is allowed for the depth.
const toDrilldown = (value) => {
  const parsed = Number.parseInt(value, 10)

  return Number.isNaN(parsed) ? 1 : Math.min(Math.max(1, parsed), 12)
}

// Skeleton is carried by an ancestor, `<div aria-busy="true" inert>`, never by
// the component itself: every child of that container renders as a skeleton, and
// `inert` takes them out of the tab order and of the accessibility tree. Same
// markup for every component of the design system.
const skeletonWrappers = {
  'True': (markup) => `<div aria-busy="true" inert>
${markup.split('\n').map((line) => (line ? `  ${line}` : line)).join('\n')}
</div>`,
  'False': (markup) => markup
}

// `component-max-width` is the design system class, but the stylesheet only
// compounds it with the form components — text input, text area, select input,
// control items. Elsewhere the constraint goes on an ancestor, with the value
// the class carries: 30rem.
const maxWidthWrappers = {
  'True': (markup) => `<div style="max-width: 30rem">
${markup.split('\n').map((line) => (line ? `  ${line}` : line)).join('\n')}
</div>`,
  'False': (markup) => markup
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
  ...Array.from({ length: toDrilldown(args.drilldown) }, (_, index) => ({
    label: args[`level${index + 1}Label`] || defaultLabels[index] || `Level ${index + 1}`,
    truncatable: args[`level${index + 1}Truncatable`] ?? true,
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

  return skeletonWrappers[(args.skeleton ? 'True' : 'False')](
    maxWidthWrappers[(args.maxWidth ? 'True' : 'False')](
      surroundings[preview ? 'preview' : 'code'](markup)
    )
  )
}

// One label control and one truncation control per level, built from the same
// pair so the four levels cannot drift apart.
const levelArgTypes = Object.fromEntries(NAMED_LEVELS.flatMap((level) => {
  const index = level - 1

  return [
    [`level${level}Label`, {
      name: `Level ${level} — label`,
      control: 'text',
      description: `Visible text of level ${level}, copied into the \`title\` attribute. Empty: “${defaultLabels[index]}”, the label of the documentation example.`,
      if: { arg: 'drilldown', gte: level },
    }],
    [`level${level}Truncatable`, {
      name: `Level ${level} — truncatable`,
      control: 'boolean',
      description: 'Unchecked adds `flex-shrink-0` on the `<li>`, the only documented way to keep a level out of the automatic truncation.',
      if: { arg: 'drilldown', gte: level },
    }]
  ]
}))

const levelArgs = Object.fromEntries(NAMED_LEVELS.flatMap((level) => [
  [`level${level}Label`, ''],
  [`level${level}Truncatable`, true]
]))

export default {
  title: 'Playground/Breadcrumb',
  argTypes: {
    drilldown: {
      name: 'Drilldown',
      control: { type: 'number', min: 1, max: 12, step: 1 },
      description: 'How many levels before the current page. Figma stops at N+4, the markup does not — hence a number. The stylesheet only shows every level from 1320px, which the canvas works around; see the note at the top of the file.',
    },
    ...levelArgTypes,
    pageLabel: {
      name: 'Current page',
      control: 'text',
      description: 'Last item. It renders a `<span>`, not a link, and carries `aria-current="page"`.',
    },
    maxWidth: {
      name: 'Max width',
      control: 'boolean',
      description: 'Bounds the component to 30rem, the value of the `component-max-width` class — which the stylesheet reserves for the form components, so here it goes on an ancestor.',
    },
    skeleton: {
      control: 'boolean',
      description: 'Wraps the component in `<div aria-busy="true" inert>`, the way the design system puts a real component in a loading state.',
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
    drilldown: 1,
    ...levelArgs,
    pageLabel: 'Current page',
    maxWidth: false,
    skeleton: false
  },
}
