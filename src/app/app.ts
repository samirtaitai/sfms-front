import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, NavigationStart, NavigationEnd, RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb';
import { NavBar } from "./components/nav-bar/nav-bar";
import { INTERNAL_ROUTES } from './consts/routes';
import { navBarVisibleOnRoutes } from './app.config';
// ...otros imports

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    Footer,
    BreadcrumbComponent,
    NavBar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sfms-front');
  isLoading = false;
  isSidebarOpen = true;
  showNavbar = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd) {
        this.isLoading = false;
        this.showNavbar = this.shouldShowNavbar(event.urlAfterRedirects);
      }
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  private shouldShowNavbar(url: string): boolean {
    return navBarVisibleOnRoutes.some(path => url.startsWith(path));
  }
}