import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'dice-dashboard', pathMatch: 'full' },
    { path: 'dice-dashboard', loadComponent: () => import('./pages/dice-dashboard/dice-dashboard.component').then(m => m.DiceDashboardComponent) },
];
