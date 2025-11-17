import { Routes } from '@angular/router';
import { ServicesLayout } from './services-layout';
import { ConfiguredApplications } from './configured-applications/configured-applications';
import { OnboardApplication } from './onboard-application/onboard-application';

export const routes: Routes = [
    {
        path: '',
        component: ServicesLayout,
        data: { breadcrumb: 'Services', showBreadcrumb: true },
        children: [
            {
                path: '',
                component: ConfiguredApplications
            },
            {
                path: 'create',
                component: OnboardApplication,
                data: { breadcrumb: 'Service Onboarding', showBreadcrumb: true }
            }
        ]
    }
];