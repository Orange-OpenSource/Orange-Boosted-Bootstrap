export default {
    title: 'Components/SteppedProcess'
  }
  
  export const SteppedProcess_0 = () => {
    return `
<nav class="stepped-process" aria-label="Checkout process">
  <p class="float-start mt-2 me-2 fw-bold d-sm-none">Step</p>
  <ol>
    <li class="stepped-process-item">
      <a class="stepped-process-link" href="#" title="1. Sign in">Sign in</a>
    </li>
    <li class="stepped-process-item active">
      <a class="stepped-process-link" href="#" title="2. Review" aria-current="step">Review</a>
    </li>
    <li class="stepped-process-item">
      <a class="stepped-process-link" href="#" title="3. Delivery">Delivery</a>
    </li>
    <li class="stepped-process-item">
      <a class="stepped-process-link" href="#" title="4. Payment">Payment</a>
    </li>
    <li class="stepped-process-item">
      <a class="stepped-process-link" href="#" title="5. Place order">Place order</a>
    </li>
  </ol>
</nav>
`
  }