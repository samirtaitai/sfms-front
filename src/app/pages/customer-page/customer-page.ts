import { Component, inject } from '@angular/core';
import { NavBar } from "../../components/nav-bar/nav-bar";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { CreateOrgEntityModal } from '../create-org-entity-modal/create-org-entity-modal';

@Component({
  selector: 'app-customer-page',
  imports: [
    CommonModule,
    NavBar,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule
  ],
  templateUrl: './customer-page.html',
  styleUrl: './customer-page.css'
})
export class CustomerPage {
  loading = false;
  readonly dialog = inject(MatDialog);

  constructor() {}

  openNewCustomerDialog(): void {

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
