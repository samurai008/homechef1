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
import { PaymentPage } from '../pages/payment/payment';
import { BlankPage } from '../pages/blank/blank';
import { ProfilePage } from '../pages/profile/profile';
import { StaticTextPage } from '../pages/static-text/static-text';

import { NavBarComponent } from '../components/nav-bar/nav-bar';
import { AddToCartComponent } from '../components/add-to-cart/add-to-cart';
import { ImageSliderComponent } from '../components/image-slider/image-slider';
import { LocationComponent } from '../components/location/location';
import { PaymentMethodComponent } from '../components/payment-method/payment-method';
import { AddressBookComponent } from '../components/address-book/address-book';
import { AddressListComponent } from '../components/address-list/address-list';
import { AddressInputFormComponent } from '../components/address-input-form/address-input-form';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserStorageProvider } from '../providers/user-storage/user-storage';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CartStorageProvider } from '../providers/cart-storage/cart-storage';
import { AuthProvider } from '../providers/auth/auth';
import { AllCategoriesProvider } from '../providers/all-categories/all-categories';
import { ProductListProvider } from '../providers/product-list/product-list';
import { ProductDetailProvider } from '../providers/product-detail/product-detail';
import { AddressProvider } from '../providers/address/address';

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
    PaymentPage,
    BlankPage,
    ProfilePage,
    StaticTextPage,
    
    NavBarComponent,
    AddToCartComponent,
    ImageSliderComponent,
    LocationComponent,
    PaymentMethodComponent,
    AddressBookComponent,
    AddressListComponent, 
    AddressInputFormComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ReactiveFormsModule
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
    PaymentPage,
    BlankPage,
    ProfilePage,
    StaticTextPage,

    AddressBookComponent,
    NavBarComponent,
    AddToCartComponent,
    ImageSliderComponent,
    LocationComponent,
    AddressListComponent,
    AddressInputFormComponent 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserStorageProvider,
    CartStorageProvider,
    AuthProvider,
    AllCategoriesProvider,
    ProductListProvider,
    ProductDetailProvider,
    AddressProvider
  ]
})
export class AppModule {}
