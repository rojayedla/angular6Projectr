import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling',
  template: `
    <p>
     <app-todo></app-todo>
     <app-dashboard></app-dashboard>
    </p>
  `,
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
