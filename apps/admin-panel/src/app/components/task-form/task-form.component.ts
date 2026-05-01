import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { Categories, Priority, Task } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  taskForm: FormGroup;
  private tasksService = inject(TasksService);

  // Вытаскиваем ключи енамов для итерации в шаблоне
  categories = Object.values(Categories);
  priorities = Object.values(Priority);

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      category: [Categories.home, Validators.required],
      priority: [Priority.medium, Validators.required],
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask: Task = this.taskForm.value;
      newTask.status = 'todo';
      console.log('onSubmit', newTask);

      this.tasksService.addTask(newTask).subscribe({
        next: (response) => console.log('Task Created', response),
        error: (err) => console.error('Ошибка!', err),
      });
      this.taskForm.reset({
        category: Categories.home,
        priority: Priority.medium,
      });
    }
  }
}
