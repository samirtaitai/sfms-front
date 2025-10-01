import { Component, OnInit } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Filter } from "../../../components/filter/filter";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { LoaderComponent } from "../../../components/loader-component/loader-component";
import { NavBar } from "../../../components/nav-bar/nav-bar";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    Filter,
    LoaderComponent,
    NavBar,
    MatButton
],
  providers: [CustomerService],
  templateUrl: './customers.html',
  styleUrl: './customers.css'
})
export class Customers implements OnInit {
  customers: any;
  loading = false;
  filteredCustomers: any;

  constructor(
    private customerSrv: CustomerService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.customerSrv.getAll().subscribe({
      next: (value) => {
        this.customers = value;
        this.filteredCustomers = value;
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }

  onFilterChanged(filter: string) {
    const lowerFilter = filter.toLowerCase();
    this.filteredCustomers = this.customers.filter((c: { name: string; description: string; }) =>
      c.name.toLowerCase().includes(lowerFilter) ||
      c.description.toLowerCase().includes(lowerFilter)
    );
  }

  trackCustomer(index: number, customer: any): string {
    return customer.id || customer.name;
  }
}
