import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="h-screen flex items-center justify-center">
      <div>Hola</div>
    </section>
  `,
})
export class LoginComponent {}
