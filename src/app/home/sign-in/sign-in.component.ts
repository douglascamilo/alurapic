import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private platformDetectorService: PlatformDetectorService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
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
    this.router.navigate(['user', userName])
  }
}
