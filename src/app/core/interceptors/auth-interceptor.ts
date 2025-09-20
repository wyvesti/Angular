/* import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let clonedReq = req;

    // Ajouter Bearer token uniquement si l'URL commence par apiBaseUrl
    if (req.url.startsWith(environment.apiBaseUrl)) {
      const token = this.authService.getToken();
      if (token) {
        clonedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }

    return next.handle(clonedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Rediriger vers login avec message
          this.router.navigate(['/auth'], { queryParams: { sessionExpired: true } });
        }
        return throwError(() => error);
      })
    );
  }
} */

  // src/app/core/interceptors/auth.interceptor.ts
/* import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.auth.getToken();
    if (!token) {
      return next.handle(req);
    }
    const cloned = req.clone({
      setHeaders: {
        Authorization: `bearer ${token}`
      }
    });
    return next.handle(cloned);
  }
}
 */
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly apiBaseUrl = 'https://node-eemi.vercel.app/api';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // On ne modifie que les requêtes qui vont vers ton API
    if (req.url.startsWith(this.apiBaseUrl)) {
      const token = localStorage.getItem('auth_token');

      if (token) {
        const cloned = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        return next.handle(cloned);
      }
    }

    // Si pas d’API ou pas de token → requête inchangée
    return next.handle(req);
  }
}

