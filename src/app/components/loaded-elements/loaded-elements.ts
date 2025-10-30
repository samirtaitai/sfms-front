import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-loaded-elements',
  templateUrl: './loaded-elements.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./loaded-elements.css']
})
export class LoadedElementsComponent implements OnChanges {
  @Input() total: number = 100;
  @Input() loaded: number = 0;
  @Input() label: string = 'Elements';

  @Output() loadComplete = new EventEmitter<any>();

  get percentage(): number {
    return this.total > 0 ? Math.min((this.loaded / this.total) * 100, 100) : 0;
  }

  get barColor(): string {
    return this.percentage < 99 ? 'green' : 'green';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['loaded'] || changes['total']) {
      if (this.percentage === 100) {
        this.loadComplete.emit();
      }
    }
  }
}