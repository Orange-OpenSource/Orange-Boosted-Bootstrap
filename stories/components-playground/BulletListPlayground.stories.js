// Playground for Bullet list
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/bullet-list/
// Gap — Nested level: Figma carries a `Nested level` property, the markup nests
// <ul>/<ol> inside the <li>. That is content structure, not a component
// property — so the playground builds the nesting itself, which is the only way
// to see how the levels interact.
//
// The structure is a tree, not a spine: any number of items per list, and any
// item can carry a list of its own. It is held by the `tree` control, one entry
// per item, each with its own `children`. `lists` then holds the settings of
// each *depth* — the documentation examples set type, colour and marker one
// nesting level at a time, not one sublist at a time.
// Gap — Skeleton: applied on an ancestor: <div aria-busy="true" inert>. Same for
// every component.

const listTypes = ['Unordered', 'Ordered', 'Bare']
const markerColors = ['Inherited', 'Default', 'Brand']
const textStyles = ['Body Large', 'Body Medium']

// Figma properties with no counterpart in the HTML, and nothing to hold either:
// `Skeleton`, carried by an ancestor `<div aria-busy="true" inert>`, and the
// three marker properties — `Number`, `Uppercase letter`, `Lowercase letter`.
// The markers of an ordered list are CSS counters, `counter(list) "."` then
// upper-alpha and lower-alpha on the nested levels; the markup never carries
// them.

const textStyleClasses = {
  'Body Large': '',
  'Body Medium': 'fs-bm'
}

const boldClasses = {
  'True': '',
  'False': 'fw-normal'
}

const markerColorClasses = {
  'Inherited': '',
  'Default': 'bullet-list-default-color',
  'Brand': 'bullet-list-brand-color'
}

// The default structure is deliberately uneven: three items at the first level,
// four under the second of them, and a third branch two levels deep. A spine —
// one item per level — hides everything the markers do.
const defaultTree = [
  { label: 'Item 1', children: [] },
  {
    label: 'Item 2',
    children: [
      { label: 'Sub item 1', children: [] },
      { label: 'Sub item 2', children: [] },
      { label: 'Sub item 3', children: [] },
      { label: 'Sub item 4', children: [] }
    ]
  },
  {
    label: 'Item 3',
    children: [
      {
        label: 'Sub item A',
        children: [
          { label: 'Sub sub item 1', children: [] },
          { label: 'Sub sub item 2', children: [] }
        ]
      }
    ]
  }
]

// One entry per *depth*. Beyond what `lists` covers, a depth falls back on the
// last entry below, so an outline can be nested as deep as one likes without
// filling the table first. OUDS draws three marker levels; deeper lists reuse
// the third one.
const defaultLists = [
  { type: 'Unordered', markerColor: 'Default', icon: '' },
  { type: 'Unordered', markerColor: 'Inherited', icon: '' },
  { type: 'Unordered', markerColor: 'Inherited', icon: '' }
]

// The control holds the tree as it is rendered, so there is nothing to parse —
// only to fill in. A half-typed entry, a missing `children`, a value that is not
// an array: each falls back to something renderable rather than throwing.
const toNodes = (value) => (Array.isArray(value) ? value : []).map((node) => ({
  label: node && node.label !== undefined ? String(node.label) : '',
  children: toNodes(node && node.children)
}))

const levelAt = (lists, index) => {
  const level = Array.isArray(lists) ? lists[index] : undefined
  const fallback = defaultLists[index] ?? defaultLists[defaultLists.length - 1]
  const pick = (key) => (level && level[key] !== undefined && level[key] !== '' ? level[key] : fallback[key])

  return {
    type: listTypes.includes(pick('type')) ? pick('type') : 'Unordered',
    markerColor: markerColors.includes(pick('markerColor')) ? pick('markerColor') : 'Inherited',
    icon: level && level.icon ? level.icon : ''
  }
}

// A custom marker is a CSS mask, not an <svg> in the markup:
// `--bs-bullet-list-custom-marker` takes a `url()` pointing at an inline SVG.
// The colour therefore comes from the marker colour classes, never from the
// `fill` of the pasted SVG.
//
// Same rule as the `icon` controls elsewhere: a whole `<svg>…</svg>` is used as
// is, anything else is wrapped in a 24×24 viewBox. Double quotes become single
// ones and the angle brackets are percent-encoded, as the documentation does for
// its inline example.
// A custom property inherits: a marker set on one level carries on into the
// levels below, which is what the documentation example does. `none` puts the
// design system marker back on a level — `initial` makes the custom property
// invalid, so the stylesheet falls back to the marker of that level.
const markerKeyword = {
  '': '',
  'none': ' style="--bs-bullet-list-custom-marker: initial"'
}

// A whole `<svg>` keeps its own opening tag; anything else goes in a 24×24
// wrapper. `xmlns` is added when missing, without which the data URL renders
// nothing.
const markerSvg = (icon) => {
  const whole = /^\s*<svg[\s>]/i.test(icon)
    ? icon.trim()
    : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${icon}</svg>`

  return /\sxmlns=/i.test(whole)
    ? whole
    : whole.replace(/^<svg/i, '<svg xmlns="http://www.w3.org/2000/svg"')
}

const markerUrl = (icon) => {
  const encoded = markerSvg(icon)
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/#/g, '%23')
    .replace(/\s+/g, ' ')

  return ` style="--bs-bullet-list-custom-marker: url(&#34;data:image/svg+xml,${encoded}&#34;)"`
}

const markerStyle = (icon) => markerKeyword[String(icon ?? '').trim().toLowerCase()] ?? markerUrl(icon)

// `.bullet-list` is repeated on a nested list only where it is needed: when the
// element changes — an <ol> inside a <ul> — as the “Mixed lists” example does,
// and on a bare level, since the stylesheet selects
// `ul.bullet-list.bullet-list-bare`. Repeating it everywhere would restart the
// marker sequence at the first level.
const listClasses = ({ level, isRoot, tag, parentTag, textStyle, bold }) => [
  isRoot || tag !== parentTag || level.type === 'Bare' ? 'bullet-list' : '',
  level.type === 'Bare' ? 'bullet-list-bare' : '',
  isRoot ? textStyleClasses[textStyle] : '',
  isRoot ? boldClasses[(bold ? 'True' : 'False')] : '',
  markerColorClasses[level.markerColor]
].filter(Boolean).join(' ')

// A sublist hangs inside its parent <li>, after the label — the shape of the
// nested example in the documentation.
const renderList = ({ nodes, lists, depth, indent, parentTag, textStyle, bold }) => {
  const level = levelAt(lists, depth)
  const tag = level.type === 'Ordered' ? 'ol' : 'ul'
  const classes = listClasses({ level, isRoot: depth === 0, tag, parentTag, textStyle, bold })
  const pad = ' '.repeat(indent)
  const inner = ' '.repeat(indent + 2)

  const items = nodes.map((node) => (node.children.length
    ? `${inner}<li>${node.label}
${renderList({ nodes: node.children, lists, depth: depth + 1, indent: indent + 4, parentTag: tag, textStyle, bold })}
${inner}</li>`
    : `${inner}<li>${node.label}</li>`))

  return [
    `${pad}<${tag}${classes ? ` class="${classes}"` : ''}${markerStyle(level.icon)}>`,
    ...items,
    `${pad}</${tag}>`
  ].join('\n')
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

const renderBulletList = ({ tree, lists, textStyle, bold, maxWidth }) => {
  return maxWidthWrapper(renderList({
    nodes: toNodes(tree),
    lists,
    depth: 0,
    indent: 0,
    parentTag: '',
    textStyle,
    bold
  }), maxWidth)
}

export default {
  title: 'Playground/Bullet list',
  argTypes: {
    tree: {
      name: 'Items',
      control: 'object',
      description: 'The structure: one entry per item, `label` for its text and `children` for the list it carries — `[{ label, children: [{ label, children: [] }] }]`. Any number of items per list, any branch as deep as needed.',
    },
    lists: {
      name: 'Levels detail',
      control: 'object',
      description: 'One entry per *depth*, not per sublist: `type` (Unordered, Ordered, Bare), `markerColor` (Inherited, Default, Brand) and `icon` — a whole `<svg>…</svg>` or only its inside, turned into the `--bs-bullet-list-custom-marker` mask. All the sublists at the same depth share these, as the documentation examples do. A marker inherits into the levels below; `none` puts the design system marker back on a level.',
    },
    textStyle: {
      control: 'select',
      options: textStyles,
    },
    bold: {
      control: 'boolean',
    },
    maxWidth: {
      name: 'Max width',
      control: 'text',
      description: 'Any CSS length — `24rem`, `320px`. Wraps the component in an ancestor carrying the constraint, which is how a page bounds it. `component-max-width` exists in the stylesheet but is reserved for the form components. Empty: no wrapper.',
    }
  }
}

export const PlaygroundBulletList = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { tree, lists, textStyle, bold, maxWidth } = context.args

          return renderBulletList({
            tree,
            lists,
            textStyle,
            bold,
            maxWidth,
          })
        },
      },
    },
  },
  render: ({ tree, lists, textStyle, bold, maxWidth }) => {
    return renderBulletList({
      tree,
      lists,
      textStyle,
      bold,
      maxWidth,
    })
  },
  args: {
    tree: defaultTree,
    lists: defaultLists,
    textStyle: 'Body Large',
    bold: true,
    maxWidth: ''
  },
}
