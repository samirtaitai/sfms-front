import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ApplicationService } from '../application.service';
import { LoaderComponent } from "../../../components/loader-component/loader-component";
import { Filter } from "../../../components/filter/filter";
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { NavBar } from "../../../components/nav-bar/nav-bar";
import { MatDialog } from '@angular/material/dialog';
import { DeleteConsumer } from '../delete-consumer/delete-consumer';

@Component({
  selector: 'app-configured-applications',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    LoaderComponent,
    Filter,
    NavBar
  ],
  providers: [ApplicationService],
  templateUrl: './configured-applications.html',
  styleUrl: './configured-applications.css'
})
export class ConfiguredApplications implements OnInit {
  readonly dialog = inject(MatDialog);

  allConsumers: any[] = [];
  filtredConsumers: any[] = [];
  loading: any;

  constructor(
    private consumersSrv: ApplicationService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.consumersSrv.getAllCosumers().subscribe({
      next: (response) => {
        this.allConsumers = response;
        this.filtredConsumers = [...this.allConsumers];
        this.loading = false;
        this.cdr.detectChanges();
      }
    })
  }

  onFilterChanged(filter: string) {
    const lowerFilter = filter.toLowerCase();
    this.filtredConsumers = this.allConsumers.filter((c: { name: string; description: string; }) =>
      c.name.toLowerCase().includes(lowerFilter) ||
      c.description.toLowerCase().includes(lowerFilter)
    );
  }

  trackConsumer(index: number, consumer: any): string {
    return consumer.id || consumer.name;
  }

  deleteConsumer(consumerName: string, consumerId: string) {
    const dialogRef = this.dialog.open(DeleteConsumer, {
      data: { tittle: 'Delete consumer', text: `are you sure you want to delete ${consumerName} ?`, consumerId },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.loading = true;
        this.consumersSrv.getAllCosumers().subscribe({
          next: (response) => {
            this.allConsumers = response;
            this.filtredConsumers = [...this.allConsumers];
            this.loading = false;
            this.cdr.detectChanges();
          }
        });
      }
    });
  }
}
