import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StaticTextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-static-text',
  templateUrl: 'static-text.html',
})
export class StaticTextPage {
  true: boolean = true;
  false: boolean = false;
  title: string; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaticTextPage');
  }

}
