import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-btn',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a
      [routerLink]="routerLink"
      class="py-2 block px-3 w-full bg-neutral-800 hover:bg-neutral-700 transition-all rounded-md active:bg-neutral-800 active:scale-95 duration-100"
    >
      <ng-content />
    </a>
  `,
})
export class LinkBtnComponent {
  @Input() routerLink!: string;
}
