import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'dice-editor', pathMatch: 'full' },
    { path: 'dice-dashboard', loadComponent: () => import('./pages/dice-dashboard/dice-dashboard.component').then(m => m.DiceDashboardComponent) },
    { path: 'dice-editor', loadComponent: () => import('./pages/dice-editor/dice-editor.component').then(m => m.DiceEditorComponent) }
];
