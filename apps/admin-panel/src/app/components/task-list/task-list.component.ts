import { Component, inject, OnInit } from '@angular/core';
import { Categories } from '../../models/task.model';
import { DistributeColorPipe } from '../../pipes/distribute-color.pipe';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [DistributeColorPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  public randomOffset = 0;
  public tasksMap = new Map();
  private tasksService = inject(TasksService);

  protected categoriesArray = Object.values(Categories).filter(
    (v) => typeof v === 'string'
  );

  ngOnInit() {
    this.randomOffset = Math.floor(Math.random() * 360);

    this.tasksService.getTasks().subscribe((tasks) => {
      this.categoriesArray.forEach((category) => {
        this.tasksMap.set(
          category,
          tasks.filter((task) => task.category === category)
        );
      });
    });
  }

  getRandomColor() {
    return `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
  }

  getNextDay(item: number): Date {
    const date = new Date();
    date.setDate(date.getDate() + +item);
    return date;
  }
}
