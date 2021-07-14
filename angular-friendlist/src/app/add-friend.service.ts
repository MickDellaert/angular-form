import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Friend } from "./friend";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  url: string = "http://localhost:9050/allFriends";

  constructor(private http: HttpClient) {
  }

  addFriend(friend: Friend){
    // got stuck here because return was on a seperate line making the post request below it unreachable
    return this.http.post(this.url, friend)
  }
}
