import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { TokenService } from '../token/token.service';

const URL = 'http://localhost:3000/user/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService) { }

  authenticate(userName: string, password: string) {
    return this.http
      .post(
        URL,
        {
          userName: userName,
          password: password
        },
        { observe: 'response'})
      .pipe(tap(response => {
        const authToken = response.headers.get('x-access-token');
        this.tokenService.setToken(authToken)
      }));
  }
}
