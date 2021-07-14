import { Component } from '@angular/core';
import { Friend } from "./friend";
import { AddFriendService } from "./add-friend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-friendlist';

  // this array gets used in the select options dropdown in app.component.html
  languages = [{name: "HTML"}, {name: "CSS"}, {name: "JavaScript"}, {name: "PHP"}]

  // instantiate a new friendModel object using the Friend class defined in friend.ts
  friendModel = new Friend( "", "", "", "", "");


  constructor(private addFriendService: AddFriendService) {
  }

  submitDetails() {
    console.log(this.friendModel);
    let observable = this.addFriendService.addFriend(this.friendModel);
    observable.subscribe(
      data => console.log("it worked"),
      error => console.log("it didn't work"))
  }
}
