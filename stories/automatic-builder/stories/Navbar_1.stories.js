export default {
    title: 'Components/Navbar'
  }
  
  export const Navbar_1 = () => {
    return `<!-- As a link -->
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
      <span class="h1">Navbar</span>
    </a>
  </div>
</nav>

<!-- As a heading -->
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <span class="navbar-brand">
        <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
        <span class="h1">Navbar</span>
    </span>
  </div>
</nav>
`
  }