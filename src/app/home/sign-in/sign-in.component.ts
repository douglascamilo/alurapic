import { GreetingTypeEnum } from '../../tests/greeting/greeting-type-enum.enum';
import { GreetingInstanceService } from '../../tests/greeting/greeting-instance.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  @ViewChild('userNameInput', {static: true}) userNameInput: ElementRef<HTMLInputElement>;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private greetingsInstance: GreetingInstanceService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.setFocusOnUserNameInput();

    this.testGreetings();
  }
  testGreetings() {
    const hello1 = this.greetingsInstance.getBy(GreetingTypeEnum.HELLO_1).sayHello();
    const hello2 = this.greetingsInstance.getBy(GreetingTypeEnum.HELLO_2).sayHello();

    console.log(`Greeting 1: ${hello1}`);
    console.log(`Greeting 2: ${hello2}`);
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => this.navigateToHome(userName),
        error => this.handleLoginFailed(error)
      );
  }

  private handleLoginFailed(error) {
    console.log(error);
    this.loginForm.reset();
    this.setFocusOnUserNameInput();
  }

  private setFocusOnUserNameInput() {
    if (this.platformDetectorService.isPlatformBrowse()) {
      this.userNameInput.nativeElement.focus();
    }
  }

  private navigateToHome(userName: string) {
    this.router.navigate(['user', userName]);
  }
}
