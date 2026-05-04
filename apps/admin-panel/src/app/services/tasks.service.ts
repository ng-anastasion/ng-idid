import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  /**
   * localStorage
   */
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
  private readonly TASKS_URL = `${environment.apiBaseUrl}/tasks`;

  // Получить все задачи (READ)
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.TASKS_URL).pipe(
      map((res) => {
        if (!res) return [];

        // 1. Превращаем в массив (универсально для Firebase и json-server)
        const rawTasks = Array.isArray(res)
          ? res
          : Object.keys(res).map((key) => ({
              ...(res[key] as object),
              id: key,
            }));

        // 2. ЗАЧИСТКА: убираем всё, что не является объектом задачи
        // (удаляем строку $schema и возможные null)
        return rawTasks.filter(
          (task) =>
            task && typeof task === 'object' && !task.hasOwnProperty('$schema')
        ) as Task[];
      })
    );
  }

  // Добавить задачу (CREATE)
  addTask(task: Task): Observable<Task> {
    console.log('addTask', task);

    return this.http.post<any>(this.TASKS_URL, task).pipe(
      map((res) => {
        // 1. Если пришел ответ от Firebase (объект с полем name)
        if (res && res.name) {
          return { ...task, id: res.name };
        }

        // 2. Если пришел ответ от локального json-server (весь объект с id)
        return res as Task;
      })
    );
  }

  // Удалить задачу (DELETE)
  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${this.TASKS_URL}/${id}`);
  }

  // Обновить задачу (UPDATE)
  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.TASKS_URL}/${task.id}`, task);
  }
}
