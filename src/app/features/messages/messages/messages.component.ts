import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { chatOption } from 'src/app/models/chatOptions';

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"]
})
export class MessagesComponent implements OnInit {
  @ViewChild("chatBox", { static: true }) chatBox: ElementRef<any>;
  chatOption = chatOption;
  chatForm: FormGroup;

  chatHistory = [
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

  constructor(private fb: FormBuilder) {
    this.createChatForms();
  }

  ngOnInit() {}

  togleOption(element: Element) {
    element.classList.toggle(`show`);
  }

  onUserMessageSubmit(form: FormGroup) {
    this.addMessageToChatHistory(form);
    form.reset();
    this.scrollChatBoxToBottom();
  }

  addMessageToChatHistory(form: FormGroup) {
    const message = form.controls.message.value;
    this.chatHistory = [...this.chatHistory, this.createMesssageObj(message)];
  }

  private createChatForms() {
    this.chatForm = this.fb.group({
      message: ""
    });
  }

  private createMesssageObj(message: string) {
    return {
      message,
      user: "you",
      date: Date.now()
    };
  }

  private scrollChatBoxToBottom() {
    setTimeout(() => {
      this.chatBox.nativeElement.scrollTop =
        this.chatBox.nativeElement.scrollHeight + 100;
      console.log(this.chatBox.nativeElement.scrollHeight);
    }, 50);
  }
}
