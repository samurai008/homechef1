import { Component } from '@angular/core';

/**
 * Generated class for the PaymentMethodComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'payment-method',
  templateUrl: 'payment-method.html'
})
export class PaymentMethodComponent {

  text: string;

  constructor() {
    console.log('Hello PaymentMethodComponent Component');
    this.text = 'Hello World';
  }

}
