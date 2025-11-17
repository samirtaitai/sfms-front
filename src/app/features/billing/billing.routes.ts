import { Routes } from '@angular/router';
import { Billing } from './billing/billing';


export const routes: Routes = [
    {
        path: '',
        component: Billing,
        data: { breadcrumb: 'Billing', showBreadcrumb: true },
        children: [
            {
                path: '',
                component: Billing,
            },
        ]
    }
];