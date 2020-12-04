---
layout: docs
title: Icons
description: Guidance and suggestions for using external icon libraries with Boosted.
group: extend
---

<!-- Boosted mod: do not mention Bootstrap icons nor icons libraries -->

## How to create an icons library using Icomoon

To create an icons library using Icomoon, you must first <a href="https://icomoon.io/app/#/select" class="font-weight-bold">open the website icomoon into your browser</a> and download the <a href="/docs/{{< param docs_version >}}/assets/orange-icons.json">config file orange-icons.json</a>.

### Create your own project

Go to the top left menu and select `manage projects`:

<img class="img-thumbnail my-3" src="/docs/{{< param docs_version >}}/assets/img/manage_projects.png" alt="manage projects menu">

Then, select import project link and select the file `orange-icons.json`.
It will load all the Orange Icons into a new project.

<img class="img-thumbnail my-3" src="/docs/{{< param docs_version >}}/assets/img/import_projects.png" alt="import project link">

You can now access to all the icons by clicking onto `Load`.

<img class="img-thumbnail my-3" src="/docs/{{< param docs_version >}}/assets/img/new_project.png" alt="Load project">

### Select your icons 

You will find two sets: the first one contains all the Orange Frames and Popout, the second one contains the Solaris icons. 

<img class="img-thumbnail my-3" src="/docs/{{< param docs_version >}}/assets/img/select_mode.png" alt="Select mode activated">

By default there is no selected icon, you can make your selection for your own project.
Check that you are in selection mode (third icon in the top bar, after `import icons` and `icon library`), when an icon is selected, its border becomes yellow.

If you need to add a specific icon which is no present into the selection provided, create a new empty set for your project, and add icons to it.

#### Icons format recommendation

You need to import icons in SVG, within a square layout to preserve icons consistency; if the layout is not a square, you will have some surprises.

<img class="img-thumbnail my-3" src="/docs/{{< param docs_version >}}/assets/img/warning_icon.png" alt="Example of bad icon import">

### Download and adapt your project's font

Now you can create your font for your project.  
Click on `generate font` at the bottom right of the page.

<img class="img-thumbnail my-3" src="/docs/{{< param docs_version >}}/assets/img/generate_font.png" alt="Generate font link">

Depending of the number of icons selected, it can take a little bit of time…

#### Setting your font preferences

<img class="img-thumbnail my-3" src="/docs/{{< param docs_version >}}/assets/img/preference.png" alt="preference link">

Now you have a `Download` button at the bottom right but <strong>WAIT!!!</strong> 
We know, you want to download your font but first you need to make some change into `preferences` to name your font with a name dedicated to *your* project. 


On the top menu bar, click onto `Preferences`.

By default the font-family is named `orange-icons`, rename it for your project (MYPROJECT-icons or other) and customize the class prefix by adding your project name to create a unique CSS selector.
You also can get Stylesheet variables for scss or less and if you want change the version. 
And uncheck IE8 support if you rely on Boosted 4! 

<img class="img-thumbnail my-3" src="/docs/{{< param docs_version >}}/assets/img/param_export.png" alt="Option window">

Close the Preferences window, you’re now ready to download your font.

The download is a zip file, `MYPROJECT-icons.zip`.

<img class="img-thumbnail my-3" src="/docs/{{< param docs_version >}}/assets/img/arbo_zip.png" alt="Zip contains">

Unzip it.
The demo.html and demo-files folder offer a sample page displaying the icons - you don’t need them for your project.
The fonts folder is the one you need! It contains `MYPROJECT-icons.woff` file.
You can next create the woff2 file using [everythingfonts](https://everythingfonts.com/woff-to-woff2).
And finally the “style.css” file contains all the css classes.

Rename it to `MYPROJECT-icons.css`.

Adapt your file for SCSS or LESS if needed, you can now use your icons.

<!-- End mod -->
