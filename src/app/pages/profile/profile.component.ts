import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkBtnComponent } from '@shared/components/link-btn/link-btn.component';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  standalone: true,
  imports: [CommonModule, LinkBtnComponent, ButtonComponent],
  template: `
    <section class="max-w-lg w-full flex flex-col gap-8 px-3 sm:px-0">
      <h1 class="text-center text-4xl">¡Bienvenido {{ name }}!</h1>
      <p>Aqui se mostrarán algunos datos de tu perfil obtenidos con auth0.</p>
      <article class="border border-neutral-500 rounded-md p-3 flex gap-3">
        <img
          src="https://picsum.photos/200/300"
          alt="User image"
          class="h-28 w-28 rounded-sm"
        />
        <div>
          <h2 class="text-2xl font-semibold">User name</h2>
          <p class="text-neutral-400">email&#64;user.com</p>
        </div>
      </article>
      <div class="flex gap-2 flex-col">
        <app-link-btn class="text-center" routerLink="/">Home</app-link-btn>
        <app-link-btn class="text-center" routerLink="/admin"
          >Admin panel</app-link-btn
        >
        <app-button>Cerrar sesión</app-button>
        <p>
          <strong>Nota:</strong> Esta es un proyecto de prueba para poder
          manejar roles con Auth0.
        </p>
      </div>
    </section>
  `,
  styles: `
  :host{
    @apply flex items-center justify-center flex-col mt-28;
  }
  `,
})
export class ProfileComponent {
  name = 'ADMIN';
}
