---
layout: single
title: Essentials
description: Quickly get a project started with any of our essentials ranging from using parts of the framework to custom components and layouts.
aliases: "/essentials/"
---

{{< list-essentials.inline >}}
{{ range $entry := $.Site.Data.essentials -}}
  <h2>{{ $entry.category }}</h2>
  <p>{{ $entry.description }}</p>

  {{ range $i, $essential := $entry.essentials -}}
    {{- $len := len $entry.essentials -}}
    {{ if (eq $i 0) }}<div class="row">{{ end }}
      <div class="col-sm-6 col-md-4 col-xl-3 mb-3">
        <a href="/docs/{{ $.Site.Params.docs_version }}/essentials/{{ $essential.name | urlize }}/">
          <img class="img-thumbnail mb-3" srcset="/docs/{{ $.Site.Params.docs_version }}/assets/img/essentials/{{ $essential.name | urlize }}.png,
                                                  /docs/{{ $.Site.Params.docs_version }}/assets/img/essentials/{{ $essential.name | urlize }}@2x.png 2x"
                                          src="/docs/{{ $.Site.Params.docs_version }}/assets/img/essentials/{{ $essential.name | urlize }}.png"
                                          alt=""
                                          width="480" height="300"
                                          loading="lazy">
          <h3 class="h5 mb-1">{{ $essential.name }}</h3>
        </a>
        <p class="text-muted">{{ $essential.description }}</p>
      </div>
    {{ if (eq (add $i 1) $len) }}</div>{{ end }}
  {{ end -}}
{{ end -}}
{{< /list-essentials.inline >}}
