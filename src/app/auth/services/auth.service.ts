import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../../shared/interfaces/user.interface';

@Injectable()
export class AuthService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public http: HttpClient) {}

  // todo: add http headers
  public login(user: UserLogin): Observable<unknown> {
    return this.http.post<unknown>(`${environment.apiURL}/auth/signin`, user).pipe(tap(this.setToken));
  }

  public signUp(user: UserLogin): Observable<unknown> {
    return this.http.post<unknown>(`${environment.apiURL}/auth/signup`, user);
  }

  // TOKEN actions
  get getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  public logout(): void {
    localStorage.removeItem('access_token');
  }

  private setToken(authResult: any) {
    localStorage.setItem('access_token', authResult.accessToken);
  }

  public isLoggedIn(): boolean {
    const authToken = this.getToken;
    return authToken !== null ? true : false;
  }

  public getUserData(): any {
    const token = this.getToken;
    if (token) {
      return JSON.parse(atob(token.split('.')[1]));
    }
  }
}
