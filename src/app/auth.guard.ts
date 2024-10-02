// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userJson = localStorage.getItem('currentUser');
    if (userJson) {
      const user = JSON.parse(userJson);
      if (user && user.role === 2) {
        return true;
      }
    }

    // If the user is not logged in or is not an admin, redirect to the login page or a restricted page.
    this.router.navigate(['/home']); // Change '/login' to your desired URL.
    return false;
  }
}
