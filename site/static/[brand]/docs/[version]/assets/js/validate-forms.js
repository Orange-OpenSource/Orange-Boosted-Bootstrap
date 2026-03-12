// Example starter JavaScript for managing a11y in forms with client-side validation
(() => {
  'use strict'

  function manageFeedbackMessage(field) {
    // Get the ID of the feedback message from the attribute data-errormessage
    const errorMessageId = field.dataset.errormessage
    if (!errorMessageId) {
      return
    }

    const currentDescription = field.getAttribute('aria-describedby') || ''

    // aria-describedby can contain multiple space separated ids;
    // we need to preserve everything other than the feedback id
    const tokens = currentDescription
      .split(/\s+/)
      .filter(token => token && token !== errorMessageId)

    if (!field.checkValidity()) {
      // Add feedback id on aria-describedby if field invalid
      tokens.unshift(errorMessageId)
    }

    // Apply update on aria-describedby
    if (tokens.length > 0) {
      field.setAttribute('aria-describedby', tokens.join(' '))
    } else {
      field.removeAttribute('aria-describedby')
    }
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

        // Focus on first error for accessibility
        form.querySelector(':invalid').focus()
      }
    }, false)
  })
})()
