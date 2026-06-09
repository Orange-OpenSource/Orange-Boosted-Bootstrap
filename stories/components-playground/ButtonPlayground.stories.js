// Playground for Button

const buttonVariants = ['default', 'strong', 'brand', 'minimal', 'negative']
const layouts = ['Text only', 'Text + Icon', 'Icon only']
const states = ['enabled', 'disabled', 'loading']
const roundedOptions = [false, true]

const defaultIcon = '<path d="M851.8 172.224C754.746 75.18 597.77 74.613 500 170.492c-97.77-95.879-254.746-95.312-351.795 1.732-96.042 96.038-97.605 250.77-4.7 348.724L500 914v-.006.006l356.5-393.05c92.9-97.956 91.338-252.688-4.7-348.726Zm-65.476 277.332L500 766.694 213.677 449.557l-.145-.162a150.005 150.005 0 0 1 217.526-206.464q.222.222.45.438l43.788 41.64L500 308.784l24.7-23.77 43.794-41.645q.226-.216.449-.438A149.05 149.05 0 0 1 675.018 199a150 150 0 0 1 111.451 250.4Z" style="fill-rule:evenodd"/>'

const loadingLoader = `<svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
  <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
</svg>`

const renderIcon = (icon, hidden = false) => {
  if (!icon) {
    return ''
  }

  return `<svg ${hidden ? 'aria-hidden="true"' : ''} fill="currentColor" viewBox="0 0 1000 1000">${icon}</svg>`
}

const renderButton = ({ label, variant, layout, state, icon, rounded }) => {
  const isIconOnly = layout === 'Icon only'
  const shouldRenderIcon = layout !== 'Text only'
  const isLoading = state === 'loading'
  const isDisabled = state === 'disabled'
  const classes = ['btn']

  classes.push(`btn-${variant}`)

  if (isIconOnly) {
    classes.push('btn-icon')
  }

  if (isLoading) {
    classes.push('loading-indeterminate')
  }

  const iconMarkup = renderIcon(icon || defaultIcon, true)
  const loadingMarkup = isLoading
    ? `${loadingLoader}
    <span role="status" class="visually-hidden">Loading ${label}</span>`
    : ''

  const buttonMarkup = `<button type="button" class="${classes.join(' ')}"${isDisabled || isLoading ? ' disabled' : ''}>
    ${shouldRenderIcon ? iconMarkup : ''}
    ${isIconOnly ? `<span class="visually-hidden">${label}</span>` : label}
    ${loadingMarkup}
  </button>`

  if (rounded) {
    return `<div class="use-rounded-corner-buttons">${buttonMarkup}</div>`
  }

  return buttonMarkup
}

export default {
  title: 'Playground/Button',
  argTypes: {
    label: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: buttonVariants,
    },
    layout: {
      control: 'select',
      options: layouts,
    },
    state: {
      control: 'select',
      options: states,
    },
    rounded: {
      control: 'boolean',
    },
    icon: {
      control: 'text',
    }
  }
}

export const PlaygroundButton = {
  parameters: {
    docs: {
      codePanel: true,
      source: {
        transform: (_src, context) => {
          const { label, variant, layout, state, icon, rounded } = context.args

          return renderButton({
            label,
            variant: buttonVariants.includes(variant) ? variant : 'default',
            layout,
            state,
            icon,
            rounded,
          })
        },
      },
    },
  },
  render: ({ label, variant, layout, state, icon, rounded }) => {
    return renderButton({
      label,
      variant: buttonVariants.includes(variant) ? variant : 'default',
      layout,
      state,
      icon,
      rounded,
    })
  },
  args: {
    label: 'Label',
    variant: 'default',
    layout: 'Text + Icon',
    state: 'enabled',
    rounded: false,
    icon: '<path d="M851.8 172.224C754.746 75.18 597.77 74.613 500 170.492c-97.77-95.879-254.746-95.312-351.795 1.732-96.042 96.038-97.605 250.77-4.7 348.724L500 914v-.006.006l356.5-393.05c92.9-97.956 91.338-252.688-4.7-348.726Zm-65.476 277.332L500 766.694 213.677 449.557l-.145-.162a150.005 150.005 0 0 1 217.526-206.464q.222.222.45.438l43.788 41.64L500 308.784l24.7-23.77 43.794-41.645q.226-.216.449-.438A149.05 149.05 0 0 1 675.018 199a150 150 0 0 1 111.451 250.4Z" style="fill-rule:evenodd"/>'
  },
}
