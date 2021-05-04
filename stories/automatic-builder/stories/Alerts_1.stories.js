export default {
    title: 'Components/Alerts'
  }
  
  export const Alerts_1 = () => {
    return `
<div class="alert alert-success alert-sm" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Success</span></span>
  <p>Success notification text goes here.</p>
</div>
<div class="alert alert-info alert-sm" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Info</span></span>
  <p>Information notification text goes here.</p>
</div>
<div class="alert alert-warning alert-sm" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
  <p>Warning notification text goes here.</p>
</div>
<div class="alert alert-danger alert-sm" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Error</span></span>
  <p>Error notification text goes here.</p>
</div>
`
  }