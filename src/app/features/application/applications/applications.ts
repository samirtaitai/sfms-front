import { Component, inject, OnInit } from '@angular/core';
import { ApplicationI, ApplicationService } from '../application.service';
import { ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { INTERNAL_ROUTES } from '../../../consts/routes';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.html',
  standalone: false,
  styleUrl: './applications.css'
})

export class ApplicationsComponent implements OnInit {
  applications: ApplicationI[] = [];
  filtredApplications: ApplicationI[] = [];
  loading: any;
  createApplicationRouterLink = INTERNAL_ROUTES.APPLICATIONS.CREATE;
  readonly dialog = inject(MatDialog);

  constructor(private cdr: ChangeDetectorRef, private applicationSrv: ApplicationService) { }

  ngOnInit(): void {
    this.getApplicationsList();
  }

  getApplicationsList() {
    this.loading = true;
    this.applicationSrv.getAll().subscribe({
      next: (response) => {
        this.applications = response;
        this.filtredApplications = [...this.applications];
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  refreshApplications() {
    this.getApplicationsList();
  }

  onFilterChanged(filter: string) {
    const lowerFilter = filter.toLowerCase();
    this.filtredApplications = this.applications.filter((c: { name: string; description: string; }) =>
      c.name.toLowerCase().includes(lowerFilter) ||
      c.description.toLowerCase().includes(lowerFilter)
    );
  }

  trackApplication(index: number, application: any): string {
    return application.id || application.name;
  }



  applicationDetails(application: any) {
    this.applicationSrv.goToApplicationDetails(application);
  }
}
