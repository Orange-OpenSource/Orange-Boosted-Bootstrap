# Header

Draft component — design not finalized. Based on Boosted Orange Navbar with OUDS Web adaptations.

## Global header

```html
<header>
  <nav class="navbar navbar-expand-lg" aria-label="Global navigation">
    <div class="container-fluid container-max-width">
      <div class="navbar-brand me-auto me-lg-xlarge">
        <a class="stretched-link" href="#">
          <img
            src="path/to/logo.svg"
            width="50"
            height="50"
            alt="OUDS Web - Back to Home"
            loading="lazy"
          />
        </a>
        <h1 class="title">Title</h1>
      </div>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target=".global-header-1"
        aria-controls="global-header-1.1 global-header-1.2"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        id="global-header-1.1"
        class="navbar-collapse collapse me-lg-auto global-header-1"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#" aria-current="page">Discover</a>
          </li>
          <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
        </ul>
      </div>
      <div
        id="global-header-1.2"
        class="navbar-collapse collapse d-sm-flex global-header-1"
      >
        <ul class="navbar-nav flex-row">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <svg
                width="1.5rem"
                height="1.5rem"
                fill="currentColor"
                aria-hidden="true"
              >
                <use xlink:href="path/to/ouds-web-sprite.svg#search"></use>
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <svg
                width="1.5rem"
                height="1.5rem"
                fill="currentColor"
                aria-hidden="true"
              >
                <use xlink:href="path/to/ouds-web-sprite.svg#buy"></use>
              </svg>
              <span class="visually-hidden">Basket</span>
              <span class="position-relative align-self-start">
                <span
                  class="badge badge-large badge-count badge-info position-absolute top-0 translate-middle"
                >
                  1<span class="visually-hidden">items</span>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
```

## Key elements

- `.navbar-brand` — contains logo (`<img>` inside `<a class="stretched-link">`) and `<h1 class="title">`
- `.nav-icon` — icon-only nav links (with `.visually-hidden` labels)
- Multiple `.navbar-collapse` groups sharing a common class for the toggler's `data-bs-target`
- Two-line title: use `<h1 class="two-lined">` with `<br />`

## Supra bar

Placed before the global header. Uses `.supra` on the `<nav>`:

```html
<nav class="navbar navbar-expand-lg supra" aria-label="Supra navigation">
  <div class="container-fluid container-max-width">
    <ul class="navbar-nav me-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">Personal</a>
      </li>
      <li class="nav-item"><a href="#" class="nav-link">Business</a></li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a
          class="nav-link active"
          href="#"
          aria-label="EN English"
          aria-current="true"
          >EN</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="#"
          aria-label="FR Français"
          lang="fr"
          hreflang="fr"
          >FR</a
        >
      </li>
    </ul>
  </div>
</nav>
```

## Navigation under

Additional nav bar placed after the global header as a second `<nav>` inside `<header>`. The collapse target is shared with the global header toggler.

> **Not Bootstrap:** Header is an OUDS Web/Boosted-specific component. Uses `.supra` for the top bar, `.nav-icon` for icon nav links, `.navbar-brand` with logo + title pattern. Currently a draft — refer to Boosted docs for full variations.
