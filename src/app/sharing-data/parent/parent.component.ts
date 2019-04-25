import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  employees: any[];
  helloName: string;
  parentCount = 0;
    // This property keeps track of which radio button is selected
    // We have set the default value to All, so all the employees
    // are displayed in the table by default
    selectedEmployeeCountRadioButton = 'All';
  constructor() {
    this.helloName = 'sharing the data from parent to chid';
    this.employees = [
      { code: 'emp101', Name: 'Suresh', gender: 'Male',salary:55000,experience:'true'},
       { code: 'emp102', Name: 'Ramesh', gender: 'Male',salary:32000,experience:'false'},
        { code: 'emp103', Name: 'Krishna', gender: 'Male',salary:45000,experience:'true'},
         { code: 'emp104', Name: 'Mansiha', gender: 'Female',salary:53000,experience:'true'},
        { code: 'emp105', Name: 'Indhu',  gender: 'Female',salary:50000,experience:'true'}
    ];
  }

  ngOnInit() {
  }

  getTotalEmployeesCount(): number {
    return this.employees.length;
}

getMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === 'Male').length;
}

getFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === 'Female').length;
}

// Depending on which radio button is selected, this method updates
// selectedEmployeeCountRadioButton property declared above
// This method is called when the child component (EmployeeCountComponent)
// raises the custom event - countRadioButtonSelectionChanged
// The event binding is specified in employeeList.component.html
onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
}

ngOnChange(val: number) {
  this.parentCount = val;
}

}
