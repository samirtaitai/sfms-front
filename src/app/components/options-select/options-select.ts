import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-options-select',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './options-select.html',
  styleUrls: ['./options-select.css']
})

export class OptionsSelect {
  @Input() label: string = 'Select';
  @Input() innerLabel = 'Select an option';
  @Input() options: any[] = [];
  @Input() selected: any;
  @Output() selectionChange = new EventEmitter<string>();

  onChange(event: Event): any {
    const value = (event.target as HTMLSelectElement).value;
    this.selectionChange.emit(value);
  }

}
