import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { AddToCartComponent } from '../../components/add-to-cart/add-to-cart';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Home";
  color = "dark";
  on: boolean = true;
  off: boolean = false;

  restaurants = [
    {
      id: 1,
      name: 'Punjabi Rasoi',
      description: 'Small description about the restaurant.',
      thumbnail: './assets/imgs/engBF.jpg',
      discount: true,
      discount_percent: 12,
    },
    {
      id: 2,
      name: 'Freshmenu',
      description: 'Small description about the restaurant.',
      thumbnail: './assets/imgs/engBF.jpg',
      discount: false,
      discount_percent: undefined,
    },
    {
      id: 3,
      name: 'Box8',
      description: 'Small description about the restaurant.',
      thumbnail: './assets/imgs/engBF.jpg',
      discount: true,
      discount_percent: 50,
    }
  ];
  addToCartModal;

  constructor(public navCtrl: NavController,
  public modalCtrl: ModalController) {

  }

  openRestaurant(id) {
    const opts = {
      cssClass: "atc-modal"
    }
    this.addToCartModal = this.modalCtrl.create(AddToCartComponent, {}, opts);
    this.addToCartModal.present();
    console.log(this.addToCartModal);
  }

  dismissModal() {
    console.log(`dismissModal..`)
    
  }

}
