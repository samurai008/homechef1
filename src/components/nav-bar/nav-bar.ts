import { Component, Input } from '@angular/core';
import { App, ModalController } from 'ionic-angular';
import { CartPage } from '../../pages/cart/cart';
import { LocationComponent } from '../location/location';
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
  @Input() location;
  @Input() locationOn: boolean;
  @Input() showTitle: boolean;

  constructor(private appCtrl: App, private modalCtrl: ModalController) {
    console.log('Hello NavBarComponent Component');
  }

  goToCart() {
    console.log('go to cart');
    this.appCtrl.getRootNav().push(CartPage);
  }

  popView() {
    this.appCtrl.goBack().then(res => console.log(res));
  }

  selectLocation() {
    console.log('selectLocation triggered');
    let locationModal = this.modalCtrl.create(LocationComponent);
    locationModal.present();
  }

}
