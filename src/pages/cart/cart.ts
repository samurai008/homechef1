import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import { PaymentPage } from '../payment/payment';
/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  data: any;
  displayCart: boolean = false;
  displayEmptyCartMessage: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private http: Http) {
    let uri = './assets/cart-mock-data.json';
    this.http.get(uri).subscribe(
      data => {
        this.data = data.json();
        this.data.map((item) => {
          return item['price'] = this.calcPrice(item['qty'], item['price']);
        });
        this.displayCart = true;
      },
      err => console.error(err),
      () => console.log('Subscription to observable is complete.')
    );
  }

  calcPrice(qty, price) {
    return qty*price;
  }

  removeFromCart(item) {
    this.data = this.data.filter((element) => {
      return element !== item;
    });

    if (this.data.length === 0) {
      this.displayCart = false;
      this.displayEmptyCartMessage = true;
    }
  }

  popView() {
    this.navCtrl.pop();
  }

  goToPayment() {
    this.navCtrl.push(PaymentPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

}
