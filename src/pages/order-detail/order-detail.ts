import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {
  title: string = "Order Detail";
  orderDetails: any[];
  totalPrice: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let data = navParams.data;
    this.title = 'Order ' + data.orderno;
    this.orderDetails = data.orderdetails
                        .map((e) => {
                          e['price'] = e['qty']*e['price']
                          return e;
                        });
    console.log(this.orderDetails);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailPage');
  }

}
