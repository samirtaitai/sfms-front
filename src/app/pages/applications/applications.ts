import { Component } from '@angular/core';
import { NavBar } from "../../components/nav-bar/nav-bar";
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from '@angular/router';
import { Application } from '../../core/services/application/application';

@Component({
  selector: 'app-applications',
  imports: [
    NavBar,
    MatCard,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  standalone: true,
  templateUrl: './applications.html',
  styleUrl: './applications.css'
})
export class Applications {
  applications: any = [];
  constructor(private application: Application) {
    this.applications = this.application.getapplications();
  }

  backHistory() {
    history.back();
  }
}
