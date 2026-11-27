# Creating a New OUDS Component

This guide covers the end-to-end workflow for developing an OUDS component. Use the [create-component skill](../.github/skills/create-component/SKILL.md) for implementation conventions and technical details.

## 1. Set up and research

- Create a feature branch, for example `main-<your_name>-create-component---<componant_name>`.
- Gather the GitHub issue, Figma specifications and library, and the [component definitions board](https://www.figma.com/board/HyR289DW0RDnENzRq9zpvI/Components-definition-across-documentations?node-id=227-362&t=4ykxQst8lLwTsuUZ-0).
- Check whether the component already has a page in the DSM, and note its status.
- Clarify the expected use cases, semantics, and markup. Compare relevant components in other design systems and in Bootstrap, Boosted, or OB1.
- Decide the component name, its DSM category, and whether it belongs to an existing group or a new one.

## 2. Explore the design

In a Figma design page ([create a new design](https://www.figma.com/design/new)), create a frame, then find and place the component from the Assets panel. Try its properties and variants; test longer labels and resizing where relevant. Note the expected states, constraints, and useful examples before implementing them.

## 3. Implement the component

- Create the documentation page and add it to the relevant `sidebar-components.yml` navigation.
- Add the component name to the frontmatter types if part of a group
- Add a new heading with the component name and include `[[comp]]` to generate the component icon.
- Add an `<Example>` with the default markup and useful variants, such as small, icon, or disabled, where applicable.
- Choose the right SCSS file, extending an existing component depending on the context. Start with a clear root class and share custom properties only where needed.
- Prototype the behavior first. Temporary hard-coded values can help validate an idea, but replace them with the approved tokens before the work is complete. Check the component token definitions and Figma specifications; do not edit generated token files.
- Compare the implementation with the Figma design. A screenshot overlay tool such as Pixel Perfect Pro can help reveal differences in sizing and alignment (position fixed / opacity / inversion).
- Ask an a11y expert to review the semantics and markup early, before polishing the styling.
- Add component icons if the design requires them.
- Integrate the relevant tokens, check that they are all used at least once and verify that the Figma specifications are accounted for.

## 4. Complete the documentation

AI can help draft documentation headings and one example per section. You can ask that in Plan mode, without running `docs-build`, then review and adapt the result.

- Explain each option briefly, including the class or markup needed to apply it. Describe layout, wrapping, and multiline behavior where relevant.
- Document accessibility requirements in the context of real use cases.
- For icon variants, include examples with a font icon and, when supported consistently, an image icon.
- Separate examples within an `<Example>` with a blank line, and add the `buttonLabel` values used by the copy-code and StackBlitz actions.
- Update the overview with a card for the component. Do not add a redundant basic example.
- Use the approved component definitions:
  - Frontmatter:
    - If you are working on a group, use the group description
    - Otherwise use the "Coeur" description
  - Overview:
    - If you are working on a group, use the "Coeur" part in the card
    - Otherwise use the "Coeur" and "Extension"
  - Component type section (if in a group): use "Coeur" and "Extension"
- Put shared guidance in an “Approach” paragraph instead.
- Add brand-specific theme callouts when needed
- Add links to the DSM in a top callout.
- Update shared text that lists component types if this component is part of an existing group.
- Add the component in the Skeleton page if needed.
- Add the component to `component-details.ts`.
- Update the update guide (`update-guide.mdx`) and relevant skills and migration skill guidance if they are affected.


## 5. Verify and review

- Test long text, zoom, wrapping, resizing, and representative real-world use cases. Check all applicable brands, themes, and variants.
- If the component existed in Boosted or OB1, update `migrate.mjs` where practical.
- Refresh CSS snapshots with `npm run css-snapshot-refresh`.
- Request development review using the `ready for dev review` label.
- Request design review in the relevant Working Group channel. Share a preview URL without the version and theme selectors, include the design component version, and add a link to the issue.
- Request accessibility review in the OUDS Accessibility channel with the same information.
- Once development review is complete, send the change to the Lead tech responsible for final review and merge.
