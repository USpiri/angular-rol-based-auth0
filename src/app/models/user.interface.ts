import { User as AuthUser } from '@auth0/auth0-angular';

export interface User extends AuthUser {
  role?: 'ADMIN' | 'USER';
}
