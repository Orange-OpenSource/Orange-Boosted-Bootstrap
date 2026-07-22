# Options

Built-in Sass variables to toggle global CSS preferences. Override in `scss/_variables.scss` and recompile.

## Available Options

| Variable                          | Default | Description                                         |
| --------------------------------- | ------- | --------------------------------------------------- |
| `$core-ouds-dimension-base`       | `4px`   | Default spacer for generating spacer utilities      |
| `$enable-dark-mode`               | `true`  | Enables dark mode support                           |
| `$enable-rounded`                 | `true`  | Enables `border-radius` on components               |
| `$enable-gradients`               | `false` | Enables gradient `background-image` on components   |
| `$enable-bootstrap-compatibility` | `false` | Keeps Bootstrap elements alongside OUDS Web         |
| `$enable-cssgrid`                 | `false` | Enables experimental CSS Grid (`.grid`, `.g-col-*`) |
| `$enable-grid-classes`            | `true`  | Generates CSS grid classes (`.row`, `.col-*`)       |
| `$enable-container-classes`       | `true`  | Generates layout container classes                  |
| `$enable-button-pointers`         | `true`  | Adds pointer cursor to non-disabled buttons         |
| `$enable-negative-margins`        | `false` | Generates negative margin utilities                 |
| `$enable-deprecation-messages`    | `true`  | Shows warnings for deprecated mixins/functions      |
| `$enable-important-utilities`     | `true`  | Adds `!important` to utility classes                |
| `$enable-bullet-list-tick`        | `false` | Enables `.bullet-list-tick` class                   |
