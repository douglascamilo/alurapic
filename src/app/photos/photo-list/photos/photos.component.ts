import { Component, Input, OnInit } from '@angular/core';

import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnInit() {
    this.rows = this.groupColumns();
  }

  private groupColumns() {
    const newRows = [];

    for (let index = 0; index < this.photos; index += 3) {
      newRows.push(this.photos.slice(index, index + 3));
    }

    return newRows;
  }
}
