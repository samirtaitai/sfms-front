import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';

export interface PropertiesI {
  name: string;
  value: string;
  dataType?: string;
}

@Component({
  selector: 'app-entity-details-card',
  standalone: true,
  imports: [CommonModule, MatButton],
  templateUrl: './entity-details-card.html',
  styleUrl: './entity-details-card.css'
})
export class EntityDetailsCard {
  @Input() entityName: string = "";
  @Input() entity: string = ""
  @Input() img!: string;
  @Input() entityProperties: PropertiesI[] = [];
  @Output() editButtonEvent = new EventEmitter<null>();
  @Output() deleteButtonEvent = new EventEmitter<null>();
  dataTypes = {
    date: 'date',
    string: 'str',
    number: 'num'
  }

  emitEditEvent() {
    this.editButtonEvent.emit();
  }

  emitDeleteEvent() {
    this.deleteButtonEvent.emit();
  }

}
