import { Component } from '@angular/core';
import { ViewController, AlertController, NavController } from 'ionic-angular';
import { Http }  from '@angular/http';
import { apiInfo } from '../../interfaces/apiInfo';
import { UserStorageProvider } from '../../providers/user-storage/user-storage'
import { HomePage } from '../../pages/home/home'

/**
 * Generated class for the LocationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 * Forms are template driven.
 */
@Component({
  selector: 'location',
  templateUrl: 'location.html'
})
export class LocationComponent {

  uri: string = new apiInfo().apiUri;

  constructor(private viewCtrl: ViewController,
  private http: Http,
  private pinStorage: UserStorageProvider,
  private navCtrl: NavController,
  private alertCtrl: AlertController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  callApi(data) {
    this.http.post(
      this.uri+'/pincheck/',
      {
        pincode: data
      }
    ).map(res => res.json())
    .subscribe(
      res => this.validatePinResponse(res, data),
      err => this.invalidAlert().present()
    )
  }

  invalidAlert() {
    const config = {
      title: 'Oops!',
      message: 'We donot serve in this location yet!',
      cssClass: 'invalid-alert',
      buttons: [
        {
          text: 'Ok',
          role: 'ok',
          handler: data => {
            console.log('redirect to menu')
          }
        }
      ]
    }
    let alert = this.alertCtrl.create(config)
    return alert;
  }

  validatePinResponse(res, value) {
    if (res) {
      // this.viewCtrl.dismiss();
      console.log('valid')
      this.pinStorage.setPin(value)
      .then(
        () => {
          this.navCtrl.setRoot(HomePage)
        }
      );
    }
  }

  onSubmit(form: any): void {
    this.callApi(form['location'])
  }

}
