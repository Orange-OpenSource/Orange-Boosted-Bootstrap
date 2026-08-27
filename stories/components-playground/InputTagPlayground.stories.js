// Playground for Input tag
// Compiled from code-connect/mapping.yml (ouds-mapping v1.4.0)
// Docs: https://web.unified-design-system.orange.com/orange/docs/components/tags/#input-tag

const states = ['Enabled', 'Disabled']

// `Skeleton` is one of the states, not a checkbox beside them. It is a wrapper
// in the markup — `<div aria-busy="true" inert>` around the component rendered
// in its first state — but in the Controls panel it answers the same question
// as the others: what does this look like right now. Two controls for one
// question is what makes a panel read as two components glued together.
const stateOptions = [...states, 'Skeleton']

const isSkeleton = (state) => state === 'Skeleton'

const baseState = (state) => (isSkeleton(state) ? states[0] : state)


const stateMap = {
  'Enabled': '',
  // Hover, Pressed-Touch, Focus and Skeleton are Figma states with no class in
  // front of them: they are not values of the control, so they are not entries
  // here.
  'Disabled': ' disabled'
}

// The `visually-hidden` span is the control's whole accessible name and never
// varies with anything the panel offers, so it is a constant rather than a
// control: a text no one ever sees on the canvas is not an axis of the
// component.
const hiddenLabel = 'Remove this tag'

const renderInputTag = ({ state, label }) => {
  const disabledAttr = stateMap[state] ?? ''

  return `<button type="button" class="tag tag-input"${disabledAttr}>
  ${label}
  <span class="visually-hidden">${hiddenLabel}</span>
</button>`
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
  title: 'Playground/Input tag',
  argTypes: {
    state: {
      name: 'State',
      control: 'select',
      options: stateOptions,
    },
    label: {
      name: 'Label',
      control: 'text',
    }
  }
}

export const PlaygroundInputTag = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { state, label } = context.args

          return skeletonWrapper(renderInputTag({
            state: baseState(state),
            label,
          }), isSkeleton(state))
        },
      },
    },
  },
  render: ({ state, label }) => {
    return skeletonWrapper(renderInputTag({
      state: baseState(state),
      label,
    }), isSkeleton(state))
  },
  args: {
    state: 'Enabled',
    label: 'Label',
  },
}
