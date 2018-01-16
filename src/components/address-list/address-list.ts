import { Input, Component } from '@angular/core';

/**
 * Generated class for the AddressListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'address-list',
  templateUrl: 'address-list.html'
})
export class AddressListComponent {

  @Input() addressList;

  constructor() {
    console.log('Hello AddressListComponent Component');
  }

}
