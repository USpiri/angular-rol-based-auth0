import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages').then((m) => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages').then((m) => m.LoginComponent),
  },
  { path: '**', redirectTo: '' },
];
