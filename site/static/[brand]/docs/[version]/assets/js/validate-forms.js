// Example starter JavaScript for managing a11y in forms with client-side validation
(() => {
  'use strict'

  function manageFeedbackMessage(field) {
    // Get the ID of the feedback message from the attribute data-errormessage
    const errorMessageId = field.dataset.errormessage
    let description = field.getAttribute('aria-describedby') || ''

    // aria-describedby can contain multiple space separated ids,
    //  we need to preserve everything other than feedback id
    description = description.replace(errorMessageId, '').trim()
    if (!field.checkValidity()) {
      // Add feedback id on aria-describedby if field invalid
      description = `${errorMessageId} ${description}`
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
        // Focus on first error for accessibility
        const invalidItems = form.querySelectorAll(':user-invalid')
        invalidItems[0].focus()

        event.preventDefault()
        event.stopPropagation()
      }
    }, false)
  })
})()
