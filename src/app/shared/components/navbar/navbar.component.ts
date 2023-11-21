import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LogoutIconComponent } from '../logout-icon/logout-icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, LogoutIconComponent],
  template: `
    <nav
      class="h-16 py-3 sm:py-0 shadow-sm shadow-neutral-700 w-full px-5 sm:px-8 text-neutral-400 flex items-center z-10 bg-neutral-900 justify-between"
    >
      <a routerLink="/" class="block text-center text-xl font-bold"
        >Roles con Auth0</a
      >
      <section class="flex items-center gap-5">
        <div><strong>Rol: </strong>ADMIN</div>
        <button
          class="h-9 w-9 p-1.5 bg-neutral-800 hover:bg-neutral-700 transition-all rounded-md active:bg-neutral-800 active:scale-95 duration-100"
        >
          <app-logout-icon class="fill-neutral-400"></app-logout-icon>
        </button>
      </section>
    </nav>
  `,
})
export class NavbarComponent {}
