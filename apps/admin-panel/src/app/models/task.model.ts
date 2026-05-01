export const RISK_I18N: string = 'Risk';

export enum Categories {
  home = 'Home',
  beauty = 'Beauty',
  work = 'Work',
  food = 'Food',
}

export enum Priority {
  low = 'Low',
  medium = 'Medium',
  high = 'High',
}

export interface ITask {
  category: Categories;
  title: string;
  priority: Priority;
}
