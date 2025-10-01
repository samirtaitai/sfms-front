import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Auth } from '../../core/services/auth';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterLink,
    MatIconModule,
  ],
  standalone: true,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  isHomeRoute = false;

  constructor(private authSrv: Auth, private location: Location, private router: Router) {
    this.router.events.subscribe(() => {
      this.isHomeRoute = this.router.url === '/home';
    });

  }

  goBack(): void {
    this.location.back();
  }


  isAdminUser() {
    return this.authSrv.user?.rol === 'admin' ? true : false;
  }

  logOut() {
    this.authSrv.logOut();
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }


}
