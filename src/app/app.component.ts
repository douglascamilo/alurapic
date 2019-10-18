import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alurapic';

  photos = [

  ];

  constructor(http: HttpClient) {
    console.log("Instancia do Http:");
    console.log(http);
  }
}
