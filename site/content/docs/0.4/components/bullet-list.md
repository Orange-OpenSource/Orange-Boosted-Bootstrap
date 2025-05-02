---
layout: docs
title: Bullet list
description: List allows users to view individual, but related, text items grouped together.
group: components
aliases:
  - "/docs/components/bullet-list/"
toc: true
---

{{< callout info >}}
You can find here the [OUDS Bullet list design guidelines](https://unified-design-system.orange.com/472794e18/p/48a788-button).
{{< /callout >}}

## Bullet list



{{< example >}}
<ul>
    <li>This is a list</li>
    <li>It has styling</li>
    <li>To look nice</li>
</ul>


<ul>
    <li>This is a list</li>
    <li>Test damn
      <ul>
        <li>To look nice</li>
        <li>Oh yeah
          <ul>
            <li>It has styling</li>
          </ul>
        </li>
      </ul>
    </li>
</ul>


<ul style="--bs-custom-bullet-list-marker:url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.4736 9.51371L9.99987 15.5765L4.52643 9.51371L4.52363 9.51066C3.46358 8.33406 3.55828 6.52092 4.73488 5.46086C5.86857 4.4399 7.60326 4.48484 8.6821 5.56369C8.6849 5.56674 8.68769 5.56953 8.69048 5.57232L9.52761 6.36807L9.99987 6.82256L10.4721 6.36832L11.3095 5.57232C11.3121 5.56953 11.3151 5.56674 11.3179 5.56369C11.8547 5.02414 12.5846 4.72199 13.3456 4.72402C14.9292 4.72402 16.2132 6.00752 16.2135 7.59138C16.2135 8.30029 15.9509 8.98406 15.4764 9.51066L15.4736 9.51371ZM16.7254 4.21217C14.8698 2.35688 11.8692 2.34622 9.99992 4.17891C8.13091 2.34622 5.13025 2.35688 3.27471 4.21217C1.43897 6.04817 1.40876 9.00617 3.18508 10.8787L9.99992 18.3926L16.815 10.8787C18.5911 9.00617 18.5611 6.04817 16.7254 4.21217Z'/%3E%3C/svg%3E&#34;">
    <li>This is a list</li>
    <li>With a custom marker</li>
    <li>Oh yeah
      <ul>
        <li>It has style</li>
      </ul>
    </li>
</ul>


{{< /example >}}

## Ordered list

## Unstyled list