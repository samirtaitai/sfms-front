import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';

import { httpInterceptorProviders } from './core/providers/interceptors';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { INTERNAL_ROUTES } from './consts/routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withPreloading(PreloadAllModules), withDebugTracing()),
    provideHttpClient(withInterceptorsFromDi()),
    ...httpInterceptorProviders
  ]
};

export const navBarVisibleOnRoutes = [
  `/${INTERNAL_ROUTES.HOME}`,
  `/${INTERNAL_ROUTES.ADMIN}`,
  `/${INTERNAL_ROUTES.APPLICATIONS.PATH}`,
  `/${INTERNAL_ROUTES.APPLICATIONS.CREATE}`,
  `/${INTERNAL_ROUTES.CUSTOMERS.PATH}`,
  `/${INTERNAL_ROUTES.CUSTOMERS.CREATE}`,
  `/${INTERNAL_ROUTES.CUSTOMERS.CUSTOMER_DETAILS}`,
   `/${INTERNAL_ROUTES.ORG.PATH}`,
   `/${INTERNAL_ROUTES.SERVICES.PATH}`,
   `/${INTERNAL_ROUTES.STORAGE_REGIONS.PATH}`,
   `/${INTERNAL_ROUTES.BILLING.PATH}`,
]