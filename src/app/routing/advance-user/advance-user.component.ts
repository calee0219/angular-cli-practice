import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-advance-user',
  template: `
    <p><a [routerLink]="['/']">Back to home</a></p>
    <h3>Advance User</h3>
    <p>Come form {{id}}</p>
    <p>Using routerLink in nesting way with absolute direction: <a [routerLink]="['/au/AdminPage']">Admin User</a></p>
    <p>Using routerLink in nesting way with relative direction: <a [routerLink]="['../../nu']">Normal User</a></p>
    {{param}}
  `
})
export class AdvanceUserComponent implements OnDestroy {
  private subscription: Subscription;
  param: string;

  id: string;

  constructor(private route: ActivatedRoute) {
    this.subscription = this.route.queryParams.subscribe(
      queryParam => this.param = queryParam['query']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
