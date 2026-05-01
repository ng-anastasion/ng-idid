import { Injectable, signal } from '@angular/core';
import { ITask } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  // Используем Signals (фишка Angular 17/18) для хранения списка
  private readonly STORAGE_KEY = 'tasks_data';
  tasks = signal<ITask[]>(this.loadTasks());

  private loadTasks(): ITask[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  addTask(task: ITask) {
    this.tasks.update((prev) => {
      const updated = [...prev, task];
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }
}
