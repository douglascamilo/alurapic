import { GreetingInstanceService } from './greeting-instance.service';
import { Hello2 } from './hello2';
import { Hello1 } from './hello1';
import { GREETING_TOKEN } from './greeting';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GreetingInstanceService,
    { provide: GREETING_TOKEN, useClass: Hello1, multi: true },
    { provide: GREETING_TOKEN, useClass: Hello2, multi: true },
  ]
})
export class GreetingModule { }
