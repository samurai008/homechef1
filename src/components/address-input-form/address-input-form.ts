import { Component } from '@angular/core';

/**
 * Generated class for the AddressInputFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'address-input-form',
  templateUrl: 'address-input-form.html'
})
export class AddressInputFormComponent {

  text: string;

  constructor() {
    console.log('Hello AddressInputFormComponent Component');
    this.text = 'Hello World';
  }

}
