import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'registration',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required],
      dob: ['', Validators.required],
      languagesKnown: this.fb.group({
        english: [false],
        tamil: [false],
        hindi: [false],
        telugu: [false]
      }),
      gender: ['', Validators.required],
      contactNumber: ['', Validators.required],
      qualification: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password').value;
    const passwordRepeat = form.get('passwordRepeat').value;
    return password === passwordRepeat ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value.email)
      console.log('Form Submitted!', this.registrationForm.value);
    }
  }

  onReset(): void {
    this.registrationForm.reset();
  }
}
