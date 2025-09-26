import { Component, OnInit } from '@angular/core';
import { NavBar } from "../../../components/nav-bar/nav-bar";
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  providers: [CustomerService],
  imports: [NavBar, MatCard, MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './customers.html',
  styleUrl: './customers.css'
})
export class Customers implements OnInit {
  customers: any = [];

  constructor( private customerSrv: CustomerService) {

  }
  ngOnInit(): void {
    this.customerSrv.getAll().subscribe(data => {
      this.customers = data;
    });
  }

  backHistory() {
    history.back();
  }
}
