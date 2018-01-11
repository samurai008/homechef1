import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EnterPage } from '../pages/enter/enter';
import { RegisterPage } from '../pages/register/register';
import { SelectPackagePage } from '../pages/select-package/select-package';
import { CompleteProfilePage } from '../pages/complete-profile/complete-profile';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { CartPage } from '../pages/cart/cart';
import { OrderListPage } from '../pages/order-list/order-list';
import { OrderDetailPage } from '../pages/order-detail/order-detail';
import { PaymentPage } from '../pages/payment/payment';
import { BlankPage } from '../pages/blank/blank';
import { StaticTextPage } from '../pages/static-text/static-text';

import { AddToCartComponent } from '../components/add-to-cart/add-to-cart';
import { AddressBookComponent } from '../components/address-book/address-book';

import { UserStorageProvider } from '../providers/user-storage/user-storage';
import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AddressBookComponent;
  username: string = 'John Doe';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private storage: Storage, private userStorage: UserStorageProvider,
    private menuCtrl: MenuController) {
    this.initializeApp();

    this.userStorage.get().then(res => this.username = res)
    .catch(err => console.log(err));

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Menu', component: HomePage },
      { title: 'Orders', component: OrderListPage },
      { title: 'Profile', component: ProfilePage},
      { title: 'About Us', component: StaticTextPage},
      { title: 'Terms of Use', component: StaticTextPage},
      { title: 'Privacy Policy', component: StaticTextPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, {
      title: page.title
    });
  }

  goToProfile(title) {
    this.menuCtrl.close();
    this.nav.setRoot(ProfilePage, 
    );
  }
}
