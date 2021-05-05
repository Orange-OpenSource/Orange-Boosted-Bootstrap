export default {
    title: 'Components/Spinners'
  }
  
  export const Spinners_8 = () => {
    return `
<button class="btn btn-primary" type="button" disabled="">
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled="">
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
`
  }