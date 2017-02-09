import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as Parse from 'parse';

/*
  Generated class for the Database page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-database',
  templateUrl: 'database.html'
})
export class DatabasePage {
  dvt: string;
  myOrders: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatabasePage');
    this.dvt = "Oi DvT";
  //   var Order = Parse.Object.extend("Order");
  // var order = new Order();
  // order.set("order_id", "OI_1234");
  // order.set("amount", 112.3);
  // order.set("date", new Date('2016-02-01'));
  // order.save(null, {
  // 	success: function success(obj) {
  // 	  console.log("Order created with id " + obj.id);
  //
  //     // 2)
  //
  // 		var Item = Parse.Object.extend("Item");
  // 		var items = [
  // 			{"item_id": 1, "name": "hat", "cost": 12.3, "order": order},
  // 			{"item_id": 2, "name": "shoes", "cost": 50, "order": order},
  // 			{"item_id": 3, "name": "gloves", "cost": 50, "order": order},
  // 		];
  // 		for (var i = 0; i < items.length; i++) {
  //       var item = new Item();
  // 			item.save(items[i], {
  // 				success: function success(obj) {
  //       	  console.log("Item created with id " + obj.id);
  // 				}
  // 			});
  // 		}
  // 	}
  // });
  }

  getAll() {
    console.log("get all for table ???");
    var q = new Parse.Query("Order");
    q.find().then((orders)=> {
      console.log(orders);
      this.myOrders = orders
    }, function(err) {
      console.log(err);
    })
  }

  orderSelected(order) {
    console.log("Order is " + order.id);
    var q = new Parse.Query("Item");
    // q.equalTo("item_id", 2);
    // q.find().then((item)=>{
    //   console.log("item is " + item);
    // },(err)=>{
    //   console.log(err);
    // });

    q.equalTo("order", order);
    q.find().then((items)=>{
      console.log("item is " + items);
      for (var i=0; i < items.length; i++) {
        console.log(items[i]);
        console.log(items[i].get("name"));
      }
    },(err)=>{
      console.log(err);
    });
  }

}
