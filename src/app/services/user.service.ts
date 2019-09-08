import { Injectable } from '@angular/core';

import { IUser } from '../models/user';

@Injectable({
  providedIn: "root"
})
export class UserService {
  private readonly DEFAULT_USERS: IUser[] = [
    {
      name: "Superman",
      imgUrl: "/assets/images/superman.jpg",
      quotes: "Why do we fall, sir? So that we can learn to pick ourselves up",
      chatHistory: [
        {
          message:
            "There is a superhero in all of us, we just need the courage to put on the cape.",
          date: new Date()
        }
      ]
    },
    {
      name: "Wonder Woman",
      imgUrl: "/assets/images/wonder_woman.jpg",
      quotes: "Some quotes goes here....",
      chatHistory: [
        {
          message:
            "Its unfortunate that I can't speak to you...but hey, I'm a very good listener. You can tell me anything and no one will know about it. I promise.",
          date: new Date()
        }
      ]
    },
    {
      name: "Flash",
      imgUrl: "/assets/images/Flash.jpg",
      quotes: "Some quotes goes here....",
      chatHistory: [
        {
          message:
            "Hello there....Geenral Kanobi. There is untouched timeline.....",
          date: new Date()
        }
      ]
    }
  ];

  constructor() {}

  getUserList() {
    return this.DEFAULT_USERS;
  }
}
