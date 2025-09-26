import { Component } from '@angular/core';
import { Stepper } from "../../../components/stepper/stepper";
import { NavBar } from "../../../components/nav-bar/nav-bar";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-onboard-application',
  imports: [
    Stepper,
    NavBar,
    MatIconModule,
    MatButtonModule
  ],
  standalone: true,
  templateUrl: './onboard-application.html',
  styleUrl: './onboard-application.css'
})
export class OnboardApplication {
  backHistory() {
    history.back();
  }
}
