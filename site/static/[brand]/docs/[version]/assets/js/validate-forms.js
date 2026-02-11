// Example starter JavaScript for managing forms with custom validation styles.
(() => {
  'use strict'

  function manageFeedbackMessage(field) {
    // Get the ID of the feedback message from the attribute data-feedback-id
    const feedbackId = field.getAttribute('data-feedback-id')

    if (feedbackId && field.checkValidity()) {
      field.removeAttribute('aria-describedby')
    } else if (!field.checkValidity()) {
      field.setAttribute('aria-describedby', feedbackId)
    }
  }

  let inputListenersAdded = false;

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    // Gets all the fields of the form (input, select, textarea)
    const fields = form.querySelectorAll('input, select, textarea')

    form.addEventListener('submit', event => {
      // Initially manages feedback messages and add input listeners
      if (!inputListenersAdded) {
        fields.forEach(field => {
          manageFeedbackMessage(field)

          field.addEventListener('input', () => {
            manageFeedbackMessage(field)
          })
        })
        inputListenersAdded = true
      }

      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
