import { Component } from '@angular/core';
import { MatSelectionList, MatListModule } from "@angular/material/list";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-create-application',
  imports: [MatSelectionList, MatListModule, MatButtonToggleModule, MatInputModule],
  templateUrl: './create-application.html',
  styleUrl: './create-application.css'
})
export class CreateApplication {

}
