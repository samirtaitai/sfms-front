import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./pages/home-page/home-page').then(c => c.HomePage) },
    { path: 'admin-distributive', loadComponent: () => import('./pages/admin-distributive-page/admin-distributive-page').then(c => c.AdminDistributivePage) },
    { path: 'onboard-application', loadComponent: () => import('./features/application/onboard-application/onboard-application').then(c => c.OnboardApplication) },
    { path: 'login', loadComponent: () => import('./pages/login-page/login-page').then(c => c.LoginPage) },
    { path: 'applications', loadComponent: () => import('./features/application/applications/applications').then(c => c.Applications) },
    { path: 'customers', loadComponent: () => import('./features/customer/customers/customers').then(c => c.Customers) },
    { path: 'organization-entities', loadComponent: () => import('./features/organization-entity/organization-entities-page/organization-entities').then(c => c.OrganizationEntities) },
    { path: 'create-customer', loadComponent: () => import('./features/customer/create-customer/create-customer').then(c => c.CreateCustomer) },
    { path: 'create-application', loadComponent: () => import('./features/application/create-application/create-application').then(c => c.CreateApplication) },
    { path: 'create-org-entity', loadComponent: () => import('./features/organization-entity/create-org-entity/create-org-entity').then(c => c.CreateOrgEntity) },
    { path: 'configured-applications', loadComponent: () => import('./features/application/configured-applications/configured-applications').then(c => c.ConfiguredApplications) },
    { path: 'storage-regions', loadComponent: () => import('./features/storage-regions/storage-regions-page/storage-regions-page').then(c => c.StorageRegionsPage) },
    { path: 'create-storage-region', loadComponent: () => import('./features/storage-regions/create-storage-region/create-storage-region').then(c => c.CreateStorageRegion) },
    { path: '**', redirectTo: 'login' }
];
