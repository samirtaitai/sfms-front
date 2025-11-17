import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { INTERNAL_ROUTES } from '../../../consts/routes';
import { OesService } from '../oes.service';

@Component({
  selector: 'app-create-org-entity',
  templateUrl: './create-org-entity.html',
  standalone:false,
  styleUrl: './create-org-entity.css'
})
export class CreateOrgEntity {
  private _formBuilder = inject(FormBuilder);
  oeFormGroup: any;
  toastMessage = '';
  showToast = false;
  loading = false;
  private router = inject(Router);

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
          this.router.navigate([INTERNAL_ROUTES.ORG.PATH]);
        }
      })
    }
  }
}
