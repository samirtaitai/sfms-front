import { Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications';
import { CreateApplication } from './create-application/create-application';
import { ApplicationsLayoutComponent } from './applications-layout';
import { ApplicationDetails } from './application-details/application-details';

export const routes: Routes = [
    {
        path: '',
        component: ApplicationsLayoutComponent,
        data: { breadcrumb: 'Applications', showBreadcrumb: true },
        children: [
            {
                path: '',
                component: ApplicationsComponent
            },
            {
                path: 'create',
                component: CreateApplication,
                data: { breadcrumb: 'Create application', showBreadcrumb: true }
            },
            {
                path: 'details',
                component: ApplicationDetails,
                data: { breadcrumb: 'Application details', showBreadcrumb: true }
            }
        ]
    }
];