import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "groups",
    loadChildren: "./features/groups/groups.module#GroupsModule"
  },
  {
    path: "messages",
    loadChildren: "./features/messages/messages.module#MessagesModule"
  },
  {
    path: "videoCalls",
    loadChildren: "./features/video-calls/video-calls.module#VideoCallsModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
