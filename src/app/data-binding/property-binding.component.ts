import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    {{result}}
  `,
  input: ['result']
})
export class PropertyBindingComponent {

  @Input() result: number = 0;

  constructor() { }

}
