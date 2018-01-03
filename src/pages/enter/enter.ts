import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the EnterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enter',
  templateUrl: 'enter.html',
})
export class EnterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnterPage');
  }

  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }

  goToLogin() {
    this.navCtrl.push(RegisterPage);
  }

}
