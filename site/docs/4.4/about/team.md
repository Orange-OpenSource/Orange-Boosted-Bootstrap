---
layout: docs
title: Team
description: An overview of the founding team and core contributors to Boosted.
group: about
---

Boosted is maintained by a small group of invaluable core contributors, with the massive support and involvement of our community.

<div class="list-group mb-3">
  {% for member in site.data.core-team %}
    <a class="list-group-item list-group-item-action d-flex align-items-center" href="https://github.com/{{ member.user }}">
      <img src="https://github.com/{{ member.user }}.png" alt="@{{ member.user }}" width="32" height="32" class="rounded mr-2" loading="lazy">
      <span>
        <strong>{{ member.name }}</strong> @{{ member.user }}
      </span>
    </a>
  {% endfor %}
</div>

Get involved with Boosted development by [opening an issue]({{ site.repo }}/issues/new) or submitting a pull request. Read our [contributing guidelines]({{ site.repo }}/blob/v{{ site.current_version }}/.github/CONTRIBUTING.md) for information on how we develop.

{% capture callout %}
## Bootstrap team

Boosted is based on [Bootstrap](https://getbootstrap.com/) — maintained by [its founding team and a small group of invaluable core contributors](https://getbootstrap.com/docs/{{ site.docs_version }}/about/team/), with the massive support and involvement of their community, **including some proud Boosted maintainers and contributors**.
{% endcapture %}
{% include callout.html content=callout type="info" %}

