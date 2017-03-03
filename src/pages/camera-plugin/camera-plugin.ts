import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Camera} from 'ionic-native';

/*
  Generated class for the CameraPlugin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-camera-plugin',
  templateUrl: 'camera-plugin.html'
})
export class CameraPluginPage {
  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPluginPage');
  }

  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 500,
        targetHeight: 500,
        sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM,
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
        console.log(typeof this.base64Image);
        console.log(this.base64Image.length);
        console.log(this.base64Image)
    }, (err) => {
        console.log(err);
    });
  }

}
