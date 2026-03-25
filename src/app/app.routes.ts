import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'srts', pathMatch: 'full' },

  {
    path: 'srts',
    loadComponent: () =>
      import('./tab1/tab1.page').then((m) => m.Tab1Page),
  },
  {
    path: 'novo',
    loadComponent: () =>
      import('./tab2/tab2.page').then((m) => m.Tab2Page),
  },
  {
    path: 'sobre',
    loadComponent: () =>
      import('./tab3/tab3.page').then((m) => m.Tab3Page),
  },
  {
    path: 'srt/:id',
    loadComponent: () =>
      import('./pages/srt-detail/srt-detail.page').then((m) => m.SrtDetailPage),
  },
  {
    path: 'srt/:id/editar',
    loadComponent: () =>
      import('./pages/srt-edit/srt-edit.page').then((m) => m.SrtEditPage),
  },
];