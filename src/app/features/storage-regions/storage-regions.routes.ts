import { Routes } from '@angular/router';
import { StorageRegionsLayout } from './storage-regions-layout';
import { StorageRegionsPage } from './storage-regions-page/storage-regions-page';

export const routes: Routes = [
    {
        path: '',
        component: StorageRegionsLayout,
        data: { breadcrumb: 'Storage regions', showBreadcrumb: true },
        children: [
            {
                path: '',
                component: StorageRegionsPage
            },
        ]
    }
];