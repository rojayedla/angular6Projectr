import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [
    {name: 'jhon', id: 'us123'},
    {name: 'peter', id: 'us234'}
    // {name: 'judy, }
  ];
  constructor() { }

  ngOnInit() {
  }

}
