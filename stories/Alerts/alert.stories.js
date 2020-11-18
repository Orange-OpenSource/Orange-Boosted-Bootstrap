import {
  withKnobs,
  select,
  text,
  boolean
} from '@storybook/addon-knobs'

export default {
  title: 'Components/Alerts',
  decorators: [
    withKnobs
  ]
}

const Type = {
  Success: {
    class: 'alert-success',
    text: 'Success notification test goes here.',
    visuallyHiddenText: 'Success'
  },
  Information: {
    class: 'alert-info',
    text: 'Information notification test goes here.',
    visuallyHiddenText: 'Information'
  },
  Warning: {
    class: 'alert-warning',
    text: 'Warning notification test goes here.',
    visuallyHiddenText: 'Warning'
  },
  Danger: {
    class: 'alert-danger',
    text: 'Danger notification test goes here.',
    visuallyHiddenText: 'Danger'
  }
}

const Size = {
  Small: {
    class: 'alert-sm'
  },
  Medium: {
    class: ''
  }
}

export const Alerts = () => {
  const type = select('Type', Type, Type.Success)
  const typeClass = type.class
  const mainText = text('Text', Type.Success.text)
  const sizeClass = select('Size', Size, Size.Medium).class

  const additionalContent = boolean('Additional content', false)

  if (additionalContent) {
    const description = text('Description', 'Description text goes here')
    return `<div class="alert ${typeClass} ${sizeClass}" role="alert">
      <span class="alert-icon"><span class="visually-hidden">${type.visuallyHiddenText}</span></span>
      <div>
        <h4 class="alert-heading">${mainText}</h4>
        <p>${description}</p>
      </div>
    </div>`
  }

  return `<div class="alert ${typeClass} ${sizeClass}" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Success</span></span>
    <p>${mainText}</p>
  </div>`
}
