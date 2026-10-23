// Playground for Text area
// Docs: https://web.unified-design-system.orange.com/orange/docs/1.4/components/text-area/
//
// `Hidden label` IS A CONTROL HERE, AND NOWHERE ELSE IN THE CORPUS.
// The rule that removed every hidden-text control (conventions.md §16) is about
// *texts* nobody ever sees. This is not that: the label's text stays the same
// and stays under `Label`, and what the checkbox moves is the **markup** — the
// `<label>` gains `visually-hidden` and the field gains a `title` carrying the
// same words, which is exactly what the documentation's own example writes. It
// is a documented variant of this component and of no other, which is why it
// survives here and stays removed everywhere else.
//
// Completes the form family of the corpus, beside Text input, Password input
// and Select input. Same container / field / messages shape, same
// helper-to-error switch, and three things of its own: the resize handle, a
// real `readonly` state, and a mandatory `placeholder`.
//
// THE PLACEHOLDER IS NOT OPTIONAL. "Even if you don't need a placeholder, you
// must always define the placeholder attribute with a single space character."
// The floating label is implemented in CSS only, through `:placeholder-shown`:
// a `<textarea>` with no `placeholder` never matches it, so the label never
// floats and sits on top of the text. Emptying the control below therefore
// falls back on a single space rather than printing `placeholder=""`, and the
// snippet says so.
//
// NO LOADING STATE. `.text-input` and `.select-input` both carry
// `loading-indeterminate` / `loading-determinate` rules; `.text-area` carries
// none, and the documentation page shows no loading example. So no `Loading`
// control and no loader markup — an absence worth stating, because the three
// neighbouring files all have one.
//
// THE HELPER SWITCH IS GUARDED HERE. Checked in the built stylesheet:
//
//   .text-area .text-area-container:has(.text-area-field:is(:user-error, [aria-invalid="true"])):has(~ .error-text) ~ .helper-text { display: none }
//   .select-input-container:has(:user-error, [aria-invalid="true"]) ~ .helper-text { display: none }
//
// The text area only hides its helper text when there is an `.error-text` to
// replace it with. The select input does not — see
// SelectInputPlayground.stories.js, where that gap is written up. Setting
// `Invalid` with an empty `Error text` on both components side by side is the
// quickest way to see the difference.
//
// WHAT IS TYPED IS KEPT, and there is no `Value` control. A story is rebuilt
// from its args on every control change, so without a store the field would
// empty the moment any control is touched. The field writes each keystroke into
// a global and the render function reads it back. This is also what makes
// `Read only` and `Disabled` legible: type first, then switch the state, and
// the text stays — which is how a real read-only field arrives on screen.

const states = ['Enabled', 'Read only', 'Disabled']

// `Skeleton` is one of the states, not a checkbox beside them. It is a wrapper
// in the markup — `<div aria-busy="true" inert>` around the component rendered
// in its first state — but in the Controls panel it answers the same question
// as the others: what does this look like right now.
// `Error` is one of the states too. It is an attribute rather than a wrapper —
// `aria-invalid="true"` on the field — but it cannot be combined with any of
// the others: a disabled field is not also invalid, and neither is a skeleton.
// One select, one question.

const stateOptions = [...states, 'Error', 'Skeleton']

const isSkeleton = (state) => state === 'Skeleton'

const isError = (state) => state === 'Error'

// The state the component is actually rendered in: `Error` and `Skeleton` sit
// in the same select but are not values the markup carries as a state.
const baseState = (state) => (states.includes(state) ? state : states[0])


// A control left on "Choose option" gives `undefined`. The component must still
// render, so every select falls back on the first value of its list rather than
// on an empty output.
const orElse = (value, options) => (options.includes(value) ? value : options[0])

const indent = (markup, pad) => markup.split('\n').map((line) => (line ? `${pad}${line}` : line)).join('\n')

const block = (parts, pad) => parts.filter(Boolean).map((part) => indent(part, pad)).join('\n')

// Fixed, readable ids, so the snippet can be pasted whole and renamed in one
// pass.
const ids = {
  field: 'text-area',
  label: 'text-area-label',
  helper: 'text-area-helper',
  error: 'text-area-error',
  link: 'text-area-link'
}

// Both sides resolve the topmost same-origin window, falling back to their own
// when the top is cross-origin, and to `globalThis` outside a browser, where
// `check_stories.js` replays the controls. `render` and the painted markup are
// not guaranteed to run in the same window — Storybook paints the canvas in the
// preview iframe, `build_preview.py` in a `srcdoc` iframe while `render` runs
// in the page around it — and a store on `globalThis` would then be two stores.
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

// The Code panel gets none of this — no `oninput`, no retained value. It prints
// an empty field, which is what the documentation writes.
const retain = {
  'canvas': { attr: retainAttr('textArea'), value: () => keptValue('textArea') },
  'code': { attr: '', value: () => '' }
}

const outlinedClasses = {
  'True': 'text-area-container-outlined',
  'False': ''
}

const resizeClasses = {
  'True': '',
  'False': 'text-area-no-resize'
}

const maxWidthClasses = {
  'True': 'component-max-width',
  'False': ''
}

// `readonly` is honoured by a `<textarea>`, unlike a checkbox where the
// attribute is inert and the documentation swaps the whole DOM. One attribute
// per state is enough here.
const stateAttrs = {
  'Enabled': '',
  'Read only': ' readonly',
  'Disabled': ' disabled'
}

const requiredAttrs = {
  'True': ' required',
  'False': ''
}

// A hidden label is still a label: it keeps its `for`, and the field gets a
// `title` carrying the same text, which is what the documentation example does.
const hiddenLabelClasses = {
  'True': 'visually-hidden',
  'False': ''
}

const titleAttrs = {
  'True': (label) => ` title="${label}"`,
  'False': () => ''
}

const requiredClasses = {
  'True': 'is-required',
  'False': ''
}

const invalidAttrs = {
  'True': ' aria-invalid="true"',
  'False': ''
}

// The error state points at the error message; otherwise the helper text
// takes the attribute. One target at a time.
const describedTargets = {
  'error': ids.error,
  'helper': ids.helper,
  'none': ''
}

const describedKind = ({ error, errorMessage, helperText }) => [
  { kind: 'error', when: Boolean(error) && Boolean(errorMessage) },
  { kind: 'helper', when: Boolean(helperText) }
].filter((entry) => entry.when).map((entry) => entry.kind)[0] ?? 'none'

const helperMarkup = (text) => (text ? `<p id="${ids.helper}" class="helper-text">${text}</p>` : '')

const errorMarkup = (text) => (text ? `<p id="${ids.error}" class="error-text">${text}</p>` : '')

// Labelled by its own id **and** the label's, with the `visually-hidden` span
// the documentation asks for: without it a form announces "More information"
// ten times over without saying what about.
const linkMarkup = (text) => (text
  ? `<a href="#" id="${ids.link}" aria-labelledby="${ids.link} ${ids.label}" class="link link-small">
  ${text} <span class="visually-hidden">on</span>
</a>`
  : '')

const placeholderComment = (placeholder) => (placeholder
  ? ''
  : '<!-- OUDS: the placeholder attribute is mandatory, a single space at minimum — the CSS-only floating label reads :placeholder-shown. -->\n')

const roundedWrappers = {
  'True': (markup) => `<div class="use-rounded-corner-inputs">
${indent(markup, '  ')}
</div>`,
  'False': (markup) => markup
}

// Skeleton is carried by an ancestor, `<div aria-busy="true" inert>`, never by
// the component itself: every child of that container renders as a skeleton,
// and `inert` takes it out of the tab order and of the accessibility tree.
// Same markup for every component of the design system.
const skeletonWrapper = (markup, skeleton) => (skeleton
  ? `<div aria-busy="true" inert>
${markup.split('\n').map((line) => (line ? `  ${line}` : line)).join('\n')}
</div>`
  : markup)

const renderTextArea = ({ label, hiddenLabel, placeholder, outlined, resize, helperText, helperLink, error, errorMessage, state, required, maxWidth, rounded }, side = 'canvas') => {
  const safeState = orElse(state, states)
  const kept = retain[side]

  const rootClasses = [
    'text-area',
    resizeClasses[resize ? 'True' : 'False'],
    maxWidthClasses[maxWidth ? 'True' : 'False']
  ].filter(Boolean).join(' ')

  const containerClasses = ['text-area-container', outlinedClasses[outlined ? 'True' : 'False']].filter(Boolean).join(' ')
  const labelClasses = ['', hiddenLabelClasses[hiddenLabel ? 'True' : 'False'], requiredClasses[required ? 'True' : 'False']].filter(Boolean).join(' ')
  const shownError = error ? errorMessage : ''
  const describedBy = describedTargets[describedKind({ error, errorMessage, helperText })]

  const field = `<textarea class="text-area-field" id="${ids.field}"${titleAttrs[hiddenLabel ? 'True' : 'False'](label)} placeholder="${placeholder || ' '}"${stateAttrs[safeState]}${requiredAttrs[required ? 'True' : 'False']}${invalidAttrs[error ? 'True' : 'False']}${describedBy ? ` aria-describedby="${describedBy}"` : ''}${kept.attr}>${kept.value()}</textarea>`

  const container = `<div class="${containerClasses}">
${block([
    `<label id="${ids.label}" for="${ids.field}"${labelClasses ? ` class="${labelClasses}"` : ''}>${label}</label>`,
    field
  ], '  ')}
</div>`

  const root = `<div class="${rootClasses}">
${block([container, helperMarkup(helperText), errorMarkup(shownError), linkMarkup(helperLink)], '  ')}
</div>`

  return placeholderComment(placeholder) + roundedWrappers[rounded ? 'True' : 'False'](root)
}

export default {
  title: 'Playground/Text area',
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'The floating label. It sits inside the field while the placeholder shows and floats above it as soon as something is typed — which is why the `placeholder` attribute below is mandatory.',
    },
    hiddenLabel: {
      name: 'Hidden label',
      control: 'boolean',
      description: 'Adds `visually-hidden` to the `<label>` and copies its text into a `title` on the field, as the documentation example does. The `<label for>` association stays: the label is hidden, not removed. The only control of its kind in the corpus: a text the canvas never shows is a constant everywhere in this corpus, but what moves here is the markup, and the documentation writes both forms.',
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: '**Mandatory.** "Even if you don\'t need a placeholder, you must always define the placeholder attribute with a single space character" — the CSS-only floating label reads `:placeholder-shown`. Emptying this control prints a single space and a comment saying why, rather than a broken `placeholder=""`.',
    },
    helperText: {
      name: 'Helper text',
      control: 'text',
      description: 'A `<p class="helper-text">` after the container, pointed at by `aria-describedby`. It takes HTML, which is how the documentation puts a `<strong>` around the character limit. Hidden when the field is error **and** an error text exists — the text area guards that switch, the select input does not.',
    },
    helperLink: {
      name: 'Helper link',
      control: 'text',
      description: 'A `.link.link-small` after the messages, labelled by its own id **and** the label’s (`aria-labelledby="<link> <label>"`), with the `visually-hidden` span the documentation asks for.',
    },
    state: {
      name: 'State',
      control: 'select',
      options: stateOptions,
      description: '`Read only` is a real attribute here, honoured by the browser — unlike a checkbox, where it is inert and the documentation swaps the whole DOM. Type into the field first, then switch: what was typed is kept, which is how a read-only field actually arrives on screen.',
    },
    errorMessage: {
      name: 'Error message',
      control: 'text',
      description: 'Written once and revealed by the state, so it is **not** gated on `Invalid` — that is how the stylesheet is built, and how a real page writes it. Takes HTML, like the helper text.',
      if: { arg: 'state', eq: 'Error' },
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Two things at once: `is-required` on the label, which draws the asterisk in an `::after`, and the `required` attribute on the `<textarea>`.',
    },
    outlined: {
      name: 'Outlined',
      control: 'boolean',
      description: '`text-area-container-outlined` — a transparent field with a full outline, in place of the filled one.',
    },
    resize: {
      name: 'Manual resizing',
      control: 'boolean',
      description: 'Unchecked adds `text-area-no-resize` **on `.text-area`**, not on the field: the class removes the browser\'s resize handle. Note the inversion — the design system names the class after the thing it takes away.',
    },
    rounded: {
      name: 'Rounded corners',
      control: 'boolean',
      description: '`use-rounded-corner-inputs` on an ancestor — normally `<body>`, a product-wide setting rather than a property of the field.',
    },
    maxWidth: {
      name: 'Max width',
      control: 'boolean',
      description: 'Here `component-max-width` is a **class on `.text-area`**, not a wrapper: the text area is one of the four components the stylesheet compounds that class with. On a button or a badge the constraint would have to go on an ancestor instead.',
    }
  }
}

export const PlaygroundTextArea = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { label, hiddenLabel, placeholder, outlined, resize, helperText, helperLink, errorMessage, state, required, maxWidth, rounded } = context.args

          return skeletonWrapper(renderTextArea({
            label,
            hiddenLabel,
            placeholder,
            outlined,
            resize,
            helperText,
            helperLink,
            error: isError(state),
            errorMessage,
            state: baseState(state),
            required,
            maxWidth,
            rounded,
          }, 'code'), isSkeleton(state))
        },
      },
    },
  },
  render: ({ label, hiddenLabel, placeholder, outlined, resize, helperText, helperLink, errorMessage, state, required, maxWidth, rounded }) => {
    return skeletonWrapper(renderTextArea({
      label,
      hiddenLabel,
      placeholder,
      outlined,
      resize,
      helperText,
      helperLink,
      error: isError(state),
      errorMessage,
      state: baseState(state),
      required,
      maxWidth,
      rounded,
    }), isSkeleton(state))
  },
  args: {
    label: 'Additional comments',
    hiddenLabel: false,
    placeholder: ' ',
    helperText: 'Please be concise and limit your comment to <strong>180</strong> characters.',
    helperLink: 'More information',
    state: 'Enabled',
    errorMessage: 'This field can\'t be empty.',
    required: false,
    outlined: false,
    resize: true,
    rounded: false,
    maxWidth: false
  },
}
