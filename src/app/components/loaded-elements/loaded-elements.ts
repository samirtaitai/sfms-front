import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loaded-elements',
  templateUrl: './loaded-elements.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./loaded-elements.css']
})
export class LoadedElementsComponent {
  @Input() total: number = 100;
  @Input() loaded: number = 0;
  @Input() label: string = 'Elements';

  get percentage(): number {
    return this.total > 0 ? Math.min((this.loaded / this.total) * 100, 100) : 0;
  }

  get barColor(): string {
    if (this.percentage < 99) return 'green';
    return 'green';
  }
}