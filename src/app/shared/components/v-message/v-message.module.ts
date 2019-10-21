import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VMessageComponent } from './v-message.component';

@NgModule({
  declarations: [VMessageComponent],
  imports: [
    CommonModule
  ],
  exports: [VMessageComponent]
})
export class VMessageModule { }
