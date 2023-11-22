import { User as AuthUser } from '@auth0/auth0-angular';

/**
 * Agrega el campo "role" a la clase User de auth0
 */
export interface User extends AuthUser {
  role?: 'ADMIN' | 'USER';
}
