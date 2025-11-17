import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { LoaderComponent } from "../../../components/loader-component/loader-component";
import { Filter } from "../../../components/filter/filter";
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConsumer } from '../delete-consumer/delete-consumer';
import { INTERNAL_ROUTES } from '../../../consts/routes';
import { ServicesService } from '../services.service';

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
  ],
  providers: [ServicesService],
  templateUrl: './configured-applications.html',
  styleUrl: './configured-applications.css'
})
export class ConfiguredApplications implements OnInit {
  readonly dialog = inject(MatDialog);

  allConsumers: any[] = [];
  filtredConsumers: any[] = [];
  loading: any;
  createServiceRouterLink = INTERNAL_ROUTES.SERVICES.CREATE;

  constructor(
    private servicesSrv: ServicesService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getAllServices();
  }

  getAllServices() {
    this.loading = true;
    this.servicesSrv.getAllServices().subscribe({
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
      if (result === true)
        this.getAllServices();
    });
  }
}
