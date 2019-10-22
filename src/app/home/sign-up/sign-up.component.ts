import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlurapicValidators } from '../../shared/validators/alurapic.validators';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: this.defineEmailInput(),
      fullName: this.defineFullNameInput(),
      userName: this.defineUserNameInput(),
      password: this.definePasswordInput(),
    });
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
