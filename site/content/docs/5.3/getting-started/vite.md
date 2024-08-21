---
layout: docs
title: Boosted and Vite
description: The official guide for how to include and bundle Boosted's CSS and JavaScript in your project using Vite.
group: getting-started
aliases:
  - "/docs/getting-started/vite/"
toc: true
thumbnail: guides/vite-dev-server-boosted.png
---

<div class="d-flex justify-content-center">
  <img class="d-flex" src="/docs/{{< param docs_version >}}/assets/img/vite.svg" alt="" width="145" loading="lazy">
</div>

{{< callout >}}
**Want to skip to the end?** Download the **Bootstrap** source code and working **Bootstrap** demo for this guide from the [twbs/examples repository](https://github.com/twbs/examples/tree/main/vite). You can also [open the **Bootstrap** example in StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/vite?file=index.html) for live editing.
{{< /callout >}}

{{< callout warning >}}
**To get a working Boosted demo based on the Bootstrap ones**, you need to replace all `bootstrap` occurrences with `boosted` in `src/scss/style.scss`, `src/js/main.js` and in `package.json`.

You may need to tweak a bit `src/scss/style.scss` and add a `src/fonts` directory to import font family properly in your project. Please refer to the font sub-section of [how to import Boosted](#import-boosted) for more details.
{{< /callout >}}

## Setup

We're building a Vite project with Boosted from scratch, so there are some prerequisites and upfront steps before we can really get started. This guide requires you to have Node.js installed and some familiarity with the terminal.

1. **Create a project folder and set up npm.** We'll create the `my-project` folder and initialize npm with the `-y` argument to avoid it asking us all the interactive questions.

   ```sh
   mkdir my-project && cd my-project
   npm init -y
   ```

2. **Install Vite.** Unlike our Webpack guide, there’s only a single build tool dependency here. We use `--save-dev` to signal that this dependency is only for development use and not for production.

   ```sh
   npm i --save-dev vite
   ```

3. **Install Boosted.** Now we can install Boosted. We'll also install Popper since our dropdowns, popovers, and tooltips depend on it for their positioning. If you don't plan on using those components, you can omit Popper here.

   ```sh
   npm i --save boosted @popperjs/core
   ```

4. **Install additional dependency.** In addition to Vite and Boosted, we need another dependency (Sass) to properly import and bundle Boosted's CSS.

   ```sh
   npm i --save-dev sass
   ```

Now that we have all the necessary dependencies installed and set up, we can get to work creating the project files and importing Boosted.

## Project structure

We've already created the `my-project` folder and initialized npm. Now we'll also create our `src` folder, stylesheet, and JavaScript file to round out the project structure. Run the following from `my-project`, or manually create the folder and file structure shown below.

```sh
mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss vite.config.js
```

When you're done, your complete project should look like this:

```text
my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   └── scss/
│   |   └── styles.scss
|   └── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

At this point, everything is in the right place, but Vite won't work because we haven't filled in our `vite.config.js` yet.

## Configure Vite

With dependencies installed and our project folder ready for us to start coding, we can now configure Vite and run our project locally.

1. **Open `vite.config.js` in your editor.** Since it's blank, we'll need to add some boilerplate config to it so we can start our server. This part of the config tells Vite where to look for our project's JavaScript and how the development server should behave (pulling from the `src` folder with hot reload).

   <!-- eslint-skip -->
   ```js
   import { resolve } from 'path'

   export default {
     root: resolve(__dirname, 'src'),
     build: {
       outDir: '../dist'
     },
     server: {
       port: 8080
     }
   }
   ```

2. **Next we fill in `src/index.html`.** This is the HTML page Vite will load in the browser to utilize the bundled CSS and JS we'll add to it in later steps.

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>Boosted w/ Vite</title>
       <script type="module" src="./js/main.js"></script>
     </head>
     <body>
       <div class="container py-4 px-3 mx-auto">
         <h1>Hello, Boosted and Vite!</h1>
         <button class="btn btn-primary">Primary button</button>
       </div>
     </body>
   </html>
   ```

   We're including a little bit of Boosted styling here with the `div class="container"` and `<button>` so that we see when Boosted's CSS is loaded by Vite.

3. **Now we need an npm script to run Vite.** Open `package.json` and add the `start` script shown below (you should already have the test script). We'll use this script to start our local Vite dev server.

   ```json
   {
     // ...
     "scripts": {
       "start": "vite",
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     // ...
   }
   ```

4. **And finally, we can start Vite.** From the `my-project` folder in your terminal, run that newly added npm script:

   ```sh
   npm start
   ```

   ![Vite dev server running](/assets/img/guides/vite-dev-server.png)

In the next and final section to this guide, we’ll import all of Boosted’s CSS and JavaScript.

## Import Boosted

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

3. **Next we load the CSS and import Boosted's JavaScript.** Add the following to `src/js/main.js` to load the CSS and import all of Boosted's JS. Popper will be imported automatically through Boosted.

   <!-- eslint-skip -->
   ```js
   // Import our custom CSS
   import '../scss/styles.scss'

   // Import all of Boosted's JS
   import * as boosted from 'boosted'
   ```

   You can also import JavaScript plugins individually as needed to keep bundle sizes down:

   <!-- eslint-skip -->
   ```js
   import Alert from 'boosted/js/dist/alert';

   // or, specify which plugins you need:
   import { Tooltip, Toast, Popover } from 'boosted';
   ```

   *[Read our JavaScript docs]({{< docsref "/getting-started/javascript/" >}}) for more information on how to use Boosted's plugins.*

4. **And you're done! 🎉** With Boosted's source Sass and JS fully loaded, your local development server should now look like this:

   ![Vite dev server running with Boosted](/assets/img/guides/vite-dev-server-boosted.png)

   Now you can start adding any Boosted components you want to use. Be sure to [check out the complete Vite example project](https://github.com/twbs/examples/tree/main/vite) for how to include additional custom Sass and optimize your build by importing only the parts of Boosted's CSS and JS that you need.

{{< markdown >}}
{{< partial "guide-footer.md" >}}
{{< /markdown >}}
