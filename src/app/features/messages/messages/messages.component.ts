import { Component, OnInit } from '@angular/core';
import { chatOption } from 'src/app/models/chatOptions';

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"]
})
export class MessagesComponent implements OnInit {
  chatOption = chatOption;

  constructor() {}

  ngOnInit() {}

  togleOption(element: Element) {
    element.classList.toggle(`show`);
  }
}
