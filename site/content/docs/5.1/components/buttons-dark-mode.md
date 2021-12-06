---
layout: docs
title: Buttons Dark Mode
description: Demo for theme colors
group: components
toc: true
---

## Basic buttons (without themes)

{{< example >}}
<div>

  <h2>Ceci est un titre...</h2>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>

  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Classic theme

{{< example >}}
<div data-bs-theme="classic">

  <h2>Ceci est un titre...</h2>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>

  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Dark theme

{{< example >}}
<div data-bs-theme="dark">

  <h2>Ceci est un titre...</h2>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>

  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Beach theme

{{< example >}}
<div data-bs-theme="beach">

  <h2>Ceci est un titre...</h2>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>

  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Choco theme

{{< example >}}
<div data-bs-theme="choco">

  <h2>Ceci est un titre...</h2>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>

  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Milk theme

{{< example >}}
<div data-bs-theme="milk">

  <h2>Ceci est un titre...</h2>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>

  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Castle theme

{{< example >}}
<div data-bs-theme="castle">

  <h2>Ceci est un titre...</h2>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>

  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Dino theme

{{< example >}}
<div data-bs-theme="dino">

  <h2>Ceci est un titre...</h2>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>

  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Rainbow theme

{{< example >}}
<div data-bs-theme="rainbow">

  <h2>Ceci est un titre...</h2>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>

  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}

## Lobster theme

{{< example >}}
<div data-bs-theme="lobster">

  <h2>Ceci est un titre...</h2>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti repellat quibusdam cum, quam porro similique error perferendis a consequuntur, ipsa maxime atque corporis sapiente officiis eius nihil, iste exercitationem quae facilis aut. Aliquid repudiandae quae quibusdam iusto quasi nulla. Quae reprehenderit atque iste quisquam explicabo vitae labore eum ipsa! Incidunt?</p>

  {{< buttons.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
  <button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
  {{- end -}}
  {{< /buttons.inline >}}

  <button type="button" class="btn btn-link">Link</button>
</div>
{{< /example >}}
