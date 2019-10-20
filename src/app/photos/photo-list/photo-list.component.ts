import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter: string = '';
  hasMore = true;
  currentPage = 1;
  userName = '';

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photosResponse => {
        this.clearFilter();
        this.updatePhotos(photosResponse);
      })
  }

  private updatePhotos(photosResponse) {
    this.photos = this.photos.concat(photosResponse);
    this.hasMore = photosResponse.length > 0;
  }

  private clearFilter() {
    this.filter = '';
  }
}
