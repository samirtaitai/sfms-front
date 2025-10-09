import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { NavBar } from "../../../components/nav-bar/nav-bar";
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { OesService } from '../oes.service';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Spinner } from "../../../components/spinner/spinner";
import { Toast } from "../../../components/toast/toast";

@Component({
  selector: 'app-create-org-entity',
  imports: [
    CommonModule,
    MatCard,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    NavBar,
    MatInputModule,
    MatButton,
    RouterLink,
    Spinner,
    Toast
],
  providers: [OesService],
  templateUrl: './create-org-entity.html',
  styleUrl: './create-org-entity.css'
})
export class CreateOrgEntity {
  private _formBuilder = inject(FormBuilder);
  oeFormGroup: any;
  toastMessage = '';
  showToast = false;
  loading = false;
  constructor(private oesSrv: OesService, private cdr: ChangeDetectorRef) {
    this.oeFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      debtor: ['', Validators.required]
    });
  }

  showSuccessToast(message: string): void {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 10000);
  }

  createOe() {
    this.loading = true;
    const { name, code, debtor } = this.oeFormGroup.value;
    if (name && code && debtor) {
      this.oesSrv.create({ name, code, debtor: Number(debtor) }).subscribe({
        next: (response) => {
          this.oeFormGroup.reset();
          this.loading = false;
          this.showSuccessToast('Organization Entity Created Successfully');
          this.cdr.detectChanges();
        }
      })
    }
  }
}
