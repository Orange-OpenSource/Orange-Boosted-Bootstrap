/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '@ouds/web-components/dist/components';

import { defineCustomElement as defineOudsButton } from '@ouds/web-components/dist/components/ouds-button.js';
import { defineCustomElement as defineOudsTextInput } from '@ouds/web-components/dist/components/ouds-text-input.js';
@ProxyCmp({
  defineCustomElementFn: defineOudsButton,
  inputs: ['accessibleText', 'coloredBg', 'disabled', 'href', 'iconOnly', 'loading', 'loadingTime', 'variant', 'wrap']
})
@Component({
  selector: 'ouds-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accessibleText', 'coloredBg', 'disabled', 'href', 'iconOnly', 'loading', 'loadingTime', 'variant', 'wrap'],
  standalone: true
})
export class OudsButton {
  protected el: HTMLOudsButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['oudsButtonClick']);
  }
}


export declare interface OudsButton extends Components.OudsButton {

  oudsButtonClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineOudsTextInput,
  inputs: ['bsPrefix', 'bsSuffix', 'disabled', 'invalid', 'label', 'maxWidth', 'outlined', 'placeholder', 'readonly', 'value']
})
@Component({
  selector: 'ouds-text-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bsPrefix', 'bsSuffix', 'disabled', 'invalid', 'label', 'maxWidth', 'outlined', 'placeholder', 'readonly', 'value'],
  standalone: true
})
export class OudsTextInput {
  protected el: HTMLOudsTextInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface OudsTextInput extends Components.OudsTextInput {}


