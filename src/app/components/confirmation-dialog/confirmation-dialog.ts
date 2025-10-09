import { Component, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

export interface DialogData {
  tittle: string;
  text: string;
}

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './confirmation-dialog.html',
  styleUrl: './confirmation-dialog.css'
})
export class ConfirmationDialog {

  readonly dialogRef = inject(MatDialogRef<ConfirmationDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly confirmation = model(true);

  onNoClick(): void {
    this.dialogRef.close();
  }

}
