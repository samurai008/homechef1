import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { OrderDetailPage } from '../order-detail/order-detail';

/**
 * Generated class for the OrderListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {
  title: string = "Orders";
  true: boolean = true;
  false: boolean = false;
  
  // To store order data for user
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private http: Http) {
    let uri: string = "./assets/order-mock-data.json";
    this.fetchOrders(uri);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderListPage');
  }

  fetchOrders(uri) {
    return this.http.get(uri)
      .subscribe(
        (data) => this.data = data.json(),
        error => error,
        () => console.log(`subscription to OrderList observable finished`)
      );
  }

  orderSelected(order) {
    this.navCtrl.push(OrderDetailPage, order);
  }

}
