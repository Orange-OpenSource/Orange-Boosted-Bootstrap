# Playground conventions, and why each one exists

Read this before writing or reviewing a story. The rules are short; the reasons
are what let you decide the cases no rule names.

Contents:

1. [Only expose what changes the markup](#1-only-expose-what-changes-the-markup)
2. [Freeze the properties that change nothing](#2-freeze-the-properties-that-change-nothing)
3. [Tables, not branches](#3-tables-not-branches)
4. [Checkboxes for booleans](#4-checkboxes-for-booleans)
5. [Every select falls back on its first option](#5-every-select-falls-back-on-its-first-option)
6. [Icons: inline on the canvas, sprite in the Code panel](#6-icons-inline-on-the-canvas-sprite-in-the-code-panel)
7. [Wrappers: max-width and skeleton](#7-wrappers-max-width-and-skeleton)
8. [Conditional controls](#8-conditional-controls)
9. [Groups of N](#9-groups-of-n)
10. [Descriptions](#10-descriptions)
11. [Preview-only scaffolding](#11-preview-only-scaffolding)
12. [When a state is a different DOM](#12-when-a-state-is-a-different-dom)
13. [Naming and layout](#13-naming-and-layout)
14. [A variant is a checkbox, not a catalogue](#14-a-variant-is-a-checkbox-not-a-catalogue)
15. [The canvas and the story may run in different windows](#15-the-canvas-and-the-story-may-run-in-different-windows)
16. [A text the canvas never shows is not a control](#16-a-text-the-canvas-never-shows-is-not-a-control)
17. [Every control carries a `name`, and the corpus shares one vocabulary](#17-every-control-carries-a-name-and-the-corpus-shares-one-vocabulary)
18. [More than one state means one `State` select](#18-more-than-one-state-means-one-state-select)
19. [A state hides the control it governs](#19-a-state-hides-the-control-it-governs)
20. [One order of controls, in every file](#20-one-order-of-controls-in-every-file)
21. [One warning, one shape, for every forbidden combination](#21-one-warning-one-shape-for-every-forbidden-combination)

---

## 1. Only expose what changes the markup

A control that does nothing when you move it teaches the reader something
false, and they have no way to tell it apart from a control they have not
understood yet. So a value earns its place in `options` only if it produces
markup no kept value already produces.

Decide this by replaying, not by reading. `check_stories.js` moves every
control in every configuration and reports the ones that never change the
output. Test in context, too: a property can be inert on the default args and
decisive elsewhere — `Error` does nothing on an empty field and everything on a
filled one.

One exception runs the other way, and §16 holds it: a text the canvas never
shows *does* change the markup, and is still not a control.

The counterweight matters as much: **a value that has real markup stays, even
if a mapping has no template for it**. `Loading`, `Indeterminate`, `Skeleton`
and the `Small` sizes were pruned once on mapping evidence and put back once
the stylesheet was read. Absence from a mapping is not absence from the design
system.

Figma's purely visual states — `Hover`, `Focus`, `Pressed` — have no class in
front of them and do not become options. Say so in a comment where the table
lives, so the next reader does not go looking.

## 2. Freeze the properties that change nothing

When *no* value of a property changes the markup, drop the control entirely and
make the value a constant at the top of the file, with a comment saying why:

```js
// Figma properties with no HTML counterpart: the value is frozen and no
// control is exposed, since changing it would change nothing.
// `Rounded corner` is a product-wide setting carried by
// `.use-rounded-corner-buttons` on an ancestor, not by the button.
const roundedCorner = 'False'
```

This is not the same as hiding it. The constant is the record that the property
exists in Figma and does not survive the trip into HTML — which is exactly the
question someone opens the playground to answer.

The same move covers a second family: a text the canvas never shows. It changes
the markup, so §1 would keep it, and it still has no business being a control —
§16 says why, and how to derive it from the state.

## 3. Tables, not branches

Every branch becomes an object indexed by the control's value. A story then
reads as data plus one render function, and the mapping between a Figma value
and a CSS class is visible at a glance instead of buried in control flow.

```js
const statusClasses = {
  'Neutral': 'badge-neutral',
  'Accent': 'badge-accent',
  // `.badge` alone renders Negative: no class in front of it.
  'Negative': ''
}

const classes = ['badge', statusClasses[status], sizeClasses[size]]
  .filter(Boolean).join(' ')
```

The empty string is meaningful: it says "this value is what the base class
already does". `.filter(Boolean)` removes it before joining, so no stray space
reaches the Code panel.

When the whole markup changes, not just a class, the table holds functions:

```js
const orientationTemplates = {
  'Horizontal': (classAttr) => `<hr${classAttr} />`,
  'Vertical': (classAttr) => `<div${classAttr}></div>`
}
```

Keep only keys something can reach. A table key that no control value can
select is dead code; drop it and keep the fact in a comment. `check_stories.js`
flags both dead keys and constants that are never read back.

When the correspondence is mechanical — `variant: 'strong'` → `btn-strong` — a
template literal is enough and a table would be noise.

## 4. Checkboxes for booleans

Figma distinguishes variant properties whose values are the strings `'True'`
and `'False'` (`Outlined`, `Reverse`, `Selected`, `Error`) from instance
booleans (`Icon`, `Description`, `Divider`). Nothing about that distinction
means anything to someone using the playground, and carrying it through gives
one component a checkbox and a `True/False` dropdown for the same idea.

Both become `control: 'boolean'`. Tables stay keyed by `'True'`/`'False'`,
since those are the mapping's keys, and the conversion happens on read:

```js
outlinedClasses[outlined ? 'True' : 'False']
```

## 5. Every select falls back on its first option

Storybook's Controls panel lets a select be cleared back to "Choose option",
which hands the render function `undefined`. Rendering nothing at that point
looks like a broken story.

```js
const orElse = (value, options) => (options.includes(value) ? value : options[0])

const safeState = orElse(state, states)
```

`check_stories.js` empties each select one at a time and then all together, and
fails the file if any combination renders nothing.

## 6. Icons: inline on the canvas, sprite in the Code panel

The documentation's markup references a hosted sprite:

```html
<svg aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"/></svg>
```

That path is right in a documentation page and resolves nowhere in Storybook,
and an SVG `<use>` does not cross origins — so the icon is invisible and the
control looks inert. Inlining the path fixes the canvas and ruins the Code
panel: on Button, the inlined path was 451 of 637 characters, in a snippet
whose whole purpose is being copied.

`render` and `transform` are two functions and nothing requires them to agree.
Declare both sets and let the render function take them as a parameter,
defaulting to the inline one:

```js
const inlineIcons = {
  heartEmpty: '<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="…"/></svg>'
}

const spriteIcons = {
  heartEmpty: '<svg aria-hidden="true"><use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"/></svg>'
}

const renderLink = ({ layout, label }, icons = inlineIcons) => { … }
```

`render` calls it plainly, so the canvas shows the icon whatever the hosting.
`transform` passes `spriteIcons`, so the Code panel shows what you would write
in a real page. Take inline paths from the repo's actual sprite
(`site/static/orange/docs/[version]/assets/img/ouds-web-sprite.svg`, 47
symbols, also bundled here as `assets/ouds-sprite.svg`); never redraw one.

When the icon is a free-text control, showing a sprite reference for markup the
user typed would be a lie, so switch on it:

```js
}, icon ? '' : spriteIcon)
```

The cost is that on these components the Code panel is not character-identical
to the canvas. `check_stories.js` bounds that risk: it compares the two
normalised outputs and warns when they differ outside `<svg>`, so an unintended
divergence still surfaces.

**A fixed icon path is a bug, not a placeholder.** The four `Item` playgrounds
shipped with the docs' `heart-empty` glyph hardcoded — no control could ever
change it. Any component whose markup draws an icon (not a status dot, not a
`Tag`/`Badge`, each already has its own playground) needs an `icon` text
control that repaints it, the pattern Button and the control-item playgrounds
already use:

```js
const resolveIcon = (icon, fallback) => (icon ? inlineIcon(icon) : fallback)
```

`render` resolves against the inline default, `transform` against the sprite
reference — same split as above. `check_stories.js` fails a file that has a
hardcoded `<path d="…">` with no matching `icon` control.

## 7. Wrappers: max-width and skeleton

Two wrappers recur across components, with the same body every time. **Neither
is offered by default.** Both were once put on every component that could
plausibly take one, and both taught something false: a `Max width` checkbox on
a Badge or a Breadcrumb says the design system bounds those components, which it
does not. The question is not "would a wrapper here be harmless?" but "does the
design system document one?".

So the gate is the documentation page, searched before writing the control:

- **`maxWidth`** — only where the docs' own examples carry
  `.component-max-width`. In the 1.4 corpus that is Text input, Password input,
  Checkbox item, Radio button item and Switch item, and nowhere else. The
  stylesheet agrees: the class only ever compounds with the form components
  (`.text-input.component-max-width`, `.select-input…`, `.text-area…`,
  `.checkbox-item…`, `.radio-button-item…`, `.switch-item…` and the three
  standalone controls). On those components use the **class**, not the wrapper.
- **`skeleton`** — only where the docs show an `aria-busy="true" inert`
  example. Most components have one; the standalone Checkbox, Radio button and
  Switch do not, and neither does Password input, where Text input does. That
  last one looks like a documentation gap rather than a real difference — flag
  it to the user rather than deciding alone.

Search both terms on the docs page before adding either control, and say in the
delivery note which components lost one and why. When `skeleton` is earned and
the component also has a `State` select, it is not a checkbox — it is one more
option of that select (§18), which also folds in `Error`.

When a wrapper does earn its place, the body is always this:

```js
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
// the component itself: every child of that container renders as a skeleton,
// and `inert` takes it out of the tab order and of the accessibility tree.
// Same markup for every component of the design system.
const skeletonWrapper = (markup, skeleton) => (skeleton
  ? `<div aria-busy="true" inert>
${markup.split('\n').map((line) => (line ? `  ${line}` : line)).join('\n')}
</div>`
  : markup)
```

Copy them verbatim, comment included — the comment is the reason the wrapper is
not a class on the component, which is the first thing a reader wonders.

## 8. Conditional controls

A control that only applies in one configuration is gated with Storybook's `if`
so it disappears when it is irrelevant:

```js
iconPath: {
  name: 'Icon path',
  control: 'text',
  if: { arg: 'leadingIcon', truthy: true },
}
```

Gate an icon control on the icon actually being rendered, an error message on
`error`, a determinate progress value on the determinate loading state. The
rule of thumb: if moving the control cannot change the output in the current
configuration, it should not be on screen.

### Storybook's grammar is `eq`, `neq`, `truthy`, `exists` — and nothing else

**There is no `gte`.** This cost a whole review round, because nothing fails
loudly: Storybook does not warn on an unknown operator, it falls back on a
truthiness test of the arg. `if: { arg: 'count', gte: 3 }` therefore reads as
"count is not 0", and the controls of items the component was not rendering
stayed on screen looking inert — on four components at once.

`build_preview.py` *does* honour `gte` — and `oneOf` / `notOneOf`, which are
ours too, for the case Storybook cannot express at all: "the status is one of
these two". So the standalone preview hides exactly the right controls while
Storybook shows too many. Do not let that difference go unrecorded: it is a real
divergence between the two surfaces a reader may be looking at.

```js
      // Alert message: the icon can only be removed on a non-functional status
      if: { arg: 'status', oneOf: ['Neutral', 'Accent'] },
```

`notOneOf` is its negation, for the rarer case where the exceptions are fewer
than the values that pass.

Three ways out, in order of preference:

1. **Express it with `eq` / `neq`.** A binary gate always can be. So can the
   first item of a group: `if: { arg: 'count', neq: 0 }` is exact on both
   surfaces and says "there is at least one".
2. **Remove the condition by removing the count** — freeze the group (§9). This
   is right whenever a bigger count teaches nothing.
3. **Keep `gte` and say so.** When adding an item is the very gesture the
   playground exists for — Alert message's bullets, Breadcrumb's drilldown — the
   arrows are worth more than the exactness. Gate item 1 on `neq: 0`, items 2
   and beyond on `gte`, and write the reservation in those controls'
   `description` and in the file header. Set the default args to the **full**
   count, otherwise the per-item controls are inert on load and
   `check_stories.js` is right to fail the file.

Never write a condition on two args at once — `if` carries one. When a control
depends on two things, the fix is upstream: merge the two controls into one.
Two cases in the corpus, both worth copying:

- Skeleton's `Height class` + `Ratio` became a single `Height` select, so
  `Height (px)` depends on one value (§9, and `component-notes.md`).
- Alert message's `Icon` checkbox + `Icon content` field became a single `Icon`
  select — `Design system icon` / `Custom icon` / `None`. `Icon content` had to
  vanish on a functional status *and* when there is no container to fill, which
  is two conditions; as one of three values it needs only
  `{ arg: 'icon', eq: 'Custom icon' }`, exact on both surfaces. The three values
  are the three shapes the container takes, so the merge is not a trick — it is
  the axis, named properly.
- `Error` moved into the `State` select (§18), which turned `Error message`'s
  gate from `{ arg: 'error', truthy: true }` into
  `{ arg: 'state', eq: 'Error' }` — **exact on both surfaces**. It is the only
  conditional control in the corpus that Storybook hides at the right moment.
  Folding a state into the select is therefore not only a panel decision: it
  buys an exact gate.

## 9. Groups of N

Some components are never alone in a real page — filter chips, radio buttons,
breadcrumb levels, bullet list items. Those stories expose a count plus a flat
set of per-item controls, each gated on the count:

```js
count: {
  name: 'Chips',
  control: { type: 'number', min: 1, max: 3, step: 1 },
  description: 'How many chips in the group, from 1 to 3. A filter chip is never alone in a real page: the container, the gap and the wrapping only show from two.',
},
chip2Label: {
  name: 'Chip 2 — label',
  control: 'text',
  if: { arg: 'count', gte: 2 },
},
```

Flat `chip2Label` args rather than an array of objects, because Storybook's
object editor is a JSON textarea — worse than three plain fields. Name them
`{item}{N}{Property}` and label them `Item N — property`, so the panel groups
visually without any nesting.

Keep the count small and bounded by what the component teaches: three chips is
enough to show the container, the gap and the wrapping.

**Gate every per-item control on the count.** Controls for items that are not
rendered are noise, and worse, they look inert. Item 1 takes
`if: { arg: 'count', neq: 0 }`, which is exact everywhere; items 2 and beyond
take `if: { arg: 'count', gte: N }`, which the standalone preview honours and
Storybook approximates — read §8 before writing one, and carry the reservation
into the control's `description`.

**Freeze the count when a bigger one teaches nothing — keep it when adding is
the gesture.** A count control is only worth its place if moving it shows
markup the previous value did not, *or* if adding an item is what someone opens
the playground to do.

| | Kept, with arrows | Frozen, no control |
|---|---|---|
| | Alert message — bullets, 0 to 3 | Filter chip — 2 chips |
| | Breadcrumb — drilldown, 1 to 4 | Suggestion chip — 2 chips |
| | | Radio button item — 2 options |
| | | Bullet list — depth 3, 2 items per list |

Two chips already show the container, the gap and a selected chip beside an
unselected one; a third adds a third identical `<li>`, so the count goes. A
bulleted alert or a four-level breadcrumb, on the other hand, is something a
reader *composes* — and taking the arrows away to replace them with an `object`
control turns adding a bullet into typing JSON. That trade was made and undone;
do not make it again.

**Cap a kept count at what the design system is built around.** Breadcrumb's
drilldown stops at 4 — Figma's own ceiling, and what the stylesheet assumes (it
puts levels back one media query at a time and shows all of them from 1320px).
An uncapped count is a runaway with nothing to teach past the cap.

Frozen numbers become named constants with the reason above them, the same way a
frozen Figma property does (§2).

**Group settings are one control, not N.** A property whose value a real page
would never vary inside one group is a single control for the whole group, even
though the markup repeats it per item. On Filter chip the form of the control
(checkbox / radio / button) and `disabled` are group settings — mixing checkbox
and radio chips inside one `chips-container` is not something anyone writes —
while the label and the selected state stay per item. Ask of each property:
would a real page set this differently on two items of the same group?

## 10. Descriptions

A `description` is where a reader learns something they could not have guessed.
Write one when the control's effect is subtle, when the class does something
different from what its name suggests, when a value is documented but not in
the published stylesheet, or when the playground's markup deviates from the
documentation's for a reason.

Do not write one that restates the control's name. `size: 'Size of the badge'`
is noise; `btn-small — 40 px high, label-medium typography, smaller icon and
paddings (scss/_buttons.scss). Not in the published 1.4.0 stylesheet yet` is
the whole reason someone opened the file.

Backticks render as code in both Storybook and the standalone preview, so use
them for class names, attributes and file paths.

## 11. Preview-only scaffolding

Some components are invisible without surroundings the documentation supplies —
a vertical divider has no height without a flex parent; a breadcrumb only shows
every level above 1320px. Add that scaffolding in `render` and leave it out of
`transform`, so the canvas is usable and the copied snippet stays the component:

```js
const surroundings = {
  'preview': (markup, orientation) => previewSurroundings[orientation](markup),
  'code': (markup) => markup
}

const renderDivider = ({ … }, preview = true) => …
```

`check_stories.js` will warn that render and transform diverge. That warning is
correct and expected — read the diff, confirm it is the scaffolding you added,
and leave a comment in the file saying what the canvas adds and why.

## 12. When a state is a different DOM

Some states are not an attribute at all. `readonly` on a checkbox is ignored by
browsers; the documentation swaps the `<input>` for a
`<span role="checkbox" aria-readonly="true" aria-disabled="true" tabindex="0"
aria-checked="…">` and the `<label>` for a `<p>`, since there is no form
control left to label. Two DOMs, two entries of a table:

```js
const shapes = { 'Enabled': 'input', 'Read only': 'readonly', 'Disabled': 'input' }

const indicators = {
  'input': ({ attrs }) => `<input class="control-item-indicator" type="checkbox"${attrs} />`,
  'readonly': ({ checked }) => `<span class="control-item-indicator" role="checkbox" …></span>`
}
```

When a state "seems to do nothing", this is the first thing to check: the
attribute may be inert and the real answer a different element. Read the
stylesheet and the documentation example rather than trusting the attribute.

## 13. Naming and layout

- Header: `// Playground for {Component}`, then `// Docs: {url}`, then any
  design notes as comments. `build_preview.py` reads the Docs line to link the
  documentation from the preview.
- Two lists, not one: `sizes` is the values offered (used by `options`),
  `sizeClasses` is the translation to CSS (used by the render function). They
  differ often enough that merging them causes bugs.
- **Every control carries a `name`** — see §17, which also holds the shared
  vocabulary. Without one, Storybook prints the arg key, in camelCase and lower
  case, right beside a control that does have a name.
- **The order of the controls is fixed** — §20. `argTypes` and `args` follow the
  same order, or Storybook lays the panel out from the args.
- **Every control value is sentence case**: first letter capital, the rest
  lowercase unless it is a proper noun. `Loading indeterminate`, not
  `loading indeterminate`; `Text + icon`, not `Text + Icon`; `Body large`, not
  `Body Large`. The values are read side by side in one Controls panel, and a
  panel that mixes `default` with `Neutral` reads as two components glued
  together. Mirror the mapping's *meaning*, not its casing — the table keys
  follow the control's values, so rename both together.
- Option lists first, then tables, then helpers, then the render function, then
  `export default`, then the story.
- `argTypes` expanded, one property per line, trailing comma inside; key order
  in the story is `parameters, render, args`; no semicolons; single quotes.
- Filenames are `{Component}Playground.stories.js`, flat in
  `stories/components-playground/`.

---

## 14. A variant is a checkbox, not a catalogue

`Button - On colored bg` and `Link - On colored bg` are not separate
components: they are one extra class — `btn-on-colored-bg`, `link-on-colored-bg`
— plus a coloured wrapper so the class has something to sit on. They belong in
the component's own story, and the control that reaches them is a **checkbox
named `On colored bg`**, not a select of the surfaces the design system offers.

The reason is what the control is being asked. Someone opening the playground
wants to know what the class changes. Four surfaces answer a different
question — which background utility exists — and they answer it worse than
`utilities/background/` does. So the story picks the pairing the component's own
documentation example uses, holds it in one constant, and says so:

```js
// A background utility must always be paired with the colour theme that goes
// with it, carried by a *child* element so the background itself does not
// follow the attribute (utilities/background/). The playground offers the
// pairing the documentation's own `on colored background` example uses. Swap
// the two values below to check another surface.
const coloredSurface = { surface: 'bg-surface-brand-primary', theme: 'light' }

const backgroundWrappers = {
  'True': wrapper(coloredSurface),
  'False': (markup) => markup
}
```

**Keep the warnings.** OUDS forbids some combinations — a `Brand` or `Negative`
button on a coloured background, a `Visited` link with no visited colour there.
The combination stays reachable, because one has to be able to see what it does,
and the story says why it is wrong twice over: a comment in the Code panel,
which is copied along with the markup, and a banner in the canvas, which is not,
and which is deliberately styled outside the design system so it cannot be
mistaken for a component. This turned out to be the most-liked thing in the
corpus — reuse the pattern wherever the design system forbids a combination the
markup allows.

**An "asset" select that folds type, size and status into one option string is
the same anti-pattern.** The four item playgrounds (Static/Navigation card and
list item) once offered a single `Leading asset` select with options like
`'Icon'`, `'Icon large'`, `'Status icon — Positive'`, `'Image xlarge rounded'`:
three independent axes — asset family, size, status — collapsed into one
catalogue of pre-baked combinations, so `Icon large` could not become a status
icon and `Icon` could not be resized without hunting for the right compound
string. Read as "which asset-family-size-status combos exist" — Badge's and
Chip's own catalogues answer that question worse than a real select per axis
would. The fix: one select per axis — `Leading asset` (family: `None`, `Icon`,
`Image`, `Slot`…), `Leading size` and `Leading status` — each gated with `if`
(§8) so only the combinations the stylesheet draws stay reachable: `Leading
size` on `if: { arg: 'leadingAsset', oneOf: ['Icon', 'Image'] }`, `Leading
status` on `if: { arg: 'leadingAsset', eq: 'Icon' }` since `Image` never takes
a status. A value neither axis's stylesheet draws (`Icon` + `XLarge rounded`)
is clamped in the render table rather than reachable — the same "every select
falls back" principle (§5), applied inside a table instead of at the top of
it. Whenever a value name reads like two or three properties glued with a
space or an em dash, that is the signal to split it into one control per axis
before it grows a fourth.

---

## 15. The canvas and the story may run in different windows

Text input and Password input keep what is typed into the canvas across a
re-render: a story is rebuilt from its args on every control change, so without
this the field empties the moment you touch anything — the most concrete
complaint the corpus ever got. The field writes each keystroke into a global and
the render function reads it back.

The trap is *which* global. `render` and the painted markup are not guaranteed
to run in the same window: Storybook paints the canvas in the preview iframe,
and `build_preview.py` paints it into a `srcdoc` iframe while `render` runs in
the page around it. A store on `globalThis` is then two stores, the `oninput`
writes to one and the render reads the other, and nothing is ever retained.
Both sides must resolve the *same* window:

```js
// Both sides resolve the topmost same-origin window, falling back to their own
// when the top is cross-origin, and to `globalThis` outside a browser, where
// `check_stories.js` replays the controls.
const storeWindow = () => {
  try {
    return globalThis.top && globalThis.top.document ? globalThis.top : globalThis
  } catch (error) {
    return globalThis
  }
}

const store = () => {
  const win = storeWindow()
  win.__oudsTyped = win.__oudsTyped || {}

  return win.__oudsTyped
}

const keptValue = (key) => store()[key] ?? ''

const retainAttr = (key) => ` oninput="var w; try { w = globalThis.top &amp;&amp; globalThis.top.document ? globalThis.top : globalThis } catch (e) { w = globalThis } (w.__oudsTyped = w.__oudsTyped || {})['${key}'] = this.value"`
```

The `globalThis` fallback is not decoration: `check_stories.js` runs the render
function in Node, where `window` does not exist, and a bare `window` reference
crashes the whole check.

`transform` gets none of this — no `oninput`, no retained value. The Code panel
prints an empty field, which is what the documentation writes.

**And do not add a `Value` control alongside it.** The field is there to be
typed into; a text control that fills the same field is a second way to do one
thing, and the two then have to arbitrate which wins on every render. Removing
it is also what exposed the bug above, since the control's value used to mask
the broken store.

---

## 16. A text the canvas never shows is not a control

A `visually-hidden` span, the accessible name of an icon-only button, an `href`,
an element the component hides: none of these are axes of the component. Typing
into them moves nothing on screen, so the reader cannot tell the control apart
from one they have not understood yet — which is exactly the failure §1 is
about, and naming the control "Hidden label" only labels the problem.

They become **constants at the top of the file**, with a comment saying why, and
**derived from the state when the state decides them**:

```js
// The hidden text is not a control: "colour should not be the only way to
// convey information", so what it announces is the meaning of the status. A
// non-functional status has no meaning to spell out and carries none.
const statusTexts = {
  'Negative': 'Error',
  'Positive': 'Success',
  'Neutral': '',
  ...
}
```

In the 1.4 corpus: Badge, Badge count, Badge icon and Alert message derive theirs
from the **status**; Password input's reveal button follows the field ("Show
password" / "Hide password"); Checkbox, Radio button, Switch, Input tag and Text
input's trailing action hold a fixed constant. Text area lost a `Hidden label`
**checkbox** under the same rule — it hid the visible label, which is the same
idea seen from the other side.

The constant is not a hiding place: it is the record that the text exists, that
it matters for accessibility, and that it has one correct value rather than a
free one. Accessibility still ships in the markup — it just stops being a
control.

`href` never becomes a control either. Links keep the `href="#"` (or `href="."`
for visited) of the documentation examples.

**One exception, and the line it draws.** Text area keeps a `Hidden label`
**checkbox**. This rule is about *texts* nobody ever sees — a field you type
into with nothing moving on screen. Text area's control types nothing: the
label's words stay under `Label`, and what the checkbox switches is the
**markup** — `visually-hidden` on the `<label>`, the same words copied into a
`title` on the field — which is a variant the component's own documentation
writes. A boolean that switches between two documented markups is an axis; a
text field feeding an invisible string is not. `check_stories.js` encodes
exactly that: it fails a `Hidden label` of type `text` and allows one of type
`boolean`.

---

## 17. Every control carries a `name`, and the corpus shares one vocabulary

Without a `name`, Storybook renders the arg key: `selectionStatus` sits under
`Error message` and the panel reads as two components glued together. Every
entry of `argTypes` gets one, in sentence case, whatever the key.

```js
    maxWidth: {
      name: 'Max width',
      control: 'boolean',
    },
```

The second half of the rule matters more, and is easier to lose: **the same idea
carries the same name across all 27 files.** A reader moves between components;
`Invalid` here and `Error` there is a difference they will look for a reason
behind, and there is none. The vocabulary settled in the 1.4 corpus:

| Idea | Name | Not |
|---|---|---|
| The component is in error | `Error` | `Invalid` |
| The message shown then | `Error message` | `Error text` |
| The component sits on a colored surface | `On colored background` | `On colored bg`, `Container background` |
| A boolean turning an icon on | `Icon`, or `Leading icon` when placed | `Show icon` |
| The free-text field holding the SVG | `Icon content` | `Icon`, `Icon path` |
| Product-wide rounded corners | `Rounded corners` | `Rounded corner` |
| Colour, anywhere | `color` | `colour` |

Rename the **arg key** with the label, not just the label — `errorText` under a
name reading `Error message` is the same inconsistency, one level down, and the
next person to read the file will hit it.

---

## 18. More than one state means one `State` select

A component with a `State` select and a `Skeleton` checkbox beside it asks the
same question twice: *what does this look like right now?* Two controls for one
question is what makes a panel feel assembled rather than designed — and the two
can be set to contradict each other.

**The rule, in one line: as soon as a component has more than one state, they
all live in one `State` select; if it has only one, that one stays a checkbox.**

Two states joined the select this way, and neither changes the markup a state
class would:

- **`Skeleton`** is a wrapper — `<div aria-busy="true" inert>` around the
  component rendered in its *first* state.
- **`Error`** is an attribute — `aria-invalid="true"` on the field.

Both are exclusive with everything else, which is the test. A disabled field is
not also invalid; a skeleton is neither. Folding them in deletes no reachable
render, and it was checked state by state rather than argued.

```js
const states = ['Enabled', 'Read only', 'Disabled']

// `Error` and `Skeleton` are states too, and neither combines with the others:
// a disabled field is not also invalid, and neither is a skeleton. One select,
// one question.
const stateOptions = [...states, 'Error', 'Skeleton']

const isSkeleton = (state) => state === 'Skeleton'

const isError = (state) => state === 'Error'

// The state the component is actually rendered in: `Error` and `Skeleton` sit
// in the same select but are not values the markup carries as a state.
const baseState = (state) => (states.includes(state) ? state : states[0])
```

`argTypes.state.options` becomes `stateOptions`, the `skeleton` and `error`
controls go away, and the story passes `state: baseState(state)` and
`error: isError(state)` into the render function, `isSkeleton(state)` into the
wrapper. `baseState` doubles as the `orElse` fallback, so an emptied select
still renders (§5).

Where a component has **no** other state, `Skeleton` stays a checkbox named
`Skeleton` — Alert message, Bullet list and Inline alert in the 1.4 corpus. And
where a component had two checkboxes and no select, they become one: Filter chip
and Suggestion chip went from `Disabled` + `Skeleton` to
`State: Enabled | Disabled | Skeleton`.

The §7 gate still decides whether `Skeleton` exists at all: only where the docs
page shows `aria-busy`. Password input is the one documented exception, added on
request because its DOM is the text input's and the gap reads as a
documentation gap — say so in the file when you make that kind of call.

---

## 19. A state hides the control it governs

`Error` and `Error message` are one idea in two controls. The stylesheet lets a
real page write the paragraph once and reveal it with the state —
`.error-text` is `display: none` until the container `:has()` an invalid input —
so for a while the story wrote it too, ungated, and said so in a comment.

That is right about the design system and wrong about the playground. A text
control writing into a paragraph the canvas is not showing is inert to the
person moving it, and the snippet then carries a message with no visible cause.
Worse, it was inconsistent: `Icon content` was gated on its icon while
`Error message` was not, on the same file.

So the state gates its message, in the Controls panel **and** in the markup:

```js
      if: { arg: 'state', eq: 'Error' },
```

```js
  const errorLine = maybe(isError(state) && errorMessage).map((text) => …)
```

And `aria-describedby` follows: it never points at an id the markup does not
carry, so the target is only chosen when the paragraph is actually written.

Apply it to **every** component that has the pair, not only the ones a review
names — in the 1.4 corpus the three control items and the four form fields, plus
the two standalone controls that carry `Error` without a message. A rule applied
to four files out of nine is the inconsistency it was meant to remove.

---

## 20. One order of controls, in every file

The panel used to follow each file's writing order, which meant 27 orders. A
reader moving between components then has to re-learn where things are, and the
Controls panel stops looking like one design system.

Five groups, always in this order, and **`args` is sorted with `argTypes`** —
Storybook lays the panel out from the args when the two disagree, which is how
`Loading time` once ended up somewhere other than under `State`.

1. **What it is** — `Status`, `Appearance`, `Variant`, `Direction`,
   `Orientation`, `Layout`, `Element`, `Control`, `Height`, `Size`, `Density`,
   `Color`, `Text style`, then the per-level variant axes of a tree.
2. **What it says** — `Label`, `Hidden label`, `Label element`, `Description`,
   `Placeholder`, `Helper text`, `Helper link`, `Prefix`, `Suffix`, `Legend`,
   `Number`, the counts and every per-item control, `Selected option`,
   `Group options`, `Action`, `Action element`, `Action label`, `Close button`.
3. **Its icon** — `Leading icon`, `Icon`, `Icon content`, `Trailing action`,
   `Action icon content`.
4. **Its state** — `State`, `Error message`, `Selected`, `Selection status`,
   `Hidden password`, `Loading`, `Loading time`, `Disabled`, `Required`.
5. **How it is presented** — `Outlined`, `Reverse`, `Divider`,
   `Manual resizing`, `On colored background`, `Opaque background`,
   `Rounded corners`, `Max width`, `Security margins`, `Width`, `Height (px)`,
   `Skeleton`.

`Error message` sits directly under `State` because it is gated on it (§19); the
same reasoning places any control right after the one that governs it.

The order is not alphabetical and not the order of the markup: it is the order
someone asks the questions. What is this? What does it say? Does it have an
icon? What state is it in? How is it wrapped?

A new key that fits none of these groups is a sign the control needs a better
name, or that it belongs to a group you have not recognised — decide before
adding it, rather than letting it fall to the end.

---

## 21. One warning, one shape, for every forbidden combination

§14 says the forbidden combinations stay reachable and get warned about twice.
The *how* has to be identical across the corpus, or the warnings read as four
different features. Button, Link, Navigation button and Alert message each had
their own — two banner styles, two wordings, and Link had no banner at all.

Copy this block verbatim (there are no `import`s in the corpus, so it is
duplicated on purpose), and give the component its own one-line `warningFor`:

```js
// OUDS forbids some combinations the markup allows. They stay reachable — one
// has to be able to see what they do — and the story says why they are wrong
// twice over: a comment that travels with the copied markup, and a banner in
// the canvas, which does not, and which is deliberately styled outside the
// design system so it cannot be mistaken for a component. The two helpers below
// are identical on every component of the corpus that has such a combination.
const warningBanner = (warning) =>
  `<p style="margin:0 0 12px;padding:8px 12px;border-left:3px solid #b8460e;background:#fff6e8;color:#8a5300;font:600 12px/1.45 system-ui,sans-serif">${warning}</p>
`

const warned = (markup, warning, preview) => (warning
  ? `${preview ? warningBanner(warning) : ''}<!-- ${warning} -->
${markup}`
  : markup)
```

Three fixed points: the sentence starts with `OUDS: `, the **comment goes into
both surfaces** (it is what survives a copy-paste), and the banner is
preview-only. The render function ends with
`return warned(wrapped, warningFor(…), preview)`.

