import { Component } from '@angular/core';

import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding.component';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.sass'],
  directive: [PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent]
})
export class DataBindingComponent {
	dataBindingString = 'Data binding fot text';
	dataBindingNum = 10;
	dataBindingPropertyValue = 'this is property binding';

	ngClassPB() {
		return true;
	}
	ngStylePB() {
		return 'green';
	}
	onClicked(value: string) {
    alert(value);
  }

  constructor() { }

}
