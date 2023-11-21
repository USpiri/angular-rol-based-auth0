import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-btn',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="h-9 w-9 p-1.5 bg-neutral-800 hover:bg-neutral-700 transition-all rounded-md active:bg-neutral-800 active:scale-95 duration-100"
      (click)="btnClick.emit()"
      title="{{ title }}"
    >
      <ng-content />
    </button>
  `,
})
export class IconBtnComponent {
  @Output() btnClick: EventEmitter<null> = new EventEmitter();
  @Input({ required: true }) title!: string;
}
