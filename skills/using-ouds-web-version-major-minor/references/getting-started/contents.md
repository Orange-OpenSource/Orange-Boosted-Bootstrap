# Contents

## Compiled files structure

```text
ouds-web-orange/
└── css/
    ├── ouds-web.css / .min.css / .rtl.css / .rtl.min.css
    ├── ouds-web-bootstrap.css / .min.css / .rtl.css / .rtl.min.css
    ├── ouds-web-grid.css / .min.css / .rtl.css / .rtl.min.css
    ├── ouds-web-utilities.css / .min.css / .rtl.css / .rtl.min.css
    └── ouds-web-reboot.css / .min.css / .rtl.css / .rtl.min.css

ouds-web-common/
└── js/
    ├── ouds-web.bundle.js / .min.js      (includes Popper)
    ├── ouds-web.js / .min.js             (without Popper)
    └── ouds-web.esm.js / .min.js         (ES module)
```

## CSS files comparison

| File                     | Layout                | Content               | Components            | Utilities             |
| ------------------------ | --------------------- | --------------------- | --------------------- | --------------------- |
| `ouds-web.css`           | Included              | Included              | Included              | Included              |
| `ouds-web-bootstrap.css` | With Bootstrap compat | With Bootstrap compat | With Bootstrap compat | With Bootstrap compat |
| `ouds-web-grid.css`      | Grid only             | -                     | -                     | Flex only             |
| `ouds-web-utilities.css` | -                     | -                     | -                     | Included              |
| `ouds-web-reboot.css`    | -                     | Reboot only           | -                     | -                     |

## JS files comparison

| File                             | Popper       |
| -------------------------------- | ------------ |
| `ouds-web.bundle.js` / `.min.js` | Included     |
| `ouds-web.js` / `.min.js`        | Not included |

## Source code structure

```text
@ouds/
├── web-orange/
│   ├── dist/css/
│   └── scss/
└── web-common/
    ├── dist/js/
    ├── js/
    └── scss/
```
