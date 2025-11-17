import { Routes } from '@angular/router';
import { CustomerLayoutComponent } from './customer-layout';
import { Customers } from './customers/customers';
import { CreateCustomer } from './create-customer/create-customer';
import { CustomerDetails } from './customer-details/customer-details';

export const routes: Routes = [
    {
        path: '',
        component: CustomerLayoutComponent,
        data: { breadcrumb: 'Customers', showBreadcrumb: true },
        children: [
            {
                path: '',
                component: Customers
            },
            {
                path: 'create',
                component: CreateCustomer,
                data: { breadcrumb: 'Create customer', showBreadcrumb: true }
            },
            {
                path: 'details',
                component: CustomerDetails,
                data: { breadcrumb: 'Customer details', showBreadcrumb: true }
            }
        ]
    }
];