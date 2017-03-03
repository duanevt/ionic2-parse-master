import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { DatabasePage } from '../pages/database/database';
import { SecurityPage } from '../pages/security/security';
import { UsersPage } from '../pages/users/users';
import { FilesPage } from '../pages/files/files';
import { ImagesPage } from '../pages/images/images';
import { ImagePickerPage } from '../pages/image-picker/image-picker';
import { CameraPluginPage } from '../pages/camera-plugin/camera-plugin';

import * as Parse from 'parse';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 },
      { title: 'Database', component: DatabasePage },
      { title: 'Security', component: SecurityPage },
      { title: 'Users', component: UsersPage },
      { title: 'Files', component: FilesPage },
      { title: 'Images', component: ImagesPage },
      { title: 'Image Picker', component: ImagePickerPage },
      { title: 'Camera Plugin', component: CameraPluginPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      // Initialise parse SDK
      // Parse.initialize("udemyAppID");
      // Parse.serverURL = 'https://parse-server-codecraft-dvt.herokuapp.com/parse';

      Parse.initialize("AppId1");
      Parse.serverURL = 'https://parsewithionic2-duanev1.c9users.io/app1';

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
