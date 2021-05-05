export default {
    title: 'Components/Toasts'
  }
  
  export const Toasts_3 = () => {
    return `
<div class="toast-container">
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#ff7900"></rect></svg>

      <strong class="me-auto">Boosted</strong>
      <small>just now</small>
      <button type="button" class="btn-close ms-2" data-bs-dismiss="toast"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="toast-body">
      See? Just like this.
    </div>
  </div>

  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#ff7900"></rect></svg>

      <strong class="me-auto">Boosted</strong>
      <small>2 seconds ago</small>
      <button type="button" class="btn-close ms-2" data-bs-dismiss="toast"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="toast-body">
      Heads up, toasts will stack automatically
    </div>
  </div>
</div>
`
  }