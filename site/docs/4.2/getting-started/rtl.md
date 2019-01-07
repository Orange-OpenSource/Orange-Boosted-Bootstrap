---
layout: docs
title: Rtl
description: Using Boosted for Right-to-left website presentation
group: getting-started
toc: true
---

Every release of Boosed ships with a dedicated right-to-left (RTL) version.

## Usage

To get a RTL version of a boosted webpage you need only one thing :  
1. Replace the regular `boosted.css` file  

2. with the RTL counterpart `boosted-rtl.css` found in the distribution files.
   Add attribute `dir="rtl"` to your `<html>` tag.

## Start template

{% highlight html %}
<!doctype html>
<html lang="en" dir="rtl">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!--
      Neue Helvetica is a trademark of Monotype Imaging Inc. registered in the U.S.
      Patent and Trademark Office and may be registered in certain other jurisdictions.
      Copyright © 2014 Monotype Imaging Inc. All rights reserved.
      Orange Company had buy the right for used Helvetica onto digital applications.
      If you are not autorized to used it, don't include the orangeHelvetica.css
      See NOTICE.txt for more informations.
    -->
    <link rel="stylesheet" href="css/orangeHelvetica.css" />
    <!--
      Orange Icons
      Copyright (C) 2016 - 2018 Orange SA All rights reserved
      See NOTICE.txt for more informations.
    -->
    <link rel="stylesheet" href="css/orangeIcons.css" />

    <!-- Boosted CSS -->
    <link rel="stylesheet" href="path/to/your/boosted-rtl.css">

    <title>Hello, world!</title>
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
    <script src="path/to/your/boosted.js"></script>
  </body>
</html>
{% endhighlight %} 



## Examples

Every example from the [Examples page](../../examples/) has his RTL counterpat. Just prefix the page url with `rtl-*` like in this example : [examples/rtl-news-template/](../../examples/rtl-news-template/)