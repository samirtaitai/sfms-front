import { Component, inject, OnInit } from '@angular/core';
import { OesI, OesService } from '../oes.service';
import { ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { INTERNAL_ROUTES } from '../../../consts/routes';

@Component({
  selector: 'app-organization-entities',
  standalone: false,
  templateUrl: './organization-entities.html',
  styleUrl: './organization-entities.css'
})
export class OrganizationEntities implements OnInit {
  oes: OesI[] = [];
  filtredOes: OesI[] = [];
  loading = false;
  createOeRouterLink = INTERNAL_ROUTES.ORG.CREATE;
  readonly dialog = inject(MatDialog);

  constructor(
    private oesSrv: OesService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getAllOes();
  }

  getAllOes() {
    this.loading = true;
    this.oesSrv.getAll().subscribe({
      next: (response) => {
        this.oes = response;
        this.filtredOes = response;
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
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

  organizationEntitynDetails(organizationEntity: any) {
    this.oesSrv.goToOeDetails(organizationEntity);
  }

}
