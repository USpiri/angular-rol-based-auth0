import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="py-2 px-3 w-full bg-neutral-800 hover:bg-neutral-700 transition-all rounded-md active:bg-neutral-800 active:scale-95 duration-100"
      (click)="btnClick.emit()"
    >
      <ng-content />
    </button>
  `,
})
export class ButtonComponent {
  @Output() btnClick: EventEmitter<null> = new EventEmitter();
}
