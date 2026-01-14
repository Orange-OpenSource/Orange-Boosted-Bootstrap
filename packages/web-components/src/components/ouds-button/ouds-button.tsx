import { Component, Element, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'ouds-button',
  styleUrl: 'ouds-button.scss',
  shadow: true,
})
export class OudsButton {
  @Element() el!: HTMLElement;

  @State() rounded: boolean = false;
  @State() icon: boolean = false;

  @Prop() accessibleText!: string;
  @Prop() variant: 'default' | 'strong' | 'brand' | 'minimal' | 'negative' = 'default';
  @Prop() href?: string;
  @Prop() coloredBg: boolean = false;
  @Prop() loading: boolean = false;
  @Prop() loadingTime?: number;
  @Prop() disabled: boolean = false;
  @Prop() wrap: boolean = true;
  @Prop() iconOnly: boolean = false;

  @Event({ bubbles: true }) oudsButtonClick!: EventEmitter<void>;

  connectedCallback() {
    this.rounded = !!this.el.closest('.use-rounded-corner-buttons');
    this.icon = !!this.el.querySelector('[slot="icon"]') && !this.iconOnly;
  }

  componentDidLoad() {
    if (this.loadingTime) {
      this.el.style.setProperty('--bs-btn-loading-time', `${this.loadingTime}s`)
    }
    if (!!!this.href) {
      this.el.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.oudsButtonClick.emit();
      });
    }
  }

  render() {
    const Tag = this.href ? 'a' : 'button';
    const disabled = this.disabled || this.loading;
    const classes = {
      'btn': true,
      [`btn-${this.variant}`]: true,
      'btn-on-colored-bg': this.coloredBg,
      'btn-icon': this.iconOnly,
      'btn-rounded': this.rounded,
      'btn-icon-text': this.icon,
      'text-nowrap': !this.wrap,
      'loading-indeterminate': this.loading && this.loadingTime === undefined,
      'loading-determinate': this.loading && this.loadingTime !== undefined,
    };
    return (
      <Tag href={this.href} class={classes} disabled={disabled}>
        <slot name="icon"></slot>
        {!this.iconOnly && this.accessibleText}
        {this.iconOnly && <span class="visually-hidden">{this.accessibleText}</span>}
        {this.loading && <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' class="loader" aria-hidden="true">
          <circle class="loader-inner" cx="20" cy="20" r="17"></circle>
        </svg>}
        <slot></slot>
      </Tag>
    )
  }
}
