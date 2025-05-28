import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports:[ChildComponent],
  template: `
    <h1>Parent Component</h1>
    <child [childMessage]="parentMessage"></child>
  `
})
export class ParentComponent {
  parentMessage = "Hello from Parent!";
}