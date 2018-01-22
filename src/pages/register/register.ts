import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../../pages/home/home';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { UserStorageProvider } from '../../providers/user-storage/user-storage';
import { apiInfo } from '../../interfaces/apiInfo';
import { AuthProvider } from '../../providers/auth/auth';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

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
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private user: UserStorageProvider,
    private auth: AuthProvider,
    private fb: Facebook
  ) {
    this.title = navParams.get('title');
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
        position: 'top',
        cssClass: 'toast-crunch',
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
    let isRegister = this.navParams.get('register');
    let status = this.auth.login(username, password, isRegister)
                  .subscribe((res) => {
                    console.log(res);
                    response = res
                  },
                (err) => {
                  console.log(err)
                  loading.dismiss();
                  this.createToast('Invalid creds. Please try again!').present();
                },
                () => {
                    loading.dismiss();
                    if (response['status'] == "true" || response === true) {
                      console.log('aaaaaa');
                      this.saveUser({email: username});
                      this.navCtrl.setRoot(HomePage);
                    } else {
                      this.createToast('Invalid creds. Please try again!').present();
                    }
                }
              )
  }

  saveUser(data) {
    this.user.set(data).then((res) => {
      console.log(res);
      // console.log(`nada`);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  handleFbLogin() {
    let loading = this.loadingPopUp('Loggin in');
    loading.present();

    this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook!', res)
        return res['authResponse'];
      })
      .then(res => {
        console.log(res)
        let token = res['accessToken'];
        let userId = res['userID'];
        console.log('userId', userId)

        this.fb.api(
          "/"+userId+"/?fields=id,email,name,picture,gender",
          ['public_profile']
        ).then(res => {
          this.saveUser(res);
          loading.dismiss();
          this.navCtrl.setRoot(HomePage);
        })
        .catch(err => console.log(err))
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

}
