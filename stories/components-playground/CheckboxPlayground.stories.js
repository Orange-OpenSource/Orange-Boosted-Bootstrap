// Playground for Checkbox
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/checkbox/#standalone

// Fix — Read only: `readonly` is ignored by the browser on a checkbox, a radio
// button and a switch — only the value of a text field can be read only. The
// documentation shows a read only DOM for the *items* (a `<span role="…">` in
// place of the input), never for a standalone control, so the value is dropped
// here rather than emitted as an attribute that does nothing. The states left
// are the two that change the markup.
const states = ['Enabled', 'Disabled']
const selectionStatuses = ['Unselected', 'Selected', 'Indeterminate']

const selectionStatusMap = {
  'Unselected': '',
  'Selected': ' checked',
  'Indeterminate': ''
}

// A control left on "Choose option" gives `undefined`. The component must still
// render, so every select falls back on the first value of its list rather than
// on an empty output.
const orElse = (value, options) => (options.includes(value) ? value : options[0])

// `indeterminate` is a DOM *property*, which no attribute carries: the
// documentation sets it in JavaScript, and so does the snippet — without the
// script the checkbox is simply unselected. Hence the `id`, which the
// documentation example does not need.
const indeterminateScript = `
<script>
  document.getElementById('checkboxStandalone').indeterminate = true
<\/script>`

const selectionScripts = {
  'Indeterminate': indeterminateScript
}

const errorMap = {
  'False': '',
  'True': ' aria-invalid="true"'
}

const stateMap = {
  'Enabled': '',
  // Hover, Focus, Pressed and Skeleton are Figma states with no class in front
  // of them: they are not values of the control, so they are not entries here.
  'Disabled': ' disabled'
}

const renderCheckbox = ({ state, selectionStatus, error, hiddenLabel }) => {
  const safeStatus = orElse(selectionStatus, selectionStatuses)
  const checkedAttr = selectionStatusMap[safeStatus]
  const invalidAttr = errorMap[(error ? 'True' : 'False')]
  const stateAttr = stateMap[orElse(state, states)]

  return `<label class="checkbox-standalone">
  <input class="control-item-indicator" type="checkbox" value="" id="checkboxStandalone"${checkedAttr}${invalidAttr}${stateAttr} />
  <span class="visually-hidden">${hiddenLabel}</span>
</label>${selectionScripts[safeStatus] ?? ''}`
}

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
  title: 'Playground/Checkbox',
  argTypes: {
    state: {
      control: 'select',
      options: states,
    },
    selectionStatus: {
      control: 'select',
      options: selectionStatuses,
    },
    error: {
      control: 'boolean',
    },
    hiddenLabel: {
      name: 'Hidden label',
      control: 'text',
      description: 'Carried by the `visually-hidden` span: a standalone checkbox has no visible label, this is all a screen reader announces.',
    },
    skeleton: {
      control: 'boolean',
      description: 'Wraps the component in `<div aria-busy="true" inert>`, the way the design system puts a real component in a loading state. Same markup for every component.',
    }
  }
}

export const PlaygroundCheckbox = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { state, selectionStatus, error, hiddenLabel, skeleton } = context.args

          return skeletonWrapper(renderCheckbox({
            state,
            selectionStatus,
            error,
            hiddenLabel,
          }), skeleton)
        },
      },
    },
  },
  render: ({ state, selectionStatus, error, hiddenLabel, skeleton }) => {
    return skeletonWrapper(renderCheckbox({
      state,
      selectionStatus,
      error,
      hiddenLabel,
    }), skeleton)
  },
  args: {
    state: 'Enabled',
    selectionStatus: 'Unselected',
    error: false,
    hiddenLabel: 'Standalone checkbox',
    skeleton: false
  },
}
