import { Injectable } from '@angular/core';
import { ItemsService } from '@ng-highcharts/shared';

@Injectable({ providedIn: 'root' })
export class TasksService extends ItemsService {
  // private readonly TASKS_URL = `${environment.apiBaseUrl}/tasks`;
}
