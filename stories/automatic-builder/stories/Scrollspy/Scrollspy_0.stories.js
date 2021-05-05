export default {
    title: 'Components/Scrollspy'
  }
  
  export const Scrollspy_0 = () => {
    return `
  <nav id="navbar-example2" class="navbar px-3">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.0/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
    </a>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="#fat">@fat</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#mdo">@mdo</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#one">one</a></li>
          <li><a class="dropdown-item" href="#two">two</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#three">three</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
    <h4 id="fat">@fat</h4>
    <p>Placeholder content for the scrollspy example. You got the finest architecture. Passport stamps, she's cosmopolitan. Fine, fresh, fierce, we got it on lock. Never planned that one day I'd be losing you. She eats your heart out. Your kiss is cosmic, every move is magic. I mean the ones, I mean like she's the one. Greetings loved ones let's take a journey. Just own the night like the 4th of July! But you'd rather get wasted.</p>
    <h4 id="mdo">@mdo</h4>
    <p>Placeholder content for the scrollspy example. 'Cause she's the muse and the artist. (This is how we do) So you wanna play with magic. So just be sure before you give it all to me. I'm walking, I'm walking on air (tonight). Skip the talk, heard it all, time to walk the walk.</p>
    <h4 id="one">one</h4>
    <p>Placeholder content for the scrollspy example. Takes you miles high, so high, 'cause she’s got that one international smile. There's a stranger in my bed, there's a pounding in my head. Oh, no. In another life I would make you stay. ‘Cause I, I’m capable of anything. Suiting up for my crowning battle. Used to steal your parents' liquor and climb to the roof. Tone, tan fit and ready, turn it up cause its gettin' heavy. Her love is like a drug. I guess that I forgot I had a choice.</p>
    <h4 id="two">two</h4>
    <p>Placeholder content for the scrollspy example. It's time to bring out the big balloons. I'm walking, I'm walking on air (tonight). Yeah, we maxed our credit cards and got kicked out of the bar. Yo, shout out to all you kids, buying bottle service, with your rent money. I'm ma get your heart racing in my skin-tight jeans. If you get the chance you better keep her. Yo, shout out to all you kids, buying bottle service, with your rent money.</p>
    <h4 id="three">three</h4>
    <p>Placeholder content for the scrollspy example. If you wanna dance, if you want it all, you know that I'm the girl that you should call. Walk through the storm I would. So let me get you in your birthday suit. The one that got away. Last Friday night, yeah I think we broke the law, always say we're gonna stop. 'Cause she's a little bit of Yoko, And she's a little bit of 'Oh no'. I want the jaw droppin', eye poppin', head turnin', body shockin'. Yeah, we maxed our credit cards and got kicked out of the bar.</p>
    <p>And some more placeholder content, for good measure.</p>
  </div>
`
  }