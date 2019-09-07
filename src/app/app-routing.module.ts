import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "groups",
    loadChildren: "./features/groups/groups.module#GroupsModule"
  },
  {
    path: "groups",
    loadChildren: "./features/groups/messages.module#MessagesModule"
  },
  {
    path: "vidoeCalls",
    loadChildren: "./features/groups/video-calls.module#VideoCallsModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
