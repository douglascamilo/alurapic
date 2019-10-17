import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  description = 'Carro Esportivo';
  url = 'https://cdn.pixabay.com/photo/2019/07/28/16/23/nissan-4368962_960_720.jpg';

  constructor() {
  }

  ngOnInit() {
  }
}
