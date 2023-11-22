import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs';
import { User } from 'src/app/models/user.interface';

export const AdminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.user$.pipe(
    map((u) => {
      const user: User = { ...u };
      if (user.role === 'ADMIN') return true;
      router.navigate(['/']);
      return false;
    }),
  );
};
