export default {
    title: 'Components/Modal'
  }
  
  export const Modal_1 = () => {
    return `
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <svg class="bd-placeholder-img modal-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#ddd"></rect><text x="50%" y="50%" fill="#999" dy=".3em" class="fw-bold">Image cap</text></svg>

        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"><span class="visually-hidden">Close</span></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
`
  }