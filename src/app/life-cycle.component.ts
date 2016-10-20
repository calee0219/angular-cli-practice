import { Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  template: '<p>life-cycle Works!</p>'
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() { this.log('ngOnInit') }
  ngOnChanges() { this.log('ngOnChanges') }
  ngDoCheck() { this.log('ngDoCheck') }
  ngAfterContentInit() { this.log('ngAfterContentInit') }
  ngAfterContentChecked() { this.log('ngAfterContentChecked') }
  ngAfterViewChecked() { this.log('ngAfterViewChecked') }
  ngOnDestroy() { this.log('ngOnDestory')}

  private log(hook: string) {
    console.log(hook);
  }

}
