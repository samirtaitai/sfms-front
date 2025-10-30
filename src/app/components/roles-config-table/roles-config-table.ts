import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { OptionsSelect } from "../options-select/options-select";

interface RolI {
  rolId: string,
  flowId: string
}

@Component({
  selector: 'app-roles-config-table',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    OptionsSelect
  ],
  templateUrl: './roles-config-table.html',
  styleUrl: './roles-config-table.css'
})
export class RolesConfigTable {

  @Input() applicationFlows: any[] = [];
  @Input() roles: { id: string; name: string }[] = [];
  @Output() addRoleEventEmmiter = new EventEmitter<RolI>();

  roleConfigFormGroup!: FormGroup;
  displayedColumns: string[] = ['flowCode', 'role'];

  constructor(private fb: FormBuilder) {
    this.roleConfigFormGroup = this.fb.group({
      flowId: [''],
      roleId: [null]
    });
  }

  onRoleSelected(roleId: any, flowId: any): void {
    console.log(roleId)
    console.log(flowId)
    this.roleConfigFormGroup.patchValue({ flowId, roleId: roleId });
    this.addRoleEventEmmiter.emit(this.roleConfigFormGroup.value);
  }
}