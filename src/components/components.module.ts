import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar';
import { AddToCartComponent } from './add-to-cart/add-to-cart';
@NgModule({
	declarations: [NavBarComponent,
    AddToCartComponent],
	imports: [],
	exports: [NavBarComponent,
    AddToCartComponent]
})
export class ComponentsModule {}
