import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from '@angular/router';
import { Application, ApplicationService } from '../application.service';
import { Filter } from "../../../components/filter/filter";
import { LoaderComponent } from "../../../components/loader-component/loader-component";
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { NavBar } from "../../../components/nav-bar/nav-bar";

@Component({
  selector: 'app-applications',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    Filter,
    LoaderComponent,
    NavBar
],
  providers: [ApplicationService],
  standalone: true,
  templateUrl: './applications.html',
  styleUrl: './applications.css'
})
export class Applications implements OnInit {
  applications: Application[] = [];
  filtredApplications: Application[] = [];
  loading: any;
  constructor(
    private applicationSrv: ApplicationService,
    private cdr: ChangeDetectorRef

  ) { }
  ngOnInit(): void {
    this.loading = true;
    this.applicationSrv.getAll().subscribe({
      next: (response) => {
        this.applications = response;
        this.filtredApplications = [...this.applications];
                this.loading = false;
        this.cdr.detectChanges();
      }
    })
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
}
