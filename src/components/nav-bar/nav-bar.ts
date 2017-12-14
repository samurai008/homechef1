import { Component, Input } from '@angular/core';
import { App } from 'ionic-angular';
import { CartPage } from '../../pages/cart/cart';
/**
 * Generated class for the NavBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.html'
})
export class NavBarComponent {

  @Input() title : string;
  @Input() color: string;
  @Input() hamburger: boolean;
  @Input() back: boolean;
  @Input() location: boolean;
  @Input() showTitle: boolean;

  constructor(private appCtrl: App) {
    console.log('Hello NavBarComponent Component');
    console.log(this.title);
  }

  goToCart() {
    console.log('go to cart');
    this.appCtrl.getRootNav().push(CartPage);
  }

}
