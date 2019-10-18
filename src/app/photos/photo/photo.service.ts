import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {
  }

  listFromUser(userName: string) {
    return this.http
      .get<Photo[]>('http://localhost:3000/flavio/photos');
  }
}
