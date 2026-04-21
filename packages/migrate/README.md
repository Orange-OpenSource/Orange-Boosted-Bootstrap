# @ouds/web-migrate

CLI utility to migrate a Boosted or OB1 project to OUDS Web or update a OUDS Web project to the last version.

## Usage

To update an OUDS project to the last version, simply run:

```bash
npx @ouds/web-migrate "**/*.{css,scss,html}"
```

### Options

- `--from` Change the replacement set (default is OUDS update).
- First non-flag argument is the glob pattern. Default: `**/*.{css,scss,html}`

## Examples

```bash
# Default (migrate to last OUDS Web version)
npx @ouds/web-migrate

# Migrate a Boosted project that uses JSX
npx @ouds/web-migrate --from=boosted "src/**/*.{css,scss,html,jsx}"

# Migrate an OB1 project that uses Vue
npx @ouds/web-migrate --from=ob1 "src/**/*.{css,scss,html,vue}"
```

## What it does

- Replaces known class names using a regex-based matcher.
- Emits warnings for deprecated or removed classes that require manual follow-up.

## Output

- Prints the replacement results returned by `replace-in-file`.
- Lists warnings when manual action is required.

## Development

```bash
npm test
```

## License

MIT
