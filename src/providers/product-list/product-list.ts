import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiInfo } from '../../interfaces/apiInfo';
// need 'map' to chain with http.post so it returns data in JSON
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductListProvider {
  uri = new apiInfo().apiUri + '/get-product-category-wise/?category_id=';

  constructor(public http: HttpClient) {
    console.log('Hello ProductListProvider Provider');

  }

  getProductList(id) {
    return this.http.get(this.uri+id).map(
      res => JSON.parse(res.toString())
    )
  }

}
