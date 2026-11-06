Contrary to control items, OUDS Web do not automatically add an icon or any other error indicator for the standalone controls, it only changes its color. This is because this component should be included in others (such as tables) and adding an icon could break some layouts.

As one can not rely only on color to convey information, it is up to you to implement an accessible way to mark the invalid state. In the following example we add a text linked with `aria-describedby` to do that.
