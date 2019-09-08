import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { chatOption } from 'src/app/models/chatOptions';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"]
})
export class MessagesComponent implements OnInit {
  @ViewChild("chatBox", { static: true }) chatBox: ElementRef<any>;
  chatOption = chatOption;
  chatForm: FormGroup;

  chatHistory = [];
  users: { name: string; imgUrl: string; quotes: string; chatHistory: {}[] }[];

  constructor(
    private fb: FormBuilder,
    private chatService: ChatService,
    private userService: UserService
  ) {
    this.createChatForms();
  }

  ngOnInit() {
    this.fetchUserList();
    this.fetchChatHistory();
  }

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

  private fetchChatHistory() {
    this.chatHistory = [...this.chatService.getChatHistory()];
  }

  private fetchUserList() {
    this.users = this.userService.getUserList();
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
      this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
    }, 50);
  }
}
