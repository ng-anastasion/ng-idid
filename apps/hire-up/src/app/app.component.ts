// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';

// @Component({
//   standalone: true,
//   imports: [RouterModule],
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
// })
// export class AppComponent {
// }

import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // CommonModule обязателен для пайпа | date
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private http = inject(HttpClient);

  // Сюда вставляем данные из настроек Supabase (Project Settings -> API)
  // private apiUrl = 'https://YOUR_PROJECT_ID.supabase.co/rest/v1/diary_notes';
  private apiUrl = 'https://jtindhympuzuunjuxlxz.supabase.co/rest/v1/diary_notes';
  private secretPassword = 'porebrik'; // Секретное слово, которое вы указали в политике ALL
  
  private headers = new HttpHeaders({
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0aW5kaHltcHV6dXVuanV4bHh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyMDEzMzIsImV4cCI6MjA5Nzc3NzMzMn0.-UBPgo69d2HuZjiaoaAvSzdTrSgkzwC17yHPFRvx7Xk', // Ключ anon/public
    'Content-Type': 'application/json'
  });

  // 1. Добавьте новое свойство для хранения отфильтрованных заметок
  notes: any[] = [];         // Это то, что отображается на экране
  allNotes: any[] = [];      // Тут хранятся абсолютно все заметки из базы

  ngOnInit() {
    this.loadNotes();
  }


  // 2. Обновите метод загрузки данных, чтобы он заполнял оба массива
  loadNotes() {
    const urlWithFilter = `${this.apiUrl}?secret_pass=eq.${this.secretPassword}&order=created_at.desc`;
    this.http.get<any[]>(urlWithFilter, { headers: this.headers })
      .subscribe({
        next: (data) => {
          this.allNotes = data;
          this.notes = data; // Изначально показываем всё
        },
        error: (err) => console.error('Ошибка при загрузке данных:', err)
      });
  }

  // 3. Обновите метод сохранения, чтобы новая запись добавлялась в оба массива
  save(text: string) {
    if (!text.trim()) return;

    const body = { 
      content: text,
      secret_pass: this.secretPassword 
    };

    const insertHeaders = this.headers.append('Prefer', 'return=representation');

    this.http.post<any[]>(this.apiUrl, body, { headers: insertHeaders })
      .subscribe({
        next: (newNotes) => {
          this.allNotes = [...newNotes, ...this.allNotes];
          this.notes = [...newNotes, ...this.notes];
        },
        error: (err) => alert('Ошибка сохранения!')
      });
  }

  // 4. Добавьте метод фильтрации по выбранной дате
  filterByDate(selectedDate: string) {
    if (!selectedDate) {
      // Если дата сброшена, снова показываем всё
      this.notes = this.allNotes;
      return;
    }

    // Сравниваем только год-месяц-день (YYYY-MM-DD), отсекая время
    this.notes = this.allNotes.filter(note => {
      const noteDate = note.created_at.split('T')[0]; // Получаем формат YYYY-MM-DD из базы Supabase
      return noteDate === selectedDate;
    });
  }


  // 3. Изменить существующую запись (UPDATE)
  edit(id: number, oldText: string) {
    const newText = prompt('Отредактируйте вашу победу:', oldText);
    if (!newText || newText.trim() === oldText) return;

    const body = { content: newText };
    const url = `${this.apiUrl}?id=eq.${id}&secret_pass=eq.${this.secretPassword}`;

    this.http.patch(url, body, { headers: this.headers })
      .subscribe({
        next: () => {
          // Ищем запись в массиве и меняем её текст на фронтенде
          const note = this.notes.find(n => n.id === id);
          if (note) note.content = newText;
        },
        error: (err) => console.error('Ошибка при обновлении:', err)
      });
  }

  // 4. Удалить запись навсегда (DELETE)
  remove(id: number) {
    if (!confirm('Вы уверены, что хотите удалить эту запись из дневника?')) return;

    const url = `${this.apiUrl}?id=eq.${id}&secret_pass=eq.${this.secretPassword}`;

    this.http.delete(url, { headers: this.headers })
      .subscribe({
        next: () => {
          // Мгновенно удаляем элемент из списка на экране
          this.notes = this.notes.filter(n => n.id !== id);
        },
        error: (err) => console.error('Ошибка при удалении:', err)
      });
  }
}
