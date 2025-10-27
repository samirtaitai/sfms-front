import { Component, inject } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatInputModule } from "@angular/material/input";
import { NavBar } from "../../../components/nav-bar/nav-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatCard, MatCardModule } from "@angular/material/card";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Application, ApplicationService } from '../application.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Spinner } from "../../../components/spinner/spinner";
import { Toast } from "../../../components/toast/toast";

@Component({
  selector: 'app-create-application',
  imports: [
    CommonModule,
    MatListModule,
    MatButtonToggleModule,
    MatInputModule,
    NavBar,
    MatIconModule,
    MatCard,
    MatCardModule,
    ReactiveFormsModule,
    MatButton,
    RouterLink,
    Spinner,
    Toast
  ],
  providers: [ApplicationService],
  templateUrl: './create-application.html',
  styleUrl: './create-application.css'
})
export class CreateApplication {
  applicationForm: any
  workflowForm: any;
  applicationFlows: any = [];
  loading = false;
  toastMessage = '';
  showToast = false;
  private router = inject(Router);

  constructor(
    private _formBuilder: FormBuilder,
    private applicationSrv: ApplicationService,
    private cdr: ChangeDetectorRef
  ) {
    this.workflowForm = this._formBuilder.group({
      flowCode: ['', Validators.required],
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

  showSuccessToast(message: string): void {
    this.toastMessage = message;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 10000);
  }

  createApplication() {
    this.loading = true;
    const application: Application = {
      name: this.applicationForm.value.name,
      description: this.applicationForm.value.description,
      applicationFlows: this.applicationFlows
    };
    if (application.applicationFlows.length > 0 && this.applicationForm.valid) {
      this.applicationSrv.create(application).subscribe({
        next: () => {
          this.workflowForm.reset();
          this.applicationForm.reset();
          this.applicationFlows = [];
          this.loading = false;
          this.showSuccessToast('Application Created Successfully');
          this.cdr.detectChanges();
          this.router.navigate(['/applications']);
        },
        complete: () => {
          this.loading = false;
        }
      })
    } else {
      alert('Please add at least one flow before creating the application.');
    }
  }
}
