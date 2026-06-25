import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found-page/not-found-page').then((c) => c.NotFoundPage),
  },
];
