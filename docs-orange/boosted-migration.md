---
layout: docs
title: Migrating to boosted v4
group: migration
---

In addition to booststrap migration [notes](../migration/), here is what to keep in mind while migrating from boosted v3 to v4.

### Javascript dependencies

File `tether.min.js` is an external dependency used by tooltip componenent. If not included, tooltip won't work. On top of that, if the file is not included while not using any tooltip,
 an error will still be logged. You can either include the dependency minding you may use a tooltip later on, or rebuild boosted javascript excluding the `tooltip.js` file from javascript plugins.

### Navbars

All navbars, including local and mega menu will be collapsed.
Active element used to be set on `<li>` tag and will be on the `<a>` as a general rule.

`<ul>` `<li>` pattern is longer necessary (but still recommended). Elements in navbars are now identified with classes `.nav-item` and `.nav-link`.

Class `.navbar-inverse` is changed to `.navbar-dark` and `.navbar-light`. Please note that `.navbar-light` will render exactly the same as `.navbar-dark` since it's the only one allowed in orange brand guidelines at the moment.

Class `.navbar-toggle` is now `.navbar-toggler` and can be put directly inside a `<button>` tag. Use classes `.hidden-*` to specify wether it should be displayed or not.

For more information please check the new [navbar](../components/navbar/) for documentation and examples.

#### Local nav

In addition to new navbar classes and semantic, arrows elements are now to be put inside the `<a>` tag.

#### Mega menu

Mega menu has been totally reworked. See [here](/?) for more info.

### Forms

Dropped the `.horizontal-form`class. Each row of form is now contained in a `.form group` section with a `.row` class.

Class `.control-label`is now `.form-control-label`.

For more information please check the new [forms](../components/forms/) for documentation and examples.


### Skiplinks

Rename the `.skiplinks_section` class to `.skiplinks-section`.
Rename the `.skiplinks_show` class to `.skiplinks-show`.
Replace the `.axs_hide` class by `.sr-only` native class included into Bootstrap.


### Font icons

Rename all the class containing  `_` to `-`.

### Step bar

Class names and semantic changed, see [Orange stepbar](../components/orange-stepbar/) for documentation and examples.
