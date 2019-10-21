import { Injectable } from '@angular/core';

const AUTH_TOKEN_KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  hasToken() {
    return !!this.getToken();
  }

  setToken(token: string) {
    window.localStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  getToken(): string {
    return window.localStorage.getItem(AUTH_TOKEN_KEY);
  }

  removeToken() {
    window.localStorage.removeItem(AUTH_TOKEN_KEY);
  }
}
