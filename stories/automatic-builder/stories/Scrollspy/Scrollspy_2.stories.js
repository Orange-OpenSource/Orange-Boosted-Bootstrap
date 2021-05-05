export default {
    title: 'Components/Scrollspy'
  }
  
  export const Scrollspy_2 = () => {
    return `
  <div class="row">
    <div class="col-4">
      <div id="list-example" class="list-group">
        <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
        <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
        <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
      </div>
    </div>
    <div class="col-8">
      <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        <h4 id="list-item-1">Item 1</h4>
        <p>Placeholder content for the scrollspy list-group example. This one relates to item 1. Don't need apologies. There is no fear now, let go and just be free, I will love you unconditionally. Last Friday night. Don't be a shy kinda guy I'll bet it's beautiful. Summer after high school when we first met. 'Cause she's the muse and the artist. What? Wait. Thought that I was the exception.</p>
        <h4 id="list-item-2">Item 2</h4>
        <p>Placeholder content for the scrollspy list-group example. This one relates to item 2. Yeah, she dances to her own beat. Oh, no. You could've been the greatest. 'Cause, baby, you're a firework. Maybe a reason why all the doors are closed. Open up your heart and just let it begin. So très chic, yeah, she's a classic.</p>
        <h4 id="list-item-3">Item 3</h4>
        <p>Placeholder content for the scrollspy list-group example. This one relates to item 3. We go higher and higher. Never one without the other, we made a pact. I'm walking on air. Someone said you had your tattoo removed. Now I’m floating like a butterfly. Tone, tan fit and ready, turn it up cause its gettin' heavy. Cause once you’re mine, once you’re mine. You just gotta ignite the light and let it shine! So we hit the boulevard. Do you ever feel, feel so paper thin. I see it all, I see it now.</p>
        <h4 id="list-item-4">Item 4</h4>
        <p>Placeholder content for the scrollspy list-group example. This one relates to item 4. Summer after high school when we first met. There is no fear now, let go and just be free, I will love you unconditionally. Sun-kissed skin so hot we'll melt your popsicle. This love will make you levitate.</p>
      </div>
    </div>
  </div>
`
  }