Contrary to control items, OUDS Web does not automatically add an icon or any other error indicator for the standalone controls, it only changes its color. This is because this component should be included in others (such as tables) and adding an icon could break some layouts.

Because color alone must not be used to indicate invalidity, provide an additional accessible indicator. In the example below, we add descriptive text and associate it with the control using `aria-describedby`.
