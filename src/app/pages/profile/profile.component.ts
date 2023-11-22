import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkBtnComponent } from '@shared/components/link-btn/link-btn.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/models/user.interface';

@Component({
  standalone: true,
  imports: [CommonModule, LinkBtnComponent, ButtonComponent],
  template: `
    <section class="max-w-lg w-full flex flex-col gap-8 px-3 sm:px-0">
      <h1 class="text-center text-4xl">¡Bienvenido {{ this.user?.name }}!</h1>
      <p>Aqui se mostrarán algunos datos de tu perfil obtenidos con auth0.</p>
      <article class="border border-neutral-500 rounded-md p-3 flex gap-3">
        <img
          [src]="this.user?.picture"
          alt="User image"
          class="h-28 w-28 rounded-sm"
        />
        <div>
          <h2 class="text-2xl font-semibold">{{ this.user?.name }}</h2>
          <p class="text-neutral-400">{{ this.user?.email }}</p>
          <p class="font-semibold">{{ this.user?.role }}</p>
        </div>
      </article>
      <div>
        <h3 class="text-xl mb-2">User JSON</h3>
        <pre class="w-full overflow-auto">
          <code>{{ json }}</code>
        </pre>
      </div>
      <div class="flex gap-2 flex-col">
        <app-link-btn class="text-center" routerLink="/">Home</app-link-btn>
        <app-link-btn class="text-center" routerLink="/admin"
          >Admin panel</app-link-btn
        >
        <app-button (btnClick)="logout()">Cerrar sesión</app-button>
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
export class ProfileComponent implements OnInit {
  auth = inject(AuthService);
  user: User | null | undefined;
  json = '';

  ngOnInit(): void {
    this.user = this.auth.user$.subscribe();
    this.auth.user$.subscribe((u) => {
      const user: User = { ...u };
      this.user = user;
      this.json = JSON.stringify(user, null, 2);
    });
  }

  logout() {
    this.auth.logout();
  }
}
