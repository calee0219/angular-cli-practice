import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NormalUserComponent } from './routing/normal-user/normal-user.component';
import { AdvanceUserComponent } from './routing/advance-user/advance-user.component';
import {HomeComponent} from "./home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nu', component: NormalUserComponent },
  { path: 'au/:id', component: AdvanceUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AngularCliRoutingModule { }

