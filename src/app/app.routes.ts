import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'new-task', loadComponent: () => import('./pages/admin/new-task/new-task.component').then(m => m.NewTaskComponent) },
      { path: 'all-tasks', loadComponent: () => import('./pages/admin/all-tasks/all-tasks.component').then(m => m.AllTasksComponent) },
    ],
  },
  { path: '**', redirectTo: '' },
];
