import { Component, Element, h, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'ouds-text-input',
  styleUrl: 'ouds-text-input.scss',
  shadow: true,
  formAssociated: true,
})
export class OudsTextInput {
  @Element() el!: HTMLElement;

  @State() rounded: boolean = false;

  @Prop() label!: string;
  @Prop() placeholder: string = ' ';
  @Prop() value?: string;
  @Prop() bsPrefix?: string;
  @Prop() bsSuffix?: string;
  @Prop() maxWidth: boolean = false;
  @Prop() outlined: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() readonly: boolean = false;
  @Prop() invalid: boolean = false;

  @Listen('oudsButtonClick', { capture: true })
  handleOudsButtonClick(e: CustomEvent) {
    e.stopPropagation();
    console.log((this.el.shadowRoot?.querySelector('.text-input-field') as HTMLInputElement).value);
  }

  private get hasLeadingIcon(): boolean {
    return !!this.el.querySelector('[slot="prefix-icon"]');
  }

  private get hasTrailingAction(): boolean {
    return !!this.el.querySelector('[slot="trailing-action"]');
  }

  private renderInput() {
    return <input type="text" class={{ "text-input-field": true, "is-invalid": this.invalid }} placeholder={this.placeholder} disabled={this.disabled} readonly={this.readonly} value={this.value} />;
  }

  connectedCallback() {
    this.rounded = !!this.el.closest('.use-rounded-corner-inputs');
  }

  render() {
    const classes = {
      "text-input-container": true,
      "text-input-container-outlined": this.outlined,
      "has-icon": this.hasLeadingIcon,
      "has-action": this.hasTrailingAction,
      "is-rounded": this.rounded,
    }
    return (
      <div class={{ "text-input": true, "component-max-width": this.maxWidth }}>
        <div class={classes}>
          <slot name="prefix-icon"></slot>
          <label>{this.label}</label>
          {this.bsPrefix || this.bsSuffix
            ? <div class="input-container" data-bs-suffix={this.bsSuffix} data-bs-prefix={this.bsPrefix}>{this.renderInput()}</div>
            : this.renderInput()
          }
          <slot name="trailing-action"></slot>
        </div>
        <slot name="helper-text"></slot>
        <slot name="helper-link"></slot>
      </div>
    );
  }
}
