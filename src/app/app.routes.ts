import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.routes').then(m => m.routes),
  },
  {
    path: 'srt/:id',
    loadComponent: () =>
      import('./pages/srt-detail/srt-detail.page').then(m => m.SrtDetailPage),
  },
];