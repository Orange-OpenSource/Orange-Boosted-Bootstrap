export default {
    title: 'Components/Toasts'
  }
  
  export const Toasts_4 = () => {
    return `
<div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast"><span class="visually-hidden">Close</span></button>
  </div>
</div>
`
  }