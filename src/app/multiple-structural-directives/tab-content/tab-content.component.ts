import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-content',
  template: `
  <div class="door">
  <ng-content></ng-content>
</div>
`,
styles: [`
    :host {
      border: 1px solid #ddd;
      border-top: 0;
      margin-bottom: 2rem;
      display: block;
      padding: 8px;
    }
  `]
})
export class TabContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
