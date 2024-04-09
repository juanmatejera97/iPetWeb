import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router: Router = inject(Router);
  return loginService.isLoggedIn() || router.createUrlTree(['login']);
};
