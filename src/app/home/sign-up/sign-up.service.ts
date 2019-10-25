import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';

const API_URL = 'http://localhost:3000';

@Injectable()
export class SignUpService {

  constructor(private http: HttpClient) { }

  checkUserNameTaken(username: string) {
    const url = `${API_URL}/user/exists/${username}`;
    return this.http.get(url);
  }

  signup(newUser: NewUser) {
    const url = `${API_URL}/user/signup`;
    return this.http.post(url, newUser);
  }
}
