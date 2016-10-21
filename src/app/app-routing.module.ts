import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NormalUserComponent } from './routing/normal-user/normal-user.component';
import { AdvanceUserComponent } from './routing/advance-user/advance-user.component';

const routes: Routes = [
  { path: '', component: NormalUserComponent },
  { path: 'au/:id', component: AdvanceUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AngularCliRoutingModule { }

