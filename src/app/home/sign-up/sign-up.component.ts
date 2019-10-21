import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: this.defineEmailInput(),
      fullName: this.defineFullNameInput(),
      userName: this.defineUserNameInput(),
      password: this.definePasswordInput(),
    });
  }

  private definePasswordInput() {
    return ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(14),
    ]];
  }

  private defineUserNameInput() {
    return ['', [
      Validators.required,
      Validators.pattern(/^[a-z0-9_\-]+$/),
      Validators.minLength(2),
      Validators.maxLength(30),
    ]];
  }

  private defineFullNameInput() {
    return ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(40),
    ]];
  }

  private defineEmailInput() {
    return ['', [
      Validators.required,
      Validators.email
    ]];
  }
}
