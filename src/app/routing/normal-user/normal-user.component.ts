import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normal-user',
  template: `
    <p><a [routerLink]="['/']">Back to home</a></p>
    <h3>Normal User</h3>
    <p>Router Navigate: <button (click)="onNavigate()">to Admin</button></p>
    <input type="text" #id (input)="0"/>
    
    <a [routerLink]="['/au',id.value]">Admin User</a>
    <p><a [routerLink]="['/nu']" [queryParams]="{param: 'queryP'}" [preserveQueryParams]="true">Another link with querParams</a></p>
  `
})
export class NormalUserComponent {

  constructor(private router: Router) { }

  onNavigate() {
    this.router.navigate(['/au/Button'], {queryParams: {'query': 'Param'}});
  }
}
