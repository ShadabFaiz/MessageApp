import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {
    path: "",
    component: MessagesComponent
  }
];
@NgModule({
  declarations: [MessagesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MessagesModule {}
