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

// The `visually-hidden` span is the control's whole accessible name and never
// varies with anything the panel offers, so it is a constant rather than a
// control: a text no one ever sees on the canvas is not an axis of the
// component.
const hiddenLabel = 'Standalone checkbox'

const renderCheckbox = ({ state, selectionStatus, error }) => {
  const safeStatus = orElse(selectionStatus, selectionStatuses)
  const checkedAttr = selectionStatusMap[safeStatus]
  const invalidAttr = errorMap[(error ? 'True' : 'False')]
  const stateAttr = stateMap[orElse(state, states)]

  return `<label class="checkbox-standalone">
  <input class="control-item-indicator" type="checkbox" value="" id="checkboxStandalone"${checkedAttr}${invalidAttr}${stateAttr} />
  <span class="visually-hidden">${hiddenLabel}</span>
</label>${selectionScripts[safeStatus] ?? ''}`
}

export default {
  title: 'Playground/Checkbox',
  argTypes: {
    state: {
      name: 'State',
      control: 'select',
      options: states,
    },
    selectionStatus: {
      name: 'Selection status',
      control: 'select',
      options: selectionStatuses,
    },
    error: {
      name: 'Error',
      control: 'boolean',
    },
  }
}

export const PlaygroundCheckbox = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { state, selectionStatus, error } = context.args

          return renderCheckbox({
            state,
            selectionStatus,
            error,
          })
        },
      },
    },
  },
  render: ({ state, selectionStatus, error }) => {
    return renderCheckbox({
      state,
      selectionStatus,
      error,
    })
  },
  args: {
    state: 'Enabled',
    selectionStatus: 'Unselected',
    error: false
  },
}
