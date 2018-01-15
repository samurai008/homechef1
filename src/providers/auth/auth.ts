import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiInfo } from '../../interfaces/apiInfo';
import { Http, Headers, RequestOptions } from '@angular/http';
// need 'map' to chain with http.post so it returns data in JSON
import 'rxjs/add/operator/map';
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
  login(username, password, register) {
    let authUri = register ? 'signup' : 'login';
    console.log(authUri);
    let aliasKey = register ? 'email' : 'username';
    let data = `{"${aliasKey}": "${username}",
                  "password": "${password}"
                }`;
    console.log(JSON.parse(data))
    return this.http.post(`${this.baseUri}/${authUri}/`, JSON.parse(data))
    .map(res => res.json());
  }
}
