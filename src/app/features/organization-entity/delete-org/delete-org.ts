import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OesService } from '../oes.service';

export interface DialogData {
  tittle: string;
  text: string;
  oeId: string
}

@Component({
  selector: 'app-delete-org',
  standalone: false,
  templateUrl: './delete-org.html',
  styleUrl: './delete-org.css'
})
export class DeleteOrg {
  loading = false;
  readonly dialogRef = inject(MatDialogRef<DeleteOrg>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  constructor(private oesSrv: OesService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteOe() {
    this.loading = true;
    this.oesSrv.delete(this.data.oeId).subscribe({
      next: () => {
        this.loading = false;
        this.dialogRef.close(true);
      }
    })
  }
}
