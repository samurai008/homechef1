import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiInfo } from '../../interfaces/apiInfo';
// need 'map' to chain with http.post so it returns data in JSON
import 'rxjs/add/operator/map';

/*
  Generated class for the AllCategoriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AllCategoriesProvider {
  baseUri: string = new apiInfo().apiUri;

  constructor(public http: HttpClient) {
    console.log('Hello AllCategoriesProvider Provider');
  }

  getCategories() {
    return this.http.get(`${this.baseUri}/all-categories/`)
    .map(res => JSON.parse(res.toString()));
  }

}
