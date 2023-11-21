import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="max-w-lg w-full flex flex-col gap-8 px-3 sm:px-0">
      <h1 class="text-center text-4xl">¡Bienvenido {{ name }}!</h1>
      <p>Aqui se mostrarán algunos datos de tu perfil obtenidos con auth0.</p>
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
