import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.sass']
})
export class DataBindingComponent {
	//dataBindingString = 'Data binding fot text';
	//dataBindingNum = 10;
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
