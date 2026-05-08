import { Injectable } from '@angular/core';
import { ItemsService } from 'libs/shared/src/lib/services/items.service';

@Injectable({ providedIn: 'root' })
export class TasksService extends ItemsService {
  // private readonly TASKS_URL = `${environment.apiBaseUrl}/tasks`;
}
