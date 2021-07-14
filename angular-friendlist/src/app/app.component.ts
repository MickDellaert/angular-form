import { Component } from '@angular/core';
import { Friend } from "./friend";
import { AddFriendService } from "./add-friend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allFriends: any;

  title = 'angular-friendlist';

  // this array gets used in the select options dropdown in app.component.html
  languages = [{name: "HTML"}, {name: "CSS"}, {name: "JavaScript"}, {name: "PHP"}]

  // instantiate a new friendModel object using the Friend class defined in friend.ts
  friendModel = new Friend( "", "", "", "", "");


  constructor(private addFriendService: AddFriendService) {
  }

  // need to look into subscribe TODO
  submitDetails() {
    console.log(this.friendModel);
    let observable = this.addFriendService.addFriend(this.friendModel);
    observable.subscribe(
      data => console.log("it worked"),
      error => console.log("it didn't work"));

    // I added an empty then at the end to make the error 'Promise returned from getFriends is ignored' go away
    this.getFriends('http://localhost:9050/allFriends').then();
  }

  // after a lot googling I still don't quite get everything that's going on in this function,
  // I got it working with the help of Izidor's code, need to look into:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function TODO
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then TODO
  async getFriends(url:string): Promise<any> {
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    let data = await response.json();
    this.allFriends = data;

    return this.allFriends;
  }
}

// another way to write the above function:

// async getFriends(url:string): Promise<any> {
//   await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }).then(response => {
//     return response.json()
//   }).then(data => (this.allFriends = data));
// }
// }
