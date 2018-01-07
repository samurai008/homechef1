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
    let loading = this.loadingPopUp('initializing')
    loading.present();
    this.user.get().then((res) => {
      if (res !== null) {
        loading.dismiss();
        this.navCtrl.setRoot(HomePage);
      } else {
        loading.dismiss();
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  loadingPopUp(message) {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="spinner-container">
          <div class="loader"></div>
          <h6>${message}</h6>
        </div>
      ` 
    });
    return loading;
  }

  createToast(message) {
      console.log('creating toast')
      let toast = this.toastCtrl.create({
        message: `${message}`,
        duration: 3000,
        showCloseButton: true,
      });
      return toast;
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      let toast = this.createToast('Invalid inputs. Please try again');
      toast.present();
      return false;
    }
    this.doLogin(this.loginForm.controls.username.value,
      this.loginForm.controls.password.value);
  }

  doLogin(username, password) {
    let loading = this.loadingPopUp('Loggin in');
    loading.present();
    let response;
    let status = this.auth.login(username, password)
                  .subscribe((res) => {
                    response = res
                  },
                (err) => {
                  console.log(err)
                  loading.dismiss();
                  this.createToast('Invalid creds. Please try again!');
                },
                () => {
                    if (response['status'] == "true") {
                      console.log('aaaaaa');
                      this.saveUser(username);
                      loading.dismiss();
                    } else {
                      this.createToast('Invalid creds. Please try again!');
                    }
                }
              )
  }

  saveUser(data) {
    this.user.set(data).then((res) => {
      console.log(res);
      // console.log(`nada`);
      this.navCtrl.setRoot(HomePage);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
