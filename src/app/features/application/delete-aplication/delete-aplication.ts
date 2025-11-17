import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ApplicationService } from '../application.service';

export interface DialogData {
  tittle: string;
  text: string;
  applicationId: string
}

@Component({
  selector: 'app-delete-aplication',
  standalone: false,
  templateUrl: './delete-aplication.html',
  styleUrl: './delete-aplication.css'
})
export class DeleteAplication {
  loading = false;
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  constructor(private applicationSrv: ApplicationService, public dialogRef: MatDialogRef<DeleteAplication>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteCustomer() {
    this.loading = true;
    this.applicationSrv.delete(this.data.applicationId).subscribe({
      next: () => {
        this.loading = false;
        this.dialogRef.close(true);
      }
    })
  }
}
