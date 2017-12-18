import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

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
import { LocationComponent } from '../components/location/location';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserStorageProvider } from '../providers/user-storage/user-storage';
import { HttpClientModule } from '@angular/common/http';

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
    ImageSliderComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    ImageSliderComponent,
    LocationComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserStorageProvider
  ]
})
export class AppModule {}
