import { Component } from '@angular/core';
import { NavBar } from "../../components/nav-bar/nav-bar";
import { MatCardModule } from "@angular/material/card";
import { Customer } from '../../core/services/customer/customer';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-organization-entities',
  imports: [NavBar, MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  standalone: true,
  templateUrl: './organization-entities.html',
  styleUrl: './organization-entities.css'
})
export class OrganizationEntities {
  oes: any = [];
  constructor(private customer: Customer) {
    this.oes = this.customer.getAllOe();
  }
    backHistory() {
    history.back();
  }
}
