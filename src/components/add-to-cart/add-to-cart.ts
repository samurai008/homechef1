import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';

/**
 * Generated class for the AddToCartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-to-cart',
  templateUrl: 'add-to-cart.html'
})
export class AddToCartComponent {

  text: string;

  constructor(public viewCtrl: ViewController) {
    console.log('Hello AddToCartComponent Component');
    this.text = 'Hello World';
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
