/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'auth_token';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  public user$ = this.me();

  constructor(private http: HttpClient) {}

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(`${environment.apiBaseUrl}/auth/login`, { email, password }).pipe(
      tap(res => {
        localStorage.setItem(this.tokenKey, res.token);
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  register(formValue: { name: string; email: string; password: string }): Observable<any> {
  return this.http.post<{ token: string, user: any }>(
    `${environment.apiBaseUrl}/auth/register`,
    {
      name: formValue.name,
      email: formValue.email,
      password: formValue.password
    }
  ).pipe(
    tap(res => {
      localStorage.setItem(this.tokenKey, res.token);
      this.isAuthenticatedSubject.next(true);
    })
  );
}


  me(): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/auth/me`);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticatedSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface UserDto {
  id: string;
  name: string;
  email: string;
  // ajoute ici les champs exacts que ton API renvoie pour un user
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'auth_token';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  // ✅ LOGIN : renvoie { token, user }
  login(email: string, password: string): Observable<{ token: string; user: UserDto }> {
    return this.http.post<{ token: string; user: UserDto }>(
      `${environment.apiBaseUrl}/auth/login`,
      { email, password }
    ).pipe(
      tap(res => {
        localStorage.setItem(this.tokenKey, res.token);
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  // ✅ REGISTER : renvoie { token, user }
  register(formValue: { name: string; email: string; password: string }): Observable<{ token: string; user: UserDto }> {
    return this.http.post<{ token: string; user: UserDto }>(
      `${environment.apiBaseUrl}/auth/register`,
      {
        name: formValue.name,
        email: formValue.email,
        password: formValue.password
      }
    ).pipe(
      tap(res => {
        localStorage.setItem(this.tokenKey, res.token);
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  // ✅ ME : renvoie { user }
  me(): Observable<{ user: UserDto }> {
    return this.http.get<{ user: UserDto }>(`${environment.apiBaseUrl}/auth/me`);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticatedSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
