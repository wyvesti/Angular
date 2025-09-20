import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated$.pipe(
      take(1),
      map(isAuth => {
        if (!isAuth) {
          this.router.navigate(['/auth'], { queryParams: { returnUrl: state.url } });
          return false;
        }
        return true;
      })
    );
  }
}

