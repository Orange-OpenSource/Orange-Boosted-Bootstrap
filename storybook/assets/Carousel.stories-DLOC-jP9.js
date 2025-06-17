const G={title:"Components/Carousel",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#50be87"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#a885d8"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>`,t=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleIndicators" class="carousel slide is-paused">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#50be87"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#a885d8"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>`,l=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExamplePause" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
  <div class="carousel-action-bar">
    <button type="button" class="btn btn-icon carousel-control-play-pause pause" data-bs-target="#carouselExamplePause" data-bs-play-text="Play Carousel" data-bs-pause-text="Pause Carousel" title="Pause Carousel">
      <span class="visually-hidden">Pause Carousel</span>
    </button>
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#50be87"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#a885d8"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExamplePause" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExamplePause" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>`,a=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleCaptions" class="carousel slide is-paused">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">First slide</text>
        </svg>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="mb-0">First slide label</h5>
        <p class="mb-0">Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#50be87"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Second slide</text>
        </svg>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="mb-0">Second slide label</h5>
        <p class="mb-0">Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#a885d8"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text>
        </svg>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="mb-0">Third slide label</h5>
        <p class="mb-0">Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>`,s=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#50be87"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#a885d8"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>`,r=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>`,i=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>`,o=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style="--bs-carousel-interval:10000ms;"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#50be87"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#a885d8"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>`,d=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>`,c=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleNoWrap" class="carousel slide" data-bs-wrap="false" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleNoWrap" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleNoWrap" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleNoWrap" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#50be87"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#a885d8"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleNoWrap" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleNoWrap" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>`,n=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleNoRide" class="carousel slide is-static is-paused">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleNoRide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleNoRide" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleNoRide" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#50be87"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#a885d8"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleNoRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleNoRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>`;var p,u,b;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#50be87"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#a885d8"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>\``,...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,v,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleIndicators" class="carousel slide is-paused">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#50be87"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#a885d8"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>\``,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var m,x,w;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExamplePause" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
  <div class="carousel-action-bar">
    <button type="button" class="btn btn-icon carousel-control-play-pause pause" data-bs-target="#carouselExamplePause" data-bs-play-text="Play Carousel" data-bs-pause-text="Pause Carousel" title="Pause Carousel">
      <span class="visually-hidden">Pause Carousel</span>
    </button>
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#50be87"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#a885d8"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExamplePause" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExamplePause" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>\``,...(w=(x=l.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var y,f,k;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleCaptions" class="carousel slide is-paused">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">First slide</text>
        </svg>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="mb-0">First slide label</h5>
        <p class="mb-0">Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#50be87"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Second slide</text>
        </svg>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="mb-0">Second slide label</h5>
        <p class="mb-0">Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#a885d8"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text>
        </svg>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="mb-0">Third slide label</h5>
        <p class="mb-0">Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>\``,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var P,E,S;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#50be87"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#a885d8"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>\``,...(S=(E=s.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var M,A,C;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>\``,...(C=(A=r.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var R,Y,F;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>\``,...(F=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var N,T,I;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style="--bs-carousel-interval:10000ms;"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#50be87"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#a885d8"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>\``,...(I=(T=o.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var j,q,_;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>\``,...(_=(q=d.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var O,D,L;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleNoWrap" class="carousel slide" data-bs-wrap="false" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleNoWrap" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleNoWrap" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleNoWrap" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#50be87"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#a885d8"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleNoWrap" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleNoWrap" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>\``,...(L=(D=c.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var W,z,B;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="carouselExampleNoRide" class="carousel slide is-static is-paused">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleNoRide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleNoRide" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleNoRide" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#50be87"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#a885d8"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text>
        </svg>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleNoRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleNoRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel
<\/script>\``,...(B=(z=n.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const H=["Carousel_0","Carousel_1","Carousel_2","Carousel_3","Carousel_4","Carousel_5","Carousel_6","Carousel_7","Carousel_8","Carousel_9","Carousel_10"];export{e as Carousel_0,t as Carousel_1,n as Carousel_10,l as Carousel_2,a as Carousel_3,s as Carousel_4,r as Carousel_5,i as Carousel_6,o as Carousel_7,d as Carousel_8,c as Carousel_9,H as __namedExportsOrder,G as default};
