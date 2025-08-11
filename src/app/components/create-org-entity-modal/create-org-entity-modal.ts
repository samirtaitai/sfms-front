import { Component, inject } from '@angular/core';
import { MatProgressBar } from "@angular/material/progress-bar";
import { MatDialogActions, MatDialogContent, MatDialogRef } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../../core/services/customer';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-create-org-entity-modal',
  imports: [
    ReactiveFormsModule,
    MatProgressBar,
    MatDialogContent,
    MatInputModule,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './create-org-entity-modal.html',
  styleUrl: './create-org-entity-modal.css'
})
export class CreateOrgEntityModal {
  readonly dialogRef = inject(MatDialogRef<CreateOrgEntityModal>);
  private _formBuilder = inject(FormBuilder);
  loading = false;

  constructor(private customerSrv: Customer) { }

  oeFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    code: ['', Validators.required],
    debtor: ['', Validators.required]
  });

  createOe() {
    this.loading = true;
    const { name, code, debtor } = this.oeFormGroup.value;
    if (name && code && debtor) {
      this.customerSrv.setOrgName(name);
      this.customerSrv.setOrgCode(code);
      this.customerSrv.setOrgDebtor(debtor);
      this.customerSrv.createOe();
    }

    setTimeout(() => {
      this.loading = false;
      this.oeFormGroup.reset();
      this.dialogRef.close({ name, code, debtor });
    }, 2500);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
