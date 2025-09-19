Homepage:
Different design for the homepage ?
- Banner image
- ~~Package name~~
- ~~CDN links~~, associated hashes
- ~~path must be updated~~

Orange reference to update to Sosh or ${brand}
Favicon
Update doc CSS to use tokens instead of hard coded values
Use special set of icons ? Need to update docs examples respectively
Use Sosh font
All colored bg examples must be remastered
Restore a good rendering for the tarteaucitron
Restore a good rendering for the search

Introduction:
- ~~Different Codepen for different brands~~
- ~~Package name~~
- ~~CDN links~~, associated hashes

Download:
- ~~Package name~~
- ~~CDN links~~, associated hashes
- Careful about release urls and archives -> Need to determine what will be the release process

~~Contents:~~
- ~~ouds-web to be changed in a Highlighted~~
- ~~Change the structure of the content~~
- ~~Change the content of the page~~

~~Contribute:~~
- ~~Change the wording about what needs to be done by user to contribute~~
- ~~Update commands~~

~~Options:~~
- ~~Values in the table to update~~

~~Color-palette:~~
- ~~Change the whole palette.yml and probably other files in site/data~~
- ~~If we keep the token reference, probably need to update the filepath~~
- ~~Change import stack and probably refer to a file~~

~~Color modes:~~
- ~~CDN links to update~~
- ~~Include paths need to be updated~~
- ~~If we keep the token reference, probably need to update the filepath~~

Breakpoints:
- ~~Breakpoints could be different and also dimensions~~
- Customizable breakpoints to remove or replace in custom libraries
- ~~Update comments with values inside~~

~~Containers:~~
- ~~Values could be different and also dimensions~~
- ~~Change import stack and probably refer to a file~~
- ~~Remove Sass reference~~

~~Grid:~~
- ~~Values could be different and also dimensions + calculations with scss tokens in doc~~
- ~~Change import stack and probably refer to a file~~
- ~~Customizable grid to remove or replace in custom libraries~~
- ~~Remove Sass reference~~

Gutters:
- Values of gutters to remove or change
- Customizable gutters to remove or replace in custom libraries

Layout/utilities:
- Remove or handle margin and padding
- Or remove page ?

CSS grid:
- Customizable part to remove or replace in custom libraries
- Remove Sass reference

Reboot:
- Rewrite the whole page, nothing to be left aside, the values, the sense of what's written.

Typography:
- Values in tables
- Remove Sass reference

Checkbox, radio, switch:
- Link to DSM to update ?
- Fix the rendering

Breadcrumb, links:
- Fix the rendering for the chevron in the middle of the component.

Button:
- Rounded section to remove for brand including ~~title and~~ toc
- Handle colored bg sections

Color&Background:
- Missing text-bg-brand-secondary and text-bg-brand-tertiary

Utilities: Remove Sass reference

~~Background:~~
- ~~Missing bg-brand-secondary and bg-brand-tertiary~~
- ~~How to handle data-bs-theme correctly and easily with tokens maybe ?~~

Border:
- Missing border-brand-secondary/tertiary and border-on-bg-brand-secondary/tertiary

Color:
- Missing text-brand-secondary/tertiary and text-on-bg-brand-secondary/tertiary
- Values in some paragraph
- Table to see back if this is needed

Flex:
- Remove Media object

Spacing:
- Reference to tokens to update maybe, and their final value or remove.
- Reference to tokens scaled to update maybe, and their final value or remove.

Text:
- Update the badge example
- Update font-size values or remove

Icons:
- Solaris icons ?
- Value to update or remove

~~Translations:~~
- ~~Remove page~~

~~Migration from Boosted:~~
- ~~Probably cut this page for other brands and update the side menu~~

~~Page with nothing to change:~~
~~Browsers&devices, accessibility (probably), columns, z-index, forms/overview, validation, Badge, Bullet list, Clearfix, Colored links, Divider, helpers/position, ratio, stacks, stretched link, text truncation, visually-hidden, API (probably), display, float, interaction, object fit, opacity, overflow, utilities/position, shadows, sizing, vertical align, visibility, utilities/z-index, approach, team, license, cookies, migration~~

Examples:
- Change thumbnails
- Check CSS

Handle this somehow:
- Composer.json
- ~~Licenses & copyrights to ORANGE SA anyway ?~~
- ~~Notices~~
- Package.js
- ~~Package.json~~
  - ~~scripts~~
  - ~~description~~
  - ~~files~~
- Readmes
- Contributing
- ~~Support~~
- ~~Manage Storybook brands somehow~~
- Nuget
- Update all build files
- Update all hashes with https://www.srihash.org/
- Check sitemap
- Update migration guides
- Update data-bs-theme in the doc to be brand compatible
- Remove comments from tokenator in raw
- Clean tokenator
- define vars for css bg in docs
- See where to add the new file structure and explain how to use

After PR is merged:
- Make redirects on the ouds-web-doc already existing
- Probably warn about storybook changing its urls for DSM
- Probably cut Custom libraries page for other brands and update the side menu
- Manage Storybook for multi branding

A11y review:
- Header brand selector
