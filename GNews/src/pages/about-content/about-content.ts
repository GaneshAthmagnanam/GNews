import { Component } from '@angular/core';
import { NavController, NavParams, ViewController  } from 'ionic-angular';

/**
 * Generated class for the AboutContentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-about-content',
  templateUrl: 'about-content.html',
})
export class AboutContentPage {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutContentPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
