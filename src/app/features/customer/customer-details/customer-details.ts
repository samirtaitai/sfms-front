import { CustomerService } from '../customer.service';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { INTERNAL_ROUTES } from "../../../consts/routes";
import { PropertiesI, EntityDetailsCard } from "../../../components/entity-details-card/entity-details-card";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialog } from "../confirmation-dialog/confirmation-dialog";

interface CustomerI {
  id: string,
  createdAt: string,
  description: string,
  updatedAt: string,
  name: string,
}

@Component({
  selector: 'app-customer-details',
  imports: [CommonModule, EntityDetailsCard],
  templateUrl: './customer-details.html',
  styleUrl: './customer-details.css',
  standalone: true,
})
export class CustomerDetails implements OnInit {
  readonly dialog = inject(MatDialog);
  private router = inject(Router);
  customerProperties: PropertiesI[] = [];
  entityCardTittle = "Customer Overview";
  customerDetails!: CustomerI;

  constructor(private customerSrv: CustomerService) { }

  ngOnInit(): void {
    this.customerDetails = this.customerSrv.getCustomerDetails();
    if (this.customerDetails === undefined)
      this.router.navigate([INTERNAL_ROUTES.CUSTOMERS.PATH]);
    else {
      const { name, description, createdAt, updatedAt } = this.customerDetails;
      this.customerProperties = [
        { name: "Name", value: name },
        { name: "Description", value: description },
        { name: "Created At", value: createdAt, dataType: "date" },
        { name: "Updated At", value: updatedAt, dataType: "date" },
      ]
    }
  }

  deleteCustomer(): void {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: { tittle: 'Delete customer', text: `are you sure you want to delete ${this.customerDetails.name} ?`, customerId: this.customerDetails.id },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.router.navigate([INTERNAL_ROUTES.CUSTOMERS.PATH]);
      }
    });
  }

  editCustomer(): void {
  }

}
