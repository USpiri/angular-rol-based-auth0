import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkBtnComponent } from '@components/link-btn/link-btn.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LinkBtnComponent, NavbarComponent, ButtonComponent],
  template: `
    <section class="max-w-lg w-full flex flex-col gap-8 px-3 sm:px-0">
      <h1 class="text-center text-4xl">¡Bienvenido!</h1>
      <p>
        Si lograste llegar hasta acá es porque has iniciado sesión
        correctamente, intenta dirigirte al panel de administración o navegar a
        tu perfil.
      </p>
      <div class="flex flex-col gap-2">
        <app-link-btn class="text-center" routerLink="/profile"
          >Perfil</app-link-btn
        >
        <app-link-btn class="text-center" routerLink="/admin"
          >Admin Panel</app-link-btn
        >
        <app-button>Cerrar sesión</app-button>
        <p>
          <strong>Nota:</strong> Si no puedes ingresar a alguna ruta puede que
          no poseas el rol adecuado, cierra sesión en ingresa con un usuario
          adecuado.
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
