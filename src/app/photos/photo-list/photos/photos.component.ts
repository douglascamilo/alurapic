import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {
  @Input() photos: Photo[] = [];
  rows: Photo[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos) {
      this.rows = this.groupColumns();
    }
  }

  private groupColumns(): any[] {
    const newRows: Photo[] = [];

    for (let index = 0; index < this.photos.length; index += 3) {
      let items: Photo[] = this.photos.slice(index, index + 3);
      newRows.push(items);
    }

    return newRows;
  }
}
