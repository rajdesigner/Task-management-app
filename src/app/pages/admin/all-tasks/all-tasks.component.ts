import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskStoreService } from '../../../shared/services/task-store.service';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-tasks.component.html',
})
export class AllTasksComponent {
  taskList = this.taskStore.taskList;

  constructor(private taskStore: TaskStoreService) {}
}
