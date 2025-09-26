import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, MatToolbarModule, RouterLink, MatIconModule],
  standalone: true,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

  constructor(private authSrv: Auth) {

  }

  isAdminUser() {
    return this.authSrv.user?.rol === 'admin' ? true : false;
  }

  logOut() {
    this.authSrv.logOut();
  }

}
