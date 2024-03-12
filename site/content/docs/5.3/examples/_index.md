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
<div class="bd-content mt-5">
  <h2 id="{{ $entry.category | urlize }}">{{ $entry.category }}</h2>
  <p>{{ $entry.description }}</p>
  {{ if eq $entry.category "RTL" -}}
    <div class="bd-callout bd-callout-warning small">
      <p>
        <strong>RTL is still experimental</strong> and will evolve with feedback. Spotted something or have an improvement to suggest?
      </p>
      <p><a href="{{ $.Site.Params.repo }}/issues/new/choose">Please open an issue.</a></p>
    </div>
  {{ end -}}
  {{ if eq $entry.category "Starters" -}}
    <div class="bd-callout bd-callout-warning mb-4">
      <p>
        <strong>To get working Boosted examples based on the Bootstrap ones</strong>, you need to replace all <code>bootstrap</code> occurrences with <code>boosted</code> in some files.
      </p>
      <p>
        You may need to tweak a bit Sass files and add a <code>src/fonts</code> directory to import font family properly in your project.
        "Import Boosted" sections in our <a href="/docs/{{ $.Site.Params.docs_version }}/getting-started/parcel">Parcel</a>, <a href="/docs/{{ $.Site.Params.docs_version }}/getting-started/vite">Vite</a> or <a href="/docs/{{ $.Site.Params.docs_version }}/getting-started/webpack">Webpack</a> guides could help you.
      </p>
    </div>
  {{ end -}}
  {{ range $i, $example := $entry.examples -}}
    {{- $len := len $entry.examples -}}
    {{ if (eq $i 0) }}<div class="row">{{ end }}
      {{ if $entry.external }}
        <div class="col-md-6 col-lg-4 mb-3 d-flex gap-3">
          <svg class="bi fs-5 flex-shrink-0"><use xlink:href="#box-seam"></use></svg>
          <div>
            <h3 class="h5 mb-1">
              <a class="d-block link-offset-1" href="{{ $.Site.Params.bootstrap_github_org }}{{ $example.url }}/" target="_blank" rel="noopener">
                {{ $example.name }}
              </a>
            </h3>
            <p class="text-body-secondary">{{ $example.description }}</p>
            <p>
              {{- $indexPath := "index.html" -}}
              {{- if $example.indexPath -}}
                {{- $indexPath = $example.indexPath -}}
              {{- end }}
              <a class="icon-link link-secondary link-offset-1" href="https://stackblitz.com/github/twbs{{ $example.url }}?file={{ $indexPath | urlquery }}" target="_blank" rel="noopener">
                <svg class="bi flex-shrink-0"><use xlink:href="#lightning-charge-fill"></use></svg>
                Edit in StackBlitz
              </a>
            </p>
          </div>
        </div>
      {{ else }}
        <div class="col-sm-6 col-md-3 mb-3">
          <a class="d-block link-offset-1" href="/docs/{{ $.Site.Params.docs_version }}/examples/{{ $example.name | urlize }}/"{{ if in $example.name "RTL" }} hreflang="ar"{{ end }}>
            <img class="img-thumbnail mb-3"
              srcset="/docs/{{ $.Site.Params.docs_version }}/assets/img/examples/{{ $example.name | urlize }}.png,
                      /docs/{{ $.Site.Params.docs_version }}/assets/img/examples/{{ $example.name | urlize }}@2x.png 2x"
              src="/docs/{{ $.Site.Params.docs_version }}/assets/img/examples/{{ $example.name | urlize }}.png"
              alt=""
              width="480" height="300"
              loading="lazy">
            <h3 class="h5 mb-1">
              {{ $example.name }}
            </h3>
          </a>
          <p class="text-body-secondary">{{ $example.description }}</p>
        </div>
      {{ end }}
    {{ if (eq (add $i 1) $len) }}</div>{{ end }}
  {{ end -}}
</div>
{{ end -}}
{{< /list-examples.inline >}}
