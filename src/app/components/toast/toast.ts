import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type TaastType = 'success' | 'danger' | 'warning';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './toast.html',
  styleUrl: './toast.css'
})
export class Toast {
  @Input() toastText!: string;
  @Input() showToast!: boolean;
  @Input() type!: TaastType;
  toastClass: string = `toast  ${this.type}`;
}
