<h1 align="center">OUDS Monorepo</h1>

<p align="center">
  Home of the Orange Unified Design System libraries.
  <br />
  <a href="https://web.unified-design-system.orange.com"><strong>Visit OUDS Web</strong></a>
</p>

## Layout

```
libs/
  web/                OUDS Web — the Bootstrap-based component library (Orange, Sosh, Orange Compact)
    site/             Astro documentation site (shared by all OUDS Web brands)
    packages/
      orange/
      orange-compact/
      sosh/
      migrate/        @ouds/web-migrate CLI
```

More libraries (React, Angular, Vue component libraries) will land under `libs/` over time.

## Getting started

Run `npm install` at the repository root — this installs dependencies for every workspace (`libs/web` and `libs/web/packages/*`).

All of the familiar npm scripts still work from the repository root; they delegate to the relevant workspace under the hood. For example:

```bash
npm run start        # start all three brand doc servers in parallel
npm run dist          # build CSS + JS for every brand
npm run test          # run the full test suite
npm run docs-build    # build the documentation site for every brand
```

See [`libs/web/README.md`](libs/web/README.md) for the full list of scripts and details on the OUDS Web library itself.

## Task orchestration

This monorepo uses [NX](https://nx.dev) to orchestrate and cache tasks across workspaces. See `nx.json` for target configuration.

## License

See [`LICENSE`](LICENSE).
