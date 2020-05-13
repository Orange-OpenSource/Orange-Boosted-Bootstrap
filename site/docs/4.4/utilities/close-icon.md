---
layout: docs
title: Close icon
description: Use a generic close icon for dismissing content like modals and alerts.
group: utilities
---

[comment]: #Boosted mod: using visually hidden text instead of aria-label

**Be sure to include helpful text for screen readers**, including some context — as we've done using [`.sr-only` utility]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/screen-readers/), or, as a last resort, as [Bootstrap does with `aria-label`](https://getbootstrap.com/docs/{{ site.docs_version }}/utilities/close-icon/).


{% capture example %}
<button type="button" class="close">
    <span class="sr-only">Close this component</span>
</button>
{% endcapture %}
{% include example.html content=example %}
