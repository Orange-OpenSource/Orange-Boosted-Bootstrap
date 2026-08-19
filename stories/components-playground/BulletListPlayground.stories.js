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
// Three depths, three sets of controls, and a tree built from two numbers. A
// single `object` control would have been shorter to write, but Storybook
// renders it as a raw JSON editor: nobody wants to type a label into that. OUDS
// draws three marker levels, so three depths cover what there is to see.
const DEPTHS = [1, 2, 3]

const depthLabels = ['Item', 'Sub item', 'Sub sub item']

const toDepth = (value) => Math.min(Math.max(1, Number.parseInt(value, 10) || 1), 3)
const toWidth = (value) => Math.min(Math.max(1, Number.parseInt(value, 10) || 1), 5)

// The tree, built from the two numbers: as many items per list, as deep as
// asked. Only the last item of each list carries the sublist — a full tree at
// depth 3 would be unreadable, and the markers are what one is looking at.
const treeOf = ({ depth, itemsPerLevel }, level = 0) => Array.from(
  { length: toWidth(itemsPerLevel) },
  (_, index) => ({
    label: `${depthLabels[level]} ${index + 1}`,
    children: index === toWidth(itemsPerLevel) - 1 && level < toDepth(depth) - 1
      ? treeOf({ depth, itemsPerLevel }, level + 1)
      : []
  })
)

const listsOf = (args) => DEPTHS.map((level) => ({
  type: args[`level${level}Type`],
  markerColor: args[`level${level}MarkerColor`],
  icon: args[`level${level}Icon`]
}))

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

// `component-max-width` is the design system class, but the stylesheet only
// compounds it with the form components — text input, text area, select input,
// control items. Elsewhere the constraint goes on an ancestor, with the value
// the class carries: 30rem.
const maxWidthWrapper = (markup, maxWidth) => (maxWidth
  ? `<div style="max-width: 30rem">
${markup.split('\n').map((line) => (line ? `  ${line}` : line)).join('\n')}
</div>`
  : markup)

// Skeleton is carried by an ancestor, `<div aria-busy="true" inert>`, never by
// the component itself: every child of that container renders as a skeleton, and
// `inert` takes it out of the tab order and of the accessibility tree. Same
// markup for every component of the design system.
const skeletonWrapper = (markup, skeleton) => (skeleton
  ? `<div aria-busy="true" inert>
${markup.split('\n').map((line) => (line ? `  ${line}` : line)).join('\n')}
</div>`
  : markup)

export default {
  title: 'Playground/Bullet list',
  argTypes: {
    depth: {
      name: 'Depth',
      control: { type: 'number', min: 1, max: 3, step: 1 },
      description: 'How many nesting levels. OUDS draws three marker levels; deeper lists reuse the third.',
    },
    itemsPerLevel: {
      name: 'Items per list',
      control: { type: 'number', min: 1, max: 5, step: 1 },
      description: 'How many items in each list. The last one of each carries the sublist, so the nesting stays readable.',
    },
    level1Type: {
      name: 'Level 1 — type',
      control: 'select',
      options: listTypes,
      description: 'Unordered, Ordered or Bare. An `<ol>` inside a `<ul>` reproduces the “Mixed lists” example of the documentation.',
    },
    level1MarkerColor: {
      name: 'Level 1 — marker colour',
      control: 'select',
      options: markerColors,
      description: '`Inherited` poses no class; the documentation sets the colour one nesting level at a time.',
    },
    level1Icon: {
      name: 'Level 1 — marker icon',
      control: 'text',
      description: 'A whole `<svg>…</svg>` or only its inside, turned into the `--bs-bullet-list-custom-marker` mask. A custom marker inherits into the levels below; `none` puts the design system marker back on a level.',
    },
    level2Type: {
      name: 'Level 2 — type',
      control: 'select',
      options: listTypes,
      description: 'Unordered, Ordered or Bare. An `<ol>` inside a `<ul>` reproduces the “Mixed lists” example of the documentation.',
    },
    level2MarkerColor: {
      name: 'Level 2 — marker colour',
      control: 'select',
      options: markerColors,
      description: '`Inherited` poses no class; the documentation sets the colour one nesting level at a time.',
    },
    level2Icon: {
      name: 'Level 2 — marker icon',
      control: 'text',
      description: 'A whole `<svg>…</svg>` or only its inside, turned into the `--bs-bullet-list-custom-marker` mask. A custom marker inherits into the levels below; `none` puts the design system marker back on a level.',
    },
    level3Type: {
      name: 'Level 3 — type',
      control: 'select',
      options: listTypes,
      description: 'Unordered, Ordered or Bare. An `<ol>` inside a `<ul>` reproduces the “Mixed lists” example of the documentation.',
    },
    level3MarkerColor: {
      name: 'Level 3 — marker colour',
      control: 'select',
      options: markerColors,
      description: '`Inherited` poses no class; the documentation sets the colour one nesting level at a time.',
    },
    level3Icon: {
      name: 'Level 3 — marker icon',
      control: 'text',
      description: 'A whole `<svg>…</svg>` or only its inside, turned into the `--bs-bullet-list-custom-marker` mask. A custom marker inherits into the levels below; `none` puts the design system marker back on a level.',
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
      control: 'boolean',
      description: 'Bounds the component to 30rem, the value of the `component-max-width` class — which the stylesheet reserves for the form components, so here it goes on an ancestor.',
    },
    skeleton: {
      control: 'boolean',
      description: 'Wraps the component in `<div aria-busy="true" inert>`, the way the design system puts a real component in a loading state. Same markup for every component.',
    }
  }
}

export const PlaygroundBulletList = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { textStyle, bold, maxWidth, skeleton } = context.args

          return skeletonWrapper(renderBulletList({
            tree: treeOf(context.args),
            lists: listsOf(context.args),
            textStyle,
            bold,
            maxWidth,
          }), skeleton)
        },
      },
    },
  },
  render: (args) => {
    const { textStyle, bold, maxWidth, skeleton } = args

    return skeletonWrapper(renderBulletList({
      tree: treeOf(args),
      lists: listsOf(args),
      textStyle,
      bold,
      maxWidth,
    }), skeleton)
  },
  args: {
    depth: 3,
    itemsPerLevel: 3,
    level1Type: 'Unordered',
    level1MarkerColor: 'Default',
    level1Icon: '',
    level2Type: 'Unordered',
    level2MarkerColor: 'Inherited',
    level2Icon: '',
    level3Type: 'Unordered',
    level3MarkerColor: 'Inherited',
    level3Icon: '',
    textStyle: 'Body Large',
    bold: true,
    maxWidth: false,
    skeleton: false
  },
}
