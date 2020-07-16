---
layout: guidelines
title: Typography
description: The Orange identity is defined by a bold distinctive typographic style. Being rigorous about our typography application is a key part of maintaining a strong, consistent brand identity.
group: guidelines
subgroup: Core elements
---

Boosted typography styles are heavily documented, including their **responsive behaviours and values**: [global settings]({{< docsref "/content/typography" >}}/#global-settings), [headings]({{< docsref "/content/typography" >}}/#headings), [display headings]({{< docsref "/content/typography" >}}/#display-headings) and [regular text]({{< docsref "/content/typography" >}}/#regular-text) for the main ones. You may apply them using the `.display-*` and `.h*` utilities, and through [`text` utilities]({{< docsref "/utilities/text" >}})—but **every HTML element has default styles matching the brand guidelines**.

<table class="table table-typography">
  <caption>Headlines & body copy</caption>
  <thead>
    <tr>
      <th scope="col" colspan="3">Examples</th>
      <th scope="col">Metrics <span class="text-muted font-weight-normal">(desktop)</span></th>
    </tr>
  </thead>
  <tbody class="align-bottom">
    <tr class="border-0">
      <td>
        <span class="display-1">Page title 1</span>
      </td>
      <td colspan="2">
        <span class="display-1 text-primary">Page title 1</span>
      </td>
      <td rowspan="2" class="align-middle">
        {{< highlight css >}}
.display-1 {
  font-size: 3.75rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -.125rem;
 }{{< /highlight >}}
      </td>
    </tr>
    <tr>
      <td>
        <span class="display-1">Headline 1</span>
      </td>
      <td colspan="2">
        <span class="display-1 text-primary">Headline 1</span>
      </td>
    </tr>
    <tr class="border-0">
      <td>
        <span class="display-2">Page title 2</span>
      </td>
      <td colspan="2">
        <span class="display-2 text-primary">Page title 2</span>
      </td>
      <td rowspan="2" class="align-middle">
        {{< highlight css >}}
.display-2 {
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -.1rem;
 }{{< /highlight >}}
      </td>
    </tr>
    <tr>
      <td>
        <span class="display-2">Headline 2</span>
      </td>
      <td colspan="2">
        <span class="display-2 text-primary">Headline 2</span>
      </td>
    </tr>
    <tr>
      <td>
        <span class="display-3">Section title 1</span>
      </td>
      <td colspan="2">
        <span class="display-3 text-primary">Section title 1</span>
      </td>
      <td>
        {{< highlight css >}}
.display-3 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -.0625rem;
 }{{< /highlight >}}
      </td>
    </tr>
    <tr>
      <td>
        <span class="display-4">Section title 2</span>
      </td>
      <td colspan="2">
        <span class="display-4 text-primary">Section title 2</span>
      </td>
      <td>
        {{< highlight css >}}
h1, .display-4 {
  font-size: 2.125rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -.0625rem;
 }{{< /highlight >}}
      </td>
    </tr>
    <tr>
      <td>
        <span class="h2">Subtitle 1</span>
      </td>
      <td colspan="2">
        <span class="h2 text-primary">Subtitle 1</span>
      </td>
      <td>
        {{< highlight css >}}
h2, .h2 {
  font-size: 1.875rem;
  font-weight: 700;
  line-height: calc(32/30);
  letter-spacing: -.05rem;
 }{{< /highlight >}}
      </td>
    </tr>
    <tr>
      <td>
        <span class="h3">Subtitle 2</span>
      </td>
      <td colspan="2">
        <span class="h3 text-primary">Subtitle 2</span>
      </td>
      <td>
        {{< highlight css >}}
h3, .h3 {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: calc(26/24);
  letter-spacing: -.03125rem;
 }{{< /highlight >}}
      </td>
    </tr>
    <tr>
      <td>
        <span class="h4">Body 1</span>
      </td>
      <td>
        <span class="h4 text-primary">Body 1</span>
      </td>
      <td>
        <span class="h4 text-muted">Body 1</span>
      </td>
      <td>
        {{< highlight css >}}
h4, .h4 {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: calc(22/20);
  letter-spacing: -.025rem;
 }{{< /highlight >}}
      </td>
    </tr>
    <tr>
      <td>
        <span class="lead">Body 2</span>
      </td>
      <td>
        <span class="lead text-primary">Body 2</span>
      </td>
      <td>
        <span class="lead text-muted">Body 2</span>
      </td>
      <td>
{{< highlight css >}}
.lead {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -.015625rem;
 }{{< /highlight >}}
      </td>
    </tr>
    <tr>
      <td>
        <span class="h5">Body 3</span>
      </td>
      <td>
        <span class="h5 text-primary">Body 3</span>
      </td>
      <td>
        <span class="h5 text-muted">Body 3</span>
      </td>
      <td>
{{< highlight css >}}
h5, .h5 {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: calc(20/18);
  letter-spacing: -.0125rem;
 }{{< /highlight >}}
      </td>
    </tr>
    <tr>
      <td>
        <span class="h6 font-weight-normal">Body 4</span>
      </td>
      <td>
        <span class="h6 font-weight-normal text-primary">Body 4</span>
      </td>
      <td>
        <span class="h6 font-weight-normal text-muted">Body 4</span>
      </td>
      <td>
{{< highlight css >}}
body {
  font-size: 1rem;
  font-weight: 400;
  line-height: calc(18/16);
  letter-spacing: -.00625rem;
 }{{< /highlight >}}
      </td>
    </tr>
    <tr>
      <td>
        <span class="font-weight-bold bs-text-standard">Standard</span>
      </td>
      <td>
        <span class="font-weight-bold text-primary bs-text-standard">Standard</span>
      </td>
      <td>
        <span class="font-weight-bold text-muted bs-text-standard">Standard</span>
      </td>
      <td>
{{< highlight css >}}
h6, .h6, strong {
  font-size: 1rem;
  font-weight: 700;
  line-height: calc(18/16);
  letter-spacing: -.00625rem;
 }{{< /highlight >}}
      </td>
    </tr>
    <tr>
      <td>
        <small class="font-weight-bold">Small</small>
      </td>
      <td>
        <small class="font-weight-bold text-primary">Small</small>
      </td>
      <td>
        <small class="font-weight-bold text-muted">Small</small>
      </td>
      <td>
{{< highlight css >}}
small, .small {
  font-size: .875rem;
  font-weight: 700;
  line-height: calc(16/14);
  letter-spacing: -.00625rem;
 }{{< /highlight >}}
      </td>
    </tr>
  </tbody>
</table>
