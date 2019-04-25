import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { CustomValidator } from '../../shared/custom-validator';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { }
/*
  employeeForm: FormGroup;
  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl()
      })
    });
  }
*/

// This object will hold the messages to be displayed to the user
// Notice, each key in this object has the same name as the
// corresponding form control
formErrors = {
  'fullName': '',
  'email': '',
  'confirmEmail': '',
  'emailGroup': '',
  'phone' : '',
  'skillName': '',
  'experienceInYears': '',
  'proficiency': ''
};

// This object contains all the validation messages for this form
validationMessages = {
  'fullName': {
    'required': 'Full Name is required.',
    'minlength': 'Full Name must be greater than 2 characters.',
    'maxlength': 'Full Name must be less than 10 characters.'
  },
  'email': {
    'required': 'Email is required.',
    'emailDomain': 'Email domian should be dell.com'
  },

  'confirmEmail': {
    'required': 'Confirm Email is required.'
  },
   'emailGroup': {
    'emailMismatch': 'Email and Confirm Email do not match.'
  },
  'phone': {
    'required': 'Phone no is required.'
  },
  'skillName': {
    'required': 'Skill Name is required.',
  },
  'experienceInYears': {
    'required': 'Experience is required.',
  },
  'proficiency': {
    'required': 'Proficiency is required.',
  },
};

ngOnInit() {
 // Modify the code to include required validators on
  // all form controls
  this.employeeForm = this.fb.group({
    fullName: ['', [Validators.required,
    Validators.minLength(2), Validators.maxLength(10)]],
    contactPreference: ['email'],
   // email: ['', [Validators.required, CustomValidator.emailDomain('dell.com')]],
   emailGroup: this.fb.group({
    email: ['', [Validators.required, CustomValidator.emailDomain('dell.com')]],
    confirmEmail: ['', [Validators.required], { validator: matchEmails }]
   }),
    phone: ['', Validators.required],
    skills: this.fb.group({
      skillName: ['', Validators.required],
      experienceInYears: ['', Validators.required],
      proficiency: ['', Validators.required]
    }),
  });

  // When any of the form control value in employee form changes
  // our validation function logValidationErrors() is called
  this.employeeForm.valueChanges.subscribe((data) => {
    this.logValidationErrors(this.employeeForm);
  });

  this.employeeForm.get('contactPreference')
                 .valueChanges.subscribe((data: string) => {
  this.onContactPrefernceChange(data);
});

}

// If the Selected Radio Button value is "phone", then add the
// required validator function otherwise remove it
onContactPrefernceChange(selectedValue: string) {
  const phoneFormControl = this.employeeForm.get('phone');
  if (selectedValue === 'phone') {
    phoneFormControl.setValidators(Validators.required);
  } else {
    phoneFormControl.clearValidators();
  }
  phoneFormControl.updateValueAndValidity();
}


logValidationErrors(group: FormGroup): void {
  // Loop through each control key in the FormGroup
  Object.keys(group.controls).forEach((key: string) => {
    // Get the control. The control can be a nested form group
    const abstractControl = group.get(key);
    // If the control is nested form group, recursively call
    // this same method
    if (abstractControl instanceof FormGroup) {
      this.logValidationErrors(abstractControl);
      // If the control is a FormControl
    } else {
      // Clear the existing validation errors
      this.formErrors[key] = '';
      if (abstractControl && !abstractControl.valid &&
        (abstractControl.touched || abstractControl.dirty)) {
        // Get all the validation messages of the form control
        // that has failed the validation
        const messages = this.validationMessages[key];
        // Find which validation has failed. For example required,
        // minlength or maxlength. Store that error message in the
        // formErrors object. The UI will bind to this object to
        // display the validation errors
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }
    }
  });
}


  onLoadDataClick(): void {
/*
    //set the default values
    this.employeeForm.setValue({
      fullName: 'Pragim Technologies',
      email: 'pragim@pragimtech.com',
      skills: {
        skillName: 'C#',
        experienceInYears: 5,
        proficiency: 'beginner'
      }
    });
*/
this.logValidationErrors(this.employeeForm);
console.log(this.formErrors);
  }


  onSubmit(): void {
    console.log(this.employeeForm.value);
  }


}

// Nested form group (emailGroup) is passed as a parameter. Retrieve email and
// confirmEmail form controls. If the values are equal return null to indicate
// validation passed otherwise an object with emailMismatch key. Please note we
// used this same key in the validationMessages object against emailGroup
// property to store the corresponding validation error message
function matchEmails(group: AbstractControl): { [key: string]: any } | null {
  const emailControl = group.get('email');
  const confirmEmailControl = group.get('confirmEmail');

  if (emailControl.value === confirmEmailControl.value || confirmEmailControl.pristine) {
    return null;
  } else {
    return { 'emailMismatch': true };
  }
}

/*
//we can do it for custom validator for reusabiliyt
function emailDomain(domainName: string) {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const email: string = control.value;
    const domain = email.substring(email.lastIndexOf('@') + 1);
    if (email === '' || domain.toLowerCase() === domainName.toLowerCase()) {
      return null;
    } else {
      return { 'emailDomain': true };
    }
  };
}

*/
