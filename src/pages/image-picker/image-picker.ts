import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from 'ionic-native';
import * as Parse from 'parse';

/*
  Generated class for the ImagePicker page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-image-picker',
  templateUrl: 'image-picker.html'
})
export class ImagePickerPage {
  fileUris: Array<string>;
  file_uri: string;
  dvtstring: string;
  base64Image: string;
  isFileUri: boolean;
  urlVariable: string;
  msm: string = "data:image/gif;base64,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";
  strongArm: string = "data:image/jpeg;base64,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"

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePickerPage');
    console.log('lengths of images ' + this.msm.length + ' ' + this.strongArm.length);
  }

  private openGallery (outputType: number = 0): void {
    let options = {
      maximumImagesCount: 8,
      width: 100,
      height: 100,
      quality: 50,
      outputType: outputType
    }

    if (outputType===0) {
      this.isFileUri = true;
      console.log("file uri")
    } else {
      this.isFileUri = false;
      console.log("data uri")
    }

    ImagePicker.getPictures(options).then(
      file_uris => {
        this.fileUris = file_uris;
        //this.dvtstring = file_uris[0].replace(/r?\n|\r/g, "");
        this.dvtstring = file_uris[0].replace(/\n/g, "");
        //this.dvtstring = file_uris[0];
        //JSON.stringify(this.dvtstring);
        this.file_uri = file_uris[0];
        this.base64Image = "data:image/jpeg;base64," + this.dvtstring;

        console.log(typeof this.file_uri);
        console.log(this.file_uri.length);
        console.log(this.file_uri);
        console.log("end of file. ... try without line feeds removed")
        console.log(this.dvtstring.length);
        console.log(this.dvtstring);
        console.log("send to parse server");

        if (this.isFileUri) {
          var parseFile = new Parse.File("dvtImagePicked", file_uris[0]);
        } else {
          var parseFile = new Parse.File("dvt64ImagePicked.jpg", {base64: file_uris[0]} );
        }

        parseFile.save().then(()=>{
          console.log(parseFile.url());
          this.urlVariable = parseFile.url();
        },(err)=>{
          console.error(err);
        })
      },
      err => console.log('uh oh')
    );
	}

}
