import { Component, OnInit } from '@angular/core';
import { NavBar } from "../../../components/nav-bar/nav-bar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from '@angular/router';
import { Oes, OesService } from '../oes.service';
import { LoaderComponent } from "../../../components/loader-component/loader-component";
import { Filter } from '../../../components/filter/filter';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { MatMenuModule, MatMenu } from '@angular/material/menu';
import { MatLabel } from '@angular/material/input';

@Component({
  selector: 'app-organization-entities',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    LoaderComponent,
    Filter,
    NavBar,
    MatMenu,
    MatMenuModule,
    MatLabel
],
  providers: [OesService],
  standalone: true,
  templateUrl: './organization-entities.html',
  styleUrl: './organization-entities.css'
})
export class OrganizationEntities implements OnInit {
  oes: Oes[] = [];
  filtredOes: Oes[] = [];
  loading = false;

  constructor(
    private oesSrv: OesService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.oesSrv.getAll().subscribe({
      next: (response) => {
        this.oes = response;
        this.filtredOes = response;
        this.loading = false;
        this.cdr.detectChanges();
      }
    })
  }
  onFilterChanged(filter: string) {
    const lowerFilter = filter.toLowerCase();
    this.filtredOes = this.oes.filter((c: { name: string; code: string; }) =>
      c.name.toLowerCase().includes(lowerFilter) ||
      c.code.toLowerCase().includes(lowerFilter)
    );
  }

  trackCustomer(index: number, customer: any): string {
    return customer.id || customer.name;
  }
}
