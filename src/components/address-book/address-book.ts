import { Component } from '@angular/core';

/**
 * Generated class for the AddressBookComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'address-book',
  templateUrl: 'address-book.html'
})
export class AddressBookComponent {

  text: string;

  constructor() {
    console.log('Hello AddressBookComponent Component');
    this.text = 'Hello World';
  }

}
