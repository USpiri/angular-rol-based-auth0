import { Routes } from '@angular/router';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';
import { AuthGuard } from '@shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        title: 'Home',
        loadComponent: () => import('./pages').then((m) => m.HomeComponent),
      },
      {
        path: 'admin',
        title: 'Admin Dasboard',
        loadComponent: () => import('./pages').then((m) => m.AdminComponent),
      },
      {
        path: 'profile',
        title: 'Perfil',
        loadComponent: () => import('./pages').then((m) => m.ProfileComponent),
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./pages').then((m) => m.LoginComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
