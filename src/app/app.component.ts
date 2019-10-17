import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alurapic';

  photos = [
    {
      url: 'https://cdn.pixabay.com/photo/2019/07/28/16/23/nissan-4368962_960_720.jpg',
      description: 'Carro Esportivo'
    },
    {
      url: 'https://cdn.pixabay.com/photo/2019/09/22/16/20/location-4496459_960_720.png',
      description: 'Location'
    },
  ];
}
