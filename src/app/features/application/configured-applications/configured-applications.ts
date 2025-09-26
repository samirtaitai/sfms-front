import { Component } from '@angular/core';
import { NavBar } from "../../../components/nav-bar/nav-bar";
import { MatCard, MatCardActions, MatCardHeader, MatCardSubtitle } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-configured-applications',
  standalone: true,
  imports: [
    NavBar, 
    MatCard, 
    MatCardHeader, 
    MatCardSubtitle, 
    MatCardActions, 
    MatIconModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './configured-applications.html',
  styleUrl: './configured-applications.css'
})
export class ConfiguredApplications {

  configuredApps = [
    { name: 'App One', description: 'Description for App One' },
    { name: 'App Two', description: 'Description for App Two' },
    { name: 'App Three', description: 'Description for App Three' }
  ];

}
