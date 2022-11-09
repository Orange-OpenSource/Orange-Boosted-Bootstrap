---
layout: single
title: Examples
description: Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts.
aliases:
  - "/examples/"
  - "/docs/examples/"
---

{{< callout info >}}
**Some examples are missing here.**

They are tracked in [#410](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/410) and will be shipped as soon as possible.

One of the missing examples has priority? Feel free to contact a member of the [Core team]({{< docsref "/about/team" >}}) or add a comment directly [in the corresponding issue](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/410) to let us know.
{{</ callout >}}

{{< list-examples.inline >}}
{{ range $entry := $.Site.Data.examples -}}
<div class="row g-lg-5 mb-5 mt-1">
  <div class="bd-content col-lg-3">
    <h2 id="{{ $entry.category | urlize }}">{{ $entry.category }}</h2>
    <p>{{ $entry.description }}</p>
  </div>

  <div class="col-lg-9">
    {{ range $i, $example := $entry.examples -}}
      {{- $len := len $entry.examples -}}
      {{ if (eq $i 0) }}<div class="row">{{ end }}
        <div class="col-sm-6 col-md-4 mb-3">
          <a class="d-block" href="/docs/{{ $.Site.Params.docs_version }}/examples/{{ $example.name | urlize }}/"{{ if in $example.name "RTL" }} hreflang="ar"{{ end }}>
            <img class="img-thumbnail mb-3" srcset="/docs/{{ $.Site.Params.docs_version }}/assets/img/examples/{{ $example.name | urlize }}.png,
                                                    /docs/{{ $.Site.Params.docs_version }}/assets/img/examples/{{ $example.name | urlize }}@2x.png 2x"
                                            src="/docs/{{ $.Site.Params.docs_version }}/assets/img/examples/{{ $example.name | urlize }}.png"
                                            alt=""
                                            width="480" height="300"
                                            loading="lazy">
            <h3 class="h5 mb-1">{{ $example.name }}</h3>
          </a>
          <p class="text-muted">{{ $example.description }}</p>
        </div>
      {{ if (eq (add $i 1) $len) }}</div>{{ end }}
    {{ end -}}
  </div>
</div>
{{ end -}}
{{< /list-examples.inline >}}
