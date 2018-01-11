import { Component, Input } from '@angular/core';
import { AddressProvider } from '../../providers/address/address';

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
  addressList: any;

  constructor(
    private addressService: AddressProvider
  ) {
    console.log('Hello AddressBookComponent Component');
    this.addressService.getAddressList()
    .subscribe(
      (res) => {
        this.addressList = res;
      },
      (err) => console.log(err),
      () => {
        console.log('getAddressList() completed!');
      }
    );
  }

}
