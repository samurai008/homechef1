import { Component, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the ImageSliderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'image-slider',
  templateUrl: 'image-slider.html'
})
export class ImageSliderComponent {
  @Input() data : Array<string>;
  @ViewChild(Slides) slides: Slides;
  true: boolean = true;
  spacevalue: number = 10;
  perslideval: number = 2;
  Images = [
    './assets/stock/placeholder.png',
    './assets/stock/placeholder.png',
    './assets/stock/placeholder.png',
    './assets/stock/placeholder.png',
  ];

  constructor() {
    
  }

  ngOnInit() {
    this.Images = this.data;
  }

}
