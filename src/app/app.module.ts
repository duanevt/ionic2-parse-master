import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { DatabasePage } from '../pages/database/database';
import { SecurityPage } from '../pages/security/security';
import { UsersPage } from '../pages/users/users';
import { FilesPage } from '../pages/files/files';
import { ImagesPage } from '../pages/images/images';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    DatabasePage,
    SecurityPage,
    UsersPage,
    FilesPage,
    ImagesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    DatabasePage,
    SecurityPage,
    UsersPage,
    FilesPage,
    ImagesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
