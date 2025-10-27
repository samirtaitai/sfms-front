import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { ApplicationService } from '../application.service';
import { MatButtonModule } from '@angular/material/button';

export interface DialogData {
  tittle: string;
  text: string;
  applicationId: string
}

@Component({
  selector: 'app-delete-aplication',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
  ],
  providers: [ApplicationService],
  templateUrl: './delete-aplication.html',
  styleUrl: './delete-aplication.css'
})
export class DeleteAplication {
  loading = false;

  constructor(private applicationSrv: ApplicationService) { }

  readonly dialogRef = inject(MatDialogRef<DeleteAplication>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

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
