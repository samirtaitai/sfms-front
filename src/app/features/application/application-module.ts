import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationService } from './application.service';
import { ApplicationsComponent } from './applications/applications';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { Filter } from '../../components/filter/filter';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LoaderComponent } from '../../components/loader-component/loader-component';
import { CreateApplication } from './create-application/create-application';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './applications.routes';
import { Spinner } from '../../components/spinner/spinner';
import { Toast } from '../../components/toast/toast';
import { DeleteAplication } from './delete-aplication/delete-aplication';
import { EntityDetailsCard } from '../../components/entity-details-card/entity-details-card';
import { ApplicationDetails } from './application-details/application-details';
import { ApplicationsLayoutComponent } from './applications-layout';

@NgModule({
  declarations: [ApplicationsComponent, CreateApplication, DeleteAplication, ApplicationDetails, ApplicationsLayoutComponent],
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    Filter,
    MatListModule,
    MatButtonToggleModule,
    MatInputModule,
    MatCard,
    ReactiveFormsModule,
    MatButton,
    LoaderComponent,
    Spinner,
    Toast,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    EntityDetailsCard,
    RouterOutlet,
    RouterModule.forChild(routes)
  ],
})
export class ApplicationModule { }
