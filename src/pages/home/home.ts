import { Component } from '@angular/core';
import { NavController, ModalController, ViewController, NavParams } from 'ionic-angular';
import { AddToCartComponent } from '../../components/add-to-cart/add-to-cart';
import { UserStorageProvider } from '../../providers/user-storage/user-storage';
import { AllCategoriesProvider } from '../../providers/all-categories/all-categories';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Home";
  color = "dark";
  on: boolean = true;
  off: boolean = false;

  userData: any;
  menu: any;

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
  public modalCtrl: ModalController,
  private navParams: NavParams,
  private categories: AllCategoriesProvider,
  private user: UserStorageProvider) {

    this.categories.getCategories().subscribe(
      (res) => this.menu = res,
      (err) => console.log(err),
      () => {
        this.restaurants.map(
          (val, i) => {
            console.log(val, i);
            val['name'] = this.menu[i]['fields']['name'];
          }
        )
      }
    );

    this.user.get()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(`** UserStorageProvider **`)
      console.error(err);
    })
  }

  ngOnInit() {
    
  }

  openRestaurant(id) {
    const opts = {
      cssClass: "atc-modal"
    }
    this.addToCartModal = this.modalCtrl.create(AddToCartComponent, {}, opts);
    this.addToCartModal.present();
  }

  dismissModal() {
    console.log(`dismissModal..`)
    
  }

}
