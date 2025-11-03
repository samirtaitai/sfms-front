import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { ApplicationService } from '../application.service';

interface DialogData {
  tittle: string;
  text: string;
  consumerId: string
}

@Component({
  selector: 'app-delete-consumer',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
  ],
  providers: [ApplicationService],
  templateUrl: './delete-consumer.html',
  styleUrl: './delete-consumer.css'
})
export class DeleteConsumer {
  loading = false;

  constructor(private customerSrv: ApplicationService) { }

  readonly dialogRef = inject(MatDialogRef<DeleteConsumer>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteCustomer() {
    this.loading = true;
    this.customerSrv.deleteConsumer(this.data.consumerId).subscribe({
      next: () => {
        this.loading = false;
        this.dialogRef.close(true);
      }
    })
  }
}
