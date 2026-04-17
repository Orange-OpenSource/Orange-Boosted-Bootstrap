# @ouds/web-migrate

CLI utility to migrate a Boosted or OB1 project to OUDS Web or update a OUDS Web project to the last version.

## Usage

```bash
npx @ouds/web-migrate "**/*.(css,scss,html)"
```

### Options

- `--ob1` Use the OB1 replacement set (default is Boosted).
- First non-flag argument is the glob pattern. Default: `**/*.(css,scss,html)`

## Examples

```bash
# Default (Boosted or migrate to last OUDS Web version)
npx @ouds/web-migrate "**/*.css"

# OB1 replacements
npx @ouds/web-migrate --ob1 "src/**/*.(css,scss,html)"
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

ISC
