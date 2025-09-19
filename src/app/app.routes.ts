import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./pages/home-page/home-page').then(c => c.HomePage) },
    { path: 'administrator', loadComponent: () => import('./pages/customer-page/customer-page').then(c => c.CustomerPage) },
    { path: 'admin-distributive', loadComponent: () => import('./pages/admin-distributive-page/admin-distributive-page').then(c => c.AdminDistributivePage) },
    {path: 'onboard-application', loadComponent: () => import('./pages/onboard-application/onboard-application').then(c => c.OnboardApplication)},
    { path: 'billing', loadComponent: () => import('./pages/billing/billing').then(c => c.Billing) },
    { path: 'login', loadComponent: () => import('./pages/login-page/login-page').then(c => c.LoginPage) },
    { path: 'applications', loadComponent: () => import('./pages/applications/applications').then(c => c.Applications) },
    { path: 'customers', loadComponent: () => import('./pages/customers/customers').then(c => c.Customers) },
    { path: 'organization-entities', loadComponent: () => import('./pages/organization-entities/organization-entities').then(c => c.OrganizationEntities) },
    { path: 'create-customer', loadComponent: () => import('./pages/create-customer/create-customer').then(c => c.CreateCustomer) },
    { path: 'create-application', loadComponent: () => import('./pages/create-application/create-application').then(c => c.CreateApplication) },
    { path: 'create-workflow', loadComponent: () => import('./pages/create-workflow/create-workflow').then(c => c.CreateWorkflow) },
    {path: 'create-org-entity', loadComponent: () => import('./pages/create-org-entity/create-org-entity').then(c => c.CreateOrgEntity)},
    { path: '**', redirectTo: 'login' }
];
