import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import * as Parse from 'parse';

@Component({
  selector: 'page-files',
  templateUrl: 'files.html'
})
export class FilesPage {
  myPlatform: number = 0;
  urlVariable: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public platform: Platform) {

    if (this.platform.is("android")) {
        console.log("I'm on android");
        this.myPlatform = 1; // android
      }

      if (this.platform.is("core")) {
        console.log("I'm on the desktop with ionic serve");
        //alert("News page: Desktop device .... ionoic serving!!!");
        this.myPlatform = 4; // on the desktop browser
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilesPage');
  }

  // The methods below are for file input on the desktop
  //
  addImages(input) {
    console.log("adding and image");
    // this.selectedFiles = [];
    // this.selectedFiles[0] = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(input.files[0]));
    console.log(input.files)
    console.log(input.files[0])
    var file = input.files[0];
    var name = file.name;
    console.log("file name is " + name);
    console.log(typeof file);
    var parseFile = new Parse.File(name, file);
    parseFile.save().then(()=>{
      console.log(parseFile.url());
      this.urlVariable = parseFile.url();
    },(err)=>{
      console.error(err);
    })

    //  this.readFiles(input.files);
  }

}
