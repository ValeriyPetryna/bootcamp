import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenData, UserData, UserLogin } from '../../shared/interfaces/user.interface';

@Injectable()
export class AuthService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  private token: string | null;
  public isAuthorized: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  public userData: BehaviorSubject<TokenData | null> = new BehaviorSubject<TokenData | null>(null);

  constructor(public http: HttpClient) {
    this.token = localStorage.getItem('access_token');
    this.isAuthorized.next(!!this.token);
    this.userData.next(this.getUserData(this.token));
  }

  // todo: add http headers
  public login(user: UserLogin): Observable<UserData> {
    return this.http.post<UserData>(`${environment.apiURL}/auth/signin`, user).pipe(tap((res) => this.setToken(res)));
  }

  public signUp(user: UserLogin): Observable<UserData> {
    return this.http.post<UserData>(`${environment.apiURL}/auth/signup`, user);
  }

  // TOKEN actions
  get getToken(): string | null {
    return this.token;
  }

  public logout(): void {
    localStorage.removeItem('access_token');

    this.token = null;
    this.isAuthorized.next(false);
    this.userData.next(null);
  }

  public setToken(authResult: UserData) {
    localStorage.setItem('access_token', authResult.accessToken);

    this.token = authResult.accessToken;
    this.userData.next(this.getUserData(authResult.accessToken));
    this.isAuthorized.next(true);
  }

  public getUserData(token: string | null): TokenData | null {
    if(token) {
      return JSON.parse(atob(token.split('.')[1]));
    }
    
    return null;
  }

  public isLoggedIn(): Observable<boolean> {
    return this.isAuthorized.asObservable();
  }

  public user(): Observable<any> {
    return this.userData.asObservable();
  }
}
