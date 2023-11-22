import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs';

export const AuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated$.pipe(
    map((isAuthenticated) => {
      /**
       * Permite el acceso a la ruta si el usuario está
       * autenticado, de lo contrario navega a /login
       */
      if (isAuthenticated) return true;
      router.navigate(['/login']);
      return false;
    }),
  );
};
