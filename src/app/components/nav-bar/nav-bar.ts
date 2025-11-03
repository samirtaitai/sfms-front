import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Auth } from '../../core/services/auth';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { OptionsSelect } from "../options-select/options-select";
import { EnvironmentService } from '../../core/services/environment.service';

interface envOptions {
  id: string,
  name: string,
  action: () => void;
}

@Component({
  selector: 'app-nav-bar',
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterLink,
    MatIconModule,
    OptionsSelect
  ],
  standalone: true,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar implements OnInit {
  isHomeRoute = false;
  selectedEnvironment!: envOptions;
  envirionmentsOptions: envOptions[] = [
    { id: '1', name: 'Development', action: () => { this.environmentSrv.setDevEnv() } },
    { id: '2', name: 'Pre Production', action: () => { this.environmentSrv.setPreprodEnv() } },
  ]

  constructor(
    private authSrv: Auth,
    private location: Location,
    private router: Router,
    private environmentSrv: EnvironmentService
  ) {
    this.router.events.subscribe(() => {
      this.isHomeRoute = this.router.url === '/home';
    });
  }

  ngOnInit(): void {
    this.environmentSrv.getSelectedEnvironment().subscribe({
      next: (url) => {
        const optionNumer = this.evaluateEnvironmentOption(url);
        this.selectedEnvironment = this.envirionmentsOptions.filter(option => option.id === optionNumer)[0];
      }
    })
  }

  evaluateEnvironmentOption(envUrl: string): string {
    const devRegex = /dev/i;
    const preProdRegex = /preprod/i;

    if (devRegex.test(envUrl)) {
      return "1";
    } else if (preProdRegex.test(envUrl)) {
      return "2";
    } else {
      return "1";
    }
  }

  goBack(): void {
    this.location.back();
  }

  setEnvironment(selectedEnvId: string) {
    const selectedOption: envOptions = this.envirionmentsOptions.filter(option => option.id === selectedEnvId)[0];
    if (selectedOption)
      selectedOption.action();
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
