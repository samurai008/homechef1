import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar';
import { AddToCartComponent } from './add-to-cart/add-to-cart';
import { ImageSliderComponent } from './image-slider/image-slider';
@NgModule({
	declarations: [NavBarComponent,
    AddToCartComponent,
    ImageSliderComponent],
	imports: [],
	exports: [NavBarComponent,
    AddToCartComponent,
    ImageSliderComponent]
})
export class ComponentsModule {}
