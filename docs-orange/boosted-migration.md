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

the new mega menu has no common legacy with his ancessor. The previous one was base on the dropdown menu. This version has his own implementation but the main html structure part is closed.
the new mega-menu needs some others component to run : 
<ul>
  <li>dropdown</li>
  <li>navbar</li>
</ul>

 in high resolution : 
<ul>
  <li> The  part is contained in topmenu class </li>
  <li> The dropdown part is contained in navbar-toggleable-xs class</li>
</ul>
Some other bars appear in mobile resolutions : 
<ul>
  <li> The language part is contained in navbar-langbar </li>
  <li> The dropdown part is contained in navbar-toggleable-xs </li>
</ul>

It is highly recommended to re-inject your content in the new mega menu but here are some of the changing point you can use to transform your old megamenu in a new one.
in Order to convert your mega menu you have to had the class the mega-menu in the navbar container
change class dropdown-toggle into megamenu-dropdown-toggle
add dropdown-mega to li.nav-item
add the mega-menu-content-title to evrey H2 in mega-menu-content
you must copy some of the html in order complete the mega menu :
add the topmenu class container 
add the navbar-smallsearchbar
add the megamenusearchwraper
add the navbar-brand ( just beffore the ul.nav-menu)
add the last dropdown-mega :  searchpanel ( this is the search panel in high resolution )
 
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
