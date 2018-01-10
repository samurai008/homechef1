import { Component } from '@angular/core';
import { NavController, ModalController, ViewController, NavParams } from 'ionic-angular';
import { AddToCartComponent } from '../../components/add-to-cart/add-to-cart';
import { UserStorageProvider } from '../../providers/user-storage/user-storage';
import { AllCategoriesProvider } from '../../providers/all-categories/all-categories';
import { menu } from '../../interfaces/menu-obj';
import { RestaurantPage } from '../../pages/restaurant/restaurant';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Home";
  resTitle: string;
  color = "dark";
  on: boolean = true;
  off: boolean = false;
  userData: any;
  menu: any;
  restaurants = [];
  addToCartModal;
  location = "Your Location";

  constructor(public navCtrl: NavController,
  public modalCtrl: ModalController,
  private navParams: NavParams,
  private categories: AllCategoriesProvider,
  private user: UserStorageProvider) {

    this.categories.getCategories().subscribe(
      (res) => this.menu = res,
      (err) => console.log(err),
      () => {
        for (let i=0; i < this.menu.length; i++) {
          let m = new menu();
          m.id = this.menu[i]['pk'];
          m.name = this.menu[i]['fields']['name'];
          this.restaurants.push(m)
        }
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
    this.user.getPin()
    .then(res => this.location = res['pin'])
    // .then(res => console.log(res['pin']))
  }

  openRestaurant(id, title) {
    

    this.navCtrl.push(RestaurantPage, {
      id: id,
      title: title
    });
  }

  dismissModal() {
    console.log(`dismissModal..`)
    
  }

}
