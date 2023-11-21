import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterModule],
  template: `
    <section class="h-screen flex gap-8 items-center justify-center flex-col">
      <div class="max-w-md w-full flex flex-col gap-3">
        <div
          class="border border-neutral-500 rounded-md p-3 flex gap-3 flex-col"
        >
          <h1 class="text-center text-2xl">Roles con Auth0</h1>
          <app-button (btnClick)="login()">Iniciar sesión</app-button>
        </div>
        <a
          routerLink="/home"
          class="underline hover:scale-[102%] hover:font-semibold transition-all"
          >Ir a inicio</a
        >
      </div>
    </section>
  `,
})
export class LoginComponent {
  login() {
    console.log('LOGIN');
  }
}
