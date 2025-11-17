import { Routes } from '@angular/router';
import { OrganizationEntities } from './organization-entities-page/organization-entities';
import { CreateOrgEntity } from './create-org-entity/create-org-entity';
import { OesLayoutComponent } from './oes-layout';
import { OrganizationEntityDetails } from './organization-entity-details/organization-entity-details';

export const routes: Routes = [
    {
        path: '',
        component: OesLayoutComponent,
        data: { breadcrumb: 'Organization entities', showBreadcrumb: true },
        children: [
            {
                path: '',
                component: OrganizationEntities
            },
            {
                path: 'create',
                component: CreateOrgEntity,
                data: { breadcrumb: 'Create organization entity', showBreadcrumb: true }
            },
                        {
                path: 'details',
                component: OrganizationEntityDetails,
                data: { breadcrumb: 'Organization entity details', showBreadcrumb: true }
            },
        ]
    }
];