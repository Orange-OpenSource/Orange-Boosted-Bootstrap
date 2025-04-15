---
layout: docs
title: Boosted and Parcel
description: The official guide for how to include and bundle Boosted's CSS and JavaScript in your project using Parcel.
group: getting-started
aliases:
  - "/docs/getting-started/parcel/"
toc: true
thumbnail: guides/parcel-dev-server-boosted.png
---

<div class="d-flex justify-content-center">
  <img class="d-flex" src="/docs/{{< param docs_version >}}/assets/img/parcel.png" alt="" loading="lazy">
</div>

{{< callout >}}
**Want to skip to the end?** Download the **Bootstrap** source code and working **Bootstrap** demo for this guide from the [twbs/examples repository](https://github.com/twbs/examples/tree/main/parcel). You can also [open the **Bootstrap** example in StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/parcel?file=index.html) for live editing.
{{< /callout >}}

{{< callout warning >}}
**To get a working Boosted demo based on the Bootstrap ones**, you need to replace all `bootstrap` occurrences with `boosted` in `src/scss/style.scss`, `src/js/main.js` and in `package.json`.

You may need to tweak a bit `src/scss/style.scss` and add a `src/fonts` directory to import font family properly in your project. Please refer to the font sub-section of [how to import Boosted](#import-boosted) for more details.
{{< /callout >}}

## What is Parcel?
[Parcel](https://parceljs.org/) is a web application bundler designed to simplify the development process with a zero-configuration setup out of the box. It offers features found in more advanced bundlers while focusing on ease of use, making it ideal for developers seeking a quick start.

## Setup

We're building a Parcel project with Boosted from scratch, so there are some prerequisites and upfront steps before we can really get started. This guide requires you to have Node.js installed and some familiarity with the terminal.

1. **Create a project folder and set up npm.** We'll create the `my-project` folder and initialize npm with the `-y` argument to avoid it asking us all the interactive questions.

   ```sh
   mkdir my-project && cd my-project
   npm init -y
   ```

2. **Install Parcel.** Unlike our Webpack guide, there's only a single build tool dependency here. Parcel will automatically install language transformers (like Sass) as it detects them. We use `--save-dev` to signal that this dependency is only for development use and not for production.

   ```sh
   npm i --save-dev parcel
   ```

3. **Install Boosted.** Now we can install Boosted. We'll also install Popper since our dropdowns, popovers, and tooltips depend on it for their positioning. If you don't plan on using those components, you can omit Popper here.

   ```sh
   npm i --save boosted @popperjs/core
   ```

Now that we have all the necessary dependencies installed, we can get to work creating the project files and importing Boosted.

## Project structure

We've already created the `my-project` folder and initialized npm. Now we'll also create our `src` folder, stylesheet, and JavaScript file to round out the project structure. Run the following from `my-project`, or manually create the folder and file structure shown below.

```sh
mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss
```

When you're done, your complete project should look like this:

```text
my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   ├── scss/
│   │   └── styles.scss
│   └── index.html
├── package-lock.json
└── package.json
```

At this point, everything is in the right place, but Parcel needs an HTML page and npm script to start our server.

## Configure Parcel

With dependencies installed and our project folder ready for us to start coding, we can now configure Parcel and run our project locally. Parcel itself requires no configuration file by design, but we do need an npm script and an HTML file to start our server.

1. **Fill in the `src/index.html` file.** Parcel needs a page to render, so we use our `index.html` page to set up some basic HTML, including our CSS and JavaScript files.

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>Boosted w/ Parcel</title>
       <link rel="stylesheet" href="scss/styles.scss">
       <script type="module" src="js/main.js"></script>
     </head>
     <body>
       <div class="container py-4 px-3 mx-auto">
         <h1>Hello, Boosted and Parcel!</h1>
         <button class="btn btn-primary">Primary button</button>
       </div>
     </body>
   </html>
   ```

   We're including a little bit of Boosted styling here with the `div class="container"` and `<button>` so that we see when Boosted's CSS is loaded by Parcel.

   Parcel will automatically detect we're using Sass and install the [Sass Parcel plugin](https://parceljs.org/languages/sass/) to support it. However, if you wish, you can also manually run `npm i --save-dev @parcel/transformer-sass`.

2. **Add the Parcel npm scripts.** Open the `package.json` and add the following `start` script to the `scripts` object. We'll use this script to start our Parcel development server and render the HTML file we created after it's compiled into the `dist` directory.

   ```json
   {
      // ...
      "scripts": {
        "start": "parcel serve src/index.html --public-url / --dist-dir dist",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      // ...
   }
   ```

3. **And finally, we can start Parcel.** From the `my-project` folder in your terminal, run that newly added npm script:

   ```sh
   npm start
   ```

   ![Unbranded webpage with the title 'Hello, Boosted and Parcel!' and a default button](/assets/img/guides/parcel-dev-server.png)

In the next and final section to this guide, we'll import all of Boosted's CSS and JavaScript.

## Import Boosted

Importing Boosted into Parcel requires three imports, two into our `styles.scss` and one into our `main.js`.

1. **Let's import Boosted's fonts.** Download the WOFF2 version of our Helvetica Neue fonts, **limited to Orange brand usage**: [see `NOTICE.txt` for more information about Helvetica Neue license]({{< param repo >}}/blob/v{{< param current_version >}}/NOTICE.txt).

   ```sh
   mkdir src/fonts
   cp /path/HelvNeue55_W1G.woff2 src/fonts/
   cp /path/HelvNeue75_W1G.woff2 src/fonts/
   ```

2. **Now, let's import Boosted's CSS.** Add the following to `src/scss/styles.scss` to import all of Boosted's source Sass.

   ```scss
   // Import all of Boosted's CSS
   @import "boosted/scss/orange-helvetica";
   @import "boosted/scss/boosted";
   ```

   *You can also import our stylesheets individually if you want. [Read our Sass import docs]({{< docsref "/customize/sass#importing" >}}) for details.*

3. **Import Boosted's JS.** Add the following to `src/js/main.js` to import all of Boosted's JS. Popper will be imported automatically through Boosted.

   <!-- eslint-skip -->
   ```js
   // Import all of Boosted's JS
   import * as boosted from 'boosted'
   ```

   You can also import JavaScript plugins individually as needed to keep bundle sizes down:

   <!-- eslint-skip -->
   ```js
   import Alert from 'boosted/js/dist/alert'

   // or, specify which plugins you need:
   import { Tooltip, Toast, Popover } from 'boosted'
   ```

   *[Read our JavaScript docs]({{< docsref "/getting-started/javascript/" >}}) for more information on how to use Boosted's plugins.*

4. **And you're done! 🎉** With Boosted's source Sass and JS fully loaded, your local development server should now look like this:

   ![Boosted-branded webpage with the title 'Hello, Boosted and Parcel!' and an orange primary button](/assets/img/guides/parcel-dev-server-boosted.png)

   Now you can start adding any Boosted components you want to use. Be sure to [check out the complete Parcel example project](https://github.com/twbs/examples/tree/main/parcel) for how to include additional custom Sass and optimize your build by importing only the parts of Boosted's CSS and JS that you need.

{{< markdown >}}
{{< partial "guide-footer.md" >}}
{{< /markdown >}}
