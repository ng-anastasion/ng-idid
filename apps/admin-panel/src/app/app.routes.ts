import { Route } from '@angular/router';
import { RouteName } from './app.consts';

export const appRoutes: Route[] = [
  { path: '', redirectTo: RouteName.taskManager, pathMatch: 'full' },
  {
    path: RouteName.taskManager,
    loadComponent: () =>
      import('./components/task-manager/task-manager.component').then(
        (c) => c.TaskManagerComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/task-list/task-list.component').then(
            (c) => c.TaskListComponent
          ),
      },
      {
        path: 'new',
        loadComponent: () =>
          import('./components/task-form/task-form.component').then(
            (c) => c.TaskFormComponent
          ),
      },
    ],
  },
];
