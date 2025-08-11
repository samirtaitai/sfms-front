import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Auth } from '../../core/services/auth';
import { CommonModule } from '@angular/common';

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
