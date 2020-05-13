---
layout: docs
title: RTL
description: Using Boosted for right-to-left website presentation
group: getting-started
toc: true
---

Every release of Boosted ships with a dedicated right-to-left (RTL) version.

## Usage

To get a RTL version of a boosted webpage you only need to replace the regular `boosted.css` file with the RTL counterpart `boosted-rtl.css`.
Also please ensure to add attribute `dir="rtl"` to your `<html>` tag.

## Start template

{% highlight html %}
<!doctype html>
<html lang="en" dir="rtl">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Hello, world!</title>

    <link rel="preconnect" href="https://code.jquery.com" crossorigin="anonymous">
    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin="anonymous">
    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin="anonymous">
    
    <!--
      Neue Helvetica is a trademark of Monotype Imaging Inc. registered in the U.S.
      Patent and Trademark Office and may be registered in certain other jurisdictions.
      Copyright © 2014 Monotype Imaging Inc. All rights reserved.
      Orange Company had buy the right for used Helvetica onto digital applications.
      If you are not autorized to used it, don't include the orangeHelvetica.css
      See NOTICE.txt for more informations.
    -->
    <link rel="preload" href="fonts/HelvNeue55_W1G.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" href="fonts/HelvNeue75_W1G.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="stylesheet" href="css/orangeHelvetica.min.css" />
    <!--
      Orange Icons
      Copyright (C) 2016 - 2019 Orange SA All rights reserved
      See NOTICE.txt for more informations.
    -->
    <link rel="stylesheet" href="css/orangeIcons.min.css" />

    <!-- Boosted CSS -->
    <link rel="stylesheet" href="css/boosted-rtl.min.css">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <main id="content" role="main">
      My page content start here
    </main>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Boosted JS. -->
    <script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_hash }}" crossorigin="anonymous"></script>
    <script src="{{ site.cdn.popper }}" integrity="{{ site.cdn.popper_hash }}" crossorigin="anonymous"></script>
    <script src="{{ site.cdn.tablesorter }}" integrity="{{ site.cdn.tablesorter_hash }}" crossorigin="anonymous"></script>
    <script src="{{ site.cdn.js_swiper }}" integrity="{{ site.cdn.js_swiper_hash }}" crossorigin="anonymous"></script>
    <script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
  </body>
</html>
{% endhighlight %} 

## Boostwatch RTL

See [Boostwatch page in RTL mode]({{ site.baseurl }}/docs/{{ site.docs_version }}/boostwatch/rtl-index.html) to see components in action.

## Examples

Every example from the [Examples page]({{ site.baseurl }}/docs/{{ site.docs_version }}/examples/) has its RTL counterpart. Just prefix the page url with `rtl-*` like in this example: [examples/rtl-news-template/]({{ site.baseurl }}/docs/{{ site.docs_version }}/examples/rtl-news-template/)
