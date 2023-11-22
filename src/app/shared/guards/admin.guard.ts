import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs';
import { User } from 'src/app/models/user.interface';

export const AdminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  return authService.user$.pipe(
    map((u) => {
      const user: User = { ...u };
      /**
       * Permite el acceso a la ruta si el rol del usuario
       * es ADMIN, de lo contrario niega la navegación
       */
      if (user.role === 'ADMIN') return true;
      return false;
    }),
  );
};
