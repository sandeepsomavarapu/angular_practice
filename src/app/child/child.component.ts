import { Component, Input } from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <p>Child Component: {{ childMessage }}</p>
  `
})
export class ChildComponent {
  @Input() childMessage: string;
}
