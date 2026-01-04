import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AdminSidebarComponent } from '../../shared/components/admin-sidebar/admin-sidebar.component';
import { AdminTopbarComponent } from '../../shared/components/admin-topbar/admin-topbar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AdminSidebarComponent, AdminTopbarComponent],
  templateUrl: './admin.component.html',
})
export class AdminComponent {
    constructor() {
    }
}
