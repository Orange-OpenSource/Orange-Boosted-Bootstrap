// Example starter JavaScript for managing forms with custom validation styles.
(() => {
  'use strict'

  function manageFeedbackMessage(field) {
    // Get the ID of the feedback message from the attribute data-feedback-id
    const feedbackId = field.getAttribute('data-feedback-id')
    let description = field.getAttribute('aria-describedby') || ''

    // aria-describedby can contain multiple space separated ids,
    //  we need to preserve everything other than feedback id
    description = description.replace(feedbackId, '').trim()
    if (feedbackId && field.checkValidity()) {
      // Valid field: remove feedback id from aria-describedby attribute string
      if (!description) {
        field.removeAttribute('aria-describedby')
        return
      }
    } else if (!field.checkValidity()) {
      // Add feedback id on aria-describedby if field invalid
      description = `${feedbackId} ${description}`
    }

    // Apply update on aria-describedby
    field.setAttribute('aria-describedby', description)
  }

  // Fetch all the forms we want to apply custom OUDS Web validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  forms.forEach(form => {
    // Gets all the fields of the form (input, select, textarea)
    const fields = form.querySelectorAll('input, select, textarea')

    // Initially manages feedback messages and add input listeners
    fields.forEach(field => {
      field.addEventListener('input', () => {
        manageFeedbackMessage(field)
      })
    })

    form.addEventListener('submit', event => {
      fields.forEach(field => {
        manageFeedbackMessage(field)
      })

      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
    }, false)
  })
})()
