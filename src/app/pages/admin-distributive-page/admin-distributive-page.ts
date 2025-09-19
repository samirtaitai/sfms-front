import { Component, inject } from '@angular/core';
import { NavBar } from "../../components/nav-bar/nav-bar";
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { FormBuilder } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-admin-distributive-page',
  standalone: true,
  imports: [NavBar, MatCard, MatCardModule, MatButtonModule, MatIconModule, MatSidenavModule, RouterLink],
  templateUrl: './admin-distributive-page.html',
  styleUrl: './admin-distributive-page.css'
})
export class AdminDistributivePage {
  private _formBuilder = inject(FormBuilder);

  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
