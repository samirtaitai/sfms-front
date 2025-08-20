import { Component, inject } from '@angular/core';
import { NavBar } from "../../components/nav-bar/nav-bar";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import { MatButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-create-workflow',
  standalone: true,
  imports: [CommonModule, NavBar, ReactiveFormsModule, MatInputModule, MatButton, MatSelectModule,MatIconModule],
  templateUrl: './create-workflow.html',
  styleUrl: './create-workflow.css'
})
export class CreateWorkflow {
  workflowForm!: FormGroup;
  fileTypesForm!: FormGroup;
  fileActions: any = [];
  private _formBuilder = inject(FormBuilder);
  constructor() {
    this.workflowForm = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required]
    });
    this.fileTypesForm = this._formBuilder.group({
      action: ['', Validators.required],
      type: ['', Validators.required],
      size: ['', Validators.required]
    });
  }


  addAcction() {
    if (this.fileTypesForm.valid) {
      this.fileActions.push(this.fileTypesForm.value);
      this.fileTypesForm.reset();
    } else {
      console.error('Form is invalid');
    }
  }

  action: any[] = [
    { value: 'SCAN', viewValue: 'Scan' },
    { value: 'SCAN AND REPAIR', viewValue: 'Scan and repair' },
  ];

  foods: any[] = [
    { value: 'CSV', viewValue: 'CSV File' },
    { value: 'PDF', viewValue: 'PDF File' },
    { value: 'TXT', viewValue: 'TXT File' },
  ];


  deleteAction(file:any){
    const index = this.fileActions.indexOf(file);
    if (index > -1) {
      this.fileActions.splice(index, 1);
    }
  }

}
