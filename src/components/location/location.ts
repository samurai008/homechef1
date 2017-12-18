import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the LocationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'location',
  templateUrl: 'location.html'
})
export class LocationComponent {

  text: string;

  constructor(private viewCtrl: ViewController) {
    console.log('Hello LocationComponent Component');
    this.text = 'Hello World';
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
