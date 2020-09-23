---
layout: docs
title: Icons
description: Guidance and suggestions for using external icon libraries with Boosted.
group: extend
---

[comment]: #Boosted mod: do not mention Bootstrap icons

Boosted doesn't include an icon library by default, but we have a handful of recommendations for you to choose from. While most icon sets include multiple file formats, we prefer SVG implementations for their improved accessibility and vector support.

## Preferred

We've tested and used these icon sets ourselves.

- [Font Awesome](https://fontawesome.com/)
- [Feather](https://feathericons.com/)
- [Octicons](https://octicons.github.com/)

## More options

While we haven't tried these out, they do look promising and provide multiple formats—including SVG.

- [Bytesize](https://github.com/danklammer/bytesize-icons)
- [Google Material icons](https://material.io/resources/icons/)
- [Ionicons](https://ionicons.com/)
- [Dripicons](http://demo.amitjakhu.com/dripicons/)
- [Ikons](http://ikons.piotrkwiatkowski.co.uk/)
- [Icons8](https://icons8.com/)
- [icofont](https://icofont.com/)
- [CoreUI Icons](https://icons.coreui.io/)

[comment]: # Boosted mod

## How to create an icons library using Icomoon

To create an icons library using Icomoon, you must first <strong><a href="https://icomoon.io/app/#/select">open the website icomoon into your browser</a></strong> and download the <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/orange-icons.json">config file orange-icons.json</a>.

### Create your own project

Go to the top left menu and select <code>manage projects</code>:

<img class="img-fluid" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/img/manage_projects.png" alt="manage projects menu">

Then, select <code>import project</code> link and select the file <code>orange-icons.json</code>
It will load all the Orange Icons into a new project

<img class="img-fluid" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/img/import_projects.png" alt="import project link">
                   
You can now access to all the icons by clicking onto <code>Load</code>
     
<img class="img-fluid" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/img/new_project.png" alt="Load project">
  
### Select your icons 

You will find 2 sets : the 1st one contains all the Orange Frames and Popout, the 2nd one contains all the Solaris icons. 
   
<img class="img-fluid" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/img/select_mode.png" alt="Select mode activated">
    
By default there is no selected icon, you can make your selection for your own project.
Check that you are in selection mode (3rd icon in the top bar, after <code>import icons</code> and <code>icon library</code>), when an icon is selected, its border becomes yellow.

If you need to add a specific icon which is no present into the selection provided, create a new empty set for your project, and add icons to it.

<strong>Warning!</strong> Icons format recommendation<br>
You need to import icons in SVG, within a square layout to preserve icons consistency ; if the layout is not a square, you will have some surprises.

<img class="img-fluid" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/img/warning_icon.png" alt="Example of bad icon import">
 
### Download and adapt your project font

Have you finished your shopping?

Now you can create your font for your project.  
Click onto <code>generate font</code> at the bottom right of the page.

<img class="img-fluid" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/img/generate_font.png" alt="Generate font link">
 
Depending of the number of icons selected, it can take a little bit of time...
     
Setting your font preferences

<img class="img-fluid" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/img/preference.png" alt="preference link">

Now you have a <code>Download</code> button at the bottom right but <strong>WAIT!!!</strong> 
We know, you want to download your font but first you need to make some change into <code>preferences</code> to name your font with a name dedicated to YOUR project. 


On the top menu bar, click onto <code>Preferences</code>.

By default the font-family is named <code>orange-icons</code>, rename it for your project (MYPROJECT-icons or other) and customize the class prefix by adding your project name to create a unique css selector.
You also can get Stylesheet variables for scss or less and if you want change the version. 
And uncheck IE8 support if you rely on Boosted 4! 

<img class="img-fluid" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/img/param_export.png" alt="Option window">

Close the Preferences window, you’re now ready to download your font.


The download is a zip file, <code>MYPROJECT-icons.zip</code>.

<img class="img-fluid" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/img/arbo_zip.png" alt="Zip contains">

Unzip it.
The demo.html and demo-files folder offer a sample page displaying the icons - you don’t need them for your project.
The fonts folder is the one you need! It contains <code>MYPROJECT-icons</code>.woff file
You can next create the woff2 file with [everythingfonts](https://everythingfonts.com/woff-to-woff2)
And finally the “style.css” file contains all the css classes.

Rename it to <code>MYPROJECT-icons.css</code>.

Adapt your file for SCSS or LESS if needed, you can now use your icons.

[comment]: # End mod
