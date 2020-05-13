---
layout: docs
title: Migrating to Boosted v4
description: Boosted 4 is a major rewrite of the entire project. The most notable changes are summarized below, followed by more specific changes to relevant components.
group: boosted-migration
toc: true
---

In addition to booststrap migration [notes](../migration/), here is what to keep in mind while migrating from boosted v3 to v4.

### Javascript dependencies

File `popper.js` is an external dependency used by tooltip componenent. If not included, tooltip won't work. On top of that, if the file is not included while not using any tooltip, an error will still be logged. You can either include the dependency minding you may use a tooltip later on, or rebuild boosted javascript excluding the `tooltip.js` file from javascript plugins.

### Navbars

All navbars, including local and mega menu will be collapsed.
Active element used to be set on `<li>` tag and will be on the `<a>` as a general rule.

`<ul>` `<li>` pattern is longer necessary (but still recommended). Elements in navbars are now identified with classes `.nav-item` and `.nav-link`.

Class `.navbar-inverse` is changed to `.navbar-dark` and `.navbar-light`. Please note that `.navbar-light` will render exactly the same as `.navbar-dark` since it's the only one allowed in orange brand guidelines at the moment.

Class `.navbar-toggle` is now `.navbar-toggler` and can be put directly inside a `<button>` tag. Use classes `.d-none d-${BP}-block` to specify wether it should be displayed or not at which breakpoint.

For more information please check the new [navbar](../components/navbar/) for documentation and examples.

#### Local nav

In addition to new navbar classes and semantic, arrows elements are now to be put inside the `<a>` tag.

#### Mega menu

Mega menu has been reworked based on the collapse and navbar components. See [here](../components/orange-megamenu/) for documentation and examples.

### Forms

Dropped the `.horizontal-form`class. Each row of form is now contained in a `.form group` section with a `.row` class.

Class `.control-label`is now `.col-form-label`.

[Orange switches](../components/forms/#orange-switches) update : add a class `.o-switch` to `.form-group` element when you want to use custom toggles

Dropped `.o-checkbox` and `.o-radio`, now using native custom form [components](../components/forms/#checkboxes-and-radios-1).

For more information please check the new [forms](../components/forms/) documentation and examples.


### Skiplinks

Rename the `.skiplinks_section` class to `.skiplinks-section`.
Rename the `.skiplinks_show` class to `.skiplinks-show`.
Replace the `.axs_hide` class by `.sr-only` native class included into Bootstrap.


### Font icons

Rename all the class containing  `_` to `-`.

### Step bar

Class names and semantic changed, see [Orange stepbar](../components/stepbar/) for documentation and examples.

### Badge
`badge-default` have been replace by `badge-dark`

### Accordions

[Accordions](../components/collapse/#accordion-example) are now based on card structure. Be sure to use `.card-header` and `.card-body` on the main container. To get multiple openable behaviour just add `.multi` class on each `.card` item.

### Tablesorter
[Tablesorter](../boostwatch/#complextable) add a template on tablesorter header, need to be added separatly by each project
$("#myTable").tablesorter({
  ....
  // manipulate the template string after is it created
  onRenderTemplate : function(i, t){
    // put a span arround the text
    return '<span>' + t + '</span>';
  }
});
