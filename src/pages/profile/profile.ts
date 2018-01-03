import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserStorageProvider } from '../../providers/user-storage/user-storage';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profileData: any;
  title: string = "Profile";
  true: boolean = true;
  profilePictureExists: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private userStorage: UserStorageProvider
  ) {
    // this.userStorage.remove();
    // this.userStorage.set({token: 1234, userData: {name: "Nilabjo", picture: null}}); 
    this.userStorage.get().then(res => this.setProfileData(res))
    .catch(err => console.log(err));
  
  
  }

  setProfileData(res) {
    this.profileData = res;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
