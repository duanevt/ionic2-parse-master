import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as Parse from 'parse';


@Component({
  selector: 'page-security',
  templateUrl: 'security.html'
})
export class SecurityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecurityPage');

    var roleACL = new Parse.ACL();
    roleACL.setPublicReadAccess(true);
    roleACL.setWriteAccess(Parse.User.current(), true);

    var role = new Parse.Role("Admin", roleACL);
    role.save().then(()=>{
      role.getUsers().add(Parse.User.current());
      role.save().then(()=>{
        console.log("Role Created " + role.id);
      })
    })


  }

}
