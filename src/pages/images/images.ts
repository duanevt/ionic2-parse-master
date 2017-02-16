import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from 'ionic-native';
import * as Parse from 'parse';

/*
  Generated class for the Images page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-images',
  templateUrl: 'images.html'
})
export class ImagesPage {
  private images: Array<string>;
  private grid: Array<Array<string>>;
  urlVariable: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagesPage');
  }

  private openGallery (): void {
  let options = {
    maximumImagesCount: 8,
    width: 500,
    height: 500,
    quality: 75
  }

  ImagePicker.getPictures(options).then(
    (file_uris) => {
      this.images = file_uris;
      this.grid = Array(Math.ceil(this.images.length/2));
      let rowNum = 0;

    	for (let i = 0; i < this.images.length; i+=2) {

    		this.grid[rowNum] = Array(2);

    		if (this.images[i]) {
    			this.grid[rowNum][0] = this.images[i]
    		}

    		if (this.images[i+1]) {
    			this.grid[rowNum][1] = this.images[i+1]
    		}

    		rowNum++;
    	}

      // var parseFile = new Parse.File("dvtImagePicked", this.images[0]);
      // parseFile.save().then(()=>{
      //   console.log(parseFile.url());
      //   this.urlVariable = parseFile.url();
      // },(err)=>{
      //   console.error(err);
      // })
    },
    err => console.log('uh oh no image picking')
  );
}

}
