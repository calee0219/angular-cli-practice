import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PropertyBindingComponent } from './data-binding/property-binding.component';
import { EventBindingComponent } from './data-binding/event-binding.component';
import { NgContentComponent } from './ng-content.component';
import { TwoWayBindingComponent } from './data-binding/two-way-binding.component';
import { LifeCycleComponent } from './life-cycle.component';
import { NormalUserComponent } from './routing/normal-user/normal-user.component';
import { AdvanceUserComponent } from './routing/advance-user/advance-user.component';

import { AngularCliRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    NgContentComponent,
    TwoWayBindingComponent,
    LifeCycleComponent,
    NormalUserComponent,
    AdvanceUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularCliRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
