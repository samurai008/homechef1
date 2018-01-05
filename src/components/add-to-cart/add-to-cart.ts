import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ProductDetailProvider } from '../../providers/product-detail/product-detail';

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

  constructor(public viewCtrl: ViewController,
  private params: NavParams,
  private pdService: ProductDetailProvider) {
    console.log('Hello AddToCartComponent Component');
    this.text = 'Hello World';

    let id = params.get('id');
    this.pdService.getProductDetail(id)
    .subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
      () => {
        console.log('completed pdService')
      }
    )
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
