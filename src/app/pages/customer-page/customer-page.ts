import { Component, inject } from '@angular/core';
import { NavBar } from "../../components/nav-bar/nav-bar";
import { Customer } from '../../core/services/customer';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateCustomerModal } from '../../components/create-customer-modal/create-customer-modal';
import { CreateOrgEntityModal } from '../../components/create-org-entity-modal/create-org-entity-modal';

@Component({
  selector: 'app-customer-page',
  imports: [RouterLink, CommonModule, NavBar, MatProgressSpinnerModule, MatCardModule, MatButtonModule, MatTabsModule],
  templateUrl: './customer-page.html',
  styleUrl: './customer-page.css'
})
export class CustomerPage {
  loading = false;
  customers: any = [];
  oes: any = [];
  applications: any = [];
  readonly dialog = inject(MatDialog);

  constructor(private customer: Customer) {
    this.loading = true;
    this.customers = this.customer.getAllCustomers();
    this.oes = this.customer.getAllOe();
    this.applications = this.customer.getAllApplications();
    this.loading = false;
  }

  openNewCustomerDialog(): void {
    const dialogRef = this.dialog.open(CreateCustomerModal, {
      data: { name: '' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        console.log(result);
      }
    });
  }

    openNewOeDialog(): void {
    const dialogRef = this.dialog.open(CreateOrgEntityModal, {
      data: { name: '' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        console.log(result);
      }
    });
  }
}
