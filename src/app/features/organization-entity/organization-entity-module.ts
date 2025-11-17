import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Spinner } from '../../components/spinner/spinner';
import { Toast } from '../../components/toast/toast';
import { CreateOrgEntity } from './create-org-entity/create-org-entity';
import { OesService } from './oes.service';
import { MatDialogActions, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { DeleteOrg } from './delete-org/delete-org';
import { LoaderComponent } from '../../components/loader-component/loader-component';
import { Filter } from '../../components/filter/filter';
import { MatMenuModule } from '@angular/material/menu';
import { OrganizationEntities } from './organization-entities-page/organization-entities';
import { OesLayoutComponent } from './oes-layout';
import { routes } from './oes.routes';
import { EntityDetailsCard } from '../../components/entity-details-card/entity-details-card';
import { OrganizationEntityDetails } from './organization-entity-details/organization-entity-details';

@NgModule({
  declarations: [CreateOrgEntity, DeleteOrg, OrganizationEntities, OrganizationEntityDetails, OesLayoutComponent],
  imports: [
    CommonModule,
    MatCard,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    NavBar,
    MatInputModule,
    MatButton,
    RouterLink,
    Spinner,
    Toast,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogModule,
    MatDialogActions,
    LoaderComponent,
    Filter,
    MatMenuModule,
    RouterOutlet,
    EntityDetailsCard,
    RouterModule.forChild(routes)
  ],
})
export class OrganizationEntityModule { }
