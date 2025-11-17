import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbar } from "@angular/material/toolbar";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbar
],
  templateUrl: './filter.html',
  styleUrl: './filter.css'
})
export class Filter {
  filterText: string = '';
  @Input() loading = false;
  @Input() placeHolder = '';
  @Output() filterChanged = new EventEmitter<string>();

  onFilterChange() {
    this.filterChanged.emit(this.filterText);
  }

}
