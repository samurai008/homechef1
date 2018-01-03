import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the UserStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserStorageProvider {
  storageName: string = 'userData';

  constructor(public http: HttpClient,
  private storage: Storage) {
    console.log('Hello UserStorageProvider Provider');
  }

  get() {
    return this.storage.get(this.storageName).then((res) => {
      return res;
    })
    .catch(err => err);
  }

  set(value) {
    return this.storage.set(this.storageName, value).then(res => res)
      .catch(err => err);
  }

  remove() {
    return this.storage.remove(this.storageName).then(res => res)
    .catch(err => console.log(this.storageName + ' removal error: ' + err));
  }

}
