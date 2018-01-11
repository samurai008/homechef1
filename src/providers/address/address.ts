import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AddressProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddressProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AddressProvider Provider');
  }

  getAddressList() {
    return this.http.get('../assets/address-mock-data.json')
    .map(res => res)
  }
}
