import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../../pages/home/home';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { UserStorageProvider } from '../../providers/user-storage/user-storage';
import { apiInfo } from '../../interfaces/apiInfo';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage implements OnInit {
  loginForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private user: UserStorageProvider,
    private auth: AuthProvider
  ) {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="spinner-container">
          <div class="loader"></div>
          <h6>initializing</h6>
        </div>
      ` 
    });
    loading.present();
    this.user.get().then((res) => {
      if (res !== null) {
        loading.dismiss();
        // this.navCtrl.setRoot(HomePage);
      } else {
        loading.dismiss();
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      let toast = this.toastCtrl.create({
        message: 'Invalid data! Please try again',
        duration: 3000,
        showCloseButton: true,
      });
      toast.present();
      return false;
    }
    let userData = this.loginForm.controls.username.value;
    this.user.set(userData).then((res) => {
      console.log(res);
      this.doLogin(this.loginForm.controls.username.value,
      this.loginForm.controls.password.value);
      // this.navCtrl.setRoot(HomePage);
    })
  }

  doLogin(username, password) {
    let status = this.auth.login(username, password);
    console.log(status);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
