---
layout: docs
title: Orange pagination
group: components
---

Provide pagination links Orange branded. [Orange Brand pagination](http://interaction.brand.orange.com/styleguides/web-guideline/navigating/pagination).

Just replace the `.pagination` by `.o-pagination` to switch the display mode. The Orange pagination tool is usually displayed at the bottom of the listed data, but can also be duplicated at the top. Users can navigate page by page by using the ‘previous’ and ‘next’ links, or go to specific pages using the numbered links. The current page status must be highlighted within the pagination tool, so that the user can easily identify their location within the sequence.

{% example html %}
<nav>
    <ul class="o-pagination">
        <li class="page-item disabled"><a class="page-link" href="#">< previous</a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">5</a></li>
        <li class="page-item"><a class="page-link" href="#">next ></a></li>
    </ul>
</nav>
{% endexample %}