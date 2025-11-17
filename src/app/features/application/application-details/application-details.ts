import { Component, inject, OnInit } from '@angular/core';
import { PropertiesI } from '../../../components/entity-details-card/entity-details-card';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApplicationI, ApplicationService } from '../application.service';
import { INTERNAL_ROUTES } from '../../../consts/routes';
import { DeleteAplication } from '../delete-aplication/delete-aplication';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.html',
  standalone:false,
  styleUrl: './application-details.css'
})
export class ApplicationDetails implements OnInit {
  readonly dialog = inject(MatDialog);
  private router = inject(Router);
  private applicationsSrv = inject(ApplicationService);

  applicationProperties: PropertiesI[] = [];
  entityCardTittle = "Application Overview";
  applicationDetails!: ApplicationI;

  ngOnInit(): void {
    this.applicationDetails = this.applicationsSrv.getApplicationDetails();
    if (this.applicationDetails === undefined)
      this.router.navigate([INTERNAL_ROUTES.APPLICATIONS.PATH]);
    else {
      const { name, description, applicationFlows } = this.applicationDetails;
      const applicationFlowsMap = applicationFlows.map(appFlow => ({
        name: appFlow.flowCode,
        value: appFlow.description
      }));

      this.applicationProperties = [
        { name: "Name", value: name },
        { name: "Description", value: description },
        ...applicationFlowsMap
      ];
    }
  }

  editApplication() { }

  deleteConfirm(): void {
    const dialogRef = this.dialog.open(DeleteAplication, {
      data: { tittle: 'Delete application', text: `are you sure you want to delete ${this.applicationDetails.name} ?`, applicationId: this.applicationDetails.id },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true)
        this.router.navigate([INTERNAL_ROUTES.CUSTOMERS.PATH]);
    });
  }
}
