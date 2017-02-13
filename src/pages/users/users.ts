import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as Parse from 'parse';

/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  currentUsername: string = "unknown";
  currentUser: any;
  allUsers: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');

    // var user = new Parse.User();
    // user.set("username", "dtrain");
    // user.set("password", "123");
    // user.set("email", "d@train.com");
    // user.set("gender", "male");
    // user.set("name", "D Train");
    //
    // user.signUp().then(()=>{
    //   console.log("signed up " + user);
    //
    // },(err)=>{
    //   console.error(err);
    // })

  }

  getUser() {
    this.currentUser = Parse.User.current();
    this.currentUsername = this.currentUser.get("username");
    console.log("current user is " + this.currentUsername);
  }

  logoutUser() {
    Parse.User.logOut().then(()=> {
      console.log("logged out user " + this.currentUsername);
      this.currentUsername = "noone";
    },(err)=>{
      console.error(err);
    })

  }

  loginUser() {
    //Parse.User.logIn("dtrain", "123").then((user)=> {
      Parse.User.logIn("trump", "123").then((user)=> {
      this.currentUser = user;
      this.currentUsername = user.get("username");
      console.log("logged in user " + this.currentUsername);
    },(err)=>{
      console.error(err);
    })
  }

  loginAnonUser() {

    Parse._getInstallationId().then((installationId)=>{
      console.log(typeof installationId);
      console.log(installationId);
      Parse.User._logInWith("anonymous", {authData: {id: installationId}}).then((user)=> {
        this.currentUser = user;
        this.currentUsername = user.get("username");
        console.log("logged in user " + this.currentUsername);
      },(err)=>{
        console.error(err);
      });
    }, (err)=>{
      console.error(err);
    })


  }

  getAllUsers() {
    console.log("just getting all users");
    var q = new Parse.Query("User");
    q.find().then((users)=> {
      this.allUsers = users;
      for (var i=0; i<users.length; i++) {
        console.log(users[i].get("username"));
      }
    },(err)=> {
      console.error(err);
    })
  }
}
