import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkBtnComponent } from '@components/link-btn/link-btn.component';
import { ButtonComponent } from '@components/button/button.component';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  standalone: true,
  imports: [CommonModule, LinkBtnComponent, ButtonComponent],
  template: `
    <section class="max-w-lg w-full flex flex-col gap-8 px-3 sm:px-0">
      <h1 class="text-center text-4xl">¡Bienvenido ADMIN!</h1>
      <p>Si lograste llegar hasta acá es porque posees el rol adecuado.</p>
      <div class="flex gap-2 flex-col">
        <app-link-btn class="text-center" routerLink="/">Home</app-link-btn>
        <app-link-btn class="text-center" routerLink="/profile"
          >Perfil</app-link-btn
        >
        <app-button (btnClick)="logout()">Cerrar sesión</app-button>
        <p>
          <strong>Nota:</strong> Esta ruta está restringida solo para usuarios
          ADMIN.
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
export class AdminComponent {
  auth = inject(AuthService);
  logout() {
    /**
     * El logout redirige la ruta '/login'
     */
    this.auth.logout({
      logoutParams: { returnTo: `${document.location.origin}/login` },
    });
  }
}
