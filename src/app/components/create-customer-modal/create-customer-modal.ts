import { Component, inject } from '@angular/core';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDialogActions, MatDialogContent, MatDialogRef } from "@angular/material/dialog";
import { MatProgressBar } from "@angular/material/progress-bar";
import { MatInputModule } from "@angular/material/input";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../../core/services/customer';
import { CUSTOMER_TYPE } from '../../core/interfaces/customer-type';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-create-customer-modal',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatDialogActions,
    MatProgressBar,
    MatDialogContent,
    MatInputModule,
    MatButton
  ],
  templateUrl: './create-customer-modal.html',
  styleUrl: './create-customer-modal.css'
})
export class CreateCustomerModal {
  readonly dialogRef = inject(MatDialogRef<CreateCustomerModal>);
  private _formBuilder = inject(FormBuilder);
  loading = false;

  constructor(private customerSrv: Customer) { }

  customerFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    type: ['', Validators.required] as unknown as CUSTOMER_TYPE
  });

  createCustomer() {
    this.loading = true;
    const { name, description, type } = this.customerFormGroup.value;
    if (name && description && type) {
      this.customerSrv.setCustomerData(name, description, type)
      this.customerSrv.createCustomer();
    }

    setTimeout(() => {
      this.loading = false;
      this.customerFormGroup.reset();
      this.dialogRef.close({ name, description, type });
    }, 2500);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
