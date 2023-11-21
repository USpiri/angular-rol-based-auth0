import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LogoutIconComponent } from '../logout-icon/logout-icon.component';
import { IconBtnComponent } from '../icon-btn/icon-btn.component';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, LogoutIconComponent, IconBtnComponent],
  template: `
    <nav
      class="h-16 py-3 sm:py-0 shadow-sm shadow-neutral-700 w-full px-5 sm:px-8 text-neutral-400 flex items-center z-10 bg-neutral-900 justify-between"
    >
      <a routerLink="/" class="block text-center text-xl font-bold"
        >Roles con Auth0</a
      >
      <section class="flex items-center gap-5">
        <div><strong>Rol: </strong>ADMIN</div>
        <app-icon-btn (btnClick)="logout()" title="Logout button">
          <app-logout-icon class="fill-neutral-400"></app-logout-icon>
        </app-icon-btn>
      </section>
    </nav>
  `,
})
export class NavbarComponent {
  auth = inject(AuthService);
  logout() {
    this.auth.logout();
  }
}
