import { Route, Routes } from '@angular/router';
import { RouteName } from './app.consts';

// база знаний
// вс

export const appRoutes_old: Route[] = [
  { path: '', redirectTo: RouteName.taskManager, pathMatch: 'full' },
  {
    path: RouteName.taskManager,
    loadComponent: () => import('').then((c) => c.KnowledgeBaseComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('').then((c) => c.TaskListComponent),
      },
      {
        path: 'new',
        loadComponent: () => import('').then((c) => c.TaskFormComponent),
      },
    ],
  },
];

export const appRoutes: Routes = [
  { path: '', redirectTo: 'knowledge', pathMatch: 'full' },
  // {
  //   path: 'dashboard',
  //   loadComponent: () =>
  //     import('./pages/dashboard/dashboard.component').then(
  //       (m) => m.DashboardComponent
  //     ),
  // },
  {
    path: 'knowledge',
    loadComponent: () =>
      import('@ng-highcharts-canvas/knowledge-base').then(
        (m) => m.KnowledgeBaseComponent
      ),
  },
  // {
  //   path: 'admin',
  //   loadComponent: () =>
  //     import('@ng-highcharts-canvas/knowledge-base').then(
  //       (m) => m.ArticleFormComponent
  //     ),
  // },
];
