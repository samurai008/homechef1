import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserStorageProvider } from '../../providers/user-storage/user-storage';

/**
 * Generated class for the BlankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blank',
  templateUrl: 'blank.html',
})
export class BlankPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private userStorage: UserStorageProvider) {
    this.userStorage.clear();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlankPage');
  }

}
