import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { chatOption } from 'src/app/models/chatOptions';
import { IUser } from 'src/app/models/user';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"]
})
export class MessagesComponent implements OnInit {
  @ViewChild("chatBox", { static: false }) chatBox: ElementRef<any>;
  chatOption = chatOption;
  chatForm: FormGroup;

  chatHistory = [];
  users: IUser[];
  currentUserInChat: IUser;

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

  showChatof(user: IUser) {
    this.currentUserInChat = user;
    this.resetChatHistory();
    this.updateChatHistory(user.chatHistory || []);
  }

  onUserMessageSubmit(form: FormGroup) {
    const message = form.controls.message.value.trim();
    if (message) {
      this.addMessageToChatHistory(message);
    }
    form.reset();
    this.scrollChatBoxToBottom();
  }

  addMessageToChatHistory(message: string) {
    this.chatHistory = [...this.chatHistory, this.createMesssageObj(message)];
  }

  private updateChatHistory(newChat: any[]) {
    this.chatHistory = [...this.chatHistory, ...newChat];
  }

  private resetChatHistory() {
    this.chatHistory = [];
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
      date: new Date()
    };
  }

  private scrollChatBoxToBottom() {
    setTimeout(() => {
      this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
    }, 50);
  }
}
