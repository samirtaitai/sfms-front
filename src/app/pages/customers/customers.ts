import { Component } from '@angular/core';
import { NavBar } from "../../components/nav-bar/nav-bar";
import { MatCard, MatCardModule } from "@angular/material/card";
import { Customer } from '../../core/services/customer/customer';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [NavBar, MatCard, MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './customers.html',
  styleUrl: './customers.css'
})
export class Customers {
  customers: any = [];

  constructor(private customer: Customer) {
    this.customers = this.customer.getAllCustomers();
  }

  backHistory() {
    history.back();
  }
}
