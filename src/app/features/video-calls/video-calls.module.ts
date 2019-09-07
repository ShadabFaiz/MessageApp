import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoCallComponent } from './video-call/video-call.component';

const routes: Routes = [
  {
    path: "",
    component: VideoCallComponent
  }
];

@NgModule({
  declarations: [VideoCallComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class VideoCallsModule {}
