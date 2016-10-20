import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  template: `
    <article>
      <ng-content></ng-content>
      <p>this is in app-ng-content file</p>
      red and blue are both write in app-ng-content file
    </article>
  `,
  styles: [`
    article{color: blue;}
    p{color: red;}
    }
  `]
})
export class NgContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
