import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ItemsService {
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
  // private readonly TASKS_URL = `${environment.apiBaseUrl}/tasks`;

  // Получить все задачи (READ)
  getTasks(url: string): Observable<any[]> {
    return this.http.get<any[]>(url).pipe(
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
          (item) =>
            item && typeof item === 'object' && !item.hasOwnProperty('$schema')
        ) as any[];
      })
    );
  }

  // Добавить задачу (CREATE)
  addTask(url: string, item: any): Observable<any> {
    console.log('addTask', item);

    return this.http.post<any>(url, item).pipe(
      map((res) => {
        // 1. Если пришел ответ от Firebase (объект с полем name)
        if (res && res.name) {
          return { ...item, id: res.name };
        }

        // 2. Если пришел ответ от локального json-server (весь объект с id)
        return res as any;
      })
    );
  }

  // Удалить задачу (DELETE)
  deleteTask(url: string, id: string): Observable<void> {
    return this.http.delete<void>(`${url}/${id}`);
  }

  // Обновить задачу (UPDATE)
  updateTask(url: string, item: any): Observable<any> {
    return this.http.put<any>(`${url}/${item.id}`, item);
  }
}
