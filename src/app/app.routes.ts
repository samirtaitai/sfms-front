import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./pages/home-page/home-page').then(c => c.HomePage) },
    { path: 'administrator', loadComponent: () => import('./pages/customer-page/customer-page').then(c => c.CustomerPage) },
    { path: 'billing', loadComponent: () => import('./pages/billing/billing').then(c => c.Billing) },
    { path: 'login', loadComponent: () => import('./pages/login-page/login-page').then(c => c.LoginPage) },
    { path: 'create-customer', loadComponent: () => import('./pages/create-customer/create-customer').then(c => c.CreateCustomer) }
];
