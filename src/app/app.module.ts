import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
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

import { NavBarComponent } from '../components/nav-bar/nav-bar';
import { AddToCartComponent } from '../components/add-to-cart/add-to-cart';
import { ImageSliderComponent } from '../components/image-slider/image-slider';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EnterPage,
    RegisterPage,
    SelectPackagePage,
    CompleteProfilePage,
    RestaurantPage,
    CartPage,
    OrderListPage,
    OrderDetailPage,

    NavBarComponent,
    AddToCartComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EnterPage,
    RegisterPage,
    SelectPackagePage,
    CompleteProfilePage,
    RestaurantPage,
    CartPage,
    OrderListPage,
    OrderDetailPage,

    NavBarComponent,
    AddToCartComponent,
    ImageSliderComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
