import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from '../../models/teacher';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
//   @Input() teacher: Teacher;
// @Input() principleName: string;
  constructor() { }

  ngOnInit() {
  }

}
