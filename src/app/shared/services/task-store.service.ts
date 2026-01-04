import { Injectable, signal } from '@angular/core';

export type Task = {
  taskId: string;
  dueDate: string;
  title: string;
  description: string;
};

@Injectable({
  providedIn: 'root',
})
export class TaskStoreService {
  private readonly _taskList = signal<Task[]>([]);
  readonly taskList = this._taskList.asReadonly();

  addTask(task: Task) {
    this._taskList.update((tasks) => [...tasks, task]);
  }
}
