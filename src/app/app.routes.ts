import { Routes } from '@angular/router';
import { INTERNAL_ROUTES } from './consts/routes';

export const routes: Routes = [
    { path: '', redirectTo: INTERNAL_ROUTES.LOGIN, pathMatch: 'full' },
    //Pages
    { path: INTERNAL_ROUTES.LOGIN, loadComponent: () => import('./pages/login-page/login-page').then(c => c.LoginPage), data: { breadcrumb: 'Login' } },
    { path: INTERNAL_ROUTES.HOME, loadComponent: () => import('./pages/home-page/home-page').then(c => c.HomePage), data: { breadcrumb: 'Inicio' } },
    { path: INTERNAL_ROUTES.ADMIN, loadComponent: () => import('./pages/admin-distributive-page/admin-distributive-page').then(c => c.AdminDistributivePage), data: { breadcrumb: 'Administración', } },
    //Features modules
    {
        path: INTERNAL_ROUTES.APPLICATIONS.PATH,
        loadChildren: () => import('./features/application/application-module').then(m => m.ApplicationModule)
    },
    {
        path: INTERNAL_ROUTES.ORG.PATH,
        loadChildren: () => import('./features/organization-entity/organization-entity-module').then(m => m.OrganizationEntityModule)
    },
    {
        path: INTERNAL_ROUTES.CUSTOMERS.PATH,
        loadChildren: () => import('./features/customer/customer.routes').then(m => m.routes)
    },
    {
        path: INTERNAL_ROUTES.SERVICES.PATH,
        loadChildren: () => import('./features/services/services.routes').then(m => m.routes)
    },
    {
        path: INTERNAL_ROUTES.STORAGE_REGIONS.PATH,
        loadChildren: () => import('./features/storage-regions/storage-regions.routes').then(m => m.routes)
    },
    {
        path: INTERNAL_ROUTES.BILLING.PATH,
        loadChildren: () => import('./features/billing/billing-module').then(m => m.BillingModule)
    },
    { path: '**', redirectTo: INTERNAL_ROUTES.LOGIN }
];
