import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { NavBar } from "../../../components/nav-bar/nav-bar";
import { Toast } from "../../../components/toast/toast";
import { Spinner } from "../../../components/spinner/spinner";
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorageRegions } from '../../../services/storage-regions';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { MatFormField, MatInputModule, MatLabel } from "@angular/material/input";
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-create-storage-region',
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    NavBar,
    Toast,
    Spinner,
    MatCard,
    MatCardHeader,
    MatIcon,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatLabel,
    MatButton
  ],
  standalone: true,
  templateUrl: './create-storage-region.html',
  styleUrl: './create-storage-region.css',
  providers: [StorageRegions]
})
export class CreateStorageRegion {
  private router = inject(Router);
  private _formBuilder = inject(FormBuilder);

  loading = false;
  showToast = false;
  toastMessage = '';
  regionFormGroup!: FormGroup;
  backHistory() {
    history.back();
  }
  constructor(
    private storageRegionsSrv: StorageRegions,
    private cdr: ChangeDetectorRef,
  ) {
    this.regionFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      regionCode: ['', Validators.required],
    });
  }

  showSuccessToast(message: string): void {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 10000);
  }


  createStorageRegion() {
    this.loading = true;
    const { name, regionCode } = this.regionFormGroup.value;
    if (name && regionCode) {
      this.storageRegionsSrv.create({ name, regionCode }).subscribe({
        next: (response) => {
          this.loading = false;
          this.showSuccessToast('Storage Region Created');
          this.regionFormGroup.reset();
          this.cdr.detectChanges();
          this.router.navigate(['/storage-regions']);
        }
      });
    }
  }

}
