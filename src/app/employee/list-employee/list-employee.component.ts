import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  constructor() { }

  ngOnInit() {
  }

}
