import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiInfo } from '../../interfaces/apiInfo';
import { Http, Headers, RequestOptions } from '@angular/http';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  baseUri: string = new apiInfo().apiUri;
  constructor(public http: Http) {

  }
  login(username, password) {
    let data = ({username: username,password: password});
    return this.http.post(`${this.baseUri}/login/`, data)
    .subscribe(res => res.json());
  }
}
