import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { Customer } from '../../core/services/customer/customer';
import { CUSTOMER_TYPE } from '../../core/interfaces/customer-type';
import { NavBar } from "../../components/nav-bar/nav-bar";
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";


@Component({
  selector: 'app-create-customer',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatInputModule,
    MatButton,
    NavBar,
    MatCard,
    MatCardModule,
    MatIconModule
  ],
  standalone: true,
  templateUrl: './create-customer.html',
  styleUrl: './create-customer.css'
})
export class CreateCustomer {
  private _formBuilder = inject(FormBuilder);
  customerFormGroup: any
  backHistory() {
    history.back();
  }
  constructor(private customerSrv: Customer) {
    this.customerFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required] as unknown as CUSTOMER_TYPE
    });
  }


  createCustomer() {
    const { name, description, type } = this.customerFormGroup.value;
    if (name && description && type) {
      this.customerSrv.setCustomerData(name, description, type)
      this.customerSrv.createCustomer();
      this.customerFormGroup.reset();
    }
  }
}



