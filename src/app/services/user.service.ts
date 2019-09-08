import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class UserService {
  private readonly DEFAULT_USERS = [
    {
      name: "Superman",
      imgUrl: "/assets/images/superman.jpg",
      quotes: "Some quotes goes here...."
    },
    {
      name: "Wonder Woman",
      imgUrl: "/assets/images/wonder_woman.jpg",
      quotes: "Some quotes goes here...."
    },
    {
      name: "Flash",
      imgUrl: "/assets/images/Flash.jpg",
      quotes: "Some quotes goes here...."
    }
  ];

  constructor() {}

  getUserList() {
    return this.DEFAULT_USERS;
  }
}
