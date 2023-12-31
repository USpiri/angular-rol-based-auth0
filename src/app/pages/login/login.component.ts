import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@components/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  template: `
    <section
      class="h-screen flex gap-8 items-center justify-center flex-col px-3 sm:px-0"
    >
      <div class="max-w-md w-full flex flex-col gap-3">
        <div
          class="border border-neutral-500 rounded-md p-3 flex gap-3 flex-col"
        >
          <h1 class="text-center text-2xl">Roles con Auth0</h1>
          <app-button (btnClick)="login()">Iniciar sesión</app-button>
        </div>
        <p class="mt-8">
          <strong>Nota:</strong> Las demás rutas estarán bloqueadas a menos que
          se inicie sesión, y la ruta /admin estará restringida a usuarios
          ADMIN.
        </p>
        <p>
          Puedes intentar redirigirte a la página de inicio, pero sin éxito
          alguno.
        </p>
        <div class="mb-4">
          <h2 class="font-semibold text-lg mb-2">Usuarios de prueba</h2>
          <ul>
            <li>
              ADMIN: admin&#64;email.com,
              <span class="opacity-50">12345678-ADMIN</span>
            </li>
            <li>
              USER: user&#64;email.com,
              <span class="opacity-50">12345678-USER</span>
            </li>
          </ul>
        </div>
        <a
          routerLink="/"
          class="underline hover:scale-[102%] hover:font-semibold transition-all"
          >Ir a inicio</a
        >
      </div>
    </section>
  `,
})
export class LoginComponent {
  auth = inject(AuthService);
  router = inject(Router);

  /**
   * Permite hacer login con una ventana emergente, luego si el usuario
   * está autenticado navega a la ruta principal
   */
  login() {
    this.auth.loginWithPopup().subscribe(() => {
      this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
        if (isAuthenticated) this.router.navigate(['/']);
      });
    });
  }
}
