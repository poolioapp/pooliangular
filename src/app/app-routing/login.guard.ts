import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.router.navigate(['']);
    return false;
    /*return this.store.select(fromAuth.selectIsLoggedIn).pipe(
      // TODO: replace of(null) with an NGRX store call, store login data in the store
      map(isLoggedIn => {
        if (isLoggedIn) {
          // Redirect
          this.router.navigate(['/dashboard']); // TODO: discuss posibility of a "favoured game" per-user to redirect to on login
          return false;
        }
        return true;
      }),
    );*/
  }
}
