import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddToCartComponent } from '../../components/add-to-cart/add-to-cart';
import { ProductListProvider } from '../../providers/product-list/product-list';

/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {
  title: string = "Restaurant";
  off: boolean = false;
  on: boolean = true;
  productId: number;
  productList: any;
  addToCartModal;

  imgData = [
    './assets/stock/dish1.jpeg',
    './assets/stock/dish2.jpeg',
    './assets/stock/dish3.png',
    './assets/stock/dish4.jpeg',
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private productListServ: ProductListProvider,
    private modalCtrl: ModalController
  ) {
    this.productId = navParams.get('id');
    console.log(`${this.productId}`);
    this.productListServ.getProductList(this.productId)
    .subscribe(
      (res) => {
        this.productList = res;
      },
      (err) => {
        console.log(err)
      },
      () => {
        console.log(this.productList)
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
  }

  openProductDetails(id) {
    console.log('open product details')
    const opts = {
      cssClass: "atc-modal"
    }
    this.addToCartModal = this.modalCtrl.create(AddToCartComponent, {id: id}, opts);
    this.addToCartModal.present();
  }

  dismissModal() {
    console.log(`dismissModal..`)
  }

}
