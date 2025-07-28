// Playground for Button

export default {
  title: 'Playground/Button',
  argTypes: {
    label: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['default', 'strong', 'minimal', 'negative'],
    },
    layout: {
      control: 'select',
      options: ['Text only', 'Text + Icon', 'Icon only'],
    },
    state: {
      control: 'select',
      options: ['enabled', 'disabled', 'loading'],
    },
    icon: {
      control: 'text',
    }
  }
}

export const PlaygroundButton = {
  render: ({ label, variant, layout, state, icon, ...args }) => {
    return `<button class="btn btn-${variant}${layout === 'Icon only' ? ' btn-icon' : ''}${state === 'loading' ? ' loading-indeterminate' : ''}"${state === 'disabled' ? ' disabled' : ''}>
    ${layout.includes('Icon') ? `<svg ${layout.includes('Text') ? 'aria-hidden="true"' : ''} fill="currentColor" viewBox="0 0 1000 1000">${icon}</svg>` : ''}
    ${!layout.startsWith('Icon') ? label : ''}
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
      <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
    </svg>
  </button>`
  },
  args: {
    label: 'Label 3',
    variant: 'default',
    layout: 'Text + Icon',
    state: 'enabled',
    icon: '<path d="M851.8 172.224C754.746 75.18 597.77 74.613 500 170.492c-97.77-95.879-254.746-95.312-351.795 1.732-96.042 96.038-97.605 250.77-4.7 348.724L500 914v-.006.006l356.5-393.05c92.9-97.956 91.338-252.688-4.7-348.726Zm-65.476 277.332L500 766.694 213.677 449.557l-.145-.162a150.005 150.005 0 0 1 217.526-206.464q.222.222.45.438l43.788 41.64L500 308.784l24.7-23.77 43.794-41.645q.226-.216.449-.438A149.05 149.05 0 0 1 675.018 199a150 150 0 0 1 111.451 250.4Z" style="fill-rule:evenodd"/>'
  },
}
