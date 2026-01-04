import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AdminSidebarComponent } from '../../../shared/components/admin-sidebar/admin-sidebar.component';
import { AdminTopbarComponent } from '../../../shared/components/admin-topbar/admin-topbar.component';
import { TaskStoreService } from '../../../shared/services/task-store.service';

type Task = {
    taskId: string;
    dueDate: string;
    title: string;
    description: string;
}
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [CommonModule, AdminSidebarComponent, AdminTopbarComponent, FormsModule],
  templateUrl: './new-task.component.html',
})
export class NewTaskComponent {
    
    task: Task = {
        taskId: '',
        dueDate: '',
        title: '',
        description: ''
    };
    taskList = signal<Task[]>([]);

    constructor(public taskStore: TaskStoreService, public router: Router) {
    }

    //save task function
    saveTask() {
        this.taskStore.addTask(this.task);
        //reset form
        this.task = {
            taskId: '',
            dueDate: '',
            title: '',
            description: ''
        };

        this.router.navigate(['/admin/all-tasks']);
    }
}
