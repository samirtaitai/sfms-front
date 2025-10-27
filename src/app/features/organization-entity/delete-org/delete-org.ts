import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { OesService } from '../oes.service';

export interface DialogData {
  tittle: string;
  text: string;
  oeId: string
}

@Component({
  selector: 'app-delete-org',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
  ],
  providers: [OesService],
  templateUrl: './delete-org.html',
  styleUrl: './delete-org.css'
})
export class DeleteOrg {
  loading = false;

  constructor(private oesSrv: OesService) { }

  readonly dialogRef = inject(MatDialogRef<DeleteOrg>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

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
