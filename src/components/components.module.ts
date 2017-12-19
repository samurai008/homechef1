import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar';
import { AddToCartComponent } from './add-to-cart/add-to-cart';
import { ImageSliderComponent } from './image-slider/image-slider';
import { LocationComponent } from './location/location';
import { PaymentMethodComponent } from './payment-method/payment-method';
import { AddressBookComponent } from './address-book/address-book';
@NgModule({
	declarations: [NavBarComponent,
    AddToCartComponent,
    ImageSliderComponent,
    LocationComponent,
    PaymentMethodComponent,
    AddressBookComponent],
	imports: [],
	exports: [NavBarComponent,
    AddToCartComponent,
    ImageSliderComponent,
    LocationComponent,
    PaymentMethodComponent,
    AddressBookComponent]
})
export class ComponentsModule {}
