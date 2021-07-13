import { Component } from '@angular/core';
import { Friend } from "./friend";

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
}
