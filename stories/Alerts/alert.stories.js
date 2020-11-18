export default {
  title: 'Components/Alerts'
}

const Feedback = {
  Success: {
    class: 'alert-success',
    visuallyHiddenText: 'Success'
  },
  Information: {
    class: 'alert-info',
    visuallyHiddenText: 'Information'
  },
  Warning: {
    class: 'alert-warning',
    visuallyHiddenText: 'Warning'
  },
  Danger: {
    class: 'alert-danger',
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

export const Alerts = ({feedback, text, size, description}) => `
  <div class="alert ${feedback.class} ${size.class}" role="alert">
    <span class="alert-icon"><span class="visually-hidden">${feedback.visuallyHiddenText}</span></span>
    <div>
      <h4 class="alert-heading">${text}</h4>
      <p>${description}</p>
    </div>
  </div>
`;
Alerts.args = {
  text: 'Notification text goes here',
  description: 'Description text goes here'
}
Alerts.argTypes = {
  feedback: {
    options: Object.keys(Feedback),
    mapping: Feedback,
    control: {
      type: 'select'
    },
    table: {
      type: { summary: 'The type of feedback (Success, Information, Warning, Danger) will affect the color and icon rendering' },
      defaultValue: { summary: 'Success' }
    },
    defaultValue: Object.keys(Feedback)[0] // Success
  },
  size: {
    options: Object.keys(Size),
    mapping: Size,
    control: {
      type: 'select',
    },
    table: {
      type: {summary: 'The size (Medium, Small) will affect the rendering'},
      defaultValue: { summary: 'Medium' }
    },
    defaultValue: Object.keys(Size)[1] // Medium
  }
}
