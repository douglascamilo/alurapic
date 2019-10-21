import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { TokenService } from '../token/token.service';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(null);
  private userName = '';

  constructor(private tokenService: TokenService) {
    this.init();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged(): boolean {
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.userName;
  }

  private init() {
    if (this.tokenService.hasToken()) {
      this.decodeAndNotify();
    }
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }
}
