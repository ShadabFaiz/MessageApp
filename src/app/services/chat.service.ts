import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class ChatService {
  private readonly DEFAULT_CHAT_HISTORY = [
    {
      user: "you",
      message: "Hellooooo there... General Kanobi",
      date: Date.now()
    },
    {
      user: "you",
      message: "Hellooooo there... General Kanobi",
      date: Date.now()
    },
    {
      user: "you",
      message: "Hellooooo there... General Kanobi",
      date: Date.now()
    }
  ];

  constructor() {}

  getChatHistory() {
    return this.DEFAULT_CHAT_HISTORY;
  }
}
