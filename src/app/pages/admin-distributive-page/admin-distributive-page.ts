import { Component, inject } from '@angular/core';
import { NavBar } from "../../components/nav-bar/nav-bar";
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { FormBuilder } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-admin-distributive-page',
  standalone: true,
  imports: [
    CommonModule,
    NavBar,
    MatCard,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    RouterLink,
    MatInputModule,

],
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

  selectedEntity: string = '';

  onEntityChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedEntity = selectElement.value;
    console.log('Selected entity:', this.selectedEntity);
    // Aquí puedes disparar lógica de filtrado o navegación
  }


  activeTab: string = 'customer';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
