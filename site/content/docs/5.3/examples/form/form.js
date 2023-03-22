(() => {
  'use strict'

  // Tooltip
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new boosted.Tooltip(tooltipTriggerEl)) // eslint-disable-line no-unused-vars, no-undef

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        // Focus on first error
        const invalidItems = form.querySelectorAll(':invalid')
        invalidItems[0].focus()
        // Add the id of the corresponding invalid message to each invalid field
        invalidItems.forEach(element => {
          const valuesArray = [element.id + 'Label', element.id + 'Feedback'].join(' ')
          element.setAttribute('aria-labelledby', valuesArray)
        })
        // Remove the id of the corresponding invalid message to each valid field
        const validItems = form.querySelectorAll(':valid')
        validItems.forEach(element => {
          element.setAttribute('aria-labelledby', element.id + 'Label')
        })
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
