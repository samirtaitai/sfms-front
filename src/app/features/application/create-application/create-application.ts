import { Component } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatInputModule } from "@angular/material/input";
import { NavBar } from "../../../components/nav-bar/nav-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatCard, MatCardModule } from "@angular/material/card";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Application } from '../service/application'; // Adjust the path as needed

@Component({
  selector: 'app-create-application',
  imports: [
    MatListModule,
    MatButtonToggleModule,
    MatInputModule,
    NavBar,
    MatIconModule,
    MatCard,
    MatCardModule,
    ReactiveFormsModule,
    MatButton
  ],
  templateUrl: './create-application.html',
  styleUrl: './create-application.css'
})
export class CreateApplication {
  applicationForm: any
  workflowForm: any;
  applicationFlows: any = [];

  constructor(private _formBuilder: FormBuilder, private application: Application) {
    this.workflowForm = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.applicationForm = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }


  backHistory(): void {
    window.history.back();
  }

  addAcction() {
    if (this.workflowForm.valid) {
      this.applicationFlows.push(this.workflowForm.value);
      this.workflowForm.reset();
    } else {
      console.error('Form is invalid');
    }
  }

  deleteAction(file: any) {
    const index = this.applicationFlows.indexOf(file);
    if (index > -1) {
      this.applicationFlows.splice(index, 1);
    }
  }

  createApplication() {
    const application = {
      name: this.applicationForm.value.name,
      description: this.applicationForm.value.description,
      flows: this.applicationFlows
    };
    console.log('Creating application:', application);
    if (application.flows.length > 0 && this.applicationForm.valid) {
      this.application.createApplication(application.name, application.description, this.applicationFlows);
      this.workflowForm.reset();
      this.applicationForm.reset();
      this.applicationFlows = [];
      alert('Application created successfully!');
    } else {
      alert('Please add at least one flow before creating the application.');
    }
  }
}
