import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  // private readonly STORAGE_KEY = 'tasks_data';
  // tasks = signal<ITask[]>(this.loadTasks());

  // private loadTasks(): ITask[] {
  //   const data = localStorage.getItem(this.STORAGE_KEY);
  //   return data ? JSON.parse(data) : [];
  // }

  // addTask(task: ITask) {
  //   this.tasks.update((prev) => {
  //     const updated = [...prev, task];
  //     localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updated));
  //     return updated;
  //   });
  // }

  private http = inject(HttpClient);
  // Используем путь через прокси /api
  private readonly API_URL = '/api/tasks';

  // Получить все задачи (READ)
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL);
  }

  // Добавить задачу (CREATE)
  addTask(task: Task): Observable<Task> {
    console.log('addTask', task);

    return this.http.post<Task>(this.API_URL, task);
  }

  // Удалить задачу (DELETE)
  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  // Обновить задачу (UPDATE)
  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.API_URL}/${task.id}`, task);
  }
}
