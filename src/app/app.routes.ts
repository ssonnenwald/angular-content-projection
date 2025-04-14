import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'content-projection',
  },
  {
    title: 'Content Projection',
    path: 'content-projection',
    loadComponent: () =>
      import('./components/content-projection/content-projection.component'),
  },
  { path: '**', redirectTo: '' }, // Redirect unmatched routes
];
