export default {
    title: 'Components/NavsTabs'
  }
  
  export const NavsTabs_12 = () => {
    return `
<nav class="nav nav-pills nav-justified">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Much longer nav link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
</nav>

`
  }