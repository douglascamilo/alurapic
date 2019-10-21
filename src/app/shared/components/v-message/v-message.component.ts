import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-message',
  templateUrl: './v-message.component.html',
  styleUrls: ['./v-message.component.css']
})
export class VMessageComponent {
  @Input() message = '';

  constructor() { }
}
