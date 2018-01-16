import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar';
import { AddToCartComponent } from './add-to-cart/add-to-cart';
import { ImageSliderComponent } from './image-slider/image-slider';
import { LocationComponent } from './location/location';
import { PaymentMethodComponent } from './payment-method/payment-method';
import { AddressBookComponent } from './address-book/address-book';
import { AddressListComponent } from './address-list/address-list';
import { AddressInputFormComponent } from './address-input-form/address-input-form';
@NgModule({
	declarations: [NavBarComponent,
    AddToCartComponent,
    ImageSliderComponent,
    LocationComponent,
    PaymentMethodComponent,
    AddressBookComponent,
    AddressBookComponent,
    AddressListComponent,
    AddressInputFormComponent],
	imports: [],
	exports: [NavBarComponent,
    AddToCartComponent,
    ImageSliderComponent,
    LocationComponent,
    PaymentMethodComponent,
    AddressBookComponent,
    AddressBookComponent,
    AddressListComponent,
    AddressInputFormComponent]
})
export class ComponentsModule {}
