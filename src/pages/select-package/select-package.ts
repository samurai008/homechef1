import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormControl, FormGroup} from '@angular/forms';

/**
 * Generated class for the SelectPackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-package',
  templateUrl: 'select-package.html',
})
export class SelectPackagePage {
  plans = [
    {
      id: 1,
      title: 'Any 5',
      price: 299,
      subscription: 'month'
    },
    {
      id: 2,
      title: 'Any 10',
      price: 399,
      subscription: 'month'
    },
    {
      id: 3,
      title: 'Any 15',
      price: 499,
      subscription: 'month'
    },
    {
      id: 4,
      title: 'Any 20-30',
      price: 699,
      subscription: 'month'
    }
  ];
  fPlan;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.plans);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPackagePage');
  }

}
