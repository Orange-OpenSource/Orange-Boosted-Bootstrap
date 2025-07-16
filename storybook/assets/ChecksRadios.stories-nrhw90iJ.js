const Ge={title:"Components/ChecksRadios",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDefault">
  <label class="form-check-label" for="checkDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkChecked" checked="">
  <label class="form-check-label" for="checkChecked">
    Checked checkbox
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,c=()=>`<div class="bd-example order-first m-0 border-0 bd-example-indeterminate m-0 border-0"> <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkIndeterminate">
  <label class="form-check-label" for="checkIndeterminate">
    Indeterminate checkbox
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,t=()=>`<div class="bd-example order-first m-0 border-0 bd-example-indeterminate m-0 border-0"> <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkIndeterminateDisabled" disabled="">
  <label class="form-check-label" for="checkIndeterminateDisabled">
    Disabled indeterminate checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDisabled" disabled="">
  <label class="form-check-label" for="checkDisabled">
    Disabled checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkCheckedDisabled" checked="" disabled="">
  <label class="form-check-label" for="checkCheckedDisabled">
    Disabled checked checkbox
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,a=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check">
  <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1">
  <label class="form-check-label" for="radioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked="">
  <label class="form-check-label" for="radioDefault2">
    Default checked radio
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,i=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check">
  <input class="form-check-input" type="radio" name="radioDisabled" id="radioDisabled" disabled="">
  <label class="form-check-label" for="radioDisabled">
    Disabled radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioDisabled" id="radioCheckedDisabled" checked="" disabled="">
  <label class="form-check-label" for="radioCheckedDisabled">
    Disabled checked radio
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,r=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault">
  <label class="form-check-label" for="switchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked="">
  <label class="form-check-label" for="switchCheckChecked">Checked switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDisabled" disabled="">
  <label class="form-check-label" for="switchCheckDisabled">Disabled switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckCheckedDisabled" checked="" disabled="">
  <label class="form-check-label" for="switchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,s=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch="">
  <label class="form-check-label" for="checkNativeSwitch">
    Native switch haptics
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,l=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled="">
  <label class="form-check-label" for="defaultCheck2">
    Disabled checkbox
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,n=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="">
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled="">
  <label class="form-check-label" for="exampleRadios3">
    Disabled radio
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,o=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled="">
  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,d=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled="">
  <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,p=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck1">
  <label class="form-check-label" for="reverseCheck1">
    Reverse checkbox
  </label>
</div>
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck2" disabled="">
  <label class="form-check-label" for="reverseCheck2">
    Disabled reverse checkbox
  </label>
</div>

<div class="form-check form-switch form-check-reverse">
  <input class="form-check-input" type="checkbox" id="switchCheckReverse">
  <label class="form-check-label" for="switchCheckReverse">Reverse switch checkbox input</label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,b=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div>
  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
</div>

<div>
  <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,h=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
<label class="btn btn-toggle" for="btn-check">Single toggle</label> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,k=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <input type="checkbox" class="btn-check" id="btn-check-2" checked="" autocomplete="off">
<label class="btn btn-toggle" for="btn-check-2">Checked</label> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,m=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled="">
<label class="btn btn-toggle" for="btn-check-3">Disabled</label> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,u=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="btn-group" role="group">
  <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked="">
  <label class="btn btn-toggle" for="option1">Checked</label>

  <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
  <label class="btn btn-toggle" for="option2">Radio</label>

  <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled="">
  <label class="btn btn-toggle" for="option3">Disabled</label>

  <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off">
  <label class="btn btn-toggle" for="option4">Radio</label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,f=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="btn-group" role="group">
  <input type="radio" class="btn-check" name="icons" id="option5" autocomplete="off" checked="">
  <label class="btn btn-icon btn-toggle" for="option5">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#calendar-day"></use>
    </svg>
    <span class="visually-hidden">Day</span>
  </label>
  <input type="radio" class="btn-check" name="icons" id="option6" autocomplete="off">
  <label class="btn btn-icon btn-toggle" for="option6">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#calendar-week"></use>
    </svg>
    <span class="visually-hidden">Week</span>
  </label>
  <input type="radio" class="btn-check" name="icons" id="option7" autocomplete="off">
  <label class="btn btn-icon btn-toggle" for="option7">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#calendar-month"></use>
    </svg>
    <span class="visually-hidden">Month</span>
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,v=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="btn-group" role="group">
  <input type="radio" class="btn-check" name="iconsNoOutline" id="option8" autocomplete="off" checked="">
  <label class="btn btn-icon btn-no-outline" for="option8">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#calendar-day"></use>
    </svg>
    <span class="visually-hidden">Day</span>
  </label>
  <input type="radio" class="btn-check" name="iconsNoOutline" id="option9" autocomplete="off">
  <label class="btn btn-icon btn-no-outline" for="option9">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#calendar-week"></use>
    </svg>
    <span class="visually-hidden">Week</span>
  </label>
  <input type="radio" class="btn-check" name="iconsNoOutline" id="option10" autocomplete="off">
  <label class="btn btn-icon btn-no-outline" for="option10">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#calendar-month"></use>
    </svg>
    <span class="visually-hidden">Month</span>
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,x=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <form>
  <fieldset class="star-rating">
    <legend class="visually-hidden">Results relevance</legend>

    <input type="radio" id="terrible" name="rating" value="1" class="visually-hidden">
    <label for="terrible" title="Terrible"><span class="visually-hidden">Terrible</span></label>

    <input type="radio" id="bad" name="rating" value="2" class="visually-hidden">
    <label for="bad" title="Bad"><span class="visually-hidden">Bad</span></label>

    <input type="radio" id="mixed" name="rating" value="3" class="visually-hidden">
    <label for="mixed" title="Mixed"><span class="visually-hidden">Mixed</span></label>

    <input type="radio" id="good" name="rating" value="4" class="visually-hidden" checked="">
    <label for="good" title="Good"><span class="visually-hidden">Good</span></label>

    <input type="radio" id="excellent" name="rating" value="5" class="visually-hidden">
    <label for="excellent" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset>
</form> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,y=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <form>
  <fieldset class="star-rating star-rating-sm">
    <legend class="visually-hidden">Results relevance</legend>

    <input type="radio" id="terrible2" name="rating" value="1" class="visually-hidden">
    <label for="terrible2" title="Terrible"><span class="visually-hidden">Terrible</span></label>

    <input type="radio" id="bad2" name="rating" value="2" class="visually-hidden">
    <label for="bad2" title="Bad"><span class="visually-hidden">Bad</span></label>

    <input type="radio" id="mixed2" name="rating" value="3" class="visually-hidden">
    <label for="mixed2" title="Mixed"><span class="visually-hidden">Mixed</span></label>

    <input type="radio" id="good2" name="rating" value="4" class="visually-hidden" checked="">
    <label for="good2" title="Good"><span class="visually-hidden">Good</span></label>

    <input type="radio" id="excellent2" name="rating" value="5" class="visually-hidden">
    <label for="excellent2" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset>
</form> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,g=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="star-rating">
  <p class="visually-hidden">Star rating: rated 3 out of 5</p>

  <div aria-hidden="true">
    <span></span>
    <span></span>
    <span class="checked"></span>
    <span></span>
    <span></span>
  </div>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`,E=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <form>
  <fieldset class="star-rating" disabled="" aria-hidden="true">
    <legend class="visually-hidden">Disabled star rating</legend>

    <input type="radio" id="terrible4" name="rating" value="1" class="visually-hidden">
    <label for="terrible4" title="Terrible"><span class="visually-hidden">Terrible</span></label>

    <input type="radio" id="bad4" name="rating" value="2" class="visually-hidden">
    <label for="bad4" title="Bad"><span class="visually-hidden">Bad</span></label>

    <input type="radio" id="mixed4" name="rating" value="3" class="visually-hidden" checked="">
    <label for="mixed4" title="Mixed"><span class="visually-hidden">Mixed</span></label>

    <input type="radio" id="good4" name="rating" value="4" class="visually-hidden">
    <label for="good4" title="Good"><span class="visually-hidden">Good</span></label>

    <input type="radio" id="excellent4" name="rating" value="5" class="visually-hidden">
    <label for="excellent4" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset>
  <p class="visually-hidden">Disabled star rating: rated 3 out of 5</p>
</form> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>`;var D,C,S;e.parameters={...e.parameters,docs:{...(D=e.parameters)==null?void 0:D.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDefault">
  <label class="form-check-label" for="checkDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkChecked" checked="">
  <label class="form-check-label" for="checkChecked">
    Checked checkbox
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(S=(C=e.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var R,j,q;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 bd-example-indeterminate m-0 border-0"> <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkIndeterminate">
  <label class="form-check-label" for="checkIndeterminate">
    Indeterminate checkbox
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(q=(j=c.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var A,w,I;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 bd-example-indeterminate m-0 border-0"> <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkIndeterminateDisabled" disabled="">
  <label class="form-check-label" for="checkIndeterminateDisabled">
    Disabled indeterminate checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDisabled" disabled="">
  <label class="form-check-label" for="checkDisabled">
    Disabled checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkCheckedDisabled" checked="" disabled="">
  <label class="form-check-label" for="checkCheckedDisabled">
    Disabled checked checkbox
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(I=(w=t.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var L,_,N;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check">
  <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1">
  <label class="form-check-label" for="radioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked="">
  <label class="form-check-label" for="radioDefault2">
    Default checked radio
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(N=(_=a.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var M,O,B;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check">
  <input class="form-check-input" type="radio" name="radioDisabled" id="radioDisabled" disabled="">
  <label class="form-check-label" for="radioDisabled">
    Disabled radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioDisabled" id="radioCheckedDisabled" checked="" disabled="">
  <label class="form-check-label" for="radioCheckedDisabled">
    Disabled checked radio
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(B=(O=i.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var G,T,W;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault">
  <label class="form-check-label" for="switchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked="">
  <label class="form-check-label" for="switchCheckChecked">Checked switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDisabled" disabled="">
  <label class="form-check-label" for="switchCheckDisabled">Disabled switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckCheckedDisabled" checked="" disabled="">
  <label class="form-check-label" for="switchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(W=(T=r.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var z,F,H;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch="">
  <label class="form-check-label" for="checkNativeSwitch">
    Native switch haptics
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(H=(F=s.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,K,P;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled="">
  <label class="form-check-label" for="defaultCheck2">
    Disabled checkbox
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(P=(K=l.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,U,V;n.parameters={...n.parameters,docs:{...(Q=n.parameters)==null?void 0:Q.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="">
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled="">
  <label class="form-check-label" for="exampleRadios3">
    Disabled radio
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(V=(U=n.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;o.parameters={...o.parameters,docs:{...(X=o.parameters)==null?void 0:X.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled="">
  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(Z=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ce;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled="">
  <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(ce=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:ce.source}}};var te,ae,ie;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck1">
  <label class="form-check-label" for="reverseCheck1">
    Reverse checkbox
  </label>
</div>
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck2" disabled="">
  <label class="form-check-label" for="reverseCheck2">
    Disabled reverse checkbox
  </label>
</div>

<div class="form-check form-switch form-check-reverse">
  <input class="form-check-input" type="checkbox" id="switchCheckReverse">
  <label class="form-check-label" for="switchCheckReverse">Reverse switch checkbox input</label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(ie=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var re,se,le;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div>
  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
</div>

<div>
  <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(le=(se=b.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ne,oe,de;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
<label class="btn btn-toggle" for="btn-check">Single toggle</label> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(de=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var pe,be,he;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <input type="checkbox" class="btn-check" id="btn-check-2" checked="" autocomplete="off">
<label class="btn btn-toggle" for="btn-check-2">Checked</label> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(he=(be=k.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var ke,me,ue;m.parameters={...m.parameters,docs:{...(ke=m.parameters)==null?void 0:ke.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled="">
<label class="btn btn-toggle" for="btn-check-3">Disabled</label> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(ue=(me=m.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var fe,ve,xe;u.parameters={...u.parameters,docs:{...(fe=u.parameters)==null?void 0:fe.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="btn-group" role="group">
  <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked="">
  <label class="btn btn-toggle" for="option1">Checked</label>

  <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
  <label class="btn btn-toggle" for="option2">Radio</label>

  <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled="">
  <label class="btn btn-toggle" for="option3">Disabled</label>

  <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off">
  <label class="btn btn-toggle" for="option4">Radio</label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(xe=(ve=u.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var ye,ge,Ee;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="btn-group" role="group">
  <input type="radio" class="btn-check" name="icons" id="option5" autocomplete="off" checked="">
  <label class="btn btn-icon btn-toggle" for="option5">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#calendar-day"></use>
    </svg>
    <span class="visually-hidden">Day</span>
  </label>
  <input type="radio" class="btn-check" name="icons" id="option6" autocomplete="off">
  <label class="btn btn-icon btn-toggle" for="option6">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#calendar-week"></use>
    </svg>
    <span class="visually-hidden">Week</span>
  </label>
  <input type="radio" class="btn-check" name="icons" id="option7" autocomplete="off">
  <label class="btn btn-icon btn-toggle" for="option7">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#calendar-month"></use>
    </svg>
    <span class="visually-hidden">Month</span>
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(Ee=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:Ee.source}}};var De,Ce,Se;v.parameters={...v.parameters,docs:{...(De=v.parameters)==null?void 0:De.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="btn-group" role="group">
  <input type="radio" class="btn-check" name="iconsNoOutline" id="option8" autocomplete="off" checked="">
  <label class="btn btn-icon btn-no-outline" for="option8">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#calendar-day"></use>
    </svg>
    <span class="visually-hidden">Day</span>
  </label>
  <input type="radio" class="btn-check" name="iconsNoOutline" id="option9" autocomplete="off">
  <label class="btn btn-icon btn-no-outline" for="option9">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#calendar-week"></use>
    </svg>
    <span class="visually-hidden">Week</span>
  </label>
  <input type="radio" class="btn-check" name="iconsNoOutline" id="option10" autocomplete="off">
  <label class="btn btn-icon btn-no-outline" for="option10">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#calendar-month"></use>
    </svg>
    <span class="visually-hidden">Month</span>
  </label>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(Se=(Ce=v.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var Re,je,qe;x.parameters={...x.parameters,docs:{...(Re=x.parameters)==null?void 0:Re.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <form>
  <fieldset class="star-rating">
    <legend class="visually-hidden">Results relevance</legend>

    <input type="radio" id="terrible" name="rating" value="1" class="visually-hidden">
    <label for="terrible" title="Terrible"><span class="visually-hidden">Terrible</span></label>

    <input type="radio" id="bad" name="rating" value="2" class="visually-hidden">
    <label for="bad" title="Bad"><span class="visually-hidden">Bad</span></label>

    <input type="radio" id="mixed" name="rating" value="3" class="visually-hidden">
    <label for="mixed" title="Mixed"><span class="visually-hidden">Mixed</span></label>

    <input type="radio" id="good" name="rating" value="4" class="visually-hidden" checked="">
    <label for="good" title="Good"><span class="visually-hidden">Good</span></label>

    <input type="radio" id="excellent" name="rating" value="5" class="visually-hidden">
    <label for="excellent" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset>
</form> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(qe=(je=x.parameters)==null?void 0:je.docs)==null?void 0:qe.source}}};var Ae,we,Ie;y.parameters={...y.parameters,docs:{...(Ae=y.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <form>
  <fieldset class="star-rating star-rating-sm">
    <legend class="visually-hidden">Results relevance</legend>

    <input type="radio" id="terrible2" name="rating" value="1" class="visually-hidden">
    <label for="terrible2" title="Terrible"><span class="visually-hidden">Terrible</span></label>

    <input type="radio" id="bad2" name="rating" value="2" class="visually-hidden">
    <label for="bad2" title="Bad"><span class="visually-hidden">Bad</span></label>

    <input type="radio" id="mixed2" name="rating" value="3" class="visually-hidden">
    <label for="mixed2" title="Mixed"><span class="visually-hidden">Mixed</span></label>

    <input type="radio" id="good2" name="rating" value="4" class="visually-hidden" checked="">
    <label for="good2" title="Good"><span class="visually-hidden">Good</span></label>

    <input type="radio" id="excellent2" name="rating" value="5" class="visually-hidden">
    <label for="excellent2" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset>
</form> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(Ie=(we=y.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};var Le,_e,Ne;g.parameters={...g.parameters,docs:{...(Le=g.parameters)==null?void 0:Le.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="star-rating">
  <p class="visually-hidden">Star rating: rated 3 out of 5</p>

  <div aria-hidden="true">
    <span></span>
    <span></span>
    <span class="checked"></span>
    <span></span>
    <span></span>
  </div>
</div> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(Ne=(_e=g.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};var Me,Oe,Be;E.parameters={...E.parameters,docs:{...(Me=E.parameters)==null?void 0:Me.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <form>
  <fieldset class="star-rating" disabled="" aria-hidden="true">
    <legend class="visually-hidden">Disabled star rating</legend>

    <input type="radio" id="terrible4" name="rating" value="1" class="visually-hidden">
    <label for="terrible4" title="Terrible"><span class="visually-hidden">Terrible</span></label>

    <input type="radio" id="bad4" name="rating" value="2" class="visually-hidden">
    <label for="bad4" title="Bad"><span class="visually-hidden">Bad</span></label>

    <input type="radio" id="mixed4" name="rating" value="3" class="visually-hidden" checked="">
    <label for="mixed4" title="Mixed"><span class="visually-hidden">Mixed</span></label>

    <input type="radio" id="good4" name="rating" value="4" class="visually-hidden">
    <label for="good4" title="Good"><span class="visually-hidden">Good</span></label>

    <input type="radio" id="excellent4" name="rating" value="5" class="visually-hidden">
    <label for="excellent4" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset>
  <p class="visually-hidden">Disabled star rating: rated 3 out of 5</p>
</form> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios
<\/script>\``,...(Be=(Oe=E.parameters)==null?void 0:Oe.docs)==null?void 0:Be.source}}};const Te=["ChecksRadios_0","ChecksRadios_1","ChecksRadios_2","ChecksRadios_3","ChecksRadios_4","ChecksRadios_5","ChecksRadios_6","ChecksRadios_7","ChecksRadios_8","ChecksRadios_9","ChecksRadios_10","ChecksRadios_11","ChecksRadios_12","ChecksRadios_13","ChecksRadios_14","ChecksRadios_15","ChecksRadios_16","ChecksRadios_17","ChecksRadios_18","ChecksRadios_19","ChecksRadios_20","ChecksRadios_21","ChecksRadios_22"];export{e as ChecksRadios_0,c as ChecksRadios_1,d as ChecksRadios_10,p as ChecksRadios_11,b as ChecksRadios_12,h as ChecksRadios_13,k as ChecksRadios_14,m as ChecksRadios_15,u as ChecksRadios_16,f as ChecksRadios_17,v as ChecksRadios_18,x as ChecksRadios_19,t as ChecksRadios_2,y as ChecksRadios_20,g as ChecksRadios_21,E as ChecksRadios_22,a as ChecksRadios_3,i as ChecksRadios_4,r as ChecksRadios_5,s as ChecksRadios_6,l as ChecksRadios_7,n as ChecksRadios_8,o as ChecksRadios_9,Te as __namedExportsOrder,Ge as default};
