import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normal-user',
  template: `
    <h3>Normal User</h3>
    <button (click)="onNavigate()">Router Navigate</button>
    <input type="text" #id (input)="0"/>
    <a [routerLink]="['/au',id.value]">Admin User</a>
  `
})
export class NormalUserComponent {

  constructor(private router: Router) { }

  onNavigate() {
    this.router.navigate(['/au/fromButton']);
  }
}
