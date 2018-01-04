---
layout: docs
title: Build tools
description: Learn how to use Bootstrap's included npm scripts to build our documentation, compile source code, run tests, and more.
group: getting-started
toc: true
---

## Tooling setup

Bootstrap uses [NPM scripts](https://docs.npmjs.com/misc/scripts) for its build system. Our [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) includes convenient methods for working with the framework, including compiling code, running tests, and more.

To use our build system and run our documentation locally, you'll need a copy of Bootstrap's source files and Node. Follow these steps and you should be ready to rock:

1. [Download and install Node.js](https://nodejs.org/download/), which we use to manage our dependencies.
2. Navigate to the root `/bootstrap` directory and run `npm install` to install our local dependencies listed in [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json).
3. [Install Ruby][install-ruby], install [Bundler][gembundler] with `gem install bundler`, and finally run `bundle install`. This will install all Ruby dependencies, such as Jekyll and plugins.
  - **Windows users:** Read [this guide](https://jekyllrb.com/docs/windows/) to get Jekyll up and running without problems.

When completed, you'll be able to run the various commands provided from the command line.

[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/
[gembundler]: https://bundler.io/

## Using NPM scripts

Our [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) includes the following commands and tasks:

| Task | Description |
| --- | --- |
| `npm run dist` | `npm run dist` creates the `/dist` directory with compiled files. **Uses [Sass](http://sass-lang.com/), [Autoprefixer][autoprefixer], and [UglifyJS](https://github.com/mishoo/UglifyJS2).** |
| `npm test` | Same as `npm run dist` plus it runs tests locally |
| `npm run docs` | Builds and lints CSS and JavaScript for docs. You can then run the documentation locally via `npm run docs-serve`. |

Run `npm run` to see all the npm scripts.

## Autoprefixer

Bootstrap uses [Autoprefixer][autoprefixer] (included in our build process) to automatically add vendor prefixes to some CSS properties at build time. Doing so saves us time and code by allowing us to write key parts of our CSS a single time while eliminating the need for vendor mixins like those found in v3.

We maintain the list of browsers supported through Autoprefixer in a separate file within our GitHub repository. See [/package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) for details.

## Local documentation

Running our documentation locally requires the use of Jekyll, a decently flexible static site generator that provides us: basic includes, Markdown-based files, templates, and more. Here's how to get it started:

1. Run through the [tooling setup](#tooling-setup) above to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. From the root `/bootstrap` directory, run `npm run docs-serve` in the command line.
3. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/home/).

[comment]: # Boosted mod

## Howto create an icons library using icomoon
To create an icons library using icomoon, you must first <strong><a href="https://icomoon.io/app/#/select">open the website icomoon into your browser</a></strong> and download the <a href="{{ site.baseurl }}/assets/orange-icons.json">config file orange-icons.json</a>.

### Create your own project

Go to the top left menu and select <code>manage projects</code>:

<img class="img-fluid" src="{{ site.baseurl }}/assets/img/manage_projects.png" alt="manage projects menu">

Then, select <code>import project</code> link and select the file <code>orange-icons.json</code>
It will load all the Orange Icons into a new project

<img class="img-fluid" src="{{ site.baseurl }}/assets/img/import_projects.png" alt="import project link">
                   
You can now access to all the icons by clicking onto <code>Load</code>
     
<img class="img-fluid" src="{{ site.baseurl }}/assets/img/new_project.png" alt="Load project">
  
### Select your icons 

You will find 2 sets : the 1st one contains all the Orange Frames and Popout, the 2nd one contains all the Solaris icons. 
   
<img class="img-fluid" src="{{ site.baseurl }}/assets/img/select_mode.png" alt="Select mode activated">
    
By default there is no selected icon, you can make your selection for your own project.
Check that you are in selection mode (3rd icon in the top bar, after <code>import icons</code> and <code>icon library</code>), when an icon is selected, its border becomes yellow.

If you need to add a specific icon which is no present into the selection provided, create a new empty set for your project, and add icons to it.

<strong>Warning!</strong> Icons format recommendation<br>
You need to import icons in SVG, within a square layout to preserve icons consistency ; if the layout is not a square, you will have some surprises.

<img class="img-fluid" src="{{ site.baseurl }}/assets/img/warning_icon.png" alt="Example of bad icon import">
 
### Download and adapt your project font

Have you finished your shopping?

Now you can create your font for your project.  
Click onto <code>generate font</code> at the bottom right of the page.

<img class="img-fluid" src="{{ site.baseurl }}/assets/img/generate_font.png" alt="Generate font link">
 
Depending of the number of icons selected, it can take a little bit of time...
     
Setting your font preferences

<img class="img-fluid" src="{{ site.baseurl }}/assets/img/preference.png" alt="preference link">

Now you have a <code>Download</code> button at the bottom right but <strong>WAIT!!!</strong> 
We know, you want to download your font but first you need to make some change into <code>preferences</code> to name your font with a name dedicated to YOUR project. 


On the top menu bar, click onto <code>Preferences</code>.

By default the font-family is named <code>orange-icons</code>, rename it for your project (MYPROJECT-icons or other) and customize the class prefix by adding your project name to create a unique css selector.
You also can get Stylesheet variables for scss or less and if you want change the version. 
And uncheck IE8 support if you rely on Boosted 4! 

<img class="img-fluid" src="{{ site.baseurl }}/assets/img/param_export.png" alt="Option window">

Close the Preferences window, you’re now ready to download your font.


The download is a zip file, <code>MYPROJECT-icons.zip</code>.

<img class="img-fluid" src="{{ site.baseurl }}/assets/img/arbo_zip.png" alt="Zip contains">

Unzip it.
The demo.html and demo-files folder offer a sample page displaying the icons - you don’t need them for your project.
The fonts folder is the one you need! It contains <code>MYPROJECT-icons</code>.woff file
You can next create the woff2 file with [everythingfonts](https://everythingfonts.com/woff-to-woff2)
And finally the “style.css” file contains all the css classes.

Rename it to <code>MYPROJECT-icons.css</code>.

Adapt your file for SCSS or LESS if needed, you can now use your icons.

[comment]: # End mod

## Troubleshooting

Should you encounter problems with installing dependencies, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.

[autoprefixer]: https://github.com/postcss/autoprefixer
