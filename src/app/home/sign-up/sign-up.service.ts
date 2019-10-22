import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000/user/exists/:username';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  checkUserNameTaken(username: string) {
    const url = this.getUrl(username);
    return this.http.get(url);
  }

  private getUrl(username: string) {
    return API_URL.replace(':username', username);
  }
}
