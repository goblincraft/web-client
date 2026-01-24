import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'dice-dashboard', pathMatch: 'full' },
    { path: 'dice-dashboard', loadComponent: () => import('./features/dice-dashboard/dice-dashboard.component').then(m => m.DiceDashboardComponent) },
];
