import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiInfo } from '../../interfaces/apiInfo';
// need 'map' to chain with http.post so it returns data in JSON
import 'rxjs/add/operator/map';
/*
  Generated class for the ProductDetailProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductDetailProvider {
  uri: string = new apiInfo().apiUri + "/get-product/?product_id=";

  constructor(public http: HttpClient) {
    console.log('Hello ProductDetailProvider Provider');
  }

  getProductDetail(id) {
    let data = {
      productid: id
    }

    return this.http.post(this.uri+id, data)
    .map(
      (res) => JSON.parse(res.toString())
    );
  }
}
