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
          <p class="font-semibold">ADMIN</p>
        </div>
      </article>
      <div>
        <h3 class="text-xl mb-2">User JSON</h3>
        <pre
          class="w-full overflow-auto bg-neutral-800/50 py-3 px-4 rounded-md"
        ><code>{{ this.user | json }}</code></pre>
      </div>
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
    @apply flex items-center justify-center flex-col py-28;
  }
  `,
})
export class ProfileComponent {
  name = 'ADMIN';
  user = {
    role: 'USER',
    nickname: 'user',
    name: 'user@email.com',
    picture:
      'https://s.gravatar.com/avatar/b58c6f14d292556214bd64909bcdb118?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fus.png',
    updated_at: '2023-11-22T03:05:01.775Z',
    email: 'user@email.com',
    email_verified: false,
    sub: 'auth0|655d46c117b4bdb5010ed4db',
  };
}
