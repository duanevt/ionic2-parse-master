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
  dvt_img: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagesPage');
  }

  private openGallery (outputType: number = 0): void {
    // default output = 0 = FILE_URI
    //                  1 = BASE64_STRING
  let options = {
    maximumImagesCount: 8,
    width: 200,
    height: 200,
    quality: 50,
    outputType: 0
  }
  console.log("getPictures about to be called");
  ImagePicker.getPictures(options).then(
    (file_uris) => {
      console.log("got pics")
      this.dvt_img = 'data:image/jpeg;base64,'+file_uris[0];
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
      console.log("now create parse file")
      console.log(typeof this.images[0])
      console.log(this.images[0]);
      var parseFile = new Parse.File("dvtImagePicked", this.images[0]);
      //var parseFile = new Parse.File("dvt64ImagePicked.jpg", {base64: this.images[0]} );
      parseFile.save().then(()=>{
        console.log(parseFile.url());
        this.urlVariable = parseFile.url();
      },(err)=>{
        console.error(err);
      })
    },
    err => console.log('uh oh no image picking')
  );
}

}
