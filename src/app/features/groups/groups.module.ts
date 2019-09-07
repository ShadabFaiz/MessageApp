import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupComponent } from './group/group.component';

const routes: Routes = [
  {
    path: "",
    component: GroupComponent
  }
];

@NgModule({
  declarations: [GroupComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class GroupsModule {}
