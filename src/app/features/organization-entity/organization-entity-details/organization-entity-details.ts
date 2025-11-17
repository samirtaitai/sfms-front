import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OesI, OesService } from '../oes.service';
import { PropertiesI } from '../../../components/entity-details-card/entity-details-card';
import { INTERNAL_ROUTES } from '../../../consts/routes';
import { DeleteOrg } from '../delete-org/delete-org';

@Component({
  selector: 'app-organization-entity-details',
  standalone: false,
  templateUrl: './organization-entity-details.html',
  styleUrl: './organization-entity-details.css'
})
export class OrganizationEntityDetails {
  readonly dialog = inject(MatDialog);
  private router = inject(Router);

  organizationEntityProperties: PropertiesI[] = [];
  entityCardTittle = "Organization Entity Overview";
  organizationEntityDetails!: OesI;

  constructor(private oesSrv: OesService) { }

  ngOnInit(): void {
    this.organizationEntityDetails = this.oesSrv.getOeDetails();
    if (this.organizationEntityDetails === undefined)
      this.router.navigate([INTERNAL_ROUTES.ORG.PATH]);
    else {
      const { name, code, debtor } = this.organizationEntityDetails;
      this.organizationEntityProperties = [
        { name: "Name", value: name },
        { name: "Code", value: code },
        { name: "Debtor", value: String(debtor) }
      ];
    }
  }

  deleteConfirm(): void {
    const dialogRef = this.dialog.open(DeleteOrg, {
      data: { tittle: 'Delete OE', text: `are you sure you want to delete ${this.organizationEntityDetails.name} ?`, oeId: this.organizationEntityDetails.id },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true)
        this.router.navigate([INTERNAL_ROUTES.ORG.PATH]);
    });
  }

  editOrganizationEntity() { }

}
