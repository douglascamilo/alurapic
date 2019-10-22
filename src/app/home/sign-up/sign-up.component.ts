import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlurapicValidators } from '../../shared/validators/alurapic.validators';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: this.defineEmailInput(),
      fullName: this.defineFullNameInput(),
      userName: this.defineUserNameInput(),
      password: this.definePasswordInput(),
    });
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService
      .signup(newUser)
      .subscribe(
        () => this.router.navigate(['']),
        error => console.log(error)
      );
  }

  private definePasswordInput() {
    const defaultValue = '';
    const validators = [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(14),
    ];

    return [defaultValue, validators];
  }

  private defineUserNameInput() {
    const defaultValue = '';
    const validators = [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      AlurapicValidators.lowercase
    ];
    const asyncValidators = [
      this.userNotTakenValidatorService.checkUserNameTaken()
    ];

    return [defaultValue, validators, asyncValidators];
  }

  private defineFullNameInput() {
    const defaultValue = '';
    const validators = [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(40),
    ];

    return [defaultValue, validators];
  }

  private defineEmailInput() {
    const defaultValue = '';
    const validators = [
      Validators.required,
      Validators.email
    ];

    return [defaultValue, validators];
  }
}
