import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly menuItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Life Planner', icon: 'account_tree', route: '/life-planner' },
    { label: 'Knowledge Base', icon: 'auto_stories', route: '/knowledge' },
    { label: 'Admin Panel', icon: 'post_add', route: '/admin' },
  ];
}
