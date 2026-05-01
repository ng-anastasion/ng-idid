import { Component, OnInit } from '@angular/core';
import { Categories, ITask, Priority } from '../../models/task.model';
import { DistributeColorPipe } from '../../pipes/distribute-color.pipe';

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

  protected categoriesArray = Object.values(Categories).filter(
    (v) => typeof v === 'string'
  );

  private tasks: ITask[] = [
    {
      category: Categories.home,
      title: 'Помыть полы',
      priority: Priority.medium,
    },
    {
      category: Categories.work,
      title: 'Резюме',
      priority: Priority.high,
    },
    {
      category: Categories.beauty,
      title: 'Сходить в спортзал',
      priority: Priority.high,
    },
    {
      category: Categories.food,
      title: 'Составить меню',
      priority: Priority.medium,
    },
  ];

  ngOnInit() {
    this.randomOffset = Math.floor(Math.random() * 360);

    this.categoriesArray.forEach((category) => {
      this.tasksMap.set(
        category,
        this.tasks.filter((task) => task.category === category)
      );
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
