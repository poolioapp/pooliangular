import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
    /*return this.store.select(fromAuth.selectIsLoggedIn).pipe(
      map(isLoggedIn => {
        if (!isLoggedIn) {
          // TODO: Have NGRX store the state.url for further redirection post-login
          this.store.dispatch(new NotLoggedIn(state.url));
          return false;
        }
        return true;
      }),
    );*/
  }
}
