import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance-user',
  template: `
    <h3>Advance User</h3>
    <p>Using routerLink in nesting way with absolute direction: <a [routerLink]="['/au']">Admin User</a></p>
    <p>Using routerLink in nesting way with relative direction: <a [routerLink]="['../']">Normal User</a></p>
  `
})
export class AdvanceUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
