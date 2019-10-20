import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Photo } from './photo';

const URL_PHOTOS = 'http://localhost:3000/:userName/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {
  }

  listFromUser(userName: string): Observable<Photo[]> {
    const url = this.getUrlPhotos(userName);

    return this.http
      .get<Photo[]>(url);
  }

  listFromUserPaginated(userName: string, page: number): Observable<Photo[]> {
    const url = this.getUrlPhotos(userName);
    const params = new HttpParams().append('page', page.toString());

    return this.http
      .get<Photo[]>(url, {
        params: params
      })
  }

  private getUrlPhotos(userName: string) {
    return URL_PHOTOS.replace(':userName', userName);
  }
}
