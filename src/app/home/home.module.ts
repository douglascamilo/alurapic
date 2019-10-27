import { GreetingModule } from './../tests/greeting/greeting.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { VMessageModule } from '../shared/components/v-message/v-message.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './sign-up/sign-up.service';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VMessageModule,
    RouterModule,
    HomeRoutingModule,
    GreetingModule
  ],
  providers: [ SignUpService ]
})
export class HomeModule { }
