import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkBtnComponent } from '../../shared/components/link-btn/link-btn.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LinkBtnComponent, NavbarComponent],
  template: `
    <section class="max-w-lg w-full flex flex-col gap-8 px-3 sm:px-0">
      <h1 class="text-center text-4xl">¡Bienvenido!</h1>
      <p>
        Si lograste llegar hasta acá es porque has iniciado sesión
        correctamente, intenta dirigirte al panel de administración.
      </p>
      <div>
        <app-link-btn class="text-center" routerLink="/admin"
          >Admin Panel</app-link-btn
        >
        <p class="mt-2">
          <strong>Nota:</strong> Si no puedes ingresar puede que no poseas el
          rol adecuado, cierra sesión en ingresa con un usuario adecuado
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
export class HomeComponent {}
