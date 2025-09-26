import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { NavBar } from "../../../components/nav-bar/nav-bar";
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Customer } from '../../../../../__mocks__/customer/customer';

@Component({
  selector: 'app-create-org-entity',
  imports: [
    CommonModule,
    MatCard,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    NavBar,
    MatInputModule,
    MatButton
  ],
  templateUrl: './create-org-entity.html',
  styleUrl: './create-org-entity.css'
})
export class CreateOrgEntity {
  private _formBuilder = inject(FormBuilder);
  oeFormGroup: any
  constructor(private customerSrv: Customer) {
    this.oeFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      debtor: ['', Validators.required]
    });
  }

  createOe() {
    const { name, code, debtor } = this.oeFormGroup.value;
    if (name && code && debtor) {
      this.customerSrv.setOrgName(name);
      this.customerSrv.setOrgCode(code);
      this.customerSrv.setOrgDebtor(debtor);
      this.customerSrv.createOe();
      this.oeFormGroup.reset();
    }
  }
}
